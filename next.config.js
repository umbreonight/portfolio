const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    // Target must be serverless
    target: 'serverless',

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        includePaths: ['./src'],
    },
})