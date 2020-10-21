import { Component, NgModule, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// Importing Custom Models
// import {QuestionGroup} from '../../models/QuestionGroup';

@Component({
  selector: 'app-build-content',
  templateUrl: './build-content.component.html',
  styleUrls: ['./build-content.component.scss']
})


export class BuildContentComponent implements OnInit {

  @Input('question')
  // question: QuestionGroup;
  selectedPanelIndex = 0;
  panelForms: FormGroup[] = [];


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
    // console.log(this.question)
    // this.question.panels.forEach(panel => {
    //   this.panelForms.push(
    //     new FormGroup({
    //       label: new FormControl(panel.label),
    //       header: new FormControl(panel.header),
    //       subHeader: new FormControl(panel.subHeader),
    //       image: new FormControl(panel.image),
    //       description: new FormControl(panel.description)
    //     })
    //   )
    // });
  }

}
