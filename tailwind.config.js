/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'get-start': "url('./src/assets/images/bg-get-start-view.png')",
                'choose-mode': "url('./src/assets/images/bg-choose-mode-view.png')",
                'girl-bl': "url(./src/assets/images/bg-l-b-choose-reg-or-sign.png)"
            }
        },
        colors: {
            ...colors,
            "dark": "#1C1B1B",
            "light": "#F2F2F2",
            "gray": {
                "550": "#797979"
            },
            "main-green": "#42C83C"
        }
    },
    plugins: [],
}

