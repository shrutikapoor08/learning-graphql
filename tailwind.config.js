module.exports = {
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