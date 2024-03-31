# Typescript Initial server setup for express, mongoose for start any project

## technologies

- Node, Express
- Typescript
- Mongoose
- Zod

### setup guide with npm

open your terminal: mkdir first-server

change directory: cd first-server

initialized server: npm init -y

you see the initialized package:

{
"name": "initial-server-with-express-mongoose-and-error-handling",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}

open your vs code: cd code .

press enter on your keyboard

now you see a file name package.json

now install express, cors, mongoose, typescript, dotenv, zod : npm install express cors mongoose typescript dotenv

install express types: npm i --save-dev @types/express
install cors types: npm i --save-dev @types/cors

create a folder: src
create a file : src/app.ts
app.ts are now looks like :
import express from "express";
import cors from "cors";
const port = 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json()); // parser

app.get("/", (req, res) => {
res.json({
Server_Running: true,
Message: "Express server are running",
});
});

app.listen(port, () => {
console.log(
`server are running on http://localhost:${port} time:${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`
);
});
