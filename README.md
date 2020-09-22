# [New Calendar API](https://new-calendar-be.herokuapp.com/)

## Motivation

As a Team Lead at Lambda School, we meet all kinds of unique and amazing people. The creator of the New Calendar is Tom Sherman (Class of 35, Web). He added the 5th season of the year and modified the calendar so that it works with modern understanding that was not available.

## Tech / Framework

### Built with

- NodeJs
- ExpressJS
- MongoDB
- Heroku

### Dependencies

- express
- morgan
- mongoose
- chalk
- cors
- helmet

### Dev-dependencies

- nodemon
- dotenv

## Features

## Installation

Installation is simple, fork or clone this repository:

- `git clone URL`
- `cd NAME`
- `npm install`

## API Reference

Complete [API documentation](https://app.swaggerhub.com/apis-docs/mrzacsmith/new-calendar/0.1)!

## Tests

## How to use?

Search by param `days?query=xx`
Options:

- day = Number 1 - 365
- nDay = Number 1 - 73
- seasonIn = winter, spring, summer, autumn, fall
- monthIn = early, mid, late
- holiday = PENDING
- birthday = PENDING

Advanced queries can chaing together like `days/?monthIn=late&seasonIn=winter`

### /api/v1/days

| HTTP Verb | URI  | Params     | Data                     |
| :-------- | :--- | :--------- | :----------------------- |
| GET       | /    | `?day=1`   | returns day = 1          |
| GET       | /:id |            | returns document by \_id |
| POST      | /add | authorized | adds new day             |
| PATCH     | /:id | authorized | modifies day by \_id     |
| DELETE    | /:id | authorized | deletes day by \_id      |

## Contribute

Want to contribute? See the [CONTRIBUTE](https://github.com/mrzacsmith/new-calendar-be/blob/master/CONTRIBUTE.md) documentation! Thanks for keeping open source strong!

## Credits

_The New Calendar_ Copyright and all rights reserved 2019-2020 [Tom Sherman]()

## License

_Begin license text._

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

_End license text._

MIT Copyright [Zac Smith](https://github.com/mrzacsmith)
