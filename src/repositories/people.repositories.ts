import { db } from "../config/database";

async function getPeopleCount() {
  const response = await db.query<{ count: number }>(`
    SELECT CAST(COUNT(people.id) AS INTEGER) as count
    FROM people
    `);

  return response.rows[0].count;
}

async function getById(id: number){
    return db.query<{id: number, firstName: string, lastName: string}>(`
    SELECT * FROM people
    WHERE id = $1
    `, [id])
}

const peopleRepository = {
  getPeopleCount,
  getById
};

export default peopleRepository;
