import type Vue from "vue";
import * as components from "./components";

export default function (vue: typeof Vue): void {
  for (const [name, component] of Object.entries(components)) {
    vue.component(name, component);
  }
}
