'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    // TEST SETUP
    mochaTest: {
      all: {
        src: [
          './index.js'
        ],
        options: {
          reporter: 'spec',
          quiet: false,
          bail: false
        }
      }
    },
    // CODE STYLE ENFORCEMENT
    jscs: {
      all: [
        '**/*.js'
      ],
      options: {
        config: '.jscsrc',
        esnext: true,
        verbose: true
      }
    },
    // CODE CORRECTNESS CHECKING
    jshint: {
      files: [
        '**/*.js'
      ],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-mocha-test');

  /**
   * TASKS
   */

  grunt.registerTask('test', [
    'mochaTest:all'
  ]);

};
