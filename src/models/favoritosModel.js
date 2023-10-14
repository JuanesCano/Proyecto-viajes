import mongoose from "mongoose";
const {Schema, model} = mongoose;

const favoritoItemSchema = new Schema({
    viaje: {
        type: Schema.Types.ObjectId,
        ref: "viaje"
    },
    
    fecha: {
        type: Date,
        default: Date.now
    }
});

const favoritoSchema = new Schema({
    favoritos: [favoritoItemSchema]
});

export const favoritoModel = model ("favorito", favoritoSchema);
