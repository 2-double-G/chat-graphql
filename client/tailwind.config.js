const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      red: colors.red,
      gray: colors.gray,
      blue: colors.blue,
      purple: colors.purple,
      violet: colors.violet,
      orange: colors.orange,
      stone: colors.stone,
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".btn": {
          color: "white",
          borderRadius: theme("borderRadius.lg"),
          padding: "0.5rem 1.5rem !important",
          textAlign: "center",
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.medium"),
          // backgroundColor: "#3b82f6",
          "&:focus": {
            boxShadow:
              "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
          },
          "&.btn-default": {
            backgroundColor: "#3b82f6",
            "&:hover": {
              backgroundColor: "#2563eb",
            },
            "&:active": {
              backgroundColor: "#1d4ed8",
            },
            "&:focus": {
              boxShadow:
                "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(147 197 253)",
            },
          },
          "&.btn-orange": {
            backgroundColor: "#f97316",
            "&:hover": {
              backgroundColor: "#ea580c",
            },
            "&:active": {
              backgroundColor: "#c2410c",
            },
            "&:focus": {
              boxShadow:
                "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(253 186 116)",
            },
          },
          "&.btn-violet": {
            backgroundColor: "#8b5cf6",
            "&:hover": {
              backgroundColor: "#7c3aed",
            },
            "&:active": {
              backgroundColor: "#6d28d9",
            },
            "&:focus": {
              boxShadow:
                "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(196 181 253)",
            },
          },
          "&.btn-secondary": {
            backgroundColor: "white",
            color: "#6b7280",
            "&:hover": {
              backgroundColor: "#e5e7eb",
              color: "#111827",
            },
            "&:active": {
              backgroundColor: "#d1d5db",
            },
            "&:focus": {
              boxShadow:
                "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(229 231 235)",
            },
          },
        },
        ".input-message": {
          boxShadow: "var(--tw-ring-inset) 0 0 0 2px #8b5cf6",
        },
      });
    }),
  ],
};
