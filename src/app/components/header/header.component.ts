import { Component, OnInit } from '@angular/core';
import { Menu } from 'electron';
import { ElectronService } from 'ngx-electron';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _electronService: ElectronService) {
  }
  knock(){
    console.log('knocked');
  }
  ngOnInit(): void {
    if(this._electronService.isElectronApp){
      this._electronService.
    }
    let event = new MouseEvent('click', {bubbles: false});
    // this.fileInput.nativeElement.dispatchEvent(event);
  }

  save(){

  }
  load(){

  }
}
