import express from 'express';
const router = express.Router();
import * as lectureService from '../service/lecture-service.js'

import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await lectureService.getAllLectures())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await lectureService.getLectureById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await lectureService.createLecture(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await lectureService.deleteLecture(req.params.id))));

export default router;