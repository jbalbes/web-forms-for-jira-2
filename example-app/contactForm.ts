import {Component} from '@angular/core';

import {JIRAService, checkSuccess, JIRAIssue} from '../src/jira';

export class ItemForm {
  jira: JIRAService;
  name: string;
  email: string;
  location: string;
  message: string;
  failed: boolean = false;
  constructor(jira: JIRAService) {
    this.jira = jira;
  }
  submit(): void {
    this.jira.makeIssue(new JIRAIssue({
      summary: this.name,
      issueType: { name: "Bug"},
      project: { key: "My Project"},
      description: this.message
    })).toPromise()
      .then(checkSuccess)
      .catch((_: any) => {
        this.failed = true;
        throw _;
      });
  }
}
