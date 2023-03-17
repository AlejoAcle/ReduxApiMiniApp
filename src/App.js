import { Navbar } from "./components/Navbar";
import { UserList } from "./components/UserList";
//redux
import { Provider } from "react-redux";
import store from "./components/store";

function App() {
  return (
    //Provider engloba todos los componentes que quieres que pertenezcan a la store
    <Provider store={store}>
      <Navbar />
      <UserList />
    </Provider>
  );
}

export default App;
