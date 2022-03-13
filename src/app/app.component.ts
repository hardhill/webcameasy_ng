import { Component, OnInit } from '@angular/core';
import { WebCam } from './lib/webcameasy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  webcamWorking:Boolean | undefined
  myVar1 = false
  webcam:WebCam | undefined
  webcamElement:HTMLVideoElement | null = null
  constructor(){
    
  }
  
  ngOnInit(): void {
    this.webcamWorking = false
    this.webcamElement = <HTMLVideoElement>document.getElementById("webcam")
    console.log(this.webcamElement)
    this.webcam = new WebCam(this.webcamElement)
  }
  
  changeSw(){
    this.webcamWorking = false
    console.log(this.webcamWorking)
  }

  startCamera(event:any){
    const value =  event.target.checked
    if(value){
      this.webcam?.start()
    }else{
      this.webcam?.stop()
    }
  }
}
