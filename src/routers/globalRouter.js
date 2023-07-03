import express from "express";
import { tranding } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", tranding);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

// export default를 하면 globalRouter.js를 임포트하는 순간 이 파일 전체가 임포트되는 것이 아닌
// const globalRouter = express.Router(); 를 임포트하는 것.
export default globalRouter;
