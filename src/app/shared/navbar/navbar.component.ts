import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	innerWidth = 0;
	indexActive = 0;
	navShow = false;
	responsive = false;
	sublistActive = false;
	checked = false;
	profileNav = false;

	listMenu = [
		{
			menuName: 'Overview',
			routerLink: 'dashboard',
			active: false,
			subList: [],
		},
		{
			menuName: 'Employee',
			routerLink: 'employee',
			active: false,
			subList: [],
		},
		{
			menuName: 'Submission',
			routerLink: '',
			active: false,
			subList: [
				{
					icon: 'icon1.svg',
					title: 'Exc. Attendance',
					description:
						'Report your special absence to get an exception',
				},
			],
		},
		{
			menuName: 'Task',
			routerLink: '',
			active: false,
			subList: [],
		},
		{
			menuName: 'Chat',
			routerLink: '',
			active: false,
			subList: [],
		},
		{
			menuName: 'Payroll',
			routerLink: '',
			active: false,
			subList: [],
		},
	];

	sublist = [
		{
			icon: 'sublist1.svg',
			title: 'Exc. Attendance',
			description: 'Report your special absence to get an exception',
		},
		{
			icon: 'sublist2.png',
			title: 'Leave',
			description:
				'Submit your leave request here. Don’t forget to pay attention to the quota',
		},
		{
			icon: 'sublist3.svg',
			title: 'Overtime Requisition',
			description:
				'Submit your overtime request here. Use your overtime efficiently',
		},
		{
			icon: 'sublist4.svg',
			title: 'Overtime',
			description:
				'Report your overtime here. So that your working time is not in vain',
		},
		{
			icon: 'sublist5.svg',
			title: 'Claim',
			description:
				'Submit your reimbursement here. Complete the submission file',
		},
		{
			icon: 'sublist6.svg',
			title: 'Business Trip',
			description:
				'Submit your business trip here. Complete the submission file',
		},
		{
			icon: 'sublist7.svg',
			title: 'Cash Advance',
			description:
				'Submit your multilevel reimbursement here. Complete the submission file',
		},
		{
			icon: 'sublist8.svg',
			title: 'Approval',
			description: 'Do all the approval process for your team here',
		},
	];

	constructor(private router: Router) {}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		setTimeout(() => {
			this.innerWidth = window.innerWidth;
			$('.header-nav').removeClass('header-nav-shadow');
			if (this.innerWidth < 850) {
				this.navShow = false;
				this.responsive = true;
			} else {
				this.responsive = false;
			}
		}, 50);
	}

	ngOnInit(): void {
		this.onResize(0);
		this.listMenu[this.indexActive]['active'] = true;

		var index = localStorage.getItem('navIndex');
		index ? this.setMenu(index) : this.setMenu(0);
	}

	setMenu(i: any) {
		this.profileNav = false;

		this.listMenu[this.indexActive]['active'] = false;
		this.listMenu[i]['active'] = true;

		localStorage.setItem('navIndex', i);

		if (i == 2) {
			this.sublistActive = !this.sublistActive;
		} else {
			this.sublistActive = false;
		}

		if (i == this.indexActive && !this.navShow) {
			this.navShow = true;
			$('.header-nav').addClass('header-nav-shadow');
		} else {
			this.navShow = false;
			$('.header-nav').removeClass('header-nav-shadow');
		}

		this.indexActive = i;
		if (this.listMenu[this.indexActive]['routerLink']) {
			console.log(this.listMenu[this.indexActive]['routerLink']);
			this.router.navigate([
				'app/' + this.listMenu[this.indexActive]['routerLink'],
			]);
		}
	}

	logout() {
		localStorage.clear();
		this.router.navigate(['/']);
		setTimeout(() => {
			window.location.reload();
		}, 200);
	}
}
