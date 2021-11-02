import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Rod } from 'src/app/Models/rod';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';

@Component({
  selector: 'app-rodview',
  templateUrl: './rodview.component.html',
  styleUrls: ['./rodview.component.css']
})
export class RodviewComponent implements OnInit {

  constructor(private construction: ConstructionmanagerService) { }
  rod!:Rod
  @ViewChild('canvas', { static: true }) 
  canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: ElementRef<HTMLCanvasElement>;
  ngOnInit(): void {
    this.construction.getSegments().subscribe((obj)=>{
      // debugger;
      this.rod = obj; 
      console.log(this.rod);
      this.canvas.nativeElement.getContext('2d')?.fillText(this.rod.segments.length.toString(),100,100);

    })
    // debugger;
  }

}
