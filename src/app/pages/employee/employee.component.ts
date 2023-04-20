import { Component, HostListener, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
	inputOutlineStyle = {
		'max-width': '130px',
	};

	inputTextStyle = {
		width: '100%',
		'padding-left': '10px',
		'padding-top': '5px',
		'padding-bottom': '5px',
	};

	verticalBarData = [
		{
			fieldName: 'Total Working Days',
			value: '237',
			color: 'blue',
		},
		{
			fieldName: 'Actual Working Hours',
			value: '2126 hr 14 min',
			color: 'blue',
		},
		{
			fieldName: 'Total Working Hours',
			value: '2930 hr 26 min',
			color: 'lightblue',
		},
		{
			fieldName: 'Total Late Coming',
			value: '0',
			color: 'red',
		},
	];

	dataTable = [
		{
			leaveCode: 'LV-PTES-PT-CV10435-01-23-001',
		},
	];

	innerWidth = 0;
	vbData: any;
	vbOptions: any;
	pieData: any;
	pieData2: any;
	pieOptions: any;

	lineData: any;
	lineOptions: any;

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.innerWidth = window.innerWidth;
	}

	constructor() {}

	ngOnInit(): void {
		this.configVerticalBar();
		this.configPieChart();
		this.configPieChart2();
		this.configChartLine();
	}

	customSort(event: SortEvent | any) {
		event.data.sort((data1: any, data2: any) => {
			let value1 = data1[event.field];
			let value2 = data2[event.field];
			let result = null;

			if (value1 == null && value2 != null) result = -1;
			else if (value1 != null && value2 == null) result = 1;
			else if (value1 == null && value2 == null) result = 0;
			else if (typeof value1 === 'string' && typeof value2 === 'string')
				result = value1.localeCompare(value2);
			else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

			return event.order * result;
		});
	}

	configVerticalBar() {
		this.innerWidth = window.innerWidth;
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue(
			'--text-color-secondary'
		);
		const surfaceBorder =
			documentStyle.getPropertyValue('--surface-border');

		this.vbData = {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor:
						documentStyle.getPropertyValue('--blue-500'),
					borderColor: documentStyle.getPropertyValue('--blue-500'),
					data: [25, 20, 26, 23, 24, 20, 7, 23, 24, 20, 26, 20],
				},
				{
					label: 'My Second dataset',
					backgroundColor:
						documentStyle.getPropertyValue('--pink-500'),
					borderColor: documentStyle.getPropertyValue('--pink-500'),
					data: [1, 4, 1, 2, 1, 1, 7, 2, 1, 3, 1, 1],
				},
			],
		};

		this.vbOptions = {
			maintainAspectRatio: false,
			aspectRatio: 0.8,
			plugins: {
				legend: {
					labels: {
						color: textColor,
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary,
						font: {
							weight: 500,
						},
					},
					grid: {
						color: surfaceBorder,
						drawBorder: false,
					},
				},
				y: {
					ticks: {
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
						drawBorder: false,
					},
				},
			},
		};
	}

	configPieChart() {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');

		this.pieData = {
			labels: ['Complete', 'Not Complete'],
			datasets: [
				{
					data: [1, 1],
					backgroundColor: [
						documentStyle.getPropertyValue('--red-500'),
						documentStyle.getPropertyValue('--blue-500'),
					],
					hoverBackgroundColor: [
						documentStyle.getPropertyValue('--red-500'),
						documentStyle.getPropertyValue('--blue-500'),
					],
				},
			],
		};

		this.pieOptions = {
			plugins: {
				legend: {
					labels: {
						usePointStyle: true,
						color: textColor,
					},
				},
			},
		};
	}

	configPieChart2() {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');

		this.pieData2 = {
			labels: ['Complete', 'Overdue', 'Unsceduled'],
			datasets: [
				{
					data: [1, 1, 2],
					backgroundColor: ['#D4DFE7', '#FF9800', '#0796E5'],
					hoverBackgroundColor: ['#D4DFE7', '#FF9800', '#0796E5'],
				},
			],
		};

		this.pieOptions = {
			plugins: {
				legend: {
					labels: {
						usePointStyle: true,
						color: textColor,
					},
				},
			},
		};
	}

	configChartLine() {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue(
			'--text-color-secondary'
		);
		const surfaceBorder =
			documentStyle.getPropertyValue('--surface-border');

		this.lineData = {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			datasets: [
				{
					label: 'Complete',
					data: [
						50, 125, 80, 120, 175, 75, 50, 100, 140, 85, 175, 140,
					],
					fill: true,
					borderColor: '#0796E5',
					tension: 0.5,
					backgroundColor: 'rgba(7, 150, 229, 0.2)',
				},
				{
					label: 'Incomplete',
					data: [
						25, 50, 100, 75, 125, 100, 150, 75, 100, 140, 50, 100,
					],
					fill: true,
					borderColor: documentStyle.getPropertyValue('--orange-500'),
					tension: 0.4,
					backgroundColor: 'rgba(255,167,38,0.2)',
				},
			],
		};

		this.lineOptions = {
			maintainAspectRatio: false,
			aspectRatio: 0.6,
			plugins: {
				legend: {
					labels: {
						color: textColor,
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
					},
				},
				y: {
					ticks: {
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
					},
				},
			},
		};
	}
}
