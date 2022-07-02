//middleware structure
const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const tokenIn = req.headers['authorization'];
    if (!tokenIn) {
        return res.status(401).json({
            meta: {
                status: 401,
                message: 'No token provided'
            }
        });
    }
    jwt.verify(tokenIn, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                meta: {
                    status: 401,
                    message: 'Invalid token'
                }
            });
        } else {
            next();
        }
    })




}
module.exports = verifyToken;