var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("jira", ["@angular/core", "@angular/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1;
    var JIRAService, JIRASuccessResponse;
    function checkSuccess(response) {
        // We will want this check if it sometimes successfully fails
        if (response.status === 200 && response.json() instanceof JIRASuccessResponse) {
            return response;
        }
        else {
            throw "unexpected response from JIRA: " + response.text();
        }
    }
    exports_1("checkSuccess", checkSuccess);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            JIRAService = (function () {
                function JIRAService(http) {
                    this.http = http;
                }
                JIRAService.prototype.makeIssue = function (issue) {
                    return this.http.post(JIRAService.jiraUrl, JSON.stringify(issue));
                };
                JIRAService.setJiraProxyUrl = function (url) {
                    this.jiraUrl = url;
                };
                JIRAService.jiraUrl = "https://your-site.com/rest/api/2/issue";
                JIRAService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JIRAService);
                return JIRAService;
            }());
            exports_1("JIRAService", JIRAService);
            JIRASuccessResponse = (function () {
                function JIRASuccessResponse() {
                }
                return JIRASuccessResponse;
            }());
        }
    }
});
//# sourceMappingURL=web-forms-for-jira-2.js.map