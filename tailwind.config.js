// tailwind.config.js
export default {
  content: [
    './index.html', // If you have a static HTML
    './src/**/*.{js,jsx,ts,tsx}', // React files
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        spaceMono: ['Space Mono', 'monospace'],
        inter:["Inter",'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = {
  
}