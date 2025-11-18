const { hash } = require('bcryptjs');

exports.doHash = async (value, saltValue) => {
    return hash(value, saltValue);
}