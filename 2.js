(function() {
	function fib(a, b) {
		return a + b;
	};

	var a = 1;
	var b = 2;

	var sum = 2;

	do {
		var term = fib(a, b);

		if (term % 2 === 0) {
			sum += term;
		}

		a = b;
		b = term;
	} while (term <= 4000000);
	
	console.log(sum);
})();
