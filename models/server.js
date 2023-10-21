const cors = require('cors');
const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.productPath = '/api/products';
        this.priceProductPath = '/api/price';

        this.middlewares();
        this.routes();
    }



   
    middlewares(){
        this.app.use(cors());
        this.app.use((express.json({limit: '50mb'})));
        this.app.use(express.urlencoded({limit: '50mb'}));
    
    }

    routes(){
        this.app.use(this.productPath,require('../routes/productsRoutes'));
        this.app.use(this.priceProductPath,require('../routes/priceProductsRoutes'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`server running on http://localhost:${this.port}`);
        })
    }
}


module.exports = Server;