module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // 4D color 선언
            colors: {
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
            },

            screens: {
                xxs: '375px',
                xs: '475px',
            },

            spacing: {
                header: '5rem',
                footer: '5rem',
            },

            fontFamily: {
                playfair: ['Playfair Display'],
            },

            minHeight: {
                body: 'calc(100vh - 10rem)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
