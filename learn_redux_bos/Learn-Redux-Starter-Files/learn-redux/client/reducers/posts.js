
// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incremeting likes');
      const i = action.index;
      return [
        ...state.slice(0, i), // before the onwe we are updating
        {...state[i], likes: state[i].likes + 2},
        ...state.slice(i + 1), // after the one we are updating
      ]
    // return the updated state
    default:
      return state;
  }
}

export default posts;