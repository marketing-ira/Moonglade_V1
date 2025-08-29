/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      colors: {
        primaryText: '#181B20',
        secondaryText: '#1D256C',
        primaryTitleText : '#FFFFFF',
        placeholderText: '#B6B7BF',
        contactFormBG : '#1D256CD1',
        bgPrimary : '#FFFFFF',
        bgSecondaryLight: '#FFF6F2',
        bgGradientLeft : '#DEAF97',
        bgGradientRight : '#FFF0E8',
        bgButton:'#1D256C',
        bgGradientBottom:'#1D256C00',
        bgGradientTop:'#1D256CFA',
        bgWaterFront: '#F5F6FB'
      },
      fontFamily: {
        TheSeasons: ["TheSeasons", "serif"], 
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        '5px': '5px',
        '9px': '9px',
        '10_5px': '10.5px',
        '11px': '11px',
        '12px': '12px',
        '21px': '21px',
        '26px': '26px',
        '24px': '24px',
        '28px': '28px',
        '35px': '35px',
        '41px': '41px',
        '70px': '70px',
        '82px': '82px',
      },
      backgroundImage: {
        'hero-mobile': 'var(--hero-mobile-bg)',
        'hero-desktop': 'var(--hero-desktop-bg)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-hero-responsive': {
          '--hero-mobile-bg': 'var(--mobile-bg-url)',
          '--hero-desktop-bg': 'var(--desktop-bg-url)',
          'background-image': 'var(--hero-mobile-bg)',
          '@media (min-width: 640px)': {
            'background-image': 'var(--hero-desktop-bg)',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
