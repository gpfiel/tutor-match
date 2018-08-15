import { Pipe, PipeTransform } from '@angular/core';
import { TutorService } from '../services/tutor.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
	constructor(private tutorService:TutorService) { }
  transform(items: any[], searchText: string): any[] {
    if(!items) {
    	this.tutorService.searchingFor = ''
    	return []
    }
    if(!searchText) {
    	this.tutorService.searchingFor = ''
    	return items;
    }
		searchText = searchText.toLowerCase();
		return items.filter( it => {
			if (it.name.toLowerCase().includes(searchText)) {
				this.tutorService.searchingFor = 'name'
				return it.name.toLowerCase().includes(searchText)	
			} else if (it.subject.toLowerCase().includes(searchText)) {
				this.tutorService.searchingFor = 'subject'
				return it.subject.toLowerCase().includes(searchText)	
			} else {
				return false
			}
    });
   }
}