// App.js
import {Provider} from "react-redux"
import store from "./src/redux/store" // remove the curly braces
import Appcontainer from "./src/routes" // remove the curly braces

export default function App() {
    return (
        <Provider store={store}>
            <Appcontainer />
        </Provider>
    )
}
