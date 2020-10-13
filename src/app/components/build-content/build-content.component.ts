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
  selectedPanelIndex = 0;

  setSelectedPanelIndex(index: number) {
    this.selectedPanelIndex = index;
  }

  nextPanelIndex() {
    this.selectedPanelIndex++;
  }

  prevPanelIndex() {
    this.selectedPanelIndex--;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.question)
  }

}
