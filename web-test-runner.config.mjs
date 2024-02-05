import {importMapsPlugin} from '@web/dev-server-import-maps';

/** @type {import('@web/test-runner').TestRunnerConfig} */
export default {
	nodeResolve: true,
	concurrency: 1,
	testRunnerHtml: testFramework => `
		<!doctype html>
		<html lang="en">
			<head>
				<title>Leaflet Tests</title>
				<meta charset="utf-8">
				<link rel="stylesheet" href="/dist/leaflet.css">
			</head>
			<body>
				<script type="module" src="${testFramework}"></script>
			</body>
		</html>
	`,
	plugins: [
		importMapsPlugin({
			inject: {
				importMap: {
					imports: {
						'leaflet': '/src/Leaflet.js',
						'chai': '/node_modules/chai/chai.js'
					},
				},
			},
		}),
	],
};
