import { query } from "../database/sqlite.js";


// async function Listar(name) {

//   let filtro = [];

//   let sql = "select * from doctors ";

//   if (name){
//      sql = sql + "where name like ? ";
//      filtro.push('%' + name + '%');
//   }

//   sql= sql + "order by name"

//   const doctors = await query(sql,filtro);
  
//   return doctors;
// }


async function Inserir(name, email, password) {

  let sql = `insert into users(name, email, password) values(?, ?, ?)
  returning id_user`;

  const user = await query(sql, [name, email, password]);

  return user[0];
}



async function ListarByEmail(email) {

  let sql = `select * from users where email = ?`;

  const user = await query(sql, [email]);

  if (user.length == 0)
    return []
  else
    return user[0];

}
// async function Editar(id_doctor, name, specialty, icon) {

//   let sql = `update doctors set name=?, specialty=?, icon=?
//              where id_doctor = ?`;

//   await query (sql, [name, specialty, icon, id_doctor]);

//   return {id_doctor};
// }

// async function Excluir(id_doctor) {

//   let sql = `delete from doctors where id_doctor = ?`;

//   await query (sql, [id_doctor]);

//   return {id_doctor};
// }

export default {Inserir, ListarByEmail};
