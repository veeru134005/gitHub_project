const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const { send } = require('process');

const port=3001;

const app=express();

app.use(bodyParser.json())
app.use(cors());

// app.get('/',function(req,res){
//         //res.send('Hai i am from express server');

//         res.status(200).send({
//             "message":"send susscc"
//         });
// });

const statics=[{
    "totalCompanies":40,
    "minStockPrice":45,
    "maxStockPrice":100,
    "averageStockPrice":200
}]


app.get('/getStats',(req,res)=>res.status(200).send(
   statics
))

app.get('/getRecentStockDetails',(req,res)=>res.status(200).send(
    [{
        "id":"1",
        "companyCode": "CNGA8745",
        "companyName":"EFRON",
        "stockCode":"1236",
        "stockName":"IRON",
        "stockPrice":"12367",
        "validDate":"12/30/2025"
      },{
        "id":"1234",
        "companyCode": "CNGA7298",
        "companyName":"IRONY",
        "stockCode":"764",
        "stockName":"TEA",
        "stockPrice":"687",
        "validDate":"12/30/2025"
      },{
        "id":"1239",
        "companyCode": "CNG87292",
        "companyName":"IRONI",
        "stockCode":"7623",
        "stockName":"GOLD",
        "stockPrice":"689",
        "validDate":"12/30/2027"
      }]
))


app.listen(port,function(){
    console.log("port started in >>>"+port)
})