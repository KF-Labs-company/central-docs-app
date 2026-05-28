import { Router } from 'express'
import multer from 'multer'
import { multerConfig } from '../config/multer'
import { CompressPDFController } from '../controllers/pdf/CompressPDFController'
import { optionalAuthenticated } from '../middlewares/optionalAuthenticated'

const compressPDFController = new CompressPDFController()
export const pdfRoutes = Router()
const upload = multer(multerConfig)

pdfRoutes.post(
    '/compress',
    optionalAuthenticated,
    upload.single('file'),
    compressPDFController.handle
)
