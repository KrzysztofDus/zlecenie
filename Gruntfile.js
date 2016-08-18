module.exports = function (grunt) {
// Project configuration.
//Gruntfile.js should start with Capital letter
 grunt.initConfig({


 	sass: {
 		options: {
 			sourceMap: true
 		  },
 		  dist: {
 			 files: {
 			 	'css/main.css': 'sass/main.sass'
 			 }
 		  }
 		},



 	imagemin: {
 		dynamic: {
 			files: [{
 				expand: true,
 				cwd: 'images/',
 				src: ['**/*.{png,jpg,gif}'],
 				dest: 'images/build/'
 			}]
 		}
 	},

//Add watch task for images so they woulb be minified when new will be added
 	watch: {
 		scripts: {
 			files: ['sass/*.sass'],
 			tasks: ['sass'],
 			options: {
 				spawn: false,
 			},
 		}
 	}
 });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');




 // Default task(s).

  grunt.registerTask('default', [ "sass", "imagemin", "watch" ]);
};
