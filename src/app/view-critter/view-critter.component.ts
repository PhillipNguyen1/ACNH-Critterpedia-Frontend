import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import convertTime from 'convert-time';
import { Critter } from 'src/models/Critter';
import { Color } from 'src/shared/color-enums';
import { CritterService } from '../critter.service';
import { SEASONS } from 'src/shared/seasons';

@Component({
  selector: 'app-view-critter',
  templateUrl: './view-critter.component.html',
  styleUrls: ['./view-critter.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ViewCritterComponent implements OnInit {
  critters: Critter[];
  columns: string[] = ['name', 'location', 'time'];
  dataSource;
  expandedElement: Critter | null;
  Color = Color;

  seasonRowOne = SEASONS.slice(0, 4);
  seasonRowTwo = SEASONS.slice(4, 8);
  seasonRowThree = SEASONS.slice(8, 12);

  seasonality = new FormControl('northernSeasonality');

  constructor(private critterService: CritterService) {}

  ngOnInit() {
    this.critterService.getFishes().subscribe((critters: Critter[]) => {
      this.critters = critters;
      this.dataSource = new MatTableDataSource(this.critters);
    });
  }

  // Take in 2 times and convert to proper format
  formatTimeRange(beginTime: string, endTime: string): string {
    if (beginTime === endTime) {
      return 'All Day';
    }

    const format = 'hh:mma';
    const formattedBeginTime = this.formatTime(beginTime, format);
    const formattedEndTime = this.formatTime(endTime, format);

    return `${formattedBeginTime} - ${formattedEndTime}`;
  }

  formatTime(time: string, format: string): string {
    const formattedTime = convertTime(time, format);
    const cleanedTime = this.removeLeadingZeroes(formattedTime);
    return cleanedTime;
  }

  removeLeadingZeroes(time: string): string {
    return time.charAt(0) === '0' ? time.slice(1) : time;
  }

  applyFilter(event: Event) {
    console.log(event);

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
