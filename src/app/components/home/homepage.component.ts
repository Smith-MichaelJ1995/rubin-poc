// angular libraries and dependencies
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import Fuse from 'fuse.js'
import {Router} from "@angular/router";
import {Validators} from '@angular/forms';

// Models
import { Template } from '../../models/Template';
import { TemplateQueryResponse } from '../../models/TemplateQueryResponse';
import { Prompt } from 'src/app/models/Prompt';

// Services
import { TemplateDatabaseService } from '../../services/template-database.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: []
})
export class HomepageComponent implements OnInit {

  templateSearchFormGroup: FormGroup;
  templateQueryResponses: TemplateQueryResponse[];
  templateDatabase: Template[];

  constructor(private router: Router, private templateDatabaseService: TemplateDatabaseService) {}


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

    // load templates from database/service
    this.templateDatabase = this.templateDatabaseService.getTemplates()

    this.templateSearchFormGroup = new FormGroup({
      question: new FormControl("")
    });
  }

  onFormSubmit() {
    // save the user's submitted input
    let submittedFormValue = this.templateSearchFormGroup.get('question')?.value
    
    // clear the search results
    this.templateQueryResponses = [];

    // search for template based on question text & populate results list
    this.fuseSearch(submittedFormValue).forEach(result => {

      // popluate the response objects
      this.templateQueryResponses.push(
        {
          match: result.score,
          template: result.item,
          promptsForm: this.buildFormControlsList(
            result.item.prompts
          )
        }
      )

    })

  }

  onTemplateFormSubmit(result: TemplateQueryResponse) {

    let resultsForm: FormGroup = result.promptsForm
    let message: string = result.template.message
    
    result.template.prompts.forEach((prompt: Prompt) => {
      let formControlValue = resultsForm.get(prompt.pId)?.value
      var re = new RegExp(prompt.pId, "gi");
      message = message.replace(re, formControlValue)
    })
    
    // call the message builder service
    // this.messageBuildingService.sendMessage(message); 
    this.router.navigate(['/template'], {state: {data: message}});
  }


  buildFormControlsList(prompts: any[]): FormGroup {

    let formForThisPrompt = new FormGroup({})

    // add short ID that can be referred to when searching
    prompts.forEach((prompt: Prompt) => {
      formForThisPrompt.addControl(prompt.pId, new FormControl(
        "",
        [Validators.required]
      ))
    });

    return formForThisPrompt  
  }
}
