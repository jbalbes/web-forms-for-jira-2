import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class JIRAService {
  http: Http;
  static jiraUrl: string = "https://your-site.com/rest/api/2/issue";
  constructor(http: Http) {
    this.http = http;
  }
  makeIssue(issue: JIRAIssue): Observable<Response> {
    return this.http.post(JIRAService.jiraUrl, JSON.stringify(issue));
  }
  static setJiraProxyUrl(url: string) {
    this.jiraUrl = url;
  }
}

class JIRASuccessResponse {
  self: string;
  key: string;
  id: string;
}

export function checkSuccess (response: Response) {
  // We will want this check if it sometimes successfully fails
  if (response.status === 200 && response.json() instanceof JIRASuccessResponse) {
    return response;
  } else {
    throw "unexpected response from JIRA: " + response.text();
  }
}

export interface JIRAIssue {
  fields: JIRAIssueFields;
}

export interface JIRAIssueFields {
  summary: string;
  issueType: JIRAIssueType;
  project: JIRAProject;
  description: string;
}

export interface JIRAValue {
  value: string;
}

export interface JIRAIssueType {
  name: string;
}

export interface JIRAProject {
  key: string;
}
