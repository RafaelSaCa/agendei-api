import serviceUser from "../services/service.user.js";

// async function Listar(req, res) {

//   const name = req.query.name;
//   const doctors = await serviceDoctor.Listar(name);

//   res.status(200).json(doctors);
// }

async function Inserir(req, res) {

  const {name, email, password} = req.body;

  const user = await serviceUser.Inserir(name,email,password);

  res.status(201).json(user);
}


async function Login(req, res) {

  const {email, password} = req.body;

  const user = await serviceUser.Login(email,password);

  if (user.length == 0)
    res.status(401).json({error: "E-mail ou senha inválida"});
  else
   res.status(200).json(user);
}


// async function Editar(req, res) {

//   const id_doctor = req.params.id_doctor;
//   const {name, specialty, icon} = req.body;

//   const doctor = await serviceDoctor.Editar(id_doctor, name,specialty,icon);

//   res.status(200).json(doctor);
// }

// async function Excluir(req, res) {

//   const id_doctor = req.params.id_doctor;

//   const doctor = await serviceDoctor.Excluir(id_doctor);

//   res.status(200).json(doctor);
// }


export default {Inserir, Login};
