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
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
