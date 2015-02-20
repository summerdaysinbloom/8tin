module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 4000,
                    hostname: 'localhost',
                    keepalive: true,
                    base: '.'                    
                }
            }
        },
        watch: {
            js: {
                files: ['lib/**/*.js'],
                tasks: ['concat']
            },
            uglify: {
                files: ['lib/**/*.js'],
                tasks: ['uglify']
            },
            sass: {
                files: 'sass/**/*.scss',
                tasks: ['sass']
            },
            cssmin: {
                files: ['style/**/*.css'],
                tasks: ['cssmin']
            }
        },
        uglify: {
            dev: {
                files: {
                    'assets/output.min.js': ['lib/**/*.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'assets/style.min.css': [
                        'style/normalize.css',
                        'style/font.css',
                        'style/style.css'
                    ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'style/font.css': 'sass/font.scss',
                    'style/style.css' : 'sass/style.scss'
                }
            }
        },
        concat: {
            dist: {
                src: ['lib/**/*.js'],
                dest: 'main.js'
            }
        }
    });

    // Compile less task.
    grunt.registerTask('min', ['watch']);   
    grunt.registerTask('default', ['connect']);
};