# Major Bag Alert API

The `Major Bag Alert` API is a low overhead, cross platform, RESTful API (Application Programming Interface) built on the powerful [Express](https://expressjs.com/) framework and [Node.js](https://nodejs.org/en/) while utilizing industry-defining Neural Network techniques.

`Major Bag Alert`, at its core, is an API that can be used to determine if any given moment in time is considered a "Major Bag Alert", as defined in the hit song *Major Bag Alert* by DJ Khaled featuring Migos.

## Usage
Since the `Major Bag Alert` API is a RESTful API, it can be accessed with a simple `GET` request. An example would be

    axios.get("https://alert.leinad.pw")
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })

Which could return

    {"active_alert": false}

A full list of all the endpoints supported by the `Major Bag Alert` API are listed below

> GET Requests
> - "/" => Returns True for active Bag Alert and False otherwise

See an example of the `Major Bag Alert` API in action [here!](https://github.com/dabass2/Discord-Bot/blob/master/commands/bag.js)

## Local Installation

To install the `Major Bag Alert` API locally, follow these steps

1. Clone the repo
  > git clone https://github.com/dabass2/bag-alert-api.git
2. Install dependencies
  > npm install OR yarn install
3. Run the server
  > npm run dev OR node(mon) src/server.js

### To Run Tests

`Major Bag Alert` comes fully installed with exhaustive test coverage. These tests can be found in the `tests` folder in the root directory.

To run tests simply run
> npm run test

This will run Jest with test coverage as well

(NOTE: `Major Bag Alert` API is written using cutting edge, industry defining Javascript techniques such as ES6 Modules, and as such must use experimental Node features to run Jest.)

---

`Major Bag Alert` is released under the [MIT License](https://opensource.org/licenses/MIT) and is also very good and useful. also pls stream bts 