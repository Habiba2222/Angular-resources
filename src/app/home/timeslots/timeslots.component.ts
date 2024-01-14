import { Component } from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';


enum TimeType {
  StartsAt,
  EndsAt
}
type TimePickerStatus = {
  startsAt: { open: boolean };
  endsAt: { open: boolean };
};
@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.css']
})
export class TimeslotsComponent {
  public TimeType = TimeType;
  
  days:string[]=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
  timeslot:number=0;
  resources: string[] = []; // Placeholder array for storing added resources
  newResource: string = ''; // Placeholder variable for the new resource input
  startsAtTimes: string[] = ['', '', '', '', '', '', ''];
  endsAtTimes: string[] = ['', '', '', '', '', '', ''];
  isTimePickerOpen: TimePickerStatus[] = Array(7).fill({ startsAt: { open: false }, endsAt: { open: false } });
  hours: string[] = Array.from({ length: 24 }, (_, i) => (i < 10 ? '0' + i : '' + i));
  minutes: string[] = Array.from({ length: 60 }, (_, i) => (i < 10 ? '0' + i : '' + i));
isRadioChecked:boolean[]=Array(7).fill(false);
selectedValue: string='';
numberofitems:number[]=Array(7).fill(1);
selectedButton: string='button2';

  constructor(private cdr: ChangeDetectorRef) { }
 
  openTimePicker(index: number, type: TimeType): void {
    if (type === TimeType.StartsAt) {
      this.isTimePickerOpen[index].startsAt.open = true;
    } else if (type === TimeType.EndsAt) {
      this.isTimePickerOpen[index].endsAt.open = true;
    }
    this.cdr.detectChanges();
  }


  
  
  getTimeNow(index: number, type: TimeType): void {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
  
    if (type === TimeType.StartsAt) {
      this.startsAtTimes[index] = hour + ':' + minute;
    } else if (type === TimeType.EndsAt) {
      this.endsAtTimes[index] = hour + ':' + minute;
    }
  }

saveTime(index: number, type: TimeType): void {
  if (type === TimeType.StartsAt) {
    this.isTimePickerOpen[index].startsAt.open = false;
  } else if (type === TimeType.EndsAt) {
    this.isTimePickerOpen[index].endsAt.open = false;
  }
  this.cdr.detectChanges();
}


  onRadioChange(index:number,day:string)
  {
    this.isRadioChecked [index]= !this.isRadioChecked[index];
    console.log(day,this.selectedValue)
  }
  Additems(index:number)
  {
    this.numberofitems[index]++;
  }
  createArray(length: number): any[] {
    return Array(length);
  }
  copy(): void {
    const startTimeElement = document.getElementById('start-time') as HTMLInputElement;
  const endTimeElement = document.getElementById('end-time') as HTMLInputElement;

  if (startTimeElement && endTimeElement) {
    const startTime = startTimeElement.value;
    const endTime = endTimeElement.value;

    const timeRange = startTime + ' - ' + endTime;

    navigator.clipboard.writeText(timeRange)
      .then(() => {
        console.log('Time range copied to clipboard:', timeRange);
      })
      .catch((error) => {
        console.error('Copying to clipboard failed:', error);
      });
  }
  }
}