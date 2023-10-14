import mongoose from "mongoose";
const { Schema, model } = mongoose;
import bcrypt from "bcrypt";


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "El campo name es requerido"]
    },

    email: {
        type: String,
        required: [true, "El campo email es requerido"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "El campo password es requerido"]
    }
},
    {
        timestampos: true
    });

    //hacer el schema para mandar la contraseña al encrypt

    export const userModel = model ("user", userSchema);

