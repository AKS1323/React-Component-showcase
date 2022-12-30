const mongoose = require('mongoose');

const dbName = "mernwssnov";
const url = `mongodb+srv://Akriti78:star8953@atlascluster.higey8i.mongodb.net/${dbName}?retryWrites=true&w=majority`

// sychronous vs Asychronous
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});
module.exports = mongoose;