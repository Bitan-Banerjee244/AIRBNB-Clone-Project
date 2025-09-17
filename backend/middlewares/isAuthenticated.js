import jwt from "jsonwebtoken"

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ message: "User is not authorized" });
        }
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(`JWT Verification Error : ${error}`);
        return res.status(400).json({
            success: false,
            message: "JWT Verification Error",
            error: error
        })
    }
}

export default isAuthenticated;