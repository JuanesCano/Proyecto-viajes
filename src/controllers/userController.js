import { encryptPassword } from "../helpers/encryptPassword.js";
import { generateToken } from "../helpers/generateToken.js";
import { response } from "../helpers/response.js";
import { userModel } from "../models/userModel.js";

const userCtrl = {};

userCtrl.listar = async (res, res) => {
    try {
        const user = userModel.find();
        response(res, 200, true, user, "Lista de usuarios")
    } catch (error) {
        console.log("Error en listar", error.message)
    }
};

userCtrl.register = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const user = await userModel.findOne({ email })

        if(user){
            return response(res, 409, false, "", "El correo ya existe en un usuario existente")
        };

        const passwordEncrypt = encryptPassword(password);

        const newUser = new userModel({email, name, password: passwordEncrypt});

        await newUser.save();

        const token = generateToken({user: newUser._id});

        response(res, 201, true, {...newUser._doc, token, password: null}, "Usuario creado con exito")
    } catch (error) {
        response(res, 500, false, "", error.message)
    }
};

userCtrl.login = async (req, res) => {
    try {
        const {password, email} = req.body;
        const user = await userModel.findOne({email});

        if(user && user.matchPassword(password)){
            const token = generateToken({user: user._id})
            return response(res, 200, true, {...user._doc, password: null, token}, "Bienvenido")
        };

        response(res, 400, false, "", "Email o Password incorrectos")
    } catch (error) {
        response(res, 500, false, "", error.message)
    }
};

userCtrl.update = async (req, res) => {
    try {
        const {password, email} = req.body;
        const user = await userModel.findOne({email});

        if(user && user.matchPassword(password)){
            await user.updateOne({...req.body})
            return response(res, 200, true, user, "Usuario actualizado")
        };

        response(res, 400, false, "", "Email o Password incorrectos")
    } catch (error) {
        response(res, 500, false, "", error.message)
    }
};

userCtrl.delete = async (req, res) => {
    try {
        const {password, email} = req.body;
        const user = await userModel.findOne({email});

        if(user && user.matchPassword(password)){
            await user.deleteOne()
            return response(res, 200, true, "", "Usuario eliminado")
        };

        response(res, 400, false, "", "Email o Password incorrectos")
    } catch (error) {
        response(res, 500, false, "", error.message)
    }
};

export default userCtrl;
