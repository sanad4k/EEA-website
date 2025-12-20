/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#f63b3bff',
        secondary: '#8b5cf6',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [],
}
