# Cloud Functions

## Getting Started with Cloud Firestore with Node.js - Firecasts

* <https://www.youtube.com/watch?v=Z87OZtIYC_0>
* The admin sdk allows you to access firebase features server side so you can read and write to cloud firestore outside of the client.

## Introduction to Firebase Cloud Functions

* <https://www.youtube.com/watch?v=QP8sjZuOlFY&t=194s>

```bash
npm install -g firebase-tools
firebase
firebase login
firebase init functions
firebase deploy --only functions
firebase deploy --only functions:helloWorld
```

## Getting started with node.js on Google Cloud Functions - console & gcloud cli

* <https://www.youtube.com/watch?v=MgivoBkvS5o&list=PLoZcQiQmH1DXzNSvuZ6yx8sXH0WpYGLa6&index=4&t=1s>
* install google cloud sdk

```bash
gcloud init
```

* Deploy functions using node

```bash
gcloud functions deploy 'testfunc' --runtime nodejs8 --trigger-http --entry-point=myFunction
```

```bash
gcloud functions event-types list
```

## Firebase Cloud Functions - Run Code on Demand

* <https://www.youtube.com/watch?v=qcECaRgU4uI>
* Serverless Event-Driven Code
* No Server Management Required.
  * Don't worry about updates, security (of server)
  * infinite scalability
  * separation of concerns
* code runs upon certain events
  * predictable executions
  * no idle time
  * code environment only exists when needed.
* write only what you need
  * focus on business logic
  * use third-party libraries if needed.
  * currently supports node.js
* Event Sources
  * Firestore
    * onCreate, onUpdate, onDelete, onWrite
    * e.g. validate and/or transform data
  * Realtime Database
    * onCreate, onUpdate, onDelete, onWrite
    * e.g. validate and/or transform data.
  * Authentication
    * onCreate, onDelete
    * e.g. send welcome email
  * Google Analytics
    * on AnalyticsEvents
    * e.g. write to database, send notification
  * Crashlytics
    * on Crash or Issue detected
    * e.g. write to database, send notification
  * Cloud Storage
    * onChange [ on Objects]
    * e.g. image optimization
  * Pub/Sub
    * onPublish
    * e.g. write to database
  * HTTP
    * onRequest
    * e.g. create REST endpoints

## Cloud Functions for Firebase - Tutorials

* <https://www.youtube.com/playlist?list=PLl-K7zZEsYLkPZHe41m4jfAxUi0JjLgSM>

* Run to ensure you have latest versions:

```bash
npm install firebase-admin@latest firebase-functions@latest
```

* Deploy

```bash
firebase deploy
```

* Rules for terminating a cloud function.
  1. HTTP triggers - send a response at the end.
  2. Background triggers - return a promise.

* Run http function locally to test before deploying using firebase cli:

```bash
cd functions/
npm run-script lint
npm run-script build
firebase serve --only functions
curl http://localhost:5000/firecast-app-73f2a/us-central1/getBostonWeather
```

```bash
const finalPromise = doSomeWork()
  .then(results => {
    return doMoreWork(results)
  })
  .then(results => {
    return doLastBitOfWork(results)
  })
  .catch(error => { . . . })
```

```bash
const p1 = doSomeWork(1)
const p2 = doSomeWork(2)
const p3 = doSomeWork(3)
const pMany = [p1, p2, p3]
const finalPromise = Promise.all(pMany)
finalPromise.then(results => {
  results.forEach(result => { . . . })
})
.catch(error => { . . . })
```

* Async/await
  * async functions always return a promise.
  * for async functions, a non-promise return value is wrapped in a promise.
  * await pauses an async function until a promise is complete.
  * await can be only used inside an async function.
