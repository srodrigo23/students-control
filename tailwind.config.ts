import { type Config } from "tailwindcss";

// const withMT = require("@material-tailwind/react/utils/withMT");
export default ({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}) satisfies Config;
