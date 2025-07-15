/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            fontFamily: {
                "lato": ["Rock Salt"],
                "Fira" : ["Fira Code"]            
            },
          backgroundImage: {
              draw: "url('./src/assets/back.png')"
          },
        },
    },
    plugins: [],
}
