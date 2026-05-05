/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#060812',
        panel: '#0d1220',
        cyanSoft: '#7ddcff',
        silver: '#dbe5f2',
        muted: '#9aa9bd',
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.42)',
        glow: '0 0 36px rgba(125, 220, 255, 0.18)',
      },
    },
  },
  plugins: [],
}
