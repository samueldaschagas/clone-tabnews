import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result.rows);
  const updateAt = new Date().toISOString();
  response.status(200).json({ update_at: updateAt });
}

export default status;
