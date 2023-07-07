/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./index.html",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  "./node_modules/tailwind-datepicker-react/dist/**/*.js",
];
export const theme = {
  extend: {},
};
export const plugins = [
  require('flowbite/plugin')
];