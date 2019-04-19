export const createProject = (project) => {
  return (dispatch, getState) => {
    // make asycn call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  }
}