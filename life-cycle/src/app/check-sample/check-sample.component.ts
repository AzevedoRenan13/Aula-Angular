import {
	Component,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
 } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked
{

  constructor() { }
	ngAfterViewChecked(): void {
		console.log("ngDoCheck")
	}
	ngAfterViewInit(): void {
		console.log("ngAfterViewChecked")
	}
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked")
	}
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
	}
	ngDoCheck(): void {
		console.log("ngDoCheck")
	}

  ngOnInit(): void {
  }

}
