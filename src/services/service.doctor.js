import repositoryDoctor from "../repositories/respository.doctor.js";

async function Listar(name) {
  
  const doctors = await repositoryDoctor.Listar(name);
  
  return doctors;
}

export default { Listar };
