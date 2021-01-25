import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import{ map} from 'rxjs/operators';
@Injectable({
  providedIn:'root'
})

export class TemplateServices implements OnInit{

constructor(private http: HttpClient){

}

ngOnInit(){

}

getTemplate(){
 return  this.http.get("../assets/templates.json")
 .pipe(
   map(resdata => {
   return resdata;
   })
 )
}




}
