import express from 'express'
import { getAnvesh } from '../controller/anveshak.controller.js'

const router=express.Router()

router.get("/",getAnvesh)
export default router;