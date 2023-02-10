const db = require("../config/db.config");
const contato = db.contato;

// Listar todos os contatos
exports.contatosList = async (req, res) => {
  try {
    const contatos = await contato.findAll();
    res.json({ contatos: contatos });
  } catch (err) {
    res.send({ message: err.message });
  }
};

// Detalhar um contato
exports.contatosRead = async (req, res) => {
  try {
    const contato = await contato.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json({ contato: contato });
  } catch (err) {
    res.send({ message: err.message });
  }
};

// Criar um contato
exports.contatosCreate = async (req, res) => {
  let novoContato = null;
  try {
    novoContato = {
      nome: req.body.nome,
      telefone: req.body.telefone,
    };
  } catch (err) {
    res.json({ message: err.message });
  }
  console.log(novoContato.nome === null);
  /*  if () {
    return res.status(400).json({ message: "Dados inválidos" });
  } */

  try {
    const contato = await contato.create(req.body);
    res.status(201).json({ contato: contato });
  } catch (err) {
    res.send({ message: err.message });
  }
};

// Atualizar um contato
exports.contatosUpdate = async (req, res) => {
  try {
    const contato = await contato.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(204).send({ contato: contato });
  } catch (err) {
    res.send({ message: err.message });
  }
};

// Apagar um contato
exports.contatosDelete = async (req, res) => {
  try {
    const contato = await contato.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).send({ contato: contato });
  } catch (err) {
    res.send({ message: err.message });
  }
};
