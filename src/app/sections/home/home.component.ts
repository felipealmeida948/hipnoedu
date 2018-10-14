import { Component, OnInit } from '@angular/core';
import { AnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private animateScrollService: AnimateScrollService) { }

  ngOnInit() {
  }

  navigate(e, duration?:number) {
    var splitted = e.split("#");
    this.animateScrollService.scrollToElement(splitted[1], duration)
  }



}
