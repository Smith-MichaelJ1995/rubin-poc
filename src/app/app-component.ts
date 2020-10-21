import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import Fuse from 'fuse.js'


// Importing Custom Components
import {BuildContentComponent} from './components/build-content/build-content.component';

// Importing Custom Models
import {Template} from './models/Template';
import {TemplateQueryResponse} from './models/TemplateQueryResponse';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-component',
  templateUrl: 'app-component.html',
  styleUrls: ['app-component.css'],
})
export class AppComponent implements OnInit {
  myFormGroup: FormGroup;
  templateQueryResponses: TemplateQueryResponse[];
  templateDatabase: Template[];

  fuseSearch(questionText: string) {

    let settings = {
      isCaseSensitive: false,
      includeScore: true,
      shouldSort: true,
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
    
    const fuse = new Fuse(this.templateDatabase, settings);
    
    // Search for the pattern
    return fuse.search(questionText)
  
  }

  ngOnInit() {
    this.myFormGroup = new FormGroup({
      question: new FormControl("")
    });
    this.templateQueryResponses = [];
    this.templateDatabase = [
      {
        title: "How To Write A Strong Profile Summary",
        description: `You have 30 seconds to describe yourself. Can you do it?
          With a LinkedIn summary, that’s all the time you have. Sorry, no one wants to read your entire work history. Not even a little bit.
          The summary section requires brevity and critical thinking. You must explain what you’re about and the impact you make on others.`
      },
      {
        title: "How To Ask About Job Opportunities As A Student Or Recent Grad",
        description: `As you come out of school and approach employers, you need an email to prove your maturity and poise. I have seen too many email pitches from recent grads fall flat. Too much focus on “I’m a hard worker” and “I’m detail oriented.” Forget that stuff.
        Focus on what you have ACCOMPLISHED. Show your value.`
      }
    ];
  }

  onFormSubmit() {
    // save the user's submitted input
    let submittedFormValue = this.myFormGroup.get('question')?.value
    
    // clear the search results
    this.templateQueryResponses = [];

    // search for template based on question text & populate results list
    this.fuseSearch(submittedFormValue).forEach(result => {
      this.templateQueryResponses.push(
        {
          match: result.score,
          template: result.item
        }
      )
    })

    console.log(this.templateQueryResponses)
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */