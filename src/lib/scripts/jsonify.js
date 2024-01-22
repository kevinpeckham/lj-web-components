import * as fs from "fs";
import { exec } from "child_process";

// helper function to scrub JS
/**
 * @param {string} str
 * @returns {string}
 */
function scrubMinJS(str) {
	return str
		.replaceAll(/(?:\\n)*/g, "") // remove newlines
		.replaceAll(/(?:\\t)+/g, " ") // replace tabs with spaces
		.replaceAll(/(?: ){2}/g, " ") // remove double spaces
		.replaceAll(/(?:; )/g, ";") // remove single space after semicolon
		.replaceAll(/(?:;})/g, "}") // remove semicolons before closing bracket
		.replaceAll(/(?:{ )/g, "{") // remove single space after opening curly braces
		.replaceAll(/(?:} )/g, "}") // remove single space after closing curly braces
		.replaceAll(/(?:\) )/g, ")"); // remove single space after closing parenthesis
}
/**
 * @param {string} str
 * @returns {string}
 */
function scrubJS(str) {
	const regex = new RegExp(String.raw`\n`, "g");
	return str
		.replaceAll(regex, `\n`) // remove newlines
		.replaceAll(`	`, " ".repeat(2)); // replace tabs with double spaces
}

// settings
const folderPath = "src/lib/web-components/";

// iterate through subfolders in a folder
/**
 * @type {{[key: string]: string}[]} data
 * @description array of objects to be written to file
 */
const componentsArray = [];
/**
 * @type {{[key: string]: string}[]} data
 * @description array of objects to be written to file
 */
const documentationArray = [];
fs.readdirSync(folderPath).forEach((folder) => {
	/**
	 * @type {{[key: string]: string}} array
	 * @description array of objects to be written to file
	 */
	const componentObj = {};
	// if the folder is not a file
	if (!folder.includes(".")) {
		// iterate through files in the folder
		fs.readdirSync(`${folderPath}${folder}/`).forEach((file) => {
			// if the file is not a json file or a minified js file
			if (
				!file.includes(".json") &&
				!file.includes(".min") &&
				file.includes(".js")
			) {
				const maxFilePath = `${folderPath}${folder}/${file}`;

				// get the min file name and path
				const minFileName = file.replace(".js", ".min.js");
				const minFilePath = `${folderPath}${folder}/${minFileName}`;

				// minify the file
				exec(
					`terser ${maxFilePath} --config-file terser.json -o ${minFilePath}`,
				);

				// import text of max file
				const maxText = fs.readFileSync(`${maxFilePath}`, "utf8");

				// import text of max file
				const minText = fs.readFileSync(`${minFilePath}`, "utf8");

				// scrub max text
				const scrubbedMaxText = scrubJS(maxText);

				// scrub min text
				const scrubbedMinText = scrubMinJS(minText);

				// overwrite min file with scrubbed text
				fs.writeFileSync(`${minFilePath}`, scrubbedMinText);

				// const name = file.replace(".js", "");
				const name = folder;

				// add max object to array
				componentObj.name = name;
				componentObj.max = scrubbedMaxText;
				componentObj.min = scrubbedMinText;

				// write a json file local to the folder
				fs.writeFileSync(
					`${folderPath}/${folder}/data.json`,
					JSON.stringify(componentObj),
				);
			}

			if (file.includes("documentation.json")) {
				//import text of json file
				const documentation = fs.readFileSync(
					`${folderPath}${folder}/${file}`,
					"utf8",
				);

				// add json object to array
				documentationArray.push(JSON.parse(documentation));
			}
		});
	}

	// push object to data array
	componentsArray.push(componentObj);
});

fs.writeFileSync(
	`src/lib/data/web_components.json`,
	JSON.stringify(componentsArray),
);
fs.writeFileSync(
	`src/lib/data/documentation.json`,
	JSON.stringify(documentationArray),
);
