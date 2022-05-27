const { MongoClient } = require("mongodb");

function circularRepo() {
  const url = "mongodb://localhost:27017";
  const dbName = "circulation";

  function loadData(data) {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        await client.connect();
        const db = client.db(dbName);

        results = await db.collection("newspappers").insertMany(data);
        resolve(results);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
  return { loadData };
}

module.exports = circularRepo();
