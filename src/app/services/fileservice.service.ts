import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
@Injectable({
  providedIn: 'root'
})
export class FileserviceService {
  
  constructor(private electron:ElectronService) {
    debugger;
    this.electron
   }
}
