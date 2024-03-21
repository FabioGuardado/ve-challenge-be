import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombres: String,
  apellidos: String,
  email: String,
  telefono: String,
  tipoIdentificacion: String,
  documentoIdentificacionUrl: String,
  departamento: String,
  municipio: String,
  direccion: String,
  ingresosMensuales: Number,
  imagenPerfilUrl: String,
}, { timestamps: true });

export default model('Usuario', usuarioSchema);