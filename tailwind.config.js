module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
            addUtilities({
              '.scrollbar-hide': {
                /* Firefox */
                'scrollbar-width': 'none',
                /* Safari and Chrome */
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              },
            });
          },
  ],
};


// module.exports = {
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     function ({ addUtilities }) {
//       addUtilities({
//         '.scrollbar-hide': {
//           /* Firefox */
//           'scrollbar-width': 'none',
//           /* Safari and Chrome */
//           '&::-webkit-scrollbar': {
//             display: 'none',
//           },
//         },
//       });
//     },
//   ],
// };
