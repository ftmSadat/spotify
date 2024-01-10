/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'get-start': "url('./src/assets/images/bg-get-start-view.png')",
                'choose-mode': "url('./src/assets/images/bg-choose-mode-view.png')",
            }
        },
        colors: {
            ...colors,
            "darkBG": "#070707",
            "lightBG": "#F2F2F2",
            "grayText": "#797979",
            "mainGreen": "#42C83C"
        }
    },
    plugins: [],
}

