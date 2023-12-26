// conect config.env file
require('dotenv').config({ path: './config.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


/* remove this 
// conect database
MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return;
    }
  
    console.log('Connected to MongoDB');
  );

   */ 
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded( { extended: true } ));

const port = process.env.PORT || 4242;

app.listen(port, () => { console.log(`Server is running on port ${port}`) })


