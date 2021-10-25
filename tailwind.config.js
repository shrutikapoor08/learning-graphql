module.exports = {
    corePlugins: {
        preflight: false,
    },
    purge: [
        './_includes/*.html',
        './_layouts/*.html',
        './_posts/*.md',
        './*.html',
    ],
    darkMode: false,
    theme: {
        extend: {},
        container: {
            center: true
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}