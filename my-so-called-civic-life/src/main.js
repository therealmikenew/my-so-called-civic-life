import Vue from "vue";
import VueTailwind from "vue-tailwind";
import VueRouter from "vue-router";
import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

import {
  TInput,
  TTextarea,
  // TSelect,
  // TRadio,
  // TCheckbox,
  TButton,
  // TInputGroup,
  // TCard,
  // TAlert,
  // TModal,
  // TDropdown,
  // TRichSelect,
  // TPagination,
  // TTag,
  // TRadioGroup,
  // TCheckboxGroup,
  // TTable,
  // TDatepicker,
  // TToggle,
  // TDialog,
} from "vue-tailwind/dist/components";

const components = [];

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }

  "normal-button": {
    component: TButton,
    props: {
      // See "override settings" section for more info about this
      type: "button",
    },
  },
  "t-input": {
    component: TInput,
    props: {
      classes: "border-2 block w-full rounded text-gray-800",
      // ...More settings
    },
  },
  "t-textarea": {
    component: TTextarea,
    props: {
      classes: "border-2 block w-full rounded text-gray-800",
      // ...More settings
    },
  },
  // ...Rest of the components
};

Vue.use(VueRouter, VueTailwind, components, settings);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
