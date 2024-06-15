import fileUpload from "express-fileupload";

const fileUploadConfig = fileUpload({
  limit: { fileSize: 5000000 },
  abortOnLimit: true,
  responseOnLimit: " Se ha superado el limite",
});

export default fileUploadConfig;
