import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';

@Component({
  selector: 'app-segment-list-wall',
  templateUrl: './segment-list-wall.component.html',
  styleUrls: ['./segment-list-wall.component.css']
})
export class SegmentListWallComponent implements OnInit {
  @Output()
  changeWall = new EventEmitter();
  checkBox = new FormControl();
  @Input() 
  status!:boolean;
  ngOnInit(): void {
    this.checkBox.setValue(this.status);
    this.checkBox.valueChanges.subscribe((status)=>{
        this.changeWall.emit(status);
    })
  }
  onChange(){
    this.checkBox.setValue(this.status);
  }
} 
