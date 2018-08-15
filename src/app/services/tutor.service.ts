import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TutorService {

	apiUrl:string = 'https://jsonplaceholder.typicode.com/'
	subjects:Array<string> = ['Math', 'English', 'Science', 'Mechanic', 'Statistics', 'Phonic', 'Humanities', 'Design', 'Classics', 'Eletronics']
	searchingFor:string = ''

  constructor(private http:HttpClient) {}

  getTutors() {
    return this.http.get(this.apiUrl + 'users');
  }

  setTutorFakeData(tutor) {
  	tutor.subject = this.subjects[tutor.id - 1]
  	tutor.price = '£' + Math.floor((Math.random() * 100) + 1) + ' per hour';
  }
}
