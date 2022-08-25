const express = require('express')
const User = require('../models/userModel')
const app = express.Router()

app.post('/login', async (req, res) => {

  try {
    const result = await User.findOne({
      usuario: req.body.usuario,
      senha: req.body.senha
    });
    if (result) {
      res.send(result)
    } else {
      res.status(400).json("Falha no login")
    }
  } catch (erro) {
    res.status(400).json(erro)
  }

});

app.post("/registro", async (req, res) => {
  try {
    const newuser = new User(req.body);
    console.log(req.body);
    await newuser.save();

    res.send("Registration Successfull");
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/atualizar", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, req.body);
    const user = await User.findOne({ _id: req.body._id });
    res.send(user);


  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = app