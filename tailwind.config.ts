import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sage': '#B2BCA3',
        'terracotta': '#C1664A',
        'pastel-beige': '#F5F5F0',
      },
    },
  },
  plugins: [],
} satisfies Config;