import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  messages = [{
  	"text":"Hi how are you?",
  	"self":false
  },{
  	"text":"I am fine",
  	"self":true
  }]
  replyMessage = "";

  constructor() { }

  ngOnInit() {
  }

  reply(){
  	this.messages.push({
  		"text":this.replyMessage,
  		"self":true
  	});
  	
  	this.replyMessage = "";
  }

}
