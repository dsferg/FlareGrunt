'use strict';

module.exports =  function (grunt) {

    //var path = 'C:\\Flare Projects\\zTesting Projects\\test project\\Output\\Daniel\\HTML5 - Tripane - Audience A';
    var path = grunt.option('projectPath');

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
                    cwd: path,
                    src: '**/*.htm*',
                    dest: path
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
                    cwd: path,
                    src: '**/*.js',
                    dest: path
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
                    cwd: path,
                    src: '**/*.css',
                    dest: path
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
                    cwd: path,
                    src: ['**/*.{png,jpg,gif}'],
                    dest: path
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