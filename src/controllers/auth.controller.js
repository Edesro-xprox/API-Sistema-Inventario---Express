import jwt from 'jsonwebtoken';
import { validationCredential } from "../services/auth.service.js";

export const login = async (req, res) => {
  const { user, password } = req.body;

  try {
    const userAccess = await validationCredential(user, password);
    console.log(userAccess);
    if (!userAccess) {
      return res.status(400).json({ message: "Credenciales incorrectas" });
    }
    
    //Contenido identificador del token
    const payload = {
      id: userAccess._id // subject (estándar JWT)
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Aquí podrías generar un JWT, pero por ahora devuelves datos simples
    return res.json({
      message: "Login correcto",
      token
    });

  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json({ message: "Error interno" });
  }
};
