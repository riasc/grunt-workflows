// web workflow
module.exports = function(grunt) {
    // loads anything grunt related - makes grunt.loadNpmTasks obsolete
    require('load-grunt-tasks')(grunt);

    // load folder from Gruntconfig.yml
    var config = grunt.file.readYAML('Gruntconfig.yml');

    // defines initial configuration for this grunt task
    grunt.initConfig({
        sass: {
            dist: {
                src: config.scss_src_dir+'style.scss',
                dest: config.css_src_dir+'style.css'
            }
        },
        concat: {
            dist: {
                src: config.js_src_dir+"*.js",
                dest: config.js_concat_dir+"app.js"
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                config.js_src_dir+'*.js'
            ]
        },
        watch: {
            sass: {
                files: config.scss_src_dir+'**/*.scss',
                tasks: ['sass']
            }
        }
    });


    // register the task
    grunt.registerTask('default',[
        'sass',
        'concat',
        'jshint',
        'watch'
    ]);
};