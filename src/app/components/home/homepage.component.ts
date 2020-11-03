// angular libraries and dependencies
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import Fuse from 'fuse.js'

// Importing Custom Models
import {Template} from '../../models/Template';
import {TemplateQueryResponse} from '../../models/TemplateQueryResponse';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  myFormGroup: FormGroup;
  templateQueryResponses: TemplateQueryResponse[];
  templateDatabase: Template[];
  selectedTemplate: Template;

  // perform fuzzy string search based on question
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
        title: "Writing A Strong Profile Summary Jobs",
        summary: "You have 30 seconds to describe yourself. Can you do it? This is some additional text that will overflow",
        description: `With a LinkedIn summary, that’s all the time you have. Sorry, no one wants to read your entire work history. Not even a little bit.
          The summary section requires brevity and critical thinking. You must explain what you’re about and the impact you make on others.`
      },
      {
        title: "Asking About Opportunities As A Recent Grad",
        summary: "Focus on what you have accomplished. Show your value. This is some additional text that is purely random in nature.",
        description: `As you come out of school and approach employers, you need an email to prove your maturity and poise. I have seen too many email pitches from recent grads fall flat. Too much focus on “I’m a hard worker” and “I’m detail oriented.” Forget that stuff.`
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
