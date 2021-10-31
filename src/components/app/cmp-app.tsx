import Themeable from "@/mixins/themeable";
import { Component, Prop, Mixins } from "vue-property-decorator";

@Component
export default class CmpTemplate extends Mixins(Themeable) {
  @Prop({ type: String, default: "" })
  title!: string;

  render() {
    return (
      <div class={["cmp-app", this.themeClass]}>{this.$slots.default}</div>
    );
  }
}
