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
