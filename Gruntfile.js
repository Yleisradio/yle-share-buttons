module.exports = function(grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            livereload: {
                files: [
                    'src/*.js',
                    'src/*.html'
                ],
                tasks: ['build'],
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
                src: 'src/<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.js'
            }
        },
        cssmin: {
            build: {
                files: {
                    '<%= pkg.name %>.css': ['<%= pkg.name %>.css']
                }
            }
        },
        imageEmbed: {
            build: {
                src: ["src/<%= pkg.name %>.css"],
                dest: "<%= pkg.name %>.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },
        copy: {
            build: {
                cwd: 'src',
                src: [
                    'index.html'
                ],
                dest: '',
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
    grunt.registerTask('default', ['build', 'develop', 'watch']);
    

    grunt.registerTask('build', ['uglify', 'imageEmbed', 'cssmin', 'copy']);

};
