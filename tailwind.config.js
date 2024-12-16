/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-hero': 'rgb(139, 92, 246)',
        'hero-highlight': 'rgba(139, 92, 246, 0.2)',
      },
    },
  },
  plugins: [],
}

