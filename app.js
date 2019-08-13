

let shabads=["My friends have come into my home. The True Lord has united me with them. The Lord automatically united me with them when it 	pleased Him. uniting with the chosen ones, I have found peace",
			
			"I have obtained that thing, which my mind desired. Meeting with them, night and day, my mind is pleased; my home and mansion are beautified",
			
			"Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there. When the soul lies down in that grass the world is too full to talk about.",
			
			"The wound is the place where the Light enters you.",
			
			"Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself",
			
			"If you are irritated by every rub, how will your mirror be polished?",
			
			"Seek the spirit, forget the form.",
			
			"Seek your master, say your prayers and surrender to God.",
			
			"Its all in the One contained, understand that one and forget the rest.",
			
			"It’s not me, it’s he himself He amuses his own self",
			
			"You who have read thousands of books of knowledge,have you ever tried to read your own self?",
			
			"Going to Makkah is not the ultimate Even if hundreds of prayers are offered Going to River Ganges is not the ultimate Even if hundreds of cleansing (Baptisms) are done Going to Gaya is not the ultimate Even if hundreds of worships are done Bulleh Shah the ultimate is When the “I” is removed from the heart",
			
			"Through the Gurus Teachings, I sing the Glorious Praises of the Lord with joyous love and delight; I am enraptured, lovingly attuned to the Naam, the Name of the Lord. Through the Word of the Gurus Shabad, I drink in the Ambrosial Essence; I am asacrifice to the Naam. ||",
			
			"The Lord, the Life of the World, is my Breath of Life. The Lofty and Exalted Lord became pleasing to my heart and my inner being, when the Guru breathed the Mantra of the Lord into my ears.",
			
			"Come, O Saints: let us join together, O Siblings of Destiny; let us meet and chant the Name of the Lord, Har, Har. How am I to find my God? Please bless me with the Gift of the Lords Teachings.",
			
			"The Lord, Har, Har, abides in the Society of the Saints; joining this Sangat, the Lords Glories are known. By great good fortune, the Society of the Saints is found. Through the Guru, the True Guru, I receive the Touch of the Lord God.",
			
			"I sing the Glorious Praises of God, my Inaccessible Lord and Master; singing His Praises, I am enraptured. The Guru has showered His Mercy on servant Nanak; in an instant, He blessed him with the Gift of the Lords Name.",
			
			"With the rising of the sun, the Gurmukh speaks of the Lord. All through the night, he dwells upon the Sermon of the Lord. My God has infused this longing within me; I seek my Lord God.",
			
			"My mind is the dust of the feet of the Holy. The Guru has implanted the Sweet Name of the Lord, Har, Har, within me. I dust the Gurus Feet with my hair.",
			
			"Dark are the days and nights of the faithless cynics; they are caught in the trap of attachment to Maya. The Lord God does not dwell in their hearts, even for an instant; every hair of their heads is totally tied up in debts.",
			
			"Joining the Sat Sangat, the True Congregation, wisdom and understanding are obtained, and one is released from the traps of egotism and possessiveness. The Lords Name, and theLord, seem sweet to me. Through the Word of His Shabad, the Guru has made me happy.",
			
			"I am just a child; the Guru is the Unfathomable Lord of the World. In His Mercy, He cherishes and sustains me. I am drowning in the ocean of poison; O God, Guru, Lord of the World, please save Your child, Nanak."
			
			
			];

const generate = document.querySelector("#generate");
const cardText = document.querySelector("#quote");
const img = document.querySelector("img");
generate.addEventListener("click", generateImage);
setTimeout(generateQuote,100);
generate.addEventListener("click", generateQuote);

function generateImage(e){
	document.location.reload();
	e.preventDefault();
}

function generateQuote(e){
	
	let x =Math.floor(Math.random()*shabads.length);
	cardText.textContent = shabads[x];
	console.log(x);
	
	
}


			