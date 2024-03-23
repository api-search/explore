---
name: GitLab
description: >-
  GitLab Inc. is an open-core company that operates GitLab, a DevOps software
  package that can develop, secure, and operate software.[9] The open source
  software project was created by Ukrainian developer Dmytro Zaporozhets and
  Dutch developer Sytse Sijbrandij.[10] In 2018, GitLab Inc. was considered to
  be the first partly-Ukrainian unicorn. Since its founding, GitLab Inc. has
  promoted remote work,[13] and is known as one of the largest all-remote
  companies in the world.[14] GitLab has an estimated 30 million registered
  users, with 1 million being active licensed users.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/gitlab.yml
created: 2023/11/10
modified: 2023/11/10
specificationVersion: '0.16'
tags:
  - APIs
  - Code
  - DevOps
  - Repositories
apis:
  - name: GitLab REST API
    description: >+
      The REST APIs have been around for a longer time compared to GraphQL APIs,
      which may make them more familiar to some developers. It is often a good
      choice for developers who are more comfortable with traditional API
      architecture.

    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.gitlab.com/ee/api/rest/index.html
    baseURL: https://api.example.com
    tags:
      - APIs
      - Code
      - DevOps
      - Repositories
    properties:
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: GitLab API
            license:
              name: CC BY-SA 4.0
              url: https://gitlab.com/gitlab-org/gitlab/-/blob/master/LICENSE
          tags:
            - name: badges
              description: Operations about badges
            - name: branches
              description: Operations about branches
            - name: alert_management
              description: Operations about alert_managements
            - name: batched_background_migrations
              description: Operations about batched_background_migrations
            - name: admin
              description: Operations about admins
            - name: migrations
              description: Operations about migrations
            - name: applications
              description: Operations about applications
            - name: avatar
              description: Operations about avatars
            - name: broadcast_messages
              description: Operations about broadcast_messages
            - name: bulk_imports
              description: Operations about bulk_imports
            - name: application
              description: Operations about applications
            - name: access_requests
              description: Operations related to access requests
            - name: ci_lint
              description: Operations related to linting a CI config file
            - name: ci_resource_groups
              description: Operations to manage job concurrency with resource groups
            - name: ci_variables
              description: Operations related to CI/CD variables
            - name: cluster_agents
              description: Operations related to the GitLab agent for Kubernetes
            - name: clusters
              description: Operations related to clusters
            - name: composer_packages
              description: Operations related to Composer packages
            - name: conan_packages
              description: Operations related to Conan packages
            - name: container_registry
              description: Operations related to container registry
            - name: container_registry_event
              description: Operations related to container registry events
            - name: dashboard_annotations
              description: Operations related to dashboard annotations
            - name: debian_distribution
              description: Operations related to Debian Linux distributions
            - name: debian_packages
              description: Operations related to Debian Linux packages
            - name: dependency_proxy
              description: Operations to manage dependency proxy for a groups
            - name: deploy_keys
              description: Operations related to deploy keys
            - name: deploy_tokens
              description: Operations related to deploy tokens
            - name: deployments
              description: Operations related to deployments
            - name: dora_metrics
              description: >-
                Operations related to DevOps Research and Assessment (DORA) key
                metrics
            - name: environments
              description: Operations related to environments
            - name: error_tracking_client_keys
              description: Operations related to error tracking client keys
            - name: error_tracking_project_settings
              description: Operations related to error tracking project settings
            - name: feature_flags_user_lists
              description: Operations related to accessing GitLab feature flag user lists
            - name: feature_flags
              description: Operations related to feature flags
            - name: features
              description: Operations related to managing Flipper-based feature flags
            - name: freeze_periods
              description: Operations related to deploy freeze periods
            - name: generic_packages
              description: Operations related to Generic packages
            - name: geo
              description: Operations related to Geo
            - name: geo_nodes
              description: Operations related Geo Nodes
            - name: go_proxy
              description: Operations related to Go Proxy
            - name: group_export
              description: Operations related to exporting groups
            - name: group_import
              description: Operations related to importing groups
            - name: group_packages
              description: Operations related to group packages
            - name: helm_packages
              description: Operations related to Helm packages
            - name: integrations
              description: Operations related to integrations
            - name: issue_links
              description: Operations related to issue links
            - name: jira_connect_subscriptions
              description: Operations related to JiraConnect subscriptions
            - name: jobs
              description: Operations related to CI Jobs
            - name: maven_packages
              description: Operations related to Maven packages
            - name: merge_requests
              description: Operations related to merge requests
            - name: metadata
              description: Operations related to metadata of the GitLab instance
            - name: metrics_user_starred_dashboards
              description: Operations related to User-starred metrics dashboards
            - name: ml_model_registry
              description: Operations related to Model registry
            - name: npm_packages
              description: Operations related to NPM packages
            - name: nuget_packages
              description: Operations related to Nuget packages
            - name: package_files
              description: Operations about package files
            - name: plan_limits
              description: Operations related to plan limits
            - name: project_export
              description: Operations related to exporting projects
            - name: project_hooks
              description: Operations related to project hooks
            - name: project_import
              description: Operations related to importing projects
            - name: project_import_bitbucket
              description: Operations related to importing BitBucket projects
            - name: project_import_github
              description: Operations related to importing GitHub projects
            - name: project_packages
              description: Operations related to project packages
            - name: projects
              description: Operations related to projects
            - name: protected environments
              description: Operations related to protected environments
            - name: pypi_packages
              description: Operations related to PyPI packages
            - name: release_links
              description: Operations related to release assets (links)
            - name: releases
              description: Operations related to releases
            - name: resource_milestone_events
              description: Operations about resource milestone events
            - name: rpm_packages
              description: Operations related to RPM packages
            - name: rubygem_packages
              description: Operations related to RubyGems
            - name: suggestions
              description: Operations related to suggestions
            - name: system_hooks
              description: Operations related to system hooks
            - name: terraform_state
              description: Operations related to Terraform state files
            - name: terraform_registry
              description: Operations related to the Terraform module registry
            - name: unleash_api
              description: Operations related to Unleash API
          paths:
            /api/v4/groups/{id}/badges/{badge_id}:
              get:
                tags:
                  - badges
                summary: Gets a badge of a group.
                description: This feature was introduced in GitLab 10.6.
              put:
                tags:
                  - badges
                summary: Updates a badge of a group.
                description: This feature was introduced in GitLab 10.6.
              delete:
                tags:
                  - badges
                summary: Removes a badge from the group.
                description: This feature was introduced in GitLab 10.6.
            /api/v4/groups/{id}/badges:
              get:
                tags:
                  - badges
                summary: >-
                  Gets a list of group badges viewable by the authenticated
                  user.
                description: This feature was introduced in GitLab 10.6.
              post:
                tags:
                  - badges
                summary: Adds a badge to a group.
                description: This feature was introduced in GitLab 10.6.
            /api/v4/groups/{id}/badges/render:
              get:
                tags:
                  - badges
                summary: Preview a badge from a group.
                description: This feature was introduced in GitLab 10.6.
            /api/v4/groups/{id}/access_requests/{user_id}:
              delete:
                tags:
                  - access_requests
                summary: Denies an access request for the given user.
                description: This feature was introduced in GitLab 8.11.
            /api/v4/groups/{id}/access_requests/{user_id}/approve:
              put:
                tags:
                  - access_requests
                summary: Approves an access request for the given user.
                description: This feature was introduced in GitLab 8.11.
            /api/v4/groups/{id}/access_requests:
              get:
                tags:
                  - access_requests
                summary: Gets a list of access requests for a group.
                description: This feature was introduced in GitLab 8.11.
              post:
                tags:
                  - access_requests
                summary: Requests access for the authenticated user to a group.
                description: This feature was introduced in GitLab 8.11.
            /api/v4/projects/{id}/repository/merged_branches:
              delete:
                tags:
                  - branches
                description: Delete all merged branches
            /api/v4/projects/{id}/repository/branches/{branch}:
              get:
                tags:
                  - branches
                description: Get a single repository branch
              delete:
                tags:
                  - branches
                description: Delete a branch
              head:
                tags:
                  - branches
                description: Check if a branch exists
            /api/v4/projects/{id}/repository/branches:
              get:
                tags:
                  - branches
                description: Get a project repository branches
              post:
                tags:
                  - branches
                description: Create branch
            /api/v4/projects/{id}/repository/branches/{branch}/unprotect:
              put:
                tags:
                  - branches
                description: Unprotect a single branch
            /api/v4/projects/{id}/repository/branches/{branch}/protect:
              put:
                tags:
                  - branches
                description: Protect a single branch
            /api/v4/projects/{id}/badges/{badge_id}:
              get:
                tags:
                  - badges
                summary: Gets a badge of a project.
                description: This feature was introduced in GitLab 10.6.
              put:
                tags:
                  - badges
                summary: Updates a badge of a project.
                description: This feature was introduced in GitLab 10.6.
              delete:
                tags:
                  - badges
                summary: Removes a badge from the project.
                description: This feature was introduced in GitLab 10.6.
            /api/v4/projects/{id}/badges:
              get:
                tags:
                  - badges
                summary: >-
                  Gets a list of project badges viewable by the authenticated
                  user.
                description: This feature was introduced in GitLab 10.6.
              post:
                tags:
                  - badges
                summary: Adds a badge to a project.
                description: This feature was introduced in GitLab 10.6.
            /api/v4/projects/{id}/badges/render:
              get:
                tags:
                  - badges
                summary: Preview a badge from a project.
                description: This feature was introduced in GitLab 10.6.
            /api/v4/projects/{id}/access_requests/{user_id}:
              delete:
                tags:
                  - access_requests
                summary: Denies an access request for the given user.
                description: This feature was introduced in GitLab 8.11.
            /api/v4/projects/{id}/access_requests/{user_id}/approve:
              put:
                tags:
                  - access_requests
                summary: Approves an access request for the given user.
                description: This feature was introduced in GitLab 8.11.
            /api/v4/projects/{id}/access_requests:
              get:
                tags:
                  - access_requests
                summary: Gets a list of access requests for a project.
                description: This feature was introduced in GitLab 8.11.
              post:
                tags:
                  - access_requests
                summary: Requests access for the authenticated user to a project.
                description: This feature was introduced in GitLab 8.11.
            /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}:
              put:
                tags:
                  - alert_management
                description: Update a metric image for an alert
              delete:
                tags:
                  - alert_management
                description: Remove a metric image for an alert
            /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images:
              get:
                tags:
                  - alert_management
                description: Metric Images for alert
              post:
                tags:
                  - alert_management
                description: Upload a metric image for an alert
            /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/authorize:
              post:
                tags:
                  - alert_management
                description: Workhorse authorize metric image file upload
            /api/v4/admin/batched_background_migrations/{id}:
              get:
                tags:
                  - batched_background_migrations
                description: Retrieve a batched background migration
            /api/v4/admin/batched_background_migrations:
              get:
                tags:
                  - batched_background_migrations
                description: Get the list of batched background migrations
            /api/v4/admin/batched_background_migrations/{id}/resume:
              put:
                tags:
                  - batched_background_migrations
                description: Resume a batched background migration
            /api/v4/admin/batched_background_migrations/{id}/pause:
              put:
                tags:
                  - batched_background_migrations
                description: Pause a batched background migration
            /api/v4/admin/ci/variables/{key}:
              get:
                tags:
                  - ci_variables
                description: Get the details of a specific instance-level variable
              put:
                tags:
                  - ci_variables
                description: Update an instance-level variable
              delete:
                tags:
                  - ci_variables
                description: Delete an existing instance-level variable
            /api/v4/admin/ci/variables:
              get:
                tags:
                  - ci_variables
                description: List all instance-level variables
              post:
                tags:
                  - ci_variables
                description: Create a new instance-level variable
            /api/v4/admin/databases/{database_name}/dictionary/tables/{table_name}:
              get:
                tags:
                  - admin
                description: Retrieve dictionary details
            /api/v4/admin/clusters/{cluster_id}:
              get:
                tags:
                  - clusters
                summary: Get a single instance cluster
                description: >-
                  This feature was introduced in GitLab 13.2. Returns a single
                  instance cluster.
              put:
                tags:
                  - clusters
                summary: Edit instance cluster
                description: >-
                  This feature was introduced in GitLab 13.2. Updates an
                  existing instance cluster.
              delete:
                tags:
                  - clusters
                summary: Delete instance cluster
                description: >-
                  This feature was introduced in GitLab 13.2. Deletes an
                  existing instance cluster. Does not remove existing resources
                  within the connected Kubernetes cluster.
            /api/v4/admin/clusters/add:
              post:
                tags:
                  - clusters
                summary: Add existing instance cluster
                description: >-
                  This feature was introduced in GitLab 13.2. Adds an existing
                  Kubernetes instance cluster.
            /api/v4/admin/clusters:
              get:
                tags:
                  - clusters
                summary: List instance clusters
                description: >-
                  This feature was introduced in GitLab 13.2. Returns a list of
                  instance clusters.
            /api/v4/admin/migrations/{timestamp}/mark:
              post:
                tags:
                  - migrations
                description: Mark the migration as successfully executed
            /api/v4/applications/{id}:
              delete:
                tags:
                  - applications
                summary: Delete an application
                description: Delete a specific application
            /api/v4/applications:
              get:
                tags:
                  - applications
                summary: Get applications
                description: List all registered applications
              post:
                tags:
                  - applications
                summary: Create a new application
                description: This feature was introduced in GitLab 10.5
            /api/v4/avatar:
              get:
                tags:
                  - avatar
                description: Return avatar url for a user
            /api/v4/broadcast_messages/{id}:
              get:
                tags:
                  - broadcast_messages
                summary: Get a specific broadcast message
                description: This feature was introduced in GitLab 8.12.
              put:
                tags:
                  - broadcast_messages
                summary: Update a broadcast message
                description: This feature was introduced in GitLab 8.12.
              delete:
                tags:
                  - broadcast_messages
                summary: Delete a broadcast message
                description: This feature was introduced in GitLab 8.12.
            /api/v4/broadcast_messages:
              get:
                tags:
                  - broadcast_messages
                summary: Get all broadcast messages
                description: This feature was introduced in GitLab 8.12.
              post:
                tags:
                  - broadcast_messages
                summary: Create a broadcast message
                description: This feature was introduced in GitLab 8.12.
            /api/v4/bulk_imports/{import_id}/entities/{entity_id}:
              get:
                tags:
                  - bulk_imports
                summary: Get GitLab Migration entity details
                description: This feature was introduced in GitLab 14.1.
            /api/v4/bulk_imports/{import_id}/entities:
              get:
                tags:
                  - bulk_imports
                summary: List GitLab Migration entities
                description: This feature was introduced in GitLab 14.1.
            /api/v4/bulk_imports/{import_id}:
              get:
                tags:
                  - bulk_imports
                summary: Get GitLab Migration details
                description: This feature was introduced in GitLab 14.1.
            /api/v4/bulk_imports/entities:
              get:
                tags:
                  - bulk_imports
                summary: List all GitLab Migrations' entities
                description: This feature was introduced in GitLab 14.1.
            /api/v4/bulk_imports:
              get:
                tags:
                  - bulk_imports
                summary: List all GitLab Migrations
                description: This feature was introduced in GitLab 14.1.
              post:
                tags:
                  - bulk_imports
                summary: Start a new GitLab Migration
                description: This feature was introduced in GitLab 14.2.
            /api/v4/application/appearance:
              get:
                tags:
                  - application
                description: Get the current appearance
              put:
                tags:
                  - application
                description: Modify appearance
            /api/v4/application/plan_limits:
              get:
                tags:
                  - plan_limits
                summary: Get current plan limits
                description: List the current limits of a plan on the GitLab instance.
              put:
                tags:
                  - plan_limits
                summary: Change plan limits
                description: Modify the limits of a plan on the GitLab instance.
            /api/v4/metadata:
              get:
                tags:
                  - metadata
                summary: Retrieve metadata information for this GitLab instance
                description: This feature was introduced in GitLab 15.2.
            /api/v4/version:
              get:
                tags:
                  - metadata
                summary: Retrieves version information for the GitLab instance
                description: >-
                  This feature was introduced in GitLab 8.13 and deprecated in
                  15.5. We recommend you instead use the Metadata API.
            /api/v4/projects/{id}/jobs:
              get:
                tags:
                  - jobs
                summary: List jobs for a project
            /api/v4/projects/{id}/jobs/{job_id}:
              get:
                tags:
                  - jobs
                summary: Get a single job by ID
            /api/v4/projects/{id}/jobs/{job_id}/play:
              post:
                tags:
                  - jobs
                summary: Run a manual job
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html#authentication
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html#status-codes
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html#third-party-clients
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html#rate-limits
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-license-info
              message: License Object
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-tags-description-info
              message: Tag Descriptions
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-api-in-path-info
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-request-body-on-put-error-info
              message: Request Body PUT
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-201-media-type-warn
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/gitlab-openapi-original.yml
      - type: API Evangelist Ratings
        url: overlays/gitlab-openapi-api-evangelist-ratings.yaml
    aid: gitlab:gitlab-rest-api
  - name: GitLab GraphQL API
    description: >-
      GraphQL is a query language for APIs. You can use it to request the exact
      data you need, and therefore limit the number of requests you need.
      GraphQL data is arranged in types, so your client can use client-side
      GraphQL libraries to consume the API and avoid manual parsing. There are
      no fixed endpoints and no data model, so you can add to the API without
      creating breaking changes. This enables us to have a versionless API.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.gitlab.com/ee/api/graphql/
    baseURL: https://api.example.com
    tags:
      - APIs
      - Code
      - DevOps
      - Repositories
    properties:
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/graphql/
      - type: OpenAPI
        url: >-
          https://docs.gitlab.com/ee/api/graphql/#deprecation-and-removal-process
      - type: OpenAPI
        url: >-
          https://docs.gitlab.com/ee/api/graphql/#deprecation-and-removal-process
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/graphql/#limits
    overlays: []
    aid: gitlab:gitlab-graphql-api
common:
  - type: Terms of Service
    url: https://about.gitlab.com/terms/
  - type: Privacy Policy
    url: https://about.gitlab.com/privacy/
  - type: Contact
    url: https://about.gitlab.com/company/contact/
  - type: IDE
    url: https://docs.gitlab.com/ee/editor_extensions/
  - type: Whats New
    url: https://about.gitlab.com/releases/categories/releases/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: gitlab
---