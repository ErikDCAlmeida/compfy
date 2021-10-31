/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";

/**
 * Adiciona propriedades de tema
 * @mixin Themeable
 */
export default Vue.extend({
  name: "themeable",
  props: {
    /** Utilizar tema escuro */
    dark: Boolean,
    /** Utilizar tema claro */
    light: Boolean,
  },
  provide(): Record<string, any> {
    return {
      theme: this.themeableProvide,
    };
  },
  inject: {
    theme: {
      default: null,
    },
  },
  data() {
    return {
      themeableProvide: {
        isDark: this.dark,
        name: this.$options.name,
      },
    } as {
      themeableProvide: { isDark: boolean; name: string };
      theme: { isDark: boolean };
    };
  },
  computed: {
    isDark(): boolean {
      if (this.light) return false;
      if (this.dark) return true;
      if (!this.theme) return this.$cmp?.theme.isDark;
      return this.theme.isDark;
    },
    themeClass(): Record<string, any> {
      return {
        "theme--dark": this.isDark,
        "theme--light": !this.isDark,
      };
    },
  },
  watch: {
    isDark: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.themeableProvide.isDark = newVal;
        }
      },
      immediate: true,
    },
  },
});
