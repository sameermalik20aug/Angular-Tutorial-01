import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: String = "No Server was created";
  serverCount: number = 3;
  serverName:string = 'TestServer';
  servers:string[]=['testServer1','testServer2','testServer3']; 

  constructor() { 
    setTimeout(()=>{
      //I have a doubt regarding arrow functions and this keyword.
      this.allowNewServer = true;
    },5000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCount +=1;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server number: "+this.serverCount+" Name: "+this.serverName+ " was Created";
    if(this.serverCount==20){
      this.serverCreationStatus = "Can't add more servers"
    }
  }
  onDeleteServer = ()=>{
    this.serverCount -=1;
    this.servers.pop();
    this.serverCreationStatus = "Server Deleted"
    if(this.serverCount==0){
      this.serverCreationStatus = "No server to delete"
    }
  }

//In TS we get those passed params of type Event
//So here we get the event(Here which is input event) then select the target(Here which is the input element) and then selects its value
//TS does not know the type of the element so we use explicit casting to tell TS that the type of the Html element is htmlInputElement.

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
