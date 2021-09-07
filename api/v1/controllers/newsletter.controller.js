class NewsletterController {
  constructor() {
    this.subscribe = this.subscribe.bind(this)
  }

  subscribe(req, res, next) {
    const { email } = req.body
    if (!email) {
      res.status(400).send('Bad Request')
    } else {
      res.status(200).send({ data: { email }})
    }
  }
}

export default new NewsletterController()
