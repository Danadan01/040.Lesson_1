const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

const port = 8000;

const orders = [
  {
    id:1,
    name:"Pants",
    units:2,
    price:500
  },
  {
    id:2,
    name:"Jacket",
    units:5,
    price:5725
  },
  {
    id:3,
    name:"Socks",
    units:10,
    price:430
  },
  {
    id:4,
    name:"Shirt",
    units:1,
    price:200
  },
  {
    id:5,
    name:"Hat",
    units:3,
    price:1500
  }
];

const app = express();

app.use(bodyParser.json());

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/", router);

app.get("/orders", (req, res) => {
  res.send(orders);
  console.log("Orders requested!");
});

app.post("/orders/", (req, res) => {
  console.log("Adding order");
  const order = req.body;
  orders.push(order);
  console.log(order);
});

app.put("/orders/:id", (req, res) => {
  console.log("Updating order");
  const {id} = req.body;
  orders.splice(id-1, 1, updatedOrder);
  console.log(updatedOrder);
});

app.delete("/orders/:id", (req, res) => {
  console.log("Deleting order");
  const {id} = req.body;
  orders.splice(id-1, 1);
  console.log(id);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});