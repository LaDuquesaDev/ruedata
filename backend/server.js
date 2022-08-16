const axios = require('axios');
const cors = require('cors');
const express = require('express')
const app = express()
const apiID = process.env.APIKEY || 'a4a28b6a71564fc3a9660ca6bf7dd153';
const port = 8000

const whitelist = ["http://localhost:3000"]
app.use(cors({origin: whitelist}),express.json()) // agrega el header application/json

app.get('/', (req, res) => {
    console.log("works")
})

app.post('/', (req, res) => {
    const payload = req.body
    console.log("L:11 ", payload);
    axios.post(`https://crudcrud.com/api/${apiID}/laduquesapets`, payload)
        .then(response => res.json(response.data))
        .catch(error => console.log(error))
})

// app.get('/pet/:id', (req, res) => {
//     axios.get(`https://crudcrud.com/api/${apiID}/laduquesapets/${req.params.id}`)
//         .then(response => res.json(response.data))
//         .catch(error => console.log(error))
// })

app.get('/pets/', (req, res) => {
    axios.get(`https://crudcrud.com/api/${apiID}/laduquesapets`)
        .then(response => res.json(response.data))
        .catch(error => console.log(error))
})

app.delete('/pet/:id', (req, res) => {
    axios.delete(`https://crudcrud.com/api/${apiID}/laduquesapets/${req.params.id}`)
        .then(response => res.json(response.data))
        .catch(error => console.log(error))
})

app.put('/pet/:id', (req, res) => {
    const payload = req.body
    axios.put(`https://crudcrud.com/api/${apiID}/laduquesapets/${req.params.id}`, payload)
        .then(response => res.json(response.data))
        .catch(error => console.log(error))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
