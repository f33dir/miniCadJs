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
    let segs = this.rod;
    let pos = event.currentIndex ;
    if((pos ==  segs.segments.length-1) && segs.segments[event.previousIndex].type == "force" && this.rod.tPointRight ){
      return;
    }
    if((pos ==  0) && segs.segments[event.previousIndex].type == "force" && this.rod.tPointLeft ){
      return;
    }
    moveItemInArray(this.rod.segments, event.previousIndex, event.currentIndex);
    for(let i = 1;i<segs.segments.length;i++){
      if(segs.segments[i].type == segs.segments[i-1].type && segs.segments[i-1].type== "force"){
        moveItemInArray(this.rod.segments, event.currentIndex, event.previousIndex);
        
      }
    }
    this.construction.setSegments(segs);
    console.log("Hello");
  }
  constructor(private construction: ConstructionmanagerService) { }

  ngOnInit(): void {
    this.construction.getSegments().subscribe((segments)=>{
      this.rod = segments; 
      console.log(this.rod);
    })
  }
  addSegment(event?: MouseEvent):void{
    this.construction.addRodSegment();
    this.construction.logRod();
  }
  addForce(event?: MouseEvent):void{
    this.construction.addForce();
    this.construction.logRod();
  }
  putFields(){
    this.rod.segments.forEach(element => {
      
    });
  }
  deleteElement(id:number){
    this.construction.deleteElement(id);
  }
  changeWallLeft(status:boolean){
    if(this.rod.tPointRight!= status){
      console.log('l')
      if(!this.rod.tPointRight && !status){
        this.rod.tPointRight = true;
      }
      this.rod.tPointLeft = status;
      if(status ==  true){
        if(this.rod.segments[0].type == "force"){
          this.deleteElement(this.rod.segments[0].id)
        }
      }
    }
  }
  changeWallRight(status:boolean){
    if(this.rod.tPointRight!= status){
      console.log('r')
      if(!this.rod.tPointLeft && !status){
        this.rod.tPointLeft = true;
      }
      this.rod.tPointRight = status;
      if(status ==  true){
        if(this.rod.segments[this.rod.segments.length-1].type == "force"){
          this.deleteElement(this.rod.segments[this.rod.segments.length-1].id)
        }
      }
    }
  }
}
