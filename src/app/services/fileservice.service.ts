import { Injectable } from '@angular/core';
import { Dialog, IpcMain, IpcRenderer, WebFrame } from 'electron';
import { ConstructionmanagerService } from './constructionmanager.service';
@Injectable({
  providedIn: 'root'
})
export class FileserviceService {
  isElectron():boolean{
    return !!(window  && window.process && window.process.type)
  }
  ipcRenderer!:IpcRenderer;
  webFrame!:WebFrame;
  dialog!:Dialog;
  ipcMain!:IpcMain;
  constructor() {
  }
  public getFile(){
    this.ipcRenderer.send("openproject","hi");
  }
  public saveProject(json: string){
    this.ipcRenderer.send("saveproject",json); 
  }
}
