import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'neue-plak': ['"Neue Plak Condensed Black"', 'sans-serif'],
        'neue-plak-regular': ['Neue Plak Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;