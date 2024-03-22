import Departamento from "../models/Departamento.js";

export const getAllDepartamentos = async (req, res) => {
  try {
    const departamentos = await Departamento.find({});
    res.json(departamentos);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};

export const createDepartamento = async (req, res) => {
  try {
    const newDepartamento = new Departamento(req.body);

    newDepartamento.save();
    res.json(newDepartamento);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};