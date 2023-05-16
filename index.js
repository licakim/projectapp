const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "hyun8382",
  database: "users",
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});

app.post("/adduser", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  const name = req.body.name;
  const nickname = req.body.nickname;

  db.query(
    "INSERT INTO users.user (id,pw,name,nickname) VALUES (?,?,?,?)",
    [id, pw, name, nickname],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Inserted values successfully!");
      }
    }
  );
});

// app.post("/login", (req, res) => {
//   const id = req.body.id;
//   const pw = req.body.pw;

//   db.query(`SELECT * FROM users.user WHERE id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({ success: false, message: "서버 에러" });
//     }
//     if (!rows[0]) {
//       return res
//         .status(400)
//         .json({ success: false, message: "가입되지 않은 아이디입니다." });
//     }
//     if (rows[0].pw !== pw) {
//       return res
//         .status(400)
//         .json({ success: false, message: "비밀번호가 일치하지 않습니다." });
//     }
//     return res.status(200).json({ success: true, message: "로그인 성공" });
//   });
// });

app.post("/login", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;

  db.query(`SELECT * FROM users.user WHERE id = ?`, [id], (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "서버 에러" });
    }
    if (!rows[0]) {
      return res
        .status(400)
        .json({ success: false, message: "가입되지 않은 아이디입니다." });
    }
    if (rows[0].pw !== pw) {
      return res
        .status(400)
        .json({ success: false, message: "비밀번호가 일치하지 않습니다." });
    }
    const token = jwt.sign({ id: rows[0].id }, "mysecretkey");
    return res
      .status(200)
      .json({ success: true, message: "로그인 성공", token });
  });
});

app.post("/checkdupid", (req, res) => {
  const id = req.body.id;

  db.query(`select *FROM users.user WHERE id = ?`, [id], (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "서버 에러" });
    }
    if (rows[0]) {
      return res
        .status(400)
        .json({ success: false, message: "사용 불가한 아이디입니다." });
    }
    return res
      .status(200)
      .json({ success: true, message: "사용 가능한 아이디입니다." });
  });
});

app.post("/checkdupnickname", (req, res) => {
  const nickname = req.body.nickname;

  db.query(
    `select *FROM users.user WHERE nickname = ?`,
    [nickname],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "서버 에러" });
      }
      if (rows[0]) {
        return res
          .status(400)
          .json({ success: false, message: "사용 불가한 닉네임입니다." });
      }
      return res
        .status(200)
        .json({ success: true, message: "사용 가능한 닉네임입니다." });
    }
  );
});

// app.get("/userinfo", (req, res) => {
//   db.query(
//     "select * from users.user where token = ?",
//     [req.token],
//     (err, result) => {
//       if (err) {
//       } else {
//       }
//     }
//   );
// });

app.get("/userinfo", (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, "mysecretkey");
    const id = decoded.id;

    console.log(id);
    db.query(
      "SELECT * FROM users.user WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          return res.status(500).send({ message: "서버 오류 발생" });
        }

        if (results.length === 0) {
          return res.status(404).send({ message: "사용자를 찾을 수 없음" });
        }

        const user = results[0];
        res.send(user);
      }
    );
  } catch (e) {
    return res.status(401).send({ message: "인증 오류" });
  }
});

// app.get("/userinfo", (req, res) => {
//   const token = req.header("Authorization").replace("Bearer ", "");
//     const decoded = jwt.verify(token, "mysecretkey");
//     const id = decoded.id;

//     const query = "SELECT * FROM users WHERE id = ?";
//     db.query(query, [id], (error, results) => {
//       if (error) {
//         return res.status(500).send({ message: "서버 오류 발생" });
//       }

//       if (results.length === 0) {
//         return res.status(404).send({ message: "사용자를 찾을 수 없음" });
//       }

//       const user = results[0];
//       res.send(user);
//     });
// });
