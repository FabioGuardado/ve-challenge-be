import Usuario from "../models/Usuario";

export const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const usuarioDetail = await Usuario.findById(req.params.userId);
    if (usuarioDetail) {
      res.json(usuarioDetail);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};

export const createUsuario = async (req, res) => {
  try {
    const newUsuario = new Usuario(req.body);

    newUsuario.save();
    res.json(newUsuario);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al intentar realizar la operación solicitada.");
  }
};
