const colors = require('./tokens/colors');
const fontSize = require('./tokens/fontSize');
const spacing  = require('./tokens/spacing');

module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors
      },
      spacing: {
        spacing
      },
      fontSize: {
        fontSize
      },
    },
  },
};
