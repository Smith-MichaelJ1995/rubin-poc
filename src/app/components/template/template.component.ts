import { Component, OnDestroy } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  public editor = CKEditorModule;
  public message: string

  constructor() { 
    // this.editor.protectedSource.push()
    this.message = history.state.data
    console.log(this.message)
  }


}
