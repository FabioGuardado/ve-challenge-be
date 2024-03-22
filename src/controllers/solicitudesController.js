import Solicitud from "../models/Solicitud.js";

export const getAllSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.find({});
    res.json(solicitudes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};

export const getSolicitudById = async (req, res) => {
  try {
    const solicitudDetail = await Solicitud.findById(req.params.solicitudId);
    if (solicitudDetail) {
      res.json(solicitudDetail);
    } else {
      res.status(404).json({ message: "Solicitud no encontrada" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};

export const createSolicitud = async (req, res) => {
  try {
    console.log(req.files);

    const incomingSolicitudData = {
      ...req.body,
      imagenPerfilUrl: "",
      documentoIdentificacionUrl: "",
    };

    const newSolicitud = new Solicitud(incomingSolicitudData);
    if (newSolicitud) {
      newSolicitud.save();
      res.json(newSolicitud);
    } else {
      res.status(400).send("Faltan atributos necesarios para crear la solicitud.");
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};
