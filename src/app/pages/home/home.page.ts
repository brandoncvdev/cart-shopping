import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public boxes = [1, 2, 3, 4, 5, 6];

  constructor() {}

  ngOnInit() {}
}
