import { Response, Request } from "express";
import peopleService from "../services/people.services";

export async function getRandomPerson(req: Request, res: Response) {
  const result = await peopleService.getPerson();
  res.send(result.rows[0]);
}
