module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "src/testing/base.spec.ts" },
            { pattern: "src/**/*.+(ts|html)" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        karmaTypescriptConfig: {
            bundlerOptions: {
                entrypoints: /\.spec\.ts$/,
                transforms: [
                    require("karma-typescript-angular2-transform"),
                    require("karma-typescript-es6-transform")()
                ]
            },
            compilerOptions: {
                lib: ["ES2015", "DOM"]
            },
            coverageOptions: {
                instrumentation: true
            }
        },

        reporters: ["progress", "karma-typescript"],

        singleRun: process.env['CI']
          ? true
          : false,

        browsers: process.env['CI']
          ? ["PhantomJS"]
          : ["Chrome"]
    });
};
