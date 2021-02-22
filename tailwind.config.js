module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 4D color 선언
        primary: {
          red: "#DD1D0F",
          gray: "#2F4858",
        },
        secondary: {
          magenta: "#CF0157",
          purple: "#A22F81",
          grape: "#65488C",
          navy: "#334D79",
        },
        background: {
          ivory: "#EDE6DF",
          gray: "#EBEBEB",
        },
        header: "rgba(255, 255, 255, 0.9)",
        // TODO: 자주 사용하는 컬러 선언 할 것(버튼 컬러, 뱃지 컬러 등 -네이버 라이브 커머스 등 참조)
      },

      screens: {
        xxs: "320px",
        xs: "475px",
      },

      spacing: {
        0.25: "0.1rem",
        header: "6rem",
        footer: "6rem",
        content: "calc(100vh - 12rem)",
      },

      minHeight: {
        content: "calc(100vh - 12rem)",
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
