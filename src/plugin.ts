import Vue, { VueConstructor, PluginObject } from "vue";
import { CmpOptions, createCmp, CmpObject } from "./Compfy";
import * as components from "./components";
import * as directives from "./directives";

declare module "vue/types/vue" {
  interface Vue {
    $cmp: CmpObject;
  }
}

export type PluginOptions = CmpOptions & {
  components: Partial<typeof components>;
  directives: Partial<typeof directives>;
};

const theme = {
  isDark: false,
  light: {
    primary: "#44DD62",
    white: "#FFFFFF",
    "grey-1": "#F7F7F7",
    "grey-2": "#D8D8D8",
    "grey-3": "#979797",
    "grey-4": "#454545",
    danger: "#E40000",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFA800",
    background: "var(--light-white)",
    foreground: "var(--light-grey-4)",
    border: "var(--light-grey-2)",
    popup: "var(--light-white)",
    placeholder: "#e0e0e0",
    hover: "#00000011",
    panel: "var(--light-grey-1)",
    disabled: "var(--light-grey-2)",
    label: "var(--light-grey-3)",
    selection: "#64E37D",
    error: "var(--light-danger)",
  },
  dark: {
    primary: "#44DD62",
    white: "#FFFFFF",
    "grey-1": "#F4F4F4",
    "grey-2": "#D8D8D8",
    "grey-3": "#979797",
    "grey-4": "#454545",
    danger: "#E40000",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFA800",
    background: "#1b1b1b",
    foreground: "var(--dark-grey-1)",
    border: "var(--dark-grey-3)",
    popup: "var(--dark-grey-3)",
    placeholder: "#E0E0E0",
    hover: "#00000011",
    panel: "var(--dark-grey-3)",
    disabled: "var(--dark-grey-2)",
    label: "var(--light-grey-3)",
    selection: "#64E37D",
    error: "var(--dark-danger)",
  },
};

const breakpoints = {
  xs: [0, 600],
  sm: [600, 960],
  md: [960, 1264],
  lg: [1264, 1904],
  xl: [1904, Infinity],
};

export const Compfy = {
  current: null as unknown as CmpObject,
  install(vue: typeof Vue, options: Partial<PluginOptions> = {}) {
    const opts: PluginOptions = Object.assign(
      {},
      {
        components,
        directives,
        theme,
        breakpoints,
        /* icons: {
          prefix: "cmi",
          defaults: {
            selectArrow: "chevron-bottom",
            paginationNext: "chevron-right",
            paginationPrev: "chevron-left",
            imageError: "image",
            chipClose: "lux_close",
            ...((options.icons && options.icons.defaults) || {}),
          },
        }, */
      },
      options
    );

    Compfy.current = createCmp(vue, opts);

    vue.prototype.$cmp = Compfy.current;

    for (const [name, directive] of Object.entries(opts.directives)) {
      vue.directive(name, directive);
    }

    for (const [name, component] of Object.entries(opts.components)) {
      vue.component(name, component as VueConstructor);
    }
  },
} as PluginObject<CmpOptions> & { current: CmpObject };

export default Compfy;
