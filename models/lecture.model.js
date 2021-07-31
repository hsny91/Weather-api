export default (sequelize, Sequelize) => {
    return sequelize.define("lecture", {
      name: {
        type: Sequelize.STRING
      }
    });
  };