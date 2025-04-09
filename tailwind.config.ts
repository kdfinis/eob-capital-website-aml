import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				golden: {
					DEFAULT: "#D4B98A", // Primary golden beige
					50: "#FAF7F1",
					100: "#F5EFE3",
					200: "#EBE0C7",
					300: "#E0D0AB",
					400: "#D4B98A", // Base golden beige
					500: "#C9A86E",
					600: "#BE9752",
					700: "#A27B37",
					800: "#805F2B",
					900: "#5E451F",
					950: "#3D2D15",
				},
				navy: {
					DEFAULT: "#22304A", // Refined navy/muted blue
					50: "#E6EAEF",
					100: "#CDD5DF",
					200: "#A5B4C9",
					300: "#7E94B3",
					400: "#57749D",
					500: "#415A7A",
					600: "#334863",
					700: "#22304A", // Base navy
					800: "#192438",
					900: "#0D1422",
					950: "#060A11",
				},
				ivory: {
					DEFAULT: "#FAFAF5", // Unified off-white
					50: "#FFFFFF",
					100: "#FDFDF9",
					200: "#FAFAF5", // Base ivory
					300: "#F1F1E1",
					400: "#E7E7CD",
					500: "#DDDCBA",
					600: "#D3D2A6",
					700: "#C4C283",
					800: "#B5B361",
					900: "#969746",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-slow': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(75, 15, 15, 0.3)' },
					'50%': { boxShadow: '0 0 15px rgba(75, 15, 15, 0.5)' }
				},
				'underline-grow': {
					'0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
					'100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-slow': 'fade-in 1s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'scale-in-slow': 'scale-in 1s ease-out',
				'glow': 'glow 3s ease-in-out infinite',
				'underline-grow': 'underline-grow 0.6s ease-out forwards'
			},
			fontFamily: {
				garamond: ['EB Garamond', 'serif'],
				inter: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				'glow-sm': '0 0 5px rgba(212, 185, 138, 0.3)',
				'glow-md': '0 0 15px rgba(212, 185, 138, 0.4)',
				'glow-lg': '0 0 25px rgba(212, 185, 138, 0.5)',
				'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
				'floating': '0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-subtle': 'linear-gradient(to right bottom, rgb(34, 48, 74, 0.8), rgb(212, 185, 138, 0.8))',
				'light-gradient': 'linear-gradient(to bottom, #FAFAF5, #F1F1E1)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
