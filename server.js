// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // 프론트엔드 빌드 파일의 경로 설정
// const buildPath = path.join(__dirname, '..', 'crow', 'build');


// app.use(express.static(buildPath));

// // 회원가입 요청 처리 라우트
// app.post('/register', (req, res) => {
//   // 회원가입 처리 로직
// });

// // 모든 요청에 대해 프론트엔드 빌드 파일의 index.html 반환
// app.get('*', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
// });

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html')
// })
// const express = require('express')
// const app = express()

// app.listen(8080, () => {
//     console.log('http://localhost:8080 에서 서버 실행중')
// })

// const buildPath = path.join(__dirname, '..', 'crow', 'build');


// app.use(express.static(buildPath));

// // app.get('/', (req, res) => {
// //   res.send('반갑다')
// // }) 

// app.get('/어쩌구', (req, res)=>{
//   res.send('보내줄 웹페이지 내용')
// }) 

// app.get('/news', (req, res)=>{
//   res.send('오늘 비옴')
// }) 

// app.get('/shop', (req, res)=>{
//   res.send('쇼핑페이지입니다')
// }) 

// app.get('/', (req, res)=> {
//   res.sendFile(__dirname + '/index.html')
// })

// app.get('/about', (req, res)=> {
//   res.sendFile(__dirname + '/about.html')
// })

const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
});

app.use(express.json());
var cors = require('cors');
app.use(cors());


app.use(express.static(path.join(__dirname, 'crow/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/crow/build/index.html'));
});

app.get('/Cup', function (req, res) {
  res.json({name : 'yellow cup'})
});


//최하단에 가도록
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/crow/build/index.html'));
});