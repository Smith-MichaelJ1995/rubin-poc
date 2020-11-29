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
    },
    // #1 How To Set Up A Networking Meeting
    {
      title: "How To Set Up A Networking Meeting",
      description: `If you want to make introductions, discuss a project, explore job opportunities or meet for another reason altogether, the template below will allow you to start the conversation.`,
      message: 'Hi p0,\n\n' +
      'My name is p1, and p2. I hope you\'re doing well. \n' +
      'p3 \n' +
      'p4 \n' +
      'To give you my quick background, p5. \n' +
      'Again, it would be great to meet you in person. Please let me know your availability over the next couple of weeks. \n' +
      'Thanks, p6. I look forward to talking with you. \n\n' +
      'Best,\n' +
      'p7',
      prompts: [
        {
          // header: "Step #1: Who is the recipient of this message?",
          pId: "p0",
          mat_ff_appearance: "standard",
          mat_label: "Step #1: Who is the recipient of this message?",
          mat_placeholder: "Enter the individual's first and last name here (ex: Joe Brown)",
          mat_icon:"person_outline"
        },
        {
          pId: "p1",
          mat_ff_appearance: "standard",
          mat_label: "Step #2: What is your full name name?",
          mat_placeholder: "Please enter your first & last name here (ex: Mike Smith)",
          mat_icon:"face"
        },
        {
          pId: "p2",
          mat_ff_appearance: "standard",
          mat_label: "Step #3: How are you connected to this person? (Give the person context for the email)",
          mat_placeholder: "Explain how you're connected (ex: “I am the son of Jim Reeves, your former co-worker” or “I'm a recent grad from Big State University with a degree in computer science”)",
          mat_icon:"watch_later"
        },
        {
          pId: "p3",
          mat_ff_appearance: "standard",
          mat_label: "Step #4: Why do you want to meet this person?",
          mat_placeholder: "Always describe your intent early (ex: “As I’m new to the job market, I hope we can meet for coffee so I can learn more about your career and job prospects in the field of animation.”)",
          mat_icon:"work_outline"
        },
        {
          pId: "p4",
          mat_ff_appearance: "standard", 
          mat_label: "Step #5: List an example about the person's career path you learned from their website",
          mat_placeholder: "Start with (ex: “I checked out your bio and see you have a lot of design experience, particularly from your time in Hollywood on big budget animated films. That must have been a fantastic opportunity.”)",
          mat_icon:"person_pin"
        },
        {
          pId: "p5",
          mat_ff_appearance: "standard",
          mat_label: "Step #6: One or two highlights from your own background",
          mat_placeholder: "What would the person find impressive or interesting? (ex: “I recently completed an internship at Acme Corporation, in which I used the software programs XXXX and XXXX. Here’s a link to my latest animated work.”)",
          mat_icon:"group_work"
        },
        {
          pId: "p6",
          mat_ff_appearance: "standard",
          mat_label: "Step #7: What is the recipient's first-name?",
          mat_placeholder: "Please enter the recipient's first-name here (ex: Joe)",
          mat_icon:"face"
        },
        {
          pId: "p7",
          mat_ff_appearance: "standard",
          mat_label: "Step #8: Closing Salutation",
          mat_placeholder: "Please enter your first-name (or perferred name) here",
          mat_icon:"face"
        }
      ]
    },
    // #2 HOW TO INTRODUCE YOURSELF TO A COMPANY FOR THE FIRST TIME
    {
      title: "How To Introduce Yourself (Your Business) To a Company For The First Time",
      description: `The “cold call” email is one of the most challenging outreach messages for a business owner. The recipient doesn’t know you or trust you. How do you win the person over? \n
      The key is to make the email personal and keep it brief. You want to appear authentic, open, honest and as someone who knows how to “get to the point.”`,
      message: 'Hi p0,\n\n' +
      'I\'m p1 with p2, p3.\n' +
      'I hope that you are doing well. \n' +
      'I am writing you because I think your team at p4 would like to learn more about p2.\n' +
      'p5\n' +
      'p6\n' +
      'p7\n' +
      'Please let me know your thoughts. I’m happy to answer any questions and hope we can start a conversation. \n' +
      'Thanks,\n' +
      'p8',
      prompts: [
        {
          // header: "Step #1: Who is the recipient of this message?",
          pId: "p0",
          mat_ff_appearance: "standard",
          mat_label: "Step #1: Who is the recipient of this message?",
          mat_placeholder: "Enter the individual's first and last name here (ex: Joe Brown)",
          mat_icon:"person_outline"
        },
        {
          pId: "p1",
          mat_ff_appearance: "standard",
          mat_label: "Step #2: What is your full name name?",
          mat_placeholder: "Please enter your first & last name here (ex: Mike Smith)",
          mat_icon:"face"
        },
        {
          pId: "p2",
          mat_ff_appearance: "standard",
          mat_label: "Step #3: What is the name of your company?",
          mat_placeholder: "Enter your company name here",
          mat_icon:"watch_later"
        },
        {
          pId: "p3",
          mat_ff_appearance: "standard",
          mat_label: "Step #4: What is your value proposition?",
          mat_placeholder: "Type 5-7 words on the product or service you offer (ex: “a maker of organic treats for dogs and cats”)",
          mat_icon:"work_outline"
        },
        {
          pId: "p4",
          mat_ff_appearance: "standard",
          mat_label: "Step #5: What is the name of this person's company?",
          mat_placeholder: "Enter their company name here",
          mat_icon:"watch_later"
        },
        {
          pId: "p5",
          mat_ff_appearance: "standard", 
          mat_label: "Step #6: What is the main reason why the person should care about your product/service?",
          mat_placeholder: "Why should the person care? Why does your business matter? (ex: “The product is healthy, safe and selling out routinely on our website”)",
          mat_icon:"person_pin"
        },
        {
          pId: "p6",
          mat_ff_appearance: "standard",
          mat_label: "Step #7: Refer to a recent accomplishment from this person’s company. (Mention pages like Recent News, Latest News, Blog or Press you've read).",
          mat_placeholder: "Enter one sentence to show you studied the company’s website.  (ex: “Also, I want to tell you I enjoyed the photos from the recent Bark Bark 5K race you sponsored. The chihuahua with the running shoes? Too funny!”)",
          mat_icon:"group_work"
        },
        {
          pId: "p7",
          mat_ff_appearance: "standard",
          mat_label: "Step #8: Share a recent success story (of your company)",
          mat_placeholder: "Utilize data/metrics to back up your claim. (ex: “We began to sell Acme Pet Treats online in January 2017. In four months, we sold 4,500 units with limited social media marketing. Most of the buzz has been through word of mouth.”)",
          mat_icon:"face"
        },
        {
          pId: "p8",
          mat_ff_appearance: "standard",
          mat_label: "Step #8: Closing Salutation",
          mat_placeholder: "Please enter your first-name (or perferred name) here",
          mat_icon:"face"
        }
      ]
    },
    // #3 HOW TO RECAP THE TEAM ON A BIG PROJECT
    {
      title: "How To Recap Your Team On A Big Project",
      description: `Emails to your own team carry a great deal of weight. You want the office reputation as someone who communicates effectively. That way, you save everyone time!
      Here’s a template to recap your team on a big project. Imagine the bold type in the email body below is yellow highlight.`,
      message: 'Hi Everyone,\n\n' +
      'I have several updates about the p0 so I will lay them out as clearly as I can.\n\n' +
      'p1 \n' +
      'p2 \n' +
      'p3 \n' +
      'p4 \n' +
      'Please let me know your thoughts.\n' +
      'Thanks,\n' +
      'p5',
      prompts: [
        {
          // header: "Step #1: Who is the recipient of this message?",
          pId: "p0",
          mat_ff_appearance: "standard",
          mat_label: "Step #1: What is the name of this project",
          mat_placeholder: "Enter the name of this project here: (ex: `Presentation to Leadership At Taylor Associates`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p1",
          mat_ff_appearance: "standard",
          mat_label: "Step #2: What is the main update that you need to articulate?",
          mat_placeholder: "Summarize the most important information that your team needs to know. (ex: `What’s the biggest or most urgent news right now?`)",
          mat_icon:"face"
        },
        {
          pId: "p2",
          mat_ff_appearance: "standard",
          mat_label: "Step #3: What is the first action item?",
          mat_placeholder: "Be sure to include the names of any team members associated with this task. (ex: `Regina said she will continue work on the glitch whenever we try to put the program into sleep mode.`)",
          mat_icon:"watch_later"
        },
        {
          pId: "p3",
          mat_ff_appearance: "standard",
          mat_label: "Step #4: What is the second action item?",
          mat_placeholder: "Be sure to include the names of any team members associated with this task. (ex: `Donald, can you have an updated report on the analytic capabilities by Friday?`)",
          mat_icon:"work_outline"
        },
        {
          pId: "p4",
          mat_ff_appearance: "standard",
          mat_label: "Step #5: What is the third action item?",
          mat_placeholder: "Be sure to include the names of any team members associated with this task. (ex: `I know we’re running up against the holidays so can everyone reply to me with your vacation situation?`)",
          mat_icon:"watch_later"
        },
        {
          pId: "p5",
          mat_ff_appearance: "standard",
          mat_label: "Step #6: Closing Salutation",
          mat_placeholder: "Please enter your first-name (or perferred name) here",
          mat_icon:"face"
        }
      ]
    },
    // #4 HOW TO UPDATE YOUR BOSS ON THE STATUS OF A PROJECT
    {
      title: "How To Update Your Boss On The Status Of A Project",
      description: `When you need to send a message up the chain to your boss or other leadership, here’s the sharpest way to do it.`,
      message: 'Subject line: Updates Regarding p2\n\n' +
      'Hi p0,\n\n' +
      'Good p1.\n' +
      'I have some updates on the p2 since we last spoke.\n\n Here’s the latest: \n' +
      'p3\n' +
      'p4\n' +
      'p5\n' +
      'Thanks, and I\'ll keep you updated.' +
      'Best, \n\n' + 
      'p6',
      prompts: [
        {
          // header: "Step #1: Who is the recipient of this message?",
          pId: "p0",
          mat_ff_appearance: "standard",
          mat_label: "Step #1: What is the recipient's name?",
          mat_placeholder: "Enter the name of the person you are emailing: (ex: `Pete, John, Sarah`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p1",
          mat_ff_appearance: "standard",
          mat_label: "Step #2: What time of day is it?",
          mat_placeholder: "It's best practice to provide a salutation before delving into content (ex: `morning, afternoon, evening`)",
          mat_icon:"face"
        },
        {
          // header: "Step #1: Who is the recipient of this message?",
          pId: "p2",
          mat_ff_appearance: "standard",
          mat_label: "Step #3: What is the name of this project",
          mat_placeholder: "Enter the name of this project here: (ex: `Presentation to Leadership At Taylor Associates`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p3",
          mat_ff_appearance: "standard",
          mat_label: "Step #4: What is your primary update?",
          mat_placeholder: "Be sure to include the names of any team members associated with this task. (ex: `Donald, can you have an updated report on the analytic capabilities by Friday?`)",
          mat_icon:"work_outline"
        },
        {
          pId: "p4",
          mat_ff_appearance: "standard",
          mat_label: "Step #5: What is your secondary update?",
          mat_placeholder: "Be sure to include the names of any team members associated with this task. (ex: `I know we’re running up against the holidays so can everyone reply to me with your vacation situation?`)",
          mat_icon:"watch_later"
        },
        {
          pId: "p5",
          mat_ff_appearance: "standard",
          mat_label: "Step #6: What is your tertiary update?",
          mat_placeholder: "Be sure to include the names of any team members associated with this task. (ex: `I know we’re running up against the holidays so can everyone reply to me with your vacation situation?`)",
          mat_icon:"watch_later"
        },
        {
          pId: "p6",
          mat_ff_appearance: "standard",
          mat_label: "Step #6: Closing Salutation",
          mat_placeholder: "Please enter your first-name (or perferred name) here",
          mat_icon:"face"
        }
      ]
    },
    // #5 HOW TO ASSIGN ROLES OR RESPONSIBILITIES
    {
      title: "How To Assign Roles Or Responsibilities",
      description: `The best leaders understand the power of delegation.
      For one, you divide up the work. Why put everything on yourself?
      Plus, delegation empowers your employees. The approach shows you believe in your team members and makes everyone more capable.
      When it’s time to delegate, the email template that follows will help you strike the right tone.`,
      message: 'Subject line: Assigning Tasks For p0\n\n' +
      'Hi Everyone,\n\n' +
      'As we move ahead with the p0 project, I need all of us to take on different roles to make sure everything stays on track.\n' +
      'I know if we all do our part, this project will be a success.\n\n' +
      'p1\n' +
      'In the meantime, please look for your name and make a note for what you need to do.\n' +
      'p2\n' +
      'We can recap all of our efforts p3\n' +
      'If you have any questions, please give me a call.\n\n' +
      'Thanks, \n' + 
      'p4',
      prompts: [
        {
          // header: "Step #1: Who is the recipient of this message?",
          pId: "p0",
          mat_ff_appearance: "standard",
          mat_label: "Step #1: What is the name of this project",
          mat_placeholder: "Enter the name of this project here: (ex: `Presentation to Leadership At Taylor Associates`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p1",
          mat_ff_appearance: "standard",
          mat_label: "Step #2: What work will you do? How will you pull your weight?",
          mat_placeholder: "Explain your role/responsibility first: (ex:`I will kick off conversations with the top brass at Alpha; we have an introductory video conference on Tuesday at 11 a.m`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p2",
          mat_ff_appearance: "standard",
          mat_label: "Step #3: What will be the roles and responsibilities of your co-workers?",
          mat_placeholder: "Describe the roles & responsibilities of your teammates, one by one: (ex:`Damian: Manage the research component and report back. Jess: Be the front-facing team member to the alpha folks.`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p3",
          mat_ff_appearance: "standard",
          mat_label: "Step #4: When will the team be connecting to review progress?",
          mat_placeholder: "Is there a next meeting date? (ex: `on July 8th`, `next tuesday`, `during next staff call`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p4",
          mat_ff_appearance: "standard",
          mat_label: "Step #5: Closing Salutation",
          mat_placeholder: "Please enter your first-name (or perferred name) here",
          mat_icon:"face"
        }
      ]
    },
    // #6 HOW TO CLARIFY NEEDS OR SPECIFICATIONS
    {
      title: "How To Clarify Needs Or Specifications",
      description: `With client relations, never assume anything. A-N-Y-T-H-I-N-G.
      If a client asks for help to design new business cards and you can’t remember if she said bold font or not bold font for the name/title…
      ASK. Simple as that.
      Don’t take chances or move too quickly. When in doubt, ASK.
      Even tiny details — when done the wrong way — can cause enormous headaches for the client and diminish your standing in the relationship.
      Here’s a template that incorporates the business card scenario, to give you a real-life example.
      `,
      message: 'Subject line: Quick Question About p0\n\n' +
      'Hi p1,\n\n' +
      'p2\n' + 
      'p3\n\n' +
      'Please let me know.\n\n' +
      'Best,\n' +
      'p4', 
      prompts: [
        {
          // header: "Step #1: Who is the recipient of this message?",
          pId: "p0",
          mat_ff_appearance: "standard",
          mat_label: "Step #1: In short, what is the task at hand?",
          mat_placeholder: "What are you inquiring about?: (ex: `The Business Card Design`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p1",
          mat_ff_appearance: "standard",
          mat_label: "Step #2: What is the client's first name?",
          mat_placeholder: "Please enter the client's first name here: (ex: `Tyler`, `Travis`, `Ryan`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p2",
          mat_ff_appearance: "standard",
          mat_label: "Step #3: What is the current status?",
          mat_placeholder: "Explain the current situation: (ex: `We are working on your new business card design and have a quick question.`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p3",
          mat_ff_appearance: "standard",
          mat_label: "Step #3: What is your question?",
          mat_placeholder: "Describe your question here: (ex: `Do you want the name/title on the card to be bolded or not?`)",
          mat_icon:"person_outline"
        },
        {
          pId: "p4",
          mat_ff_appearance: "standard",
          mat_label: "Step #5: Closing Salutation",
          mat_placeholder: "Please enter your first-name (or perferred name) here",
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
