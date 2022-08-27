const mongoose = require("mongoose");

const userSchema = new mongoose.Schema
(
    {
        usuario: { type: String, required: true },
        senha: { type: String, required: true },
        nomecompleto: { type: String, default: "" },
        email: { type: String, default: "" },
        numero: { type: String, default: "" },
        portfolio: { type: String, default: "" },
        objetivo: { type: String, default: "" },
        endereco: { type: String, default: "" },
        nacionalidade: { type: String, default: "" },
        estadocivil: { type: String, default: "" },
        idade: { type: String, default: "" },
        datanascimento: { type: String, default: "" },
        github: { type: String, default: "" },
        linkedin: { type: String, default: "" },
        perfilprofissional: { type: String, default: "" },       
        educacao:{ type: Array, default: [] },
        skills:{ type: Array, default: [] },
        experiencia:{ type: Array, default: [] },
        projetos:{ type: Array, default: [] },
        idiomas:{ type: Array, default: [] },
    },
    {
        timestamps: true,
    }
)

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;