var zodiac = [
	{
		sign: "aquarius",
		fortune: "Energetic, Wise, Creative",
		fortune2:"Insensitive and no emotion",
		image: "img/Aquarius.png"
	},
	{
		sign: "pisces",
		fortune: "Imagination, Dependable,Compassionate",
		fortune2:"Pessimistic and Overemotional",
		image: "img/Pisces.png"
	},
	{
		sign: "aries",
		fortune: "Passionate, Positive,Courageous",
		fortune2:"Stubborn, Arrogant",
		image: "img/Cancer.png"
	},
	{
		sign: "taurus",
		fortune: "Dependable, Generous, Independent",
		fortune:"Materialistic, Lazy",
		image: "img/Taurus.png"
	},
	{
		sign: "gemini",
		fortune: "Intellectual, Humorous, Enthusiastic",
		fortune2: "Inconsistent, Hesitant, Anxious",
		image: "img/Gemini.png"
	},
	{
		sign: "cancer",
		fortune: "Loving, Faithful, Creative",
		fortune2:"Overemotional, Clingy, Moody",
		image: "img/Cancer.png"
	},
	{
		sign: "leo",
		fortune: "Optimistic, Kind, Loyal",
		fortune2:"Dominating, Arrogant, Stubborn",
		image: "img/Leo.png"
	},
	{
		sign: "virgo",
		fortune: "Analytical, Modest, Intelligent",
		fortune2:"Conservative and Fussy",
		image: "img/Virgo.png"
	},
	{
		sign: "libra",
		fortune: " Honest, Charming, Diplomatic",
		fortune2:"Shallow, Unreliable, Stubborn",
		image: "img/Libra.png"
	},
	{
		sign: "scorpio",
		fortune: "Friendly, Faithful, Determined",
		fortune2:"Manipulative and Distrustful",
		image: "img/Scorpio.png"
	},
	{
		sign: "sagittarius",
		fortune: "Adventurous, Independent, Sincere",
		fortune2:"Restless and Impatient",
		image: "img/Sagittarius.png"
	},
	{
		sign: "capricorn",
		fortune: "Discipline, Reliable, Determined",
		fortune2:"Selfish and no emotion",
		image: "img/Capricorn.png"
	}
]

function horoscope() {
	// if input =sign
	var sign = document.getElementById("sign").value
	var str="See who you are compatible with"
	var result=str.link("index2.html");

	for(i = 0; i < zodiac.length; i++) {
		// if sign entered = one of the arrays .stop
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("strength").innerHTML = "<span>Strengths</span>: " + zodiac[i].fortune
			document.getElementById("weak").innerHTML = "<span>Weakness:</span> " + zodiac[i].fortune2
			document.getElementById("compat").innerHTML= result;
			return
		} else {
			document.getElementById("yourSign").innerHTML = "That's not sign . Try again!"
			document.getElementById("strength").innerHTML = ""
			document.getElementById('weak').innerHTML=""
			document.getElementById("icon").src = ""
			document.getElementById("compat").innerHTML=""
		}
	}
}

