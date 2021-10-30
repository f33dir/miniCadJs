import { Component, OnInit } from '@angular/core';
import { RodEntity } from 'src/app/Models/rodentity';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private construction: ConstructionmanagerService ) { }
  segments!: RodEntity[];
  ngOnInit(): void {
    this.construction.getSegments().subscribe((segments)=>{
      this.segments = segments.segments; 
    })
  }
  entityListMoved(event:Event){

  }
}
