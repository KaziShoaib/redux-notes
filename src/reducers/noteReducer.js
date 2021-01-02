
const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
];


const noteReducer = ( state = initialState, action ) => {
  switch(action.type){
    case 'NEW_NOTE':
      return [...state, action.data];
    case 'TOGGLE_IMPORTANCE':{
      //this case is wrapped in {} because we declared constants here
      //if the {} is not given eslint will give errors
      const id = action.data.id;
      const noteToChange = state.find(n => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      };
      return state.map(n => n.id !== id ? n : changedNote);
    }
    default:
      return state;
  }
};

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const createNote = (content) => {
  return {
    type : 'NEW_NOTE',
    data : {
      content: content,
      important: false,
      id: generateId()
    }
  };
};


export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  };
};

export default noteReducer;