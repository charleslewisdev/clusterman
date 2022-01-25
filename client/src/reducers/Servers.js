const initialState = {
  isEditOpen: false,
  lastUpdatedAt: null,
  list: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_EDIT_OPEN':
      return {
        ...state,
        isEditOpen: action.isEditOpen,
      };
    case 'SET_LAST_UPDATED_AT':
      return {
        ...state,
        lastUpdatedAt: action.lastUpdatedAt,
      };
    case 'SET_LIST':
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export {initialState, reducer};
