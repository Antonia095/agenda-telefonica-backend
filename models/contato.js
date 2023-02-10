module.exports = (sequelize, Sequelize) => {
  const contato = sequelize.define("contato", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
      allowEmpty: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
      allowEmpty: false,
    },
  });

  return contato;
};
