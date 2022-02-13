import Vue from "vue";
// import VueTailwind from "vue-tailwind";
// import VueTailwindSettings from "../VueTailwindSettings";
import VueRouter from "vue-router";
import router from "./router";
import App from "./App.vue";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

// import {
//   // TInput,
//   // TTextarea,
//   // TSelect,
//   // TRadio,
//   // TCheckbox,
//   TButton,
//   // TInputGroup,
//   // TCard,
//   // TAlert,
//   // TModal,
//   // TDropdown,
//   // TRichSelect,
//   // TPagination,
//   // TTag,
//   // TRadioGroup,
//   // TCheckboxGroup,
//   // TTable,
//   // TDatepicker,
//   // TToggle,
//   // TDialog,
// } from "vue-tailwind/dist/components";

// const settings = {
//   "normal-button": {
//     component: TButton,
//     props: {
//       // See "override settings" section for more info about this
//       type: "button",
//     },
//   },
//   // "t-input": {
//   //   component: TInput,
//   //   props: {
//   //     classes: "border-2 block w-full rounded text-gray-800",
//   //     // ...More settings
//   //   },
//   // },
//   // "t-textarea": {
//   //   component: TTextarea,
//   //   props: {
//   //     classes: "border-2 block w-full rounded text-gray-800",
//   //   },
//   // },

//   // "my-text-input": {
//   //   component: TInput,
//   //   props: {
//   //     classes: "border-2 block w-full rounded text-gray-800",
//   //   },
//   // },
// };

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
