import { Panel } from './Panel';

// creating an object type
export interface QuestionGroup {
    name: string;
    panels: Panel[];
    partOne: string;
    partTwo: string;
    partThree: string;
    // add fields here
}