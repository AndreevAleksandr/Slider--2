// alert("Привет Санек!!!")


// let result = prompt('Сколько тебе лет?', '');
// alert(`Тебе ${result} лет!`); // Тебе 100 лет!
// let userName = prompt('Как звать?', '');
// alert(`ТЕбя зовут ${userName}`);


// let userName = prompt('Имя?','');
// if (userName == 'Alex') {
// 	alert('ЗДАРОВА САНЕК!!!')
// } else {
// 	alert('ТИ КТО???');
// }



const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
	slide.addEventListener('click', () => {
		clearActiveClasses()	

		slide.classList.add('active')
	})
}

function clearActiveClasses() {
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}