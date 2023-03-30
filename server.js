require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')


const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use(cors());
const cleanRouter = require("./Routes/cleanRouter");
app.use("/clean", cleanRouter);

mongoose.set("strictQuery", false);
mongoose.connect(
  `mongodb+srv://momme40:Mohusby1@cluster0.eveapwr.mongodb.net/?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  
  }, console.log('DB CONN'));

  app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});




