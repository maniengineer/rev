import { Component, OnInit } from '@angular/core';
import { TemplateServices } from 'src/services/templates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rv-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {
  public templateData: any;
  constructor(private ts: TemplateServices, private router: Router) { }

  ngOnInit() {
    this.ts.getTemplate().subscribe(data=>{
        this.templateData  = data;
    });
  }


  selectTemplate(template: any){
    console.log(template)
    this.router.navigate(['template'],  {queryParams:  template});
  }

}
