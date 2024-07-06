import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["saira", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
