# Streamer List

### 👾 Features
___1. List of streamers___

In this panel you can see the list of streamers, you can vote positively or negatively, go to the details of the selected streamer or to the modal of adding a streamer

![](https://i.imgur.com/fFp9hhF.png)

___2. Add streamer___

In this modal you can add a streamer, after successful addition the page will automatically redirect you to the details of the freshly added streamer

![](https://i.imgur.com/8ehPtst.png)

___3. Streamer details___

![](https://i.imgur.com/ZHAxzms.png)

___

# How to run application?

___Requirements___
1. Installed SQL Lite

___Steps___
1. Create database instance in path: `packages/backend/prisma/dev.db`, `dev.db` is the file name and need to be same.
2. Now go to `packages/backend` and create `.env` from `.env.template` by default `API_URL` is `http://localhost:5173`
3. Later change dir to `packages/frontend` and create `.env` from `.env.template` by default `API_URL` is `http://localhost:3000`
4. Back to root catalog and run command `npm run prisma:generate`
5. Now run two terminals, in first run `npm run start:api`, and in second `npm run start:web`