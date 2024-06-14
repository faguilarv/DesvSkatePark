import bcryptjs from "bcryptjs";
import { SkaterModel } from "../models/skaters.models.js";
import { generateToken, verifyToken } from "../utils/jwtUtils.js";

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { email, nombre, password, anos_experiencia, especialidad } =
      req.body;
    if (!email || !nombre || !password || !anos_experiencia || !especialidad) {
      return res
        .status(400)
        .json({ ok: false, msg: "All fields are required" });
    }

    const skater = SkaterModel.findOneByEmail(email);
    if (skater) {
      return res
        .status(409)
        .json({ ok: false, msg: "Skater already exists try with other " });
    }
    //creamos unos saltos salt o jump
    const jump = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, jump);
    const newSkater = await SkaterModel.create({
      email,
      nombre,
      password: hashedPassword,
      anos_experiencia,
      especialidad,
      foto,
      estado,
    });

    return res.status(201).json({ ok: true, msg: "newUser Skater Ok!!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Server error try again o later",
    });
  }
};

const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Server error try again o later",
    });
  }
};

export const SkaterController = {
  register,
  login,
};
