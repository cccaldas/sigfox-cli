const CMD_PAYLOAD = 'payload';
const Utils 			= require('./lib/Utils.js');

var cmd = process.argv[2] ? process.argv[2] : '';

switch(cmd) {
	case CMD_PAYLOAD:
		cmdPayload();
	break;

	default:
		cmdDefault();
}

function cmdPayload() {
	var payload = process.argv[3] ? process.argv[3].toUpperCase() : '00';
	var result 	= parsePayload(payload);

	// console.log('cmdPayload');

	var totalBytes = result.hex.length;

	console.log('payload =', payload, 'bytes =', totalBytes);

	console.log('[##]: (0x00) - (00000000) - (000)');
	console.log(' --    ----     --------     ----');

	for (var i = 0; i < totalBytes; i++) {
		var b 	= Utils.addLeadingZeroInt(i);
		var hex = result.hex[i];
		var bin = result.bin[i];
		var int = Utils.addLeadingZeroInt(result.int[i], 3);
		
		console.log(`[${b}]: (0x${hex}) - (${bin}) - (${int})`);
	}
}

function cmdDefault() {
	console.log('default command');
}

function parsePayload(hex) {
	var result 	= { hex: [], bin: [], int: [] };
	var bytes 	= [];

	hex = hex.match(/.{2}/g);

	for (var i = 0; i < hex.length; i++) {
		hex[i] 		= Utils.addLeadingZeroHEX(hex[i], 2);
		bytes[i] 	= 

		result.hex[i] = hex[i];
		result.bin[i] = Utils.addLeadingZeroBin(parseInt(hex[i], 16).toString(2), 8);
		result.int[i] = parseInt(hex[i], 16);
	}

	return result;
}