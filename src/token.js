import jwt from "jsonwebtoken";

const secretToken = "testeToken";

function CreateToken(id_user) {
  const token = jwt.sign({ id_user }, secretToken, {
    expiresIn: 999999,
  });

  return token;
}


function ValidateToken(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).json({ error: "Token não informado" });

  const [bearer, token] = authToken.split(" "); //separa a string quando encontra espaço em branco no token

  jwt.verify(token, secretToken, (err, tokenDecoded) => {

    if (err) 
      return res.status(401).json({ error: "Token inválido!" });

    req.id_user = tokenDecoded.id_user;
    
    next();
  });
}

export default { CreateToken, ValidateToken };
