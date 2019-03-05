function getColorData() {
	const data = {
		/*within each section is a map - key being a # which will be used to compare 
		the current minute to/from sunrise/sunset and the value being what is returned 
		for the app to use to create the gradient.*/
		dawn: {
			//90: beginning of dawn
			//0: sunrise
			90: `linear-gradient(180deg, rgba(2,0,36,1) 85%, rgba(4,23,46,1) 100%)`,
			89: `linear-gradient(180deg, rgba(2,0,36,1) 84%, rgba(5,26,50,1) 100%)`,
			88: `linear-gradient(180deg, rgba(2,0,36,1) 83%, rgba(6,28,55,1) 100%)`,
			87: `linear-gradient(180deg, rgba(2,0,36,1) 81%, rgba(6,30,60,1) 100%)`,
			86: `linear-gradient(180deg, rgba(2,0,36,1) 80%, rgba(7,33,64,1) 100%)`,
			85: `linear-gradient(180deg, rgba(2,0,36,1) 78%, rgba(8,36,69,1) 100%)`,
			84: `linear-gradient(180deg, rgba(2,0,36,1) 77%, rgba(10,40,74,1) 100%)`,
			83: `linear-gradient(180deg, rgba(2,0,36,1) 75%, rgba(11,44,80,1) 100%)`, 
			82: `linear-gradient(180deg, rgba(2,0,36,1) 72%, rgba(11,44,80,1) 100%)`,
			81: `linear-gradient(180deg, rgba(2,0,36,1) 69%, rgba(11,45,81,1) 100%)`,
			80: `linear-gradient(180deg, rgba(2,0,36,1) 67%, rgba(11,46,82,1) 100%)`,
			79: `linear-gradient(180deg, rgba(2,0,36,1) 64%, rgba(11,47,85,1) 100%)`,
			78: `linear-gradient(180deg, rgba(2,0,36,1) 61%, rgba(11,48,86,1) 100%)`,
			77: `linear-gradient(180deg, rgba(2,0,36,1) 58%, rgba(11,49,86,1) 100%)`,
			76: `linear-gradient(180deg, rgba(2,0,36,1) 55%, rgba(11,50,87,1) 100%)`,
			75: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 100%)`,
			74: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 100%)`,
			73: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 96%, rgba(60,62,59,1) 100%)`,
			72: `linear-gradient(180deg, rgba(2,0,36,1) 50%, rgba(12,52,87,1) 92%, rgba(64,60,60,1) 100%)`,
			71: `linear-gradient(180deg, rgba(2,0,36,1) 49%, rgba(12,54,89,1) 88%, rgba(70,64,64,1) 100%)`,
			70: `linear-gradient(180deg, rgba(2,0,36,1) 48%, rgba(12,58,90,1) 86%, rgba(69,64,59,1) 98%, rgba(100,54,10,1) 100%)`,
			69: `linear-gradient(180deg, rgba(2,0,36,1) 47%, rgba(12,58,90,1) 84%, rgba(69,64,59,1) 97%, rgba(100,35,10,1) 100%)`,
			68: `linear-gradient(180deg, rgba(2,0,36,1) 45%, rgba(12,58,90,1) 82%, rgba(69,64,59,1) 95%, rgba(103,37,11,1) 100%)`,
			67: `linear-gradient(180deg, rgba(2,0,36,1) 45%, rgba(12,58,90,1) 80%, rgba(69,64,59,1) 94%, rgba(106,39,11,1) 100%)`,
			66: ``,
			65: ``,
			64: `linear-gradient(180deg, rgba(2,0,36,1) 43%, rgba(14,60,98,1) 77%, rgba(75,67,59,1) 91%, rgba(126,45,13,1) 100%)`,
			62: ``,
			60: `linear-gradient(180deg, rgba(2,0,36,1) 40%, rgba(14,64,107,1) 74%, rgba(79,70,59,1) 87%, rgba(143,53,16,1) 100%)`,
			53: ``,
			52: ``,
			50: ``,
			45: `linear-gradient(180deg, rgba(2,0,36,1) 20%, rgba(14,64,107,1) 71%, rgba(90,108,103,1) 82%, rgba(255,181,79,1) 92%, rgba(231,89,30,1) 100%)`,
			40: ``,
			38: ``,
			37: ``,
			30: `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,32,113,1) 33%, rgba(51,103,130,1) 60%, rgba(129,154,146,1) 77%, rgba(255,199,79,1) 91%, rgba(231,123,30,1) 100%)`,
			23: ``,
			22: ``,
			20: ``,
			15: `linear-gradient(180deg, rgba(6,10,99,1) 0%, rgba(0,50,122,1) 21%, rgba(62,119,149,1) 53%, rgba(150,170,163,1) 75%, rgba(255,199,79,1) 86%, rgba(241,170,86,1) 100%)`,
			10: ``,
			8: ``,
			7: ``,
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