import { ApplicationRef, ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { Rod } from '../Models/rod';
import { RodEntity } from '../Models/rodentity';
import { RodSegment } from '../Models/rodsegment';
import { Observable , of } from 'rxjs';
import { Force } from '../Models/force';
import { time, timeStamp } from 'console';
import { FileserviceService } from './fileservice.service';

@Injectable({
  providedIn: 'root'
})
export class ConstructionmanagerService {
  public rod!:Rod;
  private segments!:Observable<Rod>; 
  constructor(private fs:FileserviceService , private zone:NgZone) {
    this.rod = new Rod();
    this.rod.tPointLeft=true;
    this.rod.tPointRight=true;
    if(this.fs.isElectron()){
      this.fs.ipcRenderer = window.require("electron").ipcRenderer;
      this.fs.webFrame = window.require("electron").webFrame;
      this.fs.dialog = window.require("electron").dialog;
      this.fs.ipcMain = window.require("electron").ipcMain;
      // this.ipcRenderer.send("openproject","hi");
      this.fs.ipcRenderer.on("openprojectreturn",(event, file)=>{
        console.log(file);
        this.loadProject(file);
      });
    }
  }
  logRod(){
    console.log(this.rod)
  }
  getSegments():Observable<Rod>{
    return of(this.rod); 
  }
  setSegments(input: Rod):void{
    this.rod = input;
  }
  addRodSegment(){
    let f = new RodSegment();
    f.S =1;
    f.A =1;
    f.id=this.rod.idCounter++;
    f.type = "rod";
    this.rod.segments.push(f);
  }
  addForce(){
    let i:number;
    let fcount = 0;
    var rcount = 0;
    for(i=0 ;i<this.rod.segments.length;i++){
      if (this.rod.segments[i].type == "rod"){
        rcount++;
      } else {
        fcount++;
      }
    }
    let flag = false;
    if( this.rod.tPointLeft && this.rod.tPointRight){
      if( rcount>fcount+1){
        flag=true;
      }
    } else {
      if(rcount>fcount){
        flag=true;
      }
    }
    i =1;
    while(i< this.rod.segments.length && (this.rod.segments[i].type!="rod" || this.rod.segments[i-1].type!="rod")){
      i++;
    }
    if(this.rod.segments.length == i && this.rod.tPointLeft == false && this.rod.tPointRight == true){
      i = 0;
    }
    if(flag==true){
      let f = new Force();
      f.id=this.rod.idCounter++;
      f.force =1;
      f.type = "force";
      this.rod.segments.splice(i,0,f);
    }
  }
  deleteElement(id:number){
    let i = 0;
    while(this.rod.segments[i].id!=id && i<this.rod.segments.length+1){
      i++;
    }
    if(i!=this.rod.segments.length+1){
      this.rod.segments.splice(i,1)
    }
    // this.appref.tick();
  }
  public loadProject(file:string){
    
    // this.fs.getFile();
    let foo =  JSON.parse(file) as Rod;
    this.rod.idCounter = foo.idCounter;
    this.rod.tPointLeft = foo.tPointLeft;
    this.rod.tPointRight = foo.tPointRight;
    this.rod.segments = [];
    console.log(foo);
    foo.segments.forEach((element: RodEntity) => {
      let index = this.rod.segments.length-1; 
      if(element.type == "rod"){
        let x = element as RodSegment;
        let seg:RodSegment = new RodSegment();
        console.log(seg);
        seg.A = x["A"];
        seg.S = x["S"];
        seg.force = x["force"];
        seg.id = x["id"];
        seg.type = "rod";
        this.rod.segments.push(seg);
      } else {
        // this.addForce();
        let x = element as Force;
        let force = new Force();
        force.id = x.id;
        force.force = x.force;
        this.rod.segments.push(force);
      }
    });
    this.zone.run(()=>{this.rod =this.rod})
  }
  public saveProject(){
    var json = JSON.stringify(this.rod);
    console.log(json);
    this.fs.saveProject(json);
  }
}