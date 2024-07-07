import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["saira", ...fontFamily.sans],
      },
      spacing: {
        "fluid-500-800": "clamp(500px, 395.6522px + 32.6087vi, 800px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
