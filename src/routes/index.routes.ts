import { Router } from "express";
import peopleRouter from "./people.routes";

const router = Router();

router.use(peopleRouter);

export default router;