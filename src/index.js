const {PORT} = require('./config.js');
const app = require('./app.js');

app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`);
})