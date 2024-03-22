import { Schema, model } from "mongoose";

const municipioSchema = new Schema({
  nombre: String,
  departamentoId: String,
}, { timestamps: true });

export default model('Municipio', municipioSchema);