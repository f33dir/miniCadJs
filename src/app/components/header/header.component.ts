import { Component, OnInit } from '@angular/core';
import { BrowserWindow, Menu } from 'electron';
import { ElectronService } from 'ngx-electron';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';
import { FileserviceService } from 'src/app/services/fileservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private construction:ConstructionmanagerService, private fs:FileserviceService) {
  }
  knock(){
    // console.log('knocked');
    // this.fs.dialog.showOpenDialog({properties:['openFile']})
  }
  ngOnInit(): void {
    this.knock();
  }

  save(){
    this.construction.saveProject();
    console.log("header")
  }
  load(){
    this.fs.getFile();
  }
}
