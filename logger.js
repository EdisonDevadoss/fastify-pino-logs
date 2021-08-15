const pino = require('pino');

const transport = pino.transport({
	targets:[
		{
		 level: 'info',
		 target: '#pino/file',
		 options: {
			destination: "/var/log/syslog"
		 }
		},
		{
		 level: 'info',
		 target: "#pino/file",
		 options:{
			destination: 2,
			 translateTime: 'SYS:standard'
		  }
		}
	]
});


const logger = pino(transport);

module.exports = logger;
