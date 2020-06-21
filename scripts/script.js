let wrapperMenu = document.querySelector('.wrapper-menu-icon');
let navContainer = document.querySelector('.nav__container');
let nav = document.querySelector('.nav');
let modalCol1  = document.querySelector('.modal__col-1');
let modalCol2  = document.querySelector('.modal__col-2');
let exitModalBtn = document.querySelector('.hide_modal_but_wrapper');
let dataBtn;
let toursArr = {
	'tour1': ['cart-1/img-1.png','Даты заездов: ежедневно до 31.03.21','“Сидней - Айерс Рок”','9 дней от 1665 $','Маршрут: Сидней - Айерс Рок - Кэрнс',['1655$','2620$','1425$'],['при размещении DBL','при размещении SNGL','при размещении TRPL']],
	'tour2': ['cart-2/img-1.png','Даты заездов: ежедневно до 31.03.21','Пляжный отдых  на острове Леди Эллиот','10 дней от 1855 $','Маршрут: о. Леди Эллиот',['1124$','1416$','1201$'],['при размещении DBL','при размещении SNGL','при размещении TRPL']],
	'tour3': ['cart-3/img-1.png','Даты заездов: ежедневно до 31.03.21','"Великая Океанская дорога"','8 дней от 1745 $','Маршрут: Мельбурн - Аполло-Бэй - Уоррнамбул - Холс Гэп - Маунт Гамбьер - Аделаида - остров Кенгуру - Аделаида',['1295$','2260$','1550$'],['при размещении DBL','при размещении SNGL','при размещении TRPL']],
	'tour4': ['cart-4/img-1.png','Даты заездов: ежедневно до 31.03.21','"Красное сердце Австралии"','14 дней от 2305 $','Маршрут: Аделаида - Порт Огаста - Кубер-Педи - Марла – Айерс Рок - Королевский Каньон – Алис Спрингс - Теннант-Крик - Кэтрин – Национальный парк "Какаду" - Дарвин',['2465$','5085$','4625$'],['при размещении DBL','при размещении SNGL','при размещении TRPL']],
	'tour5': ['cart-5/img-1.png','Даты заездов: ежедневно с 15.02 до 31.03.21','Пляжный отдых острове Лизард','8 дней от 5305 $','Маршрут: Кэрнс - о. Лизард - Кэрнс',['5393$','11615$','14052$'],['при размещении DBL','при размещении SNGL','при размещении TRPL']],
	'tour6': ['cart-6/img-1.png','Даты заездов: ежедневно до 31.03.21','Пляжный отдых и дайвинг на острове Херон','8 дней от 1182 $','Маршрут: Гладстон - о. Херон - Гладстон',['1226$','2116$','2335$'],['при размещении DBL','при размещении SNGL','при размещении TRPL']],
}

const arrLinkNav = document.querySelectorAll(".nav_link");
const compassOuter =  document.querySelector('.intro_compass_outer-wrapper');
const compassInner =  document.querySelector('.intro_compass-inner-wrapper');
const modal = document.querySelector(".modal");
const arrBtn = document.querySelectorAll(".open_modal_tours");
const header = document.querySelector('header');

wrapperMenu.addEventListener('click', function(){
 	wrapperMenu.classList.toggle('open');
 	nav.classList.toggle('nav__active');
    nav.classList.toggle('nav__container_hidden')
})
for (var i = 0; i < arrLinkNav.length; i++) {
	arrLinkNav[i].onclick = function(e){
		wrapperMenu.classList.remove('open');
	   	nav.classList.add('nav__container_hidden');
	   	nav.classList.remove('nav__active');
	};
}

window.addEventListener('mousemove',(e) => {
		let speed = compassInner.getAttribute('data-speed')
		let translate = e.clientX*speed / 250;

		compassOuter.style.transform = `rotate(${translate*1.5}deg)`;
		compassInner.style.transform = `rotate(${translate*1.5}deg)`;
});







if (window.innerWidth >= 1340) {
	document.querySelector(".modal__container").style.width = `${document.querySelector(".tours_card__container").offsetWidth + 2}px`;
	document.querySelector(".modal__container").style.height = `${document.querySelector(".tours_card__container").offsetHeight + 2}px`;
}if (window.innerWidth >= 960) {
	document.querySelector(".modal__container").style.width = `${document.querySelector(".tours_card__container").offsetWidth + 2}px`;
}



function createModalContent(dBtn){
	console.log(dBtn)
	modalCol1.innerHTML = `
		<img class='tour_img_modal' src="img/Tours/${toursArr[dBtn][0]}" alt="">
		<p class="tour_date_info tour_date_info_modal">${toursArr[dBtn][1]}</p>
		<p class="tour_route tour_route_modal">${toursArr[dBtn][4]}</p>
		<div class="madal_price_table">
			<div class="price_1"><b>${toursArr[dBtn][5][0]}</b></div>
			<div class="price_1_info">${toursArr[dBtn][6][0]}</div>
			<div class="price_2"><b>${toursArr[dBtn][5][1]}</b></div>
			<div class="price_2_info">${toursArr[dBtn][6][1]}</div>
			<div class="prise_3"><b>${toursArr[dBtn][5][2]}</b></div>
			<div class="price_3_info">${toursArr[dBtn][6][2]}</div>
		</div>
	`;

	modalCol2.innerHTML = `
		<p class='b-title_section modal_title'>${toursArr[dBtn][2]}</p>
		<p class='b-subtitle modal_subtitle'>${toursArr[dBtn][3]}</p>
		<p class='tour_description_modal'>А ещё реплицированные с зарубежных источников, современные исследования освещают чрезвычайно интересные особенности
		 картины в целом, однако конкретные выводы, разумеется, обнародованы. Как уже неоднократно упомянуто,
		 диаграммы связей ограничены исключительно образом мышления! Имеется спорная точка зрения, гласящая примерно следующее:
		  представители современных социальных резервов неоднозначны и будут заблокированы в рамках своих собственных рациональных ограничений.
		   Банальные, но неопровержимые выводы, а также активно развивающиеся страны третьего мира заблокированы в рамках своих собственных рациональных ограничений. В своём стремлении улучшить пользовательский опыт мы упускаем, что сделанные на базе интернет-аналитики выводы указаны как претенденты на роль ключевых факторов! Каждый из нас понимает очевидную вещь: граница обучения кадров не даёт нам иного выбора, кроме определения поэтапного и последовательного развития общества.
		<br/><br/>Имеется спорная точка зрения, гласящая примерно следующее:
 		стремящиеся вытеснить традиционное производство, нанотехнологии призывают нас к новым свершениям, которые, в свою очередь, должны быть ограничены исключительно образом мышления.<br/><br/>
 		 Значимость этих проблем настолько очевидна, что семантический разбор внешних противодействий напрямую зависит от своевременного выполнения сверхзадачи.
 		  Кстати, реплицированные с зарубежных источников, современные исследования неоднозначны и будут в равной степени предоставлены сами себе.
 		   Но сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ограничены исключительно образом мышления.
 		    Прежде всего, существующая теория влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач!
 		     Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
 		      Значимость этих проблем настолько очевидна, что внедрение современных методик выявляет срочную потребность системы массового участия.
		</p>
	`
	if (window.innerWidth <= 1340) {
		modalCol2.innerHTML = `
		<img class='tour_img_modal' src="img/Tours/${toursArr[dBtn][0]}" alt="">
		<p class="tour_date_info tour_date_info_modal">${toursArr[dBtn][1]}</p>
		<p class="tour_route tour_route_modal">${toursArr[dBtn][4]}</p>
		<div class="madal_price_table">
			<div class="price_1"><b>${toursArr[dBtn][5][0]}</b></div>
			<div class="price_1_info">${toursArr[dBtn][6][0]}</div>
			<div class="price_2"><b>${toursArr[dBtn][5][1]}</b></div>
			<div class="price_2_info">${toursArr[dBtn][6][1]}</div>
			<div class="prise_3"><b>${toursArr[dBtn][5][2]}</b></div>
			<div class="price_3_info">${toursArr[dBtn][6][2]}</div>
		</div>
	`;

		modalCol1.innerHTML = `
		<p class='b-title_section modal_title'>${toursArr[dBtn][2]}</p>
		<p class='b-subtitle modal_subtitle'>${toursArr[dBtn][3]}</p>
		<p class='tour_description_modal'>А ещё реплицированные с зарубежных источников, современные исследования освещают чрезвычайно интересные особенности
		 картины в целом, однако конкретные выводы, разумеется, обнародованы. Как уже неоднократно упомянуто,
		 диаграммы связей ограничены исключительно образом мышления! Имеется спорная точка зрения, гласящая примерно следующее:
		  представители современных социальных резервов неоднозначны и будут заблокированы в рамках своих собственных рациональных ограничений.
		   Банальные, но неопровержимые выводы, а также активно развивающиеся страны третьего мира заблокированы в рамках своих собственных рациональных ограничений. В своём стремлении улучшить пользовательский опыт мы упускаем, что сделанные на базе интернет-аналитики выводы указаны как претенденты на роль ключевых факторов! Каждый из нас понимает очевидную вещь: граница обучения кадров не даёт нам иного выбора, кроме определения поэтапного и последовательного развития общества.
		<br/><br/>Имеется спорная точка зрения, гласящая примерно следующее:
 		стремящиеся вытеснить традиционное производство, нанотехнологии призывают нас к новым свершениям, которые, в свою очередь, должны быть ограничены исключительно образом мышления.<br/><br/>
 		 Значимость этих проблем настолько очевидна, что семантический разбор внешних противодействий напрямую зависит от своевременного выполнения сверхзадачи.
 		  Кстати, реплицированные с зарубежных источников, современные исследования неоднозначны и будут в равной степени предоставлены сами себе.
 		   Но сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ограничены исключительно образом мышления.
 		    Прежде всего, существующая теория влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач!
 		     Приятно, граждане, наблюдать, как диаграммы связей, вне зависимости от их уровня, должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
 		      Значимость этих проблем настолько очевидна, что внедрение современных методик выявляет срочную потребность системы массового участия.
		</p>
	`
	}
}

for (var i = 0; i < arrBtn.length; i++) {
	arrBtn[i].onclick = function(e){
		if (e.target.classList == 'detailed_but__text') {
			dataBtn = e.target.parentElement.dataset.tourInfo;
		}else if (e.target.className == 'arrow right') {
			dataBtn = e.target.parentElement.dataset.tourInfo;
		}else {
			dataBtn = e.target.dataset.tourInfo;
		}
	   	modal.classList.remove('modal_hidden');
	   	header.classList.add('modal_hidden');
	 	createModalContent(dataBtn);
	};
}

window.onclick = (e) => {
  if  (e.target == modal){
    modal.classList.add('modal_hidden');
    header.classList.remove('modal_hidden');
  }
}
exitModalBtn.onclick = (e) => {
	modal.classList.add('modal_hidden');
	header.classList.remove('modal_hidden');
}