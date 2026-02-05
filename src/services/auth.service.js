import findGetByUserName from '../repositories/auth.repository.js';
import bcrypt from 'bcrypt';

export const validationCredential = async (user, password) => {
  let userFound = await findGetByUserName(user);
  console.log('userFound',userFound);
  if(!userFound) return null;
  
  const passwordMatch = await bcrypt.compare(password, userFound.password);
  console.log('passwordMatch', passwordMatch);
  if(!passwordMatch) return null;

  return userFound;
};
