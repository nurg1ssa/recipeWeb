import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit{
    @Input() message: string = 'Initial Error';

    constructor(){
      console.log(this.message)
    }


    ngOnInit() {
        console.log(this.message)
    }
    

}
