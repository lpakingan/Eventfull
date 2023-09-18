const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("/search/:query", async (req, res) => {
  try {
    const query = req.params.query;
    const apiKey = process.env.API_KEY;
    const response = await axios.get(
      `https://api.seatgeek.com/2/events?q=${query}&client_id=${apiKey}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      const events = await response.data;
      res.json(events);
    } else {
      res.status(response.status).send("Unable to get events!");
    }
  } catch (error) {
    res.status(500).send("SeatGeek API unable to be reached!");
  }
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
