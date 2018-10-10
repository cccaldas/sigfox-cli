module.exports = {
	
	isObject: function(value) {
		return value && typeof value === 'object' && value.constructor === Object;
	},

	addLeadingZeroHEX(hex, length=2) {
		while(hex.length < length) {
			hex = '0' + hex;
		}
		
		return hex;
	},

	unixTimestampToDate(timestamp) {
		return new Date(timestamp * 1000);
	},

	addLeadingZeroInt(int, length=2) {
		int = String(int);
		
		while(int.length < length) {
			int = '0' + int;
		}
		
		return int;
	},

	addLeadingZeroBin(bin, length) {
		while(bin.length < length) {
			bin = '0' + bin;
		}
		
		return bin;
	},

	parseValidNumber: function(value) {
		value = Number(value);
		
		if(isNaN(value)) {
			value = 0;
		}

		return value;
	},

	hex2SignedInt: function(hex) {
	// console.log('hex2SignedInt', hex);

		if(hex.length % 2 != 0)  {
			hex = '0'.concat(hex);
		}

		var bin 			= parseInt(hex, 16).toString(2);
		var int 			= 0;

		while(bin.length < (hex.length * 4)) {
			bin = '0'.concat(bin);
		}

		// console.log(bin);

		var table = [-32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];

		for (var i = 0; i < bin.length; i++) {
			var char = Number(bin.charAt(i));
			if(char == 1) {
				int += table[i];
			}
		}

		// console.log(bin);

		return int;
	}

}