export default (sequelize, Sequelize) => {
    return sequelize.define("teacher", {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    });
  };