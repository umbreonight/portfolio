const path = require('path')

module.exports = {
    // Target must be serverless
    target: 'serverless',

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        includePaths: ['./src'],
    },
}