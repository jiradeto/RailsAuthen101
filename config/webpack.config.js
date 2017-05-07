const {
    ADMIN_CONFIG
} = require('../admin_app/webpack.config.js');
const {
    WEB_CONFIG
} = require('../web_app/webpack.config.js');


module.exports = [
    ADMIN_CONFIG, WEB_CONFIG
];