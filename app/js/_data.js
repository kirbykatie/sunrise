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
			45: `linear-gradient(180deg, rgba(2,0,36,1) 20%, rgba(14,64,107,1) 71%, rgba(80,90,103,1) 82%, rgba(255,181,79,1) 92%, rgba(231,89,30,1) 100%)`,
			44: `linear-gradient(180deg, rgba(2,0,36,1) 19%, rgba(16,61,105,1) 67%, rgba(75,92,108,1) 82%, rgba(255,181,79,1) 91%, rgba(231,92,30,1) 100%)`,
			43: `linear-gradient(180deg, rgba(2,0,36,1) 17%, rgba(20,55,103,1) 64%, rgba(70,94,114,1) 81%, rgba(255,181,79,1) 91%, rgba(231,96,30,1) 100%)`,
			42: `linear-gradient(180deg, rgba(2,0,36,1) 16%, rgba(20,50,100,1) 60%, rgba(65,100,120,1) 80%, rgba(255,181,79,1) 91%, rgba(231,99,30,1) 100%)`,
			41: `linear-gradient(180deg, rgba(2,0,36,1) 15%, rgba(12,31,78,1) 40%, rgba(22,55,100,1) 60%, rgba(77,103,123,1) 80%, rgba(255,181,79,1) 91%, rgba(231,100,30,1) 100%)`,
			40: `linear-gradient(180deg, rgba(2,0,36,1) 13%, rgba(12,35,85,1) 37%, rgba(25,60,100,1) 60%, rgba(80,110,125,1) 80%, rgba(255,181,79,1) 91%, rgba(231,102,30,1) 100%)`,
			39: `linear-gradient(180deg, rgba(2,0,36,1) 12%, rgba(11,37,92,1) 38%, rgba(30,70,105,1) 64%, rgba(88,120,130,1) 80%, rgba(255,181,79,1) 91%, rgba(231,104,30,1) 100%)`,
			38: `linear-gradient(180deg, rgba(2,0,36,1) 10%, rgba(10,40,100,1) 40%, rgba(45,90,110,1) 69%, rgba(95,125,130,1) 80%, rgba(255,181,79,1) 91%, rgba(231,106,30,1) 100%)`,
			37: `linear-gradient(180deg, rgba(2,0,36,1) 9%, rgba(4,36,108,1) 39%, rgba(46,91,113,1) 68%, rgba(97,127,130,1) 80%, rgba(255,182,79,1) 91%, rgba(231,108,30,1) 100%)`,
			36: `linear-gradient(180deg, rgba(2,0,36,1) 7%, rgba(2,34,111,1) 38%, rgba(47,93,115,1) 67%, rgba(99,128,131,1) 80%, rgba(255,184,79,1) 91%, rgba(231,110,30,1) 100%)`,
			35: `linear-gradient(180deg, rgba(2,0,36,1) 5%, rgba(2,32,110,1) 37%, rgba(48,95,117,1) 66%, rgba(100,130,130,1) 80%, rgba(255,187,79,1) 91%, rgba(231,112,30,1) 100%)`,
			34: `linear-gradient(180deg, rgba(2,0,36,1) 4%, rgba(2,30,109,1) 36%, rgba(48,96,120,1) 65%, rgba(102,132,132,1) 79%, rgba(255,190,79,1) 91%, rgba(231,114,30,1) 100%)`,
			33: `linear-gradient(180deg, rgba(2,0,36,1) 3%, rgba(1,31,110,1) 35%, rgba(49,98,126,1) 64%, rgba(108,138,134,1) 79%, rgba(255,193,79,1) 91%, rgba(231,112,30,1) 100%)`,
			32: `linear-gradient(180deg, rgba(2,0,36,1) 2%, rgba(1,31,111,1) 34%, rgba(50,100,130,1) 62%, rgba(115,143,139,1) 78%, rgba(255,195,79,1) 91%, rgba(231,118,30,1) 100%)`,
			31: `linear-gradient(180deg, rgba(2,0,36,1) 1%, rgba(0,32,112,1) 34%, rgba(50,102,130,1) 61%, rgba(122,148,143,1) 77%, rgba(255,199,79,1) 91%, rgba(231,120,30,1) 100%)`,
			30: `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,32,113,1) 33%, rgba(51,103,139,1) 60%, rgba(129,154,146,1) 77%, rgba(255,199,79,1) 91%, rgba(231,123,30,1) 100%)`,
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