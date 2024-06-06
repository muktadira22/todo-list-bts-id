
import defaultTheme from "tailwindcss/defaultTheme";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["ri"]),
    }),
  ],
}

