import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	ngOnInit(): void {
		$('body').css('background-color', '#F9F9F9');
	}
}
