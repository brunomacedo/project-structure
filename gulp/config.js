const config = {
    template: {
        root: 'src/templates/*.html',
        dest: 'public',
        defaults: {
            basePath: 'src/includes/',
            tagName: 'include',
            variablePrefix: '@@'
        }
    },
    scss: {
        root: 'src/scss/*.scss',
        dest: 'public/css'
    },
    js: {
        root: 'src/js/*.js',
        dest: 'public/js'
    }
};

export { config };
