let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
//
document.addEventListener('DOMContentLoaded', (event) => {	

	var options = {
        strings:[
      "Frontend Developer","Designer",
			"Freelancer"
        ],
		typeSpeed: 80,
		backSpeed: 60,
		//clean and write agine speed
		backDelay: 900,
		startDelay: 1000,
        loop:true
	};
	var typed = new Typed('.typing', options);
  });
	//
