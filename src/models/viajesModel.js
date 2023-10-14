import mongoose from "mongoose";
const { Schema, model } = mongoose;

const viajeSchema = new Schema({
    title: {
        type: String,
        required: [true, "El campo title es requerido"]
    },

    description: {
        type: String,
        required: [true, "El campo description es requerido"]
    },

    imgUrl: {
        type: String,
        default: null,
    },

    public_id: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
},
    {
        timestamps: true
    });

    viajeSchema.methods.setImg = function setImg({secure_url, public_id}){
        this.imgUrl = secure_url;
        this.public_id = public_id;
    };

    export const viajeModel = model ("viaje", viajeSchema);