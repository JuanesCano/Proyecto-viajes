import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
    try {
        const token = jwt.sign(payload, "hola", {
            expiresIn: "30d"
        });

        return token;
    } catch (error) {
        console.log("Error en generateToken", error.message)
    }
}