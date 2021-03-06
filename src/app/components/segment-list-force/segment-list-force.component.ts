import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { faArrowAltCircleDown,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Force } from 'src/app/Models/force';
import { RodEntity } from 'src/app/Models/rodentity';
@Component({
  selector: 'app-segment-list-force',
  templateUrl: './segment-list-force.component.html',
  styleUrls: ['./segment-list-force.component.css']
})
export class SegmentListForceComponent implements OnInit {
  @Output()
  deleteEvent = new EventEmitter<number>()
  public isCollapsed = true;
  model!: Force;
  faArrowDown = faArrowAltCircleDown;
  faTrash = faTrash;
  formGroup: FormGroup= this.fb.group({
    id:[''],
    type:[''],
    force:['']
  })
  @Input()
  modelInput!: RodEntity;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.model = this.modelInput as Force;
    this.bindModelToForm(this.model,this.formGroup)
    this.faArrowDown = faArrowAltCircleDown;
  }
  bindModelToForm(model: any, form: FormGroup) {
    let obj= model as Force;
    const keys = Object.keys(form.controls);
    form.patchValue({
      id: obj.id,
      force: obj.force,
      type: obj.type
    })
    keys.forEach(key => {
        form.controls[key].valueChanges.subscribe(
            (newValue) => {
                model[key] = newValue;
                console.log(newValue)
            }
        )
    });
  }
  delete(){
    this.deleteEvent.emit(this.model.id);
  }
}
