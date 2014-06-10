module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: '<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        cssmin: {
            build: {
                files: {
                    'dist/<%= pkg.name %>.css': ['build/*']
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
                dest: "build/yle-share-buttons.css",
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

    // Default task(s).
    grunt.registerTask('default', ['clean', 'uglify', 'imageEmbed', 'cssmin', 'copy']);

};
