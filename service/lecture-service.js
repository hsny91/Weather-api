import * as lectureRepository from '../persistency/lecture-repository.js'
import config from '../environment-config.json';


export async function createLecture(pLecture){
    return await lectureRepository.create(pLecture);
}

export async function deleteLecture(pId){
    return await lectureRepository.remove(pId);
}

export async function getAllLectures(){
    return await lectureRepository.getAll();
}

export async function getLectureById(pId){
    return await lectureRepository.findById(pId);
}

export async function updateLecture(pId, pUpdateEntity){
    return await lectureRepository.update(pId, pUpdateEntity);
}