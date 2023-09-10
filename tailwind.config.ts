import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent: {
          background: 'var(--accent-background)',
          foreground: 'var(--accent-foreground)'
        },
        frontend: {
          background: 'var(--frontend-background)',
          foreground: 'var(--frontend-foreground)'
        },
        backend: {
          background: 'var(--backend-background)',
          foreground: 'var(--backend-foreground)'
        },
        tool: {
          background: 'var(--tool-background)',
          foreground: 'var(--tool-foreground)'
        },
        design: {
          background: 'var(--design-background)',
          foreground: 'var(--design-foreground)'
        },
        misc: {
          background: 'var(--misc-background)',
          foreground: 'var(--misc-foreground)'
        }
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text)-(frontend|backend|tool|design|misc)/,
    },
  ],
}
export default config
