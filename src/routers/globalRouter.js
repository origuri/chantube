import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
const handleJoin = (req, res) => res.send("Join");

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

// export default를 하면 globalRouter.js를 임포트하는 순간 이 파일 전체가 임포트되는 것이 아닌
// const globalRouter = express.Router(); 를 임포트하는 것.
export default globalRouter;