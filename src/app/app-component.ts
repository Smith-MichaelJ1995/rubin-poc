import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import Fuse from 'fuse.js'


// Importing Custom Components
import {BuildContentComponent} from './components/build-content/build-content.component';

// Importing Custom Models
import {Template} from './models/Template';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-component',
  templateUrl: 'app-component.html',
  styleUrls: ['app-component.css'],
})
export class AppComponent implements OnInit {
  myFormGroup = new FormGroup({
    question: new FormControl("")
  });
  questions: Template[] = [
    {
      title: 'How could I ask about job opportunities as a student or recent grad?',
      description: ''
    },
    {
      title: 'How could I write a thank you letter after an interview?',
      description: ''
    },
    {
      title: 'How could I introduce myself on Linkedin?',
      description: ''
    }
  ];


  fuseSearch(questionText: string) {

    let settings = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      keys: [
        "title",
        "description"
      ]
    };
    
    const fuse = new Fuse(this.questions, settings);
    
    // Search for the pattern
    return fuse.search(questionText)
  
  }

  ngOnInit() {}

  onFormSubmit() {
    // console.log('Submitted Question:' + this.myFormGroup.get('question')?.value);
    let submittedFormValue = this.myFormGroup.get('question')?.value

    console.log(
      this.fuseSearch(submittedFormValue)
    )
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */