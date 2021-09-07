import Router from 'express'
import NewsletterCtrl from '../controllers/newsletter.controller'

const router = Router()

router.post('/subscribe', NewsletterCtrl.subscribe)

export default router
