const initState = {
  projects: [
    {id: '1', title: 'help me find apple', content: 'blah blah blah'},
    {id: '2', title: 'collect all stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hint with usi', content: 'blah blah blah'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('create project : '+action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project : '+action.err);
      return state;    
    default:
      return state;
  }
}

export default projectReducer