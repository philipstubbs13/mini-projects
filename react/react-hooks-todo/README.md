# Intro to React Hooks

* React Hooks To Do Tutorial: <https://www.youtube.com/watch?v=mxK8b99iJTg>
* <https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components>
* <https://www.youtube.com/watch?v=dpw9EHDh2bM>
* <https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889>
* Install React 16.7.0-alpha.2

  ```bash
  npm i -S react@16.7.0-alpha.2 react-dom@16.7.0-alpha.2
  ```

* useState Hook
  * Call it inside a function component to add some local state to i.
  * Returns a pair: the current state value and a function that lets you update it.
  * The function is similar to this.setState in a clase, except it doesn't merge the old and new state together.

* What is a Hook?
  * Hooks are functions that let you hook into React state and lifecycle features from function components.
  * Hooks don't work inside classes - they let you use React without classes.

* Effect Hook
  * The Effect Hook, useEffect, adds the ability to perform sideeffects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
  * When you call useEffect, you're telling React to run your effect function after flushing changes to the DOM.