import { unAuthenticatedError } from "../errors/index.js";
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        throw new unAuthenticatedError('Authentication Invalid');
    }
    
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        const testUser = payload.userId === '64462643a98cfacbd39ffd1a';
        req.user = { userId: payload.userId, testUser}
        next()
    } catch (error) {
        throw new unAuthenticatedError('Authentication Invaid')
    }
}

export default auth