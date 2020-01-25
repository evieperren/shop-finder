const {
    id,
    name,
    type,
    location
} = require('../../package.json')

const shop = (req, res) => {
    res.json({
        id,
        name,
        type,
        location
    })
}
module.exports = shop