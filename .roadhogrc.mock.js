// mock 用法
export default {
  'GET /api/training-categories': (req, res) => {
    console.log(req.query);
    if (req.query && req.query._page === '2') {
      res.json([
        {
          'serialNo': '11',
          'name': '师傅',
          'description': '对方感受到'
        },
        {
          'serialNo': '12',
          'name': '师傅',
          'description': '对方感受到'
        }
      ]);
    } else {
      res.json([
        {
          'serialNo': '1',
          'name': '哈哈哈',
          'description': 'is大家防静电服'
        }
      ])
    }
  },
  'GET /api/tiers': (req, res) => {
    res.json({
      "success": true,
      "data": [
        {
          "tierId": 1,
          "levle": "N1"
        },
        {
          "tierId": 2,
          "levle": "N2"
        },
      ]
    })
  },
};
