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
                    cwd: 'C:\\whleary_master_project\\Output\\Daniel\\Help Sites\\Helps Site - Distributor',
                    src: '**/*.htm*',
                    dest: 'C:\\whleary_master_project\\Output\\Daniel\\Help Sites\\Helps Site - Distributor'
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
                    cwd: 'C:\\whleary_master_project\\Output\\Daniel\\Help Sites\\Helps Site - Distributor',
                    src: '**/*.js',
                    dest: 'C:\\whleary_master_project\\Output\\Daniel\\Help Sites\\Helps Site - Distributor'
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
                    cwd: 'C:\\whleary_master_project\\Output\\Daniel\\Help Sites\\Helps Site - Distributor',
                    src: '**/*.css',
                    dest: 'C:\\whleary_master_project\\Output\\Daniel\\Help Sites\\Helps Site - Distributor'
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
                    cwd: 'C:\\whleary_master_project\\Output\\Daniel\\Help Sites\\Helps Site - Distributor',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'C:\\whleary_master_project\\Output\\Daniel\\Help Sites\\Helps Site - Distributor'
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