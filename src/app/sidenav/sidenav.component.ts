import { Component, OnInit } from '@angular/core';
import { Color } from 'src/shared/color-enums';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  Color = Color;

  constructor() {}

  ngOnInit() {}
}
