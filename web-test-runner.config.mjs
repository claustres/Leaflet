import {importMapsPlugin} from '@web/dev-server-import-maps';

export default {
	nodeResolve: true,
	plugins: [
		importMapsPlugin({
			inject: {
				importMap: {
					imports: {
						'leaflet': '/src/Leaflet.js',
						'chai': 'https://cdn.jsdelivr.net/npm/@esm-bundle/chai/esm/chai.js'
					},
				},
			},
		}),
	],
};
