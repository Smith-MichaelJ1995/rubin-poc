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
          label:"",
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
          label: "",
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
          label: "label 1",
          header: "This is header one Linkedin",
          subHeader: "This is subheader one Linkedin",
          image: "../../../assets/images/linkedin-card-1.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          label: "label 2",
          header: "This is header two Linkedin",
          subHeader: "This is subheader two Linkedin",
          image: "../../../assets/images/linkedin-card-2.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          label: "label 3",
          header: "This is header three Linkedin",
          subHeader: "This is subheader three Linkedin",
          image: "../../../assets/images/linkedin-card-3.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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