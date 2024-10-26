import repositoryDoctor from "../repositories/respository.doctor.js";

async function Listar() {
  
  const doctors = await repositoryDoctor.Listar();
  
  return doctors;
}

export default { Listar };
