// Gruntfile.js

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
			dist: {
				files: {
					'src/css/style.css' : 'src/sass/style.scss'
                }
			}
		},
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            dist: {
                files: {
                    'dist/css/style.css': ['src/css/*.css']
                }
            }
        },
        uglify: {  
            options: {
                compress: true  
            },  
            dist: {
                src: [
                    'node_modules/uikit/src/js/components/*.js',
                    'node_modules/uikit/src/js/core/*.js',
                    'node_modules/jquery/dist/jquery.js',
                    'template/src/js/*.js'
                ],  
                dest: 'dist/js/app.js'
            }  
        },
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['src/index.html']
                }
            }
        },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
    });

    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask('default',['sass', 'cssmin', 'uglify', 'processhtml']);
};