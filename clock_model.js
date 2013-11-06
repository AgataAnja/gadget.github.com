function Clock () {
	
	this.getDate = function (options) {
		var now = new Date();
		switch (options) {
			case 'hhmm' : {
				return format(now.getHours()) + ':'
					+ format(now.getMinutes());
			}
			case 'hhmmss' : {
				return format(now.getHours()) + ':'
					+ format(now.getMinutes()) + ':'
					+ format(now.getSeconds());
			}
			case 'ddmmyy' : {
				return now.getUTCFullYear() + '-'
					+ format(now.getMonth()+1) + '-'
					+ format(now.getUTCDate());
			}
			default : {
				return now.toDateString() + ', '
					+ format(now.getHours()) + ':'
					+ format(now.getMinutes()) + ':'
					+ format(now.getSeconds());
			} 
		}

	}

	function format (date) {
		return date<10 ? '0' + date : date;
	}

	return this;
}