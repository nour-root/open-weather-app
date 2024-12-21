const getImage = (code) => {
	switch (code) {
		case "01d":
			return "sun";
		case "01n":
			return "night";
		case "02d":
			return "cloud";
		case "02n":
			return "cloud";
		case "03d":
			return "cloud";
		case "03n":
			return "cloud";
		case "04d":
			return "cloud";
		case "04n":
			return "cloud";
		case "09d":
			return "rainy";
		case "09n":
			return "rainy";
		case "10d":
			return "rainy";
		case "10n":
			return "rainy";
		case "11d":
			return "storm";
		case "11n":
			return "storm";
		case "13d":
			return "snowy";
		case "13n":
			return "snowy";
		case "50d":
			return "foog";
		case "50n":
			return "foog";
		default:
			return "sun";
	}
};

export default getImage;
