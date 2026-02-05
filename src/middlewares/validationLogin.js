export const validationLogin = (req, res, next) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: "Usuario y contraseña son requeridos" });
  }

  next();
};
