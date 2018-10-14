import { Component, OnInit } from '@angular/core';
import { AnimateScrollService } from 'ng-animate-scroll';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private animateScrollService: AnimateScrollService) { }

  ngOnInit() {
  }

  navigate(e, duration?:number) {
    var splitted = e.split("#");
    this.animateScrollService.scrollToElement(splitted[1], duration)
  }

}
