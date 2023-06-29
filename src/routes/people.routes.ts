import { Router } from "express";
import { getRandomPerson } from "../controllers/people.controllers";

const peopleRouter = Router();

peopleRouter.get("/person", getRandomPerson);

export default peopleRouter;
