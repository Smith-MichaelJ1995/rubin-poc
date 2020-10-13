import { Component, NgModule, OnInit, Input } from '@angular/core';

// Importing Custom Models
import {QuestionGroup} from '../../models/QuestionGroup';

@Component({
  selector: 'app-build-content',
  templateUrl: './build-content.component.html',
  styleUrls: ['./build-content.component.scss']
})


export class BuildContentComponent implements OnInit {

  @Input('question')
  question: QuestionGroup;
  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.question)
  }

}
