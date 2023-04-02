interface IDarkModeReducer {
  state: any;
  action: any;
}

const DarkModeReducer = ({ state, action }: IDarkModeReducer) => {
  switch (action.type) {
    case "LIGHT": {
      return { darkMode: false }
    }
    case "DARK": {
      return { darkMode: true }
    }
    case "TOGGLE": {
      return { darkMode: !state.darkMode }
    }
    default:
      return state;
  }
}

export default DarkModeReducer;