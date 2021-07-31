import * as teacherRepository from '../persistency/teacher-repository.js'
import config from '../environment-config.json';


export async function createTeacher(pTeacher){
    return await teacherRepository.create(pTeacher);
}

export async function deleteTeacher(pId){
    return await teacherRepository.remove(pId);
}

export async function getAllTeachers(){
    return await teacherRepository.getAll();
}

export async function getTeacherById(pId){
    return await teacherRepository.findById(pId);
}

export async function updateTeacher(pId, pUpdateEntity){
    return await teacherRepository.update(pId, pUpdateEntity);
}
