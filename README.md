# Information

Listing information about movies with "love" in the title and released in 2020, from IMDb API.

The demo has been developed in **React** and **Typescript**, using **Next.js**, styling with **TailwindCSS**, getting data from a **MySQL** database hosted in **PlanetScale** using **Prisma** as **ORM** and deployed with **CI/CD** on **Vercel**. 

### Next.js

[https://nextjs.org/](https://nextjs.org/)

### TailwindCSS

[https://tailwindcss.com/](https://tailwindcss.com/)

### PlanetScale

[https://planetscale.com/](https://planetscale.com/)

### Prisma

[https://www.prisma.io/](https://www.prisma.io/)

## Live demo

[https://moviesdemo.vercel.app/](https://moviesdemo.vercel.app/)

# Installation

1. Clone the repo

2. Install dependencies (must have Node.js installed) running the command inside the project folder

```bash
npm i
```

or

```bash
yarn
```

3. Create a **.env** file in the root folder of the project with this structure:

```bash
DATABASE_URL='mysql://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_DATABASE'
IMDB_API_KEY=YOUR_IMDb_API_KEY
```

Tip: If use PlanetScale and Prisma, PlanetScale gives you the DATABASE_URL value ready for use with Prisma.

4. Check the database schema in Prisma. File located in "prisma/schema.prisma".

You can run the following command for upload changes in the schema:

```bash
npx prisma db push
```

or can run the following command for manage migrations:

```bash
npx prisma migrate dev --name init
```

for more details: 

[https://www.prisma.io/docs/concepts/components/prisma-migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)

1. For seeding the database (Prisma uses the file located in "prisma/seed.ts") run the following command:

```bash
npx prisma db seed
```

for more details: 

[https://www.prisma.io/docs/guides/database/seed-database](https://www.prisma.io/docs/guides/database/seed-database)

6. For view and manage the data directly run the following command in order to open Prisma Studio:

```bash
npx prisma studio
```

for more details: 

[https://www.prisma.io/studio](https://www.prisma.io/studio)

# Run the project locally

```bash
npm run dev
```

or

```bash
yarn dev
```

# Deployment

1. Update your repo on Github.

2. Sign up on [Vercel](https://vercel.com/) and follow the instructions to deploy a project from your GitHub repo, remember to config the environment variables as well.
