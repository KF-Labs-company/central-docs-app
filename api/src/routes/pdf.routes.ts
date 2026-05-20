import { Router } from 'express'
import multer from 'multer'
import { multerConfig } from '../config/multer'
import { CompressPDFController } from '../controllers/pdf/CompressPDFController'

const compressPDFController = new CompressPDFController()

export const pdfRoutes = Router()

const upload = multer(multerConfig)

pdfRoutes.post('/compress', upload.single('file'), compressPDFController.handle)
