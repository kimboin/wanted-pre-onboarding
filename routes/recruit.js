var express = require('express');
var router = express.Router();

// require maria.js
const maria = require('../db/connect/maria');

/*
 * 채용공고를 등록합니다.
 */
router.post('/register', function(req, res) {
  console.log(`req.body: ${req.body}`);

  const { company_id, position, compensation, content, skills } = req.body;

  // TODO 회사 ID 체크

  var sql = 'INSERT INTO RECRUIT(COMPANY_ID,POSITION,COMPENSATION,CONTENT,SKILLS) VALUES(';
  sql += `"${company_id}","${position}",${compensation},"${content}","${skills}")`;

  maria.query(sql, function(err, rows, fields) {
    if(!err) {
      console.log(rows);
      res.send(rows); // response send rows
      // res.status(200).json({
      //   message: "create success",
      //   result: arr,
      // });
    } else {
      console.log('err : ' + err);
      res.send(err); // response send err
    }
  });
});

/* 
 * 채용공고를 수정합니다.
 */
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { position, compensation, content, skills } = req.body;

  console.log(`req.params: ${req.params}`);
  console.log(`req.body: ${req.body}`);

  var sql = `UPDATE RECRUIT SET ` 
  sql += `POSITION="${position}", `;
  sql += `COMPENSATION=${compensation}, `;
  sql += `CONTENT="${content}", `;
  sql += `SKILLS="${skills}" `;
  sql += `WHERE RECRUIT_ID=${id}`;

  maria.query(sql, function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log('err : ' + err);
      res.send(err); // response send err
    }
  });
});

/*
 * 채용공고를 삭제합니다.
 */
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  //TODO 해당 채용공고가 없는 상태에서 delete 해도 success가 나는데, 오류인걸까 아닌걸까.

  maria.query(`DELETE FROM RECRUIT WHERE RECRUIT_ID=${id}`, function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log('err : ' + err);
      res.send(err); // response send err
    }
  });
});

/*
 * 채용공고 목록을 가져옵니다.
 */
router.get('/list', (req,res) =>{
  var sql = 'SELECT R.RECRUIT_ID, C.COMPANY_NAME, C.COUNTRY, C.REGION, R.POSITION, R.COMPENSATION, R.SKILLS FROM RECRUIT R ';
  sql += 'LEFT JOIN COMPANY C ';
  sql += 'ON R.COMPANY_ID = C.COMPANY_ID ';
  sql += 'ORDER BY R.RECRUIT_ID DESC';

  maria.query(sql, function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log('err : ' + err);
      res.send(err); // response send err
    }
  });
})

module.exports = router;
