import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  idFocus: Number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
  }

  btnClick(id: Number) {
    switch(id)
    {
      case 1:
        this.router.navigate(['itemlookup']);
        break;
    }
  }

  hasFocus(id: Number) {
    return id == this.idFocus;
  }

  setFocusId(id: Number) {
    this.idFocus = id;
    //console.log(this.idFocus);
  }

  resetFocusId(id: Number) {
    if (this.idFocus == id) {
      this.idFocus = 0;
      //console.log(this.idFocus);
    }
  }

  getBtnClass(id: Number) {
    if (this.hasFocus(id))
      return 'btn btn-lg btn-block btn-success';
    else
      return 'btn btn-lg btn-block btn-primary';
  }

  keyDown(event: any) {
    let element = event.srcElement.nextElementSibling;
    if(element == null)
        return;
    else
        element.focus();
  }

  keyUp(event: any) {
    let element = event.srcElement.previousElementSibling;
    if(element == null)
        return;
    else
        element.focus();
  }
}
