module.exports = function(grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            livereload: {
                files: [
                    '*.js',
                    '*.html'
                ],
                options: {
                    nospawn: true,
                    livereload: 35729
                }
            }
        },
        develop: {
            server: {
                file: 'server.js'
            }
        },
        uglify: {
            build: {
                src: '<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        cssmin: {
            build: {
                files: {
                    'dist/<%= pkg.name %>.css': ['dist/<%= pkg.name %>.css']
                }
            }
        },
        clean: {
            build: {
                src: ['dist', 'build']
            }
        },
        imageEmbed: {
            build: {
                src: ["<%= pkg.name %>.css"],
                dest: "dist/<%= pkg.name %>.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },
        copy: {
            build: {
                cwd: './',
                src: [
                    'server.js',
                    'package.json',
                    'VERSION',
                    'index.html'
                ],
                dest: 'dist',
                expand: true
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-image-embed");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['develop', 'watch']);
    

    grunt.registerTask('build', ['clean', 'uglify', 'imageEmbed', 'cssmin', 'copy']);

};
