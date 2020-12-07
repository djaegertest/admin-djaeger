const { borderWidth } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./resources/views/**/*.html"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans]
      },
      margin: {
        19: "4.75rem"
      }
    }
  },

  variants: {
    opacity: [
      "responsive",
      "hover",
      "focus",
      "disabled",
      "group-focus",
      "checked"
    ],
    borderWidth: ["responsive", "hover", "focus", "disabled", "group-focus"],
    outline: ["responsive", "hover", "focus", "disabled", "group-focus"],
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "disabled",
      "group-focus",
      "group-hover",
      "checked"
    ],
    cursor: [
      "responsive",
      "hover",
      "focus",
      "disabled",
      "group-focus",
      "group-hover",
      "checked",
      "disabled"
    ]
  },

  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/custom-forms")]
};
