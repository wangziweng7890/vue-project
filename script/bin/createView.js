"use strict";

console.log("start");
process.on("exit", () => {
  console.log("exit");
});

const allRoutes = [
  "Home/Home",
  "AboutBridge/Team",
  "AboutBridge/Partners",
  "AboutBridge/RelatedProjects",
  "HowWeWork/Roadmap",
  "HowWeWork/SubProjects",
  "HowWeWork/Deliverables",
  "Dissemination/News",
  "Dissemination/Webinars",
  "Dissemination/SocialMedia",
  "Impact/ScientficImpact",
  "Impact/Publications",
  "Impact/Databsets",
];

function getVueTemplate() {
  return `<script setup lang="ts">
import { reactive } from "vue";
</script>
<template>

</template>
<style scoped>

</style>`;
}

function getRouteTemplate(routes) {
  return `export default [
    ${routes
      .map((item) => {
        return `{
        path: '/${item.path}',
        name: '${item.path}',
        component: () => import('${item.fullPath}')
    }`;
      })
      .join(", ")}
  ]`;
}

async function createView(f) {
  const exists = await fs.pathExists(f);
  if (exists) return;
  await fs.ensureFile(f);
  await fs.outputFile(f, getVueTemplate());
}

async function createRoute(routes) {
  await fs.outputFile(
    path.resolve(__dirname, "../../src/router/routes.ts"),
    getRouteTemplate(routes)
  );
}

async function init() {
  await Promise.all(
    allRoutes.map((item) => {
      createView(`src/views/${item}.vue`);
    })
  );
  await createRoute(
    allRoutes.map((item) => {
      return {
        fullPath: `../views/${item}.vue`,
        path: item
          .split("/")
          .map((v) => nameChanged(v))
          .join("/"),
      };
    })
  );
}

function nameChanged(string) {
  // 将string的第一个字母转小写，之外的大写字母加-转小写
  let n = string.replace(string[0], string[0].toLowerCase());
  const stringArray = n.split(""); // 将字符串分割成相应的字符串数组
  let newStr = "";
  stringArray.forEach((t) => {
    if (t >= "A" && t <= "Z") {
      newStr += "-" + t.toLowerCase();
    } else {
      newStr += t;
    }
  });
  return newStr;
}

const path = require("path");
const fs = require("fs-extra");

init();
