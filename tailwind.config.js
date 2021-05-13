module.exports = {
    purge: [
        './_includes/*.html',
        './_layouts/*.html',
        './_posts/*.md',
        './*.html',
    ],
    darkMode: media,
    theme: {
        extend: {},
        container: {
            center: true
        },
        textColor: {
            'primary': '#374151',
            'secondary': '#DB2777'
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}