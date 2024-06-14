import { pool } from "../database/connections.js";

const create = async ({
  email,
  nombre,
  password,
  anos_experiencia,
  especialidad,
  foto,
  estado,
}) => {
  const query = {
    text: `
        INSERT INTO SKATERS (email,nombre,password,anos_experiencia,especialidad,foto,estado)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `,
    values: [
      email,
      nombre,
      password,
      anos_experiencia,
      especialidad,
      foto,
      estado,
    ],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};
const findOneByEmail = async (email) => {
  const query = {
    text: `
        SELECT * FROM SKATERS
        WHERE EMAIL = $1
        
        `,
    values: [email],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

//Develvemos
export const SkaterModel = {
  findOneByEmail,
  create,
};
