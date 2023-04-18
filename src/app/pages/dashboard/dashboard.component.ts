import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	innerWidth = 0;
	indexActive = 0;
	navShow = false;
	responsive = false;

	listMenu = [
		{
			menuName: 'Overview',
			routerLink: '',
			active: false,
		},
		{
			menuName: 'Employee',
			routerLink: '',
			active: false,
		},
		{
			menuName: 'Submission',
			routerLink: '',
			active: false,
		},
		{
			menuName: 'Task',
			routerLink: '',
			active: false,
		},
		{
			menuName: 'Chat',
			routerLink: '',
			active: false,
		},
		{
			menuName: 'Payroll',
			routerLink: '',
			active: false,
		},
	];

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.innerWidth = window.innerWidth;
		$('.header-nav').removeClass('header-nav-shadow');
		if (this.innerWidth < 850) {
			this.navShow = false;
			this.responsive = true;
		} else {
			this.responsive = false;
		}
	}

	ngOnInit(): void {
		this.onResize(0);
		this.listMenu[this.indexActive]['active'] = true;
	}

	setMenu(i: any) {
		this.listMenu[this.indexActive]['active'] = false;
		this.listMenu[i]['active'] = true;

		if (i == this.indexActive && !this.navShow) {
			this.navShow = true;
			$('.header-nav').addClass('header-nav-shadow');
		} else {
			this.navShow = false;
			$('.header-nav').removeClass('header-nav-shadow');
		}

		this.indexActive = i;
	}
}
