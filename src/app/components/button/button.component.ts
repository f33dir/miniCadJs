import { Component, NgModule, OnInit, Input ,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  @Input()
  text!: string;
  @Input()
  color!: string;
  @Output() outputClick = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
    this.logIt(`OnInit`);
  }
  logIt(msg: string) {
      console.log(msg)
  }
  onClick(){
      console.log('1');
      this.outputClick.emit();
  }

}
