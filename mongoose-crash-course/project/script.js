const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

run()
async function run() {
    // try {
    //     const user = await User.create({
    //         name: "Kyle",
    //         age: 26,
    //         email: "TEST@test.com",
    //         hobbies: ["Weight Lifting", "Bowling"],
    //         address: {
    //             street: "Main St"
    //         }
    //     })
    //     user.name = "Sally"
    //     await user.save()
    //     // const user = new User({ name: "Kyle", age: 26 })
    //     // await user.save().then(() => console.log("User Saved"))
    //     console.log(user)
    // } catch (e) {
    //     console.log(e.message)
    // }

    // try {
    //     const user = await User.where("age")
    //         .gt("12")
    //         .where("name")
    //         .equals("Kyle")
    //         .populate("bestFriend")
    //         .limit(1)
    //         .select("age")
    //     // user[0].bestFriend = "62bea057bfdb74bf2b010374"
    //     // await user[0].save()
    //     console.log(user)
    // } catch (e) {
    //     console.log(e.message)
    // }

    // try {
    //     const user = await User.findOne({ name: "Kyle" })
    //     console.log(user)
    //     await user.save()
    //     // console.log(user.namedEmail)
    //     user.sayHi()
    // } catch (e) {
    //     console.log(e.message)
    // }
}
