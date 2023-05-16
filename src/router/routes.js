const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name:"home", component: () => import("pages/Home.vue") },
      { path: "what-we-do", component: () => import("pages/WhatWeDo.vue") },
      {
        path: "success-stories",
        component: () => import("pages/SuccessStories.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
