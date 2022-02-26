import { PrismaClient } from "@prisma/client";
import { env } from "process";
import axios from "axios";
const prisma = new PrismaClient();

async function main() {
  const IMDB_API_KEY = env.IMDB_API_KEY;
  let page = 1;
  let pages = 99999;
  let response;

  try {
    do {
      response = await axios.get(
        `http://www.omdbapi.com/?apikey=${IMDB_API_KEY}&s=love&y=2020&page=${page}`
      );
      await prisma.movie.createMany({
        data: response.data.Search,
      });
      console.log(`Page ${page} / ${pages} seeded!`);
      pages = Math.ceil(response.data.totalResults / 10);
      page++;
    } while (page <= pages);
  } catch (error) {
    console.error(error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
