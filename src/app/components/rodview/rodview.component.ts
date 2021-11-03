import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Rod } from 'src/app/Models/rod';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';

@Component({
  selector: 'app-rodview',
  templateUrl: './rodview.component.html',
  styleUrls: ['./rodview.component.css']
})
export class RodviewComponent implements OnInit {
  @Input()
  rod!:Rod
  constructor(private construction: ConstructionmanagerService) { }
  ngOnInit(): void {
  }
}
