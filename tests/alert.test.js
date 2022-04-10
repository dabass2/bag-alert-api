import app from "../lib/app"
import convert_to_alerts from "../lib/helpers"
import supertest from "supertest"

test("GET /alert", async () => {
  await supertest(app).get("/alert")
    .expect(200)
    .then((res) => {
      expect(res.body.active_alert).toBeDefined()
    })
})

test("test hour mapper", async () => {
  let mapped = await convert_to_alerts(2, 24)
  expect(mapped).toBe(35)
})

test("test minute mapper", async () => {
  let mapped = await convert_to_alerts(45, 60)
  expect(mapped).toBe(322)
})

test("test second mapper", async () => {
  let mapped = await convert_to_alerts(31, 60)
  expect(mapped).toBe(222)
})