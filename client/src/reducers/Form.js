const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export {reducer};
