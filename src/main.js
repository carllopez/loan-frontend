import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store"

// Vue.prototype.$config = JSON.stringify({
//   apiUrl: 'http://localhost:8000'
// })

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
