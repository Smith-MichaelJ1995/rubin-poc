import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


// Importing Custom Components
import {BuildContentComponent} from './components/build-content/build-content.component';

// Importing Custom Models
import {QuestionGroup} from './models/QuestionGroup';
import {Card} from './models/Card';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-component',
  templateUrl: 'app-component.html',
  styleUrls: ['app-component.css'],
})
export class AppComponent implements OnInit {
  myQuestionControl = new FormControl();
  questionOptions: Observable<QuestionGroup[]>;
  selectedQuestion: QuestionGroup;
  questions: QuestionGroup[] = [
    {
      name: 'How could I ask about job opportunities as a student or recent grad?',
      cards: [
        {
          header: "",
          subHeader: "",
          image: "",
          description: ""
        } 
      ],
      partOne: 'Job Opportunities Part 1',
      partTwo: 'Job Opportunities Part 2',
      partThree: 'Job Opportunities Part 3'
    },
    {
      name: 'How could I write a thank you letter after an interview?',
      cards: [
        {
          header: "",
          subHeader: "",
          image: "",
          description: "" 
        } 
      ],
      partOne: 'Thank You Letter Part 1',
      partTwo: 'Thank You Letter Part 2',
      partThree: 'Thank You Letter Part 3'
    },
    {
      name: 'How could I introduce myself on Linkedin?',
      cards: [
        {
          header: "",
          subHeader: "",
          image: "",
          description: ""
        } 
      ],
      partOne: 'Introducing Myself Part 1',
      partTwo: 'Introducing Myself Part 2',
      partThree: 'Introducing Myself Part 3'
    }
  ];

  ngOnInit() {
    this.questionOptions = this.myQuestionControl.valueChanges.pipe(
      startWith(''),
      map(question => question ? this._filterQuestions(question) : this.questions.slice())
    );
  }

  selectQuestionEvent(event: any) {
    this.selectedQuestion = event;
  }

  private _filterQuestions(value: string): QuestionGroup[] {
    const filterValue = value.toLowerCase();
    return this.questions.filter(question => question.name.toLowerCase().indexOf(filterValue) === 0);
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */