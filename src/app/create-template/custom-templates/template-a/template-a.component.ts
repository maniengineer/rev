import { Component, OnInit, ViewChild, ElementRef, asNativeElements, AfterViewInit, OnChanges, Sanitizer, SecurityContext } from '@angular/core';
import { TemplateServices } from 'src/services/templates.service';
import { HtmlParser } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';
import { TemplateView } from './template-view';

@Component({
  selector: 'rv-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('templateRefhtml', {static: false}) templateRefhtml: ElementRef;
  public templateHtml: any;
  constructor(private ts: TemplateServices, private sanitizer: Sanitizer,  private domsanitizer: DomSanitizer, private elementRef: ElementRef) { }


  ngOnChanges() {
      this.dataSetup();
  }
  ngOnInit() {

    // this.ts.getTemplate().subscribe(data=>{
    //     data.map(template => {

    //       if(template.templatedata.item_id === 'template_1') {
    //         setTimeout(() => {


    //           this.templateHtml  = '<div class=\"ad_box\"><img class=\"banner\" src=\"../assets/images/close.png\" alt=\"\" \//> <h3 >Items <\/h3> <br \/> <ul id=\"items\" \/><\/div>'

    //         }, 1000);

    //       }

    //     })

    // });
  }


  dataSetup(){
    const outerDiv = this.elementRef.nativeElement.querySelector('div[data-container]');
    outerDiv.innerHtml =  '<p>knskknks</p>';
  }


  ngAfterViewInit(){
   //this.templateRefhtml.nativeElement.innerHtml =  '<p>knskknks</p>';
  }

}
