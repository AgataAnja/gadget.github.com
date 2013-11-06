function Controller (wrapper) {
	var clk = new Clock(),
		drag = new Drag(document.getElementById('wrapper')),
		current_format = 'hhmmss',
		options,
		set_date = setInterval(function () {
			wrapper.innerHTML = clk.getDate();
		}, 100);

	wrapper.addEventListener('click', leftClick, false);
	wrapper.addEventListener('contextmenu', rightClick, false);
	wrapper.addEventListener('dblclick', dblClick, false);

	function leftClick () {
		if (current_format === 'hhmmss') {
			options = 'hhmm'
		} else {
			options = 'hhmmss'
		}

		current_format = options;

		clearInterval(set_date);
		set_date = setInterval(function () {
			wrapper.innerHTML = clk.getDate(options);
		}, 100);
	}

	function rightClick (e) {
		e = e || window.event;
		e.preventDefault();

		if (current_format === 'ddmmyy') {
			options = 'hhmmss'
		} else {
			options = 'ddmmyy'
		}

		current_format = options;

		clearInterval(set_date);
		set_date = setInterval(function () {
			wrapper.innerHTML = clk.getDate(options);
		}, 100);
	}

	function dblClick (e) {
		e = e || window.event;
		e.preventDefault();

		options = '';
		current_format = options;

		clearInterval(set_date);
		set_date = setInterval(function () {
			wrapper.innerHTML = clk.getDate(options);
		}, 100);
	}
}