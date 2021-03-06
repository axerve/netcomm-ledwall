module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'averta': ["AvertaPE", "Arial", "sans-serif"],
        'jetbrains': ["JetBrains Mono", "Monospace", "AvertaPE", "Arial", "sans-serif"],
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'dark-search-popup': "#2F3438",
        'dark-border': "#2F3438",
        'dark-footer': "#2F3438",
        'dark-code': "#191B1D",
        'dark-focus-bg': "rgba(0, 145, 230, 0.16)",
        'regal-blue': {
          10: "#00466e",
          20: "#2d5f7b",
          30: "#51788f",
          40: "#80a3b7",
          50: "#bfd1db",
          60: "#dfe8ed",
          70: "#ecf2f5",
        },
        'deep-sky-blue': {
          10: "#0091e5",
          20: "#33b4ff",
          30: "#6cc9ff",
          40: "#85d3ff",
          50: "#b4e4ff",
          60: "#ccecff",
          70: "#f0faff",
        },
        'cadet-grey': {
          10: "#232629",
          20: "#464d53",
          30: "#6a737c",
          40: "#919aa1",
          50: "#bac0c4",
          60: "#dde1e3",
          70: "#f7f7f8",
        },
        'pastel-green': {
          10: "#308a0f",
          20: "#42a41f",
          30: "#4bb923",
          40: "#53cd27",
          50: "#88e766",
          60: "#c4f3b3",
          70: "#e8fde0",
        },
        'amaranth': {
          10: "#920e1f",
          20: "#ca152b",
          30: "#ea344a",
          40: "#ee5d6e",
          50: "#ff8997",
          60: "#ffcad0",
          70: "#ffebed",
        },
        'ucla-gold': {
          10: "#a57500",
          20: "#c78e00",
          30: "#df9e00",
          40: "#ffb500",
          50: "#ffcc4c",
          60: "#ffe09b",
          70: "#ffefcc",
        }
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '4px',
        1: '8px',
        1.5: '12px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        3.5: '28px',
        4: '32px',
        4.5: '36px',
        5: '40px',
        6: '48px',
        6.5: '52px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
        11: '88px',
        12: '96px',
        14: '112px',
        15: '120px',
        16: '128px',
        20: '160px',
        24: '192px',
        25: '200px'
      },
      fontSize: {
        'micro': '12px',
        'small': '14px',
        'default': '16px',
        'h1': '48px',
        'h2': '32px',
        'h3': '24px',
        'h4': '20px',
        'large': '72px'
      },
      borderRadius: {
        DEFAULT: '6px'
      },
      maxWidth: {},
      minWidth: {},
      boxShadow: {
        'witch-lang': '0px 1px 6px rgba(70, 77, 83, 0.05), 0px 1px 8px rgba(128, 219, 255, 0.05), 0px 5px 16px rgba(70, 77, 83, 0.15)',
        'search-popup': '0px 5px 16px 0px rgba(70, 77, 83, 0.15), 0px 1px 8px 0px rgba(128, 219, 255, 0.05), 0px 1px 6px 0px rgba(70, 77, 83, 0.05)'
      }
    },
  },
  plugins: [],
}
