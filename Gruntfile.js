'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    clean: {
      files: ['dist']
    },
    concat: {
      options: {
        banner: '/*concat-banner*/',
        stripBanners: true
      },
      dist: {
        src: ['src/*.js'],
        dest: 'dist/main.js'
      },
    },
    uglify: {
      options: {
        banner: '/*uglify-banner*/'
      },
      dist: {
        src: 'dist/main.js',
        dest: 'dist/main.min.js'
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['clean', 'concat', 'uglify']);

};
