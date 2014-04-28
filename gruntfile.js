module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.initConfig({
		cssmin: {
 			 minify: {
    			expand: true,
    			cwd: 'css/',
    			src: ['*.css', '!*.min.css'],
    			dest: 'release/',
    			ext: '.min.css'
  				}
			},//cssmin
		uglify: {
			my_target: {
				files: {
					'release/script.min.js': ['components/js/script.js', 'components/js/other.js']
				} //files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}//options
			}//dev
		},//compass
		watch: {
			options: { livereload: true },
			sass: {
				files: ['components/sass/*.scss'],
				tasks: ['compass:dev']
			},//sass
			html: {
				files: ['*.html']
			}//html
		}//watch
	})//initConfig
	grunt.registerTask('default', 'watch');
} //exports