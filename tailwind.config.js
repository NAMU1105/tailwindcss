const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        // 4D color 선언
        primary: {
          red: {
            dark: "#800000​",
            DEFAULT: "#C00000",
          },
          gray: "#2F4858",
        },
        secondary: {
          vermilion: "#CF0157",
          violet: "#A22F81",
          purple: "#65488C",
          navy: "#334D79",
          gray: {
            medium: "7F7F7F",
            light: "#D9D9D9",
          },
        },
        background: {
          ivory: "#EDE6DF",
          gray: "#EBEBEB",
        },
        // TODO: 자주 사용하는 컬러 선언 할 것(버튼 컬러, 뱃지 컬러 등 -네이버 라이브 커머스 등 참조)
        header: "rgba(255, 255, 255, 0.9)",
        disabled: "#736f6f4d",
        layout: {
          // 디폴트를 제외한 색은 내가 임의로 지정함
          dark: "#493465",
          DEFAULT: "#65488C",
          light: "#976cd0",
        },
        footer: "#D9D9D9",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        bounceHorizontal: {
          "0%, 100%": { transform: "translateX(0.5rem)", opacity: 0 },
          "50%": { transform: "translateX(0px)", opacity: 1 },
        },
      },

      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
        bounceHorizontal: "bounceHorizontal 1s ease-in infinite",
      },

      screens: {
        xxs: "320px",
        xs: "475px",
      },

      spacing: {
        0.25: "0.1rem",
        1.2: "0.3rem",
        header: "6rem",
        footer: "6rem",
        content: "calc(100vh - 12rem)",
      },

      minHeight: {
        content: "calc(100vh - 12rem)",
      },

      fontSize: {
        xxs: ["0.3rem", { lineHeight: "1rem" }],
      },

      flexGrow: {
        3: 3,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "checked", "odd", "disabled"],
      borderColor: ["checked"],
      fill: ["hover", "focus"],
      textColor: ["disabled"],
    },
  },
  plugins: [],
};
