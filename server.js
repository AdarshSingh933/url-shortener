const express = require('express');
const dotenv = require('dotenv');

// env config
dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

app.listen(port,(error)=>{
   if(error){
    console.log(`Error in running server on port ${port}`,error);
    return;
   }
   console.log(`Server is running on port ${port}`);
});
