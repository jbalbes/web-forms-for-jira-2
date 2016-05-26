import {Component} from 'angular2/core';

import {JIRAService} from './../util/jira';
import {ContactForm} from './../util/contactForm';

@Component({
    selector: 'mailing-list',
    template: require('./mailing.html'),
    styles: [require('raw!./mailing.css')],
    providers: [JIRAService]
})
export class MailingListComponent extends ContactForm{
  constructor(jira: JIRAService) {
    super(jira);
  }
}


