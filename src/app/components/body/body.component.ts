import { Component, OnInit } from '@angular/core';
import { Rod } from 'src/app/Models/rod';
import { RodEntity } from 'src/app/Models/rodentity';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private construction: ConstructionmanagerService ) { }
  Rod!: Rod;
  ngOnInit(): void {
    this.construction.getSegments().subscribe((rod)=>{
      this.Rod  = rod; 
    })
  }
}
