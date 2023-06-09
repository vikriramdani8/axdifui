import { Component, HostListener, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
declare var $: any;

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss', './carousel.scss'],
})
export class RegisterComponent implements OnInit {
	inputOutlineStyle = {
		width: '100%',
	};
	inputTextStyle = {
		width: '100%',
		padding: '8px',
	};

	innerHeight = 0;
	innerWidth = 0;
	slideRaw: any = [];
	slideIndex = 0;
	onSubmit = false;

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		setTimeout(() => {
			this.innerWidth = window.innerWidth;
			this.innerHeight = window.innerHeight;

			if (this.innerWidth < 992) {
				$('body').addClass('set-bg');
			} else {
				$('body').removeClass('set-bg');
			}

			$('.info-verify').css(
				'height',
				$('.verify-body').innerHeight() + 20 + 'px'
			);
		}, 20);
	}

	constructor() {}

	ngOnInit(): void {
		this.innerHeight = window.innerHeight;
		this.innerWidth = window.innerWidth;
		this.slideRaw = [
			{
				image: 'register1.svg',
				text1: 'Manage Task Easily & Efficiently',
				text2: 'Increase employee productivity and performance in a measurable and precision system in one application.',
				active: true,
			},
			{
				image: 'register2.svg',
				text1: 'Communication Is Key',
				text2: 'Connect with your coworkers anywhere like you are in one workspace. Very simple and fast.',
				active: false,
			},
			{
				image: 'register3.svg',
				text1: 'Employee Self-Service',
				text2: 'Simplify the administrative affairs of the company where you work wherever and whenever. Let’s get started with all these conveniences',
				active: false,
			},
		];

		this.onResize(null);
	}

	changeSlide(index: any) {
		this.slideRaw[this.slideIndex].active = false;
		this.slideRaw[index].active = true;
		this.slideIndex = index;
	}

	register() {
		this.onSubmit = true;
		this.onResize(null);
	}
}
