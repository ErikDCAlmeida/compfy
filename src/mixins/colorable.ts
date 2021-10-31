import { Component, Mixins, Prop } from "vue-property-decorator";
import Themeable from "./themeable";

/**
 * Adiciona opções de cor para o componente
 * @mixin Colorable
 * @extend Themeable
 */
@Component
export default class Colorable extends Mixins(Themeable) {
  /** Define a cor do componente */
  @Prop({ type: String, default: "primary" })
  color!: string;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get colorClass() {
    return [this.themeClass];
  }
}
