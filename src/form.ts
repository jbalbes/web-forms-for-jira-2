import {Injectable, Component} from "@angular/core";
import {ControlGroup, Control, Validators} from "@angular/common";

import {JIRAService, JIRAIssue} from "./jira";

export function makeJiraFormControlGroup() {
  return new ControlGroup({
      summary: new Control("", Validators.required),
      issueType: new Control("", Validators.required),
      project: new Control("", Validators.required),
      description: new Control("", Validators.required),
    });
}

export function createComponentBasedOnControlGroup(submit: (ControlGroup) => void, selector: string, controlGroup: ControlGroup) {
  let generatedTemplate = ""; // TODO: Generate it
  @Component({
    selector,
    template: generatedTemplate
  })
  class GeneratedComponent {
    controlGroup = controlGroup;
    submit() {
      submit(this.controlGroup);
    }
  }
  return GeneratedComponent;
}

export function createJiraFormComponent(controlGroup: ControlGroup, jira: JIRAService) {
  return createComponentBasedOnControlGroup((cg: ControlGroup) => {
    let issue: JIRAIssue = {
      fields: {
        summary: cg.controls["summary"].value,
        issueType: {
          name: cg.controls["issueType"].value
        },
        project: {
          key: cg.controls["project"].value
        },
        description: cg.controls["description"].value
      }
    };

    // TODO: Add any fields that have been added to the form

    jira.makeIssue(issue);
  }, "jira-form", controlGroup);
}