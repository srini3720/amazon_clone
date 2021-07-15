const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51JD5hcSCLcyFuTy9uahYC40mFVyXUAeILUmAyfSEMyM8vYraUmDuO7BFczpHcqtouU8JLdI3HT328CZy2pRH8BO200jpPFA3xq"
);

//api

// app config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const des = request.query.description;
  console.log("payment reuest received yasssssss!!!!!!", total);
  const paymentIntend = await stripe.paymentIntents.create({
    amount: total, ///subunits
    currency: "INR",
    description: "product",
  });
  // ok - created
  response.status(201).send({
    clientSecret: paymentIntend.client_secret,
  });
});

//listen command

exports.api = functions.https.onRequest(app);

//example api
//http://localhost:5001/clone-718d1/us-central1/api
