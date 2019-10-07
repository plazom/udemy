import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  openCarsPage() {
    //relativeTo: this.route используется при относительной навигации. в this.route содержится нынешнее положение где находится наг роутер
    this.router.navigate(['cars'], {relativeTo: this.route});
  }

}
