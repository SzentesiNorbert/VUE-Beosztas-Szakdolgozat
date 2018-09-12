module.exports = [
    {
        type: 'list',
        name: 'stage',
        message: 'Which stage for CSS features to polyfill?',
        choices: [
            { name: 'Stage 0', value: 0 },
            { name: 'Stage 1', value: 1 },
            { name: 'Stage 2', value: 2 },
            { name: 'Stage 3', value: 3 },
            { name: 'Stage 4', value: 4 },
            { name: 'Disable stage', value: false },
        ],
        default: 2,
    }
];