'use strict';

module.exports =  function (grunt) {
    
    //set the output folder from you Flare target as the path variable on line 7. If you'd rather call the output
    //folder from the Flare target itself, comment out line 7, and proceed to the instructions on line 9.
    var path = 'C:\\Flare Projects\\zTesting Projects\\responsive-test\\Output\\Daniel\\HTML5 - Top Navigation';
    
    //If you have multiple Flare targets that you want to minify, it's easier to place the path variable in the
    //Build Events section of the Flare target. To to this, make sure line 7 above is commented out, then uncomment
    //line 15. In the Build Event section of your target, enter the grunt command in the following format:
    //grunt <target> --projectPath="<output folder path>"
    //EXAMPLE: grunt default --projectPath="C:\\Flare Projects\\zTesting Projects\\sprite test\\Output\\Daniel\\HTML5 - Audience A"
    
    //var path = grunt.option('projectPath');

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
                    cwd: path,
                    src: '**/*.htm*',
                    dest: path
                }]
            },
            options: {
                 removeComments: true,
                 collapseWhitespace: true,
                 minifyCSS: true,
                 minifyJS: true
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