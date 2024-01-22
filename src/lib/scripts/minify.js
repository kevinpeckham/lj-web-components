import * as fs from "fs";
import { exec } from "child_process";

// iterate through subfolders in a folder
fs.readdirSync("src/lib/web-components/").forEach((folder) => {
	// if the folder is not a file
	if (!folder.includes(".")) {
		// iterate through files in the folder
		fs.readdirSync(`src/lib/web-components/${folder}/`).forEach((file) => {
			// if the file is a js file and not a minified js file
			if (file.endsWith(".js") && !file.endsWith(".min.js")) {
				// get the input and output file paths
				const inputFile = `src/lib/web-components/${folder}/${file}`;
				const outputFile = `src/lib/web-components/${folder}/${file.replace(
					".js",
					".min.js",
				)}`;

				// minify the file
				exec(`terser ${inputFile} --config-file terser.json -o ${outputFile}`);
			}
		});
	}
});
