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
        estate: {
          navy: {
            DEFAULT: "#081216",
            dark: "#04090C",
            light: "#0E1C22",
            card: "#0D181D",
            border: "#182C35",
          },
          gold: {
            DEFAULT: "#C59A4E",
            light: "#E5C158",
            dark: "#9A7230",
            glow: "#F0D588",
            metallic: "#D4AF37",
          },
          cyan: {
            DEFAULT: "#00B4D8",
            glow: "#48CAE4",
            dim: "#0077B6",
          },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E5C158 0%, #C59A4E 50%, #9A7230 100%)",
        "gold-shimmer": "linear-gradient(90deg, #C59A4E 0%, #FFF3D1 50%, #C59A4E 100%)",
        "navy-radial": "radial-gradient(circle at 50% 0%, #0E222B 0%, #081216 70%, #04090C 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "gold-glass": "linear-gradient(135deg, rgba(197, 154, 78, 0.15) 0%, rgba(8, 18, 22, 0.6) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(197, 154, 78, 0.25)",
        "gold-glow-lg": "0 0 50px rgba(197, 154, 78, 0.4)",
        "cyan-glow": "0 0 25px rgba(0, 180, 216, 0.25)",
        "glass-card": "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "scan-line": "scan 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
