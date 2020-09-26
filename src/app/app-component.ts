import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


// Importing Custom Components
import {BuildContentComponent} from './components/build-content/build-content.component';

// Importing Custom Models
import {QuestionGroup} from './models/QuestionGroup';

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
  questions: QuestionGroup[] = [
    {
      name: 'How could I ask about job opportunities as a student or recent grad?'
    },
    {
      name: 'How could I write a thank you letter after an interview?'
    },
    {
      name: 'How could I introduce myself on Linkedin?'
    }
  ];

  ngOnInit() {
    this.questionOptions = this.myQuestionControl.valueChanges.pipe(
      startWith(''),
      map(question => question ? this._filterQuestions(question) : this.questions.slice())
    );
  }

  private _filterQuestions(value: string): QuestionGroup[] {
    const filterValue = value.toLowerCase();
    return this.questions.filter(question => question.name.toLowerCase().indexOf(filterValue) === 0);
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */