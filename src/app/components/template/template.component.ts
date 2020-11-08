import { Component, OnInit } from '@angular/core';

// Incorporate Custom Services
import { MessageBuilderService } from '../../services/message-builder.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  messageBuildingService: MessageBuilderService;

  constructor() { }

  ngOnInit(): void {
    // this.messageBuildingService = new MessageBuilderService()
    console.log(this.messageBuildingService.getMessage())
  }

}
