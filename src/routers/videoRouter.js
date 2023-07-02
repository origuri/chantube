import express from "express";
import globalRouter from "./globalRouter";

const videoRouter = express.Router();

const handleWatch = (req, res) => res.send("WatchVideo");
const handleEdit = (req, res) => res.send("Editn Video");

videoRouter.get("/watch", handleWatch);
videoRouter.get("/edit", handleEdit);

export default videoRouter;