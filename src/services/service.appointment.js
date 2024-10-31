import repositoryAppointment from "../repositories/respository.appointment.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";


async function ListarByUser(id_user) {

  const appointments = await repositoryAppointment.ListarByUser(id_user);

  return appointments;
}

async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour) {
  
  const appointment = await repositoryAppointment.Inserir(id_user, id_doctor, id_service, 
                                                          booking_date, booking_hour);
  
  return appointment;
}

async function Excluir(id_user, id_appointment) {
  
  const appointment = await repositoryAppointment.Excluir(id_user, id_appointment, );
  
  return appointment;
}

export default { ListarByUser, Inserir, Excluir};
