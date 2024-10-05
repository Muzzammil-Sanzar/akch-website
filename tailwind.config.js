/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          150: '#1CAEFE'
        },
        orange: {
          150: '#EFA937',
          250: "#FBF4EA"
        },
        gray: {
          150: "#1E292F",
          250: "#868686",
          350: "#ECECEC",
          450: "#F5F5F5",
          550: "#484848"
        }
      },
      screens: {
        xxs: "385px",
        llg: "1080px",
        "xl1": "1440px",
      },
    },
  },
  plugins: [],
}

