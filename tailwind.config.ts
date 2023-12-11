import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'linnaer-gradient':
          'linear-gradient(0deg, #111111 1%, rgba(17, 17, 17, 0.06) 99%)',
      },
      animation: {
        border: 'border 0.3s ease-in-out',
      },
      width: { fullpage: 'calc(100% - 10rem)' },
      translate: {
        one: 'translateY(-50%)',
        two: 'translateY(-50%)',
        three: 'translateX(0.5rem)',
      },
    },
  },
  plugins: [],
};
export default config;
