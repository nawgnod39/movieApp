const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

router.post('/favoriteNumber', (req, res) => {//index.js 부분에 써줘야함.app.use('/api/favorite', require('./routes/favorite'));

    //mongoDB에서   favorite 숫자를 가져오기 
    Favorite.find({ "movieId": req.body.movieId })//index 에 bodyparser 이용 find method 이용 
        .exec((err, info) => {
            if (err) return res.status(400).send(err)
            // 그다음에   프론트에  다시   숫자 정보를 보내주기  ,400에러가 났고 에러정보를 client에 보냄 .
            res.status(200).json({ success: true, favoriteNumber: info.length })
        })
})

module.exports = router;