import { createRouter, createWebHistory } from "vue-router"

import Lighter from "../components/Lighter"
import TrafficLighter from "../components/TrafficLighter"

const routes = [
  {
    path: "/",
    component: TrafficLighter,
    props: true,
  },
  {
    path: "/yellow",
    name: "yellow",
    component: Lighter,
    props: true,
  },
  {
    path: "/red",
    name: "red",
    component: Lighter,
    props: true,
  },
  {
    path: "/green",
    name: "green",
    component: Lighter,
    props: true,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
