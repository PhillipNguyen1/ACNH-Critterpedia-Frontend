import { Component, OnInit } from '@angular/core';
import convertTime from 'convert-time';
import { Observable } from 'rxjs';
import { Critter } from 'src/models/Critter';
import { Color } from 'src/shared/color-enums';
import { CritterService } from '../critter.service';

@Component({
  selector: 'app-view-critter',
  templateUrl: './view-critter.component.html',
  styleUrls: ['./view-critter.component.scss'],
})
export class ViewCritterComponent implements OnInit {
  critter$: Observable<Critter[]>;
  columns: string[] = ['name', 'location', 'time'];
  Color = Color;

  constructor(private critterService: CritterService) {}

  ngOnInit() {
    this.critter$ = this.critterService.getFishes();
  }

  // Take in 2 times and convert to proper format
  formatTime(beginTime: string, endTime: string): string {
    if (beginTime === endTime) {
      return 'All Day';
    }

    const formattedBeginTime = convertTime(beginTime);
    const formattedEndTime = convertTime(endTime);

    return `${formattedBeginTime} - ${formattedEndTime}`;
  }
}
