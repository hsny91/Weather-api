import Sequelize from 'sequelize';
import dbConfig from "../environment-config.json";
import StudentModel from "./student.model.js";
import EnrollmentModel from "./enrollment.model.js";
import TeacherModel from "./teacher.model.js";
import LectureModel from "./lecture.model.js";
import ClassModel from "./class.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = StudentModel(sequelize, Sequelize);
db.teacher = TeacherModel(sequelize, Sequelize);
db.enrollment = EnrollmentModel(sequelize, Sequelize);
db.lecture = LectureModel(sequelize, Sequelize);
db.class = ClassModel(sequelize, Sequelize);

// create relationships
// https://sequelize.org/master/manual/advanced-many-to-many.html
// Many-to-many-to-many relationships and beyond
db.teacher.belongsToMany(db.lecture, { through: db.class });
db.lecture.belongsToMany(db.teacher, { through: db.class });
db.class.belongsTo(db.lecture);
db.class.belongsTo(db.teacher);
db.teacher.hasMany(db.class);
db.lecture.hasMany(db.class);

db.student.belongsToMany(db.class, { through: db.enrollment });
db.class.belongsToMany(db.student, { through: db.enrollment });
db.enrollment.belongsTo(db.student);
db.enrollment.belongsTo(db.class);
db.student.hasMany(db.enrollment);
db.class.hasMany(db.enrollment);


// use it to force to create the db from scratch 
// .sync({ force: true })
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});

export default db;


