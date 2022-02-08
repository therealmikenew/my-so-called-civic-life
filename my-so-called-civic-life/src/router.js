import VueRouter from "vue-router";
import Home from "./components/Home";
import MyLegislation from "./components/MyLegislation";
import MyActions from "./components/MyActions";
import LegislationDetail from "./components/LegislationDetail";
import ActionDetail from "./components/ActionDetail";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/my-legislation", component: MyLegislation, name: "MyLegislation" },
  {
    path: "/my-legislation/:legislation_id",
    component: LegislationDetail,
    name: "LegislationDetail",
  },
  { path: "/my-actions", component: MyActions, name: "MyActions" },
  {
    path: "/my-actions/:action_id",
    component: ActionDetail,
    name: "ActionDetail",
  },
];

export default new VueRouter({
  routes,
  mode: "history",
});
