import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1C2E5C",
          navyhover: "#243870",
          darkbg: "#0D1829",
          steel: "#8090A8",
          steellight: "#A0B0C4",
          steeldark: "#60748A",
        },
        surface: {
          card: "#ffffff",
          dark: "#0F1E35",
          glass: "rgba(255, 255, 255, 0.05)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "serif"],
        label: ["var(--font-label)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)",
        cardhover:
          "0 20px 40px -10px rgba(0,0,0,0.12), 0 10px 15px -5px rgba(0,0,0,0.08)",
        header: "0 4px 20px rgba(0,0,0,0.05)",
        glow: "0 0 25px rgba(128,144,168,0.25), 0 8px 40px rgba(128,144,168,0.12)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
