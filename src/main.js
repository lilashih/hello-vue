import { createApp } from "vue";
import App from "@/App.vue";
import "@/css/index.css";

import FontAwesomeIcon from "@/plugins/font-awesome";

createApp(App)
  .component("Fa", FontAwesomeIcon)
  .mount("#app");