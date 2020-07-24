import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Color } from 'src/shared/color-enums';
import { CritterService } from '../critter.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-fishes',
  templateUrl: './view-fishes.component.html',
  styleUrls: ['./view-fishes.component.scss'],
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
export class ViewFishesComponent implements OnInit {
  fishes: any[];
  columns: string[] = ['id', 'icon', 'name', 'location', 'price'];
  dataSource: MatTableDataSource<any>;
  expandedElement: any | null;
  Color = Color;
  seasonality = new FormControl('northernSeasonality');
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private critterService: CritterService) {}

  ngOnInit() {
    this.critterService.getFishes().subscribe((fishes) => {
      this.fishes = fishes;
      this.dataSource = new MatTableDataSource(this.fishes);
      this.dataSource.paginator = this.paginator;
    });
  }

  // Take in 2 times and convert to proper format
  // formatTimeRange(beginTime: string, endTime: string): string {
  //   if (beginTime === endTime) {
  //     return 'All Day';
  //   }

  //   const format = 'hh:mma';
  //   const formattedBeginTime = this.formatTime(beginTime, format);
  //   const formattedEndTime = this.formatTime(endTime, format);

  //   return `${formattedBeginTime} - ${formattedEndTime}`;
  // }

  // formatTime(time: string, format: string): string {
  //   const formattedTime = convertTime(time, format);
  //   const cleanedTime = this.removeLeadingZeroes(formattedTime);
  //   return cleanedTime;
  // }

  // removeLeadingZeroes(time: string): string {
  //   return time.charAt(0) === '0' ? time.slice(1) : time;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
