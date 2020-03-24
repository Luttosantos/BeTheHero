const express = require('express');
const connection = require('../database/connection');
module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const ong = await conncetion('ongs')
            .where('id', id)
            .selec('name')
            .fisrt();

        if (!ong) {
            return resposnse.status(400).json({ error: 'No ONG found with this id.' });
        }
        return resposnse.json(ong);
    }
}