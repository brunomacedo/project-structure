const config = {
    template: {
        src: 'app/templates/*.html',
        type: 'app/**/*.html',
        dest: 'public',
        defaults: {
            basePath: 'app/includes/',
            tagName: 'include',
            variablePrefix: '@@'
        }
    },
    scss: {
        src: 'app/scss/*.scss',
        dest: 'public/css'
    },
    js: {
        src: 'app/js/*.js',
        dest: 'public/js'
    }
};

export { config };
