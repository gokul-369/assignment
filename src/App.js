import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Conversations from "./Components/Conversations";
import DetailsView from "./Components/DetailsView";
import SideBar from "./Components/SideBar";

import { Provider } from 'react-redux'

import conversationReducer from "./Reducers/Conversation.Reducer";
import detailsReducer from "./Reducers/DetailsView.Reducer";

const rootReducer = combineReducers({ conversationReducer,detailsReducer })
const store = configureStore({ reducer: rootReducer })

function App() {
  return (
    <Provider store={store}>
      <div className="flex-center">
        <SideBar />
        <Conversations />
        <DetailsView />
      </div>
    </Provider>
  );
}

export default App;
