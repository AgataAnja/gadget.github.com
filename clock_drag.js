function Drag (wrapper) {
	var horizontal_shift,
		vertical_shift,
		start_left,
		start_top,
		next_left,
		next_top,
		draggable = false;

	wrapper.addEventListener('mousedown', getWrapper, false);
	document.addEventListener('mousemove', moveWrapper, false);
	document.addEventListener('mouseup', stopDrag, false);

	wrapper.style.left = '0px';
	wrapper.style.top = '0px';

	function getWrapper (e) {
		e = e || window.event;

		start_left = e.clientX;
		start_top = e.clientY;

		draggable = true;
	}

	function moveWrapper (e) {
		e = e || window.event;

		if (draggable) {
			horizontal_shift = e.clientX - start_left;
			vertical_shift = e.clientY - start_top;

			next_left = parseInt(wrapper.style.left) + horizontal_shift;
			next_top = parseInt(wrapper.style.top) + vertical_shift;

			wrapper.style.left = ((next_left < 0) ? 0 : next_left) + 'px';
			wrapper.style.top = ((next_top < 0) ? 0 : next_top) + 'px';
		}
	}

	function stopDrag () {
		horizontal_shift = 0;
		vertical_shift = 0;
		start_left = 0;
		start_top = 0;
		draggable = false;
	}
}