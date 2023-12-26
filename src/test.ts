import './bundler.js';
import './firework.js';
import './index.css';
import './style.scss';
import './except.css';
import './bubble.js';
import 'swiper/swiper-bundle.css';
import { Power1, gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $ } from './helper.js';

(function () {
	let i = 0;
	const title = $('title');
	const titleSpliter = title.textContent?.split(' ')!;
	setInterval(() => {
		if (i < titleSpliter!.length - 1) {
			i += 1;
		} else {
			i = 0;
		}
		title.innerHTML = titleSpliter[i];
	}, 1500);
})();

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	scrollTrigger: {
		scrub: 0.5,
		trigger: '#body',
	},
});

tl.fromTo(
	'#pin-windmill-svg',
	{},
	{
		rotateZ: 1500,
		scale: 1,
	}
);

//effect5

(function () {
	const avatar = gsap.timeline({
		ease: 'none',
		scrollTrigger: {
			trigger: '.trigger-textGradient',
			scrub: 0.5,
			start: 'top left',
			end: `bottom  bottom`,
      
		},
	});
	avatar.from('.avatar-boxer', {
		borderRadius: '0',
		scale: 0.5,
		opacity: 0.3,
		translate: '-200% 90px',
		rotate: '-35deg',
	});
	avatar.to('.avatar-boxer', {
		scale: 1,
		borderRadius: '50%',
		translate: '0 0',
		rotate: '0',
	});

	const hat = gsap.timeline({
		ease: 'none',
		scrollTrigger: {
			trigger: '.trigger-textGradient',
			scrub: 1.5,
			start: 'top left',
			end: `bottom  bottom`,
		},
	});
	hat.from('.hat', {
		opacity: 0,
		translate: '90px 20px',
		rotate: `45deg`,
	});
	hat.to('.hat', {
		opacity: 1,
		translate: '0 0',
		rotate: `0deg`,
	});

	const avt = gsap.timeline({
		ease: 'none',
		scrollTrigger: {
			trigger: '.trigger-textGradient',
			scrub: 1.5,
			start: 'top left',
			end: `bottom  bottom`,

		},
	});
	avt.from('.avt', {
		filter: `grayscale(1)`,
    borderRadius: '0',
	});
	avt.to('.avt', {
    filter: `grayscale(0)`,
    borderRadius: '50%',
    stagger: .5
	});
	const text = gsap.timeline({
		ease: Power1.easeInOut,
		scrollTrigger: {
			trigger: '.trigger-textGradient',
			scrub: 0.5,
			start: 'top left ',
			end: `+=100%`,
		},
	});
	text.from('#textGradient', {
		backgroundPositionX: '100%',
		scale: 0.1,
		opacity: 0,
		translate: '200% 90px',
		rotate: '45deg',
	});
	text.to('#textGradient', {
		backgroundPositionX: 0,
		scale: 1,
		translate: '0 0',
		rotate: '0deg',
	});
})();

(function () {
  
let sections = gsap.utils.toArray(".scroll .panel");
let container = $('.container')!

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  duration: 6,
  scrollTrigger: {
    trigger: ".scroll",
    pin: true,
    scrub: true,
    end: `+=${container.offsetWidth}`
  }
});

// spin the box
gsap.to(".box", {
  rotate: 360,
  duration: 1,
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: ".box",
    start: "left center",
    // toggleActions: "play none none reverse",
    scrub: true,
    toggleClass: "active",
    onEnter: () => console.log("enter"),
  }
});
})()