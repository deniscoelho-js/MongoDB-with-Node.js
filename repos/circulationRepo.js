const { MongoClient, MongoClient } = require("mongodb");

function circularRepo() {
  const url = "mongodb://localhost:27017";
  const dbName = "circulation";

  function get() {
    return new Promise(async (resolve, reject) => {
      const MongoClient = new MongoClient(url);
      try {
        await client.connect();
        const db = client.db(dbName);

        const items = db.collection("newspapers").find();
        resolve(await items.toArray());
        client.close();
      } catch (error) {
        reject(error);
      }
    });
  }

  function loadData(data) {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        await client.connect();
        const db = client.db(dbName);

        results = await db.collection("newspappers").insertMany(data);
        resolve(results);
        client.close();
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
  return { loadData, get };
}

module.exports = circularRepo();
