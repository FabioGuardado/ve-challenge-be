import { Schema, model } from "mongoose";

const departamentoSchema = new Schema({
  nombre: String,
}, { timestamps: true });

export default model('Departamento', departamentoSchema);