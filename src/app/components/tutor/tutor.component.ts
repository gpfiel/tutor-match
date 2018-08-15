import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
  inputs: ['tutor']
})
export class TutorComponent implements OnInit {

  constructor(private tutorService:TutorService) { }

  ngOnInit() {
  }

}
