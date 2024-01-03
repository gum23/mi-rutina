import { app, PORT } from "./app.js";
import cors from "cors";
import "./db/connect.db.js"

//Uso de cors
app.use(cors());

//route
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server listen in port: ${PORT}`);
});
