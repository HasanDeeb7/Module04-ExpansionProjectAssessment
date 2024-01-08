import jwt from "jsonwebtoken";
import "dotenv/config";
export function authenticate(req, res, next) {
    const token = req.cookies?.access_token;
    if (token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (decodedToken) {
            console.log(decodedToken);
            req.user = decodedToken;
            return next();
        } else {
      return res.status(403).json({ error: "Error Validation Token" });
    }
} else {
    return res.status(404).json({ error: "No Token Found" });
}
}

export const checkRoles = (roles) => (req, res, next) => {
    const role = req.user.role;
    console.log(role);
    if (roles.includes(role)) {
        next();
    } else {
    return res.status(401).json({ error: "Forbidden" });
  }
};
