/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', '**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        source: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
