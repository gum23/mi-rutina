import express from "express";
import cors from "cors";

//port where the serer listens
const PORT = 3000;

//Create app
const app = express();

//Uso de cors
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listen in port: ${PORT}`);
})