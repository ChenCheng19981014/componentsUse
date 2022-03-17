import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "",
    redirect: "/login",
    // redirect: "/company/1/projects/1/editor",
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
        component: () => import("../view/company/companyAll"),
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
                component: () => import("../view/company/project"),
              },
              {
                path: ":projectId",
                name: "projectId",
                component: () => import("../view/company/project/projectmenu"),
                children: [
                  {
                    path: "editer",
                    name: "editer",
                    component: () => import("../view/company/project/editer"),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
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
