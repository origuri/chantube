import express from "express";

// express로 앱을 만들기 위한 첫번째 약속 변수 명은 app이라고 할 것 
const app = express();

// 앱이 실행되고 listen하는 사이에 여러가지 명렁어들을 넣을 것
// express는 eventHandler의 event 아규먼트처럼 callback함수에 공짜로 request와 response를 제공해줌
const logger = (req, res, next) =>{
    console.log(`${req.method} ${req.url}`)
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>접근금지!!</h1>")
    } else{
        next();
    }
}

const handleHome = (req, res, next) => {
    return res.end();
}

const handleprotected = (req, res)=>{
    return res.send("this is private!");
}
app.use(logger);
app.use(privateMiddleware);
app.get("/",handleHome);
app.get("/protected", handleprotected)

//포트를 선언함으로써 변수로 사용해서 백틱으로 잡게 할거임
const PORT = 4000;

const handleListening = () => console.log(`이거 누르면 접속 가능 http://localhost:${PORT}`);

// 서버가 요청을 받을 때까지 가만히 있게 해야함. 
app.listen(PORT, handleListening);