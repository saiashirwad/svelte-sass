const sveltePreprocess = require('svelte-preprocess');

const preprocessOptions = {
    sourceMap: true, 
    defaults: {
        style: "scss",
    },
    scss: {
        prependData: `@import 'src/styles.scss';`
    },
};

module.exports = {
    preprocess: sveltePreprocess(preprocessOptions),
    preprocessOptions,
}