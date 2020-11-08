import { FormGroup } from '@angular/forms';
import { Template } from './Template';

// creating an object type
export interface TemplateQueryResponse {
    match?: any;
    template: Template
    promptsForm: FormGroup
}