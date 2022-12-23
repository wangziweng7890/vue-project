export default [
  {
    path: "/",
    name: "home/home",
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/about-bridge/team",
    name: "about-bridge/team",
    component: () => import("../views/AboutBridge/Team.vue"),
  },
  {
    path: "/about-bridge/partners",
    name: "about-bridge/partners",
    component: () => import("../views/AboutBridge/Partners.vue"),
  },
  {
    path: "/about-bridge/related-projects",
    name: "about-bridge/related-projects",
    component: () => import("../views/AboutBridge/RelatedProjects.vue"),
  },
  {
    path: "/how-we-work/roadmap",
    name: "how-we-work/roadmap",
    component: () => import("../views/HowWeWork/Roadmap.vue"),
  },
  {
    path: "/how-we-work/sub-projects",
    name: "how-we-work/sub-projects",
    component: () => import("../views/HowWeWork/SubProjects.vue"),
  },
  {
    path: "/how-we-work/deliverables",
    name: "how-we-work/deliverables",
    component: () => import("../views/HowWeWork/Deliverables.vue"),
  },
  {
    path: "/dissemination/news",
    name: "dissemination/news",
    component: () => import("../views/Dissemination/News.vue"),
  },
  {
    path: "/dissemination/webinars",
    name: "dissemination/webinars",
    component: () => import("../views/Dissemination/Webinars.vue"),
  },
  {
    path: "/dissemination/social-media",
    name: "dissemination/social-media",
    component: () => import("../views/Dissemination/SocialMedia.vue"),
  },
  {
    path: "/impact/scientfic-impact",
    name: "impact/scientfic-impact",
    component: () => import("../views/Impact/ScientficImpact.vue"),
  },
  {
    path: "/impact/publications",
    name: "impact/publications",
    component: () => import("../views/Impact/Publications.vue"),
  },
  {
    path: "/impact/databsets",
    name: "impact/databsets",
    component: () => import("../views/Impact/Databsets.vue"),
  },
];
