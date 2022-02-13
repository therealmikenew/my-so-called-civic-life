import VueRouter from "vue-router";
import Home from "./pages/Home";
import MyLegislation from "./pages/MyLegislation.vue";
import LegislationDetail from "./components/LegislationDetail";
import MyActions from "./pages/MyActions";
import ActionDetail from "./components/ActionDetail";
import CreateActionForm from "./pages/CreateActionForm";
import CivicLeaderDetail from "./components/CivicLeaderDetail";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/my-legislation", component: MyLegislation, name: "MyLegislation" },
  // {
  //   path: "/my-legislation/:legislation_id",
  //   component: LegislationDetail,
  //   name: "LegislationDetail",
  // },

  {
    path: "/legislation-detail/:bill_id",
    component: LegislationDetail,
    name: "LegislationDetail",
  },
  { path: "/my-actions", component: MyActions, name: "MyActions" },
  {
    path: "/my-actions/:action_id",
    component: ActionDetail,
    name: "ActionDetail",
  },
  {
    path: "/action-form",
    component: CreateActionForm,
    name: "CreateActionForm",
  },
  {
    path: "/civic-leader/:civic_leader_id",
    component: CivicLeaderDetail,
    name: "CivicLeaderDetail",
  },
];

export default new VueRouter({
  routes,
  mode: "history",
});
