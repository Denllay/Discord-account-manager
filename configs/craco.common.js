const path = require('path');
const PATH_SRC = path.resolve(`${__dirname}/../src`);
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: {
        writeToDisk: true,
    },
    webpack: {
        alias: {
            '@features': `${PATH_SRC}/features/`,
            '@entities': `${PATH_SRC}/entities/`,
            '@shared': `${PATH_SRC}/shared/`,
            '@widgets': `${PATH_SRC}/widgets/`,
            '@pages': `${PATH_SRC}/pages/`,
            '@app': `${PATH_SRC}/app/`,
        },
        plugins: {
            add: [
                [
                    new CopyPlugin({
                        patterns: [
                            {
                                from: 'src/content.ts',
                                to: '.',
                            },
                            {
                                from: 'src/background.ts',
                                to: '.',
                            },
                        ],
                    }),
                    'append',
                ],
            ],
        },
    },
};
