import {Prompt} from './Prompt';

// creating an object type
export interface Template {
    title: string;
    description: string;
    prompts: Prompt[];
}