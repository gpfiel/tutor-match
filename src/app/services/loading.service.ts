import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

	backdrop: boolean = false;
  constructor() { }

  showBackdrop() {
  	this.backdrop = true;
    return this
  }

  hideBackdrop() {
  	let timeoutId = setTimeout(() => {  
      this.backdrop = false;
    }, 1600);
    return this
  }
}
