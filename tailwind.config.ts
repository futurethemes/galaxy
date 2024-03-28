import { wrapTailwindConfig } from "@futurethemes/galaxy/tailwind"

/** @type {import('tailwindcss').Config} */
export default wrapTailwindConfig({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
})
