import express, { json } from "express";
import bags from "./endpoints/bags.js";

const app = express();

app.use( json() )

app.get("/alert", async (_,res) => {
  let bag_alert = await bags.check_alert()
  if (bag_alert === null) {
    res.status(400).json({error: true, message: "An error occured when checking for current alert."})
    return
  }
  
  console.log("Current bag alert status:", bag_alert)
  res.status(200).json({active_alert: bag_alert})
})

export default app