import { Injectable } from '@angular/core';
import {Template} from '../models/Template';

@Injectable({
  providedIn: 'root'
})
export class TemplateDatabaseService {

  templates: Template[] = [
    {
      title: "How To Ask About Job Opportunities As a Recent College Graduate?",
      description: `As you come out of school and approach employers, you need an email to prove your maturity and poise.
      I have seen too many email pitches from recent grads fall flat. Too much focus on “I’m a hard worker” and “I’m detail oriented.” Forget that stuff.`,
      message: 'Subject line: Interested in p0 at p1\n\n' +
      'My name is p2, and I’m a p3 from p4. I hope you’re doing well. \n' +
      'I’m interested in a job in the p5 field and would like to learn more about p1. \n' +
      'I read through p1\'s website and respect your efforts, in particular p6\n' +
      'As a student at p4, I developed my p7 skills when p8\n\n' +
      'I have attached my resume to this email. Please let me know if I can provide any more information.\n' +
      'Thanks so much, and I hope to hear from you.\n\n' +
      'Best,\n' +
      'p9',
      prompts: [
        {
          pId: "p0",
          mat_ff_appearance: "standard",
          mat_label: "Step #1: What role are you interested in?",
          mat_placeholder: "Enter exact role name or role type",
          mat_icon:"work_outline"
        },
        {
          pId: "p1",
          mat_ff_appearance: "standard",
          mat_label: "Step #2: What is the name of this company?",
          mat_placeholder: "Enter full name of company here",
          mat_icon:"work_outline"
        },
        {
          pId: "p2",
          mat_ff_appearance: "standard",
          mat_label: "Step #3: What is your full name?",
          mat_placeholder: "Enter legal name here (Ex: John A. Doe)",
          mat_icon:"face"
        },
        {
          pId: "p3",
          mat_ff_appearance: "standard", 
          mat_label: "Step #4: What is your occupational status?",
          mat_placeholder: "Enter either 'recent graduate', 'senior', etc",
          mat_icon:"work_outline"
        },
        {
          pId: "p4",
          mat_ff_appearance: "standard",
          mat_label: "Step #5: Which school did you most recently attend?",
          mat_placeholder: "Enter the full name of your high school, college, or alma-mater",
          mat_icon:"school"
        },
        {
          pId: "p5",
          mat_ff_appearance: "standard",
          mat_label: "Step #6: Which industry does this role belong to?",
          mat_placeholder: "Enter name of industry here",
          mat_icon:"work_outline"
        },
        {
          pId: "p6",
          mat_ff_appearance: "standard",
          mat_label: "Step #7: After researching this company, why do you want to work for them?",
          mat_placeholder: "Sentence or two describing reasons you admire this company",
          mat_icon:"person_pin"
        },
        {
          pId: "p7",
          mat_ff_appearance: "standard",
          mat_label: "Step #8: While in school, what key skill did you acquire that qualifies you for this role?",
          mat_placeholder: "Enter in a single skill (Ex: 'Computer Programming', 'Video Editing')",
          mat_icon:"school"
        },
        {
          pId: "p8",
          mat_ff_appearance: "standard",
          mat_label: "Step #9: While in school, describe how you acquired this key skill?",
          mat_placeholder: "Enter a sentence or two describing a valuable project or experience.",
          mat_icon:"school"
        },
        {
          pId: "p9",
          mat_ff_appearance: "standard",
          mat_label: "Step #10: Final Salutation",
          mat_placeholder: "Enter your first name or preferred name here",
          mat_icon:"face"
        }

      ]
    },
    {
      title: "How To Thank Somebody After a Job Interview?",
      description: `You may have nailed the job interview, and the employer is ready to offer you the job. Then…you don’t send a thank-you email. Then…the employer begins to wonder, “Hmm, maybe he’s not so sharp after all.”
      Never let doubt creep into the employer’s brain. Send a proper thank-you note the same day of the interview so you continue to shine.
      NOTE: If you’re traveling and can’t send a note the same day, it’s OK to write one the next day.`,
      message: 'Hi p0,\n\n' +
      'Thanks again for meeting with me p1. I appreciate your time and enjoyed learning more about the company. ' +
      'As we discussed, I’m interested in the p2 role and I feel that my p3 skills would be a nice complement to your p4 department. ' +
      'If you have any further questions, please feel free to ask. ' +
      'Thanks so much, and I look forward to hearing from you!\n\n' +
      'Best,\n' +
      'p5',
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

  constructor() { }

  getTemplates(): Template[] {
    return this.templates;
  }
}
