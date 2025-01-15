import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ColorPalete_1' : '#2E5077',
        'ColorPalete_2' : '#4DA1A9',
        'ColorPalete_3' : '#79D7BE',
        'ColorPalete_4' : '#F6F4F0'
      },
    },
  },
  plugins: [],
} satisfies Config;
