import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "",
    // redirect: "/login",
    redirect: "/company/1/projects/1/editor",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../view/login"),
  },
  {
    path: "/company",
    name: "company",
    component: () => import("../view/company"),
    children: [
      {
        path: "all",
        name: "company-all",
        component: () => import("../view/company/companyAll/companyAll"),
      },
      {
        path: ":companyId",
        name: "companyId",
        component: () => import("../view/company/company"),
        children: [
          {
            path: "project",
            name: "project",
            component: () => import("../view/company/project"),
            children: [
              {
                path: "all",
                name: "project-all",
                component: () => import("../view/company/project/projectAll"),
              },
              {
                path: ":projectId",
                name: "projectId",
                component: () => import("../view/company/project/project"),
                children: [
                  {
                    path: "editor",
                    name: "editor",
                    component: () => import("../view/company/project/editor"),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "/tree",
    name: "tree",
    component: () => import("../view/DomTree/tree"),
  },
  {
    path: "/domTree",
    name: "domTree",
    component: () => import("../view/DomTree/domTree"),
  },
  {
    path: "/tab",
    name: "tab",
    component: () => import("../view/tab/tab"),
    // redirect: "/company/1/projects/1/editor",
  },
  {
    path: "/move",
    name: "move",
    component: () => import("../view/dom/move-dom"),
    // redirect: "/company/1/projects/1/editor",
  },
  {
    path: "/time-line",
    name: "time-line",
    component: () => import("../view/timeLine"),
  },
  {
    path: "/texture",
    name: "texture",
    component: () => import("../view/component/texture"),
  },
  {
    path: "/https",
    name: "https",
    component: () => import("../view/https"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
