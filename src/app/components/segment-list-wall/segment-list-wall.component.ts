import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';

@Component({
  selector: 'app-segment-list-wall',
  templateUrl: './segment-list-wall.component.html',
  styleUrls: ['./segment-list-wall.component.css']
})
export class SegmentListWallComponent implements OnInit {
  checkBox!:FormControl;
  @Input() status!:boolean;
  ngOnInit(): void {
  }

}
