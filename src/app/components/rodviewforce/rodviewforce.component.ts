import { Component, Input, OnInit } from '@angular/core';
import { Force } from 'src/app/Models/force';
import { RodEntity } from 'src/app/Models/rodentity';

@Component({
  selector: 'app-rodviewforce',
  templateUrl: './rodviewforce.component.html',
  styleUrls: ['./rodviewforce.component.css']
})
export class RodviewforceComponent implements OnInit {
  @Input()
  modelInput!: RodEntity;
  model!:Force;
  constructor() { }
  ngOnInit(): void {
    this.model = this.modelInput as Force;
  }
  ngOnChanges():void{
    this.model = this.modelInput as Force;
  }

}
