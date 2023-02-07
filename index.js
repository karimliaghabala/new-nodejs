const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser');
const PORT = 8080 || process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())
const suppliers = [
    {
        "id": 1,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    },    {
        "id": 2,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    },    {
        "id": 3,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    },    {
        "id": 4,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    },    {
        "id": 5,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    },    {
        "id": 6,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    },    {
        "id": 7,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    },    {
        "id": 8,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    },    {
        "id": 9,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    },    {
        "id": 10,
        "text": "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.",
        "Issuing Country": "CANADA",
        "Composition":"Nickel",
        "Quality":"BU",
        "Denomination":"5 cents",
        "year":"1965",
        "Weight	":"Weight	",
        "Price":"40$"
    }
]

app.post("/supplier",(req,res)=>{
    suppliers.push(req.body)
    res.json(req.body)
})

app.get("/",(req,res)=>{
    res.send("server ishdiyur")
    console.log(req.hostname)
    console.log(req.cookies)
    console.log(req.ip)
    console.log(req.params)
})

app.get("/suppliers",(req,res)=>{
     const count = req.query.count
     const offset = req.query.offset
     if(count && offset){
        res.send(suppliers.slice(offset,offset+count))
        console.log(count,offset)
        res.end()
     }else if(count){
        console.log(count)
        res.end()
     }else if(offset){
        console.log(offset)
        res.end()
     }else{
        res.send(suppliers)
     }
    res.send(suppliers)
    console.log(count)
})

app.get("/suppliers/:id",(req,res)=>{
    const suplier = suppliers.find(item=>item.id == req.params.id) 
    res.send(suplier)
})

app.listen(PORT,()=>{
    console.log("Server running")
})