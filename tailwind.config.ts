import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#3E4EB1', 
        color2: '#1D265D', 
        color3: '#0F00B7',
        color4: '#070056',
        colorText1: '#FFFFFF',
      },
    },
  }
};
export default config;
