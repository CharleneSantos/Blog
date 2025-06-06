import Database from "../database";

const database = Database();

class Usuario {
  constructor() {
    this.model = database.db.define("usuarios", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: { type: database.db.Sequelize.STRING },
      email: { type: database.db.Sequelize.STRING, unique: true },
      senha: { type: database.db.Sequelize.STRING },
    });
  }
}

export default Usuario().model;
