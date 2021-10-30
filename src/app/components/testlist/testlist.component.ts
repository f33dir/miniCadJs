import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';
import { RodEntity } from 'src/app/Models/rodentity';
import { Rod } from 'src/app/Models/rod';
import { of } from 'rxjs';
@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {

  rod!: Rod;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rod.segments, event.previousIndex, event.currentIndex);
    console.log("Hello");
  }
  constructor(private construction: ConstructionmanagerService) { }

  ngOnInit(): void {
    this.construction.getSegments().subscribe((segments)=>{
      this.rod = segments; 
      console.log(this.rod)
    })
    const  g = of(this.rod);
    g.subscribe((res)=>{console.log(res)})
  }
  printObject(event?: MouseEvent):void{
    this.construction.logRod();
  }
}
