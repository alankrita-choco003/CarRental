import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.json({ success: false, message: "not authorized" });
        }

        const token = authHeader.split(" ")[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (!payload?.id) {
            return res.json({ success: false, message: "not authorized" });
        }

        const user = await User.findById(payload.id).select("-password");
        if (!user) {
            return res.json({ success: false, message: "not authorized" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.json({ success: false, message: "not authorized" });
    }
};
