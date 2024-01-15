import * as fs from "fs";
import { exec } from "child_process";

fs.readdirSync("src/lib/web-components/").forEach((file) => {
	if (file.endsWith(".js") && !file.endsWith(".min.js")) {
		const inputFile = `src/lib/web-components/${file}`;
		const outputFile = `src/lib/web-components/${file.replace(
			".js",
			".min.js",
		)}`;
		exec(`terser ${inputFile} --config-file terser.json -o ${outputFile}`);
	}
});
