import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent {
  @Input() title: string;

  constructor(private location: Location) {}

  public backLocation(): void {
    this.location.back();
  }
}
