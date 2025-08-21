/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-background-default-default":
          "var(--color-background-default-default)",
        "color-border-default-default": "var(--color-border-default-default)",
        "color-primitives-gray-600": "var(--color-primitives-gray-600)",
        "color-primitives-gray-900": "var(--color-primitives-gray-900)",
        "color-primitives-white-400": "var(--color-primitives-white-400)",
        "color-text-default-tertiary": "var(--color-text-default-tertiary)",
      },
      fontFamily: {
        "body-base": "var(--body-base-font-family)",
        "single-line-body-base": "var(--single-line-body-base-font-family)",
      },
      boxShadow: {
        "shadow-md": "var(--shadow-md)",
      },
    },
  },
  plugins: [],
};
