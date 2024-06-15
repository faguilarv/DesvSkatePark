import "dotenv/config";
import express from "express";
import fileUploadConfig from "./utils/fileUploadConfig.js";

import skaterRouter from "./routes/skater.route.js";

const app = express();

//para habilitar req.body crear este middleware
app.use(express.json());
//si mandan formularios nativos de html usar urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(fileUploadConfig);

//rutas /skaters
app.use("/api/v1/skaters", skaterRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Srv_Conectado exitosamente al puerto ${PORT}`);
});
