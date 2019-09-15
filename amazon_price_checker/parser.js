// https://temp-mail.org/

require('dotenv').config()
process.env.SENDGRID_API_KEY
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const nightmare = require('nightmare')()

const args = process.argv.slice(2)
const url = args[0]
const minPrice = args[1]

// "https://www.amazon.com/Samsung-970-Plus-MZ-V7S1T0B-AM/dp/B07MFZY2F2"
// node parser.js "https://www.amazon.com/Samsung-970-Plus-MZ-V7S1T0B-AM/dp
// /B07MFZY2F2" 150
checkPrice();

async function checkPrice() {
  try {
    const priceString = await nightmare.goto(url)
                                     .wait("#priceblock_ourprice")
                                     .evaluate(() => document.getElementById("priceblock_ourprice").innerText)
                                    .end()
    const priceNumber = parseFloat(priceString.replace('$', ''))
    if(priceNumber < minPrice) {
      await sendEmail(
        'Price Is Low',
        `The price on ${url} has dropped below ${minPrice}`
      )
      // console.log('It is cheap')
    }
  } catch (e) {
    await sendEmail('Amazon Price Checker Error', e.message)
    throw e
  }

}

function sendEmail(subject, body) {
  const email = {
    to: 'dorobaw@mail-file.net',
    from: 'amazon-price-checker@example.com',
    subject: subject,
    text: body,
    html: body
  }

  return sgMail.send(email)
}