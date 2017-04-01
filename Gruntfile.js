'use strict';

module.exports =  function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            output: ['ToBeCleaned/*']
        },
        
        //minify .htm files
        htmlmin: {
            development: {
                files: [{
                    expand: true,
                    //Add a comment here
                    cwd: 'C:\\Flare Projects\\zTesting Projects\\test project\\Output\\Daniel\\HTML5 - Tripane - Audience A',
                    src: '**/*.htm*',
                    dest: 'C:\\Flare Projects\\zTesting Projects\\test project\\Output\\Daniel\\HTML5 - Tripane - Audience A'
                }]
            },
            options: {
                 removeComments: true,
                 collapseWhitespace: true
            }
        },
        
        //minify .js files
        uglify: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'C:\\Flare Projects\\zTesting Projects\\test project\\Output\\Daniel\\HTML5 - Tripane - Audience A',
                    src: '**/*.js',
                    dest: 'C:\\Flare Projects\\zTesting Projects\\test project\\Output\\Daniel\\HTML5 - Tripane - Audience A'
                }]
            },
            options: {
                mangle: false
                   
            }
        },
        
        //minify css files
        cssmin: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'C:\\Flare Projects\\zTesting Projects\\test project\\Output\\Daniel\\HTML5 - Tripane - Audience A',
                    src: '**/*.css',
                    dest: 'C:\\Flare Projects\\zTesting Projects\\test project\\Output\\Daniel\\HTML5 - Tripane - Audience A'
                }]
            },
            options: {
                                   
            }
        },
        
        //compress png, jpg, and gif images
        imagemin: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'C:\\Flare Projects\\zTesting Projects\\test project\\Output\\Daniel\\HTML5 - Tripane - Audience A',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'C:\\Flare Projects\\zTesting Projects\\test project\\Output\\Daniel\\HTML5 - Tripane - Audience A'
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
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    
    
    grunt.registerTask("buns", ['htmlmin', 'uglify', 'cssmin', 'imagemin']);
};