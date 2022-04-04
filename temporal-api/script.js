import { Temporal } from "@js-temporal/polyfill";

// const now = Temporal.ZonedDateTime.from({
//     year: 2022,
//     month: 1,
//     day: 1,
//     timeZone: Temporal.Now.timeZone()
// })
// console.log(now.toString())


// const now = Temporal.Now.plainDateISO()
// const newDate = now.add({ days: 1, months: 3, years: 2 });

// console.log(now.toString())
// console.log(newDate.toString())


// const now = Temporal.Now.plainDateISO()
// const now2 = new Temporal.PlainDate(2022, 1, 1)

// console.log(now.equals(now2))
// console.log(now.since(now2).toString())
// console.log(now.until(now2).toString())
// console.log(now.with({ year: 2021 }).toString())


// const now = Temporal.Now.plainDateTimeISO()

// console.log(now.round({ smallestUnit: "hour", roundingIncrement: 4, roundingMode: "cell" }).toString())



// const now = Temporal.Now.plainDateISO()
// const yesterday = now.subtract({ days: 1 })
// const tomorrow = now.add({ days: 1 })
// const days = [now, yesterday, tomorrow]
// const sortedDays = days.sort(Temporal.PlainDate.compare)
// console.log(sortedDays.map(d => d.toString()))



// const now = Temporal.Now.plainDateISO()
// const duration = Temporal.Duration.from({ days: 3, months: 4 })
// console.log(duration.toString())
// console.log(now.add(duration).toString())
// console.log(duration.negated().toString())
// console.log(duration.negated().abs().toString())
// console.log(duration.total({ unit: "minutes", relativeTo: now }))
