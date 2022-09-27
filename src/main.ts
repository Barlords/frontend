import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import ProductsHttpService from "@/services/products-http-service";
import Card from "primevue/card";
import Skeleton from "primevue/skeleton";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";

const productService = new ProductsHttpService();

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);

// Components
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("Card", Card);
app.component("Skeleton", Skeleton);
app.component("Toast", Toast);

// Dependency injection
app.provide("productService", productService);

app.mount("#app");
