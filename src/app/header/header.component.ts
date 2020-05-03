import { Component, OnInit } from '@angular/core';
import { Color } from 'src/shared/color-enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  TITLE = 'Critterpedia';
  Color = Color;

  constructor() {}

  ngOnInit() {}
}
