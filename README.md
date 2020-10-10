# [New Calendar API](https://new-calendar-be.herokuapp.com/)

## Motivation

As a Team Lead at Lambda School, we meet all kinds of unique and amazing people. The creator of the New Calendar is Tom Sherman (Class of 35, Web), who claims he discovered a 5th season of the year and created a "new calendar" that is more accurate, precise, and reusable than the current Gregorian Calendar system.

The following is a brief explanation of the New Calendar project, more information can be found on [the New Calendar website](https://theNewCalendar.com).

How long is a foot? 12 inches.
How cold is ice? 32°.
How heavy is a pound? 16 oz.
How long is a month? Weelll that depends, it could be 30 or 31 days, maybe 28.

(note: for all you metric users ranting right now about the use of imperial measurement systems in the example above, at least the imperial system maintains standards where a foot is 12 inches every time, not sometimes 13 and sometimes 11...)

The calendar is the only modern measurement system that does not adhere to sound metrological principles, such as standardized units that compound in unison with each other to create a predictable, accurate, and precise measurement.

This is because unlike most modern measurement systems, which were all created during or after the Enlightenment and Age of Reason, the current calendar is a 3,000 year old system last updated in 1582 by Pope Gregory, at a time when the cutting edge science thought the Earth was the center of the Universe and Galileo had yet to create the field of physics!

When analyzing time in an attempt to structure it into a coherent measurement systemits clear not all timekeeping systems are constructed so haphazardly. In fact, clock time is very orderly, where:

60 seconds => 1 minute ; 60 minutes => 1 hour ; 24 hours => 1 day

Likewise, after a year, time compounds quite nicely:

10 years => 1 decade ; 10 decades => 1 century ; 10 centuries => 1 millennium

However, it is between 1 day and 1 year where things fall apart:

7 days => 1 week ; 4-4.42 weeks => 1 month (can range from 28-31 days) ; 3 months => 1 quarter/season (can range from 90-92 days) ; 4 quarters/seasons => 1 year

Moreover, the units to not work in unison with each other, so you can start a new month mid-week, which is like if we started a new day mid-hour...madness!

In order to divide time evenly into standardized units that maintain precision and accuracy in perpetuity, we must use our powers of modern mathematics to determine the base factors available that can divide the year into even segments.

As it turns out, 365 only has 2 base factors:

         365
        /   \
       5  x  73

Therefore, the year can only be divided into 5ths. When the year is divided into 5 periods of 73 days each and we set them to start on the Winter Solstice (of the Northern Hemisphere), the 5 seasons of the year are revealed:

Winter: `December 21 - March 3rd` - Coldest, darkest time of year, days always getting longer.

Spring: `March 4 - May 15` -------- First growing season, flowers/trees bud, pollination (aka allergies), migrations
occur, Spring Equinox observed.

Summer: `May 16 - July 27` -------- Hot, long days, plants fully leafed out, everything is green

Autumn: `July 28 - October 8` ----- Second growing season (corn, watermelon, squash come in), second rounds flowering &
pollination (colloquially called hayfever), migration patterns begin to reverse, the Autumnal Equinox observed.

& Fall: `October 9 - December 20` - Leaves change colors, fall on the ground. Nights get long, dark, and cold.

And so the New Calendar was born.

For more information on the New Calendar project, visit the [New Calendar website](https://thenewcalendar.com)

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

Search by query `days?query=xx`

- day = Number 1 - 365
- nDay = Number 1 - 73
- seasonIn = winter, spring, summer, autumn, fall
- monthIn = early, mid, late
- gregDay = PENDING
- holiday = PENDING
- birthday = PENDING

Advanced queries can chaing together like `days/?monthIn=late&seasonIn=winter`

### /api/v1/days

| HTTP Verb | URI  | Query      | Data                     |
| :-------- | :--- | :--------- | :----------------------- |
| GET       | /    | `?day=1`   | returns day = 1          |
| GET       | /:id |            | returns document by \_id |
| POST      | /    | authorized | adds new day             |
| PATCH     | /:id | authorized | modifies day by \_id     |
| DELETE    | /:id | authorized | deletes day by \_id      |

## Contribute

Want to contribute? See the [CONTRIBUTE](https://github.com/mrzacsmith/new-calendar-be/blob/master/CONTRIBUTE.md) documentation! Thanks for keeping open source strong!

## Credits

_The New Calendar_ Copyright and all rights reserved 2019-9999 [Tom Sherman](https://github/tompsherman)

## License

_Begin license text._

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

_End license text._

MIT Copyright [Zac Smith](https://github.com/mrzacsmith)
