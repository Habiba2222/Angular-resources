import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Directionality  } from '@angular/cdk/bidi';
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],
  
})
export class ResourceComponent {
 
  isRTL: boolean;
  selectedValue: string = 'month';
  values:string[]=['month','year'];
  resourcetime:number=1;
  selectedTime:string='';
  reservation:string='';
  // On-Click Method on dropdown control
  
 
  constructor(private translate: TranslateService, private readonly dir: Directionality) { 
    // this.translate.setDefaultLang('ar');
 
    this.isRTL = dir.value === 'rtl';
  }
  changeLanguage(lang: string) {
    this.translate.use(lang); // Change the language dynamically
  }
  
  validateNo(e:any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
}
selectValue(value: string) {
  this.selectedValue = value;

}
decrease()
{
  if(this.resourcetime>0)
  this.resourcetime--;
}
increase(){this.resourcetime++;}
onRadioChange(event:string){
  this.selectedTime = event;
  console.log(this.selectedTime)
}
onReservationchange(event:string)
{
  this.reservation=event;
}
}