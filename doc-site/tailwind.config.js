/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,astro}", // ⚠️ Inclure les fichiers .astro
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 3px 8px rgba(0, 0, 0, 0.24)',
        'custom-lg': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
      },
       colors: {
        primary: '#F57C00',       // Orange vif du logo
        secondary: '#F5F5F5',     // Orange clair (hover, accents)
        neutral: '#4A4A4A',       // Gris foncé (texte)
        muted: '#BDBDBD',         // Gris clair (fond, hover)
        dark: '#333333',          // Noir doux (textes secondaires)
      },
      fontFamily: {
        title: ['"Lobster"', 'cursive'],   // Pour les titres
        ubuntu: ['"Ubuntu Sans"'],
        "ubuntu-condensed": ['"Ubuntu Sans Condensed"', "sans-serif"],
        "ubuntu-semi-condensed": ['"Ubuntu Sans Semi-Condensed"', "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      screens: {
        'mobile-s': '320px',
        'mobile-m': '375px',
        'mobile-l': '425px',
        tablet: '768px',
        laptop: '1024px',
        'laptop-l': '1440px',
        desktop: '1920px',
        '4k-screen': '2560px'
      },
      height: {
        '900': '900px'
      },
      zIndex: {
        'navbar': 1000,
      },
    },
  },
  plugins: [],
};
