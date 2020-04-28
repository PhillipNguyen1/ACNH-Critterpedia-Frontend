import { Component, OnInit } from '@angular/core';
import { CritterService } from '../critter.service';
import { Critter } from 'src/models/Critter';

@Component({
  selector: 'app-view-critter',
  templateUrl: './view-critter.component.html',
  styleUrls: ['./view-critter.component.scss'],
})
export class ViewCritterComponent implements OnInit {
  critter: Critter;
  critterId = '5ea7c4d1752f814410d7183c'; // ID of Snapping Turtle

  constructor(private critterService: CritterService) {}

  ngOnInit() {
    this.critterService.getFishById(this.critterId).subscribe((critter) => {
      this.critter = critter;
      console.log(this.critter);
    });
  }
}
