const router = require("express").Router()
const postControler = require("../controlers/postControler")

router.post('/api/createPoste', postControler.createPoste)
router.get('/api/getPoste', postControler.getPoste)
router.put('/api/updatePoste/:id', postControler.updatePoste)
router.delete('/api/deletePoste/:id', postControler.deletePoste)

module.exports = {
    postRouter : router
}