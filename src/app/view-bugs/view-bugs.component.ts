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
import convertTime from 'convert-time';
import { Color } from 'src/shared/color-enums';
import { CritterService } from '../critter.service';
import { SEASONS } from 'src/shared/seasons';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-bugs',
  templateUrl: './view-bugs.component.html',
  styleUrls: ['./view-bugs.component.scss'],
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
export class ViewBugsComponent implements OnInit {
  bugs: any[];
  columns: string[] = ['id', 'icon', 'name', 'location', 'price'];
  dataSource;
  expandedElement: any | null;
  Color = Color;
  seasonality = new FormControl('northernSeasonality');
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private critterService: CritterService) {}

  ngOnInit() {
    this.critterService.getBugs().subscribe((bugs) => {
      this.bugs = bugs;
      this.dataSource = new MatTableDataSource(this.bugs);
      this.dataSource.paginator = this.paginator;
    });
  }
}
