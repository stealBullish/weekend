'use strict';
const express = require('express')
const path = require('path')
const serverless = require('serverless-http')
const app = express()
const bodyparser = require('body-parser')
const router = express.Router()

const friendsProfile = {
    'silas':{
        'full name': 'Silas Edet Akpan',
        'gender': 'Male',
        'age':27,
        'state of origin':'Akwa Ibom',
        'L.G.A':'Ibiono Ibom'
    },
    'shadrach':{
        'full name': 'Shadrach Ette Okon',
        'gender': 'Male',
        'age':26,
        'state of origin':'Akwa Ibom',
        'L.G.A':'Ibiono Ibom'
    },
    'faith':{
        'full name': 'Faith Nkedeuwem',
        'gender': 'Male',
        'age':24,
        'state of origin':'Akwa Ibom',
        'L.G.A':'Uyo '
    },
    'idoreiyen':{
        'full name': 'Idoreiyen Sunday Ekuere',
        'gender': 'Male',
        'age':21,
        'state of origin':'Akwa Ibom',
        'L.G.A':'Mkpart Enin'
    },
    'george':{
        'full name': 'George Ette Akpan',
        'gender': 'Male',
        'age':24,
        'state of origin':'Akwa Ibom',
        'L.G.A':'Abak Urok Uso'
    },
    'mfreke':{
        'full name': 'Mfrekemfon Marhall Ema',
        'gender': 'Female',
        'age':24,
        'state of origin':'Akwa Ibom',
        'L.G.A':'Isit Ibiom'
    },
    'unkwon':{
        'full name': 'Unkwon',
        'gender': 'unkwon',
        'age':0,
        'state of origin':'unkwon',
        'L.G.A':'unkwon'
    }

}



router.get('/', (request, response)=>{
    response.sendFile(__dirname +'/index.html')
})

router.get('/api/:name', (request, response)=>{
    const names = request.params.name
    if(friendsProfile[names]){
        response.json(friendsProfile[names])
    }else{
        response.json(friendsProfile['unkwon'])
    }
    
})

app.use(bodyParser.json());
//app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (request, response) => res.sendFile(path.join(__dirname, '../index.html')));
app.use('/.netlify/functions/api',router)


module.exports = app
module.exports.handler = serverless(app)