'use strict';

module.exports =  function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            output: ['ToBeCleaned/*']
        },
        
        htmlmin: {
            development: {
                files: [{
                    expand: true,
                    //Add a comment here
                    cwd: 'C:\\Flare Projects\\Self-Paced Training\\training-project\\Output\\Daniel\\HTML5',
                    src: '**/*.htm*',
                    dest: 'C:\\Flare Projects\\Self-Paced Training\\training-project\\Output\\Daniel\\HTML5'
                }]
            },
            options: {
                 collapseWhitespace: true
            }
        },
        
        uglify: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'C:\\Flare Projects\\Self-Paced Training\\training-project\\Output\\Daniel\\HTML5',
                    src: '**/*.js',
                    dest: 'C:\\Flare Projects\\Self-Paced Training\\training-project\\Output\\Daniel\\HTML5'
                }]
            },
            options: {
                mangle: false
                   
            }
        },
        
        cssmin: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'C:\\Flare Projects\\Self-Paced Training\\training-project\\Output\\Daniel\\HTML5',
                    src: '**/*.css',
                    dest: 'C:\\Flare Projects\\Self-Paced Training\\training-project\\Output\\Daniel\\HTML5'
                }]
            },
            options: {
                                   
            }
        }
        
    });
    
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    
    
    grunt.registerTask("default", ['htmlmin', 'uglify', 'cssmin']);
};