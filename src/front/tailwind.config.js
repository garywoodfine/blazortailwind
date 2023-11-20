export default {
    mode: 'jit',
    darkMode: 'media',
    content: [
        './**/*.{razor,html,cshtml}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@headlessui/tailwindcss'),
    ],
};
