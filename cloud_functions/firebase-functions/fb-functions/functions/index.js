/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase Cloud Functions");
});

exports.insertIntoDB = functions.https.onRequest((req, res) => {
  const text = req.query.text;
  admin.database().ref('/test').push({ text: text}).then(snapshot => {
    res.redirect(303, snapshot.ref);
  })
});

exports.convertToUppercase = functions.database.ref('/test/{pushId}/text').onWrite(event => {
  const text = event.data.val();
  const uppercaseText = text.toUpperCase();
  return event.data.ref.parent.child('uppercaseText').set(uppercaseText);
});






// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
