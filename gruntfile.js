
module.exports = function(grunt) 
{
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.initConfig(
	{
		cwd: process.cwd(),
		pkg: grunt.file.readJSON('package.json'),

		uglify: 
		{
			options: {
				banner: '/*! <%= pkg.name %> - ver. <%= pkg.version %> */\r\n',
				compress: { drop_console: true }
			},

			js: {
				files: { 'glmatrix.js': [
					'src/common.js',
					'src/mat3.js',
					'src/mat4.js',
					'src/quat.js',
					'src/vec3.js',
					'src/vec4.js'
				]}
			}
		},

		watchfiles: {
			first: {
				files: ['src/*.js'],
				tasks: ['uglify']
			}
		}
	});

	grunt.renameTask('watch', 'watchfiles');

	grunt.registerTask('watch', ['watchfiles']); 
};