// Gruntfile.js

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
			dist: {
				files: {
					'dist/css/style.css' : 'src/sass/style.scss'
                }
			}
		},
        uglify: {  
            options: {  
                compress: true  
            },  
            applib: {  
                src: [
                    'node_modules/uikit/src/js/components/*.js',
                    'node_modules/uikit/src/js/core/*.js',
                    'node_modules/jquery/dist/jquery.js',
                    'template/src/js/*.js'
                ],  
                dest: 'dist/js/applib.js'
            }  
        },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask('default',['watch', 'uglify']);
};