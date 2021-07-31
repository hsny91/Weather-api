import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.teacher.findAll(); 
}

export async function findById(pId){
  return await db.teacher.findByPk(pId);
}

export async function create(pEntity){
  return await db.teacher.create(pEntity);
}

export async function remove(pId){
  return await db.teacher.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.teacher.update(pUpdatedEntity, {
    where: { id: pId }
  });
}