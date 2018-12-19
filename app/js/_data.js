function getColorData() {
	const data = {
		/*within each section is a map - key being a # which will be used to compare 
		the current minute to/from sunrise/sunset and the value being what is returned 
		for the app to use to create the gradient.*/
		dawn: {
			//90: beginning of dawn
			//0: sunrise
			0: "zero",
			1: "one",
			2: "two",
			"test": "let's get this bread",
			3: "three"
		},
		daybreak: {
			//0: sunrise
			//90: day

		},
		sunsetting: {
			//0: beginning of sunset
			//90: actual technical sunset
		},
		dusk: {
			//0: sunset
			//90: end of dusk
		}
	};
	return data;
}