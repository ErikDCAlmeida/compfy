import { Vue, Component, Prop } from "vue-property-decorator";

/**
 * Adiciona propriedades de tamanho ao componente
 * @mixin Sizeable
 */
@Component({ name: "sizeable" })
export default class Sizeable extends Vue {
  /** Tamanho extra-pequeno */
  @Prop(Boolean)
  xSmall!: boolean;

  /** Tamanho pequeno */
  @Prop(Boolean)
  small!: boolean;

  /** Tamanho grande */
  @Prop(Boolean)
  large!: boolean;

  /** Tamanho extra-grande */
  @Prop(Boolean)
  xLarge!: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get sizeClass(): Record<string, any> {
    return {
      "cmp-size--x-small": this.xSmall,
      "cmp-size--small": this.small,
      "cmp-size--large": this.large,
      "cmp-size--x-large": this.xLarge,
    };
  }
}
