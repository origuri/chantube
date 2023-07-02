import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// express로 앱을 만들기 위한 첫번째 약속 변수 명은 app이라고 할 것 
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views")
app.use(logger)
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



//포트를 선언함으로써 변수로 사용해서 백틱으로 잡게 할거임
const PORT = 4000;

const handleListening = () => console.log(`이거 누르면 접속 가능 http://localhost:${PORT}`);

// 서버가 요청을 받을 때까지 가만히 있게 해야함. 
app.listen(PORT, handleListening);