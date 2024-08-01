import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      white: "rgb(var(--white) / <alpha-value>)",
      base: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        tertiary: "rgb(var(--tertiary) / <alpha-value>)",
      },
      gradient: {
        primary: "rgb(var(--gradient-primary) / <alpha-value>)",
        secondary: "rgb(var(--gradient-secondary) / <alpha-value>)",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", ...fontFamily.sans],
    },
  },
  plugins: [],
} satisfies Config;
