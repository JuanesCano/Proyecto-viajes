import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/ejemplo';

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(uri);
        console.log('base de datos conectada', db.connection.name);
    }
    catch (error) { console.log('error al conectar con la base de datos', error.message); }
}