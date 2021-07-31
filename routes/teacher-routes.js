import express from 'express';
const router = express.Router();
import * as teacherService from '../service/teacher-service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await teacherService.getAllTeachers())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await teacherService.getTeacherById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await teacherService.createTeacher(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await teacherService.deleteTeacher(req.params.id))));

export default router;