import { Card } from './Card';

// creating an object type
export interface QuestionGroup {
    name: string;
    cards: Card[];
    partOne: string;
    partTwo: string;
    partThree: string;
    // add fields here
}