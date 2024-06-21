const path = require("path");

module.exports = {
	entry: "./src/App.tsx",
	output: {
		filename: "main.tsx",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 3000,
	},
};
