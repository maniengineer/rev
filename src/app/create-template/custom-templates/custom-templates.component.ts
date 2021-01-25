import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateServices } from 'src/services/templates.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'rv-custom-templates',
  templateUrl: './custom-templates.component.html',
  styleUrls: ['./custom-templates.component.scss']
})
export class CustomTemplatesComponent implements OnInit {
  public template: any;

  public templateForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private ar: ActivatedRoute, private ts: TemplateServices) {

   }


    ngOnInit() {
      this.templateForm = this.formBuilder.group({
        addheader: ['', Validators.required],
        logo: ['', Validators.required],
        // password: ['', [Validators.required, Validators.minLength(6)]],
        // confirmPassword: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue]
    });

      this.ar.queryParams.subscribe(param =>{
        console.log(param);
        this.template = param;
      })
  }

  onSubmit(){
    console.log(this.templateForm);
  }


}
