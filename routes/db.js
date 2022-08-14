var express = require('express');
var router = express.Router();

// require maria.js
const maria = require('../db/connect/maria');

/* 
 * 채용 RECRUIT TABLE 
 */

// 채용 RECRUIT 테이블을 생성합니다.
router.get('/recruit/create', function(req, res) {
  var sql = 'CREATE TABLE RECRUIT('
  sql += 'RECRUIT_ID INT AUTO_INCREMENT PRIMARY KEY, '
  sql += 'COMPANY_ID INT(20) NOT NULL, '
  sql += 'POSITION VARCHAR(100) NOT NULL, '
  sql += 'COMPENSATION INT(15) NOT NULL, '
  sql += 'CONTENT LONGTEXT NOT NULL, '
  sql += 'SKILLS VARCHAR(100) NOT NULL '
  sql += ') DEFAULT CHARSET=utf8 '

  maria.query(sql, function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});

// 채용 RECRUIT 테이블을 삭제합니다.
router.get('/recruit/drop', function(req, res) {
  maria.query('DROP TABLE RECRUIT', function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});

// 채용 RECRUIT 테이블에 데이터를 추가합니다.
router.get('/recruit/insert', function(req, res) {
  maria.query('INSERT INTO RECRUIT(COMPANY_ID,POSITION,COMPENSATION,CONTENT,SKILLS)'
  +'VALUES(1, "백엔드 주니어 개발자", 1000000, "원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..", "Python")', function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});

// 채용 RECRUIT 테이블에서 데이터를 전체 조회합니다.
router.get('/recruit/select', function(req, res) {
  maria.query('SELECT * FROM RECRUIT', function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});

// 채용 RECRUIT 테이블에서 전체 데이터를 삭제합니다.
router.get('/recruit/delete', function(req, res) {
  maria.query('DELETE FROM RECRUIT', function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});


/* 
 * 회사 COMPANY TABLE 
 */

// 회사 COMPANY 테이블을 생성합니다.
router.get('/company/create', function(req, res) {
  var sql = 'CREATE TABLE COMPANY ('
  sql += 'COMPANY_ID INT AUTO_INCREMENT PRIMARY KEY, '
  sql += 'COMPANY_NAME VARCHAR(50) NOT NULL, '
  sql += 'COUNTRY VARCHAR(50) NOT NULL, '
  sql += 'REGION VARCHAR(50) NOT NULL'
  sql += ') DEFAULT CHARSET=utf8 ';

  maria.query(sql, function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});

// 회사 COMPANY 테이블을 삭제합니다.
router.get('/company/drop', function(req, res) {
  maria.query('DROP TABLE COMPANY', function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});

// 회사 COMPANY 테이블에 데이터를 추가합니다.
router.get('/company/insert', function(req, res) {
  maria.query('INSERT INTO COMPANY(COMPANY_NAME,COUNTRY,REGION)'
  +'VALUES("원티드랩", "한국", "서울")', function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});

// 회사 COMPANY 테이블에서 데이터를 전체 조회합니다.
router.get('/company/select', function(req, res) {
  maria.query('SELECT * FROM COMPANY', function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});

// 회사 COMPANY 테이블에서 전체 데이터를 삭제합니다.
router.get('/company/delete', function(req, res) {
  maria.query('DELETE FROM COMPANY', function(err, rows, fields) {
      if(!err) {
        res.send(rows); // response send rows
      } else {
        console.log('err : ' + err);
        res.send(err); // response send err
      }
    }
  );
});


module.exports = router;
