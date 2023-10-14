import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const deleteImg = async (nameImage) => {
    try {
        await promisify(fs.unlink)(path.resolve(__dirname, '../storage/imgs', nameImage));
        console.log(`Archivo ${nameImage} eliminado correctamente.`)
    } catch (error) {
        console.error(`Error al eliminar el archivo ${nameImage}: `, error)
    }
}