import { legacy_createStore as createStore } from "redux"; // Yeni isimlendirme!
import reducers from "./index";

export default function configureStore() {
    return createStore(reducers);
}
