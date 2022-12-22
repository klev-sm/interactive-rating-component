import { MongoClient } from "mongodb";

const url: string = "mongodb://localhost:27017/api-ranking";
const client = new MongoClient(url);

async function main(): Promise<MongoClient> {
    const connection = await client.connect();
    return connection;
}

main()
    .then(() => {
        console.log("Conexão ao banco de dados estabelecida com sucesso.");
    })
    .catch((err) => {
        console.log("Erro ao tentar conexão com o banco de dados: " + err);
    });

export default client;