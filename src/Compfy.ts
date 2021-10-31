/* eslint-disable @typescript-eslint/no-explicit-any */
/* import dayjs from "dayjs"; */
import Vue from "vue";

type CmpBreakpoints = Record<string, [number, number]>;
type CmpTheme = Record<string, string>;

export interface CmpOptions {
  breakpoints: CmpBreakpoints;
  /* icons: {
    prefix: string;
    defaults: Record<string, string>;
  }; */
  theme: {
    isDark: boolean;
    dark: CmpTheme;
    light: CmpTheme;
  };
}

export interface CmpObject extends CmpOptions {
  // dayjs: typeof dayjs;
  viewport: {
    width: number;
    height: number;
  };
  breakpoint: CmpBreakpoints;
  themeColors: CmpTheme;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createCmp(vue: typeof Vue, options: CmpOptions) {
  const vars = document.createElement("style");

  document.head.prepend(vars);

  return new vue({
    data() {
      return {
        theme: options.theme,
        /*  icons: options.icons, */
        viewport: {
          width: 0,
          height: 0,
        },
        breakpoint: {} as Record<string, number[]>,
      };
    },
    created() {
      window.addEventListener("resize", () =>
        this.updateBreakpoints(options.breakpoints)
      );
      this.updateBreakpoints(options.breakpoints);
    },
    watch: {
      theme: {
        deep: true,
        handler() {
          const themes = Object.entries(this.theme as CmpTheme);
          const colors = [
            ...new Set(themes.flatMap((theme) => Object.keys(theme[1]))),
          ];

          // Palete Vars
          let css = `:root{${themes
            .map(([theme, colors]) =>
              Object.entries(colors as any)
                .map(([name, color]) => `--${theme}-${name}:${color};`)
                .join("")
            )
            .join("")}}`;

          // Current color

          css += `.current--text {color: var(--current-color);}`;
          css += `.current--bg {background-color: var(--current-color);}`;

          // Theme Vars
          css += themes
            .map(
              ([theme, colors]) =>
                `.theme--${theme}{${Object.entries(colors as any)
                  .map(([name, color]) => `--theme-${name}:${color};`)
                  .join("")}}`
            )
            .join("");

          // Theme Classes
          css += colors
            .map((color) =>
              [
                `.${color}--var {--current-color: var(--theme-${color}) !important;}`,
                `.${color}--text {color: var(--theme-${color}) !important;}`,
                `.${color}--bg {background-color: var(--theme-${color}) !important;}`,
              ].join("")
            )
            .join("");

          if (vars.innerText !== css) {
            vars.innerText = css;
          }
        },
        immediate: true,
      },
    },
    computed: {
      /* dayjs(): typeof dayjs {
        return dayjs;
      }, */
      themeColors(): Record<string, any> {
        return this.theme.isDark ? this.theme.dark : this.theme.light;
      },
    },
    methods: {
      updateBreakpoints(medias: CmpBreakpoints) {
        this.$set(this, "viewport", {
          width: window.innerWidth,
          height: window.innerHeight,
        });

        const breakpoint: Record<string, boolean | string> = {
          current: "xs",
        };

        for (const type in medias) {
          const [min = 0, max = Infinity] = medias[type];

          breakpoint[`${type}AndUp`] = this.viewport.width >= min;
          breakpoint[type] =
            this.viewport.width >= min && this.viewport.width < max;
          breakpoint[`${type}AndDown`] = this.viewport.width < max;

          if (breakpoint[type]) {
            breakpoint.current = type;
          }
        }

        this.$set(this, "breakpoint", breakpoint);
      },
    },
  }) as CmpObject;
}
