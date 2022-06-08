// Rutas

const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Ali",
        "website": "acm.com"
    };
    res.json(data);
});

module.exports = router;