const mongoose = require("mongoose");

const userSchema = new mongoose.Schema
(
    {
        usuario: { type: String, required: true },
        senha: { type: String, required: true },
        primeiroNome: { type: String, default: "" },
        ultimoNome: { type: String, default: "" },
        email: { type: String, default: "" },
        numero: { type: String, default: "" },
        portfolio: { type: String, default: "" },
        objetivo: { type: String, default: "" },
        endereco: { type: String, default: "" },
        educacao:{ type: Array, default: [] },
        skills:{ type: Array, default: [] },
        experiencia:{ type: Array, default: [] },
        projetos:{ type: Array, default: [] },
    },
    {
        timestamps: true,
    }
)

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;