import repositoryUser from "../repositories/respository.user.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";
// async function Listar(name) {

//   const doctors = await repositoryDoctor.Listar(name);

//   return doctors;
// }

async function Inserir(name, email, password) {

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await repositoryUser.Inserir(name, email, hashPassword);

  user.token = jwt.CreateToken(user.id_user);

  return user;
}

async function Login(email, password) {

  const user = await repositoryUser.ListarByEmail(email);

  if (user.length == 0) 
    return [];

  else {
    if (await bcrypt.compare(password, user.password)) {
      delete user.password;

      user.token = jwt.CreateToken(user.id_user);
      return user;

    } else 
      return [];
  }
}
// async function Editar(id_doctor, name,specialty,icon) {

//   const doctor = await repositoryDoctor.Editar(id_doctor, name,specialty,icon);

//   return doctor;
// }

// async function Excluir(id_doctor) {

//   const doctor = await repositoryDoctor.Excluir(id_doctor);

//   return doctor;
// }

export default { Inserir, Login };
