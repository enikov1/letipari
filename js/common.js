'use strict';

const swiper = new Swiper('#slider_header', {
  // Optional parameters
	slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
	clickable: true
  }
});

const button_close_popup = document.querySelectorAll('.popup__close'),
	  popup = document.querySelector('.popup_locale'),
	  popup_video = document.querySelector('.popup_video');

button_close_popup.forEach(e => {
	e.addEventListener('click', () => {
		if(popup.classList.contains('active')) {
			popup.classList.remove('active');
		}
		if(popup_video.classList.contains('active')) {
			popup_video.classList.remove('active');
		}
	});
});

const button_item_buy = document.querySelectorAll('._js_popup');

button_item_buy.forEach(e => {
	e.addEventListener('click', (event) => {
		event.preventDefault();

		popup.classList.add('active');
	});
});

if(popup) {
	document.addEventListener('click', (e) => {
		const target = e.target,
			  its_popup = target == popup.querySelector('.popup__wrap') || popup.querySelector('.popup__wrap').contains(target),
			  its_btn_popup = target.classList.contains('_js_popup'),
			  popup_is_active = popup.classList.contains('active');
		// console.log(its_popup);
		if(!its_popup && !its_btn_popup && popup_is_active) {
			popup.classList.remove('active');

			// let popup_left_wrap = document.querySelector('.popup__wrap-left');

			// if(popup_left_wrap) {
			// 	popup_left_wrap.remove();
			// }
		}
	});
}
var player;
function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
          }
        });
      }
function onPlayerReady(event) {
    event.target.playVideo();
	console.log(2);
}

const play_button = document.querySelector('._js_play_video');

play_button.addEventListener('click', () => {
	popup_video.classList.add('active');
	player.playVideo();
	// onPlayerReady(popup_video.querySelector('iframe'));
});