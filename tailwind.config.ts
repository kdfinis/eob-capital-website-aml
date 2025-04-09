
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
				// Updated EOB Capital specific colors
				burgundy: {
					DEFAULT: "#4B0F0F", // Darker burgundy/scarlet
					50: "#f9e5e5",
					100: "#f2cccd",
					200: "#e39a9c",
					300: "#d5686b",
					400: "#c03e42",
					500: "#ab2226",
					600: "#8c181c",
					700: "#6d1216",
					800: "#4B0F0F", // Base scarlet
					900: "#2e0509",
					950: "#1a0203",
				},
				navy: {
					DEFAULT: "#1A2942", // Deep navy for contrast
					50: "#edf0f5",
					100: "#dce2eb",
					200: "#bac5d7",
					300: "#98a9c2",
					400: "#768dae",
					500: "#5e739a",
					600: "#4a5d85",
					700: "#3a496e",
					800: "#1A2942", // Base navy
					900: "#0c1321",
				},
				forest: {
					DEFAULT: "#1F3520", // Deep forest green
					50: "#e9f0e9",
					100: "#d3e1d4",
					200: "#a8c4aa",
					300: "#7ca680",
					400: "#568959",
					500: "#3c6c3f",
					600: "#2d5730",
					700: "#1F3520", // Base forest
					800: "#13210d",
					900: "#071005",
				},
				charcoal: {
					DEFAULT: "#222222", // Dark gray/charcoal
					50: "#f2f2f2",
					100: "#e6e6e6",
					200: "#cccccc",
					300: "#b3b3b3",
					400: "#999999",
					500: "#808080",
					600: "#666666",
					700: "#4d4d4d",
					800: "#333333",
					900: "#222222", // Base charcoal
					950: "#0d0d0d",
				},
				// Changed from ivory to a darker background color
				dark: {
					DEFAULT: "#1A1F2C", // Dark background
					50: "#f8f9fa",
					100: "#eaedf2",
					200: "#d5dbe5",
					300: "#b0bdd1",
					400: "#8699b9",
					500: "#657ba2",
					600: "#4d6089",
					700: "#3c4a6d",
					800: "#2c3651",
					900: "#1A1F2C", // Base dark
					950: "#0f121a",
				},
				light: {
					DEFAULT: "#E9EAEC", // Light gray for text on dark
					100: "#ffffff",
					200: "#fafafa",
					300: "#f5f5f5",
					400: "#f0f0f0",
					500: "#E9EAEC", // Base light
					600: "#d1d2d5",
					700: "#b8babf",
					800: "#9fa1a8",
					900: "#868891",
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
				'glow-sm': '0 0 5px rgba(75, 15, 15, 0.3)',
				'glow-md': '0 0 15px rgba(75, 15, 15, 0.4)',
				'glow-lg': '0 0 25px rgba(75, 15, 15, 0.5)',
				'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-subtle': 'linear-gradient(to right bottom, rgb(26, 32, 66, 0.8), rgb(75, 15, 15, 0.8))',
				'dark-gradient': 'linear-gradient(to bottom, #1A1F2C, #0f121a)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
