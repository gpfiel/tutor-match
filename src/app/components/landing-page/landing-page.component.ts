import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorService } from '../../services/tutor.service';
import { map, filter } from 'rxjs/operators';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
  	trigger('listStagger', [
  		transition('* <=> *', [
  			query(':enter', 
  			[
  				style({opacity: 0, transform: 'translateY(-15px)'}),
  				stagger('50ms',
  				animate('550ms',
  				style({opacity: 1, transform: 'translateY(0px)'})))
  			], { optional: true }),
  			query(':leave', 
  			[
  				animate('50ms',
  				style({opacity: 0}))
  			], { optional: true })
  		])
  	])
  ]
})

export class LandingPageComponent implements OnInit {

	backdrop: boolean = true;
	title: string = 'Welcome to Tutor Match';
	tutors$: any;

  sortedCollection: any;
  order: string = 'name';
  reverse: boolean = false;

  constructor(private tutorService:TutorService, private orderPipe: OrderPipe) {}

  ngOnInit() {
  	this.tutorService.getTutors().subscribe((tutors) => {
      this.tutors$ = tutors;

      this.tutors$.forEach(tutor => {
	      this.tutorService.setTutorFakeData(tutor)
	    });

      this.sortedCollection = this.orderPipe.transform(this.tutors$, 'name');

      let timeoutId = setTimeout(() => {  
        this.backdrop = false;
      }, 1600);
      
    });
  }

  setOrder(value: string) {
    console.log(value)
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
