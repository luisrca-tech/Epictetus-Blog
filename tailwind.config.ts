import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      white: "rgb(var(--white) / <alpha-value>)",
      base: {
        100: "rgb(var(--100) / <alpha-value>)",
        200: "rgb(var(--200) / <alpha-value>)",
        300: "rgb(var(--300) / <alpha-value>)",
      },
      gradient: {
        100: "rgb(var(--gradient-100) / <alpha-value>)",
        200: "rgb(var(--gradient-200) / <alpha-value>)",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", ...fontFamily.sans],
    },
  },
  plugins: [],
} satisfies Config;
