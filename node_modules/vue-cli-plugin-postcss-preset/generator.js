module.exports = (api, opts, rootOptions) => {
    const utils = require('./helper')(api);

    api.onCreateComplete(() => {
        utils.updatePostcssConfig(config => {
            config.plugins = config.plugins || {};
            config.plugins['postcss-preset-env'] = {
                stage: opts.stage
            };
            return config;
        })
    });
};