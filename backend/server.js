const axios = require('axios');
const cors = require('cors');
const express = require('express')
const app = express()
const apiID = process.env.APIKEY || 'a5a7cdb9513e46f1829ceb09fe2a4152';
const port = 8000

const whitelist = ["http://localhost:3000"]
app.use(cors({origin: whitelist}),express.json()) // agrega el header application/json

app.post('/', (req, res) => {
    const payload = req.body
    console.log("L:11 ", payload);
    axios.post(`https://crudcrud.com/api/${apiID}/laduquesapets`, payload)
        .then(response => res.json(response.data))
        .catch(error => console.log(error))
})

app.get('/pet/:id', (req, res) => {
    axios.get(`https://crudcrud.com/api/${apiID}/laduquesapets/${req.params.id}`)
        .then(response => res.json(response.data))
        .catch(error => console.log(error))
})

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