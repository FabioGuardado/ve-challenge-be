import Municipio from "../models/Municipio.js";

export const getAllMunicipios = async (req, res) => {
  try {
    const municipios = await Municipio.find({});
    res.json(municipios);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};

export const getMunicipiosByDepartamentoId = async (req, res) => {
  try {
    const municipios = await Municipio.find({ departamentoId: req.params.departamentoId });
    res.json(municipios);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};

export const createMunicipio = async (req, res) => {
  try {
    const newMunicipio = new Municipio(req.body);

    newMunicipio.save();
    res.json(newMunicipio);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};