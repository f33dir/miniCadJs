import { Component, Input, OnInit } from '@angular/core'; 
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RodEntity } from 'src/app/Models/rodentity';
import { RodSegment } from 'src/app/Models/rodsegment';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
selector: 'app-segment-list-element',
  templateUrl: './segment-list-element.component.html',
  styleUrls: ['./segment-list-element.component.css']
})
export class SegmentListElementComponent implements OnInit {
  faArrowDown = faArrowAltCircleDown;
  @Input()
  modelInput! :RodEntity;
  public isCollapsed = true;
  model!:RodSegment
  formGroup: FormGroup= this.fb.group({
      id:[''],
      type:[''],
      s:[''],
      l:[''],
      force:['']})
  constructor(private fb: FormBuilder) { 
    
  }
  
  ngOnInit(): void {
    this.model = this.modelInput as RodSegment;
    this.bindModelToForm(this.model,this.formGroup)
    this.faArrowDown = faArrowAltCircleDown;
  }
  bindModelToForm(model: any, form: FormGroup) {
    const keys = Object.keys(form.controls);
    keys.forEach(key => {
        form.controls[key].valueChanges.subscribe(
            (newValue) => {
                model[key] = newValue;
                console.log(newValue)
            }
        )
    });
}

}
