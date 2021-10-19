import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';
import { RodEntity } from 'src/app/Models/rodentity';
@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {

  rod!: RodEntity[];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rod, event.previousIndex, event.currentIndex);
    console.log(this.rod);
  }
  constructor(private construction: ConstructionmanagerService) { }

  ngOnInit(): void {
    this.construction.getSegments().subscribe((segments)=>{
      this.rod = segments; 
    })
  }

}
