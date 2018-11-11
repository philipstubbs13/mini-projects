# Building Serverless Web Applications with AWS Amplify - AWS Online Tech Talks

* <https://www.youtube.com/watch?v=uiTQL7Ne8rY>
* The CLI & toolchain for the client greatly lowers the barrier to entry for developers & companies looking to build full-stack applications allowing them to not only iterate & experiment quickly, but also giving them the ability to do so at a lower cost.

## Installing the CLI

```bash
npm i -g amplify-cli
```

## Initializing a new project

```bash
amplify init
```

## Adding a feature

```bash
amplify add auth
```

## Add library to project

```bash
npm install aws-amplify
```

## Add framework-specific library

```bash
npm install aws-amplify-react
```

## import component

```bash
import { Auth } from 'aws-amplify';
```

## Interact with services

```bash
Auth.signIn({
  username: this.state.username,
  password: this.state.password,
})
.then(success => console.log('user successfully signed in!')
.catch(err => console.log('error signing in user...', err)
```

