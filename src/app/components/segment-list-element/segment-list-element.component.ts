import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { RodEntity } from 'src/app/Models/rodentity';
import { RodSegment } from 'src/app/Models/rodsegment';
import { faArrowAltCircleDown,faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
selector: 'app-segment-list-element',
  templateUrl: './segment-list-element.component.html',
  styleUrls: ['./segment-list-element.component.css']
})
export class SegmentListElementComponent implements OnInit {
  @Output()
  deleteEvent = new EventEmitter<number>()
  faArrowDown = faArrowAltCircleDown;
  faCross = faTrash;
  @Input()
  modelInput! :RodEntity;
  public isCollapsed = true;
  model!:RodSegment
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.formGroup= this.fb.group({
      id:[Validators.required, this.notAllowed(/^0/)],
      type:[],
      A:[Validators.required, this.notAllowed(/^0/)],
      S:[Validators.required, this.notAllowed(/^0/)],
      force:[]  
    });
  } 
  notAllowed(input: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = input.test(control.value);
      return forbidden ? {notAllowed: {value: control.value}} : null;
    };
  }
  ngOnInit(): void {
    this.model = this.modelInput as RodSegment;
    this.bindModelToForm(this.model,this.formGroup)
    // this.faArrowDown = faArrowAltCircleDown;
  }
  bindModelToForm(model: any, form: FormGroup) {
    let obj= model as RodSegment;
    const keys = Object.keys(form.controls);
    form.patchValue({
      id: obj.id,
      A: obj.A,
      S: obj.S,
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
    this.deleteEvent.emit(this.model.id)
}
}
