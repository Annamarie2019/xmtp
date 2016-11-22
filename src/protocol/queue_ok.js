'use strict';

module.exports = async (next, conn) => await next().then(() => {
	conn.respond(250, 'Message accepted', () => {
		conn.resetTransaction();
	});
});
