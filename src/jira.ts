import {Inject} from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'

@Inject('')
export class JIRAService {
  http: Http;
  static jiraProxyUrl:string = '/jira-form-proxy.php?url=https://your-site.atlassian.net/rest/api/2/issue';
  constructor(http: Http) {
    this.http = http;
  }
  makeIssue(issue: JIRAIssue): Observable<Response> {
    return this.http.post(JIRAService.jiraProxyUrl, JSON.stringify(issue));
  }
  static setJiraProxyUrl(url: string) {
    this.jiraProxyUrl = url;
  }
}

class JIRASuccessResponse {
  self: string;
  key: string;
  id: string;
}

export function checkSuccess (response: Response) {
  // We will want this check if we are using the PHP proxy - It sometimes successfully fails
  if (response.status == 200 && response.json() instanceof JIRASuccessResponse) {
    return response;
  } else {
    throw 'unexpected response from JIRA: ' + response.text();
  }
}

export class JIRAIssue {
  fields: JIRAIssueFields;
  constructor(fields: JIRAIssueFields) {
    this.fields = fields;
  }
}

class JIRAIssueFields {
  summary: string;
  issueType: JIRAIssueType;
  project: JIRAProject;
  description: string;
  constructor(summary: string, description: string, project: string, issueType: string) {
    this.summary = summary;
    this.description = description;
    this.project = new JIRAProject(project);
    this.issueType = new JIRAIssueType(issueType);
  }
}

class JIRAValue {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
}

class JIRAIssueType {
  name: string;
  constructor(type: string) {
    this.name = type;
  }
}

class JIRAProject {
  key: string;
  constructor(project: string) {
    this.key = project;
  }
}
