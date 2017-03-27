/*
**	gruntfile.js for automating project task.
*	Tasks : Copying, Concatination, Minification, Watch, Less conversion, browser synchronization
*/


"use strict";

//Exporting project level automation configuration
module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// configure nodemon
	    nodemon: {
	      dev: {
	        script: './src/app/app.js'
	      }
	    },
		watch: {
			scripts: {
				files: ['./src/**/*.js'],
				tasks: ['nodemon']
			},
		}
		
	});

	// load nodemon
  	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.task.registerTask("build", ["nodemon", "watch"]);

}