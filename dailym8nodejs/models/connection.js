var pg = require('pg'); 
 
const connectionString = "postgres://postgres:rFeZvIpl3lmOXfB@dailym8nodejs.internal:5432"  //Conectar com os dados normais da BD postgresql
const Pool = pg.Pool 
/*const pool = new Pool({ 
    connectionString, 
    max: 10, 
    ssl: { 
        require: true,  
        rejectUnauthorized: false 
    } 
}) */

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://postgres:rFeZvIpl3lmOXfB@dailym8nodejs.internal:5432',
    ssl: process.env.DATABASE_URL ? true : false
})
 
module.exports = pool;