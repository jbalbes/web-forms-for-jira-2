declare module "jira" {
    import { Http, Response } from "@angular/http";
    import { Observable } from "rxjs";
    export class JIRAService {
        http: Http;
        static jiraUrl: string;
        constructor(http: Http);
        makeIssue(issue: JIRAIssue): Observable<Response>;
        static setJiraProxyUrl(url: string): void;
    }
    export function checkSuccess(response: Response): Response;
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
}
