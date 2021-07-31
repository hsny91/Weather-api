import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.lecture.findAll(); 
}

export async function findById(pId){
  return await db.lecture.findByPk(pId);
}

export async function create(pEntity){
  return await db.lecture.create(pEntity);
}

export async function remove(pId){
  return await db.lecture.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.lecture.update(pUpdatedEntity, {
    where: { id: pId }
  });
}