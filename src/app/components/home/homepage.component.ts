// angular libraries and dependencies
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import Fuse from 'fuse.js'

// Importing Custom Models
import {Template} from '../../models/Template';
import {TemplateQueryResponse} from '../../models/TemplateQueryResponse';
import { Prompt } from 'src/app/models/Prompt';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  templateSearchFormGroup: FormGroup;
  templateQueryResponses: TemplateQueryResponse[];
  templateDatabase: Template[];
  selectedTemplate: Template;
  templateQueryResponsesFormGroups: FormGroup[];
  timesOfDay: any[] = [
    "Morning",
    "Afternoon",
    "Evening"
  ]
  // <mat-select>
  //   <mat-option *ngFor="let food of foods" [value]="food.value">
  //     {{food.viewValue}}
  //   </mat-option>
  // </mat-select>


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

  fetchRespectiveFormGroupObject(result: TemplateQueryResponse) {

    let index = this.templateQueryResponses.indexOf(result)

    // result of this.templateQueryResponses

    return this.templateQueryResponsesFormGroups[index]
  }

  ngOnInit() {
    this.templateSearchFormGroup = new FormGroup({
      question: new FormControl("")
    });

    this.templateDatabase = [
      // {
      //   title: "Writing A Strong Profile Summary Jobs",
      //   summary: "You have 30 seconds to describe yourself. Can you do it? This is some additional text that will overflow",
      //   description: `With a LinkedIn summary, that’s all the time you have. Sorry, no one wants to read your entire work history. Not even a little bit.
      //     The summary section requires brevity and critical thinking. You must explain what you’re about and the impact you make on others.`
      // },
      // {
      //   title: "How could I ask about job opportunities as a recent college graduate?",
      //   summary: "Focus on what you have accomplished. Show your value. This is some additional text that is purely random in nature.",
      //   description: `As you come out of school and approach employers, you need an email to prove your maturity and poise. I have seen too many email pitches from recent grads fall flat. Too much focus on “I’m a hard worker” and “I’m detail oriented.” Forget that stuff.`
      // },
      // {
      //   title: "How To Thank Somebody After a Job Interview?",
      //   description: `You may have nailed the job interview, and the employer is ready to offer you the job. Then…you don’t send a thank-you email. Then…the employer begins to wonder, “Hmm, maybe he’s not so sharp after all.”
      //   Never let doubt creep into the employer’s brain. Send a proper thank-you note the same day of the interview so you continue to shine.
      //   NOTE: If you’re traveling and can’t send a note the same day, it’s OK to write one the next day.        
      //   `
      // }
      {
        title: "How To Thank Somebody After a Job Interview?",
        description: `You may have nailed the job interview, and the employer is ready to offer you the job. Then…you don’t send a thank-you email. Then…the employer begins to wonder, “Hmm, maybe he’s not so sharp after all.”
        Never let doubt creep into the employer’s brain. Send a proper thank-you note the same day of the interview so you continue to shine.
        NOTE: If you’re traveling and can’t send a note the same day, it’s OK to write one the next day.`,
        message: `Hi p0,
        
        Thanks again for meeting with me p1. I appreciate your time and enjoyed learning more about the company.
        As we discussed, I’m interested in the p2 role and feel my p3 skills would be a nice complement to your p4 department.
        If you have any further questions, please feel free to ask.
        Thanks so much, and I look forward to hearing from you!

        Best,
        p5

        `,
        prompts: [
          {
            // header: "Step #1: Who is the recipient of this message?",
            pId: "p0",
            mat_ff_appearance: "standard",
            mat_label: "Step #1: Who is the recipient of this message?",
            mat_placeholder: "Enter the individual's name here",
            mat_icon:"person_outline"
          },
          {
            pId: "p1",
            mat_ff_appearance: "standard",
            mat_label: "Step #2: When did you have the interview?",
            mat_placeholder: "Enter time here (Yesterday, Earlier Today, Etc)",
            mat_icon:"watch_later"
          },
          {
            pId: "p2",
            mat_ff_appearance: "standard",
            mat_label: "Step #3: What is the title of the role?",
            mat_placeholder: "Enter the role name here",
            mat_icon:"work_outline"
          },
          {
            pId: "p3",
            mat_ff_appearance: "standard", 
            mat_label: "Step #4: What is your core competancy?",
            mat_placeholder: "Which key skill makes you most qualified for this role?",
            mat_icon:"person_pin"
          },
          {
            pId: "p4",
            mat_ff_appearance: "standard",
            mat_label: "Step #5: Which department does this role belong to?",
            mat_placeholder: "Enter the department name you would be working for",
            mat_icon:"group_work"
          },
          {
            pId: "p5",
            mat_ff_appearance: "standard",
            mat_label: "Step #6: What is your name?",
            mat_placeholder: "Please enter your name here",
            mat_icon:"face"
          }
        ]
      }
    ];
  }

  onFormSubmit() {
    // save the user's submitted input
    let submittedFormValue = this.templateSearchFormGroup.get('question')?.value
    
    // clear the search results
    this.templateQueryResponses = [];
    this.templateQueryResponsesFormGroups = [];

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
      console.log("prompt.pId = " + prompt.pId)
      console.log("form control value = " + formControlValue)
      message = message.replace(prompt.pId, formControlValue)
    })
    
    console.log(message)
  }

  // onClearTemplateForm(promptsForm: FormGroup) {
  //   promptsForm.reset()
  // }

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

  fetchFormControlObject(promptsForm: TemplateQueryResponse, prompt: Prompt): any {
    // console.log(result)
    // return result.promptsForm.get(
    //   prompt.pId
    // )
  }
}
