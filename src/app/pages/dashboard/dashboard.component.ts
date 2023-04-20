import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	inputOutlineStyle = {
		'max-width': '160px',
	};

	inputTextStyle = {
		width: '100%',
		'padding-left': '10px',
		'padding-top': '5px',
		'padding-bottom': '5px',
	};

	innerWidth = 0;

	summaryDetail = [
		{
			fieldName: 'Working Day(s)',
			value: '2 Hari',
		},
		{
			fieldName: 'Working Hour(s)',
			value: '13 hr 14 min',
		},
		{
			fieldName: 'Exceptional Attendance',
			value: '0 Hari',
		},
		{
			fieldName: 'Leave Taken',
			value: '0 Hari',
		},
		{
			fieldName: 'Overtime',
			value: '00 hr 00 min',
		},
		{
			fieldName: 'Claim',
			value: 'IDR 0',
		},
	];

	taskList = [
		{
			nameField: 'UI/UX Designer',
			descField: '[Wms][Web][Task] Create goal design',
		},
		{
			nameField: 'UI/UX Designer',
			descField: '[Wms][Chat] Improve Design',
		},
		{
			nameField: 'UI/UX Designer',
			descField: '[Wms][Task] Improve Dashboard',
		},
	];

	profileDetail = [
		{
			fieldName: 'Employee ID',
			value: 'PT - GOO34',
		},
		{
			fieldName: 'Position',
			value: 'Senior Front-End Developer',
		},
		{
			fieldName: 'Join Date',
			value: '23 Feb 2018',
		},
		{
			fieldName: 'Year of Service',
			value: '4 Years 5 Months 2 Days',
		},
	];

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.innerWidth = window.innerWidth;
		if (this.innerWidth <= 580) {
			this.inputOutlineStyle['max-width'] = '90px';
		} else {
			this.inputOutlineStyle['max-width'] = '160px';
		}

		setTimeout(() => {
			if (this.innerWidth <= 850) {
				$('.items').removeClass('col-4');
				$('.items').addClass('col-6');
			} else {
				$('.items').removeClass('col-6');
				$('.items').addClass('col-4');
			}

			if (this.innerWidth < 992) {
				$('#section1').prepend($('#profile'));
				$('#section1').append($('#attendance'));
				$('#section2').append($('#taskDueSoon'));
			} else {
				$('#section2').prepend($('#profile'));
				$('#section2').append($('#attendance'));
				$('#section1').append($('#taskDueSoon'));
			}
		}, 100);
	}

	ngOnInit(): void {
		this.onResize(0);
	}
}
