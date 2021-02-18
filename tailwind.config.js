const _ = require('lodash');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', ...defaultTheme.fontFamily.sans],
        libre: ['Libre Baskerville', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        // 4D color 선언
        primary: {
          red: '#DD1D0F',
          gray: '#2F4858',
        },
        secondary: {
          magenta: '#CF0157',
          purple: '#A22F81',
          grape: '#65488C',
          navy: '#334D79',
        },
        background: {
          ivory: '#EDE6DF',
          gray: '#EBEBEB',
        },
        // TODO: 자주 사용하는 컬러 선언 할 것(버튼 컬러, 뱃지 컬러 등 -네이버 라이브 커머스 등 참조)
      },

      screens: {
        xxs: '320px',
        xs: '475px',
      },

      spacing: {
        header: '5rem',
        footer: '5rem',
      },

      minHeight: {
        body: 'calc(100vh - 10rem)',
      },
      rotate: {
        '1/4': '90deg',
        '1/2': '180deg',
        '3/4': '270deg',
        '5/9': '200deg',
      },

      // fill: (theme) => ({
      //     gray: theme('colors.gray'),
      // }),
      fill: (theme) => theme('colors'),

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.1s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundColor: ['disabled'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      backgroundColor: ['odd'],
      fill: ['hover', 'focus'],
      //   rotateUtilities: ['hover'],
    },
  },
  plugins: [
    // official plugins 추가
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),

    // custom components
    plugin(function ({ addComponents }) {
      // 버튼
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
        '.btn-pink': {
          '@apply text-pink-900 bg-gray-500': '',
          '&:hover': {
            '@apply bg-purple-500': '',
          },
        },
      };
      // flex 관련 컴포넌트
      const flexs = {
        // flex 중앙정렬
        '.flexAllCentered': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },

        // 간단 반응형
        '.flexResponsive': {
          '@apply flex flex-col text-yellow-500 md:flex-row': '',
          //   '&>*:first-child': {
          //     '@apply text-pink-500': '',
          //   },
        },
      };
      // 햄버거 메뉴 관련 컴포넌트
      const hamburgerMenu = {
        ' .hamburgerMenu': {
          '&:hover + .hamburgerList': {
            display: 'block',
          },
        },
      };

      addComponents(buttons);
      addComponents(flexs);
      addComponents(hamburgerMenu);
    }),

    plugin(function ({ addUtilities, theme, e }) {
      const rotateUtilities = _.map(theme('rotate'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`,
          },
        };
      });

      addUtilities(rotateUtilities);
    }),

    // 간단 반응형 flex, 사용자에게서 받은 브레이크 포인트에서 flex-direction이 column으로 변경된다.
    plugin(function ({ addUtilities, theme, e }) {
      const simpleFlexUtilities = _.map(theme('screens'), (value, key) => {
        return {
          [`.${e(`simpleFlex-${key}`)}`]: {
            [`@apply text-white flex flex-col ${key}:flex-row  ${key}:text-yellow-500`]: '',
          },
        };
      });

      addUtilities(simpleFlexUtilities);
    }),

    // 그리드 레이아웃, 사용자에게서 받은 숫자에 맞는 로우, 컬럼을 생성한다.
    // plugin(function ({ addUtilities, theme, e }) {
    //   const customGridUtilities = _.map(theme('screens'), (value, key) => {
    //     return {
    //       [`.${e(`simpleFlex-${key}`)}`]: {
    //         [`@apply text-white flex flex-col ${key}:flex-row  ${key}:text-yellow-500`]: '',
    //       },
    //     };
    //   });

    //   addUtilities(customGridUtilities);
    // }),

    plugin(function ({ addVariant, e }) {
      addVariant('disabled', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}:disabled`;
        });
      });
    }),

    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.skew-10deg': {
          backgroundColor: 'red',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };

      addUtilities(newUtilities, ['hover']);
    }),
  ],
};
