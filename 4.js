(function() {
	function palindrome(n) {
		return n == n.toString().split("").reverse().join("") ? true : false;
	};

	var largest = 0;
	
	for (var i = 100; i < 1000; i++) {
		for (var j = 100; j < 1000; j++) {
			if (palindrome(i * j) && i * j > largest) {
				largest = i * j;
			}
		}
	}

	console.log(largest);
})();
