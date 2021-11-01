import Colorable from "@/mixins/colorable";
import Sizeable from "@/mixins/sizeable";
import { Component, Mixins, Prop } from "vue-property-decorator";

@Component
export default class CmpBtn extends Mixins(Colorable, Sizeable) {
  /** Desabilita botão */
  @Prop(Boolean)
  disabled!: boolean;

  /** Botão de ícone */
  @Prop(Boolean)
  icon!: boolean;

  /** Somente borda */
  @Prop(Boolean)
  outline!: boolean;

  /** Remove o fundo */
  @Prop(Boolean)
  flat!: boolean;

  /** Botão quadrado */
  @Prop(Boolean)
  squared!: boolean;

  /** Carregando */
  @Prop(Boolean)
  loading!: boolean;

  render() {
    return this.$createElement(
      "button",
      {
        staticClass: "cmp-btn",
        class: {
          ...this.colorClass[0],
          ...this.sizeClass,
          "cmp-btn--disabled": this.disabled,
          "cmp-btn--loading": this.loading,
          "cmp-btn--icon": this.icon,
          "cmp-btn--flat": this.flat,
          "cmp-btn--squared": this.squared,
          "cmp-btn--outline": this.outline,
        },
        domProps: {
          disabled: this.disabled,
          tabIndex: 0,
        },
        on: {
          ...this.$listeners,
        },
        directives: [{ name: "color", value: this.color }],
      },
      [this.$slots.default]
    );
  }
}
