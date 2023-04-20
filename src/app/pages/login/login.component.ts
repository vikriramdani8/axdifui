import { Component, HostListener } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	inputOutlineStyle = {
		width: '100%',
	};
	inputTextStyle = {
		width: '100%',
		padding: '8px',
	};

	innerWidth = 0;

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.innerWidth = window.innerWidth;
		$('body').removeClass('set-bg');
	}

	constructor() {}

	ngOnInit(): void {
		this.onResize(0);
	}
}
