import './bundler.js';
import './firework.js';
import './index.css';
import './except.css';
import './style.scss';
import './bubble.js';
import 'swiper/swiper-bundle.css';
import { Power1, gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$ } from './helper.js';

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

(function () {
	const avt = gsap.timeline({
		ease: 'none',
		scrollTrigger: {
			trigger: '.story-body',
			scrub: 2,
			start: 'top left',
			end: `bottom`,
		},
	});
	avt
		.from('.avt', {
			filter: `grayscale(1)`,
			borderRadius: '0',
			scale: 0.2,
			opacity: 0,
			translate: '-200% 300%',
			rotate: '-35deg',
		})
		.to('.avt', {
			filter: `grayscale(0)`,
			borderRadius: '50%',
			scale: 1,
			translate: '0 0',
			rotate: '0',
		})
		.to('.avt', {
			borderRadius: '50%',
			scale: 12,
			translate: '0 50%',
			rotate: '360deg',
			opacity: 0.1,
			stagger: 0.6,
		});
	gsap
		.timeline({
			ease: 'none',
			scrollTrigger: {
				trigger: '.story-body',
				scrub: 1.2,
				start: 'top left',
				end: `bottom`,
			},
		})
		.from('.cake', {
			translate: '-200% -300%',
			rotate: '-35deg',
			opacity: 0,
		})
		.to('.cake', {
			translate: '0 0',
			rotate: '0',
			opacity: 1,
		})
		.to('.cake', {
			opacity: 0,
			translate: '200% 300%',
		});
	const hat = gsap.timeline({
		ease: 'none',
		scrollTrigger: {
			trigger: '.story-body',
			scrub: 1.5,
			start: 'top left',
			end: `bottom`,
		},
	});
	hat
		.from('.hat', {
			opacity: 0,
			translate: '300px 20px',
			rotate: `45deg`,
		})
		.to('.hat', {
			opacity: 1,
			translate: '0 0',
			rotate: `0deg`,
		})
		.to('.hat', {
			opacity: 0,
			stagger: 0,
			translate: '-300px 120px',
		});

	const text = gsap.timeline({
		ease: 'none',
		scrollTrigger: {
			trigger: '.story-body',
			scrub: 1,
			start: 'top left',
			end: `bottom`,
		},
	});

	text
		.from('#textGradient', {
			backgroundPositionX: '100%',
			scale: 0.1,
			opacity: 0,
			translate: '300% 100px',
			rotate: '45deg',
		})
		.to('#textGradient', {
			backgroundPositionX: 0,
			scale: 1,
			delay: 0.2,
			translate: '-50% 0',
			rotate: '0deg',
		})
		.to('#textGradient', {})
		.to('.trigger-textGradient', {
			scale: 1.1,
			top: '0',
		})
		.to('#textGradient', {
			translate: '0 0',
		})
		.to('.trigger-textGradient', {
			left: '12px',
			translateX: 0,
		});
})();

(function () {
	const stories = document.querySelectorAll('.story');

	stories.forEach((s, index) => {
		const img = s.querySelector('img.thumb');
		const cap = s.querySelector('.story__caption');
		const tl = gsap.timeline({});
		tl.from(s, {
			x: index % 2 === 0 ? '50%' : '-50%',
			delay: index,
			duration: 1.1,
      opacity: 0
		}).to(s, {
			x: 0,
		});

		tl.to(s, {
			borderColor: '#c4fff4',
		});
		tl.from(cap, {
			filter: 'blur(10px)',
		});
		tl.from([img], {
			scale: 4,
			ease: 'power2',
			filter: 'blur(4px)  grayscale(.8)',
		}).to(img, {
			scale: 1,
			ease: 'power2',
			filter: 'blur(0)',
		});
	});
})();

(function () {
	function createWaveAnimation(elements: any) {
		const tl = gsap.timeline({ repeat: 0 });
		elements.forEach((element: any, index: number) => {
			const tween = gsap.fromTo(
				element,
				{
					x: -80,
					ease: 'power1.out',
					opacity: 0,
					delay: index * 0.07,
				},
				{
					x: 0,
					y: 0,
					opacity: 1,
					ease: 'power1.out',
					delay: index * 0.07,
				}
			);
			tl.add(tween, 0);
		});

		return tl;
	}
	const textContainer = $$('#waveText span');
	const waveAnimation = createWaveAnimation(textContainer);
	waveAnimation.play();
})();
