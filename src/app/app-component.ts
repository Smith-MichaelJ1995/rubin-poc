import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import Fuse from 'fuse.js'


// Importing Custom Components
import {BuildContentComponent} from './components/build-content/build-content.component';

// Importing Custom Models
import {QuestionGroup} from './models/QuestionGroup';
import {Panel} from './models/Panel';

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
  questions: QuestionGroup[] = [
    {
      name: 'How could I ask about job opportunities as a student or recent grad?',
      panels: [
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
      panels: [
        {
          label:"",
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
      panels: [
        {
          label:"This is the linkedin one label",
          header: "Header one Linkedin",
          subHeader: "This is subheader one Linkedin",
          image: "../../../assets/images/linkedin-card-1.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          label:"This is the linkedin two label",
          header: "Header two Linkedin",
          subHeader: "This is subheader two Linkedin",
          image: "../../../assets/images/linkedin-card-2.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          label:"This is the linkedin three label",
          header: "Header three Linkedin",
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
        "name"
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