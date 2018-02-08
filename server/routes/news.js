var express = require('express');
var router = express.Router();

/* GET news listing. */
router.get('/', function(req, res, next) {
  news = [
    {
      "source": "CNBC",
      "author": "Liz Moyer",
      "title": "Wall Street turned these esoteric 'ETNs' into a winning bet for the masses...and then they collapsed",
      "description": "Until last week, the \"buy stocks, sell volatility\" trade was working",
      "url": "https://www.cnbc.com/2018/02/06/wall-street-turned-these-esoteric-etns-into-a-winning-bet-for-the-masses.html",
      "urlToImage": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/11/22/104859130-GettyImages-875330548-wall-street.1910x1000.jpg",
      "time": "2018-02-07T04:57:36Z",
      "reason": "Recommend",
      "digest": "123423423423"
    },
    {
      "source": "CNBC",
      "author": "Liz Moyer",
      "title": "Wall Street turned these esoteric 'ETNs' into a winning bet for the masses...and then they collapsed",
      "description": "Until last week, the \"buy stocks, sell volatility\" trade was working",
      "url": "https://www.cnbc.com/2018/02/06/wall-street-turned-these-esoteric-etns-into-a-winning-bet-for-the-masses.html",
      "urlToImage": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/11/22/104859130-GettyImages-875330548-wall-street.1910x1000.jpg",
      "time": "2018-02-07T04:57:36Z",
      "reason": "Hot",
      "digest": "123123123123"
    }
  ];

  res.json(news);
});

module.exports = router;
