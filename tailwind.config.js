const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                playfair: ['Playfair Display'],
                libre: ['Libre Baskerville'],
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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),

        plugin(function ({ addComponents }) {
            // 버튼 컴포넌트들
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
            };

            // flex 중앙정렬
            const flexAllCentered = {
                '.flexAllCentered': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            };

            const hamburgerMenu = {
                ' .hamburgerMenu': {
                    '&:hover + .hamburgerList': {
                        display: 'block',
                    },
                },
            };

            addComponents(buttons);
            addComponents(flexAllCentered);
            addComponents(hamburgerMenu);
        }),
    ],
};
