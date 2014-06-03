module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['public/less/**/*.less'],
      tasks: ['recess']
    },
    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "public/js/",
          optimize: "none",
          mainConfigFile: "public/js/config.js",
          out: "public/js/main.min.js"
        }
      }
    },
    connect: {
      dist: {
        options: {
          hostname: '*',
          port: 8000,
          base: 'public',
          keepalive: true
        }
      }
    },
    recess: {
      dist: {
        src: ['public/less/styles.less'],
        dest: 'public/css/styles.css',
        options: {
          compile: true
        }
      }
    },
    bower: {
      install: {
        options: {
          install: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('test', ['bower', 'recess', 'requirejs']);
  grunt.registerTask('default', ['bower', 'recess', 'requirejs']);

};