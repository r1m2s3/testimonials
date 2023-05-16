const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("ramshi.jpg")',
		name: "Ramshida",
		profession: "2nd year,CABM",
		description:
			"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},

	{
		photo:
		'url("lubi.jpg")',
		name: "lubna",
		profession: "2nd year,CABM",
		description:"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
			
	},

	{
		photo:
			"url('juzi.jpg')",
		name: "juzaira",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
	
	{
		photo:
			"url('asna.jpg')",
		name: "Asna shamila",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},

	{
		photo:
			"url('liya.jpg')",
		name: "Liyana",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
	{
		photo:
			"url('mahra.jpg')",
		name: " Mahra",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
	
	{
		photo:
			"url('mufi.jpg')",
		name: "mufeeda",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
	{
		photo:
			"url('vidya.jpg')",
		name: "vidya",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
	{
		photo:
			"url('shahana.jpg')",
		name: "Shahana sherin",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
	{
		photo:
			"url('rumi.jpg')",
		name: "Rumaisha",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
	{
		photo:
			"url('rushi.jpg')",
		name: "Rushda banu",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 10) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 10;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
	if (chicken.style.opacity === "0") {
		chicken.style.opacity = "1";
		imgDiv.classList.add("move-head");
		surpriseMeBtn.innerText = "Remove the chicken";
		surpriseMeBtn.classList.remove("surprise-me-btn");
		surpriseMeBtn.classList.add("hide-chicken-btn");
		isChickenVisible = true;
	} else if (chicken.style.opacity === "1") {
		chicken.style.opacity = "0";
		imgDiv.classList.remove("move-head");
		surpriseMeBtn.innerText = "Surprise me";
		surpriseMeBtn.classList.add("surprise-me-btn");
		surpriseMeBtn.classList.remove("hide-chicken-btn");
		isChickenVisible = false;
	}
});

window.addEventListener("resize", () => {
	description.style.height = "100%";
});