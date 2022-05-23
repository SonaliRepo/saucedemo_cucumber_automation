{
    "compilerOptions": {
        "types": [
            "node",
            "webdriverio/sync",
            "@wdio/cucumber-framework"

        ]
    },

    "include": [
        "test/features/step-definitions/*.js",
        "**/*.json",
        "node-modules/@wdio/sync",
        "node-modules/@wdio/cucumber-framework"

    ]
}