function getColorData() {
	const data = {
		/*within each section is a map - key being a # which will be used to compare 
		the current minute to/from sunrise/sunset and the value being what is returned 
		for the app to use to create the gradient.*/
		dawn: {
			//90: beginning of dawn
			//0: sunrise
			90: `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(2,0,36,1) 100%)`,
			80: ``,
			75: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 100%)`,
			70: ``,
			60: `linear-gradient(180deg, rgba(2,0,36,1) 40%, rgba(14,64,107,1) 74%, rgba(79,70,59,1) 87%, rgba(143,53,16,1) 100%)`,
			50: ``,
			45: `linear-gradient(180deg, rgba(2,0,36,1) 20%, rgba(14,64,107,1) 71%, rgba(90,108,103,1) 82%, rgba(255,181,79,1) 92%, rgba(231,89,30,1) 100%)`,
			40: ``,
			30: `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,32,113,1) 33%, rgba(51,103,130,1) 60%, rgba(129,154,146,1) 77%, rgba(255,199,79,1) 91%, rgba(231,123,30,1) 100%)`,
			20: ``,
			15: `linear-gradient(180deg, rgba(6,10,99,1) 0%, rgba(0,50,122,1) 21%, rgba(62,119,149,1) 53%, rgba(150,170,163,1) 75%, rgba(255,199,79,1) 86%, rgba(241,170,86,1) 100%)`,
			10: ``,
			1: `linear-gradient(180deg, rgba(0,32,113,1) 0%, rgba(24,74,143,1) 21%, rgba(98,168,204,1) 55%, rgba(236,169,64,1) 84%, rgba(255,199,79,1) 100%)`
		},
		daybreak: {
			0: `linear-gradient(180deg, rgba(0,32,113,1) 0%, rgba(24,74,143,1) 21%, rgba(98,168,204,1) 55%, rgba(236,169,64,1) 84%, rgba(255,199,79,1) 100%)`
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