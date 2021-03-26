const myReducer = (state, action) => {
  switch (action.type) {
    case "DELETE-DATA":
      return " ";
    case "STORE-DATA":
      return { ...state, myData: action.data };
    case "ADD-DATA":
      return " ";
  }
};
export default myReducer;
