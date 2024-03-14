---
name: Factset
description: >-
  FactSet APIs connect applications and workflows to an extensive universe of
  content and functionality.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: >-
  https://raw.githubusercontent.com/apis-json/artisanal/main/apis/factset/apis.yml
created: 2024/03/02
modified: 2024/03/02
specificationVersion: '0.17'
tags:
  - Financial
apis:
  - name: Factset PA Engine API
    description: >-
      Through the PA Engine API, request analytics for multi-asset class
      performance, attribution, and risk, including the flexibility of choosing
      your portfolio, benchmark, return period, and more.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/pa-engine-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#changelog
      - type: OpenAPI
        url: properties/pa-engine-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: PA Engine API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /analytics/lookups/v3/accounts/{path}:
              get:
                tags:
                  - Accounts
                summary: Get accounts and sub-directories in a directory
                description: >-
                  This endpoint looks up all ACCT and ACTM files and
                  sub-directories in a given directory.
            /analytics/engines/pa/v3/columns:
              get:
                tags:
                  - Columns
                summary: Get PA columns
                description: >-
                  This endpoint lists all the PA columns that can be applied to
                  a calculation.
            /analytics/engines/pa/v3/columns/{id}:
              get:
                tags:
                  - Columns
                summary: Get PA column settings
                description: This endpoint returns the default settings of a PA column.
            /analytics/engines/pa/v3/columnstatistics:
              get:
                tags:
                  - ColumnStatistics
                summary: Get PA column statistics
                description: >-
                  This endpoint lists all the column statistics that can be
                  applied to a PA column.
            /analytics/engines/pa/v3/components:
              get:
                tags:
                  - Components
                summary: Get PA components
                description: >-
                  This endpoint returns the list of PA components in a given PA
                  document.
            /analytics/engines/pa/v3/components/{id}:
              get:
                tags:
                  - Components
                summary: Get PA component by id
                description: This endpoint returns the default settings of a PA component.
            /analytics/lookups/v3/currencies:
              get:
                tags:
                  - Currencies
                summary: Get currencies
                description: >-
                  This endpoint lists all the currencies that can be applied to
                  any calculation.
            /analytics/engines/pa/v3/dates:
              get:
                tags:
                  - Dates
                summary: Convert PA dates to absolute format
                description: >-
                  This endpoint converts the given start and end dates in
                  FactSet date format to yyyymmdd format for a PA calculation.
                  For more information on FactSet date format, please refer to
                  the PA Engine API documentation under the 'API Documentation'
                  section in the developer portal.
            /analytics/engines/pa/v3/documents/{path}:
              get:
                tags:
                  - Documents
                summary: Get PA3 documents and sub-directories in a directory
                description: >-
                  This endpoint looks up all PA3 documents and sub-directories
                  in a given directory.
            /analytics/engines/pa/v3/frequencies:
              get:
                tags:
                  - Frequencies
                summary: Get PA frequencies
                description: >-
                  This endpoint lists all the frequencies that can be applied to
                  a PA calculation.
            /analytics/engines/pa/v3/groups:
              get:
                tags:
                  - Groups
                summary: Get PA groups
                description: >-
                  This endpoint lists all the PA groups that can be applied to a
                  PA calculation.
            /analytics/engines/pa/v3/grouping-frequencies:
              get:
                tags:
                  - Groups
                summary: Get PA grouping frequencies
                description: >-
                  This endpoint lists all the PA grouping frequencies that can
                  be applied to a PA calculation.
            /analytics/engines/pa/v3/linked-templates:
              post:
                tags:
                  - LinkedPATemplates
                summary: Create a linked PA template
                description: "This endpoint creates a template from an **existing portfolio analysis tile**, allowing the user to replicate and fetch reports settings.\r\n\r\nRemarks:\r\n\r\n*   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary. \r\n    If no mandatory fields are passed, then we can use the template as a component and skip the component creation.\r\n    \r\n*   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"datasources\", \"dates\", \"currencyisocode\" and \"componentdetail\".\r\n\r\n*   We cannot override the Locked fields when creating the Component.\r\n\r\n*   Mandatory and locked strings are mutually exclusive.\r\n\r\n*   Multi-horizon frequencies are not supported through this endpoint."
              get:
                tags:
                  - LinkedPATemplates
                summary: Get linked PA templates
                description: >-
                  This endpoint returns the list of linked PA templates in given
                  path.
            /analytics/engines/pa/v3/linked-templates/{id}:
              put:
                tags:
                  - LinkedPATemplates
                summary: Update a linked PA template
                description: "This endpoint allows the user to change the request body and description from an existing template.\r\n\r\nRemarks:\r\n\r\n*   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary. \r\n    If no mandatory fields are passed, then we can use the template as a component and skip the component creation.\r\n    \r\n*   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"datasources\", \"dates\", \"currencyisocode\" and \"componentdetail\".\r\n\r\n*   We cannot override the Locked fields when creating the Component.\r\n\r\n*   Mandatory and locked strings are mutually exclusive.\r\n\r\n*   Multi-horizon frequencies are not supported through this endpoint."
              delete:
                tags:
                  - LinkedPATemplates
                summary: Delete a linked PA template.
                description: This endpoint deletes an existing linked PA template.
              get:
                tags:
                  - LinkedPATemplates
                summary: Get linked PA template by id
                description: This endpoint fetches the linked PA template settings.
            /analytics/engines/pa/v3/calculations:
              post:
                tags:
                  - PACalculations
                summary: Create and Run PA calculation
                description: "This endpoint runs the PA calculation specified in the POST body parameters.\r\nIt can take one or more calculation units as input.\r\n\r\nRemarks:\r\n\r\n*\tAny settings in POST body will act as a one-time override over the settings saved in the PA template.\r\n\r\n*   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account. \r\n    Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System), \r\n    VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H. \r\n\r\n*   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding \r\n    the default frequency of the Beginning of Period to whatever we pass in the request body.\r\n    \r\n*   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.\r\n\r\n*   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.\r\n    Additionally, while 'groupsall' returns all the group levels in the PA component,\r\n    setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component."
              get:
                tags:
                  - PACalculations
                summary: Get all calculations
                description: This endpoints returns all calculation requests.
            /analytics/engines/pa/v3/calculations/{id}:
              put:
                tags:
                  - PACalculations
                summary: Create or Update PA calculation and run it.
                description: "This endpoint updates and run the PA calculation specified in the PUT body parameters. This also allows creating new PA calculations with custom ids.\r\nIt can take one or more calculation units as input.\r\n\r\nRemarks:\r\n\r\n*\tAny settings in PUT body will act as a one-time override over the settings saved in the PA template.\r\n\r\n*   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account. \r\n    Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System), \r\n    VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H.\r\n\r\n*   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding \r\n    the default frequency of the Beginning of Period to whatever we pass in the request body.\r\n    \r\n*   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.\r\n\r\n*   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.\r\n    Additionally, while 'groupsall' returns all the group levels in the PA component,\r\n    setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component."
              get:
                tags:
                  - PACalculations
                summary: Get PA calculation parameters by id
                description: >-
                  This is the endpoint that returns the calculation parameters
                  passed for a calculation.
              delete:
                tags:
                  - PACalculations
                summary: Cancel PA calculation by id
                description: >-
                  This is the endpoint to cancel a previously submitted
                  calculation.
            /analytics/engines/pa/v3/calculations/{id}/status:
              get:
                tags:
                  - PACalculations
                summary: Get PA calculation status by id
                description: "This is the endpoint to check on the progress of a previously requested calculation.\r\nIf the calculation has finished computing, the location header will point to the result url.\r\nOtherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage."
            /analytics/engines/pa/v3/calculations/{id}/units/{unitId}/result:
              get:
                tags:
                  - PACalculations
                summary: Get PA calculation result by id
                description: "This is the endpoint to get the result of a previously requested calculation.\r\nIf the calculation has finished computing, the body of the response will contain the requested document in JSON."
            /analytics/engines/pa/v3/pricing-sources:
              get:
                tags:
                  - PricingSources
                summary: Get PA pricing sources
                description: >-
                  This endpoint lists all the PA pricing sources that can be
                  applied to a PA calculation.
            /analytics/engines/pa/v3/templated-components:
              post:
                tags:
                  - TemplatedPAComponents
                summary: Create templated PA component
                description: "This endpoint creates new component based off of linked PA template or unlinked PA template.\r\n\r\nRemarks:\r\n\r\n*   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.\r\n\r\n*   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account. \r\n    Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System), \r\n    VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H.\r\n\r\n*   Multi-horizon frequencies are not supported through this endpoint.\r\n\r\n*   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.\r\n    Additionally, while 'groupsall' returns all the group levels in the PA component,\r\n    setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component.\r\n\r\n*   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding \r\n    the default frequency of the Beginning of Period to whatever we pass in the request body.\r\n    \r\n*   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component."
              get:
                tags:
                  - TemplatedPAComponents
                summary: Get templated PA components in path
                description: >-
                  This endpoint returns the list of templated PA components in
                  path.
            /analytics/engines/pa/v3/templated-components/{id}:
              put:
                tags:
                  - TemplatedPAComponents
                summary: Update templated PA component
                description: "This endpoint allows the user to change the request body from an existing templated PA component.\r\n\r\nRemarks:\r\n\r\n*   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.\r\n\r\n*   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account. \r\n    Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System), \r\n    VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H. \r\n\r\n*   Multi-horizon frequencies are not supported through this endpoint.\r\n\r\n*   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.\r\n    Additionally, while 'groupsall' returns all the group levels in the PA component,\r\n    setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component.\r\n\r\n*   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding \r\n    the default frequency of the Beginning of Period to whatever we pass in the request body.\r\n    \r\n*   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component."
              get:
                tags:
                  - TemplatedPAComponents
                summary: Get templated PA component by id
                description: This endpoint fetches the templated PA component settings.
              delete:
                tags:
                  - TemplatedPAComponents
                summary: Delete templated PA component
                description: This endpoint deletes an existing templated PA component
            /analytics/engines/pa/v3/unlinked-templates:
              post:
                tags:
                  - UnlinkedPATemplates
                summary: Create unlinked PA template
                description: "This endpoint creates a template which is not linked to any specific PA3 tile. \r\n\r\nRemarks:\r\n\r\n*   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary. \r\n    If no mandatory fields are passed, then we can use the template as a component and skip the component creation.\r\n    \r\n*   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"datasources\", \"dates\", \"currencyisocode\" and \"componentdetail\".\r\n\r\n*   We cannot override the Locked fields when creating the Component.\r\n\r\n*   Mandatory and locked strings are mutually exclusive.\r\n\r\n*   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.\r\n\r\n*   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account. \r\n    Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System), \r\n    VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H.\r\n\r\n*   Multi-horizon frequencies are not supported through this endpoint.\r\n\r\n*   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.\r\n    Additionally, while 'groupsall' returns all the group levels in the PA component,\r\n    setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component.\r\n\r\n*   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also \r\n    overriding the default frequency of the Beginning of Period to whatever we pass in the request body.\r\n    \r\n*   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component."
              get:
                tags:
                  - UnlinkedPATemplates
                summary: Get unlinked PA templates
                description: This endpoint returns the list of unlinked PA templates.
            /analytics/engines/pa/v3/unlinked-templates/{id}:
              put:
                tags:
                  - UnlinkedPATemplates
                summary: Update unlinked PA template
                description: "This endpoint updates an existing unlinked PA template.\r\n\r\nRemarks:\r\n            \r\n*   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary. \r\n    If no mandatory fields are passed, then we can use the template as a component and skip the component creation.\r\n    \r\n*   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"datasources\", \"dates\", \"currencyisocode\" and \"componentdetail\".\r\n\r\n*   We cannot override the Locked fields when creating the Component.\r\n\r\n*   Mandatory and locked strings are mutually exclusive.\r\n\r\n*   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.\r\n\r\n*   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account. \r\n    Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System), \r\n    VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H.\r\n\r\n*   Multi-horizon frequencies are not supported through this endpoint.\r\n\r\n*   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.\r\n    Additionally, while 'groupsall' returns all the group levels in the PA component,\r\n    setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component.\r\n\r\n*   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding \r\n    the default frequency of the Beginning of Period to whatever we pass in the request body.\r\n    \r\n*   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component."
              delete:
                tags:
                  - UnlinkedPATemplates
                summary: Delete unlinked PA template
                description: This endpoint deletes an existing unliked PA template.
              get:
                tags:
                  - UnlinkedPATemplates
                summary: Get unlinked PA template details by id
                description: This endpoint fetches the template settings.
            /analytics/engines/pa/v3/unlinked-templates/template-types:
              get:
                tags:
                  - UnlinkedPATemplates
                summary: Get default unlinked PA template types.
                description: This endpoint fetches default unlinked PA template types.
            /analytics/engines/pa/v3/unlinked-templates/template-types/{id}:
              get:
                tags:
                  - UnlinkedPATemplates
                summary: Get unlinked PA template type details by id.
                description: This endpoint fetches the unlinked PA template type details.
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/pa-
    overlays:
      - type: APIs.io Search
        url: overlays/pa-engine-openapi-search.yml
    aid: factset:factset-pa-engine-api
  - name: Factset Formula API
    description: >-
      Use FactSet’s flexible, formula-based API to retrieve data from almost all
      available content sets FactSet offers through FactSet's FQL and Screening
      formulas.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/formula-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#changelog
      - type: OpenAPI
        url: properties/formula-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Formula API
          paths:
            /v1/time-series:
              get:
                summary: >-
                  Retrieve data items (FQL formulas) for a list of identifiers
                  or defined universe.
                description: >
                  The `/time-series` endpoint is closely aligned with FactSet’s
                  powerful data retrieval language **FactSet Query Language
                  (FQL)** which is optimized for time-series analysis. FQL can
                  also perform sophisticated statistical, mathematical, logical,
                  and other complex operations on the data.

                    This endpoint has a unique **TIMESERIES** data object that pairs the requested data with FactSet provided dates. This helps reduce the need for additional data requests and reduces the work required by users.

                  The `/time-series` endpoint supports Long Running asynchronous
                  requests up to **20 minutes** via the `batch` parameter. *This
                  feature is available to Individual Users subscribed to the
                  Performance Package and Performance Package Plus Performance
                  Tiers and all Production Users. If you are unsure which
                  Performance Tier you are subscribed to or you would like to
                  gain access to the batch capabilities, please contact your
                  FactSet Account Team or "Report Issue" above and our support
                  teams can assist.*
                tags:
                  - Time-Series
              post:
                summary: >-
                  Retrieve data items (FQL formulas) for a list of identifiers
                  or defined universe.
                description: >
                  The `/time-series` endpoint is closely aligned with FactSet’s
                  powerful data retrieval language **FactSet Query Language
                  (FQL)** which is optimized for time-series analysis. FQL can
                  also perform sophisticated statistical, mathematical, logical,
                  and other complex operations on the data.

                    This endpoint has a unique **TIMESERIES** data object that pairs the requested data with FactSet provided dates. This helps reduce the need for additional data requests and reduces the work required by users.

                  The `/time-series` endpoint supports Long Running asynchronous
                  requests up to **20 minutes** via the `batch` parameter. *This
                  feature is available to Individual Users subscribed to the
                  Performance Package and Performance Package Plus Performance
                  Tiers and all Production Users. If you are unsure which
                  Performance Tier you are subscribed to or you would like to
                  gain access to the batch capabilities, please contact your
                  FactSet Account Team or "Report Issue" above and our support
                  teams can assist.*
                tags:
                  - Time-Series
            /v1/cross-sectional:
              get:
                summary: >-
                  Retrieve data items (Screening formulas) for a list of
                  identifiers or defined universe.
                description: >
                  The `/cross-sectional` endpoint is closely aligned with
                  FactSet’s powerful data retrieval **Screening language** which
                  is optimized for analysis of data items at single point in
                  time for different entities and is extremely efficient for
                  large universes.



                  The `/cross-sectional` endpoint supports Long Running
                  asynchronous requests up to **10 minutes** via the `batch`
                  parameter. *This feature is available to Individual Users
                  subscribed to the Performance Package and Performance Package
                  Plus Performance Tiers and all Production Users. If you are
                  unsure which Performance Tier you are subscribed to or you
                  would like to gain access to the batch capabilities, please
                  contact your FactSet Account Team or "Report Issue" above and
                  our support teams can assist.*


                  ***


                  ### Iterated Cross-Sectional Functionality



                  This endpoint supports the ability to automatically iterate
                  through different cross sections over time. The **Iterated
                  Cross-Sectional Functionality (ICSF)** expands the
                  Cross-Sectional endpoint to support retrieving data items for
                  *multiple dates*, allowing users to take advantage of the
                  Screening engine’s efficiency even when history is required. 



                  Use the parameters `startDate`, `endDate`, and `frequency` in
                  the Cross-Sectional endpoint to provide your desired dates.
                  Specify “0” in date argument of the Screening formulas
                  provided in the formulas parameter and/or the universe
                  parameter. Lastly, the Iterated Cross-Sectional Functionality
                  is required to run as a `batch` request. Therefore, the batch
                  parameter must be set to “Y”. 



                  Access to backtesting and batch functionality is required to
                  leverage the Iterated Cross-Sectional Functionality. 


                  **When to use ICSF:**


                  The ICSF can offer better performance than Time-Series
                  requests when the date range is relatively small, and so it is
                  recommended to use ICSF if the number of IDs requested is
                  greater than the number of dates. If the number of dates is
                  greater than the number of IDs in the request, it is
                  recommended to use Time-Series.


                  *Note: This is a general rule of thumb and performance may
                  vary depending on the formulas in use.*
                tags:
                  - Cross-Sectional
              post:
                summary: >-
                  Retrieve data items (Screening formulas) for a list of
                  identifiers or defined universe.
                description: >
                  The `/cross-sectional` endpoint is closely aligned with
                  FactSet’s powerful data retrieval **Screening language** which
                  is optimized for analysis of data items at single point in
                  time for different entities and is extremely efficient for
                  large universes.



                  The `/cross-sectional` endpoint supports Long Running
                  asynchronous requests up to **10 minutes** via the `batch`
                  parameter. *This feature is available to Individual Users
                  subscribed to the Performance Package and Performance Package
                  Plus Performance Tiers and all Production Users. If you are
                  unsure which Performance Tier you are subscribed to or you
                  would like to gain access to the batch capabilities, please
                  contact your FactSet Account Team or "Report Issue" above and
                  our support teams can assist.*


                  ***


                  ### Iterated Cross-Sectional Functionality



                  This endpoint supports the ability to automatically iterate
                  through different cross sections over time. The **Iterated
                  Cross-Sectional Functionality (ICSF)** expands the
                  Cross-Sectional endpoint to support retrieving data items for
                  *multiple dates*, allowing users to take advantage of the
                  Screening engine’s efficiency even when history is required. 



                  Use the parameters `startDate`, `endDate`, and `frequency` in
                  the Cross-Sectional endpoint to provide your desired dates.
                  Specify “0” in date argument of the Screening formulas
                  provided in the formulas parameter and/or the universe
                  parameter. Lastly, the Iterated Cross-Sectional Functionality
                  is required to run as a `batch` request. Therefore, the batch
                  parameter must be set to “Y”. 



                  Access to backtesting and batch functionality is required to
                  leverage the Iterated Cross-Sectional Functionality. 


                  **When to use ICSF:**


                  The ICSF can offer better performance than Time-Series
                  requests when the date range is relatively small, and so it is
                  recommended to use ICSF if the number of IDs requested is
                  greater than the number of dates. If the number of dates is
                  greater than the number of IDs in the request, it is
                  recommended to use Time-Series. 


                  *Note: This is a general rule of thumb and performance may
                  vary depending on the formulas in use.*
                tags:
                  - Cross-Sectional
            /v1/batch-status:
              get:
                summary: Returns the status for a Batch Request
                description: >
                  Return the status for the underlying batch request that is
                  specified by the id.

                    The Formula API supports Long Running asynchronous requests up to **20 minutes** via the `batch` parameter in the `/time-series` endpoint and up to **10 minutes** in the `/cross-sectional` endpoint.

                    *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or "Report Issue" above and our support teams can assist.*
                tags:
                  - Batch Processing
              post:
                summary: Returns the status for a Batch Request
                description: >
                  Return the status for the underlying batch request that is
                  specified by the id.

                    The Formula API supports Long Running asynchronous requests up to **20 minutes** via the `batch` parameter in the `/time-series` endpoint and up to **10 minutes** in the `/cross-sectional` endpoint.

                    *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or "Report Issue" above and our support teams can assist.*
                tags:
                  - Batch Processing
            /v1/batch-result:
              get:
                summary: Returns the response for a Batch Request
                description: >
                  Returns the response data for the underlying batch request
                  that is specified by the id.

                    The Formula API supports Long Running asynchronous requests up to **20 minutes** via the `batch` parameter in the `/time-series` endpoint and up to **10 minutes** in the `/cross-sectional` endpoint.

                    *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or "Report Issue" above and our support teams can assist.*
                tags:
                  - Batch Processing
              post:
                summary: Returns the status for a Batch Request
                description: >
                  Returns the response data for the underlying batch request
                  that is specified by the id.

                    The Formula API supports Long Running asynchronous requests up to **20 minutes** via the `batch` parameter in the `/time-series` endpoint and up to **10 minutes** in the `/cross-sectional` endpoint.

                    *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or "Report Issue" above and our support teams can assist.*
                tags:
                  - Batch
    overlays:
      - type: APIs.io Search
        url: overlays/formula-openapi-search.yml
    aid: factset:factset-formula-api
  - name: FactSet Global Prices API
    description: >-
      FactSet Global Prices API currently covers listing and composite level
      prices, volume, turnover, and VWAP data on a seven day week basis for a
      global equity universe.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-global-prices-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#changelog
      - type: OpenAPI
        url: properties/global-prices-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Global Prices API
          tags:
            - name: Prices
              description: >-
                Get Security Open, High, Low, Close, Volume for a list of ids
                and date range
            - name: Returns
              description: >-
                Gets the returns data for the list of ids, date range and
                currency
          paths:
            /factset-global-prices/v1/prices:
              get:
                tags:
                  - Prices
                summary: >-
                  Gets end-of-day Open, High, Low, Close for a list of
                  securities.
                description: >
                  Gets security prices', Open, High, Low, Close, Volume, VWAP,
                  Trade Count, and Turn Over for a specified list of securities,
                  date range, currency, and adjustment factors.
              post:
                tags:
                  - Prices
                summary: >-
                  Requests end-of-day Open, High, Low, Close for a large list of
                  securities.
                description: >-
                  Gets security prices', Open, High, Low, Close, Volume, VWAP,
                  Trade Count, and Turn Over for a specified list of securities,
                  date range, currency, and adjustment factors.
            /factset-global-prices/v1/corporate-actions:
              get:
                tags:
                  - Corporate Actions
                summary: Gets Corporate Actions information.
                description: >
                  Gets the Corporate Actions amounts, dates, types, and flags
                  over a specified date range.

                  You may request future dates to receive information for
                  declared events.


                  Event Categories:

                  * __Cash Dividends__ (CASH_DIVS)
                    * **DVC** - Dividend
                    * **DVCD** - Dividend with DRP Option
                    * **DRP** - Dividend Reinvestment
                  * __Stock Distributions__ (STOCK_DIST)
                    * **DVS** - Stock Dividend
                    * **DVSS** - Stock Dividend, Special
                    * **BNS** - Bonus Issue
                    * **BNSS** - Bonus Issue, Special
                  * __Spin Offs__ (SPINOFFS)
                    * **SPO** - Spin Off
                  * __Rights Issue__ (RIGHTS)
                    * **DSR** - Rights Issue
                  * __Splits__ (SPLITS)
                    * **FSP** - Forward Split
                    * **RSP** - Reverse Split
                    * **SPL** - Split
                    * **EXOS** - Exchange of Securities
              post:
                tags:
                  - Corporate Actions
                summary: Requests Corporate Actions information.
                description: >-
                  Gets the Corporate Actions amounts, dates, types, and flags
                  over a specified date range. You may request future dates to
                  receive information for declared events. <p>**_startDate and
                  endDate are required parameters. The input startDate must come
                  before the input endDate._**
            /factset-global-prices/v1/annualized-dividends:
              get:
                tags:
                  - Corporate Actions
                summary: Gets Indicated Annualized Dividend information.
                description: >
                  Gets the Annualized dividend of the latest reported dividend.

                  The annualized dividend calculations does not involve
                  cancelled dividends.
              post:
                tags:
                  - Corporate Actions
                summary: Gets Indicated Annualized Dividend information.
                description: >-
                  Gets the Annualized dividend of the latest reported dividend.
                  The annualized dividend calculations does not involve
                  cancelled dividends.
            /factset-global-prices/v1/returns:
              get:
                tags:
                  - Returns
                summary: Gets Returns for a list of `ids` as of given date range.
                description: >
                  Returns for the requested ids and currency for the given
                  dates. Depending on the input parameters the return data is
                  provided. 
              post:
                tags:
                  - Returns
                summary: Gets Returns for a list of `ids` as of given date range.
                description: >-
                  Returns for the requested ids and currency for the given
                  dates. Depending on the input parameters the return data is
                  provided.
            /factset-global-prices/v1/security-shares:
              get:
                tags:
                  - Shares Outstanding
                summary: Gets Shares Outstanding information for securities.
                description: >-
                  Returns security level shares outstanding data for the given
                  ids and dates. At this time, all values returned are split
                  adjusted.
              post:
                tags:
                  - Shares Outstanding
                summary: Gets Shares Outstanding information for securities.
                description: >-
                  Returns security level shares outstanding data for the given
                  ids and dates. At this time, all values returned are split
                  adjusted.
            /factset-global-prices/v1/batch-status:
              get:
                tags:
                  - Batch Processing
                summary: |
                  Returns the status for a Batch Request
                description: >-
                  Return the status for the underlying batch request that is
                  specified by the id.
            /factset-global-prices/v1/batch-result:
              get:
                tags:
                  - Batch Processing
                summary: |
                  Returns the response for a Batch Request
                description: >
                  Returns the response data for the underlying batch request
                  that is specified by the id.


                  By default, this endpoint will return data as JSON. If you
                  wish to receive your data in CSV format, you can edit the
                  header to have the "accept" parameter as "text/csv" instead of
                  "applicat
    overlays:
      - type: APIs.io Search
        url: overlays/global-prices-openapi-search.yml
    aid: factset:factset-global-prices-api
  - name: Open FactSet Database (OFDB) API
    description: >-
      Through Open FactSet Database (OFDB) API, users can create, modify and
      view non portfolio databases.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/ofdb-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#changelog
      - type: OpenAPI
        url: properties/ofdb-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: OFDB API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          tags:
            - name: Add
              description: Add new data to a database
            - name: Create
              description: Create a new database
            - name: Delete
              description: Delete data from a database
            - null
            - name: Long Running
              description: Secondary helper routes for long running requests
            - name: Updates
              description: Update existing data in a database
          paths:
            /database/jobs/{id}/status:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the current status of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  long running response.
            /database/{path}/audit:
              get:
                tags:
                  - Get
                description: >-
                  Returns a list of the most recent "modificationTimes" in long
                  datetime format
            /database/{path}/audit/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
            /database/{path}/stats:
              get:
                tags:
                  - Get
                description: Returns a summary of OFDB metadata and data points
            /database/{path}/stats/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
            /database/{path}/fields:
              get:
                tags:
                  - Get
                description: >-
                  Returns all the fields in the database(OFDB, OMS_OFDB,
                  ECONOFDB)
              post:
                tags:
                  - Add
                description: Allows users to add fields to existing OFDBs
            /database/{path}/fields/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
            /database/{path}/delete:
              post:
                tags:
                  - Delete
                description: >-
                  Allows users to delete various combinations of symbols, dates,
                  and fields from the desired OFDB
            /database/{path}/delete/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
            /database/{path}/symbols:
              get:
                tags:
                  - Get
                description: >-
                  Returns all the symbols in the database(OFDB, OMS_OFDB,
                  ECONOFDB)
              post:
                tags:
                  - Add
                description: >-
                  Creates a new symbol with single/multiple dates for 3d
                  database(OFDB). Creates a symbol for 2d database(OFDB)
              put:
                tags:
                  - Update
                description: >-
                  Updates existing symbols for single/multiple dates or adds a
                  new symbol/date within a symbol if not present in 3d
                  database(OFDB). Updates an existing symbol field value or adds
                  a new symbol if not present in the 2d database(OFDB)
            /database/{path}/symbols/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
            /database/{path}/symbols/{symbol}:
              put:
                tags:
                  - Update
                description: >-
                  Updates an existing symbol field value for single/multiple
                  dates or adds a new symbol/date within a symbol if not present
                  in 3d database(OFDB). Updates an existing symbol field value
                  or adds a new symbol if not present in the 2d database(OFDB)
              delete:
                tags:
                  - Delete
                description: >-
                  Deletes all data specific to the symbol in both 2d and 3d
                  database(OFDB). This includes all the dates related to that
                  symbols in 3d database(OFDB)
            /database/{path}/symbols/{symbol}/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
            /database/{path}/dates:
              get:
                tags:
                  - Get
                description: >-
                  Returns all the dates in the database(OFDB, OMS_OFDB,
                  ECONOFDB)
              post:
                tags:
                  - Add
                description: >-
                  Creates a new date with single/multiple symbols for a 3d
                  database(OFDB).
              put:
                tags:
                  - Update
                description: >-
                  Updates existing dates for single/multiple symbols or adds a
                  new date/symbol within a date if not present in 3d
                  database(OFDB).
            /database/{path}/dates/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
            /database/{path}/dates/{date}:
              put:
                tags:
                  - Update
                description: >-
                  Updates an existing date field value for single/multiple
                  symbols or adds a new date/symbol within a date if not present
                  in 3d database(OFDB).
              delete:
                tags:
                  - Delete
                description: >-
                  Deletes all data specific to the date in 3d database(OFDB).
                  This includes all the symbols related to that date
            /database/{path}/dates/{date}/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
            /database/{path}/dates/{date}/symbols/{symbol}:
              delete:
                tags:
                  - Delete
                description: >-
                  Deletes data specific to the symbol and date from a 3d
                  database(OFDB).
            /database/{path}/dates/{date}/symbols/{symbol}/jobs/{id}:
              delete:
                tags:
                  - Delete
                description: >-
                  Deletes data specific to the symbol and date from a 3d
                  database(OFDB).
            /database/{path}:
              get:
                tags:
                  - Get
                description: >-
                  Returns the data in the database(OFDB, OMS_OFDB, ECONOFDB) for
                  the mentioned Symbol or Date. Atleast one
                  parameter(Symbol/Date) is required. For a range of dates
                  symbol parameter is mandatory.
            /database/{path}/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
            /database:
              post:
                tags:
                  - Create
                description: >-
                  Creates a 2d or 3d database(OFDB). Users will note that not
                  every field requires all the parameters listed in the schema.
                  Please review FactSet data types on the OA for further
                  guidance.
            /database/jobs/{id}:
              get:
                tags:
                  - Long Running
                description: >-
                  Returns the end results of a long running request. The full
                  URL is normally provided for you in the Location header of a
                  finished long running response.
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalo
    overlays:
      - type: APIs.io Search
        url: overlays/ofdb-openapi-search.yml
    aid: factset:open-factset-database-ofdb-api
  - name: FactSet Signals API
    description: >-
      Leverage Signals to identify material events for a company. Signals are
      derived from FactSet's core data,  cognitive computing technology, and our
      3rd party partners. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/signals-api
    baseURL: https://example.com
    tags:
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#changelog
      - type: OpenAPI
        url: properties/signals-openapi-original.yml
        data:
          openapi: 3.0.2
          info:
            title: Signals API
          tags:
            - name: Events
              description: >-
                Fetch signal events. Please note that FactSet Cognitive signals
                and signals contributed by third parties are excluded from the
                response for limited API access.
            - name: Metadata
              description: Fetch signal metadata
          paths:
            /events/headlines:
              get:
                tags:
                  - Events
                description: >-
                  Fetch Signals event headlines based on at least one of the
                  following filtering parameters: `ids`, `portfolios`
              post:
                tags:
                  - Events
                description: >-
                  Fetch Signals event headlines based on the filtering criteria
                  for up to 1000 identifiers and at least one of the following
                  filtering parameters: `ids`, `portfolios`
            /events/details:
              get:
                tags:
                  - Events
                description: >-
                  Fetch Signals event headlines plus all additional event
                  details based on at least one of the following filtering
                  parameters: `ids`, `portfolios`
              post:
                tags:
                  - Events
                description: >-
                  Fetch Signals event headlines plus all additional event
                  details for up to 1000 identifiers and at least one of the
                  following filtering parameters: `ids`, `portfolios`
            /events/details/{eventId}:
              get:
                tags:
                  - Events
                description: >-
                  Fetch Signals event headlines plus all additional event
                  details for a single requested Signal event
            /events/adaptive-cards:
              get:
                tags:
                  - Events
                description: >-
                  Fetch Microsoft's Adaptive Cards, which includes headlines and
                  event details data plus hyperlinks to FactSet reports, based
                  on at least one of the following filtering parameters: `ids`,
                  `portfolios`
              post:
                tags:
                  - Events
                description: >-
                  Fetch Microsoft's Adaptive Cards, which includes headlines and
                  event details data plus hyperlinks to FactSet reports, based
                  on at least one of the following filtering parameters: `ids`,
                  `portfolios`
            /events/adaptive-cards/{eventId}:
              get:
                tags:
                  - Events
                description: >-
                  Fetch Microsoft's Adaptive Cards, which includes headlines and
                  event details data plus hyperlinks to FactSet reports, for a
                  single requested Signal event
            /events/entities:
              get:
                tags:
                  - Events
                description: >-
                  Fetch FactSet entity IDs for events that match the filtering
                  criteria
              post:
                tags:
                  - Events
                description: >-
                  Fetch FactSet entity IDs for events that match the filtering
                  criteria
            /data-dictionary:
              get:
                tags:
                  - Metadata
                description: Fetch a list of all active signals
            /data-dictionary/{signalId}:
              get:
                tags:
                  - Metadata
                description: Fetch the metadata and contract for the requested signal
            /themes:
              get:
                tags:
                  - Metadata
                description: Fetch a list of available signal themes
            /categories:
              get:
                tags:
                  - Metadata
                description: Fetch a list of available signal ca
    overlays:
      - type: APIs.io Search
        url: overlays/signals-openapi-search.yml
    aid: factset:factset-signals-api
  - name: FactSet Natural Language Processing API
    description: >-
      These APIs leverage natural language processing to help extract meaningful
      data from unstructured text
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/natural-language-processing-api
    baseURL: https://example.com
    tags:
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#changelog
      - type: OpenAPI
        url: properties/natural-language-processing-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: Natural Language Processing API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          tags:
            - name: AI Text Summarization
            - name: AI Themes
            - name: Named Entity Recognition
            - name: Question & Answer
          paths:
            /themes:
              post:
                description: >-
                  Endpoint to extract themes from provided text. Optionally, can
                  include sentiment for each theme extracted. Please check the
                  schema(s) for each of the status codes for more details.
                summary: Endpoint to begin theme extraction job
                tags:
                  - AI Themes
            /themes/{id}:
              get:
                description: >-
                  Endpoint to obtain the results from the original themes task
                  request. The `id` parameter represents the identifier of the
                  task generated from the POST request which created the task.
                  Once the task is complete, the result can be fetched with this
                  endpoint.
                summary: >-
                  Endpoint to get a theme (and sentiments if requested) job
                  result
                tags:
                  - AI Themes
            /themes/{id}/status:
              get:
                description: >-
                  Endpoint to obtain the completion status of the themes task
                  request. The `id` parameter represents the task.
                summary: Endpoint to get the completion status of a themes job
                tags:
                  - AI Themes
            /summarization/headline:
              post:
                summary: Endpoint to generate a headline from text
                description: Generate a headline-length summary of plain text
                tags:
                  - AI Text Summarization
            /summarization/headline-and-summary:
              post:
                summary: Endpoint to summarize and generate a headline from text
                description: >-
                  Generate both a paragraph-length, and headline-length summary
                  of plain text
                tags:
                  - AI Text Summarization
            /summarization/summary:
              post:
                summary: Endpoint to summarize text
                description: Generate a paragraph-length summary of plain text
                tags:
                  - AI Text Summarization
            /ner/entities:
              post:
                summary: Endpoint to detect entities from text
                description: >-
                  Detect entities (People, Places, Organizations, etc.) in plain
                  text
                tags:
                  - Named Entity Recognition
            /summarization/result/{resultId}:
              get:
                summary: Endpoint to obtain result of a particular summarization job
                description: >-
                  Retrieve the summarization result from a job started with the
                  other summarization endpoints
                tags:
                  - AI Text Summarization
            /qna/answers:
              post:
                description: >-
                  Endpoint to create a task submission by providing plain text
                  and question(s). The underlying model will answer the
                  question. The created task needs to be polled to obtain the
                  results. Please check the schema(s) for each of the status
                  codes for more details about the task.
                summary: Endpoint to submit a question for answer(s)
                tags:
                  - Question & Answer
            /qna/answers/{id}:
              get:
                description: >-
                  Endpoint to obtain the results from the original Q&A task
                  request. The `id` parameter represents the identifier from the
                  task and comes from the POST request which created the task.
                  Once the task is complete, the result can be fetched with this
                  endpoint.
                summary: Endpoint to get the answer(s)
                tags:
                  - Question & Answer
            /qna/answers/{id}/status:
              get:
                description: >-
                  Endpoint to obtain the status of the Q&A task request. The
                  `id` parameter represents the identifier of the task created
                  and comes from the POST request which created the task.
                summary: Endpoint to get the completion status for a Q&A request
                tags:
                  - Questi
    overlays:
      - type: APIs.io Search
        url: overlays/natural-language-processing-openapi-search.yml
    aid: factset:factset-natural-language-processing-api
  - name: FactSet Universal Screening API
    description: >-
      Use the Universal Screening API to calculate your saved screens and then
      output the results in a convenient JSON format or archive the results to
      an Open FactSet Database (OFDB) file
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/universal-screening-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#changelog
      - type: OpenAPI
        url: properties/universal-screening-openapi-original.yml
        data:
          info:
            title: Universal Screening API
          openapi: 3.0.2
          externalDocs:
            description: Read more about STACH 2.0's column organized schema
            url: https://factset.github.io/stachschema/#/v2/ColumnOrganized
          paths:
            /v2/job/archive:
              post:
                description: >-
                  Begins archive of screen to OFDB. Subject to rate limiting by
                  serial.
                tags:
                  - Screening Operations
            /v2/job/calculate:
              post:
                description: >-
                  Begins calculation of screen. Subject to rate limiting by
                  serial.
                tags:
                  - Screening Operations
            /v2/job/{id}/status:
              get:
                description: Polls the job with a given screen ID and returns job status
                tags:
                  - Screening Operations
            /v2/jobs:
              get:
                description: >-
                  Retrieve list of all active job ids started by requester's
                  username-serial
                tags:
                  - Job Management
              delete:
                description: >-
                  Delete all active jobs started by the requester's
                  username-serial
                tags:
                  - Job Management
            /v2/job/{id}:
              delete:
                description: >-
                  Delete a specified job started by the requester's
                  username-serial
                tags:
                  - Job Management
              get:
                description: >-
                  Retrieve results of complete screen calculation. Screens with
                  more than 10,000 rows will be returned in a paginated format.
                  Results may be fetched in pages of 1,000 - 100,000 results
                  with 10,000 being the default page size.
                tags:
                  - Screening Op
    overlays:
      - type: APIs.io Search
        url: overlays/universal-screening-openapi-search.yml
    aid: factset:factset-universal-screening-api
  - name: FactSet Portfolio
    description: >-
      Through the Portfolio API, you can accomplish what-if analysis by
      uploading a paper portfolio to test out a new strategy or prospective
      opportunity.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/portfolio-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#changelog
      - type: OpenAPI
        url: properties/portfolio-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: ModelAccounts API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /analytics/accounts/v3/models/{name}:
              put:
                tags:
                  - ModelAccounts
                summary: Create or update an existing model account
              delete:
                tags:
                  - ModelAccounts
                summary: >-
                  Delete model account, takes an account path and name and
                  deletes it.
              get:
                tags:
                  - ModelAccounts
                summary: >-
                  Get account endpoint, takes an account name and returns
                  underlying data
            /analytics/accounts/v3/models/{name}/symbols/{symbol}:
              delete:
                tags:
                  - ModelAccounts
                summary: >-
                  Delete all entries for a symbol or specific date entries for a
                  symbol from a previously created account.
              get:
                tags:
                  - ModelAccounts
                summary: >-
                  Get account endpoint, takes an account name, symbol and
                  returns underlying data for that symbol
            /analytics/accounts/v3/models/{name}/dates/{date}:
              delete:
                tags:
                  - ModelAccounts
                summary: >-
                  Delete all entries for a date or specific symbol entries for a
                  date from a previously created account.
              get:
                tags:
                  - ModelAccounts
                summary: >-
                  Get account endpoint, takes an account name, date and returns
                  underlying data for that date
            /analytics/accounts/v3/models/{name}/dates/{date}/symbols/{symbol}:
              get:
                tags:
                  - ModelAccounts
                summary: >-
                  Get account endpoint, takes an account name and returns
                  underlying data
            /analytics/accounts/v3/models/{name}/schema:
              get:
                tags:
                  - ModelAccounts
                summary: >-
                  Get account schema endpoint, takes an account name and returns
                  its schema
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/ap
    overlays:
      - type: APIs.io Search
        url: overlays/portfolio-openapi-search.yml
    aid: factset:factset-portfolio
  - name: FactSet SPAR Engine API
    description: >-
      Through the SPAR API (Style, Performance, and Risk) monitor your
      portfolios’ returns against equity and fixed income benchmarks, and peer
      universes, with MPT risk statistics such as beta, standard deviation,
      r-squared, alpha, and tracking error…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/spar-engine-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#changelog
      - type: OpenAPI
        url: properties/spar-engine-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: SPAR Engine API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /analytics/engines/spar/v3/accounts/{accountPath}/returns-type:
              get:
                tags:
                  - Accounts
                summary: Get SPAR account returns type details
                description: >-
                  This endpoint returns the returns type of account associated
                  with SPAR
            /analytics/lookups/v3/accounts/{path}:
              get:
                tags:
                  - Accounts
                summary: Get accounts and sub-directories in a directory
                description: >-
                  This endpoint looks up all ACCT and ACTM files and
                  sub-directories in a given directory.
            /analytics/engines/spar/v3/benchmarks:
              get:
                tags:
                  - Benchmarks
                summary: Get SPAR benchmark details
                description: >-
                  This endpoint returns the details of a given SPAR benchmark
                  identifier.
            /analytics/engines/spar/v3/components:
              get:
                tags:
                  - Components
                summary: Get SPAR components
                description: >-
                  This endpoint returns the list of SPAR components in a given
                  SPAR document.
            /analytics/engines/spar/v3/components/{id}:
              get:
                tags:
                  - Components
                summary: Get SPAR component by id
                description: >-
                  This endpoint returns the default settings of a SPAR
                  component.
            /analytics/lookups/v3/currencies:
              get:
                tags:
                  - Currencies
                summary: Get currencies
                description: >-
                  This endpoint lists all the currencies that can be applied to
                  any calculation.
            /analytics/engines/spar/v3/documents/{path}:
              get:
                tags:
                  - Documents
                summary: Gets SPAR3 documents and sub-directories in a directory
                description: >-
                  This endpoint looks up all SPAR3 documents and sub-directories
                  in a given directory.
            /analytics/engines/spar/v3/frequencies:
              get:
                tags:
                  - Frequencies
                summary: Get SPAR frequencies
                description: >-
                  This endpoint lists all the frequencies that can be applied to
                  a SPAR calculation.
            /analytics/engines/spar/v3/calculations:
              post:
                tags:
                  - SPARCalculations
                summary: Create and Run SPAR calculation
                description: "This endpoint runs the SPAR calculation specified in the POST body parameters.\r\nIt can take one or more units as input.\r\n\r\nRemarks:\r\n\r\n*\tAny settings in POST body will act as a one-time override over the settings saved in the SPAR template."
              get:
                tags:
                  - SPARCalculations
                summary: Get all calculations
                description: This endpoints returns all calculation requests.
            /analytics/engines/spar/v3/calculations/{id}:
              put:
                tags:
                  - SPARCalculations
                summary: Create or Update SPAR calculation and run it.
                description: "This endpoint updates and run the SPAR calculation specified in the PUT body parameters. This also allows creating new SPAR calculations with custom ids.\r\nIt can take one or more units as input.\r\n\r\nRemarks:\r\n\r\n*\tAny settings in PUT body will act as a one-time override over the settings saved in the SPAR template."
              get:
                tags:
                  - SPARCalculations
                summary: Get SPAR calculation parameters by id
                description: >-
                  This is the endpoint that returns the calculation parameters
                  passed for a calculation.
              delete:
                tags:
                  - SPARCalculations
                summary: Cancel SPAR calculation
                description: >-
                  This is the endpoint to cancel a previously submitted
                  calculation.
            /analytics/engines/spar/v3/calculations/{id}/status:
              get:
                tags:
                  - SPARCalculations
                summary: Get SPAR calculation status by id
                description: "This is the endpoint to check on the progress of a previously requested calculation.\r\nIf the calculation has finished computing, the location header will point to the result url."
            /analytics/engines/spar/v3/calculations/{id}/units/{unitId}/result:
              get:
                tags:
                  - SPARCalculations
                summary: Get SPAR calculation result by id
                description: "This is the endpoint to get the result of a previously requested calculation.\r\nIf the calculation has finished computing, the body of the response will contain the requested document in JSON."
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/spar-en
    overlays:
      - type: APIs.io Search
        url: overlays/spar-engine-openapi-search.yml
    aid: factset:factset-spar-engine-api
  - name: FactSet Prices API
    description: >-
      Gain access to comprehensive global coverage for equity prices, returns,
      volume, shares, splits, and dividends. Security types include Common
      Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit,
      Open-ended Fund, Exchange…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-prices-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-prices-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-prices-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-prices-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-prices-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-prices-api#changelog
      - type: OpenAPI
        url: properties/prices-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Prices API
          paths:
            /factset-prices/v1/prices:
              get:
                tags:
                  - Prices
                summary: >-
                  Gets end-of-day Open, High, Low, Close for a list of
                  securities.
                description: >
                  Gets security prices, Open, High, Low, Close, Volume, and
                  currency for a specified date range and frequency. Prices are
                  updated and at different times across the different regions
                  around the globe. The Prices API automatically defaults
                  relative price dates to the local region which is determined
                  by the local region of the requested security id. To learn
                  more about relative dates please visit [OA Page
                  4627](https://my.apps.factset.com/oa/pages/4627)


                  */prices* endpoint currently supports Long Running
                  asynchronous requests up to **10 minutes** via `batch`
                  parameter. **Additional Approvals needed for access**. Id
                  limits increased to **5000 ids** per request using batch
                  parameter.
              post:
                tags:
                  - Prices
                summary: >-
                  Requests end-of-day Open, High, Low, Close for a large list of
                  securities.
                description: >

                  Gets security prices, Open, High, Low, Close, Volume, and
                  currency for a specified date range and frequency.


                  */prices* endpoint currently supports Long Running
                  asynchronous requests up to **10 minutes** via `batch`
                  parameter. **Additional Approvals needed for access**. Id
                  limits increased to **5000 ids** per request using batch
                  parameter.
            /factset-prices/v1/fixed-income:
              get:
                tags:
                  - Prices
                summary: Gets pricing for a list of Fixed Income securities
                description: >
                  Get BID, MID, ASK, and Issuer Entity ID for a list of Fixed
                  Income Securities as of a requested date range. Available for
                  U.S. Corporate, Treasury and Agency bonds, Municipals, and
                  non-U.S. Corporate and Government bonds. To learn more about
                  Fixed Income Prices database, please review
                  [OA:15995](https://my.apps.factset.com/oa/pages/15995)
              post:
                tags:
                  - Prices
                summary: >-
                  Requests pricing for a list of Fixed Income securities for
                  date range requested
                description: >
                  Get BID, MID, ASK, and Issuer Entity ID for a list of Fixed
                  Income Securities as of a requested date range. Available for
                  U.S. Corporate, Treasury and Agency bonds, Municipals, and
                  non-U.S. Corporate and Government bonds. To learn more about
                  Fixed Income Prices database, please review
                  [OA:15995](https://my.apps.factset.com/oa/pages/15995)
            /factset-prices/v1/references:
              get:
                tags:
                  - Reference
                summary: Gets security reference details for a list of securities
                description: >
                  Gets security reference details for a list of `ids`, such as
                  Name, Security Type, Currency, Country, Primary Exchange,
                  Local Index, and dates of First and Last Trade.
              post:
                tags:
                  - Reference
                summary: Requests security reference details a list of securities
                description: >
                  Gets security reference details for a large list of `ids`,
                  such as Name, Security Type, Currency, Country, Primary
                  Exchange, Local Index, and dates of First and Last Trade.
            /factset-prices/v1/returns:
              get:
                tags:
                  - Returns
                summary: >-
                  Gets Returns for a list of `ids` as of given date range and
                  rolling Period
                description: >-
                  The simple or compound return for the requested frequency
                  and/or rollingPeriod. Depending on the input parameters the
                  return will adjust accordingly. If you simply use frequency
                  and no rollingPeriod, the return value will represent the
                  frequency period. If you use rollingPeriod, the values will be
                  returned in actual period ends (e.g. actual month, actual
                  week, daily, etc.). General Return Calculation Details found
                  on [Online Assistant Page
                  #8748](https://oa.apps.factset.com/pages/8748)
              post:
                tags:
                  - Returns
                summary: >-
                  Requests security returns for the given date range and
                  rollingPeriod.
                description: >-
                  The simple or compound return for the requested frequency
                  and/or rollingPeriod. Depending on the input parameters the
                  return will adjust accordingly. If you simply use frequency
                  and no rollingPeriod, the return value will represent the
                  frequency period. If you use rollingPeriod, the values will be
                  returned in actual period ends (e.g. actual month, actual
                  week, daily, etc.). General Return Calculation Details found
                  on [Online Assistant Page
                  #8748](https://oa.apps.factset.com/pages/8748)
            /factset-prices/v1/returns-snapshot:
              get:
                tags:
                  - Returns
                summary: >-
                  Returns the price performance of the security and annualized
                  compound total returns.
                description: >
                  Retrieves various return periods as of a given date for a
                  requested list of securities. This endpoint is very helpful
                  for quickly retrieving a list of pre-calculated returns for
                  application development.<p> Return periods include
                    * oneDay
                    * weekToDate
                    * monthToDate
                    * quarterToDate
                    * yearToDate
                    * oneMonth
                    * threeMonth
                    * sixMonth
                    * nineMonth
                    * oneYear
                    * twoYearAnnualized
                    * threeYearAnnualized
                    * fiveYearAnnualized
                    * tenYearAnnualized
                    * twentyYearAnnualized
                    * thirtyYearAnnualized
                    * ipoToDateAnnualized
                    </p>
              post:
                tags:
                  - Returns
                summary: >-
                  Returns the price performance of the security and annualized
                  compound total returns.
                description: >
                  Retrieves various return periods as of a given date for a
                  requested list of securities. This endpoint is very helpful
                  for quickly retrieving a list of pre-calculated returns for
                  application development.<p> Return periods include
                    * oneDay
                    * weekToDate
                    * monthToDate
                    * quarterToDate
                    * yearToDate
                    * oneMonth
                    * threeMonth
                    * sixMonth
                    * nineMonth
                    * oneYear
                    * twoYearAnnualized
                    * threeYearAnnualized
                    * fiveYearAnnualized
                    * tenYearAnnualized
                    * twentyYearAnnualized
                    * thirtyYearAnnualized
                    * ipoToDateAnnualized
                    </p>
            /factset-prices/v1/dividends:
              get:
                tags:
                  - Dividends
                summary: >-
                  Gets dividend information for a given date range and list of
                  securities
                description: >-
                  Get the dividend amounts, dates, types, and flags over a
                  specified date range. You may request future dates to receive
                  information for declared dividends.
              post:
                tags:
                  - Dividends
                summary: >-
                  Requests dividend information for a given date range and list
                  of securities
                description: >-
                  Get the dividend amounts, dates, types, and flags over a
                  specified date range
            /factset-prices/v1/splits:
              get:
                tags:
                  - Splits
                summary: Gets full history of security Splits for a list of `ids`
                description: >-
                  Gets the entire history of splits for a given list of
                  identifiers. Information returned includes the split factor, a
                  plain text comment regarding the type of split, and the event
                  date.
              post:
                tags:
                  - Splits
                summary: Requests splits for a list of `ids`
                description: >-
                  Gets the entire history of splits for a given list of
                  identifiers. Information returned includes the split factor, a
                  plain text comment regarding the type of split, and the event
                  date.
            /factset-prices/v1/shares:
              get:
                tags:
                  - Shares
                summary: Gets shares for a list of `ids` as of given date range.
                description: >-
                  Gets security shares for a list of 'ids' and given date range.
                  Share values returned include security-level and
                  company-level.
              post:
                tags:
                  - Shares
                summary: Requests shares for a list of `ids` as of given date range.
                description: >-
                  Gets security shares for a list of 'ids' and given date range.
                  Share values returned include security-level and
                  company-level.
            /factset-prices/v1/market-value:
              get:
                tags:
                  - Market Value
                summary: >-
                  Gets the security level and company level market values for a
                  list of `ids` as of given date range and frequency.
                description: >
                  Gets market capitalization of list of ids for the company
                  level, security level, calendar, frequency, and currency for a
                  specified date range.
              post:
                tags:
                  - Market Value
                summary: >-
                  Requests the market value for a list of `ids` as of given date
                  range.
                description: >-
                  Requests the market value for a list of `ids` as of given date
                  range.
            /factset-prices/v1/high-low:
              get:
                tags:
                  - High Low
                summary: >-
                  Gets the price high and price low of securities for a list of
                  `ids` as of given date, period and frequency.
                description: >
                  For given security(s), gets the high and low prices with the
                  respective dates on which they occurred. This service gives
                  options for fetching the price as of the close or intraday.
              post:
                tags:
                  - High Low
                summary: >-
                  Requests the price high and price low of securities for a list
                  of `ids` as of given date, period and frequency.
                description: >
                  For given security(s), gets the high and low prices with the
                  respective dates on which they occurred. This service gives
                  options for fetching the price as of the close or intraday.
            /factset-prices/v1/database-rollover:
              get:
                summary: Gets the latest relative rollover date for the database.
                description: >
                  Gets zero relative date and last update time for FactSet
                  databases. The dates represent the date that the rollover
                  event happened; the date and time is in **eastern time
                  zone**.  <p>Depending on the ids requested and their
                  respective regions, a requested startDate or endDate used in
                  the various Prices API may reflect different previous close
                  dates. This relative "zero" date, meaning - as of yesterday's
                  close - will vary across global regions. This API is designed
                  to help production systems account for regional rollover dates
                  to know when to trigger their processes for different regions
                  to reflect the latest close. The response gives context for
                  AMERICAS, ASIA PACIFIC, and EUROPE. </p>
                tags:
                  - Database Rollover
              post:
                summary: Gets the latest relative rollover date for the database.
                description: >
                  Gets zero relative date and last update time for FactSet
                  databases. The dates represent the date that the rollover
                  event happened; the date and time is in **eastern time
                  zone**.  <p>Depending on the ids requested and their
                  respective regions, a requested startDate or endDate used in
                  the various Prices API may reflect different previous close
                  dates. This relative "zero" date, meaning - as of yesterday's
                  close - will vary across global regions. This API is designed
                  to help production systems account for regional rollover dates
                  to know when to trigger their processes for different regions
                  to reflect the latest close. The response gives context for
                  AMERICAS, ASIA PACIFIC, and EUROPE. </p>
                tags:
                  - Database Rollover
            /batch/v1/status:
              get:
                tags:
                  - Batch Processing
                summary: Returns the status for a Batch Request
                description: >-
                  Return the status for the underlying batch request that is
                  specified by the id.
              post:
                tags:
                  - Batch Processing
                summary: Returns the status for a Batch Request
                description: >-
                  Return the status for the underlying batch request that is
                  specified by the id. 
            /batch/v1/result:
              get:
                tags:
                  - Batch Processing
                summary: Returns the response for a Batch Request
                description: >-
                  Returns the response data for the underlying batch request
                  that is specified by the id.
              post:
                tags:
                  - Batch Processing
                summary: Returns the response for a Batch Request
                description: >-
                  Return the response data for the underlying batch request that
                  is specified b
    overlays:
      - type: APIs.io Search
        url: overlays/prices-openapi-search.yml
    aid: factset:factset-prices-api
  - name: FactSet Concordance API
    description: >-
      The FactSet Concordance API helps our users discover the respective
      FactSet Entity & People identifier for a specific entity based off of a
      list of provided corresponding attributes, such as Names, URLs, and
      Location.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-concordance-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#changelog
      - type: OpenAPI
        url: properties/concordance-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Concordance API
          tags:
            - name: Entity Match
              description: >-
                Retrieve a list of Entity Matches and Candidates for up to 25
                names.
            - name: Entity Match - Bulk
              description: >-
                Submit a file with a large list of entity names and attributes
                and retrieve decisions once mapped.
            - name: Universes
              description: Create, View, and Manage Universes where mappings are saved.
            - name: Mappings
              description: >-
                View all Saved Mappings in a Universe or update and save
                mappings made of ClientIds and Names to FactSet Entity Ids
            - name: Snowflake
              description: >-
                The response is formatted specifically for Snowflake environment
                and not used by consumers outside of Snowflake.
            - name: People Match
              description: Retrieve a list of People Matches.
            - name: People Mapping
              description: Used to save a single People Mapping to a given universe
          paths:
            /factset-concordance/v2/entity-match:
              get:
                summary: >-
                  Get Entity Candidates and Matches for a single name and
                  attributes.
                description: >
                  Finds the best candidate entities matching the given entity
                  name. Additional attributes can be supplied to narrow the
                  search, such as State, URL, and Entity Types. <p>**Max of 1
                  Name permitted in a single GET request.** Use the POST method
                  for /entity-match to fetch up to 25 names. Otherwise, use the
                  "Entity Match - Bulk" workflow to submit larger universes of
                  names to be concorded via a file.</p><p>
                tags:
                  - Entity Match
              post:
                summary: >-
                  Get a list of Entity Candidates and Matches for a requested
                  list of up to 25 names and attributes.
                description: >
                  Finds the best candidate entities matching the given entity
                  name. If a `universeId` is provided, any match for an input
                  including a `clientId` will be saved to that universe.
                  Additional attributes can be supplied to narrow the search,
                  such as State, URL, and Entity Types. Finds the best candidate
                  entities matching the given company name. Additional
                  attributes can be supplied to narrow the search.  <p>**Max of
                  25 Names inputted.** Use the "Entity Match - Bulk" workflow to
                  submit larger universes of names to be concorded via a
                  file.</p><p> Supported types of Entities in which the names
                  can match to include -
                    * Corporations, Joint Ventures, and Holding Companies
                    * Fund Managers and various Fund Types (Open-end, Closed End, Hedge, Soverign Wealth, Pension, Exchange Traded, and more).</p>
                tags:
                  - Entity Match
            /factset-concordance/v2/entity-task:
              post:
                summary: Input a file with names and attributes, creating a taskId.
                description: >
                  Upload a Comma-Separated List file (.csv / UTF-8 encoding)
                  with a list of names and attributes and receive a `taskId`.
                  The taskId is then used for reference in the
                  */entity-task-status* and */entity-decisions* endpoints to
                  receive results once the task is successful.<p>This is the
                  first step in the overall "Bulk" workflow. Use the
                  /entity-task-status endpoint to check the status.</p> <p> A
                  universeId must be included in request. If you do not have a
                  universe created, reference the `/universe` endpoint.
                tags:
                  - Entity Match - Bulk
            /factset-concordance/v2/entity-task-status:
              get:
                summary: >-
                  Gets the status of the requested taskId or all tasks for a
                  User
                description: >
                  Pulls the **status** for ALL the Entity Tasks submitted by a
                  client within the last 30 days, and related details such as
                  task duration and decision rates. Specific Tasks can also be
                  retrieved by using the _taskId_ parameter.<p>Status types
                  include -
                    * PENDING - The task has not yet started.
                    * IN_PROGRESS - The task is submitted and decisions are in progress.
                    * SUCCESS - The task was successful! Move to the /entity-decisions endpoint to retrieve decisions.
                    * FAILURE - The task failed. Reach out to FactSet Support for assistance.
                    * BAD_REQUEST - The task creation was unsuccesfull. Typically occurs with an incorrect input file format or column headers.
                    * ABORTED - The task was aborted.
                tags:
                  - Entity Match - Bulk
            /factset-concordance/v2/entity-decisions:
              get:
                summary: Get the decisions of matches for the requested taskId.
                description: >
                  Retrieves the `Decision` objects for an Entity Task (taskId).
                  The decisions do not include all candidates, but rather the
                  results of concording the requested list of names included in
                  the input file. Mapped entities will include a FactSet Entity
                  Identifier (-E). Results will be saved to the `universeId`
                  specified in the input file.
                tags:
                  - Entity Match - Bulk
            /factset-concordance/v2/universe:
              post:
                summary: Create a new universe
                description: >
                  Create a new universe that is distinct from any existing
                  universe
                tags:
                  - Universes
            /factset-concordance/v2/entity-universe:
              get:
                summary: Retrieve all saved mappings within a requested universe
                description: |
                  Retrieves all entity mappings within a requested universe.
                tags:
                  - Mappings
              post:
                summary: >-
                  Retrieve all saved mappings within a requested universe or
                  large list of client ids
                description: >
                  Retrieves all entity mappings that were saved in a given
                  universe. Supports filtering by a large number of `clientId`s
                tags:
                  - Mappings
            /factset-concordance/v2/people-universe:
              get:
                summary: Retrieve all saved mappings within a requested universe
                description: |
                  Retrieves all people mappings within a requested universe.
                tags:
                  - People Mapping
              post:
                summary: >-
                  Retrieve all saved mappings within a requested universe or
                  large list of client ids
                description: >
                  Retrieves all people mappings that were saved in a given
                  universe. Supports filtering by a large number of `clientId`s
                tags:
                  - People Mapping
            /factset-concordance/v2/update-universe:
              post:
                summary: Update metadata for an existing universe
                description: |
                  Update metadata for an existing universe
                tags:
                  - Universes
            /factset-concordance/v2/universes:
              get:
                summary: Fetch metadata for universes
                description: >
                  Fetch information on active universes for the current user.
                  Optionally filter for a specific universe given a `universeId`
                tags:
                  - Universes
            /factset-concordance/v2/entity-universe-statistics:
              get:
                summary: Get statistics on a given universe
                description: >
                  Get the total number of mappings in a universe, as well as the
                  number of mapped, unmapped and indeterminate mappings
                tags:
                  - Universes
            /factset-concordance/v2/universe-statistics:
              get:
                summary: Get statistics on a given universe
                description: >
                  Get the total number of mappings in a universe, as well as the
                  number of mapped, unmapped and indeterminate mappings
                tags:
                  - Universes
            /factset-concordance/v2/entity-mapping:
              post:
                summary: Saves a single-mapping specified by the client.
                description: >
                  Saves a Concordance Mapping to the client universe. When
                  making a post, all exiting values are overwritten in the
                  database with the values passed in the request. clientId and
                  clientName are required.
                tags:
                  - Mappings
            /factset-concordance/v2/people-mapping:
              post:
                summary: Saves a single-mapping specified by the client.
                description: >
                  Saves a single Concordance People Mapping to a given universe.
                  When making a post, all exiting values are overwritten in the
                  database with the values passed in the request. clientId and
                  clientName are required.
                tags:
                  - People Mapping
            /factset-concordance/v2/entity-mapping-delete:
              post:
                summary: Deletes mapping specified by the client.
                description: >
                  Delete a Concordance Mapping to the client universe. When
                  making a post, all exiting values are overwritten in the
                  database with the values passed in the request. clientId and
                  universeId are required.
                tags:
                  - Mappings
            /factset-concordance/v2/people-mapping-delete:
              post:
                summary: Deletes mapping specified by the client.
                description: >
                  Delete a Concordance Mapping to the client universe. When
                  making a post, all exiting values are overwritten in the
                  database with the values passed in the request. clientId and
                  universeId are required.
                tags:
                  - People Mapping
            /factset-concordance/v2/snowflake-entity-match:
              post:
                summary: >-
                  Perform an entity search and return a snowflake-friendly
                  response. Up to 25 Names per request.
                description: >
                  Finds the best candidate entities matching the given company
                  name. Additional attributes can be supplied to narrow the
                  search. *This endpoint is used natively within Snowflake and
                  is not to be consumed directly by users. Reach out to your
                  FactSet Account team to learn more about Concordance in
                  Snowflake.*
                tags:
                  - Snowflake
            /factset-concordance/v2/snowflake-entity-mapping:
              post:
                summary: Save entity mappings to a universe
                description: Manually save or update entity mappings with metadata
                tags:
                  - Snowflake
            /factset-concordance/v2/people-match:
              get:
                summary: >-
                  Find potential people matches given a person's name.People
                  matches can be retrieved using person's name and other
                  attributes like firstname, middlename and lastname.
                description: >
                  Finds the best people candidates matching the given name.
                  <p>**Max of 1 Name permitted in a single GET request.** Use
                  the POST method for /people-match to fetch up to 25 names.
                  Otherwise, use the "People Match - Bulk" workflow to submit
                  larger universes of names to be concorded via a file.</p><p>
                tags:
                  - People Match
              post:
                summary: Find potential people matches given a person's name.
                description: >
                  Finds the best candidate people matching the given people
                  names. Additional attributes can be supplied to narrow the
                  search. If a `universeId` is provided, any match for an input
                  including a `clientId` will be saved to that universe.
                tags:
                  - People Match
            /factset-concordance/v2/people-task:
              post:
                summary: Create a People Concordance Task.
                description: >
                  The "Bulk" workflow allows the user to create a People
                  Concordance Task. Uploading of a Comma-Separated List file
                  (.csv / UTF-8 encoding) with a list of names and attributes
                  and creation of a task id is mandatory to start the process.
                     The taskId is then used for reference in the /people-task-status and /people-decisions endpoints to receive results once the task is successful.The /people-task-status endpoint is to check the status of the Tasks as per the ids.
                      A universeId must be included in request. If you do not have a universe created, reference the /universe endpoint.The bulk workflow supports a two way approach for the user.
                    **The user can use these parameters in the following ways.**
                      1.Filling all the required fields including the `personNameColumn`.(do not include `firstNameColumn`,`lastNameColumn` & `middleNameColumn`)
                      2.Filling all the required fields excluding the `personNameColumn`.(Ensure atleast the `lastNameColumn` is filled)
                tags:
                  - People Match - Bulk
            /factset-concordance/v2/people-task-status:
              get:
                summary: Get the Status of the People Tasks.
                description: >
                  Pulls the **status** for ALL the People Tasks submitted by a
                  client within the last 30 days, and related details such as
                  task duration and decision rates. Specific Tasks can also be
                  retrieved by using the _taskId_ parameter.<p>Status types
                  include -
                    * PENDING - The task has not yet started.
                    * IN_PROGRESS - The task is submitted and decisions are in progress.
                    * SUCCESS - The task was successful! Move to the /people-decisions endpoint to retrieve decisions.
                    * FAILURE - The task failed. Reach out to FactSet Support for assistance.
                    * BAD_REQUEST - The task creation was unsuccesfull. Typically occurs with an incorrect input file format or column headers.
                    * ABORTED - The task was aborted.
                tags:
                  - People Match - Bulk
            /factset-concordance/v2/people-decisions:
              get:
                summary: Get the decisions of matches for the requested taskId.
                description: >
                  Retrieves the `Decision` objects for an People Task (taskId).
                  The decisions do not include all candidates, but rather the
                  results of concording the requested list of names included in
                  the input file. Mapped entities will include a FactSet Entity
                  Identifier (-E). Results will be saved to the `universeId`
                  specified in the input file.
                tags:
                  - People M
    overlays:
      - type: APIs.io Search
        url: overlays/concordance-openapi-search.yml
    aid: factset:factset-concordance-api
  - name: FactSet ESG API
    description: FactSet ESG API giving access to SASB & SDG Score data
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-esg-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#changelog
      - type: OpenAPI
        url: properties/esg-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet ESG API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/factset-esg-api
          tags:
            - name: SASB
              description: >-
                Get scores and ranks based on the 26 SASB categories for a
                requested list of symbols and date range.
            - name: SDG
              description: >-
                Get scores and ranks based on the 16 SDG goals for a requested
                list of symbols and date range.
            - name: SFDR
              description: >-
                Get the Principle Adverse Impact PAI data supporting the SFDR
                reporting.
            - name: Spotlights
              description: >-
                Get Spotlight data for the most important positive and negative
                ESG events
            - name: Articles
              description: >-
                Get Articles data for the most important positive and negative
                ESG events
          paths:
            /factset-esg/v1/sasb-scores:
              get:
                tags:
                  - SASB
                summary: >-
                  Gets short-term, long-term, and momentum scores based on the
                  26 ESG categories defined by the Sustainability Accounting
                  Standards Board (SASB).
                description: >
                  FactSet Truvalue Labs SASB Scores provides short-term,
                  long-term, and momentum scores that are generated for 26 ESG
                  categories defined by the Sustainability Accounting Standards
                  Board. FactSet Truvalue also calculates a custom overall score
                  called ALLCATEGORIES, can indicate data volume flow, and the
                  Dynamic Materiality of that data flow.
              post:
                tags:
                  - SASB
                summary: >-
                  For a large list of ids, gets short-term, long-term, and
                  momentum scores based on the 26 ESG categories defined by the
                  Sustainability Accounting Standards Board (SASB).
                description: >
                  FactSet Truvalue Labs SASB Scores provides short-term,
                  long-term, and momentum scores that are generated for 26 ESG
                  categories defined by the Sustainability Accounting Standards
                  Board. FactSet Truvalue also calculates a custom overall score
                  called ALLCATEGORIES, can indicate data volume flow, and the
                  Dynamic Materiality of that data flow.
            /factset-esg/v1/sasb-ranks:
              get:
                tags:
                  - SASB
                summary: Gets ESG Rankings for a requested list of ids and dates.
                description: >
                  Indicates if a company is a Leader, Above Average, Average,
                  Below Average, or a Laggard; directly mapping from Industry
                  Percentiles (*request IND_PCTL in scores endpoints*). Mapping
                  of ESG Ranks to Industry Percentile Ranges is as follows - 


                  |Rank|Industry Percentile Range (%)|

                  |||

                  |Leader|90 - 100|

                  |Above Average|70 - 89.9|

                  |Average|30 - 69.9|

                  |Below Average|10 - 29.9|

                  |Laggard|0 - 9.9|


                  Industry classifications follow SICS, SASB's Industry
                  Classification System. Using the Adjusted Insight scores,
                  Industry Percentiles are generated for all companies.
                  Companies with five or more articles in a year get ranked in a
                  first pass, then companies with filled-in values are
                  interpolated without forcing the ranking of higher-volume
                  companies up or down.  In the case where a company falls into
                  an industry with fewer than 7 high or medium volume companies
                  the Sector Percentile is inserted in the place of the Industry
                  Percentile score.

                  <p>Only Vaild for ALLCATEGORIES and MATERIALITY
                  categories.</p>
              post:
                tags:
                  - SASB
                summary: >-
                  Get ESG Ranks for a large list of ids and specified date
                  range.
                description: >
                  Indicates if a company is a Leader, Above Average, Average,
                  Below Average, or a Laggard; directly mapping from Industry
                  Percentiles (*request IND_PCTL in scores endpoints*). Mapping
                  of ESG Ranks to Industry Percentile Ranges is as follows - 


                  |Rank|Industry Percentile Range (%)|

                  ||---|

                  |Leader|90 - 100|

                  |Above Average|70 - 89.9|

                  |Average|30 - 69.9|

                  |Below Average|10 - 29.9|

                  |Laggard|0 - 9.9|


                  Industry classifications follow SICS, SASB's Industry
                  Classification System. Using the Adjusted Insight scores,
                  Industry Percentiles are generated for all companies.
                  Companies with five or more articles in a year get ranked in a
                  first pass, then companies with filled-in values are
                  interpolated without forcing the ranking of higher-volume
                  companies up or down.  In the case where a company falls into
                  an industry with fewer than 7 high or medium volume companies
                  the Sector Percentile is inserted in the place of the Industry
                  Percentile score.

                  <p>Only Vaild for ALLCATEGORIES and MATERIALITY
                  categories.</p>
            /factset-esg/v1/sasb-scores-all:
              get:
                tags:
                  - SASB
                summary: >-
                  Gets a flat key value array of scores for named categories of
                  the input scoreType(s).
                description: >
                  **Retrieves a flat array of all categories for the requested
                  scoreType and ids. Unlike the /sasb-scores endpoint the format
                  of the response returns category names as part of the key
                  value.**<p> Gets values for all categories for the selected
                  score type(s) for the requested identifier(s). FactSet
                  Truvalue Labs SASB Scores provides short-term, long-term, and
                  momentum scores that are generated for 26 ESG categories
                  defined by the Sustainability Accounting Standards Board. ESG
                  Ranks are not supported in this Endpoint.
              post:
                tags:
                  - SASB
                summary: >-
                  Gets a flat key value array of scores for named categories of
                  the input score type(s).
                description: >
                  **Retrieves a flat array of all categories for the requested
                  scoreType and ids. Unlike the /sasb-scores endpoint the format
                  of the response returns category names as part of the key
                  value.**<p> Gets values for all categories for the selected
                  score type(s) for the requested identifier(s). FactSet
                  Truvalue Labs SASB Scores provides short-term, long-term, and
                  momentum scores that are generated for 26 ESG categories
                  defined by the Sustainability Accounting Standards Board. ESG
                  Ranks are not supported in this Endpoint.
            /factset-esg/v1/sdg-scores:
              get:
                tags:
                  - SDG
                summary: >-
                  Gets short-term, long-term, and momentum scores based on the
                  16 Sustainable Development Goals categories defined by the
                  United Nations.
                description: >
                  Truvalue Labs SDG Scores provides short-term, long-term, and
                  momentum scores that are generated for 16 Sustainable
                  Development Goals categories defined by the United Nations.
              post:
                tags:
                  - SDG
                summary: >-
                  Gets short-term, long-term, and momentum scores based on the
                  16 Sustainable Development Goals categories defined by United
                  Nations.
                description: >
                  Truvalue Labs SDG Scores provides short-term, long-term, and
                  momentum scores that are generated for 16 Sustainable
                  Development Goals categories defined by the United Nations.*
            /factset-esg/v1/sfdr-pai:
              get:
                tags:
                  - SFDR
                summary: >-
                  Gets Principle Adverse Impact (PAI) data to support compliant
                  SFDR Sustainable Finance Disclosure Regulation (SFDR)
                  reporting
                description: >
                  SFDR Principle Adverse Impact (PAI) data is built specifically
                  to support compliant Sustainable Finance Disclosure Regulation
                  (SFDR) reporting. FactSet collects PAI data items from
                  publicly available company-reported information and FactSet
                  databases, such as FactSet Fundamentals, FactSet RBICS with
                  Revenue and FactSet People, which are also based on
                  company-disclosures. FactSet uses Truvalue Labs SASB
                  Spotlights for supplemental OECD & UNGC violation checks where
                  company reporting is sparse. 
              post:
                tags:
                  - SFDR
                summary: >-
                  Gets Principle Adverse Impact (PAI) data to support compliant
                  SFDR Sustainable Finance Disclosure Regulation (SFDR)
                  reporting
                description: >
                  SFDR Principle Adverse Impact (PAI) data is built specifically
                  to support compliant Sustainable Finance Disclosure Regulation
                  (SFDR) reporting. FactSet collects PAI data items from
                  publicly available company-reported information and FactSet
                  databases, such as FactSet Fundamentals, FactSet RBICS with
                  Revenue and FactSet People, which are also based on
                  company-disclosures. FactSet uses Truvalue Labs SASB
                  Spotlights for supplemental OECD & UNGC violation checks where
                  company reporting is sparse.
            /factset-esg/v1/sasb-spotlights:
              get:
                tags:
                  - Spotlights
                summary: >-
                  Gets Spotlight data for the most important positive and
                  negative ESG events to enable timely and systematic trading
                  strategies and portfolio management
                description: >
                  FactSet ESG by Truvalue Labs’ Spotlight Data solutions are a
                  daily collection of the most important positive and negative
                  ESG events detected by our algorithms, with a variety of
                  quantitative metadata to enable timely and systematic trading
                  strategies and portfolio management. Qualitive informational
                  data points such as the headline and key bullet points for
                  articles is also included. 
              post:
                tags:
                  - Spotlights
                summary: >-
                  Gets Spotlight data for the most important positive and
                  negative ESG events to enable timely and systematic trading
                  strategies and portfolio management
                description: >
                  FactSet ESG by Truvalue Labs’ Spotlight Data solutions are a
                  daily collection of the most important positive and negative
                  ESG events detected by our algorithms, with a variety of
                  quantitative metadata to enable timely and systematic trading
                  strategies and portfolio management. Qualitive informational
                  data points such as the headline and key bullet points for
                  articles is also included. reporting is sparse.
            /factset-esg/v1/sdg-spotlights:
              get:
                tags:
                  - Spotlights
                summary: >-
                  Gets Spotlight data for the most important positive and
                  negative ESG events to enable timely and systematic trading
                  strategies and portfolio management
                description: >
                  FactSet ESG by Truvalue Labs’ Spotlight Data solutions are a
                  daily collection of the most important positive and negative
                  ESG events detected by our algorithms, with a variety of
                  quantitative metadata to enable timely and systematic trading
                  strategies and portfolio management. Qualitive informational
                  data points such as the headline and key bullet points for
                  articles is also included. 
              post:
                tags:
                  - Spotlights
                summary: >-
                  Gets Spotlight data for the most important positive and
                  negative ESG events to enable timely and systematic trading
                  strategies and portfolio management
                description: >
                  FactSet ESG by Truvalue Labs’ Spotlight Data solutions are a
                  daily collection of the most important positive and negative
                  ESG events detected by our algorithms, with a variety of
                  quantitative metadata to enable timely and systematic trading
                  strategies and portfolio management. Qualitive informational
                  data points such as the headline and key bullet points for
                  articles is also included. reporting is sparse.
            /factset-esg/v1/sasb-articles:
              get:
                tags:
                  - Articles
                summary: >-
                  Request articles tagged with SASB lens categories from
                  2016-01-01 to previous day.
                description: >
                  Articles endpoint allows to retrieve underlying news articles
                  used by the AI engine to calculate the ESG Scores of companies
                  and therefore provides ESG relevant news and also transparency
                  into the ESG Scores.
              post:
                tags:
                  - Articles
                summary: >-
                  Request articles tagged with SASB lens categories from
                  2016-01-01 to previous day
                description: >
                  Articles endpoint allows to retrieve underlying news articles
                  used by the AI engine to calculate the ESG Scores of companies
                  and therefore provides ESG relevant news and also transparency
                  into the ESG Scores.
            /factset-esg/v1/sdg-articles:
              get:
                tags:
                  - Articles
                summary: >-
                  Request articles tagged with SDG lens categories from
                  2016-01-01 to previous day.
                description: >
                  Articles endpoint allows to retrieve underlying news articles
                  used by the AI engine to calculate the ESG Scores of companies
                  and therefore provides ESG relevant news and also transparency
                  into the ESG Scores.
              post:
                tags:
                  - Articles
                summary: >-
                  Request articles tagged with SDG lens categories from
                  2016-01-01 to previous day
                description: >
                  Articles endpoint allows to retrieve underlying news articles
                  used by the AI engine to calculate the ESG Scores of companies
                  and therefore provides ESG relevant news and also transparency
                  into the E
    overlays:
      - type: APIs.io Search
        url: overlays/esg-openapi-search.yml
    aid: factset:factset-esg-api
  - name: FactSet Digital Cards
    description: >-
      The FactSet Digital Cards API provides quick access to key company
      information and market data in an easily consumable and sharable format.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-digital-cards
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#changelog
      - type: OpenAPI
        url: properties/digital-cards-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: FactSet Digital Cards API
            description: ''
          paths:
            /v1/company/{component}/adaptive-card:
              parameters:
                - null
                - null
                - null
                - null
              get:
                tags:
                  - Digital Card
                summary: >-
                  Retrieve Multiple Digital Cards in Microsoft Adaptive Card
                  Format.
            /v1/company/{component}/adaptive-card/{id}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Digital Card
                summary: Retrieve One Digital Card in Microsoft Adaptive Ca
    overlays:
      - type: APIs.io Search
        url: overlays/digital-cards-openapi-search.yml
    aid: factset:factset-digital-cards
  - name: FactSet Vault API
    description: >-
      Through the Vault API, request validated pre-calculated returns and
      attribution data archived in Portfolio Vault to streamline your official
      performance and reporting workflows.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/vault-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#changelog
      - type: OpenAPI
        url: properties/vault-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: Vault API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /analytics/engines/vault/v3/components:
              get:
                tags:
                  - Components
                summary: Get Vault components
                description: >-
                  This endpoint returns the list of Vault components in a given
                  Vault document.
            /analytics/engines/vault/v3/components/{id}:
              get:
                tags:
                  - Components
                summary: Get Vault component by id
                description: >-
                  This endpoint returns the default settings of a Vault
                  component.
            /analytics/engines/vault/v3/configurations:
              get:
                tags:
                  - Configurations
                summary: Get Vault configurations
                description: >-
                  This endpoint returns all the Vault configurations saved in
                  the provided account.
            /analytics/engines/vault/v3/configurations/{id}:
              get:
                tags:
                  - Configurations
                summary: Get Vault configuration by id
                description: >-
                  This endpoint returns details for a Vault configuration as
                  well as a list of accounts it is used in.
            /analytics/engines/vault/v3/dates:
              get:
                tags:
                  - Dates
                summary: Convert Vault dates to absolute format
                description: >-
                  This endpoint converts the given start and end dates in
                  FactSet date format to yyyymmdd format for a Vault
                  calculation. For more information on FactSet date format,
                  please refer to the Vault API documentation under the 'API
                  Documentation' section in the developer portal.
            /analytics/engines/vault/v3/documents/{path}:
              get:
                tags:
                  - Documents
                summary: Get Vault documents and sub-directories in a directory
                description: >-
                  This endpoint looks up all Vault documents and sub-directories
                  in a given directory.
            /analytics/engines/vault/v3/frequencies:
              get:
                tags:
                  - Frequencies
                summary: Get Vault frequencies
                description: >-
                  This endpoint lists all the frequencies that can be applied to
                  a Vault calculation.
            /analytics/engines/vault/v3/calculations:
              post:
                tags:
                  - VaultCalculations
                summary: Create and Run Vault calculation
                description: "This endpoint runs the Vault calculation specified in the POST body parameters.\r\nIt can take one or more units as input.\r\n\r\nRemarks:\r\n\r\n*   Start and and end date must be within the configuration's min and max date range"
              get:
                tags:
                  - VaultCalculations
                summary: Get all calculations
                description: This endpoints returns all calculation requests.
            /analytics/engines/vault/v3/calculations/{id}:
              put:
                tags:
                  - VaultCalculations
                summary: Create or Update Vault calculation and run it.
                description: "This endpoint updates and run the Vault calculation specified in the PUT body parameters. This also allows creating new Vault calculations with custom ids.\r\nIt can take one or more units as input.\r\n\r\nRemarks:\r\n\r\n*   Start and and end date must be within the configuration's min and max date range"
              get:
                tags:
                  - VaultCalculations
                summary: Get Vault calculation parameters by id
                description: >-
                  This is the endpoint that returns the calculation parameters
                  passed for a calculation.
              delete:
                tags:
                  - VaultCalculations
                summary: Cancel Vault calculation by id
                description: >-
                  This is the endpoint to cancel a previously submitted
                  calculation.
            /analytics/engines/vault/v3/calculations/{id}/status:
              get:
                tags:
                  - VaultCalculations
                summary: Get Vault calculation status by id
                description: "This is the endpoint to check on the progress of a previously requested calculation.\r\nIf the calculation has finished computing, the location header will point to the result url."
            /analytics/engines/vault/v3/calculations/{id}/units/{unitId}/result:
              get:
                tags:
                  - VaultCalculations
                summary: Get Vault calculation result by id
                description: "This is the endpoint to get the result of a previously requested calculation.\r\nIf the calculation has finished computing, the body of the response will contain the requested document in JSON."
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/v
    overlays:
      - type: APIs.io Search
        url: overlays/vault-openapi-search.yml
    aid: factset:factset-vault-api
  - name: FactSet Chart Generation Service
    description: >-
      An API for getting chart images in the form of png or jpg based on various
      parameters like ticker, benchmark, currency, frequency, start and end date
      etc.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/chart-generation-service
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#changelog
      - type: OpenAPI
        url: properties/chart-generation-service-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: Chart Generation Service
          paths:
            /v1/catalog/categories:
              get:
                tags:
                  - Chart Templates
                summary: Get a list of chart categories
            /v1/catalog/charts:
              get:
                tags:
                  - Chart Templates
                summary: >-
                  Get a list of chart templates that can be used for getting the
                  image from the service.
                description: >-
                  You can get all the charts present or can just get the
                  information by categories. The response includes the name of
                  the chart, description, tags and any additional input specific
                  to that chart. Use the information from this response to
                  determine what charts you want and get its image from /images
                  endpoint. Additionally you can also get back a auto generated
                  PDF for the categories you requested for.
            /v1/image:
              get:
                tags:
                  - Chart Templates
                summary: Get chart image back in PNG or JP
    overlays:
      - type: APIs.io Search
        url: overlays/ chart-generation-service-openapi-search.yml
      - type: APIs.io Search
        url: overlays/chart-generation-service-openapi-search.yml
    aid: factset:factset-chart-generation-service
  - name: FactSet Real-Time News API
    description: >-
      Retrieve news by category, identifier, and keyword, for a specific date or
      range of dates. Endpoints can be subscribed for streamed updates.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/real-time-news-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/real-time-news-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-news-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/real-time-news-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-news-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/real-time-news-api#changelog
      - type: OpenAPI
        url: properties/real-time-news-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: News API For Digital Portals
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /news/article/get:
              get:
                tags:
                  - news
                summary: Details for a news article.
                description: Details for a news article.
            /news/article/list:
              post:
                tags:
                  - news
                summary: List of news articles.
                description: List of news articles.
            /news/article/listByChain:
              post:
                tags:
                  - news
                summary: List news articles of an article chain.
                description: List news articles of an article chain.
            /news/article/listByIndex:
              post:
                tags:
                  - news
                summary: >-
                  News articles for instruments that are constituents of the
                  given indices.
                description: >-
                  News articles for instruments that are constituents of the
                  given indices.
            /news/article/listByInstrument:
              post:
                tags:
                  - news
                summary: News articles for instruments.
                description: News articles for instruments.
            /news/article/listByMediaKind:
              post:
                tags:
                  - news
                summary: >-
                  List news articles which contain media of specific media
                  kinds.
                description: >-
                  List news articles which contain media of specific media
                  kinds.
            /news/article/searchByText:
              post:
                tags:
                  - news
                summary: Search for news articles using a fulltext search.
                description: >-
                  Search for news articles using a fulltext search. All
                  specified criteria need to be fulfilled for an article to
                  match. Each criterion is handled according to its
                  selectionType; "include" requires the criterion to evaluate to
                  true, "exclude" requires the criterion to evaluate to false. A
                  criterion is fulfilled when at least one of its values is
                  found.
            /news/article/type/get:
              get:
                tags:
                  - news
                summary: Details for a news article type.
                description: Details for a news article type.
            /news/article/type/list:
              get:
                tags:
                  - news
                summary: List of news article types.
                description: List of news article types.
            /news/distributor/get:
              get:
                tags:
                  - news
                summary: Details of a distributor.
                description: Details of a distributor.
            /news/distributor/list:
              get:
                tags:
                  - news
                summary: List of distributors.
                description: List of distributors.
            /news/publisher/get:
              get:
                tags:
                  - news
                summary: Details of a publisher.
                description: Details of a publisher.
            /news/publisher/list:
              get:
                tags:
                  - news
                summary: List of publishers.
                description: List of publishers.
            /news/publisher/listByDistributor:
              get:
                tags:
                  - news
                summary: List of publishers provided by the given distributor.
                description: List of publishers provided by the given distributor.
            /news/publisher/searchByName:
              post:
                tags:
                  - news
                summary: Search for publishers.
                description: Search for publishers by the name of the publisher.
          tags:
            - name: news
              description: news endpoints
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/
          x-interface-version: 2
          x-documenter-version: 6.3.9
          x-api-version: nu
    overlays:
      - type: APIs.io Search
        url: overlays/real-time-news-openapi-search.yml
    aid: factset:factset-real-time-news-api
  - name: FactSet Vermilion API
    description: >-
      The Vermilion API, enables users to programmatically access FactSet's
      Vermilion Reporting Suite (VRS) and seamlessly integrate into customer's
      3rd party applications. The API is referred to as two key product
      initiatives, the REST API and the SCIM API.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/vermilion-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#changelog
      - type: OpenAPI
        url: properties/vermilion-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: VRS API documentation
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/vermilion-api
          tags:
            - name: Datasource
            - name: Entities
            - name: Reports
            - name: Report instance
            - name: SCIM
          paths:
            /v1/{tenant}/data-sources:
              get:
                tags:
                  - Datasource
                summary: Lists all datasources
                description: List all datasources the user has permission to see
            /v1/{tenant}/data-sources/{dataSourceCode}:
              get:
                tags:
                  - Datasource
                summary: Gets a datasource
                description: Gets a datasource based on the code passed
            /v1/{tenant}/data-sources/{dataSourceCode}/data:
              get:
                tags:
                  - Datasource
                summary: Gets the data for the datasource
                description: >-
                  Gets the data for the datasource. There are optional query
                  parameters to filter the data
            /v1/{tenant}/entities/{entityCode}/values:
              get:
                tags:
                  - Entity
                summary: Gets the entity values
                description: Gets the entity values for the specified entity
            /v1/{tenant}/reports:
              get:
                tags:
                  - Report
                summary: Gets all report definitions
                description: Gets all report definitions the user has permissions for
            /v1/{tenant}/reports/{reportDefinitionCode}:
              get:
                tags:
                  - Report
                summary: Gets a report definition
                description: Gets a report defintion based on the code specified
            /v1/report-instances/generate:
              post:
                tags:
                  - Report instance
                summary: Generates a report
                description: >-
                  Generates a report using the specified ID and the JSON in the
                  request body
            /v1/{tenant}/report-instances/{reportInstanceId}:
              delete:
                tags:
                  - Report instance
                summary: Cancels a report generation
                description: >-
                  Sends a request to cancel a report generation based on the
                  report instance id passed
              get:
                tags:
                  - Report instance
                summary: Gets a report instance based on the ID
                description: Gets a report instance object based on the ID passed
            /v1/{tenant}/report-instances:
              get:
                tags:
                  - Report instance
                summary: Gets a list of report instances
                description: >-
                  Gets a list of report instances. This can be filtered down
                  further by including query parameters in the URL. For example,
                  a report definition id can be added so the only report
                  instances returned are the ones with a matching id
            /v1/{tenant}/report-instances/{reportInstanceId}/results/{reportFileName}:
              get:
                tags:
                  - Report instance
                summary: Gets the generated file
                description: >-
                  Get the generated file for a report instance. Users can fetch
                  the generated report once the genration is finished. The
                  report instance id and the report file name are passed in as
                  path paramters
            /v1/{tenant}/report-instances/{reportInstanceId}/logs:
              get:
                tags:
                  - Report instance
                summary: Gets a list of logs for the report instance generation
                description: >-
                  Gets a list of logs for the generated report instance. Allows
                  the user to sort on log message, type and date. Also allows
                  for retrieving of just the errors & warnings'
            /scim/v2/Users:
              get:
                tags:
                  - SCIM
                summary: Retrieves a list of VRS users
                description: Retrieves a list of VRS users
              post:
                tags:
                  - SCIM
                summary: Creates a user
                description: Creates a VRS user
            /scim/v2/Users/{userId}:
              get:
                tags:
                  - SCIM
                summary: Retrieves a VRS User
                description: Retrieves a VRS user based on their ID
              delete:
                tags:
                  - SCIM
                summary: Deletes a VRS user
                description: >-
                  Deletes a VRS user (this marks them as 'Deleted' in the
                  database)
              patch:
                tags:
                  - SCIM
                summary: Add or remove VRS user attributes
                description: >-
                  Adds or removes VRS user attributes based on the JSON
                  properties
              put:
                tags:
                  - SCIM
                summary: Updates a VRS user
                description: Updates (replaces) a VRS user with the properties in the JSON
            /scim/v2/Groups:
              get:
                tags:
                  - SCIM
                summary: Retrieves a list of VRS role
                description: Retrieves a VRS roles
              post:
                tags:
                  - SCIM
                summary: Creates a role
                description: Creates a VRS role
            /scim/v2/Groups/{groupId}:
              get:
                tags:
                  - SCIM
                summary: Retrieves a VRS role
                description: Retrieves a VRS role based on the ID
              delete:
                tags:
                  - SCIM
                summary: Deletes a VRS role
                description: Deletes a VRS role
              patch:
                tags:
                  - SCIM
                summary: Add or remove a user to/from a group
                description: Adds or removes a VRS user to/from a VRS role
              put:
                tags:
                  - SCIM
                summary: Updates a VRS Group
                description: Updates (replaces) a VRS Group with the properties in
    overlays:
      - type: APIs.io Search
        url: overlays/vermilion-openapi-search.yml
    aid: factset:factset-vermilion-api
  - name: FactSet Estimates API
    description: >-
      20+ years of comprehensive estimates and statistics on a wide variety of
      financial statement items as well as industry-specific metrics. FactSet’s
      consensus estimates are aggregated from a wide base of contributors and
      cover over 19,000 active…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-estimates-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#changelog
      - type: OpenAPI
        url: properties/estimates-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Estimates
          tags:
            - name: Consensus
              description: >-
                The consensus or nest of all Estimates items aggregated by a
                statistic such as mean or median.
            - name: Broker Detail
              description: >-
                The Broker-Level detail of Estimates items. Entitlements with
                Brokers are required.
            - name: Ratings
              description: >-
                The Consensus and Broker-Level Ratings detail for Buy, Hold,
                Sell, Overweight, Underweight.
            - name: Surprise
              description: >-
                The Surprise Events reflecting the company's reported financials
                against the broker's estimates.
            - name: Segments
              description: The Product or Geographic Segment Estimates
            - name: Data Items
              description: >-
                Available Data Item Catalog to be used as input to the metrics
                parameters
          paths:
            /factset-estimates/v2/rolling-consensus:
              get:
                tags:
                  - Consensus
                summary: >-
                  Retrieves consensus estimates for a requested list of ids and
                  rolling fiscal periods.
                description: >
                  Returns FactSet Estimates consensus data using rolling fiscal
                  dates. <p>The rolling behavior causes fiscal year to
                  automatically roll from one year to the next as the historical
                  perspective date changes. The fiscal period rolls forward as
                  of each period end. This endpoint is optimized to allow the
                  request to simply include a relative fiscal period (e.g. use
                  relativeFiscalStart integer 1 and periodicity ANN for next
                  unreported fiscal year end), and then see what the consensus
                  thought the "next fiscal year" estimates were through time as
                  you "roll" back your perspective dates. This differs from
                  locking down an absolute estimate period such as explicitly
                  stating Fiscal Year 2019. This can be done in the
                  fixed-consensus endpoint.</p>
              post:
                tags:
                  - Consensus
                summary: >-
                  Retrieves consensus estimates for a requested list of ids and
                  rolling fiscal periods
                description: >
                  Returns FactSet Estimates consensus data using rolling fiscal
                  dates. <p>The rolling behavior causes fiscal year to
                  automatically roll from one year to the next as the historical
                  perspective date changes. The fiscal period rolls forward as
                  of each period end. This endpoint is optimized to allow the
                  request to simply include a relative fiscal period (e.g. use
                  relativeFiscalStart integer 1 and periodicity ANN for next
                  unreported fiscal year end), and then see what the consensus
                  thought the "next fiscal year" estimates were through time as
                  you "roll" back your perspective dates. This differs from
                  locking down an absolute estimate period such as explicitly
                  stating Fiscal Year 2019. This can be done in the
                  fixed-consensus endpoint.</p>
            /factset-estimates/v2/fixed-consensus:
              get:
                tags:
                  - Consensus
                summary: >-
                  Retrieves consensus estimates for a requested list of ids and
                  fixed fiscal periods
                description: >
                  Returns FactSet Estimates consensus data using fixed fiscal
                  dates. For example, if the company's current unreported year
                  is 12/2020, all data returned by formulas that specify as the
                  period/report basis will be for 12/2005 regardless of what
                  perspective dates (startDate/endDate) are used. The fixed
                  dates are "locked" in time and all estimated values are for
                  that explicit date. If you are requesting that the estimated
                  periods can change with the perspective date, please use the
                  rolling-consensus endpoint.
              post:
                tags:
                  - Consensus
                summary: FactSet consensus estimates for fixed fiscal periods
                description: >
                  Returns FactSet Estimates consensus data using fixed fiscal
                  dates. For example, if the company's current unreported year
                  is 12/2020, all data returned by formulas that specify as the
                  period/report basis will be for 12/2005 regardless of what
                  perspective dates (startDate/endDate) are used. The fixed
                  dates are "locked" in time and all estimated values are for
                  that explicit date. If you are requesting that the estimated
                  periods can change with the perspective date, please use the
                  rolling-consensus endpoint.
            /factset-estimates/v2/rolling-detail:
              get:
                tags:
                  - Broker Detail
                summary: FactSet estimates detail data for rolling fiscal periods
                description: >
                  Updated intraday, the FactSet detail estimates apis provide
                  individual broker-level estimates collected from over 800
                  sell-side analysts. This database contains 20+ years of broker
                  history across more than 59,000 global companies. Content is
                  provided for "rolling" fiscal periods.     
              post:
                tags:
                  - Broker Detail
                summary: FactSet estimates detail data for rolling fiscal periods
                description: >
                  Updated intraday, the FactSet detail estimates apis provide
                  individual broker-level estimates collected from over 800
                  sell-side analysts. This database contains 20+ years of broker
                  history across more than 59,000 global companies. Content is
                  provided for "rolling" fiscal periods.
            /factset-estimates/v2/fixed-detail:
              get:
                tags:
                  - Broker Detail
                summary: Estimates detail data for fixed fiscal periods
                description: >
                  Updated intraday, the FactSet detail estimates apis provide
                  individual broker-level estimates collected from over 800
                  sell-side analysts. This database contains 20+ years of broker
                  history across more than 59,000 global companies. Content is
                  provided for "fixed" fiscal periods.
              post:
                tags:
                  - Broker Detail
                summary: Estimates detail data for fixed fiscal periods
                description: >
                  Updated intraday, the FactSet detail estimates apis provide
                  individual broker-level estimates collected from over 800
                  sell-side analysts. This database contains 20+ years of broker
                  history across more than 59,000 global companies. Content is
                  provided for "fixed" fiscal periods.
            /factset-estimates/v2/consensus-ratings:
              get:
                tags:
                  - Ratings
                summary: >-
                  Ratings consensus estimates to fetch Buy, Overweight, Hold,
                  Underweight, and Sell.
                description: >
                  Returns ratings from the FactSet Estimates database for
                  current and historical for an individual security using
                  rolling fiscal dates as of a specific date.
              post:
                tags:
                  - Ratings
                summary: >-
                  Ratings consensus estimates to fetch Buy, Overweight, Hold,
                  Underweight, and Sell.
                description: >
                  Returns ratings from the FactSet Estimates database for
                  current and historical for an individual security using
                  rolling fiscal dates as of a specific date.
            /factset-estimates/v2/detail-ratings:
              get:
                tags:
                  - Ratings
                summary: >-
                  Broker Detail estimates to fetch Buy, Overweight, Hold,
                  Underweight, and Sell.
                description: >
                  Retrieves the Broker Level ratings for the requested Id and
                  date range. Ratings include Buy, Hold, Sell, Overweight, and
                  Underweight.

                  <p>The `startDate` and `endDate` parameters controls the range
                  of perspective dates. By default, the service will return the
                  range of estimateDates within the latest company's reporting
                  period. As you expand the date range, additional full
                  historical reporting periods and all ratings estimateDates per
                  broker will be returned.</p>
              post:
                tags:
                  - Ratings
                summary: >-
                  Broker Detail estimates to fetch Buy, Overweight, Hold,
                  Underweight, and Sell.
                description: >
                  Retrieves the Broker Level ratings for the requested Id and
                  date range. Ratings include Buy, Hold, Sell, Overweight, and
                  Underweight.

                  <p>The `startDate` and `endDate` parameters controls the range
                  of perspective dates. By default, the service will return the
                  range of estimateDates within the latest company's reporting
                  period. As you expand the date range, additional full
                  historical reporting periods and all ratings estimateDates per
                  broker will be returned.</p>
            /factset-estimates/v2/surprise:
              get:
                tags:
                  - Surprise
                summary: Surprise estimates for rolling fiscal periods
                description: >
                  Returns FactSet Estimates surprise data using rolling fiscal
                  dates.
              post:
                tags:
                  - Surprise
                summary: Surprise estimates for rolling fiscal periods
                description: >
                  Returns FactSet Estimates surprise data using rolling fiscal
                  dates.
            /factset-estimates/v2/segments:
              get:
                tags:
                  - Segments
                summary: >-
                  Retrieves product & geographic segment estimates for a
                  requested list of ids and fiscal periods
                description: >
                  Returns FactSet Estimates Consensus Data for the segments
                  gathered from the Business, Geographical, or Actual
                  Reconciliation (ADJUSTMENT) classifications by using fiscal
                  periods with a reporting frequency. 
              post:
                tags:
                  - Segments
                summary: >-
                  Retrieves product segment estimates for a requested list of
                  ids and fiscal periods
                description: >
                  Returns FactSet Estimates Data for the segments gathered from
                  the Business, Geographical, or Actual Reconciliation
                  (ADJUSTMENT) classifications by using fiscal periods with a
                  reporting frequency. 
            /factset-estimates/v2/metrics:
              get:
                summary: Available Estimate metrics
                tags:
                  - Data Items
                description: >
                  Returns list of available Estimate metrics that can be used in
                  the `metrics` parameter of related endpoints.

                  **By default, Factset provides Estimated items in millions.
                  For specific metric methodology definitions, reference the
                  `OAurl` response items to launch the available methodology
                  page.** 
              post:
                summary: Available Estimate metrics or ratios.
                tags:
                  - Data Items
                description: >
                  Returns list of available Estimate metrics that can be used in
                  the `metrics` parameter of related endpoints.

                  **By default, Factset provides Estimated items in millions.
                  For specific metric methodology definitions, reference the
                  `OAurl` response items to launch the available methodolog
    overlays:
      - type: APIs.io Search
        url: overlays/estimates-openapi-search.yml
    aid: factset:factset-estimates-api
  - name: FactSet Issue Tracker API
    description: >-
      Through Issue Tracker API, Clients can Create, Read and Update the Issue
      Tracker Issues programmatically.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/issue-tracker-api
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/issue-tracker-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/issue-tracker-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/issue-tracker-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/issue-tracker-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/issue-tracker-api#changelog
      - type: OpenAPI
        url: properties/issue-tracker-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Issue Tracker API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          tags:
            - name: Issue
              description: Updating and retrieving issue data within the Issue Tracker
          paths:
            /issues:
              post:
                summary: Creates a Issue Tracker issue
                tags:
                  - Issue
                description: Creates a new issue in Issue Tracker
            /issues/{id}:
              get:
                summary: Get the matched issue details
                tags:
                  - Issue
                description: >-
                  Retrieve the information of the client with the matching issue
                  Id.
            /issues/{id}/comments:
              post:
                summary: post comment to Issue Tracker issue
                tags:
                  - Issue
                description: 'Reply to the existing matched issue '
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/issue-t
    overlays:
      - type: APIs.io Search
        url: overlays/issue-tracker-openapi-search.yml
    aid: factset:factset-issue-tracker-api
  - name: FactSet Axioma Equity Optimizer API
    description: >-
      The Axioma Equity API offers equity-based portfolio optimizations,
      balancing a client’s investment objectives within the confines of the
      established constraints within their investment strategy.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/axioma-equity-optimizer-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#changelog
      - type: OpenAPI
        url: properties/axioma-equity-optimizer-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: Axioma Equity API
            license:
              name: Apache License 2.0
              url: http://www.apache.org/licenses/LICENSE-2.0.txt
          paths:
            /analytics/lookups/v3/accounts/{path}:
              get:
                tags:
                  - Accounts
                summary: Get accounts and sub-directories in a directory
                description: >-
                  This endpoint looks up all ACCT and ACTM files and
                  sub-directories in a given directory.
            /analytics/engines/axp/v3/optimizations:
              post:
                tags:
                  - AXP Optimizer
                summary: Create and Run Axioma optimization
                description: "This endpoint creates and runs Axioma optimization specified in the POST body parameters.\r\n            \r\nRemarks:\r\n            \r\n*\tAny settings in POST body will act as a one-time override over the settings saved in the strategy document."
            /analytics/engines/axp/v3/optimizations/{id}:
              put:
                tags:
                  - AXP Optimizer
                summary: Create or Update Axioma optimization and run it.
                description: >-
                  This endpoint updates and run the Axioma optimization
                  specified in the PUT body parameters. It also allows the
                  creation of new Axioma optimization with custom id.
              get:
                tags:
                  - AXP Optimizer
                summary: Get Axioma optimization parameters by id
                description: >-
                  This is the endpoint that returns the optimization parameters
                  passed for a calculation.
              delete:
                tags:
                  - AXP Optimizer
                summary: Cancel Axioma optimization by id
                description: >-
                  This is the endpoint to cancel a previously submitted
                  optimization.
            /analytics/engines/axp/v3/optimizations/{id}/status:
              get:
                tags:
                  - AXP Optimizer
                summary: Get Axioma optimization status by id
                description: "This is the endpoint to check on the progress of a previously requested optimization.\r\nIf the optimization has finished computing, the body of the response will contain result in JSON.\r\nOtherwise, the optimization is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage."
            /analytics/engines/axp/v3/optimizations/{id}/result:
              get:
                tags:
                  - AXP Optimizer
                summary: Get Axioma optimization result by id
                description: >-
                  This is the endpoint to get the result of a previously
                  requested optimization.
            /analytics/lookups/v3/currencies:
              get:
                tags:
                  - Currencies
                summary: Get currencies
                description: >-
                  This endpoint lists all the currencies that can be applied to
                  any calculation.
            /analytics/engines/axp/v3/strategies/{path}:
              get:
                tags:
                  - StrategyDocuments
                summary: >-
                  Get Axioma Equity strategy documents and sub-directories in a
                  directory
                description: >-
                  This endpoint looks up all Axioma Equity strategy documents
                  and sub-directories in a given 
    overlays:
      - type: APIs.io Search
        url: overlays/axioma-equity-optimizer-openapi-search.yml
    aid: factset:factset-axioma-equity-optimizer-api
  - name: FactSet Barra Portfolio Optimizer
    description: Barra Portfolio Optimizer (BPM) API
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/barra-portfolio-optimizer
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#changelog
      - type: OpenAPI
        url: properties/barra-portfolio-optimizer-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: Barra Portfolio Optimizer API
            license:
              name: Apache License 2.0
              url: http://www.apache.org/licenses/LICENSE-2.0.txt
          paths:
            /analytics/lookups/v3/accounts/{path}:
              get:
                tags:
                  - Accounts
                summary: Get accounts and sub-directories in a directory
                description: >-
                  This endpoint looks up all ACCT and ACTM files and
                  sub-directories in a given directory.
            /analytics/engines/bpm/v3/optimizations:
              post:
                tags:
                  - BPM Optimizer
                summary: Create and Run BPM optimization
                description: "This endpoint creates and runs BPM optimization specified in the POST body parameters.\r\n            \r\nRemarks:\r\n            \r\n*\tAny settings in POST body will act as a one-time override over the settings saved in the strategy document."
            /analytics/engines/bpm/v3/optimizations/{id}:
              put:
                tags:
                  - BPM Optimizer
                summary: Create or Update BPM optimization and run it.
                description: >-
                  This endpoint updates and run the BPM optimization specified
                  in the PUT body parameters. It also allows the creation of new
                  BPM optimization with custom id.
              get:
                tags:
                  - BPM Optimizer
                summary: Get BPM optimization parameters by id
                description: >-
                  This is the endpoint that returns the optimization parameters
                  passed for an optimization.
              delete:
                tags:
                  - BPM Optimizer
                summary: Cancel BPM optimization by id
                description: >-
                  This is the endpoint to cancel a previously submitted
                  optimization.
            /analytics/engines/bpm/v3/optimizations/{id}/status:
              get:
                tags:
                  - BPM Optimizer
                summary: Get BPM optimization status by id
                description: "This is the endpoint to check on the progress of a previously requested optimization.\r\nIf the optimization has finished computing, the body of the response will contain result in JSON.\r\nOtherwise, the optimization is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage."
            /analytics/engines/bpm/v3/optimizations/{id}/result:
              get:
                tags:
                  - BPM Optimizer
                summary: Get BPM optimization result by id
                description: >-
                  This is the endpoint to get the result of a previously
                  requested optimization.
            /analytics/lookups/v3/currencies:
              get:
                tags:
                  - Currencies
                summary: Get currencies
                description: >-
                  This endpoint lists all the currencies that can be applied to
                  any calculation.
            /analytics/engines/bpm/v3/strategies/{path}:
              get:
                tags:
                  - StrategyDocuments
                summary: >-
                  Get Barra strategy documents and sub-directories in a
                  directory
                description: >-
                  This endpoint looks up all Barra strategy documents and
                  sub-directories in a given 
    overlays:
      - type: APIs.io Search
        url: overlays/barra-portfolio-optimizer-openapi-search.yml
    aid: factset:factset-barra-portfolio-optimizer
  - name: FactSet Exchange DataFeed Snapshot API - Symbol List
    description: >-
      FactSet’s Exchange DataFeed Snapshot API provides cost-effective access to
      real-time and delayed global exchange data.  Proprietary technology
      normalizes over 200 global exchanges and 150+ data fields.  Asset types
      integrated include equities,…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#changelog
      - type: OpenAPI
        url: >-
          properties/exchange-datafeed-snapshot-api-symbol-list-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
            title: Exchange DataFeed Snapshot
          externalDocs:
            description: OpenFactSet Marketplace Card
            url: >-
              https://open.factset.com/products/factset-exchange-datafeed-snapshot-api/en-us
          paths:
            /DFSnapshot:
              get:
                summary: Request a snapshot of exchange data for a list of symbols.
                tags:
                  - Snapshot
                description: >

                  `ids` and `oc` are required parameters, but only one can be
                  used based on request. Use `ids` for regular snapshot
                  requests, and `oc` for requesting an option chain. 


                  **Try it Out** feature is available using a pre-recorded
                  sandbox environment. Follow Try it Out inscrutions on each
                  parameter to develop a request and view a sample server
                  response.


                  '*You must be logged into the Developer Portal and obtain an
                  **[API
                  Key](https://developer.factset.com/factset/api-key-listing)**
                  for ''Try it Out'' to receive a successful server response.
                  Select **Authorize** button or visit **[Authentication
                  Support](https://developer.factset.com/authentication)** for
                  more details.*'
              post:
                summary: Snap exchange data. Use if URL lengh of 2,048 is exceeded.
                tags:
                  - Snapshot
                description: >-
                  Request Snapshot exchange data. Use POST when your URL length
                  exceeds 2,048 c
    overlays:
      - type: APIs.io Search
        url: overlays/exchange-datafeed-snapshot-api-symbol-list-openapi-search.yml
    aid: factset:factset-exchange-datafeed-snapshot-api-symbol-list
  - name: FactSet Event Calendar API
    description: >-
      Accessing Event Calendar content along with business logic contained in
      the workstation experience
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/event-calendar-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/event-calendar-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/event-calendar-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/event-calendar-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/event-calendar-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/event-calendar-api#changelog
      - type: OpenAPI
        url: properties/event-calendar-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: Event Calendar API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/
          tags:
            - name: Company
              description: Company tag
          paths:
            /company/event/list:
              post:
                summary: Retrieve Company Event data
                description: >-
                  This endpoint returns all company events with filters from the
                  request.
                tags:
                  - nu
    overlays:
      - type: APIs.io Search
        url: overlays/event-calendar-openapi-search.yml
    aid: factset:factset-event-calendar-api
  - name: FactSet ID Lookup API
    description: >-
      FactSet Identifier Lookup API exposes the service that powers the search
      functionality in FactSet WorkStation and FactSet Web. Clients can leverage
      this API for their search functionality to return tickers, entity names,
      and other identifiers…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/id-lookup-api
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#changelog
      - type: OpenAPI
        url: properties/id-lookup-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: ID Lookup API
          paths:
            /v1/idsearch:
              post:
                tags:
                  - FactSet ID Lookup
                summary: >-
                  Search funtionality to return tickers, company names and
                  unique identifiers for FactSet data
                description: >
                  Service will accept request in JSON formatted request body.
                  The request is sent by passing a query which is an array
                  conitaining search query objects with parameters. The
                  parameters contain search term and filters defined by the end
                  user. This would display a specific set of identifiers based
                  on th
    overlays:
      - type: APIs.io Search
        url: overlays/id-lookup-openapi-search.yml
    aid: factset:factset-id-lookup-api
  - name: FactSet Conversational API Powered by FactSet Mercury
    description: >-
      The FactSet Conversational API allows clients to white-label core FactSet
      Mercury capabilities in a client’s chatbot experience.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury
    baseURL: https://example.com
    tags:
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#changelog
      - type: OpenAPI
        url: properties/conversational-api-powered-by-mercury-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: Conversational API Powered by FactSet Mercury
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /create:
              post:
                summary: Create a chat request for a given natural language query.
                description: >
                  Returns a chat ID for polling the response to a natural
                  language query for financial data.

                    This endpoint is an interface for initializing a request for an answer from FactSet Mercury, our large language model for surfacing FactSet datasets through conversational natural language queries. Use the `/create` endpoint to start generating responses for one-off questions. Responses contain a chat ID and status for the chat process.
                tags:
                  - Single Question Chat
            /status:
              post:
                summary: Retrieve the status of a chat response process.
                description: >
                  Returns the status of a chat response for a given chat
                  conversation ID (recevied from the `/create` endpoint). Poll
                  the `/status` endpoint with your conversation ID to confirm
                  when your data is ready.

                  Answers may take minutes to generate, depending on the
                  complexity of the query.
                tags:
                  - Single Question Chat
            /result:
              post:
                summary: Retrieve the completed response for your query.
                description: >
                  Returns FactSet content and data in response to the query
                  provided to the `/create` endpoint. This endpoint is the final
                  step in the single-question request process.

                  Responses contain a combination of Microsoft Adaptive Cards
                  for data/tables and markdown for text.
                tags:
                  - Single Question Chat
          tags:
            - name: Single Question Chat
          externalDocs:
            description: API Documentation
            url: >-
              https://developer.factset.com/api-catalog/conversational-api-powered-facts
    overlays:
      - type: APIs.io Search
        url: overlays/conversational-api-powered-by-mercury-openapi-search.yml
    aid: factset:factset-conversational-api-powered-by-factset-mercury
  - name: FactSet IRN Contacts API
    description: >-
      Contacts API allows users to create, update and delete Contacts as well as
      configure settings in the Internal Research Notes Contacts application.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-contacts-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#changelog
      - type: OpenAPI
        url: properties/irn-contacts-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: IRN API v1
          paths:
            /v1/contact-relationships:
              get:
                tags:
                  - Contacts - Relationships
                summary: >-
                  Get all the relationships where the given symbol or contact
                  identifier has been tagged in a relationship
              post:
                tags:
                  - Contacts - Relationships
                summary: Create a contact relationship
            /v1/contact-relationships/{contactRelationshipId}:
              get:
                tags:
                  - Contacts - Relationships
                summary: Get details on a specific contact relationship
              patch:
                tags:
                  - Contacts - Relationships
                summary: Update a contact relationship
              delete:
                tags:
                  - Contacts - Relationships
                summary: Delete a contact relationship
            /v1/contacts:
              get:
                tags:
                  - Contacts
                summary: >-
                  Get list of all contacts in your group along with some of
                  their standard field data
              post:
                tags:
                  - Contacts
                summary: Create a contact
            /v1/contacts/{contactId}:
              get:
                tags:
                  - Contacts
                summary: >-
                  Get all custom field and standard field details on a specific
                  contact
              patch:
                tags:
                  - Contacts
                summary: Edit a contact’s standard field and custom field data
              delete:
                tags:
                  - Contacts
                summary: Delete a contact
            /v1/contacts/{contactId}/about:
              get:
                tags:
                  - Contacts
                summary: Get the About field content for a specific contact
            /v1/contacts/{contactId}/events:
              get:
                tags:
                  - Contacts
                summary: Get a contact’s audit history
            /v1/contacts/{contactId}/records:
              get:
                tags:
                  - Contacts
                summary: Get all notes and meetings where a specific contact was tagged
            /v1/contacts/{contactId}/relationships:
              get:
                tags:
                  - Contacts
                summary: Returns a list of a contact’s relationships
          tags:
            - name: Contacts
            - name: Contacts - Rel
    overlays:
      - type: APIs.io Search
        url: overlays/irn-contacts-openapi-search.yml
    aid: factset:factset-irn-contacts-api
  - name: FactSet Overview Report Builder API
    description: >-
      Relevant industry-specific data for high level analysis of public and
      private companies 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/overview-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#changelog
      - type: OpenAPI
        url: properties/overview-report-builder-openapi-original.yml
        data:
          openapi: 3.0.3
          externalDocs:
            description: API Documentation
            url: >-
              https://developer.factset.com/api-catalog/overview-report-builder-api
          info:
            title: FactSet Overview Report Builder API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          tags:
            - name: Company
          paths:
            /profile:
              get:
                tags:
                  - Company
                summary: Overview Profile
            /peer-list:
              get:
                tags:
                  - Company
                summary: Peer List
            /current-cap:
              get:
                tags:
                  - Company
                summary: Current Capitalization
            /financial-highlights:
              get:
                tags:
                  - Company
                summary: Financial / Estimate Highlights
            /transactions:
              get:
                tags:
                  - Company
                summary: Transactions
            /key-stats:
              description: >-
                Returns key financial metrics for private and public companies,
                as well as ETFs and mutual funds.  This endpoint provides a
                quick and easy way to obtain fundamental financial data. These
                key statistics can be used to evaluate a company's financial
                health, compare it to other companies in the same industry, and
                make informed investment decisions.
              get:
                tags:
                  - Company
                summary: null
    overlays:
      - type: APIs.io Search
        url: overlays/overview-report-builder-openapi-search.yml
    aid: factset:factset-overview-report-builder-api
  - name: FactSet Documents Distributor - CallStreet Events
    description: >-
      CallStreet Events contains all the Documents Distributor APIs that offer
      events data such as Events Audio and Near Real-Time Transcripts.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/documents-distributor-callstreet-events
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#changelog
      - type: OpenAPI
        url: >-
          properties/documents-distributor-callstreet-events-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Documents Distributor - CallStreet Events
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: >-
              https://developer.factset.com/api-catalog/documents-distributor-callstreet-events
          paths:
            /docs-distributor/audio/v1/history-files:
              get:
                summary: >-
                  Retrieve historical audio recordings and related metadata
                  within FactSet coverage.
                tags:
                  - Events Audio
                description: >

                  * Returns the **untrimmed** historical audio recordings and
                  related metadata dating back from May 10, 2011 to Sep 30,
                  2022.


                  * Returns the **trimmed** historical audio recordings and
                  related metadata dating back from May 10, 2011 to Dec 31,
                  2022.




                  Query parameters can be used to filter and narrow down the
                  results.
            /docs-distributor/audio/v1/list-files:
              get:
                summary: >-
                  Retrieve latest audio recordings and related metadata within
                  FactSet coverage.
                tags:
                  - Events Audio
                description: >-
                  Returns the latest audio recordings. Query parameters can be
                  used to filter and narrow down the results.
            /bulk-documents/nrt/v1/calls:
              get:
                summary: Returns the active calls happening at the moment.
                tags:
                  - Near Real-Time Transcripts
                description: Returns the active calls happening at the moment
            /bulk-documents/nrt/v1/list-snippets:
              get:
                summary: Returns the latest transcript snippets from an active call.
                tags:
                  - Near Real-Time Transcripts
                description: Returns the latest snippets from an active call
            /bulk-documents/nrt/v1/speakerids:
              get:
                summary: >-
                  Returns the latest speakerIds with the confidence scores
                  generated for an active call.
                tags:
                  - Near Real-Time Transcripts
                description: >-
                  Returns the latest speakerIds with the cosine
                  scores(confidence scores) generated for an active call.
            /bulk-documents/nrt/v1/indexed-nrt:
              get:
                summary: >-
                  Returns the  indexed transcript data  in small increments
                  throughout the duration of an active call.
                tags:
                  - Near Real-Time Transcripts
                description: >-
                  Returns the  indexed transcript data  in small increments
                  throughout the duration of an active call.
          tags:
            - name: Events Audio
              description: >-
                The Events Audio API provides access to historical as well as
                the latest audio recordings of various company events covered by
                FactSet.
            - name: Near Real-Time Transcripts
              description: >-
                The Near Real-Time Transcripts API enables access to Near
                Real-time Transcripts provided by CallStreet to time-sensitiv
    overlays:
      - type: APIs.io Search
        url: overlays/documents-distributor-callstreet-events-openapi-search.yml
    aid: factset:factset-documents-distributor-callstreet-events
  - name: FactSet Recommendation List API for Digital Portals
    description: >-
      Manage lists of financial products via a CMS or upload job, including
      revision control.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#changelog        
    overlays: []
    aid: factset:factset-recommendation-list-api-for-digital-portals
  - name: FactSet Benchmarks API
    description: >-
      Returns Benchmark Constituent data including weights, price, and market
      value for a specified date.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-benchmarks-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#changelog
      - type: OpenAPI
        url: properties/benchmarks-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Benchmarks API
          paths:
            /factset-benchmarks/v1/constituents:
              get:
                tags:
                  - Benchmark Constituents
                summary: >-
                  Returns the requested Benchmark Constituents and respective
                  Weights, Price and Market Value.
                description: >
                  Returns the requested Benchmark Constituents and respective
                  Weights, Price and Market Value. You must be authorized for
                  the `ids` requested. Use the helper endpoint **/id-list** for
                  valid identifiers.  
              post:
                tags:
                  - Benchmark Constituents
                summary: >-
                  Returns the requested Benchmark Constituents and respective
                  Weights, Price and Market Value.
                description: >
                  Returns the requested Benchmark Constituents and respective
                  Weights, Price and Market Value. You must be authorized for
                  the `ids` requested. Use the helper endpoint **/id-list** for
                  valid identifiers.
            /factset-benchmarks/v1/fixed-income-constituents:
              get:
                tags:
                  - Benchmark Constituents
                summary: >-
                  Returns the requested Fixed Income Benchmark Constituents and
                  respective Weights, Price and Market Value.
                description: >
                  Returns the requested Fixed Income Benchmark Constituents and
                  respective Weights, Price and Market Value. You must be
                  authorized for the `ids` requested.
              post:
                tags:
                  - Benchmark Constituents
                summary: >-
                  Returns the requested Benchmark Constituents and respective
                  Weights, Price and Market Value.
                description: >
                  Returns the requested Fixed Income Benchmark Constituents and
                  respective Weights, Price and Market Value. You must be
                  authorized for the `ids` requested.
            /factset-benchmarks/v1/index-snapshot:
              get:
                summary: >-
                  Index Level Prices, Returns, and related information as of a
                  single date.
                tags:
                  - Index Level
                description: >
                  Retrieves Index Level Prices and Returns information as of a
                  specific date. Simply submit a valid Benchmark ID (you can use
                  the /id-list endpoint for a sample list of ids), and date and
                  retrieve Index Level Prices, Returns, and related information.
              post:
                summary: >-
                  Retrieves the Index Level Snapshot of Prices and Returns
                  information for a given identifier and single date.
                tags:
                  - Index Level
                description: >
                  Retrieves Index Level Prices and Returns information as
                  aligned with FactSet's Benchmark Data Feed solution. Simply
                  submit a valid Benchmark ID (you can use the /id-list endpoint
                  for a sample list of ids), and date and retrieve Index Level
                  Prices, Returns, and related information.
            /factset-benchmarks/v1/index-history:
              get:
                summary: >-
                  Retrieves Index Level Prices and Returns information for a
                  list of identifiers and historical date range.
                tags:
                  - Index Level
                description: >
                  Retrieves Index Level Prices and Returns information as of a
                  date range requested. Simply submit a valid Benchmark ID (you
                  can use the /id-list endpoint for a sample list of ids), and
                  date range to retrieve Index Level Prices, Returns, and
                  related information.
              post:
                summary: >-
                  Retrieves Index Level Prices and Returns information for a
                  list of identifiers and historical date range.
                tags:
                  - Index Level
                description: >
                  Retrieves Index Level Prices and Returns information as
                  aligned with FactSet's Benchmark Data Feed solution. Simply
                  submit a valid Benchmark ID (you can use the /id-list endpoint
                  for a sample list of ids), and date and retrieve Index Level
                  Prices, Returns, and related information.
            /factset-benchmarks/v1/ratios:
              get:
                tags:
                  - Index Level
                summary: Returns the aggregated ratios of a requested benchmark
                description: >
                  Retrieves the index level ratios for a requested benchmark.
                  Ratios supported are expressed through metrics parameter, and
                  include Categories of Profitability, Valuation, Coverage, and
                  Leverage. <p> Using FactSet Market Aggregates, the service
                  combines fundamental, estimates, and pricing content to derive
                  ratios and per share values for global equity market indexes
                  and commercial benchmark vendors. The constituents of the
                  index are fetched on rolling basis over time period requested,
                  and then the metric requested is aggregated up to the index
                  level. To learn more about FMA, visit [OA
                  15778](https://my.apps.factset.com/oa/pages/15778).</p>
              post:
                tags:
                  - Index Level
                summary: Returns the aggregated ratios of a requested benchmark
                description: >
                  Retrieves the index level ratios for a requested benchmark.
                  Ratios supported are expressed through metrics parameter, and
                  include Categories of Profitability, Valuation, Coverage, and
                  Leverage. <p> Using FactSet Market Aggregates, the service
                  combines FactSet Fundamental, FactSet Estimates, and FactSet
                  Pricing content to derive ratios and per share values for
                  global equity market indexes and commercial benchmark vendors.
                  The constituents of the index are fetched on rolling basis
                  over time period requested, and then the metric requested is
                  aggregated up to the index level. To learn more about FMA,
                  visit [OA
                  15778](https://my.apps.factset.com/oa/pages/15778).</p>
            /factset-benchmarks/v1/id-list:
              get:
                summary: >-
                  Returns a sample list of Benchmark Identifiers and the
                  benchmark categorization to use in other Benchmark API
                  endpoints.
                tags:
                  - Helper
                description: >-
                  Returns a **sample** list of Benchmark Identifiers to use in
                  other Benchmark API endpoints. This is a supporting API to be
                  use alongside the other Benchmark API endpoints. For example,
                  use the fsymID value returned in this response as the input to
                  your `ids` parameter in the /constituents endpoint to return
                  constituents for that id.<p> *This is not the full list of
                  benchmark ids allowed in this service, but rather a
                  representation of the most commonly requested. For complete
                  assistance with ID lookup or concordance services, please
                  reach out to FactSet Support. *</p>
              post:
                summary: >-
                  Returns a sample list of Benchmark Identifiers and the
                  benchmark categorization to use in other Benchmark API
                  endpoints.
                tags:
                  - Helper
                description: >-
                  Returns a **sample** list of Benchmark Identifiers to use in
                  other Benchmark API endpoints. This is a supporting API to be
                  use alongside the other Benchmark API endpoints. For example,
                  use the fsymID value returned in this response as the input to
                  your `ids` parameter in the /constituents endpoint to return
                  constituents for that id.<p> *This is not the full list of
                  benchmark ids allowed in this service, but rather a
                  representation of the most commonly requested. For complete
                  assistance with ID lookup or concordance services, please
                  reach out to FactSet Sup
    overlays:
      - type: APIs.io Search
        url: overlays/benchmarks-openapi-search.yml
    aid: factset:factset-benchmarks-api
  - name: FactSet Bonds API for Digital Portals
    description: >-
      Search for fixed income instruments, using a criteria-based screener. The
      API provides also fundamental data and key figures.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/bonds-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#changelog       
    overlays: []
    aid: factset:factset-bonds-api-for-digital-portals
  - name: FactSet Virtual Portfolio API for Digital Portals
    description: >-
      Virtual portfolios empower self-directed investors to define, track and
      realize their mid- to long-term financial strategies
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#changelog        
    overlays: []
    aid: factset:factset-virtual-portfolio-api-for-digital-portals
  - name: FactSet S&P Global Fixed Income Evaluated Prices and Analytics API
    description: >-
      S&P Global Fixed Income Evaluated Prices & Analytics API provides access
      to evaluated pricing and analytics data for Corporate Bonds, Municipal
      Bonds and Asset Backed Securities(ABS). Perform quick analytics by
      controlling the date ranges, frequency.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#changelog
      - type: OpenAPI
        url: >-
          properties/s-p-global-fixed-income-evaluated-prices-and-analytics-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: S&P Global Fixed Income Evaluated Prices & Analytics API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: >-
              https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api
          paths:
            /markit-bond-prices-and-analytics/v1/prices:
              get:
                tags:
                  - Prices
                summary: Get Bid, Mid and Ask prices for a list of securities
                description: >
                  Get bond clean and dirty bid, mid and ask pricing data
                  provided by Markit for a specified date range and frequency.
              post:
                tags:
                  - Prices
                summary: Request Bid, Mid and Ask prices for a list of securities
                description: >
                  Get bond clean and dirty bid, mid and ask pricing data
                  provided by Markit for a specified date range and frequency.
            /markit-bond-prices-and-analytics/v1/spread:
              get:
                tags:
                  - Spread
                summary: Get the Spread and OAS data for a list of securities
                description: >
                  Get spread details like discount margin, OAS, Asset Swap
                  Spread, Z Spread, spread benchmark provided by Markit for a
                  specified date range and frequency.
              post:
                tags:
                  - Spread
                summary: Request the Spread and OAS data for a list of securities
                description: >
                  Get spread details like discount margin, OAS, Asset Swap
                  Spread, Z Spread, spread benchmark provided by Markit for a
                  specified date range and frequency.
            /markit-bond-prices-and-analytics/v1/yield:
              get:
                tags:
                  - Yield
                summary: >-
                  Get yield information for given date range and list of
                  securities
                description: >
                  Get the yield information like yield to maturity, yield to
                  worst, benchmark yield to maturity and yield to call provided
                  by Markit for a specified date range and frequency. 
              post:
                tags:
                  - Yield
                summary: >-
                  Request yield information for given date range and list of
                  securities
                description: >
                  Get the yield information like yield to maturity, yield to
                  worst, benchmark yield to maturity and yield to call provided
                  by Markit for a specified date range and frequency.
            /markit-bond-prices-and-analytics/v1/issuer-yield-curve:
              get:
                tags:
                  - Issuer Yield Curve
                summary: >-
                  Get yield curve data for given date range and list of
                  securities
                description: >
                  Get yield curve data points and dates for 3M, 6M, 1Y, 2Y, 3Y,
                  4Y, 5Y, 6Y, 7Y, 8Y, 9Y, 10Y, 15Y, 20Y, 25Y, 30Y and 40Y
                  provided by Markit for the specified date range and frequency.
              post:
                tags:
                  - Issuer Yield Curve
                summary: >-
                  Request yield curve data for given date range and list of
                  securities
                description: >
                  Get yield curve data points and dates for 3M, 6M, 1Y, 2Y, 3Y,
                  4Y, 5Y, 6Y, 7Y, 8Y, 9Y, 10Y, 15Y, 20Y, 25Y, 30Y and 40Y
                  provided by Markit for the specified date range and frequency.
            /markit-bond-prices-and-analytics/v1/sensitivity:
              get:
                tags:
                  - Sensitivity
                summary: Get the bond sensitivity data for a list of securities
                description: >
                  Get the sensitivity information like convexity, effective
                  convexity, effective duration, Macaulay duration and modified
                  duration provided by Markit for the specified date range and
                  frequency.
              post:
                tags:
                  - Sensitivity
                summary: Request the bond sensitivity data for a list of securities
                description: >
                  Get the sensitivity information like convexity, effective
                  convexity, effective duration, Macaulay duration and modified
                  duration provided by Markit for the specified date range and
                  frequency.
            /markit-bond-prices-and-analytics/v1/meta:
              get:
                tags:
                  - Meta
                summary: Get bond meta data for a list of securities.
                description: >
                  Get bond metadata like classification, maturity date,
                  symbology information like isin, cusip, vendorid, ticker,
                  issue and issuer name provided by Markit for a list of
                  securities.
              post:
                tags:
                  - Meta
                summary: Get bond meta data for a list of securities.
                description: >
                  Get bond metadata like classification, maturity date,
                  symbology information like isin, cusip, vendorid, ticker,
                  issue and issuer name provided by Markit for a list of
                  securities.
            /markit-bond-prices-and-analytics/v1/abs-details:
              get:
                tags:
                  - ABS Details
                summary: Get Asset Backed Security Details for a list of securities
                description: >
                  Get details for Asset Backed Securities like factors, pay up,
                  wal, cdr, cpr and prepay details provided by Markit for the
                  specified date range and frequency.
              post:
                tags:
                  - ABS Details
                summary: Request Asset Backed Security Details for a list of securities
                description: >
                  Get details for Asset Backed Securities like factors, pay up,
                  wal, cdr, cpr and prepay details provided by Markit for the
                  specified date range and frequency.
            /markit-bond-prices-and-analytics/v1/coupon:
              get:
                tags:
                  - Coupon
                summary: Get coupon data for given date range and list of securities
                description: >
                  Get coupon information like accrued interest, coupon, coupon
                  type and coupon frequency provided by Markit for specified
                  date range and frequency.
              post:
                tags:
                  - Coupon
                summary: >-
                  Request coupon data for given date range and list of
                  securities
                description: >
                  Get coupon information like accrued interest, coupon, coupon
                  type and coupon frequency provided by Markit for specified
                  date range and fr
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/s-p-global-fixed-income-evaluated-prices-and-analytics-openapi-search.yml
    aid: factset:factset-sp-global-fixed-income-evaluated-prices-and-analytics-api
  - name: FactSet Foreign Exchange Rate API
    description: >-
      Access Foreign Exchange Rate Spots and Forwards for a given currency pair
      and date range.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/foreign-exchange-rate-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#changelog
      - type: OpenAPI
        url: properties/foreign-exchange-rate-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Foreign Exchange Rates API
          paths:
            /foreign-exchange/v1/spots:
              get:
                tags:
                  - Spots
                summary: Gets spots for a list of currency pairs
                description: >
                  Gets FX Spot rates for a requested currency pair, date range,
                  and frequency. The WM Company calculates daily standardized
                  spot rates for global foreign exchange transactions, using
                  rates provided by Reuters. These rates are recognized globally
                  as the standard by banks, fund managers, and index compilers;
                  increasingly these rates are also being used for benchmark
                  currency trading.
              post:
                tags:
                  - Spots
                summary: Gets spots for a list of currency pairs
                description: >
                  Gets FX Spot rates for a requested currency pair, date range,
                  and frequency. The WM Company calculates daily standardized
                  spot rates for global foreign exchange transactions, using
                  rates provided by Reuters. These rates are recognized globally
                  as the standard by banks, fund managers, and index compilers;
                  increasingly these rates are also being used for benchmark
                  currency trading.
            /foreign-exchange/v1/forwards:
              get:
                tags:
                  - Forwards
                summary: Gets Forwards for a list of currency pairs
                description: >
                  Forward rates are provided in 80+ currencies against the U.S.
                  dollar, British pound, and euro. Forward quotes are provided
                  by Reuters and coverage is determined by the amount of
                  reliable currency trading in a particular currency. Bid,
                  offer, and mid rates are available for 11 `forwardPeriod`
                  periods - Overnight, Tomorrow Next, 1 Week (Spot Week), 1
                  month, 2 month, 3 month, 6 month, 9 month, 1 year, 2 year, 5
                  year. All identifiers have spot rates, but not all identifiers
                  have forward rate data.
              post:
                tags:
                  - Forwards
                summary: Gets Forwards for a list of currency pairs
                description: >
                  Forward rates are provided in 80+ currencies against the U.S.
                  dollar, British pound, and euro. Forward quotes are provided
                  by Reuters and coverage is determined by the amount of
                  reliable currency trading in a particular currency. Bid,
                  offer, and mid rates are available for 11 `forwardPeriod`
                  periods - Overnight, Tomorrow Next, 1 Week (Spot Week), 1
                  month, 2 month, 3 month, 6 month, 9 month, 1 year, 2 year, 5
                  year. All identifiers have spot rates, but not all identifiers
                  have forward 
    overlays:
      - type: APIs.io Search
        url: overlays/foreign-exchange-rate-openapi-search.yml
    aid: factset:factset-foreign-exchange-rate-api
  - name: FactSet Fixed Income Analytics Batcher API
    description: >-
      The Fixed Income Analytics Batcher API allows the user to enrich portfolio
      holdings with fixed income analytics and monitor requests interactively.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#changelog
      - type: OpenAPI
        url: properties/fixed-income-analytics-batcher-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: FIAB API
            license:
              name: Apache License 2.0
              url: http://www.apache.org/licenses/LICENSE-2.0.txt
          paths:
            /analytics/engines/fiab/v1/calculations:
              post:
                tags:
                  - FIAB Calculations
                summary: Run FIAB calculation
                description: "This endpoint creates a new FIAB calculation.\r\nThis must be used first before get status or cancelling endpoints with a calculation id.\r\nA successful response will contain the URL to check the status of the calculation request.\r\n\r\nRemarks:\r\n*\tAny settings in POST body will act as a one-time override over the settings saved in the FIAB template."
              get:
                tags:
                  - FIAB Calculations
                summary: Get all FIAB calculation summaries
                description: This endpoints returns all FIAB calculation requests.
            /analytics/engines/fiab/v1/calculations/{id}:
              get:
                tags:
                  - FIAB Calculations
                summary: Get FIAB calculation by id
                description: >-
                  This is the endpoint to check on the progress of a previously
                  requested ca
    overlays:
      - type: APIs.io Search
        url: overlays/fixed-income-analytics-batcher-openapi-search.yml
    aid: factset:factset-fixed-income-analytics-batcher-api
  - name: FactSet Open Risk API
    description: >-
      Through this API one can get a comprehensive access to factor-based linear
      risk analytics engine, offering flexible and powerful risk analyses with
      full capability.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/openrisk-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#changelog
      - type: OpenAPI
        url: properties/open-risk-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: Open Risk API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          tags:
            - name: About
            - name: Operations
          paths:
            /linear/{version}/riskmodels:
              get:
                summary: Get available risk models
                description: >-
                  Get the list of available risk models, including their
                  respective model codes required for use with other routes.
                tags:
                  - About
            /linear/{version}/riskmodels/{modelCode}:
              get:
                summary: Get risk model details
                description: >-
                  Get the meta data of the risk model for the corresponding
                  modelCode. modelCode can be obtained via
                  '/linear/{version}/riskmodels/' route.
                tags:
                  - About
            /linear/{version}/stats:
              get:
                summary: Get available risk statistics details
                description: >-
                  All base risk statistic names and their respective support
                  and/or requirement for certain name-settings statistics
                  options (such as: correlated specific risk, covariance
                  isolation method, etc.), available levels, and security group
                  calculation methodology. When 'securityGroupMethod' is
                  'statSpecific', please refer to statistics documentation
                  service for more information.
                tags:
                  - About
            /linear/{version}/stats-names-only:
              get:
                summary: Get available risk statistics names
                description: >-
                  All available risk statistic names including statistics names
                  containing risk statistics options such as CSR (correlated
                  specific risk)
                tags:
                  - About
            /linear/{version}/health:
              get:
                summary: Get health of service
                description: Health status of the service
                tags:
                  - About
            /linear/{version}/calculate/from-holdings:
              post:
                summary: Calculate risk statistics
                description: >-
                  Calculate predicted risk statistics for provided holdings
                  using risk model data. Asset symbols and market values/weights
                  are required.
                tags:
                  - Operations
            /linear/{version}/generate/id-mapping:
              post:
                summary: Generate risk model ID mapping
                description: >-
                  Resolve all input holdings IDs against a risk model for
                  coverage and provide a mapping to security indices in the
                  model or the reason for exclusion
                tags:
                  - Operations
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/op
    overlays:
      - type: APIs.io Search
        url: overlays/open-risk-openapi-search.yml
    aid: factset:factset-open-risk-api
  - name: FactSet Intraday Tick History API
    description: >-
      FactSet’s Tick History provides cost-effective access to consolidated
      real-time and delayed global exchange data. Proprietary technology
      normalizes data from over 200 global exchanges and across 19 tick history
      fields. Asset types integrated…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-intraday-tick-history-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#changelog
      - type: OpenAPI
        url: properties/intraday-tick-history-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: Tick History
            license:
              name: Apache 3.0
              url: http://www.apache.org/licenses/LICENSE-2.0.html
          externalDocs:
            description: Data Service Manual
            url: >-
              https://www.factset.com/hubfs/Website_Downloads/Exchange%20DataFeed/data%20service%20manual%202.0b.pdf
          paths:
            /TickHistory/history:
              get:
                tags:
                  - Tick History
                summary: >-
                  Tick History service returns trade data and associated quotes
                  for a client specified interval and time period
                description: >-
                  When using an HTTP GET request, the seach criteria is sent via
                  the query string in the URL. Please make sure that all
                  requests contain a date within the past trailing year. Fields
                  are added using ampersands, with enumerations seperated by
                  commas. <p>**Try it Out** - references a sandbox environment
                  to simulate live reponses. Available `id` is limited to
                  BABA-USA,WALMEX-MX,7203-TKS,VOD-LON,NPN-JSE,MABAX,NZF,SPY-USA,AGG-USA,GLD-USA,AOR-USA,MNA-USA,UUP-USA,SP50-SPX,ESX-STX,XAO-ASX,WD-MSX,NG00-USA,GC00-USA,CC00-USA,C00-USA,FC00-USA,ER00-USA,EURUSD-FX1,USDMXN-FX1,AUDJPY-FX1,EURCZK-FX1,USDILS-FX1,USDZAR-FX1,US10YY-TU1,FDS#190621C00145000-USA,FDS#190621P00145000-USA.
                  Current day data is not available.</p>
            /TickHistory/firsttrade:
              get:
                tags:
                  - First Trade
                summary: >-
                  Request returns data for the first trade (official and
                  unofficial) after the specified time
                description: ''
            /TickHistory/lasttrade:
              get:
                tags:
                  - Last Trade
                summary: >-
                  Request returns data for the last trade and associated quotes
                  before the specified time
                description: ''
            /TickHistory/qat:
              get:
                tags:
                  - Quote at Time
                summary: Request returns a quote at the specified time
                description: ''
            /TickHistory/tradesattime:
              get:
                tags:
                  - Trades at Time
                summary: >-
                  Request returns the before and after trade data along with the
                  associated quotes for the specified time
                description: null
    overlays:
      - type: APIs.io Search
        url: overlays/intraday-tick-history-openapi-search.yml
    aid: factset:factset-intraday-tick-history-api
  - name: FactSet Funds API
    description: Reference and Time Series Mutual Fund Data
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-funds-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-funds-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-funds-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-funds-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-funds-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-funds-api#changelog
      - type: OpenAPI
        url: properties/funds-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Funds API
          tags:
            - name: Reference
              description: >-
                Basic reference data for funds, including summary, status,
                benchmark details, classifications, and more.
            - name: Prices & Returns
              description: Fetch Fund Price (NAV) and Returns over a requested time-series.
            - name: Fund Flows & AUM
              description: Fetch Fund AUM and Fund Flows over a requested time-series.
            - name: Helper
              description: Check the Fund's current status and database availability
          paths:
            /factset-funds/v1/summary:
              get:
                tags:
                  - Reference
                summary: Get basic reference summary data for a Fund.
                description: >
                  Fetch basic reference data for the requested fund(s),
                  including countryDomicile, shrClass, shrClassInceptDate, etc. 
              post:
                tags:
                  - Reference
                summary: Get basic reference data for a large list of Fund ids.
                description: >
                  Fetch basic reference data for the requested fund(s),
                  including countryDomicile, shrClass, shrClassInceptDate, etc. 
            /factset-funds/v1/classifications:
              get:
                tags:
                  - Reference
                summary: Get basic Fund Classifications
                description: >
                  Fetch basic fund classification data, such as Asset Class,
                  Category, Focus, Niche, Region, and more.<p> FactSet Mutual
                  Funds Reference uses FactSet's proprietary Fund Classification
                  System, which categorizes funds using a rules-based system
                  that is derived from seven core classifications. This system
                  evaluates the asset class, economic development level, and
                  geographical region as described in each fund's prospectus and
                  marketing materials. Fund exposure details are presented on
                  successively granular levels- category, then focus, and then
                  niche. Moreover, FactSet Fund Reference captures over 40
                  unique data points for U.S. mutual funds. All data items are
                  grouped in one of two levels, either as a Fund or as a Share
                  Class.</p><p>For more details regarding FactSet's Fund
                  Classification, visit Online Assistant
                  [21436](https://my.apps.factset.com/oa/pages/21436) or
                  download - [FactSet Fund Classification System Rules &
                  Methodology](https://my.apps.factset.com/oa/cms/oaAttachment/4547a2f4-5df5-4ec9-a0d3-7d51610dd637/26837)</p><p>

                  |Classification Type|Description|

                  |||

                  |Asset Class|The asset class of the fund (e.g. Equity, Fixed
                  Income, Currency, Commodities, Asset Allocation, or
                  Alternatives) based on the fund's mandate.|

                  |Category|The 1st of 3 asset-class-specific, hierarchical
                  exposure tiers; the broadest category the fund falls under
                  within its asset class (e.g., Size & Style, Sector, Precious
                  Metals, Absolute Returns); based on the fund's mandate.|

                  |Focus|The 2nd of 3 asset-class-specific, hierarchical
                  exposure tiers; the fund's classification within its category
                  (e.g. Small Cap, Energy, Palladium, Long/Short); based on the
                  fund's mandate.|

                  |Niche|The 3rd of 3 asset-class-specific, hierarchical
                  exposure tiers; The fund's classification within its Focus.
                  Most granular tier of exposure sort (e.g., Growth, Coal,
                  Physically held, Merger Arbitrage); based on the fund's
                  mandate.|

                  |Economic Development Level|The country development level of
                  the fund (Developed, Emerging, Frontier, or Blended) based on
                  the fund's mandate.|

                  |Region|The broad regional exposure of the fund (e.g., Latin
                  America, Asia-Pacific, Global) based on the fund's mandate.|

                  |Specific Geography|The specific geographic exposure of the
                  fund (e.g., Developed Europe, Chile, Asia-Pacific Ex-Japan)
                  based on the fund's mandate.|

                  </p>
              post:
                tags:
                  - Reference
                summary: Get basic Fund Classifications for a large list of ids.
                description: >
                  Fetch basic fund classification data, such as Asset Class,
                  Category, Focus, Niche, Region, and more.<p> FactSet Mutual
                  Funds Reference uses FactSet's proprietary Fund Classification
                  System, which categorizes funds using a rules-based system
                  that is derived from seven core classifications. This system
                  evaluates the asset class, economic development level, and
                  geographical region as described in each fund's prospectus and
                  marketing materials. Fund exposure details are presented on
                  successively granular levels- category, then focus, and then
                  niche. Moreover, FactSet Fund Reference captures over 40
                  unique data points for U.S. mutual funds. All data items are
                  grouped in one of two levels, either as a Fund or as a Share
                  Class.</p><p>For more details regarding FactSet's Fund
                  Classification, visit Online Assistant
                  [21436](https://my.apps.factset.com/oa/pages/21436) or
                  download - [FactSet Fund Classification System Rules &
                  Methodology](https://my.apps.factset.com/oa/cms/oaAttachment/4547a2f4-5df5-4ec9-a0d3-7d51610dd637/26837)</p><p>

                  |Classification Type|Description|

                  ||---|

                  |Asset Class|The asset class of the fund (e.g. Equity, Fixed
                  Income, Currency, Commodities, Asset Allocation, or
                  Alternatives) based on the fund's mandate.|

                  |Category|The 1st of 3 asset-class-specific, hierarchical
                  exposure tiers; the broadest category the fund falls under
                  within its asset class (e.g., Size & Style, Sector, Precious
                  Metals, Absolute Returns); based on the fund's mandate.|

                  |Focus|The 2nd of 3 asset-class-specific, hierarchical
                  exposure tiers; the fund's classification within its category
                  (e.g. Small Cap, Energy, Palladium, Long/Short); based on the
                  fund's mandate.|

                  |Niche|The 3rd of 3 asset-class-specific, hierarchical
                  exposure tiers; The fund's classification within its Focus.
                  Most granular tier of exposure sort (e.g., Growth, Coal,
                  Physically held, Merger Arbitrage); based on the fund's
                  mandate.|

                  |Economic Development Level|The country development level of
                  the fund (Developed, Emerging, Frontier, or Blended) based on
                  the fund's mandate.|

                  |Region|The broad regional exposure of the fund (e.g., Latin
                  America, Asia-Pacific, Global) based on the fund's mandate.|

                  |Specific Geography|The specific geographic exposure of the
                  fund (e.g., Developed Europe, Chile, Asia-Pacific Ex-Japan)
                  based on the fund's mandate.|

                  </p>
            /factset-funds/v1/benchmark-details:
              get:
                tags:
                  - Reference
                summary: Get the Fund's Primary and Segment Benchmark Details
                description: >
                  Fetch the Fund's Benchmark and Segment Benchmark ids. These
                  ids can be then used in the [Benchmarks
                  API](https://developer.factset.com/api-catalog/factset-benchmarks-api)
                  to fetch index-level prices, returns, constituents data.
              post:
                tags:
                  - Reference
                summary: >-
                  Get the Fund's Primary and Segment Benchmark details for large
                  list of ids.
                description: >
                  Fetch the Fund's Benchmark and Segement Benchmark ids. These
                  ids can be then used in the [Benchmarks
                  API](https://developer.factset.com/api-catalog/factset-benchmarks-api)
                  to fetch index-level prices, returns, constituents data.
            /factset-funds/v1/costs-fees:
              get:
                tags:
                  - Reference
                summary: Get the Fund's Costs, Investment minimums and Risk, and Fees.
                description: >
                  Fetch the Fund's Costs, Investment minimums and Risk, and
                  Fees. This subcategory includes management fees, 12b-1 fees,
                  expense ratios, and several other data items. The value for
                  each specified share class is expressed as a percentage of the
                  AUM.
              post:
                tags:
                  - Reference
                summary: >-
                  Get the Fund's Costs, Investment minimums and Risk, and Fees
                  for large list of ids.
                description: >
                  Fetch the Fund's Costs, Investment minimums and Risk, and
                  Fees. Data Items include Expense Ratios, investment minimums
                  and maximums, swing prices, entry and exit expenses, and more.
            /factset-funds/v1/managers:
              get:
                tags:
                  - Reference
                summary: >-
                  Get a list of Fund Managers and related details for a list of
                  ids.
                description: >
                  Fetch basic Fund manager details, such as Title, Phone, Job Id
                  and Name. NOTE - A subscription to FactSet's Ownership product
                  is required to access formulas in this Asset Managers
                  subcategory.
              post:
                tags:
                  - Reference
                summary: >-
                  Get a list of Fund Managers and related details for a large
                  list of ids.
                description: >
                  Fetch basic Fund manager details, such as Title, Phone, Job Id
                  and Name. 
            /factset-funds/v1/related-funds:
              get:
                tags:
                  - Reference
                summary: Get a list of Related Funds for a list of Fund ids.
                description: >
                  Fetch the five related fund share classes. Fund share classes
                  can be related if they belong to the same Fund Classification
                  segment, have the same share class type, have the same legal
                  structure, and have the same country of primary exchange.
                  Beyond the baseline criteria, the five most relevant funds are
                  determined based on whether they follow the same benchmark,
                  have the same maturity, and have the same selection strategy
                  as the specified share class.
              post:
                tags:
                  - Reference
                summary: Get a list of Related Funds for a large list of Fund ids.
                description: >
                  Fetch the five related fund share classes. Fund share classes
                  can be related if they belong to the same Fund Classification
                  segment, have the same share class type, have the same legal
                  structure, and have the same country of primary exchange.
                  Beyond the baseline criteria, the five most relevant funds are
                  determined based on whether they follow the same benchmark,
                  have the same maturity, and have the same selection strategy
                  as the specified share class.
            /factset-funds/v1/prices:
              get:
                tags:
                  - Prices & Returns
                summary: Get Fund Prices (NAV) for a requested time-series
                description: >
                  Get Fund Prices (NAV) for a requested date range and list of
                  ids.
              post:
                tags:
                  - Prices & Returns
                summary: >-
                  Get Fund Prices (NAV) for a requested date range and large
                  list of ids.
                description: >
                  Fetch fund prices (NAV) as of a requested date range and a
                  large list of ids. 
            /factset-funds/v1/returns:
              get:
                tags:
                  - Prices & Returns
                summary: Get Fund Returns for a requested time-series
                description: >
                  Get Fund NAV Returns over a time-series for the requested date
                  range and frequency. <p>The simple Total Return NAV shows the
                  fund's total return level by reinvesting distributions so that
                  ex-date NAVs are increased by the distribution amount and
                  compounded thereafter. Total return NAV compounds daily and is
                  calculated from the first available NAV date of each fund. The
                  total return NAV series reflects the value that an investor
                  would own if it had purchased one share at the inception date
                  and reinvested all dividends on a Gross basis.</p><p> Control
                  the dividends to include or exclude using the dividendAdjust
                  parameter. The first available NAV date of each fund can be
                  found in the /summary endpoint as `priceFristDate`. Visit [OA
                  #21437](https://my.apps.factset.com/oa/pages/21437) for more
                  details.</p>
              post:
                tags:
                  - Prices & Returns
                summary: >-
                  Get Fund Returns for a requested time-series and large list of
                  ids
                description: >
                  Get Fund NAV Returns over a time-series for the requested date
                  range and frequency. <p>The simple Total Return NAV shows the
                  fund's total return level by reinvesting distributions so that
                  ex-date NAVs are increased by the distribution amount and
                  compounded thereafter. Total return NAV compounds daily and is
                  calculated from the first available NAV date of each fund. The
                  total return NAV series reflects the value that an investor
                  would own if it had purchased one share at the inception date
                  and reinvested all dividends on a Gross basis.</p><p> Control
                  the dividends to include or exclude using the dividendAdjust
                  parameter. The first available NAV date of each fund can be
                  found in the /summary endpoint as `priceFristDate`. Visit [OA
                  #21437](https://my.apps.factset.com/oa/pages/21437) for more
                  details.</p>
            /factset-funds/v1/returns-snapshot:
              get:
                tags:
                  - Prices & Returns
                summary: >-
                  Get Fund Returns over pre-defined time horizons as of a
                  specific date.
                description: >
                  Get Fund Returns over pre-defined time horizons as of a
                  specific date. Use the date parameter to set the perspective
                  date, and adjust the return type to include or exclude
                  dividends using the dividendAdjust parameter. Returns Ranges
                  include - 

                  * oneWeek

                  * oneMonth

                  * threeMonth

                  * yearToDate

                  * oneYear

                  * threeYear

                  * threeYearAnnualized

                  * fiveYear

                  * fiveYearAnnualized
              post:
                tags:
                  - Prices & Returns
                summary: >-
                  Get Fund Returns over pre-defined time horizons as of a
                  specific date.
                description: >
                  Get Fund Returns over pre-defined time horizons as of a
                  specific date. Use the date parameter to set the perspective
                  date, and adjust the return type to include or exclude
                  dividends using the dividendAdjust parameter. Returns Ranges
                  include - 

                  * oneWeek

                  * oneMonth

                  * threeMonth

                  * yearToDate

                  * oneYear

                  * threeYear

                  * threeYearAnnualized

                  * fiveYear

                  * fiveYearAnnualized 
            /factset-funds/v1/returns-range:
              get:
                tags:
                  - Prices & Returns
                summary: Get Fund Returns for a user-defined date range
                description: >
                  Get Fund Returns between a specified startDate and endDate.
                  The service will compute the return between those two periods
                  to retrieve the single value and does not create a
                  time-series. Control the return type to include or exclude
                  dividends by using the dividendAdjust parameter.
              post:
                tags:
                  - Prices & Returns
                summary: >-
                  Get Fund Returns over pre-defined time horizons as of a
                  specific date for large list of ids.
                description: >
                  Get Fund Returns between a specified startDate and endDate.
                  The service will compute the return between those two periods
                  to retrieve the single value and does not create a
                  time-series. Control the return type to include or exclude
                  dividends by using the dividendAdjust parameter.
            /factset-funds/v1/aum:
              get:
                tags:
                  - Fund Flows & AUM
                summary: Get Fund AUM for a requested date range and list of ids
                description: >
                  Get the Fund Level or Share Class Level Assets Under
                  Management (AUM). <p>NOTE - AUM can be accessed on a five-day
                  calendar. If a vendor does not provide NAV and shares
                  outstanding on a market holiday, the previous trading day
                  value is used. If a vendor does provide data on a market
                  holiday, that value will be presented, and then fund flows and
                  AUM will be calculated. When you are manually calculating
                  actual AUM on a market holiday or a rolled date, it will
                  differ from the value shown in the FactSet workstation. This
                  is due to the previous day's NAV being used in the manual AUM
                  calculation.</p>
              post:
                tags:
                  - Fund Flows & AUM
                summary: Get Fund AUM for a requested date range and large list of ids
                description: >
                  Get the Fund Level or Share Class Level Assets Under
                  Management (AUM). <p>NOTE - AUM can be accessed on a five-day
                  calendar. If a vendor does not provide NAV and shares
                  outstanding on a market holiday, the previous trading day
                  value is used. If a vendor does provide data on a market
                  holiday, that value will be presented, and then fund flows and
                  AUM will be calculated. When you are manually calculating
                  actual AUM on a market holiday or a rolled date, it will
                  differ from the value shown in the FactSet workstation. This
                  is due to the previous day's NAV being used in the manual AUM
                  calculation.</p>
            /factset-funds/v1/flows:
              get:
                tags:
                  - Fund Flows & AUM
                summary: Get Fund Flows for a requested date range and list of ids
                description: >
                  Get the Fund Flows. One-day fund flows are calculated by
                  subtracting the shares outstanding at previous close from the
                  shares outstanding one day prior to close, and then
                  multiplying the result by the net asset value (NAV) of one day
                  prior to close.


                  The fund flows calculation breaks down as follows - 

                  (Shares Outstanding T0 - Shares Outstanding T-1) * NAV T-1

                  While NAVs are routinely reported on a trade-day (T0) basis,
                  industry-wide shares outstanding are a mixture of trade-day
                  and next-day values. Trade-day values are not verified, as the
                  actual creation/redemption activity takes place late in the
                  evening, after NAVs and shares outstanding values have been
                  published. The result is that multiple industry flows are
                  calculated using unverified T0 values.

                  FactSet has standardized all shares outstanding reporting on a
                  next-day basis. To ensure that assets under management (AUM)
                  and fund flows are synchronized, FactSet synchronizes shares
                  outstanding values and changes with NAVs reported on the
                  previous day, as the creations and redemptions used the
                  previous day's reported NAVs as a transaction price. <p>For
                  more information on Fund Flows Methodology, Time Windows,
                  Makret Holidays, and Missing Values, visit - [OA
                  #17863](https://my.apps.factset.com/oa/pages/17863#Flows_Calculation)</p>
              post:
                tags:
                  - Fund Flows & AUM
                summary: >-
                  Get Fund Flows for a requested date range and large list of
                  ids
                description: >
                  Get the Fund Flows. One-day fund flows are calculated by
                  subtracting the shares outstanding at previous close from the
                  shares outstanding one day prior to close, and then
                  multiplying the result by the net asset value (NAV) of one day
                  prior to close.


                  The fund flows calculation breaks down as follows - 

                  (Shares Outstanding T0 - Shares Outstanding T-1) * NAV T-1

                  While NAVs are routinely reported on a trade-day (T0) basis,
                  industry-wide shares outstanding are a mixture of trade-day
                  and next-day values. Trade-day values are not verified, as the
                  actual creation/redemption activity takes place late in the
                  evening, after NAVs and shares outstanding values have been
                  published. The result is that multiple industry flows are
                  calculated using unverified T0 values.

                  FactSet has standardized all shares outstanding reporting on a
                  next-day basis. To ensure that assets under management (AUM)
                  and fund flows are synchronized, FactSet synchronizes shares
                  outstanding values and changes with NAVs reported on the
                  previous day, as the creations and redemptions used the
                  previous day's reported NAVs as a transaction price. <p>For
                  more information on Fund Flows Methodology, Time Windows,
                  Makret Holidays, and Missing Values, visit - [OA
                  #17863](https://my.apps.factset.com/oa/pages/17863#Flows_Calculation)</p>
            /factset-funds/v1/status:
              get:
                tags:
                  - Helper
                summary: Get Fund's current status and database availability
                description: >
                  Get the funds active status, share class status, and database
                  availability. Most common use is for coverage checks and id
                  resolution checks.
              post:
                tags:
                  - Helper
                summary: >-
                  Get Fund's current status and database availability for large
                  list of ids.
                description: >
                  Get the funds active status, share class status, and database
                  availability. Most common use is for coverage checks and id
                  resoluti
    overlays:
      - type: APIs.io Search
        url: overlays/funds-openapi-search.yml
    aid: factset:factset-funds-api
  - name: FactSet Terms and Conditions API
    description: FactSet Security Reference - Fixed Income Terms & Conditions
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-terms-and-conditions-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#changelog
      - type: OpenAPI
        url: properties/terms-and-conditions-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Terms & Conditions API
            license:
              name: License Information
              url: http://www.factset.com/api/license.html
          tags:
            - name: Terms & Conditions
              description: >-
                Select specific Terms & Conditions fields for a list of Fixed
                Income Security identifiers.
            - name: Issue Size
              description: >-
                Fetch the Fixed Income Issue Details, such as Amount
                Outstanding, Change, and Type.
            - name: Coupons
              description: Coupon History and Schedules
            - name: Covenants
              description: Covenant Details and Negative Covenants
            - name: Redemptions
              description: Redemption Prices
            - name: Agents
              description: Agency Details
            - name: Use of Proceeds
              description: Use of Proceeds raised from Fixed Income Issues
            - name: Underwriters
              description: Lead Underwriter Details
            - name: Convertibles
              description: Convertible Details, History, and Triggers
          paths:
            /factset-terms-and-conditions/v1/terms-and-conditions:
              get:
                summary: >-
                  Return select Terms and Conditions items for a Fixed Income
                  security.
                description: >
                  Returns Terms and Conditions data items for the Fixed Income
                  security. Includes items for Conditional Redemptions,
                  Redemption Options, Security Details, and Coupon Details.

                  Use the `fields` parameter to request specific items only or
                  request an entire category of items to fetch all available
                  fields matching that category(s).

                  <p>*For T&C data related to Agency, Coupon History, Issue
                  Size, Negative Covenants, or Redemption Prices, Lead
                  Underwriters, and Use of Proceeds, please use respective
                  endpoints optimized for that content.*</p>
                tags:
                  - Terms & Conditions
              post:
                summary: >-
                  Return Terms and Conditions for a list of Fixed Income
                  securities.
                description: >
                  Returns Terms and Conditions data items for the Fixed Income
                  security. Includes reference items for Conditional
                  Redemptions, Redemption Options, Security Details, Convertible
                  Features, and Coupon Details.

                  Use the `fields` parameter to request specific items only or
                  request an entire category of items to fetch all available
                  fields matching that category(s).

                  <p>*For T&C data related to Agency, Coupon History, Issue
                  Size, Negative Covenants, or Redemption Prices, Lead
                  Underwriters, and Use of Proceeds, please use respective
                  endpoints optimized for that content.*</p>
                tags:
                  - Terms & Conditions
            /factset-terms-and-conditions/v1/fields:
              get:
                summary: Available fields for /terms-and-conditions endpoint
                tags:
                  - Terms & Conditions
                description: >
                  Returns a list of available fields that can be used in the
                  `fields`

                  parameter of the **/terms-and-conditions** endpoint.

                  Leave _category_ blank to request all available items.

                  Make Note, this does not represent all available fields within
                  the Terms and Conditions API and all other endpoints.
            /factset-terms-and-conditions/v1/issue-size:
              get:
                summary: Return Issue Size data for a list of Fixed Income securities.
                description: |
                  Returns Issue Size data for the Fixed Income security.
                tags:
                  - Issue Size
              post:
                summary: >-
                  Return Issue Size data for a large list of Fixed Income
                  securities.
                description: |
                  Returns Issue Size data for a list of Fixed Income securities.
                tags:
                  - Issue Size
            /factset-terms-and-conditions/v1/coupon-history:
              get:
                summary: >-
                  Return historical Coupon information for a Fixed Income
                  security.
                description: >
                  Returns historical Coupon information for the Fixed Income
                  security.
                tags:
                  - Coupons
              post:
                summary: >-
                  Return historical Coupon information for a list of Fixed
                  Income securities.
                description: >
                  Returns historical Coupon information for a list of Fixed
                  Income securities.
                tags:
                  - Coupons
            /factset-terms-and-conditions/v1/coupon-schedules:
              get:
                summary: Return Coupon Sechedules for a Fixed Income security.
                description: >
                  Returns Coupon Schedules information for the Fixed Income
                  security.
                tags:
                  - Coupons
              post:
                summary: >-
                  Return Coupon Schedules information for a list of Fixed Income
                  securities.
                description: >
                  Returns historical Coupon Schedules information for a list of
                  Fixed Income securities.
                tags:
                  - Coupons
            /factset-terms-and-conditions/v1/covenant-details:
              get:
                summary: Return Covenant Details for a Fixed Income security.
                description: |
                  Returns Covenant Details for the Fixed Income security.
                tags:
                  - Covenants
              post:
                summary: Return Covenant Details for a list of Fixed Income securities.
                description: >
                  Returns Covenant Details for a list of Fixed Income
                  securities.
                tags:
                  - Covenants
            /factset-terms-and-conditions/v1/redemption-prices:
              get:
                summary: Return Redemption Prices for a Fixed Income security.
                description: |
                  Returns Redemption Prices for the Fixed Income security.
                tags:
                  - Redemptions
              post:
                summary: >-
                  Return Redemption Prices for a list of Fixed Income
                  securities.
                description: >
                  Returns Redemption Prices for a list of Fixed Income
                  securities.
                tags:
                  - Redemptions
            /factset-terms-and-conditions/v1/agents:
              get:
                summary: Return Agents items for a Fixed Income security.
                description: |
                  Returns Agents data items for the Fixed Income security.
                tags:
                  - Agents
              post:
                summary: Return Agents items for a list of Fixed Income securities.
                description: >
                  Returns Agents data items for a list of Fixed Income
                  securities.
                tags:
                  - Agents
            /factset-terms-and-conditions/v1/lead-underwriters:
              get:
                summary: Return Lead Underwriters for a Fixed Income security.
                description: |
                  Returns Lead Underwriters for the Fixed Income security.
                tags:
                  - Underwriters
              post:
                summary: >-
                  Return Lead Underwriters for a list of Fixed Income
                  securities.
                description: >
                  Returns Lead Underwriters for a list of Fixed Income
                  securities.
                tags:
                  - Underwriters
            /factset-terms-and-conditions/v1/use-of-proceeds:
              get:
                summary: Return Use of Proceeds for a Fixed Income security.
                description: |
                  Returns Use of Proceeds for the Fixed Income security.
                tags:
                  - Use of Proceeds
              post:
                summary: Return Use of Proceeds for a list of Fixed Income securities.
                description: |
                  Returns Use of Proceeds for a list of Fixed Income securities.
                tags:
                  - Use of Proceeds
            /factset-terms-and-conditions/v1/convertible-details:
              get:
                summary: >-
                  Return Convertible Details for a list of Convertible Fixed
                  Income securities.
                description: >
                  Returns Convertible Details for a list of securities, such as
                  -
                    * Convertible Currency
                    * Convertible Effective Date
                    * Convertible Notice Days Max and Min
                    * Convertible Payment Form
                    * Convertible Payment Details
                    * Convertible Payment Form Election
                    * Convertible Price Method
                    * Convertible Type
                    * Convertibles Ratio
                    * More
                tags:
                  - Convertibles
              post:
                summary: >-
                  Return Convertible Details data for a large list of Fixed
                  Income securities.
                description: >
                  Returns Convertible Details for a list of securities, such as
                  -
                    * Convertible Currency
                    * Convertible Effective Date
                    * Convertible Notice Days Max and Min
                    * Convertible Payment Form
                    * Convertible Payment Details
                    * Convertible Payment Form Election
                    * Convertible Price Method
                    * Convertible Type
                    * Convertibles Ratio
                    * More
                tags:
                  - Convertibles
            /factset-terms-and-conditions/v1/convertible-history:
              get:
                summary: >-
                  Return Convertible History data for a list of Fixed Income
                  securities.
                description: >
                  Returns Convertible History data for the Fixed Income
                  security, including - * Convertibles Price * Convertibles
                  Effective Date
                tags:
                  - Convertibles
              post:
                summary: >-
                  Return Convertible History data for a large list of Fixed
                  Income securities.
                description: >
                  Returns Convertible History data for a list of Fixed Income
                  securities.
                tags:
                  - Convertibles
            /factset-terms-and-conditions/v1/convertible-triggers:
              get:
                summary: >-
                  Return Convertible Triggers data for a list of Fixed Income
                  securities.
                description: >
                  Returns Convertible Triggers data for the Fixed Income
                  security including the Convertible Trigger Id, Event, and
                  Description.
                tags:
                  - Convertibles
              post:
                summary: >-
                  Return Convertible Trigger data for a large list of Fixed
                  Income securities.
                description: >
                  Returns Convertible Triggers data for the Fixed Income
                  security including the Convertible Trigger Id, Event, and
                  Description.
                tags:
                  - Conv
    overlays:
      - type: APIs.io Search
        url: overlays/terms-and-conditions-openapi-search.yml
    aid: factset:factset-terms-and-conditions-api
  - name: FactSet Northfield Portfolio Optimizer
    description: Northfield Portfolio Optimizer API
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/northfield-portfolio-optimizer
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#changelog
      - type: OpenAPI
        url: properties/northfield-portfolio-optimizer-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: Northfield Portfolio API
            license:
              name: Apache License 2.0
              url: http://www.apache.org/licenses/LICENSE-2.0.txt
          paths:
            /analytics/lookups/v3/accounts/{path}:
              get:
                tags:
                  - Accounts
                summary: Get accounts and sub-directories in a directory
                description: >-
                  This endpoint looks up all ACCT and ACTM files and
                  sub-directories in a given directory.
            /analytics/lookups/v3/currencies:
              get:
                tags:
                  - Currencies
                summary: Get currencies
                description: >-
                  This endpoint lists all the currencies that can be applied to
                  any calculation.
            /analytics/engines/npo/v3/optimizations:
              post:
                tags:
                  - NPO Optimizer
                summary: Create and Run NPO optimization
                description: "This endpoint creates and runs NPO optimization specified in the POST body parameters.\r\n            \r\nRemarks:\r\n            \r\n*\tAny settings in POST body will act as a one-time override over the settings saved in the strategy document."
            /analytics/engines/npo/v3/optimizations/{id}:
              put:
                tags:
                  - NPO Optimizer
                summary: Create or Update NPO optimization and run it.
                description: >-
                  This endpoint updates and run the NPO optimization specified
                  in the PUT body parameters. It also allows the creation of new
                  NPO optimization with custom id.
              get:
                tags:
                  - NPO Optimizer
                summary: Get NPO optimization parameters by id
                description: >-
                  This is the endpoint that returns the optimization parameters
                  passed for an optimization.
              delete:
                tags:
                  - NPO Optimizer
                summary: Cancel NPO optimization by id
                description: >-
                  This is the endpoint to cancel a previously submitted
                  optimization.
            /analytics/engines/npo/v3/optimizations/{id}/status:
              get:
                tags:
                  - NPO Optimizer
                summary: Get NPO optimization status by id
                description: "This is the endpoint to check on the progress of a previously requested optimization.\r\nIf the optimization has finished computing, the body of the response will contain result in JSON.\r\nOtherwise, the optimization is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage."
            /analytics/engines/npo/v3/optimizations/{id}/result:
              get:
                tags:
                  - NPO Optimizer
                summary: Get NPO optimization result by id
                description: >-
                  This is the endpoint to get the result of a previously
                  requested optimization.
            /analytics/engines/npo/v3/strategies/{path}:
              get:
                tags:
                  - StrategyDocuments
                summary: >-
                  Get Northfield strategy documents and sub-directories in a
                  directory
                description: >-
                  This endpoint looks up all Northfield strategy documents and
                  sub-directories in a given 
    overlays:
      - type: APIs.io Search
        url: overlays/northfield-portfolio-optimizer-openapi-search.yml
    aid: factset:factset-northfield-portfolio-optimizer
  - name: FactSet Security Modeling API
    description: >-
      The Security Modeling (SM) API allows clients to programmatically work
      with the terms and conditions (t&c's) stored in the Security Modeling
      application
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/security-modeling-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#changelog
      - type: OpenAPI
        url: properties/security-modeling-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: Security-Modeling API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /analytics/security-modeling/v3/securities/retrieve:
              post:
                tags:
                  - SecurityModeling
                summary: Get existing securities
                description: This endpoint gets all existing securities.
            /analytics/security-modeling/v3/securities/upsert:
              post:
                tags:
                  - SecurityModeling
                summary: Create or update securities
                description: This endpoint is to create or update existing securities.
            /analytics/security-modeling/v3/securities/delete:
              post:
                tags:
                  - SecurityModeling
                summary: Delete existing securities
                description: This endpoint deletes existing securities.
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-
    overlays:
      - type: APIs.io Search
        url: overlays/security-modeling-openapi-search.yml
    aid: factset:factset-security-modeling-api
  - name: FactSet Stocks API for Digital Portals
    description: >-
      Search for equity instruments based on stock-specific parameters, request
      EOD benchmark key figures and selected fundamentals (end of fiscal year
      and potential daily updates).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/stocks-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#changelog       
    overlays: []
    aid: factset:factset-stocks-api-for-digital-portals
  - name: FactSet Company Logo API for Digital Portals
    description: Logo images of listed companies (US, CA, EU)
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/company-logo-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#changelog
      - type: OpenAPI
        url: properties/company-logo-api-for-digital-portals-openapi-original.yml
        data:
          host: api.factset.com
          swagger: '2.0'
          consumes:
            - application/json
          produces:
            - application/json
          paths:
            /company/logo/get:
              get:
                tags:
                  - company
                summary: List of URLs of company logos.
                description: >-
                  List of URLs for transparent company logos in different sizes
                  and formats.   The different sizes for the rectangular and
                  square formats are: 

                   **Small**:
                   * rectangular:  maximum width of 88 pixels and maximum height of 31 pixels.
                   * square:  31 x 31 pixels.


                   **Medium**: small logo scaled up by 200%.

                   **Large**: small logo scaled up by 300%.

                   **Vector**: can be rendered at any size.
          info:
            title: Company Logo API For Digital Portals
          x-interface-version: 1
          x-documenter-version: 5.38.1
          x-api-version: 3.1.0
          tags:
            - name: company
              description: company endpoints
          responses:
            ErrorResponse:
              description: Generic error response for all errors (400 ... 599 error codes)
              schema:
                type: object
                properties:
                  meta:
                    $ref: '#/definitions/ErrorMetaObject'
                  errors:
                    $ref: '#/definitions/ErrorObject'
          definitions:
            ErrorMetaObject:
              type: object
              properties:
                status:
                  $ref: '#/definitions/StatusObject'
            ErrorObject:
              type: array
              description: >-
                The errors member contains additional information about a failed
                request.
              items:
                type: object
                properties:
                  details:
                    type: string
                    description: >-
                      A human-readable, unstructured explanation specific to
                      this occurrence of the failure.
                  encryptedDetails:
                    type: string
                    description: >-
                      Base64-encoded, internal details about the error, in
                      addition to "details".
                  type:
                    type: number
                    format: int32
                    description: Internal error type of the Foundation API protocol.
                  attribute:
                    type: array
                    description: >-
                      For a validation error, a reference to the request
                      parameter that failed validation; otherwise, an empty
                      array.
                    items:
                      type: object
                      properties:
                        name:
                          type: string
                          description: Element of the path denoting the request parameter.
                        index:
                          type: number
                          format: int32
                          description: >-
                            If the attribute "name" designates an array, index
                            of the array element; otherwise the special value
                            -1.
                      x-property-sort:
                        - name
                        - index
                x-property-sort:
                  - detail
                  - encryptedDetails
                  - type
                  - attribute
            AttributesMember:
              type: array
              description: >-
                Limit the attributes returned in the response to the specified
                set.
              items:
                type: string
                maxLength: 100
                exclusiveMaximum: false
              maxItems: 50
              uniqueItems: true
            LanguageMember:
              type: string
              format: isoLanguage
              description: ISO 639-1 code of the language.
              maxLength: 2
              minLength: 2
              exclusiveMinimum: false
              exclusiveMaximum: false
            StatusObject:
              type: object
              properties:
                code:
                  type: number
                  format: int32
                  description: >-
                    The HTTP status code of the response, mirroring the code
                    from the Status-Line of the HTTP response message (see
                    [RFC2616] section 6.1).
              description: The status member contains the status code of the response.
              required:
                - code
            CursorBasedPaginationOutputObject:
              type: object
              description: Pagination attributes for the cursor-based pagination strategy.
              properties:
                total:
                  type: number
                  format: int32
                  description: Total number of entries in the result set.
                isEstimatedTotal:
                  type: boolean
                  description: Flag indicating that the value of `total` is estimated.
                next:
                  type: string
                  description: >-
                    The next cursor position to use in the parameter
                    `pagination.cursor` for an endpoint that supports
                    cursor-based pagination, otherwise `null`.
                previous:
                  type: string
                  description: >-
                    The previous cursor position to use in the parameter
                    `pagination.cursor` for an endpoint that supports
                    cursor-based pagination. If a previous cursor position is
                    not supported or available, `previous` is `null`.
              required:
                - total
                - isEstimatedTotal
                - next
                - previous
              x-property-sort:
                - total
                - isEstimatedTotal
                - next
                - previous
            CursorBasedPaginationOutputObjectWithoutTotal:
              type: object
              description: >-
                Pagination attributes for the cursor-based pagination strategy;
                a total element count is not supported.
              properties:
                next:
                  type: string
                  description: >-
                    The next cursor position to use in the parameter
                    `pagination.cursor` for an endpoint that supports
                    cursor-based pagination, otherwise `null`.
                previous:
                  type: string
                  description: >-
                    The previous cursor position to use in the parameter
                    `pagination.cursor` for an endpoint that supports
                    cursor-based pagination. If a previous cursor position is
                    not supported or available, `previous` is `null`.
              required:
                - next
                - previous
              x-property-sort:
                - next
                - previous
            OffsetBasedPaginationOutputObject:
              type: object
              description: Pagination attributes for the offset-based pagination strategy.
              properties:
                total:
                  type: number
                  format: int32
                  description: Total number of entries in the result set.
                isEstimatedTotal:
                  type: boolean
                  description: Flag indicating that the value of "total" is estimated.
              required:
                - total
                - isEstimatedTotal
              x-property-sort:
                - total
                - isEstimatedTotal
            OffsetBasedPaginationOutputObjectWithoutTotal:
              type: object
              description: >-
                Pagination attributes for the offset-based pagination strategy;
                a total element count is not supported.
              properties:
                hasNext:
                  type: boolean
                  description: >-
                    Flag indicating that a subsequent request with the same
                    parameters, except that the parameter `pagination.offset` is
                    incremented by `pagination.limit`, would yield additional
                    results.
              required:
                - hasNext
              x-property-sort:
                - hasNext
            PartialOutputObject:
              type: object
              properties:
                isPartial:
                  type: boolean
                  description: >-
                    Flag indicating that the response is a possibly incomplete
                    array or an object containing a possibly incomplete array,
                    due to hitting a processing time limit. If `true`, some
                    matching results might be missing from the array, or
                    elements for matching results might be incorrectly included
                    (for example, when priority sorting would have removed the
                    element). Depending on the use case, such a response may be
                    unsuitable.
              description: >-
                Object denoting that the endpoint response is possibly
                incomplete.
              required:
                - isPartial
              x-property-sort:
                - isPartial
          basePath: /wealth/v1
          securityDefinitions:
            Basic:
              type: null
    overlays:
      - type: APIs.io Search
        url: overlays/company-logo-api-for-digital-portals-openapi-search.yml
    aid: factset:factset-company-logo-api-for-digital-portals
  - name: FactSet Securitized Derivatives API for Digital Portals
    description: >-
      Fundamental data for a single securitized derivative. Notation-based key
      figures of a securitized derivative.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#changelog         
    overlays: []
    aid: factset:factset-securitized-derivatives-api-for-digital-portals
  - name: FactSet Watchlist API for Digital Portals
    description: >-
      Watchlists keeps track of users´ individual investment objectives in
      self-directed wealth management applications.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/watchlist-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#changelog         
    overlays: []
    aid: factset:factset-watchlist-api-for-digital-portals
  - name: FactSet Quant Factor Library API
    description: >-
      The FactSet Quant Factor Library (QFL) API helps to detect investment
      themes across global equity markets, incorporate ideas into your portfolio
      construction process, and transform raw data into actionable intelligence.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-quant-factor-library-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#changelog
      - type: OpenAPI
        url: properties/quant-factor-library-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Quant Factor Library API
            license:
              name: License Information
              url: http://www.factset.com/api/license.html
          tags:
            - name: Factors
              description: Fetch Quant Factors for large list of ids
            - name: Helper
              description: >-
                Fetch all available factors that can be used within the /factors
                endpoint
          paths:
            /factset-quant-factor-library/v1/factors:
              get:
                summary: Retrieves Quant Factors for a small list of ids.
                description: >
                  Retrieves Quant Factors for a small list of ids. Request an
                  array of specific Factors, or fetch all factors within a
                  Factor Group. Use the `library` endpoint to return a full list
                  of available Factors, Factor Groups, and related meta data.
                tags:
                  - Factors
              post:
                summary: Retrieves Quant Factors for a large list of ids.
                description: >
                  Retrieves Quant Factors for a large list of ids. Use the
                  `library` endpoint to return a full list of available Factors,
                  Factor Groups, and related meta data.
                tags:
                  - Factors
            /factset-quant-factor-library/v1/library:
              get:
                summary: >-
                  Retrieve a list of all available factors with relevant meta
                  data.
                description: |
                  Fetch the list of all available factors and related meta data.
                tags:
                  - Helper
              post:
                summary: >-
                  Retrieves a list of all available factors with relevant meta
                  data.
                description: |
                  Fetch the list of all available factors and related meta data.
                tags:
                  - nu
    overlays:
      - type: APIs.io Search
        url: overlays/quant-factor-library-openapi-search.yml
    aid: factset:factset-quant-factor-library-api
  - name: FactSet Exchange DataFeed Data Model API
    description: >-
      The Exchange DataFeed Data Model API provides mapping tables for
      enumeration values used in the FactSet Real-Time products
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#changelog
      - type: OpenAPI
        url: properties/exchange-datafeed-data-model-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Exchange DataFeed Data Model API
          paths:
            /products:
              get:
                summary: Request the enumeration table for FactSet product codes.
                tags:
                  - FactSet Product codes
                description: >
                  Data can be returned in CSV, JSON or XML format, use the
                  `format` parameter to chnage from the default JS
    overlays:
      - type: APIs.io Search
        url: overlays/exchange-datafeed-data-model-openapi-search.yml
    aid: factset:factset-exchange-datafeed-data-model-api
  - name: FactSet Fixed Income Calculation API
    description: >-
      Leverage FactSet's Fixed Income Calculation Engine to derive analytics on
      the fly
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/fixed-income-calculation-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#changelog
      - type: OpenAPI
        url: properties/fixed-income-calculation-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: FI API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /analytics/engines/fi/v3/discount-curves:
              get:
                tags:
                  - DiscountCurves
                summary: Get Discount Curves
                description: >-
                  This endpoint lists all the discount curves that can be
                  applied to a FI calculation.
            /analytics/engines/fi/v3/calculations:
              post:
                tags:
                  - FICalculations
                summary: Create and Run FI calculation
                description: >-
                  This endpoint creates and runs a new FI calculation specified
                  in the post body.
            /analytics/engines/fi/v3/calculations/{id}:
              put:
                tags:
                  - FICalculations
                summary: Create or Update FI calculation and run it.
                description: >-
                  This endpoint updates and run the FI optimization specified in
                  the PUT body parameters. It also allows the creation of new FI
                  optimization with custom id.
              get:
                tags:
                  - FICalculations
                summary: Get FI calculation parameters by id
                description: >-
                  This is the endpoint that returns the calculation parameters
                  passed for a calculation.
              delete:
                tags:
                  - FICalculations
                summary: Cancel FI calculation by id
                description: >-
                  This is the endpoint to cancel a previously submitted
                  calculation.
            /analytics/engines/fi/v3/calculations/{id}/status:
              get:
                tags:
                  - FICalculations
                summary: Get FI calculation status by id
                description: "This is the endpoint to check on the progress of a previously requested calculation.\r\nIf the calculation has finished computing, the body of the response will contain the requested document in JSON.\r\nOtherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage."
            /analytics/engines/fi/v3/calculations/{id}/result:
              get:
                tags:
                  - FICalculations
                summary: Get FI calculation result by id
                description: "This is the endpoint to get the result of a previously requested calculation.\r\nIf the calculation has finished computing, the body of the response will contain the requested document in JSON."
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/fixed-income-calcu
    overlays:
      - type: APIs.io Search
        url: overlays/fixed-income-calculation-openapi-search.yml
    aid: factset:factset-fixed-income-calculation-api
  - name: FactSet Tick History API
    description: >-
      Tick History provides dynamic access to historical tick data for a
      specific security for specific dates or date range.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-tick-history-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#changelog
      - type: OpenAPI
        url: properties/tick-history-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Tick History
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/factset-tick-history-api
          paths:
            /level1/coverage:
              get:
                tags:
                  - Level 1
                summary: >-
                  Returns the coverage for the requested ticker/isin along with
                  other response fields for Level1 data.
                description: Returns coverage for specified tickers for Level1 Data
            /level1/files/create:
              post:
                tags:
                  - Level 1
                summary: Requests the creation of tick-by-tick file
                description: Data available from 20120101 to previous day.
            /level1/files/status:
              get:
                tags:
                  - Level 1
                summary: Returns the status of the ID
                description: >-
                  Need to plug-in the id get from /create endpoint into /status
                  endpoint
            /level1/files/get:
              get:
                tags:
                  - Level 1
                summary: >-
                  Returns the tick-by-tick data in files requested in the
                  /create endpoint
                description: Returns the files from tickhistory endpoint
            /level1/files/minute-bars/create:
              post:
                tags:
                  - Level 1
                summary: Requests the creation of Minute bars file
                description: >-
                  1-minute bars available from 20120101 to previous day. Per
                  request able to fetch upto 6 months of data.
            /level1/files/minute-bars/status:
              get:
                tags:
                  - Level 1
                summary: Returns the status of the ID
                description: >-
                  Need to plug-in the id get from /create endpoint into /status
                  endpoint
            /level1/files/minute-bars/get:
              get:
                tags:
                  - Level 1
                summary: >-
                  Returns the Minute bars data in files requested in the /create
                  endpoint
                description: Returns the files from tickhistory endpoint
            /level2/files/create:
              post:
                tags:
                  - Level 2
                summary: Returns the ID for the requested data.
                description: Data available from past 6 years to previous day.
            /level2/files/status:
              get:
                tags:
                  - Level 2
                summary: Returns the status of the ID
                description: >-
                  Need to plug-in the id get from /create endpoint into /status
                  endpoint
            /level2/files/get:
              get:
                tags:
                  - Level 2
                summary: >-
                  Returns the tick history files requested in the /create
                  endpoint
                description: Returns the files from tickhistory endpoint
          tags:
            - name: Level 1
              description: >-
                API provides access to check coverage and retrieve Level 1
                historical tick data
            - name: Level 2
              description: API provides access to the  historical tick data up to 10 levels
    overlays:
      - type: APIs.io Search
        url: overlays/tick-history-openapi-search.yml
    aid: factset:factset-tick-history-api
  - name: FactSet IRN Configuration API
    description: >-
      Config API allows users to read and update configuration and settings of
      the Internal Research Notes.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-configuration-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#changelog
      - type: OpenAPI
        url: properties/irn-configuration-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: IRN API v1
          paths:
            /v1/authors:
              get:
                tags:
                  - Notes - Configuration
                summary: Get all Authors
            /v1/contact-custom-fields:
              get:
                tags:
                  - Contacts - CustomFields
                summary: Get all the contact custom fields
              post:
                tags:
                  - Contacts - CustomFields
                summary: Create a contact custom field
            /v1/contact-custom-fields/{contactCustomFieldId}:
              get:
                tags:
                  - Contacts - CustomFields
                summary: Get a specific Contact custom field's details
              patch:
                tags:
                  - Contacts - CustomFields
                summary: Edit a contact custom field
              delete:
                tags:
                  - Contacts - CustomFields
                summary: Delete a contact custom field
            /v1/contact-roles:
              get:
                tags:
                  - Contacts - Roles
                summary: Get list of the contact roles configured in your group
              post:
                tags:
                  - Contacts - Roles
                summary: Create contact roles
            /v1/contact-types:
              get:
                tags:
                  - Contacts - Types
                summary: Get list of the contact types configured in your group
              post:
                tags:
                  - Contacts - Types
                summary: Create contact types
            /v1/custom-fields:
              get:
                tags:
                  - Notes - Configuration
                summary: Get all Custom Fields
            /v1/custom-symbol-custom-fields:
              get:
                tags:
                  - CustomSymbols - CustomFields
                summary: Get all the Custom symbol custom fields
              post:
                tags:
                  - CustomSymbols - CustomFields
                summary: Create a Custom symbol custom field
            /v1/custom-symbol-custom-fields/{customSymbolCustomFieldId}:
              get:
                tags:
                  - CustomSymbols - CustomFields
                summary: Get a specific Custom symbol custom field's details
              patch:
                tags:
                  - CustomSymbols - CustomFields
                summary: Edit a Custom symbol custom field
              delete:
                tags:
                  - CustomSymbols - CustomFields
                summary: Delete a Custom symbol custom field
            /v1/custom-symbol-types:
              get:
                tags:
                  - CustomSymbols - Types
                summary: Get all the custom symbol types
              post:
                tags:
                  - CustomSymbols - Types
                summary: Create a Custom symbol type
            /v1/custom-symbol-types/{customSymbolTypeId}:
              get:
                tags:
                  - CustomSymbols - Types
                summary: Get a specific Custom symbol type's details
              put:
                tags:
                  - CustomSymbols - Types
                summary: Edit a Custom symbol type
              delete:
                tags:
                  - CustomSymbols - Types
                summary: Delete a Custom symbol type
            /v1/custom-symbol-types/{customSymbolTypeId}/custom-fields:
              get:
                tags:
                  - CustomSymbols - Types
                summary: Get Custom fields for Custom Symbol type
            /v1/group:
              get:
                tags:
                  - Notes - Configuration
                summary: Get Group details
            /v1/group/client-sales-representative:
              get:
                tags:
                  - Notes - Configuration
            /v1/phone-number-types:
              get:
                tags:
                  - Contacts - PhoneNumberTypes
                summary: Get list of the phone types configured in your group
              post:
                tags:
                  - Contacts - PhoneNumberTypes
                summary: Create a phone type
            /v1/recommendations:
              get:
                tags:
                  - Notes - Configuration
                summary: Get all Recommendations
            /v1/relationship-categories:
              get:
                tags:
                  - Contacts - Relationship Category
                summary: >-
                  Get list of the relationship categories configured in your
                  group
              post:
                tags:
                  - Contacts - Relationship Category
                summary: Create a relationship category
            /v1/relationships:
              get:
                tags:
                  - Contacts - Relationships
                summary: Get list of the relationships configured in your group
              post:
                tags:
                  - Contacts - Relationships
                summary: Create a relationship type
            /v1/sentiments:
              get:
                tags:
                  - Notes - Configuration
                summary: Get all Sentiments
            /v1/subjects:
              get:
                tags:
                  - Notes - Configuration
                summary: Get all Subjects
            /v1/subjects/{subjectId}:
              get:
                tags:
                  - Notes - Configuration
                summary: Get Subject details for the given Id provided
            /v1/symbols-relationships:
              get:
                tags:
                  - CustomSymbols - Relationships
                summary: Get all the Symbols Relationships
              post:
                tags:
                  - CustomSymbols - Relationships
                summary: Create a symbol relationship
            /v1/teams:
              get:
                tags:
                  - Notes - Configuration
                summary: Get all Teams
            /v1/teams/{teamId}:
              get:
                tags:
                  - Notes - Configuration
                summary: Get Team details for the given Id provided
            /v1/users:
              get:
                tags:
                  - Notes - Configuration
                summary: Get all assigned FactSet users
            /v1/custom-symbol-types/reorder:
              post:
                tags:
                  - CustomSymbols - Types
            /v1/relationship-categories/reorder:
              post:
                tags:
                  - Contacts - Relationship Category
                summary: Reorder relationship categories
            /v1/contact-roles/{contactRoleId}:
              put:
                tags:
                  - Contacts - Roles
                summary: Edit a contact role
              delete:
                tags:
                  - Contacts - Roles
                summary: Delete a contact role
            /v1/contact-types/{contactTypeId}:
              put:
                tags:
                  - Contacts - Types
                summary: Edit a contact type
              delete:
                tags:
                  - Contacts - Types
                summary: Delete a contact type
            /v1/phone-number-types/{phoneNumberTypeId}:
              put:
                tags:
                  - Contacts - PhoneNumberTypes
                summary: Edit a phone type
              delete:
                tags:
                  - Contacts - PhoneNumberTypes
                summary: Delete a phone type
            /v1/relationship-categories/{relationshipCategoryId}:
              put:
                tags:
                  - Contacts - Relationship Category
                summary: Edit a relationship category
              delete:
                tags:
                  - Contacts - Relationship Category
                summary: Delete a relationship category
            /v1/relationships/{relationshipId}:
              put:
                tags:
                  - Contacts - Relationships
                summary: Edit a relationship type
              delete:
                tags:
                  - Contacts - Relationships
                summary: Delete a relationship type
            /v1/symbols-relationships/{symbolsRelationshipId}:
              put:
                tags:
                  - CustomSymbols - Relationships
                summary: Edit a symbol relationship
              delete:
                tags:
                  - CustomSymbols - Relationships
                summary: Delete a symbol relationship
          tags:
            - name: Contacts - CustomFields
            - name: Contacts - PhoneNumberTypes
            - name: Contacts - Relationship Category
            - name: Contacts - Relationships
            - name: Contacts - Roles
            - name: Contacts - Types
            - name: CustomSymbols - CustomFields
            - name: CustomSymbols - Relationships
            - name: CustomSymbols - Types
            - name: Notes - Con
    overlays:
      - type: APIs.io Search
        url: overlays/irn-configuration-openapi-search.yml
    aid: factset:factset-irn-configuration-api
  - name: FactSet IRN Custom Symbols API
    description: >-
      This API allows users to create, read, edit and delete IRN custom symbols
      as well as configure settings in the Internal Research Notes Symbol
      Manager application.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-custom-symbols-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#changelog
      - type: OpenAPI
        url: properties/irn-custom-symbols-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: IRN API v1
          paths:
            /v1/custom-symbols:
              get:
                tags:
                  - CustomSymbols
                summary: >-
                  Get list of all custom symbols in your group along with some
                  of their standard field and custom fields data
              post:
                tags:
                  - CustomSymbols
                summary: Create a custom symbol
            /v1/custom-symbols/{customSymbolId}:
              get:
                tags:
                  - CustomSymbols
                summary: >-
                  Get all custom field and standard field details on a specific
                  custom symbol
              patch:
                tags:
                  - CustomSymbols
                summary: Edit a custom symbol’s standard field and custom field data
              delete:
                tags:
                  - CustomSymbols
                summary: Delete a custom symbol
            /v1/custom-symbols/{customSymbolId}/records:
              get:
                tags:
                  - CustomSymbols
                summary: >-
                  Get all notes and meetings where a specific customSymbol was
                  tagged as primary or related identifier
            /v1/custom-symbols/standard-symbol-metadata/{standardSymbol}:
              get:
                tags:
                  - HybridSymbols
                summary: >-
                  Get all custom field and standard field details on a specific
                  standard symbol
            /v1/symbol-relationships/{symbolId}/relationships:
              get:
                tags:
                  - CustomSymbols - Relationships
                summary: Returns a list of a symbol’s relationships
            /v1/symbol-relationships/{symbolRelationshipId}:
              get:
                tags:
                  - CustomSymbols - Relationships
                summary: Get details on a specific symbol relationship
              delete:
                tags:
                  - CustomSymbols - Relationships
                summary: Delete a symbol relationship
            /v1/custom-symbols/{customSymbolId}/link-standard-symbol:
              post:
                tags:
                  - CustomSymbols
                summary: Link custom symbol to standard symbol
            /v1/custom-symbols/standard-symbol-metadata:
              post:
                tags:
                  - HybridSymbols
                summary: Create standard symbol metadata
            /v1/symbol-relationships:
              post:
                tags:
                  - CustomSymbols - Relationships
                summary: Create a symbol relationship
            /v1/symbol-relationships/{symbol}:
              put:
                tags:
                  - CustomSymbols - Relationships
                summary: Edit a symbol relationship
            /v1/custom-symbols/standard-symbol-metadata/{standardSymbolId}:
              patch:
                tags:
                  - HybridSymbols
                summary: Edit a standard symbol’s standard field and custom field data
          tags:
            - name: CustomSymbols
            - name: CustomSymbols - Relationships
            - name: Hyb
    overlays:
      - type: APIs.io Search
        url: overlays/irn-custom-symbols-openapi-search.yml
    aid: factset:factset-irn-custom-symbols-api
  - name: FactSet Portfolio Optimizer API
    description: >-
      The FactSet Portfolio Optimizer (FPO) offers full multi-asset class
      portfolio optimization,  balancing a client’s investment objectives within
      the confines of the established constraints within the investment
      strategy.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#changelog
      - type: OpenAPI
        url: properties/portfolio-optimizer-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: FPO API
            license:
              name: Apache License 2.0
              url: http://www.apache.org/licenses/LICENSE-2.0.txt
          paths:
            /analytics/lookups/v3/accounts/{path}:
              get:
                tags:
                  - Accounts
                summary: Get accounts and sub-directories in a directory
                description: >-
                  This endpoint looks up all ACCT and ACTM files and
                  sub-directories in a given directory.
            /analytics/lookups/v3/currencies:
              get:
                tags:
                  - Currencies
                summary: Get currencies
                description: >-
                  This endpoint lists all the currencies that can be applied to
                  any calculation.
            /analytics/engines/fpo/v3/optimizations:
              post:
                tags:
                  - FPO Optimizer
                summary: Create and Run FPO optimization
                description: "This endpoint runs FPO optimization specified in the POST body parameters.\r\n            \r\nRemarks:\r\n            \r\n*\tAny settings in POST body will act as a one-time override over the settings saved in the strategy document."
            /analytics/engines/fpo/v3/optimizations/{id}:
              put:
                tags:
                  - FPO Optimizer
                summary: Create or Update FPO optimization and run it.
                description: >-
                  This endpoint updates and run the FPO optimization specified
                  in the PUT body parameters. It also allows the creation of new
                  FPO optimization with custom id.
              get:
                tags:
                  - FPO Optimizer
                summary: Get FPO optimization parameters by id
                description: >-
                  This is the endpoint that returns the optimization parameters
                  passed for a calculation.
              delete:
                tags:
                  - FPO Optimizer
                summary: Cancel FPO optimization by id
                description: >-
                  This is the endpoint to cancel a previously submitted
                  optimization.
            /analytics/engines/fpo/v3/optimizations/{id}/status:
              get:
                tags:
                  - FPO Optimizer
                summary: Get FPO optimization status by id
                description: "This is the endpoint to check on the progress of a previously requested optimization.\r\nIf the optimization has finished computing, the body of the response will contain result in JSON.\r\nOtherwise, the optimization is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage."
            /analytics/engines/fpo/v3/optimizations/{id}/result:
              get:
                tags:
                  - FPO Optimizer
                summary: Get FPO optimization result by id
                description: "This is the endpoint to get the result of a previously requested optimization.\r\nIf the optimization has finished computing, the body of the response will contain result in JSON."
            /analytics/engines/fpo/v3/strategies/{path}:
              get:
                tags:
                  - StrategyDocuments
                summary: >-
                  Get FactSet Portfolio Optimizer strategy documents and
                  sub-directories in a directory
                description: >-
                  This endpoint looks up all FactSet Portfolio Optimizer
                  strategy documents and sub-directories in a given 
    overlays:
      - type: APIs.io Search
        url: overlays/portfolio-optimizer-openapi-search.yml
    aid: factset:factset-portfolio-optimizer-api
  - name: FactSet Standard Datafeed API
    description: Download standard datafeed tables and schemas based on user subscription
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/standard-datafeed-api
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#changelog
      - type: OpenAPI
        url: properties/standard-datafeed-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: SDF Download API
          paths:
            /list-schemas:
              get:
                summary: schemas
                tags:
                  - Schema
                description: >-
                  <a
                  href=https://api.factset.com/bulk-documents/sdf/v1/list-schemas>List-Schemas</a>
                  helper end point provides the list of schemas subscribed by
                  the client and their corresponding sequences if no query
                  parameters are passed in the request.

                   If schema & sequence number (version number of schema) are passed in the request, this endpoint provides a downloadable presigned url containing the schema information.
            /list-files:
              get:
                tags:
                  - SDF and QFL Content Library
                description: >
                  <a
                  href=https://api.factset.com/bulk-documents/sdf/v1/list-files>List-Files</a>
                  end point provides the delta & full files in a reverse
                  chronological order by default for all the schemas & bundles
                  subscribed by the client


                   QFL:-
                     - In case of QFL, <a href=https://api.factset.com/bulk-documents/sdf/v1/list-files>List-Files</a> end point provides the "Historical & Year to Date (YTD)" data in a reverse chronological order by default for all the factor families & groups subscribed to by the user</p> Provides "full files" only for historical bundles[data available from 1995 to previous year], "full & delta files" for YTD bundles[data available for current year]
                     
                     If startDate and endDate parameters are not specified in the request, this endpoint returns past 10 days data by default.
          tags:
            - name: Schema
            - name: SDF and QFL Content
    overlays:
      - type: APIs.io Search
        url: overlays/standard-datafeed-openapi-search.yml
    aid: factset:factset-standard-datafeed-api
  - name: FactSet Real-Time Time Series API
    description: >-
      Time series data, end-of-day or intraday, tick-by-tick or subsampled.
      Additional vendor-specific endpoints provide a modified interface for
      seamless integration with the ChartIQ chart library.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/real-time-time-series-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#changelog
      - type: OpenAPI
        url: properties/real-time-time-series-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Time Series API For Digital Portals
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /vendor/chartIQ/timeSeries/eod/list:
              post:
                tags:
                  - vendor
                summary: End-of-day time series data for a notation.
                description: >-
                  End-of-day time series data for a notation. The resulting time
                  series is always adjusted for currency
                  changes.<br><br>Pagination to a previous page is not supported
                  and `pagination.previous` is always `null`.
            /vendor/chartIQ/timeSeries/eod/subsample/get:
              post:
                tags:
                  - vendor
                summary: Single subsample end-of-day data for a notation.
                description: >-
                  Single subsample end-of-day data for a notation. The sample is
                  always adjusted for currency changes. The subsample may exceed
                  the entitled date range, but will be based only on days that
                  are in the entitled range.
            /vendor/chartIQ/timeSeries/eod/subsample/list:
              post:
                tags:
                  - vendor
                summary: Subsampled end-of-day time series data for a notation.
                description: >-
                  Subsampled end-of-day time series data for a notation. The
                  resulting time series is always adjusted for currency changes.
                  If a subsample's date range is not entirely within the
                  maximally entitled date range, the subsample is excluded from
                  the response.<br><br>Pagination to a previous page is not
                  supported and `pagination.previous` is always `null`.
            /vendor/chartIQ/timeSeries/intraday/subsample/get:
              post:
                tags:
                  - vendor
                summary: Single subsample intraday data for a notation.
                description: >-
                  Single subsample intraday data for a notation. The subsample
                  may exceed the entitled time range, but will be based only on
                  ticks that are in the entitled range.
            /vendor/chartIQ/timeSeries/intraday/subsample/list:
              post:
                tags:
                  - vendor
                summary: Subsampled intraday time series data for a notation.
                description: >-
                  Subsampled intraday time series data for a notation. If a
                  subsample's time range is not entirely within the maximally
                  entitled time range, the subsample is excluded from the
                  response.<br><br>Pagination to a previous page is not
                  supported and `pagination.previous` is always `null`.
            /prices/timeSeries/eod/list:
              post:
                tags:
                  - prices
                summary: End-of-day time series data for a notation.
                description: >-
                  End-of-day time series data for a notation. The resulting time
                  series is always adjusted for currency
                  changes.<br><br>Pagination to a previous page is not supported
                  and `pagination.previous` is always `null`.
            /prices/timeSeries/eod/subsample/get:
              post:
                tags:
                  - prices
                summary: Single subsample end-of-day data for a notation.
                description: >-
                  Single subsample end-of-day data for a notation. The sample is
                  always adjusted for currency changes. The subsample may exceed
                  the entitled date range, but will be based only on days that
                  are in the entitled range.
            /prices/timeSeries/eod/subsample/list:
              post:
                tags:
                  - prices
                summary: Subsampled end-of-day time series data for a notation.
                description: >-
                  Subsampled end-of-day time series data for a notation. The
                  resulting time series is always adjusted for currency changes.
                  If a subsample's date range is not entirely within the
                  maximally entitled date range, the subsample is excluded from
                  the response.<br><br>Pagination to a previous page is not
                  supported and `pagination.previous` is always `null`.
            /prices/timeSeries/intraday/list:
              post:
                tags:
                  - prices
                summary: Intraday time series data for a notation.
                description: >-
                  Intraday time series data for a notation.<br><br>Pagination to
                  a previous page is not supported and `pagination.previous` is
                  always `null`.
            /prices/timeSeries/intraday/subsample/get:
              post:
                tags:
                  - prices
                summary: Single subsample intraday data for a notation.
                description: >-
                  Single subsample intraday data for a notation. The subsample
                  may exceed the entitled time range, but will be based only on
                  ticks that are in the entitled range.
            /prices/timeSeries/intraday/subsample/list:
              post:
                tags:
                  - prices
                summary: Subsampled intraday time series data for a notation.
                description: >-
                  Subsampled intraday time series data for a notation. If a
                  subsample's time range is not entirely within the maximally
                  entitled time range, the subsample is excluded from the
                  response.<br><br>Pagination to a previous page is not
                  supported and `pagination.previous` is always `null`.
          tags:
            - name: prices
              description: prices endpoints
            - name: vendor
              description: vendor endpoints
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/
          x-interface-version: 2
          x-documenter-version: 6.3.9
          x-api-version: nu
    overlays:
      - type: APIs.io Search
        url: overlays/real-time-time-series-openapi-search.yml
    aid: factset:factset-real-time-time-series-api
  - name: FactSet BookBuilder API
    description: >-
      The BookBuilder API is a powerful tool that quickly combines FactSet’s
      detailed reports for companies of interest into polished pdfs that can be
      read, saved down, and shared with others.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/bookbuilder-api
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#changelog
      - type: OpenAPI
        url: properties/bookbuilder-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: BookBuilder
          tags: []
          paths:
            /v1/book-list:
              get:
                tags:
                  - Book List
                summary: Check out the books that are in the book library
                description: >-
                  Retrieves the list of books that were previously created and
                  are available in the client's book library
            /v1/template-list:
              get:
                tags:
                  - Template List
                summary: Retrieves the list of templates that are available
                description: >-
                  A template is a predefined list of content to be compiled in a
                  PDF. This end point works without any parameters and retrieves
                  the list of templates available for the user. Templates need
                  to defined/created in FactSet workstation.
            /v1/create-template/:
              post:
                tags:
                  - Create Template
                summary: >-
                  Kick off request to create template with reports of your
                  choice
                description: >-
                  This end point retrieves template name and template_id of the
                  template you create. All the book options such as name of the
                  template, type, and reports can be specified in the request
                  body. Please refer to the documentation for valid section ids
                  and report ids.
            /v1/create-book:
              post:
                tags:
                  - Create Custom PDF
                summary: Kicks off request to create a book with reports of your choice
                description: >-
                  This end point retrieves book name and book_id for the PDF
                  book you create. All the book options such as name of the
                  book, ticker, pagination options, and reports can be specified
                  in the request body. Please refer to the documentation for
                  valid section ids and report ids.
            /v1/create-book-from-template:
              post:
                tags:
                  - Create PDF from Template
                summary: Kicks off request to create a book with template
                description: >-
                  This endpoint retrieves book status, book name, and book ID
                  for ticker requested in JSON format. This end-point excepts
                  ticker and template_id as inputs. If the template_id input is
                  not used, a book will be created with FactSet's default
                  template.</br></br>Please try out the below template ids to
                  quickly get the FactSet curated books</br></br>Company Quick
                  Book - <b>g_20210415065838185</b></br>Post-Earnings Call -
                  <b>g_20210415070044785</b> </br>Public Information Book(PIB) -
                  <b>g_20210415070353151</b></br></br> Take a look at the
                  example books attached under API documentation
                  below.</br></br>If you are scheduling Post Earnings Call
                  curated book, please note that in contains Corrected
                  Transcript that takes a little while to be available.</br>
                  </br>Once a Raw Transcript is published, FactSet's editors
                  review the call to produce a Corrected Transcript. They listen
                  to the entire audio file again to confirm that all of the
                  terms and numbers are correctly transcribed. FactSet aims to
                  publish a Corrected Transcript within six times the length of
                  the event, measured from the beginning of the event. That
                  means for a typical one-hour call, FactSet will produce a
                  Corrected Transcript within approximately five hours of the
                  call's completion. Visit [OA
                  13208](https://my.apps.factset.com/oa/pages/13208)
            /v1/download-api-book-aws/{book_id}:
              get:
                tags:
                  - Get PDF
                summary: Retrieves book in PDF format
                description: >-
                  This endpoint uses the BookId returned from any of the request
                  above. Returns the URL to load the book for the book ID
                  requested. The URL will be in JSON format, the final book will
                  be in PDF format. <br><br> NOTE -- The execution of this
                  endpoint requires an extra step within the developer portal
                  due to authentication limitations. When using the actual API,
                  a successful response for this endpoint will be the PDF book
                  rather than the URL to the PDF. <br><br><b><i>The actual
                  endpoint is </b><font
                  color=blue>https://api.factset.com/book-builder-api/v1/download-api-book/{book_id}</font></i>
            /v1/upload-custom-document:
              post:
                tags:
                  - Upload Custom Documents
                summary: Upload a custom document
                description: >-
                  Upload any thrid-party documents that need to be included in
                  the final PDF. Once uploaded, the successful response will be
                  a unique fileurl that can be used to add the files to the PDF
                  output using the create-book endpoint. Supported files include
                  Powerpoint, Word, RTF and PDF. The total size should not
                  exceed 250MB and each file should not exceed 10MB.
            /v1/custom-upload-list:
              get:
                tags:
                  - Uploaded Documents
                summary: >-
                  Check out the documents uploaded before to use them in
                  creating books
                description: >-
                  Retrieves the list of documents uploaded before using the
                  endpoint "/upload-custom-document". The documents uploaded are
                  available for 30 days from the date of 
    overlays:
      - type: APIs.io Search
        url: overlays/bookbuilder-openapi-search.yml
    aid: factset:factset-bookbuilder-api
  - name: FactSet Exchange DataFeed Snapshot API - Entire Exchange
    description: >-
      Provides clients access to Snapshot files created at 15-minute intervals
      for an entire exchange
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#changelog
      - type: OpenAPI
        url: >-
          properties/exchange-datafeed-snapshot-api-entire-exchange-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Exchange Snapshot API
          paths:
            /v1/list-files:
              get:
                summary: Snapshot
                tags:
                  - Snapshot
                description: >-
                  A service that provides access to Real Time or Delayed data
                  snapped at hourly intervals for an entire Exchange
              parameters: null
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/exchange-datafeed-snapshot-api-entire-exchange-openapi-search.yml
    aid: factset:factset-exchange-datafeed-snapshot-api-entire-exchange
  - name: FactSet Ownership API
    description: >-
      FactSet’s Fund Ownership API gives access to underlying fund holding
      details for a specified fund ID or list of IDs. Holdings details include
      industry codes, security identifiers, adjusted market value, adjusted
      shares held, and issue type.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-ownership-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#changelog
      - type: OpenAPI
        url: properties/ownership-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Ownership API
          paths:
            /factset-ownership/v1/fund-holdings:
              get:
                tags:
                  - Fund Holdings
                summary: >-
                  Get underlying holdings information for a requested fund
                  identifer.
                description: >
                  Gets holdings information for list of fund identifiers. The
                  service allows you to filter by the TopN holdings and Asset
                  Type.
              post:
                tags:
                  - Fund Holdings
                summary: Get holdings for a list of funds.
                description: Gets Holding information for a long list of Fund objects.
            /factset-ownership/v1/security-holders:
              get:
                tags:
                  - Security Holders
                summary: Get security ownership data for requested security identifers.
                description: >
                  Gets security ownership details and activity for the requested
                  security identifiers. The services allows filtering by "Topn"
                  holders and by holder "type", such as Institutions, Insiders,
                  and Stakeholders.
              post:
                tags:
                  - Security Holders
                summary: >-
                  Get security ownership data for a list of requested
                  securities.
                description: >
                  Gets security ownership details and activity for the requested
                  security identifiers. The services allows filtering by "Topn"
                  holders and by holder "type", such as Institutions, Insiders,
                  and Sta
    overlays:
      - type: APIs.io Search
        url: overlays/ownership-openapi-search.yml
    aid: factset:factset-ownership-api
  - name: FactSet Portfolio Reporting Batcher API
    description: The PRB API allows clients to trigger existing PRB jobs.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#changelog
      - type: OpenAPI
        url: properties/portfolio-reporting-batcher-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Portfolio Reporting Batcher
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: >-
              https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api
          paths:
            /jobs/{type}/{name}:
              parameters:
                - null
                - null
              get:
                summary: Get details for the given PRB job
                tags:
                  - Jobs
                description: >-
                  Use this endpoint to fetch the documents, tasks, accounts,
                  and/or runs for the PRB job given in the path. Please note
                  jobs with type PD will not return tasks nor accounts so this
                  will be ignored if given as part of the array of attributes in
                  the request.
            /runs:
              post:
                summary: trigger PRB jobs
                description: Use this endpoint with with POST method to trigger PRB jobs.
                tags:
                  - Runs
            /runs/{id}/status:
              get:
                summary: check the status for a particular run ID
                tags:
                  - Runs
                description: >-
                  Use this endpoint to check the status of a run using the id
                  from the POST /runs endpoint
              parameters:
                - null
          tags:
            - name: Jobs
              description: These endpoints relate to PRB jobs
            - name: Runs
              description: These endpoints refer to specific runs for
    overlays:
      - type: APIs.io Search
        url: overlays/portfolio-reporting-batcher-openapi-search.yml
    aid: factset:factset-portfolio-reporting-batcher-api
  - name: FactSet Global Filings API
    description: ' This API is designed to expose document search and document retrieval functionality'
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/global-filings-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/global-filings-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/global-filings-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/global-filings-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/global-filings-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/global-filings-api#changelog
      - type: OpenAPI
        url: properties/global-filings-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Global Filings API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/global-filings-api
          paths:
            /search:
              get:
                summary: >-
                  Returns the filings documents and related metadata within
                  FactSet coverage.
                tags:
                  - Filings API
                description: >-
                  Returns the filings documents within FactSet coverage along
                  with other response fields
            /helper:
              get:
                tags:
                  - Filings API
                summary: Returns the static values for various parameters
                description: >-
                  Returns the static values for
                  sources,formTypes,timeZones,categories based on the specified
                  parameter
            /count:
              get:
                tags:
                  - Filings API
                summary: Returns the count of filings for specified source
                description: >-
                  Returns the count of filings documents along with other
                  response fields.
          tags:
            - name: Filings API
              description: >-
                API provides access to search and download filings documents
                from vario
    overlays:
      - type: APIs.io Search
        url: overlays/global-filings-openapi-search.yml
    aid: factset:factset-global-filings-api
  - name: FactSet Symbology API
    description: >-
      FactSet Symbology API provides symbol resolution services, allowing users
      to translate from familiar market symbols to FactSet's native symbology.
      FactSet's symbology sits at the center of its hub-and-spoke data model,
      enabling you to quickly…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/symbology-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#changelog
      - type: OpenAPI
        url: properties/symbology-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Symbology API
          paths:
            /symbology/v3/identifier-resolution:
              get:
                tags:
                  - Identifier Resolution
                summary: >-
                  Returns the specified output identifiers for the specified
                  input identifier.
                description: >
                  The Identifier Resolution endpoint provides flexibility for
                  requesting and receiving both third-party and FactSet
                  Permanent identifiers. Users can both input and output most of
                  the listed identifiers, with exceptions noted below.  All
                  input and output symbols must be declared, and users have the
                  ability to resolve one input symbol to many different output
                  symbols in one request. 

                  * **BIC*** - Bank Identification Code (e.g. ABXXHKH1)

                  * **CIK** - Edgar Central Index Keys (e.g. 0000100331)

                  * **CRD** - Central Registration Depository (e.g. 149722)

                  * **DUNS** - Dun & Bradstreet Data Universal Numbering System
                  (e.g. 687741991) (Input only)

                  * **EIN** - Employer Identification Number (e.g. 953540776)

                  * **FITCH*** - Fitch Ratings Identifier (e.g. 47504)

                  * **LEI** - Legal Entity Identifier (e.g.
                  549300A6K7JX8EX2QZ33)

                  * **MD*** - Moody's Ratings Identifier (e.g. 0823736553)

                  * **SPR*** - S&P Ratings Identifier (e.g. 301939)

                  * **VALOREN** - Valoren ("Valor") Identification (e.g. 685558)
                  (Input only)

                  * **WKN*** - German Securities Identification
                  ("Wertpapierkennnummer") (e.g. A0MU9T)

                  * **UKCH** - UK Company House Identifier (e.g.CE012494)

                  * **RSSD** - Federal Reserve RSSD Identifier (1139297)

                  * **SEDOL***

                  * **CUSIP***

                  * **fsymEntityId** - FactSet entity Id

                  * **fsymSecurityId** - FactSet security level permanent
                  identifier

                  * **fsymRegionalId** - FactSet regional level permanent
                  identifier

                  * **fsymListingId** - FactSet listing level permanent
                  identifier

                  * **ISIN***

                  * **tickerExchange** - Ticker Exchange is a marketplace where
                  stocks, bonds, commodities, and derivatives are bought and
                  sold. (e.g. GOOGL-NAS)

                  * **tickerRegion** - Ticker Region is the geographical region
                  or market segment where a particular stock or security is
                  listed and traded. (e.g. GOOGL-US)

                  * **bloombergFigi** - Bloomberg Listing/Regional/Security
                  Identifier (output symbols: bloombergFigiListing,
                  bloombergFigiRegional & bloombergFigiSecurity) (e.g.
                  BBG009S39JY5)

                  * **bloombergTicker** - Bloomberg Listing and Regional Ticker
                  Identifier (output symbols: bloombergRegionalTicker &
                  bloombergListingTicker) (e.g. GOOGL UW)

                  * **GVKEY** - CompuStat Entity Identifier (e.g. 063172)(Input
                  only)

                  * **GVKEY & IID** - CompuStat Security Identifier
                  (e.g.063172001) (Input only)

                  * **JCN** - Japan Corporate Number (e.g. 9011101021173)

                  * **LoanX** - Markit Bank Loan Security Identifier (e.g.
                  LX130668) (Input only)

                  * **MarkitRed** - Markit Entity Identifier (e.g. 3D337C)
                  (Input only)


                  **These symbol types require additional subscriptions. If you
                  would like to gain access to these symbol types, please
                  contact your FactSet Account Team or "Report Issue" above and
                  our support teams can assist.*
              post:
                tags:
                  - Identifier Resolution
                summary: >-
                  Returns the specified output identifiers for the given input
                  identifier.
                description: >
                  The Identifier Resolution endpoint provides flexibility for
                  requesting and receiving both third-party and FactSet
                  Permanent identifiers. Users can both input and output most of
                  the listed identifiers, with exceptions noted below.  All
                  input and output symbols must be declared, and users have the
                  ability to resolve one input symbol to many different output
                  symbols in one request. 

                  * **BIC*** - Bank Identification Code (e.g. ABXXHKH1)

                  * **CIK** - Edgar Central Index Keys (e.g. 0000100331)

                  * **CRD** - Central Registration Depository (e.g. 149722)

                  * **DUNS** - Dun & Bradstreet Data Universal Numbering System
                  (e.g. 687741991) (Input only)

                  * **EIN** - Employer Identification Number (e.g. 953540776)

                  * **FITCH*** - Fitch Ratings Identifier (e.g. 47504)

                  * **LEI** - Legal Entity Identifier (e.g.
                  549300A6K7JX8EX2QZ33)

                  * **MD*** - Moody's Ratings Identifier (e.g. 0823736553)

                  * **SPR*** - S&P Ratings Identifier (e.g. 301939)

                  * **VALOREN** - Valoren ("Valor") Identification (e.g. 685558)
                  (Input only)

                  * **WKN*** - German Securities Identification
                  ("Wertpapierkennnummer") (e.g. A0MU9T)

                  * **UKCH** - UK Company House Identifier (e.g.CE012494)

                  * **RSSD** - Federal Reserve RSSD Identifier (1139297)

                  * **SEDOL***

                  * **CUSIP***

                  * **fsymEntityId** - FactSet entity Id

                  * **fsymSecurityId** - FactSet security level permanent
                  identifier

                  * **fsymRegionalId** - FactSet regional level permanent
                  identifier

                  * **fsymListingId** - FactSet listing level permanent
                  identifier

                  * **ISIN***

                  * **tickerExchange** - Ticker Exchange, a marketplace where
                  stocks, bonds, commodities, and derivatives are bought and
                  sold. (e.g. GOOGL-NAS)

                  * **tickerRegion** - Ticker Region, geographical region or
                  market segment where a particular stock or security is listed
                  and traded. (e.g. GOOGL-US)

                  * **bloombergFigi** - Bloomberg Listing/Regional/Security
                  Identifier (output symbols: bloombergFigiListing,
                  bloombergFigiRegional & bloombergFigiSecurity ) (e.g.
                  BBG009S39JY5)

                  * **bloombergTicker** - Bloomberg Listing and Regional Ticker
                  Identifier (output symbols: bloombergRegionalTicker &
                  bloombergListingTicker) (e.g. GOOGL UW)

                  * **GVKEY** - CompuStat Entity Identifier (e.g. 063172)(Input
                  only)

                  * **GVKEY & IID** - CompuStat Security Identifier
                  (e.g.063172001) (Input only)

                  * **JCN** - Japan Corporate Number (e.g. 9011101021173)

                  * **LoanX** - Markit Bank Loan Security Identifier (e.g.
                  LX130668) (Input only)

                  * **MarkitRed** - Markit Entity Identifier (e.g. 3D337C)
                  (Input only)


                  **These symbol types require additional subscriptions. If you
                  would like to gain access to these symbol types, please
                  contact your FactSet Account Team or "Report Issue" above and
                  our support teams can assist.*
            /symbology/v3/historical-identifier-resolution:
              get:
                tags:
                  - Historical Identifier Resolution
                summary: >-
                  Returns the specified historical output identifiers for the
                  given input identifier.
                description: >
                  This endpoint enables the retrieval of historical CUSIP,
                  SEDOL, ISIN, and tickerRegion identifiers. Users can input any
                  of the listed identifiers and resolve one input symbol to
                  multiple different output symbols in a single request. Both
                  input and output symbols must be declared. The `asOfDate`
                  field allows users to retrieve the full history of an
                  identifier or the specific identifiers as of the requested
                  date. 

                  * **BIC*** - Bank Identification Code (e.g. ABXXHKH1) (Input
                  only)

                  * **CIK** - Edgar Central Index Keys (e.g. 0000100331) (Input
                  only)

                  * **CRD** - Central Registration Depository (e.g. 149722)
                  (Input only)

                  * **DUNS** - Dun & Bradstreet Data Universal Numbering System
                  (e.g. 687741991) (Input only)

                  * **EIN** - Employer Identification Number (e.g. 953540776)
                  (Input only)

                  * **FITCH*** - Fitch Ratings Identifier (e.g. 47504) (Input
                  only)

                  * **LEI** - Legal Entity Identifier (e.g.
                  549300A6K7JX8EX2QZ33) (Input only)

                  * **MD*** - Moody's Ratings Identifier (e.g. 0823736553)
                  (Input only)

                  * **SPR*** - S&P Ratings Identifier (e.g. 301939) (Input only)

                  * **VALOREN** - Valoren ("Valor") Identification (e.g. 685558)
                  (Input only)

                  * **WKN*** - German Securities Identification
                  ("Wertpapierkennnummer") (e.g. A0MU9T) (Input only)

                  * **UKCH** - UK Company House Identifier (e.g.CE012494) (Input
                  only)

                  * **RSSD** - Federal Reserve RSSD Identifier (1139297) (Input
                  only)

                  * **SEDOL***

                  * **CUSIP***

                  * **fsymEntityId** - FactSet entity Id (Input only)

                  * **fsymSecurityId** - FactSet security level permanent
                  identifier (Input only)

                  * **fsymRegionalId** - FactSet regional level permanent
                  identifier (Input only)

                  * **fsymListingId** - FactSet listing level permanent
                  identifier (Input only)

                  * **ISIN***

                  * **tickerExchange** - Ticker Exchange is a marketplace where
                  stocks, bonds, commodities, and derivatives are bought and
                  sold. (e.g. GOOGL-NAS) (Input only)

                  * **tickerRegion** - Ticker Region is the geographical region
                  or market segment where a particular stock or security is
                  listed and traded. (e.g. GOOGL-US)

                  * **bloombergFigi** - Bloomberg Listing/Regional/Security
                  Identifier (output symbols: bloombergFigiListing,
                  bloombergFigiRegional & bloombergFigiSecurity ) (e.g.
                  BBG009S39JY5) (Input only)

                  * **bloombergTicker** - Bloomberg Listing and Regional Ticker
                  Identifier (output symbols: bloombergRegionalTicker &
                  bloombergListingTicker) (e.g. GOOGL UW) (Input only)

                  * **GVKEY** - CompuStat Entity Identifier (e.g. 063172) (Input
                  only)

                  * **GVKEY & IID** - CompuStat Security Identifier
                  (e.g.063172001) (Input only)

                  * **JCN** - Japan Corporate Number (e.g. 9011101021173) (Input
                  only)

                  * **LoanX** - Markit Bank Loan Security Identifier (e.g.
                  LX130668) (Input only)

                  * **MarkitRed** - Markit Entity Identifier (e.g. 3D337C)
                  (Input only) 


                  **These symbol types require additional subscriptions. If you
                  would like to gain access to these symbol types, please
                  contact your FactSet Account Team or "Report Issue" above and
                  our support teams can assist.*
              post:
                tags:
                  - Historical Identifier Resolution
                summary: >-
                  Returns the specified historical output identifiers for the
                  given input identifier.
                description: >
                  This endpoint enables the retrieval of historical CUSIP,
                  SEDOL, ISIN, and tickerRegion identifiers. Users can input any
                  of the listed identifiers and resolve one input symbol to
                  multiple different output symbols in a single request. Both
                  input and output symbols must be declared. The `asOfDate`
                  field allows users to retrieve the full history of an
                  identifier or the specific identifiers as of the requested
                  date. 

                  * **BIC*** - Bank Identification Code (e.g. ABXXHKH1) (Input
                  only)

                  * **CIK** - Edgar Central Index Keys (e.g. 0000100331) (Input
                  only)

                  * **CRD** - Central Registration Depository (e.g. 149722)
                  (Input only)

                  * **DUNS** - Dun & Bradstreet Data Universal Numbering System
                  (e.g. 687741991) (Input only)

                  * **EIN** - Employer Identification Number (e.g. 953540776)
                  (Input only)

                  * **FITCH*** - Fitch Ratings Identifier (e.g. 47504) (Input
                  only)

                  * **LEI** - Legal Entity Identifier (e.g.
                  549300A6K7JX8EX2QZ33) (Input only)

                  * **MD*** - Moody's Ratings Identifier (e.g. 0823736553)
                  (Input only)

                  * **SPR*** - S&P Ratings Identifier (e.g. 301939) (Input only)

                  * **VALOREN** - Valoren ("Valor") Identification (e.g. 685558)
                  (Input only)

                  * **WKN*** - German Securities Identification
                  ("Wertpapierkennnummer") (e.g. A0MU9T) (Input only)

                  * **UKCH** - UK Company House Identifier (e.g.CE012494) (Input
                  only)

                  * **RSSD** - Federal Reserve RSSD Identifier (1139297) (Input
                  only)

                  * **SEDOL***

                  * **CUSIP***

                  * **fsymEntityId** - FactSet entity Id (Input only)

                  * **fsymSecurityId** - FactSet security level permanent
                  identifier (Input only)

                  * **fsymRegionalId** - FactSet regional level permanent
                  identifier (Input only)

                  * **fsymListingId** - FactSet listing level permanent
                  identifier (Input only)

                  * **ISIN***

                  * **tickerExchange** - Ticker Exchange, a marketplace where
                  stocks, bonds, commodities, and derivatives are bought and
                  sold. (e.g. GOOGL-NAS) (Input only)

                  * **tickerRegion** - Ticker Region, geographical region or
                  market segment where a particular stock or security is listed
                  and traded. (e.g. GOOGL-US)

                  * **bloombergFigi** - Bloomberg Listing/Regional/Security
                  Identifier (output symbols: bloombergFigiListing,
                  bloombergFigiRegional & bloombergFigiSecurity ) (e.g.
                  BBG009S39JY5) (Input only)

                  * **bloombergTicker** - Bloomberg Listing and Regional Ticker
                  Identifier (output symbols: bloombergRegionalTicker &
                  bloombergListingTicker) (e.g. GOOGL UW) (Input only)

                  * **GVKEY** - CompuStat Entity Identifier (e.g. 063172) (Input
                  only)

                  * **GVKEY & IID** - CompuStat Security Identifier
                  (e.g.063172001) (Input only)

                  * **JCN** - Japan Corporate Number (e.g. 9011101021173) (Input
                  only)

                  * **LoanX** - Markit Bank Loan Security Identifier (e.g.
                  LX130668) (Input only)

                  * **MarkitRed** - Markit Entity Identifier (e.g. 3D337C)
                  (Input only)


                  **These symbol types require additional subscriptions. If you
                  would like to gain access to these symbol types, please
                  contact your FactSet Account Team or "Report Issue" above and
                  our support teams can 
    overlays:
      - type: APIs.io Search
        url: overlays/symbology-openapi-search.yml
    aid: factset:factset-symbology-api
  - name: FactSet StreetAccount News API
    description: >-
      Accessing streetAccount news along with business logic contained in the
      workstation experience
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/streetaccount-news-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#changelog
      - type: OpenAPI
        url: properties/streetaccount-news-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: StreetAccount News API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          tags:
            - name: Filters
              description: Get flattened or structured filters
            - name: Headlines
              description: Get headlines for a specified view or specified filters
            - name: Views
              description: Create, edit and delete views
            - name: StreetAccount Historical Stories
              description: Request, check the status and download the XML files.
          paths:
            /streetaccount/headlines:
              post:
                summary: Retrieve StreetAccount headlines for given filters
                description: >-
                  This endpoint will pull all headlines produced by
                  StreetAccount and the full story body will be returned by the
                  data set. Filters can be specified via the endpoint below.
                tags:
                  - Headlines
            /streetaccount/views/{id}/headlines:
              post:
                summary: Retrieve StreetAccount headlines for given view
                description: >-
                  This endpoint allows you to pull all headlines produced by
                  StreetAccount for a saved view. The full story body will be
                  returned by the data set. Views can be created via the ‘Create
                  Views’ endpoint.
                tags:
                  - Headlines
            /streetaccount/views:
              get:
                summary: Retrieves StreetAccount search views
                description: >-
                  This endpoint allows you to pull the full list of
                  StreetAccount views that have been previously saved.
                tags:
                  - Views
            /streetaccount/views/{id}:
              post:
                summary: Creates and saves a StreetAccount view
                description: >-
                  This endpoint allows you to create a new StreetAccount view.
                  Select watchlists/tickers and filters of your choice to create
                  and save a view.
                tags:
                  - Views
              put:
                summary: Edits and saves an existing StreetAccount view
                description: >-
                  This endpoint allows you to edit the criteria used for a
                  previously saved StreetAccount view.
                tags:
                  - Views
              delete:
                summary: Deletes an existing StreetAccount view
                description: >-
                  This endpoint allows you to delete a previously saved
                  StreetAccount view.
                tags:
                  - Views
            /streetaccount/filters:
              get:
                summary: Retrieve all StreetAccount filters
                tags:
                  - Filters
                description: >-
                  Add StreetAccount filters (watchlists, company filters, market
                  topics, regions and sectors) to filter down StreetAccount
                  headlines by the relevant categories. Set the structured
                  and/or flattened flag. If structured flag is set, parent and
                  child filter information will be returned. If flattened flag
                  is set, flattened filters will be returned which can be used
                  with the headlines and createView endpoints. Both flags can be
                  set to return both sets of filters.  If no params are provided
                  it will return both
            /streetaccount/historical/request-files:
              get:
                tags:
                  - StreetAccount Historical Stories
                summary: Returns the jobID
                description: >-
                  Give the startDate and endDate parameters as request
                  parameters in the /request-files endpoint, it returns the
                  jobID. startDate and endDate should be in YYYY-MM-DDTHH:MM:SSZ
                  format. This API only supports adhoc requests to retrieve
                  historical files and does not support real-time files and if
                  you interested in require real-time push should consider the
                  other three methods (pushed via SFTP, to QNT account, or your
                  Azure Storage). Per API request able to query till 2 years of
                  data
            /streetaccount/historical/check-status:
              get:
                tags:
                  - StreetAccount Historical Stories
                summary: >-
                  Returns the status and percentage of completion for the
                  requested jobID
                description: >-
                  Need to plug-in the jobID from /request-files into
                  /check-status endpoint
            /streetaccount/historical/get-files:
              get:
                tags:
                  - StreetAccount Historical Stories
                summary: >-
                  Returns the StreetAccount XML files for the specified date
                  range
                description: >-
                  Need to plug-in the jobID from /check-status into /get-files
                  endpoint
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/streetaccount-
    overlays:
      - type: APIs.io Search
        url: overlays/streetaccount-news-openapi-search.yml
    aid: factset:factset-streetaccount-news-api
  - name: FactSet Entity Report Builder API
    description: >-
      Create entity tree reports that display complex ownership structures
      through the FactSet Entity Report Builder API.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-entity-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#changelog
      - type: OpenAPI
        url: properties/entity-report-builder-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: FactSet Entity Report Builder
            description: ''
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: Read more about STACH 2.0's row organized schema
            url: https://factset.github.io/stachschema/#/v2/RowOrganized
          tags:
            - name: Entity Structure
          paths:
            /structure:
              get:
                tags:
                  - Entity Structure
                summary: Entity structure
                description: Returns full entity tree for table and tr
    overlays:
      - type: APIs.io Search
        url: overlays/entity-report-builder-openapi-search.yml
    aid: factset:factset-entity-report-builder-api
  - name: FactSet People API
    description: >-
      Fetch People Profiles, Job History, or get associated positions and names
      of companies.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-people-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-people-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-people-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-people-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-people-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-people-api#changelog
      - type: OpenAPI
        url: properties/people-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet People API
          tags:
            - name: Profiles
              description: >-
                Return information about the person with the specified entity
                ID.
            - name: Job History
              description: Returns the job history of the person
            - name: Company
              description: Returns a list of associated people for a requested company
          paths:
            /factset-people/v1/profiles:
              get:
                summary: >-
                  Return information about the person with the specified entity
                  ID.
                description: >
                  Returns a summary of basic information about the person
                  referenced by the entityId specified in the URI.
                tags:
                  - Profiles
              post:
                summary: Returns profile information for a large list of people.
                tags:
                  - Profiles
            /factset-people/v1/jobs:
              get:
                summary: Returns the Job history of the person.
                description: >
                  Returns the `Job` history of the person referenced by the
                  entityId specified in the request.
                tags:
                  - Job History
              post:
                summary: Returns the Job history for the large list of people.
                description: >
                  Returns the `Job` history of the person referenced by the
                  entityId specified in the request.
                tags:
                  - Job History
            /factset-people/v1/company-people:
              get:
                summary: >-
                  Returns the list of people for the specified company
                  identifiers
                description: >
                  Returns the list of executives associated the company
                  identifier requested. Information includes the job functions,
                  email, phone, title, name, and FactSet Entity Identifier. The
                  personId returned can then be used in the `/profiles` endpoint
                  to learn more about the given person.
                tags:
                  - Company
              post:
                summary: >-
                  Returns the list of people associated for a large list of
                  company identitifers
                description: >
                  Returns the list of executives associated the company
                  identifier requested. Information includes the job functions,
                  email, phone, title, name, and FactSet Entity Identifier. The
                  personId returned can then be used in the /profiles endpoint
                  to learn more about the given person.
                tags:
                  - Company
            /factset-people/v1/company-positions:
              get:
                summary: >-
                  Returns the list of people for the specified company
                  identifiers and position
                description: >
                  Returns the list of people, name, and title for a list of
                  company ids and requested position. Positions include-
                    * Chairman
                    * Chief Executive Officer
                    * President
                    * Chief Operating Officer
                    * Chief Financial Officer
                    * Chief Technology Officer
                    * Chief Investment Officer
                    * Founder(s)
                    * Compliance Officer
                    * Admin
                    * Independent Director
                    * Directors/Board Members
                    * Investor Relations
                    * Legal Counsel
                    * Treasurer
                    * Sales and Marketing Managers
                    * Human Resources
                tags:
                  - Company
              post:
                summary: >-
                  Returns the list of people associated for a large list of
                  company identitifers and position
                description: >
                  Returns the list of people, name, and title for a list of
                  company ids and requested position. Positions include-
                    * Chairman
                    * Chief Executive Officer
                    * President
                    * Chief Operating Officer
                    * Chief Financial Officer
                    * Chief Technology Officer
                    * Chief Investment Officer
                    * Founder(s)
                    * Compliance Officer
                    * Admin
                    * Independent Director
                    * Directors/Board Members
                    * Investor Relations
                    * Legal Counsel
                    * Treasurer
                    * Sales and Marketing Managers
                    * Human Resources
                tags:
                  - Company
            /factset-people/v1/company-compensation:
              get:
                summary: >-
                  Returns the compensation details of the people for the
                  specified company identifier
                description: >-
                  Returns the list of company-level executive compensation data
                  items for the top executives listed in annual filings.The
                  coverage of the compensation details for the executives are
                  limited to US region. All the compensation figures are
                  expressed in raw units. 
                tags:
                  - Company
              post:
                summary: >-
                  Returns the compensation details for the people for the
                  specified company identifier
                description: >-
                  Returns the list of company-level executive compensation data
                  items for the top executives listed in annual filings for the
                  most recent fiscal year. The coverage of the compensation
                  details for the executives are limited to US region. All the
                  compensation figures are expressed in raw units. 
                tags:
                  - Company
            /factset-people/v1/company-stats:
              get:
                summary: Returns statistics about top leadership of a company.
                description: >
                  Returns the statistics such as the average age, tenure,
                  compensation of leadership, number of executives, and the
                  gender diversity of leadership. We can utilize the data for
                  analyzing a company's board and management.
                tags:
                  - Company
              post:
                summary: Returns statistics about top leadership of a company.
                description: >-
                  Returns the statistics such as the average age, tenure,
                  compensation of leadership, number of executives, and the
                  gender diversity of leadership. We can utilize the data for
                  analyzing a company's board and management. 
                tags:
                  - nu
    overlays:
      - type: APIs.io Search
        url: overlays/people-openapi-original.yml
      - type: APIs.io Search
        url: overlays/people-openapi-search.yml
    aid: factset:factset-people-api
  - name: FactSet Axioma Fixed Income Optimizer
    description: Fixed Income-based portfolio optimization
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#changelog
      - type: OpenAPI
        url: properties/axioma-fixed-income-optimizer-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: AFI Optimizer API
            license:
              name: Apache License 2.0
              url: http://www.apache.org/licenses/LICENSE-2.0.txt
          paths:
            /analytics/engines/afi/v3/optimizations:
              post:
                tags:
                  - AFI Optimizer
                summary: Create and Run AFI optimization
                description: "This endpoint creates and runs AFI optimization specified in the POST body parameters.\r\n            \r\nRemarks:\r\n            \r\n*\tAny settings in POST body will act as a one-time override over the settings saved in the strategy document."
            /analytics/engines/afi/v3/optimizations/{id}:
              put:
                tags:
                  - AFI Optimizer
                summary: Create or Update AFI optimization and run it.
                description: >-
                  This endpoint updates and run the AFI optimization specified
                  in the PUT body parameters. It also allows the creation of new
                  AFI optimization with custom id.
              get:
                tags:
                  - AFI Optimizer
                summary: Get AFI optimization parameters by id
                description: >-
                  This is the endpoint that returns the optimization parameters
                  passed for an optimization.
              delete:
                tags:
                  - AFI Optimizer
                summary: Cancel AFI optimization by id
                description: >-
                  This is the endpoint to cancel a previously submitted
                  optimization.
            /analytics/engines/afi/v3/optimizations/{id}/status:
              get:
                tags:
                  - AFI Optimizer
                summary: Get AFI optimization status by id
                description: "This is the endpoint to check on the progress of a previously requested optimization.\r\nIf the optimization has finished computing, the body of the response will contain result in JSON.\r\nOtherwise, the optimization is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage."
            /analytics/engines/afi/v3/optimizations/{id}/result:
              get:
                tags:
                  - AFI Optimizer
                summary: Get AFI optimization result by id
                description: >-
                  This is the endpoint to get the result of a previously
                  requested optimization.
            /analytics/engines/afi/v3/strategies/{path}:
              get:
                tags:
                  - StrategyDocuments
                summary: >-
                  Get Axioma FI strategy documents and sub-directories in a
                  directory
                description: >-
                  This endpoint looks up all Axioma FI strategy documents and
                  sub-directories in a given 
    overlays:
      - type: APIs.io Search
        url: overlays/axioma-fixed-income-optimizer-openapi-search.yml
    aid: factset:factset-axioma-fixed-income-optimizer
  - name: FactSet IRN Meetings API
    description: >-
      Meetings API allows users to extract, create, update and delete their
      meetings and appointments in Internal Research Notes application.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-meetings-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#changelog
      - type: OpenAPI
        url: properties/irn-meetings-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: IRN API v1
          paths:
            /v1/meetings:
              get:
                tags:
                  - Meetings
                summary: >-
                  Get all the meetings in the specified date range filtered on
                  the given identifiers
              post:
                tags:
                  - Meetings
                summary: Create a meeting
            /v1/meetings/{meetingId}:
              get:
                tags:
                  - Meetings
                summary: Get details of a meeting
              put:
                tags:
                  - Meetings
                summary: Update meeting
              delete:
                tags:
                  - Meetings
                summary: Delete a Meeting
            /v1/meetings/{meetingId}/attachments:
              get:
                tags:
                  - Attachments
                summary: Get all the attachments belonging to a meeting
              post:
                tags:
                  - Attachments
                summary: Create an attachment for a existing meeting
            /v1/meetings/{meetingId}/attachments/{attachmentId}/download:
              get:
                tags:
                  - Attachments
                summary: Download an attachment from a Meeting
            /v1/meetings/{meetingId}/comments:
              get:
                tags:
                  - Comments
                summary: Get all comments for a meeting
              post:
                tags:
                  - Comments
                summary: Create a comment to a Meeting
            /v1/meetings/{meetingId}/comments/{commentId}:
              get:
                tags:
                  - Comments
                summary: Get details of a comment belonging to a meeting
              patch:
                tags:
                  - Comments
                summary: Edit a comment for a meeting
              delete:
                tags:
                  - Comments
                summary: Delete a Comment from a Meeting
            /v1/meetings/{meetingId}/comments/{commentId}/attachments:
              get:
                tags:
                  - Comments
                summary: Get attachments summary of a comment belonging to a meeting
              post:
                tags:
                  - Comments
                summary: Create a comment attachment to a Meeting
            /v1/meetings/{meetingId}/comments/{commentId}/attachments/{attachmentId}/download:
              get:
                tags:
                  - Comments
                summary: >-
                  Download single attachment detail of a comment belonging to a
                  meeting
            /v1/meetings/{meetingId}/events:
              get:
                tags:
                  - Events
                summary: Get all the record events that belong to a meeting
            /v1/meetings/{meetingId}/events/{recordEventId}:
              get:
                tags:
                  - Events
                summary: Get details of a record event of a meeting
            /v1/meetings/{meetingId}/attachments/{attachmentId}:
              delete:
                tags:
                  - Attachments
                summary: Delete attachment from meeting
          tags:
            - name: Attachments
            - name: Comments
            - name: Events
            - name: nu
    overlays:
      - type: APIs.io Search
        url: overlays/irn-meetings-openapi-search.yml
    aid: factset:factset-irn-meetings-api
  - name: FactSet Fundamentals Report Builder API
    description: >-
      Report Builder APIs return data in relational structures and with industry
      handling to provide the most relevant financial data in a
      presentation-ready format.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#changelog
      - type: OpenAPI
        url: properties/fundamentals-report-builder-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: FactSet Fundamentals Report Builder
            description: ''
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: Read more about STACH 2.0's row organized schema
            url: https://factset.github.io/stachschema/#/v2/RowOrganized
          tags:
            - name: Financials
          paths:
            /income-statement:
              get:
                tags:
                  - Financials
                summary: Income Statement
                description: Returns a standardized Income Statement based on industry.
            /balance-sheet:
              get:
                tags:
                  - Financials
                summary: Balance Sheet
                description: Returns a standardized Balance Sheet based on industry.
            /cash-flow:
              get:
                tags:
                  - Financials
                summary: Cash Flow
                description: Returns a standardized Cash Flow based on
    overlays:
      - type: APIs.io Search
        url: overlays/fundamentals-report-builder-openapi-original.yml
      - type: APIs.io Search
        url: overlays/fundamentals-report-builder-openapi-search.yml
    aid: factset:factset-fundamentals-report-builder-api
  - name: FactSet ETF Profile and Prices API
    description: >-
      Access FactSet-collected profile data and pricing for Exchange Traded
      Funds (ETFs).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/etf-profile-and-prices-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#changelog
      - type: OpenAPI
        url: properties/etf-profile-and-prices-openapi-original.yml
        data:
          host: api.factset.com
          swagger: '2.0'
          consumes:
            - application/json
          produces:
            - application/json
          paths:
            /factset/etf/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  An ETP can be profiled by defining several common attributes
                  such as issuer, fund description, and benchmark.
                summary: Retrieve basic profile information for a specified ETP.
            /factset/etf/allocation/asset/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  This endpoint returns selected ETP's allocations grouped by
                  asset class. The response will be sorted by weight in
                  descending order.
                summary: This endpoint returns selected ETP's asset allocations.
            /factset/etf/allocation/country/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  This endpoint returns selected ETP's allocations grouped by
                  country names. The response will be sorted by weight in
                  descending order.
                summary: This endpoint returns selected ETP's country allocations.
            /factset/etf/allocation/currency/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  This endpoint returns selected ETP's allocations grouped by
                  currency. The response will be sorted by weight in descending
                  order.
                summary: This endpoint returns selected ETP's currency allocations.
            /factset/etf/allocation/economicDevelopment/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  List of allocations classified by a holding's economic
                  development status (e.g. developed market, frontier market,
                  emerging market).
                summary: >-
                  List of allocations classified by a holding's economic
                  development status.
            /factset/etf/allocation/exchange/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  This endpoint returns selected ETP's allocations grouped by
                  exchanges. The response will be sorted by weight in descending
                  order.
                summary: This endpoint returns selected ETP's exchange allocations.
            /factset/etf/allocation/industry/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  This endpoint returns selected ETP's allocations grouped by
                  industry. The response will be sorted by weight in descending
                  order.
                summary: This endpoint returns selected ETP's industry allocations.
            /factset/etf/allocation/marketCapitalization/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  List of allocations classified by a holding's total market
                  capitalization (e.g. Small Cap, Mid Cap, Large Cap). Response
                  will be sorted by weight in descending order.
                summary: >-
                  List of allocations classified by a holding's total market
                  capitalization.
            /factset/etf/allocation/region/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  This endpoint returns selected ETP's allocations grouped by
                  region names. The response will be sorted by weight in
                  descending order.
                summary: This endpoint returns selected ETP's region allocations.
            /factset/etf/allocation/sector/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  This endpoint returns selected ETP's allocations grouped by
                  sector names. The response will be sorted by weight in
                  descending order.
                summary: This endpoint returns selected ETP's sector allocations.
            /factset/etf/analytics/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  FactSet's proprietary analytical datapoints include ETP
                  attributes specific to lending, corporate actions, and
                  benchmarks.
                summary: FactSet proprietary analytics datapoints for ETPs.
            /factset/etf/analytics/holdings/statistics/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  FactSet calculates several proprietary portfolio statistics
                  for ETPs including average maturity, credit quality,
                  price/book ratio, price/earnings ratio, and dividend yield.
                summary: FactSet's portfolio statistics for ETPs.
            /factset/etf/analytics/score/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  FactSet calculates various proprietary fund rankings including
                  unique scores, fund grades, segment averages, and
                  recommendations.
                summary: FactSet proprietary ETP rankings.
            /factset/etf/analytics/trade/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Various metrics of an ETP's liquidity including creation
                  metrics, premium/discount, spread, and tracking error
                  statistics.
                summary: Trade statistics for specific ETP.
            /factset/etf/characteristics/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  An ETP has many unique characteristics specific to its
                  composition that differentiate it from other products. This
                  includes details on leverage, hedging, derivatives, and
                  service providers.
                summary: Retrieve basic characteristic information for a specified ETP.
            /factset/etf/class/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  ETP classification is divided into three categories: Asset
                  Class, Geography, and Investment Strategy. Asset class is
                  determined based on the various asset types held by the fund,
                  A fund's geography can be classified by region (e.g.
                  Asia-Pac), specific geography (e.g. China) or economic
                  development (e.g. BRIC). An ETP's investment strategy is
                  classified in broad categories (e.g. Large Cap) and more
                  granular categorizations.
                summary: >-
                  Retrieve an ETP's classification specific to asset class,
                  geography, or investment strategy.
            /factset/etf/class/category/broad/list:
              get:
                tags:
                  - factset
                description: List of ETP class broad categories.
                summary: List of ETP class broad categories.
            /factset/etf/class/category/focus/list:
              get:
                tags:
                  - factset
                description: List of ETP class focus categories.
                summary: List of ETP class focus categories.
            /factset/etf/class/category/niche/list:
              get:
                tags:
                  - factset
                description: List of ETP class niche categories.
                summary: List of ETP class niche categories.
            /factset/etf/class/geography/list:
              get:
                tags:
                  - factset
                description: List of ETP class geographies.
                summary: List of ETP class geographies.
            /factset/etf/competitors/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  FactSet defines and maintains a proprietary list of competing
                  companies based on a number of attributes specific to a fund.
                summary: FactSet's proprietary list of competing companies.
            /factset/etf/distribution/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Retrieve distribution-related details for a specific ETP
                  including dividend and capital gain distribution details.
                summary: Retrieve an ETP's current distribution details.
            /factset/etf/fundFlows/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Retrieve the amount invested or divested in a specific ETP
                  over various time periods including one-day, one-week,
                  one-month, one-year, and YTD.
                summary: >-
                  Retrieve an ETP's cash inflow/outflows for various time
                  periods.
            /factset/etf/growthOfTenK/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Growth of 10K (or growth of 10,000) is a commonly used chart
                  that highlights the change in the value of an initial 10,000
                  investment in the ETP during a given period of time. Often,
                  this period of time is either since inception or the
                  calculation between the pre-defined range.
                summary: >-
                  This endpoint returns selected ETP's Growth of 10K calculated
                  values.
            /factset/etf/holdings/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Retrieve an ETP's holdings information including security,
                  shares held, and weight.
                summary: Holdings details for an individual ETP.
            /factset/etf/marketAggregates/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Market Aggregates combines FactSet Estimates, FactSet
                  Fundamentals, and FactSet Prices data to derive ratios and per
                  share values on an aggregate level. The resulting index values
                  can be used to identify market trends and compare a
                  combination of portfolios, benchmarks, and individual
                  securities.
                summary: Market aggregate data for ETPs.
            /factset/etf/premiumDiscount/summary/listBySymbol:
              get:
                tags:
                  - factset
                description: Summary of ETP premium discount data.
                summary: Summary of ETP premium discount data.
            /factset/etf/price/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Retrieve an ETP's historical NAV and shares outstanding for a
                  specified time range.
                summary: Retrieve historical ETP NAV values.
            /factset/etf/returns/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  An ETP's total return data can be returned for various time
                  frames including 1-month, 3-month, YTD, 1-year, 3-year, and
                  5-year. Total return calculations include price performance
                  plus reinvested and compounded distributions. Market price is
                  used to calcualte market returns. Portfolio nav is used to
                  calcualte nav returns.
                summary: Retrieve total return data for a specified ETP.
            /factset/etf/strategy/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  ETP's can be classified in many different ways including
                  investment strategy, security weightings, and fund
                  composition.
                summary: Retrieve various classification details for a specified ETP.
            /factset/etf/strategy/segment/list:
              get:
                tags:
                  - factset
                description: >-
                  Retrieve the various segments assigned to a specific ETP.
                  Segment data is used to group funds for comparison and
                  relative performance analyses.
                summary: Retrieve a list of ETP strategy segments.
            /factset/etf/structure/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Retrieve details on a fund's structure including its type,
                  investment style (active/passive), and legal structure.
                summary: Retrieve the basic structure information for a specified ETP.
            /factset/etf/taxesAndFees/us/getBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Retrieve various fee and tax related details on a specified
                  ETP including expense ratio and tax treatment for dividends
                  and capital gains.
                summary: >-
                  Retrieve the tax and fee related information for a specified
                  ETP.
            /factset/etf/timeSeries/listBySymbol:
              get:
                tags:
                  - factset
                description: >-
                  Retrieve the historical NAV data and the respective fund flows
                  and shares outstanding for a specified fund and time period.
                  Please refer currency.fund in /factset/etf/getBySymbol for
                  currency value.
                summary: Retrieve historical NAV data for a specified ETP.
          info:
            title: Prime Developer Trial
          x-interface-version: 1
          x-documenter-version: 5.38.1
          x-api-version: 2.9.1
          tags:
            - name: factset
              description: factset endpoints
          responses:
            ErrorResponse:
              description: Generic error response for all errors (400 ... 599 error codes)
              schema:
                type: object
                properties:
                  meta:
                    $ref: '#/definitions/ErrorMetaObject'
                  errors:
                    $ref: '#/definitions/ErrorObject'
          definitions:
            ErrorMetaObject:
              type: object
              properties:
                status:
                  $ref: '#/definitions/StatusObject'
            ErrorObject:
              type: array
              description: >-
                The errors member contains additional information about a failed
                request.
              items:
                type: object
                properties:
                  details:
                    type: string
                    description: >-
                      A human-readable, unstructured explanation specific to
                      this occurrence of the failure.
                  encryptedDetails:
                    type: string
                    description: >-
                      Base64-encoded, internal details about the error, in
                      addition to "details".
                  type:
                    type: number
                    format: int32
                    description: Internal error type of the Foundation API protocol.
                  attribute:
                    type: array
                    description: >-
                      For a validation error, a reference to the request
                      parameter that failed validation; otherwise, an empty
                      array.
                    items:
                      type: object
                      properties:
                        name:
                          type: string
                          description: Element of the path denoting the request parameter.
                        index:
                          type: number
                          format: int32
                          description: >-
                            If the attribute "name" designates an array, index
                            of the array element; otherwise the special value
                            -1.
                      x-property-sort:
                        - name
                        - index
                x-property-sort:
                  - detail
                  - encryptedDetails
                  - type
                  - attribute
            AttributesMember:
              type: array
              description: >-
                Limit the attributes returned in the response to the specified
                set.
              items:
                type: string
                maxLength: 100
                exclusiveMaximum: false
              maxItems: 50
              uniqueItems: true
            LanguageMember:
              type: string
              format: isoLanguage
              description: ISO 639-1 code of the language.
              maxLength: 2
              minLength: 2
              exclusiveMinimum: false
              exclusiveMaximum: false
            StatusObject:
              type: object
              properties:
                code:
                  type: number
                  format: int32
                  description: >-
                    The HTTP status code of the response, mirroring the code
                    from the Status-Line of the HTTP response message (see
                    [RFC2616] section 6.1).
              description: The status member contains the status code of the response.
              required:
                - code
            CursorBasedPaginationOutputObject:
              type: object
              description: Pagination attributes for the cursor-based pagination strategy.
              properties:
                total:
                  type: number
                  format: int32
                  description: Total number of entries in the result set.
                isEstimatedTotal:
                  type: boolean
                  description: Flag indicating that the value of `total` is estimated.
                next:
                  type: string
                  description: >-
                    The next cursor position to use in the parameter
                    `pagination.cursor` for an endpoint that supports
                    cursor-based pagination, otherwise `null`.
                previous:
                  type: string
                  description: >-
                    The previous cursor position to use in the parameter
                    `pagination.cursor` for an endpoint that supports
                    cursor-based pagination. If a previous cursor position is
                    not supported or available, `previous` is `null`.
              required:
                - total
                - isEstimatedTotal
                - next
                - previous
              x-property-sort:
                - total
                - isEstimatedTotal
                - next
                - previous
            CursorBasedPaginationOutputObjectWithoutTotal:
              type: object
              description: >-
                Pagination attributes for the cursor-based pagination strategy;
                a total element count is not supported.
              properties:
                next:
                  type: string
                  description: >-
                    The next cursor position to use in the parameter
                    `pagination.cursor` for an endpoint that supports
                    cursor-based pagination, otherwise `null`.
                previous:
                  type: string
                  description: >-
                    The previous cursor position to use in the parameter
                    `pagination.cursor` for an endpoint that supports
                    cursor-based pagination. If a previous cursor position is
                    not supported or available, `previous` is `null`.
              required:
                - next
                - previous
              x-property-sort:
                - next
                - previous
            OffsetBasedPaginationOutputObject:
              type: object
              description: Pagination attributes for the offset-based pagination strategy.
              properties:
                total:
                  type: number
                  format: int32
                  description: Total number of entries in the result set.
                isEstimatedTotal:
                  type: boolean
                  description: Flag indicating that the value of "total" is estimated.
              required:
                - total
                - isEstimatedTotal
              x-property-sort:
                - total
                - isEstimatedTotal
            OffsetBasedPaginationOutputObjectWithoutTotal:
              type: object
              description: >-
                Pagination attributes for the offset-based pagination strategy;
                a total element count is not supported.
              properties:
                hasNext:
                  type: boolean
                  description: >-
                    Flag indicating that a subsequent request with the same
                    parameters, except that the parameter `pagination.offset` is
                    incremented by `pagination.limit`, would yield additional
                    results.
              required:
                - hasNext
              x-property-sort:
                - hasNext
            PartialOutputObject:
              type: object
              properties:
                isPartial:
                  type: boolean
                  description: >-
                    Flag indicating that the response is a possibly incomplete
                    array or an object containing a possibly incomplete array,
                    due to hitting a processing time limit. If `true`, some
                    matching results might be missing from the array, or
                    elements for matching results might be incorrectly included
                    (for example, when priority sorting would have removed the
                    element). Depending on the use case, such a response may be
                    unsuitable.
              description: >-
                Object denoting that the endpoint response is possibly
                incomplete.
              required:
                - isPartial
              x-property-sort:
                - isPartial
          basePath: /wealth/v1
          schemes:
            - https
          securityDefinitions:
            Basic:
              type: null
    overlays:
      - type: APIs.io Search
        url: overlays/etf-profile-and-prices-openapi-search.yml
    aid: factset:factset-etf-profile-and-prices-api
  - name: FactSet Classifications API
    description: Get Industry Classifications from a variety of vendors
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/classifications-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/classifications-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/classifications-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/classifications-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/classifications-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/classifications-api#changelog
      - type: OpenAPI
        url: properties/classifications-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Classifications API
          tags:
            - name: GICS
              description: >-
                Global Industry Classification Standard (GICS) Sectors, Industry
                Groups, Industries, and Sub-Industries.
          paths:
            /classifications/v1/gics:
              get:
                tags:
                  - GICS
                summary: Gets the GICS Direct Classifications
                description: >
                  Gets the **Global Industry Classification Standard ("GICS")**
                  Sectors, Industry Group, Industry, and Sub-Industry Names and
                  Numbers for a requested list of ids and date range. All
                  economic sectors have a two-digit identification code, all
                  industry groups have a four-digit identification code, all
                  industries have a six-digit identification code, and all
                  sub-industries have an eight-digit identification code. To
                  access the complete GICS structure and definitions, visit the
                  [MSCI GICS](https://www.msci.com/gics) or [S&P
                  GICS](https://www.spglobal.com/spdji/en/landing/topic/gics/)
                  home pages. Coverage includes over 37,000 securities.

                  *Licensing for GICS Classifications, Regions, and History is
                  required in addition to FactSet API license. Reach out to your
                  FactSet Account Team for assistance.*
              post:
                tags:
                  - GICS
                summary: >-
                  Returns the GICS classifications for the requested 'ids' and
                  date range.
                description: >
                  Gets the **Global Industry Classification Standard ("GICS")**
                  Sectors, Industry Group, Industry, and Sub-Industry Names and
                  Numbers for a requested list of ids and date range. All
                  economic sectors have a two-digit identification code, all
                  industry groups have a four-digit identification code, all
                  industries have a six-digit identification code, and all
                  sub-industries have an eight-digit identification code. To
                  access the complete GICS structure and definitions, visit the
                  [MSCI GICS](https://www.msci.com/gics) or [S&P
                  GICS](https://www.spglobal.com/spdji/en/landing/topic/gics/)
                  home pages. Coverage includes over 37,000 securities.

                  *Licensing for GICS Classifications, Regions, and History is
                  required in addition to FactSet API license. Reach out to your
                  FactSet Account Team for as
    overlays:
      - type: APIs.io Search
        url: overlays/classifications-openapi-search.yml
    aid: factset:factset-classifications-api
  - name: FactSet Analytics Datastore API
    description: >-
      Request pre-calculated Portfolio Analytics data saved in FactSet's
      Analytics Datastore, via deterministic URLs.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/analytics-datastore-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#changelog
      - type: OpenAPI
        url: properties/analytics-datastore-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: Analytics Datastore API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            url: https://developer.factset.com/api-catalog/analytics-datastore-api
            description: API Documentation
          tags:
            - name: Mappings
              description: >-
                Retrieves a mapping with a Location header to redirect to the
                underlying data
            - name: Objects
              description: Retrieves Objects and their underlying data
            - name: Documents
              description: Retrieves Document metadata and URL locations to underlying data
          paths:
            /analytics/pub-datastore/swivel/v1/{document}/{accountId}/{date}:
              get:
                tags:
                  - Mappings
                summary: >-
                  Redirects to the raw PPT/PDF output created by the Publisher
                  service.
                description: "Takes report parameter inputs and returns the object location for the specified report via a 302 redirect.\r\n\r\nNote: Due to Swagger UI functionality, the redirect is automatically followed when using 'Try it out', so instead of the 302 Header response, a 200 is returned with the Cargo response Body."
            /analytics/pub-datastore/swivel/v1/{document}/{assetName}/{reportId}/{tileId}/{accountId}:
              get:
                tags:
                  - Mappings
                summary: >-
                  Redirects to the underlying PA/SPAR data represented in a
                  Stach format, with no as of date specified.
                description: "Takes report parameter inputs and returns the object location for the specified report via a 302 redirect.\r\n\r\nNote: Due to Swagger UI functionality, the redirect is automatically followed when using 'Try it out', so instead of the 302 Header response, a 200 is returned with the Cargo response Body."
            /analytics/pub-datastore/swivel/v1/{document}/{assetName}/{reportId}/{tileId}/{accountId}/{date}:
              get:
                tags:
                  - Mappings
                summary: >-
                  Redirects to the underlying PA/SPAR data represented in a
                  Stach format.
                description: "Takes report parameter inputs and returns the object location for the specified report via a 302 redirect.\r\n\r\nNote: Due to Swagger UI functionality, the redirect is automatically followed when using 'Try it out', so instead of the 302 Header response, a 200 is returned with the Cargo response Body."
            /analytics/pub-datastore/swivel/v1/{document}/{assetName}/{reportId}/{tileId}/{accountId}/{configId}/{date}:
              get:
                tags:
                  - Mappings
                summary: >-
                  Redirects to the underlying Insight/Vault data in a Stach
                  format.
                description: "The inclusion of a configId in the path indicates this is for Insight/Vault mappings only, as PA/SPAR mappings do not support the concept of configuration id.\r\n\r\nTakes report parameter inputs and returns the object location for the specified report via a 302 redirect.\r\n\r\nNote: Due to Swagger UI functionality, the redirect is automatically followed when using 'Try it out', so instead of the 302 Header response, a 200 is returned with the Cargo response Body."
            /analytics/pub-datastore/cargo/v1/groups/{groupId}/objects/{objectId}:
              get:
                tags:
                  - Objects
                summary: >-
                  Gets an object given an ID. In this case ID retrieved from
                  mapping Location header, object data in response body.
                description: "Raw object data can be found in the response body. This can be either the mapped PDF/PPT or STACH json, depending on the mapping. https://pages.github.factset.com/analytics-reporting/stachschema/#/ \r\n\nOptional request header \"accept-encoding\", with allowed values of \"br\" and \"gzip\". If accept-encoding is passed, the response is compressed."
            /analytics/pub-datastore/tag-search/v1/documents/search:
              post:
                tags:
                  - Documents
                summary: Gets a list of Documents that a user has access to.
                description: "Retrieves metadata around documents stored in the Analytics Datastore Service. Each Document will have a 'url' property which will act as a re-direct to the underlying document data\r\n\r\nThis end point supports pagination and filtering through the use of the request body listed below.\r\n\r\nTo discover what tags are available to filter on, see GET /tags and GET /tags/{name}/values to retrieve these filter values.\r\n\r\nSimilarly, to discover what product types are available to filter on, see POST /product-types/search to retrieve a list of product types."
            /analytics/pub-datastore/tag-search/v1/tags:
              get:
                tags:
                  - Documents
                summary: Gets a list of tag definitions for the user.
                description: >-
                  Tag definitions consist of a name and a type. Use this end
                  point to see a list of pre-existing tags that can be used to
                  filter on the Documents end point.
            /analytics/pub-datastore/tag-search/v1/tags/{name}:
              get:
                tags:
                  - Documents
                summary: Get a single tag definition based on its name
                description: Retrieve a tag definition based on its name
            /analytics/pub-datastore/tag-search/v1/tags/{name}/values:
              post:
                tags:
                  - Documents
                summary: Gets a list of tag values for the given name
                description: >-
                  Returns a list of tag values depending on the name provided.
                  Supports filtering on additional tag name value pairs, which
                  operates as an 'AND' where the Document must have the tag name
                  specified in the path AND the filtered parameter.
            /analytics/pub-datastore/tag-search/v1/product-types/search:
              post:
                tags:
                  - Documents
                summary: Gets a list of product types that a user has access to.
                description: >-
                  Retrieves a list of product types that have been specified
                  across all documents the user has
    overlays:
      - type: APIs.io Search
        url: overlays/analytics-datastore-openapi-search.yml
    aid: factset:factset-analytics-datastore-api
  - name: FactSet Quant Engine API
    description: >-
      Use Quant Engine API to retrieve quantitative dataset from FactSet Content
      Database
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/quant-engine-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#changelog
      - type: OpenAPI
        url: properties/quant-engine-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: Quant API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /calculations:
              post:
                tags:
                  - QuantCalculations
                summary: Create and Run Quant Engine calculation
                description: "This endpoint runs the Quant Engine calculation specified in the POST body parameters.\r\nIt can take one or more calculation units as input."
              get:
                tags:
                  - QuantCalculations
                summary: Get all calculations
                description: This endpoints returns all calculation requests.
            /calculations/{id}:
              put:
                tags:
                  - QuantCalculations
                summary: Create or update Quant Engine calculation and run it.
                description: "This endpoint updates and runs the Quant Engine calculation specified in the PUT body parameters. This also allows creating new Quant Engine calculations with custom ids.\r\nIt can take one or more calculation units as input."
              get:
                tags:
                  - QuantCalculations
                summary: Get Quant Engine calculation parameters by id
                description: >-
                  This is the endpoint that returns the calculation parameters
                  passed for a calculation.
              delete:
                tags:
                  - QuantCalculations
                summary: Cancel Quant calculation by id
                description: >-
                  This is the endpoint to cancel a previously submitted
                  calculation.
            /calculations/{id}/status:
              get:
                tags:
                  - QuantCalculations
                summary: Get Quant Engine calculation status by id
                description: "This is the endpoint to check on the progress of a previously requested calculation.\r\nIf the calculation has finished computing, the location header will point to the result url.\r\nOtherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage."
            /calculations/{id}/units/{unitId}/result:
              get:
                tags:
                  - QuantCalculations
                summary: Get Quant Engine calculation result by id
                description: "This is the endpoint to get the result of a previously requested calculation.\r\nIf the calculation has finished computing, the body of the response will contain the requested document in JSON."
            /calculations/{id}/units/{unitId}/info:
              get:
                tags:
                  - QuantCalculations
                summary: Get Quant Engine calculation metadata information by id
                description: >-
                  This is the endpoint to get the metadata information of a
                  previously requested calculation.
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/quant-en
    overlays:
      - type: APIs.io Search
        url: overlays/quant-engine-openapi-search.yml
    aid: factset:factset-quant-engine-api
  - name: FactSet Investment Banking Office Refresh API
    description: Refresh FactSet models (e.g., Excel templates with =FDS codes).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/investment-banking-office-refresh-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#changelog
      - type: OpenAPI
        url: properties/investment-banking-office-refresh-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: Investment Banking Office Refresh API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/
          paths:
            /refresh/calculate:
              post:
                summary: Upload a spreadsheet file
                description: >-
                  Upload a spreadsheet file (in the Open Office XML format) for
                  FactSet to refresh.
                tags:
                  - Refresh Operations
            /refresh/{id}/status:
              get:
                summary: Get the status of the refresh job with the given resource ID
                description: Check the status of the given job by the resource ID
                tags:
                  - Refresh Operations
            /refresh/{id}:
              get:
                summary: Retrieve a calculated file by resource ID.
                description: >-
                  If the requested job is complete, the calculated file will be
                  returned.
                tags:
                  - Refresh Operations
          tags:
            - name: Refresh
    overlays:
      - type: APIs.io Search
        url: overlays/investment-banking-office-refresh-openapi-original.yml
      - type: APIs.io Search
        url: overlays/investment-banking-office-refresh-openapi-search.yml
    aid: factset:factset-investment-banking-office-refresh-api
  - name: FactSet Funds API for Digital Portals
    description: >-
      Search for mutual funds and ETFs using one single consolidated API,
      including a criteria-based screener.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/funds-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#changelog       
    overlays: []
    aid: factset:factset-funds-api-for-digital-portals
  - name: FactSet Content Feeds Data Dictionary
    description: >-
      Browse data items and definitions available through FactSet's off platform
      product offerings.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/content-feeds-data-dictionary
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#changelog
      - type: OpenAPI
        url: properties/content-feeds-data-dictionary-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: CTS Data Dictionary API
          paths:
            /navigator/products:
              get:
                tags:
                  - navigator
                summary: Get the list of products for Navigator.
            /navigator/data_items/{Product_id}:
              get:
                tags:
                  - navigator
                summary: >-
                  Get the list of data items associated with a product for
                  Navigator.
            /navigator/sources/{DataItem_id}:
              get:
                tags:
                  - navigator
                summary: >-
                  Get a list of sources where the specified data item can be
                  found, for each delivery method, filtered to the appearances
                  of the given data item within the specified product.
            /navigator/sources:
              get:
                tags:
                  - navigator
                summary: >-
                  Get a list of sources by delivery method for the given
                  product_id
            /navigator/table_fields/{Table_id}:
              get:
                tags:
                  - navigator
                summary: >-
                  Get the list of fields associated with a table for Navigator,
                  and the code information for the specified data item, if
                  applicable.
            /navigator/basic_search:
              post:
                tags:
                  - navigator
                summary: >-
                  Returns the data items (along with the products they belong
                  to) that contain at least one of the search terms as a
                  substring of either their name or de
    overlays:
      - type: APIs.io Search
        url: overlays/content-feeds-data-dictionary-openapi-search.yml
    aid: factset:factset-content-feeds-data-dictionary
  - name: FactSet Private Markets API
    description: FactSet Private Markets API
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-private-markets-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#changelog
      - type: OpenAPI
        url: properties/private-markets-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Private Markets API
          tags:
            - name: Financials
              description: Retrieve Private Company Financials
            - name: Non-Periodic
              description: Retrieve Private Company Reference Data.
            - name: Data Items
              description: Retrieve available Private Company fields, metrics, and ratios.
          paths:
            /factset-private-markets/v1/financials:
              get:
                summary: Returns Private Company Financials for a list of ids.
                description: |
                  Returns Private Company Financials Information.
                tags:
                  - Financials
              post:
                summary: Returns Private Company Financials for a list of ids.
                description: >
                  Returns a private markets financials object for the requested
                  ids.
                tags:
                  - Financials
            /factset-private-markets/v1/non-periodic:
              get:
                summary: Returns Private Company reference data for a list of ids.
                description: |
                  Returns Private Company reference information.
                tags:
                  - Non-Periodic
              post:
                summary: Returns Private Company reference data for a list of ids.
                description: >
                  Returns a private markets reference object for the requested
                  ids.
                tags:
                  - Non-Periodic
            /factset-private-markets/v1/fields:
              get:
                summary: Available private company fields, metrics, and ratios.
                tags:
                  - Data Items
                description: >
                  Returns list of available Private Company fields that can be
                  used in the `fields` parameter of related endpoints. These are
                  related to FactSet Private Company standardized data.
            /factset-private-markets/v1/universe:
              get:
                summary: >-
                  Get Entity Candidates and Matches for a single name and
                  attributes.
                description: >
                  Finds the best candidate entities matching the given entity
                  name. Country code can also be supplied to narrow the search.
                  <p>**Max of 1 Name permitted in a single GET request.** Use
                  the POST method for /entity-match to fetch up to 25
                  names.</p><p>
                tags:
                  - Universe
              post:
                summary: >-
                  Get a list of Entity Candidates and Matches for a requested
                  list of up to 25 names and attributes.
                description: >
                  Finds the best candidate entities matching the given entity
                  name. Country code can also be supplied to narrow the search.
                  Finds the best candidate entities matching the given company
                  name. <p>**Max of 25 Names inputted.**</p><p>
                tags:
                  - nu
    overlays:
      - type: APIs.io Search
        url: overlays/private-markets-openapi-search.yml
    aid: factset:factset-private-markets-api
  - name: FactSet Programmatic Environment API
    description: FactSet Programmatic Environment API
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-programmatic-environment-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#changelog
      - type: OpenAPI
        url: properties/programmatic-environment-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FPE API
          paths:
            /analytics/quant/fpe/v1/calculations:
              post:
                tags:
                  - Calculations
                summary: Starts a new script calculation
                description: >-
                  This endpoint takes a python script and starts executing it
                  within FPE
            /analytics/quant/fpe/v1/calculations/{id}:
              get:
                tags:
                  - Calculations
                summary: Get calculation status by id
                description: >-
                  This is the endpoint to check on the progress of a previous
                  calculation request.
            /analytics/quant/fpe/v1/calculations/{id}/output:
              get:
                tags:
                  - Calculations
                summary: Get calculation output for a specific calculation
                description: >-
                  This endpoint returns the specified output from the
                  calculation.
            /analytics/quant/fpe/v1/calculations/{id}/log:
              get:
                tags:
                  - Calculations
                summary: Get calculation log for a specific calculation
                description: This endpoint returns the log from the calculation.
            /analytics/quant/fpe/v1/files/{server}/{file}:
              post:
                tags:
                  - Files
                summary: Starts a file upload
                description: This endpoint takes a file and uploads it
            /analytics/quant/fpe/v1/files/uploads/{id}:
              get:
                tags:
                  - Files
                summary: Get upload status by id
                description: >-
                  This is the endpoint to check on the progress of a previous
                  uplo
    overlays:
      - type: APIs.io Search
        url: overlays/programmatic-environment-openapi-search.yml
    aid: factset:factset-programmatic-environment-api
  - name: FactSet Procure to Pay SCIM
    description: >-
      Create users and manage user attributes, entitlements and security
      settings
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/procure-to-pay-api-scim
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#changelog
      - type: OpenAPI
        url: properties/procure-to-pay-api-scim-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet SCIM API
          paths:
            /ServiceProviderConfig:
              get:
                tags:
                  - Server configuration
                summary: Get server configuration.
            /Schemas:
              get:
                tags:
                  - Schemas
                summary: Get a list of schemas.
            /Schemas/{id}:
              get:
                tags:
                  - Schemas
                summary: Get a schema.
            /Users:
              get:
                tags:
                  - Users
                summary: Get a list of users.
              post:
                tags:
                  - Users
                summary: Create a user.
            /Users/{id}:
              get:
                tags:
                  - Users
                summary: Get a user.
              put:
                tags:
                  - Users
                summary: Replace a user.
              patch:
                tags:
                  - Users
                summary: Patch a user (add, replace, or remove attributes of a user.)
              delete:
                tags:
                  - Users
                summary: Delete a user
            /Groups:
              get:
                tags:
                  - Groups
                summary: Get a list of groups.
            /Group/{id}:
              get:
                tags:
                  - Groups
                summary: Get a group.
              put:
                tags:
                  - Groups
                summary: Replace a group.
              patch:
                tags:
                  - Groups
                summary: Patch a group (add, replace, or remove attributes of a group.)
            /Locations:
              get:
                tags:
                  - Locations
                summary: Get a list of locations.
            /Locations/{id}:
              get:
                tags:
                  - Locations
                summary: Get a location.
              put:
                tags:
                  - Locations
                summary: Replace a location.
              patch:
                tags:
                  - Locations
                summary: >-
                  Patch a location (add, replace, or remove attributes of a
                  location.)
            /Products:
              get:
                tags:
                  - Products
                summary: Get a list of products.
            /Products/{id}:
              get:
                tags:
                  - Products
                summary: Get a product.
            /FileManagerAudit:
              get:
                tags:
                  - FileManagerAudit
                summary: Get File Manager a
    overlays:
      - type: APIs.io Search
        url: overlays/procure-to-pay-api-scim-openapi-search.yml
    aid: factset:factset-procure-to-pay-scim
  - name: FactSet Publisher API
    description: >-
      Through the Publisher API, you can optimize your reporting workflows by
      calculating customized, presentation-ready documents that integrate
      Portfolio Analysis, SPAR, commentary, risk, as well as your firm's
      proprietary data.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/publisher-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#changelog
      - type: OpenAPI
        url: properties/publisher-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/publisher-openapi-search.yml
    aid: factset:factset-publisher-api
  - name: FactSet Options API
    description: >-
      The FactSet Options API provides Chains and related pricing data such as
      mid bid-ask price, reference data (e.g., strike price), and risk measures
      (e.g., Greeks and implied volatility).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-options-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-options-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-options-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-options-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-options-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-options-api#changelog
      - type: OpenAPI
        url: properties/options-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Options API
          tags:
            - name: Option Chains & Screening
              description: >-
                Generate a list or universe of options ids based on underlying
                securities or other conditions
            - name: Snapshot
              description: >-
                A generic profile for a list of option securities as of a
                specific date
            - name: Reference
              description: Option Reference Information and Dates
            - name: Prices & Volume
              description: >-
                Option Prices & Volume information for a requested time-range
                for the option security or aggregated for all options associated
                to the underlying security
            - name: Risk Measures
              description: >-
                Option Risk measures such as Greeks, Implied Volatilities, and
                Calculators
          paths:
            /factset-options/v1/chains:
              post:
                tags:
                  - Option Chains & Screening
                summary: >-
                  Returns all the underlying option identifiers for the
                  specified underlying Security identifier
                description: >
                  Returns all the underlying option identifiers for the
                  underlying security identifier. Specify the date and or
                  exhcange for the list of options associated to the id. 

                    *Currently only OPRA Exchange is supported with exchange ISO "USA"*
            /factset-options/v1/option-screening:
              post:
                tags:
                  - Option Chains & Screening
                summary: >-
                  Returns all the option identifiers based on the conditions
                  provided as input in the request
                description: >
                  Returns all the option identifiers based on the conditions
                  provided as input in the request. Conditions are as follows
                  and will follow "AND" logic if more than one condition is
                  applied and allows up to **three conditions** using AND
                  Logic.If a condition is used the accompanying value MUST be
                  used - 

                  |conditions|description|

                  |||

                  |P_OPT_UNDERLYING_SECURITY_E|Underlying Security Equal To|

                  |P_OPT_STRIKE_PRICE_E|Strike Price Equal To|

                  |P_OPT_EXP_DATEN_E|Expiration Date (YYYYMMDD) Equal To|

                  |P_OPT_VOLUME_G|Volume Greater Than|

                  |P_OPT_VOLUME_GE|Volume Greater Than or Equal To|

                  |P_OPT_VOLUME_L|Volume Less Than|

                  |P_OPT_VOLUME_LE|Volume Less Than or Equal To|

                  |P_OPT_VOLUME_E|Volume Equal To|

                  |P_OPT_OPTION_TYPE_E|Option Type (1= Equity, 2=Index)|

                  |P_OPT_CALL_OR_PUT_E|Call or Put (0=Call, 1=Put)|

                    *Currently only OPRA Exchange is supported with exchange ISO "USA"*
            /factset-options/v1/snapshot:
              post:
                tags:
                  - Snapshot
                summary: >-
                  Returns all the profile information for the list of
                  identifiers as of a specific date
                description: >
                  Returns all the profile information for the list of
                  identifiers for a specific date. The data includes - 

                  * Expiration Date

                  * Greek - Delta

                  * Implied Volatility

                  * Price 

                  * Style

                  * Type

                  * Underlying Security

                  * Underlying Security Price

                  * Open Interest

                  * Name

                    *Currently only OPRA Exchange is supported with exchange ISO "USA"*
            /factset-options/v1/references:
              post:
                tags:
                  - Reference
                summary: >-
                  Returns basic reference details for the options such as
                  currency, exchange, symbols, flags and more
                description: >
                  Returns basic reference details for the options. Data items
                  include - 

                  * Name

                  * Exchange

                  * Call or Put Flag

                  * Call or Put Pair Symbol

                  * Other symbols such as OPRA17 and OCC21

                  * Currency

                  * Underlying Security Symbols

                  * Expiration Month, Dates, and Frequency


                  *For details or definitions of all available response fields
                  visit the associated schema.*

                    *Currently only OPRA Exchange is supported with exchange ISO "USA"*
            /factset-options/v1/dates:
              post:
                tags:
                  - Reference
                summary: Returns option security dates such as expiration and trade.
                description: >
                  Returns all relevant dates such as  for the specified Option
                  identifier. Data Items include - 

                  * Expiration Date

                  * First Dates for Ask, Bid, Settlement, and Trade

                  * Last Dates for Ask, Bid, Settlement, and Trade

                    *Currently only OPRA Exchange is supported with exchange ISO "USA"*
            /factset-options/v1/prices:
              post:
                tags:
                  - Prices & Volume
                summary: >-
                  Returns the pricing related information for the specified
                  option identifier
                description: >
                  Returns the pricing related information for the specified
                  option identifier. Items include - 

                  * Ask

                  * Bid

                  * Mid

                  * Mid Bid Ask

                  * Settlement

                  * Last Price Type (Settlement or MidBidAsk)

                  * Last Price

                  * Strike Price

                  * Underlying Security Price

                  * 52 Week High/Low

                  * Open, High, Low for day. Note securities must be trading for
                  day requested.

                    *Currently only OPRA Exchange is supported with exchange ISO "USA"*
            /factset-options/v1/underlying-volume:
              post:
                tags:
                  - Prices & Volume
                summary: >-
                  Returns the aggregate volume and open interest for the list of
                  the options under the specified security identifier
                description: >
                  Return the Volume and Open Interest details for list of the
                  options for the specified underlying security identifier. The
                  data is aggregated for all options contracts associated to the
                  underlying id, or specified in the request only the contracts
                  listed on a specific exchange. Data Includes - 

                  * Put Call Ratio 

                  * Total Put Volume & Open Interest

                  * Total Call Volume & Open Interest

                  * Total Put & Call Volume & Open Interest

                    *Currently only OPRA Exchange is supported with exchange ISO "USA"*
            /factset-options/v1/volume:
              post:
                tags:
                  - Prices & Volume
                summary: Returns the volume details for the specified option identifier
                description: >
                  Returns the volume details for the specified option identifier
                  for a specified exchange. Data items include - 

                  * Open Interest

                  * Volume

                    *Currently only OPRA Exchange is supported with exchange ISO "USA"*
            /factset-options/v1/greeks:
              post:
                tags:
                  - Risk Measures
                summary: >-
                  Returns all the Greeks details for the specified option
                  identifier
                description: >
                  Returns all the greeks details for the specified option
                  identifier. Greeks provide quantifiable factors for measuring
                  the option's price sensativity. Greeks include -


                  |Greek|Description|

                  ||---|

                  |Delta| The ratio comparing the change in the price of the
                  underlying asset to the corresponding change in the price of a
                  derivative. Sometimes referred to as the "hedge ratio". For
                  example, with respect to call options, a delta of 0.7 means
                  that for every $1 the underlying stock increases, the call
                  option will increase by $0.70. Put option deltas, on the other
                  hand, will be negative, because as the underlying security
                  increases, the value of the option will decrease. So a put
                  option with a delta of -0.7 will decrease by $0.70 for every
                  $1 the underlying increases in price. As an in-the-money call
                  option nears expiration, it will approach a delta of 1.00, and
                  as an in-the-money put option nears expiration, it will
                  approach a delta of -1.00.|

                  |Gamma| The rate of change for delta with respect to the
                  underlying asset's price. Mathematically, gamma is the first
                  derivative of delta and is used when trying to gauge the price
                  of an option relative to the amount it is in or out of the
                  money. When the option being measured is deep in or out of the
                  money, gamma is small. When the option is near the money,
                  gamma is largest.|

                  |Rho|The rate at which the price of a derivative changes
                  relative to a change in the risk-free rate of interest. Rho
                  measures the sensitivity of an option or options portfolio to
                  a change in interest rate.|

                  |Theta|A measure of the rate of decline in the value of an
                  option due to the passage of time. Theta can also be referred
                  to as the time decay on the value of an option. If everything
                  is held constant, then the option will lose value as time
                  moves closer to the maturity of the option. For example, if
                  the strike price of an option is $1,150 and theta is 53.80,
                  then in theory the value of the option will drop $53.80 per
                  day. The measure of theta quantifies the risk that time
                  imposes on options as options are only exercisable for a
                  certain period of time.|

                  |Vega|The amount that the price of an option changes compared
                  to a 1% change in volatility. Vega changes when there are
                  large price movements in the underlying asset and vega falls
                  as the option gets closer to maturity. Vega can change even if
                  there is no change in the price of the underlying asset, this
                  would happen if there is a change in expected volatility. For
                  example, if the vega of an option is -96.94 and if implied
                  volatility were to rise by 1% then the option value would fall
                  by $96.94.|


                  Note
                    * Each step in the binomial model represents a change in time, therefore, point estimates of the Greeks can be calculated for American options. The following can be used to calculate the Greeks for the Binomial Option Pricing Model (BOPM) pricing model, using the notation fstep,node so f1,1 represents the option price at the first step, top node (nodes are counted at each step starting with 0 at the bottom. See [Constructing the Tree](https://my.apps.factset.com/oa/pages/17735#tree) for more information).
                    
                  For more detials on calculation methodologies, visit [OA
                  14933](https://my.apps.factset.com/oa/pages/14933). 

                    *Currently only OPRA Exchange is supported with exchange ISO "USA"*
            /factset-options/v1/implied-volatility:
              post:
                tags:
                  - Risk Measures
                summary: >-
                  Returns the implied volatility information for the specified
                  option identifier
                description: >
                  Returns the Implied Volatility for the specified option across
                  European and American contracts. For more details regarding
                  Implied Volatility calculations visit - [OA
                  14932](https://my.apps.factset.com/oa/pages/14932)


                  *Currently the following exchanges are not supported for API
                  use cases - CME, CMEE, CBT, CBTE, NYM, NYME*
            /factset-options/v1/atm-implied-volatility:
              post:
                tags:
                  - Risk Measures
                summary: >-
                  Returns the at-the-money (ATM) implied volatility details for
                  the specified underlying security identifier
                description: >
                  Returns weighted average of the implied volatilities from the
                  options listed for a specified security identifier. 


                  There are three different methods available for calculating
                  at-the-money implied volatility (ATM IV), which gives a
                  weighted average of the implied volatilities from the options
                  listed on a given stock. They are ATM IV (Filtered), ATM IV
                  (Filtered with Smoothing), and ATM IV (Market). Each of these
                  ATM IV calculations is available for just the calls on a given
                  stock, just the puts, or the composite of both the calls and
                  puts.

                  This at-the-money implied volatility market can calculated for
                  different periods -

                  * One Month

                  * Two Months

                  * Three Months

                  * Four Months

                  * Five Months

                  * Six Months


                  *For more details regarding ATM Volatility calculations, visit
                  [OA 16276](https://my.apps.factset.com/oa/pages/16276)*

                    *Currently only OPRA Exchange traded options are 
    overlays:
      - type: APIs.io Search
        url: overlays/options-openapi-search.yml
    aid: factset:factset-options-api
  - name: FactSet Ownership Report Builder API
    description: Returns top holders of company and fund equity
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-ownership-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#changelog
      - type: OpenAPI
        url: properties/ownership-report-builder-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: FactSet Ownership API
            description: ''
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: Read more about STACH 2.0's row organized schema
            url: https://factset.github.io/stachschema/#/v2/RowOrganized
          tags:
            - name: Ownership
          paths:
            /holders:
              get:
                tags:
                  - Ownership
                summary: Holders of a company or fund
                description: Holders of a com
    overlays:
      - type: APIs.io Search
        url: overlays/ownership-report-builder-openapi-search.yml
    aid: factset:factset-ownership-report-builder-api
  - name: FactSet Documents Distributor - Documents API
    description: >-
      Documents APIs that provide filings such as Global Filings and XML files
      such as StreetAccount
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/documents-distributor-documents-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#changelog
      - type: OpenAPI
        url: properties/documents-distributor-documents-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Documents Distributor - Documents API
          paths:
            /global-filings/v1/list-files:
              get:
                tags:
                  - Global Filings API
                summary: Retrieve filings within FactSet coverage
                description: Parameters can be used to get the filings
            /asynch/streetaccount/v1/request-files:
              get:
                tags:
                  - StreetAccount XML API
                summary: Returns the jobID
                description: >-
                  Give the startDate and endDate parameters as request
                  parameters in the /request-files endpoint, it returns the
                  jobID. startDate and endDate should be in YYYY-MM-DDTHH:MM:SSZ
                  format


                  This API only supports adhoc requests to retrieve historical
                  files and does not support real-time       files and if you
                  interested in require real-time push should consider the other
                  three methods         (pushed via SFTP, to QNT account, or
                  your Azure Storage). Per API request able to query till 2
                  years of data
            /asynch/streetaccount/v1/check-status:
              get:
                tags:
                  - StreetAccount XML API
                summary: Returns the status and percentDone of the requested jobID
                description: >-
                  Need to plug-in the jobID got from /request-files into
                  /check-status endpoint
            /asynch/streetaccount/v1/get-files:
              get:
                tags:
                  - StreetAccount XML API
                summary: Returns the SA XML files for the specified daterange
                description: >-
                  Need to plug-in the jobID got from /request-files into
                  /check-status endpoint
            /asynch/news/v1/request-files:
              get:
                tags:
                  - News API
                summary: Returns the jobID
                description: >-
                  Give the startDate,endDate and source parameters as request
                  parameters in the /request-files endpoint, it returns the
                  jobID. startDate and endDate should be in YYYY-MM-DDTHH:MM:SSZ
                  format

                  This API only supports adhoc requests to retrieve historical
                  files
            /asynch/news/v1/check-status:
              get:
                tags:
                  - News API
                summary: >-
                  Returns the status and percentDone of the requested jobID and
                  source
                description: >-
                  Need to plug-in the jobID got from /request-files into
                  /check-status endpoint
            /asynch/news/v1/get-files:
              get:
                tags:
                  - News API
                summary: >-
                  Returns the news filings for the specified daterange and
                  source
                description: >-
                  Need to plug-in the source and jobID got from /request-files
                  into /get-file
    overlays:
      - type: APIs.io Search
        url: overlays/documents-distributor-documents-openapi-search.yml
    aid: factset:factset-documents-distributor-documents-api
  - name: FactSet Portfolio Metadata API
    description: >-
      The Portfolio Metadata API will allow users to read, write, and edit ACCTs
      and ACCT properties as well as ACTMs and components.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/portfolio-metadata-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#changelog
      - type: OpenAPI
        url: properties/portfolio-metadata-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: Portfolio Metadata
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /account-composite:
              post:
                description: Create a new account composite
                tags:
                  - Account Composite
              get:
                description: List account composite
                tags:
                  - Account Composite
            /account-composite/{id}:
              delete:
                description: Remove a account composite
                tags:
                  - Account Composite
              get:
                description: Read a account composite
                tags:
                  - Account Composite
              put:
                description: Modify a account composite
                tags:
                  - Account Composite
            /account:
              post:
                description: Create a new account
                tags:
                  - Account
              get:
                description: List account
                tags:
                  - Account
            /account/{id}:
              delete:
                description: Remove a account
                tags:
                  - Account
              get:
                description: Read a account
                tags:
                  - Account
              put:
                description: Modify a account
                tags:
                  - Account
            /holdings-composite/{id}:
              get:
                description: Read a holdings composite
                tags:
                  - Holdings Composite
            /holdings/{id}:
              get:
                description: Read a holdings
                tags:
                  - Holdings
            /returns-composite/{id}:
              get:
                description: Read a returns composite
                tags:
                  - Returns Composite
            /returns/{id}:
              get:
                description: Read a returns
                tags:
                  - Returns
            /trade-data/{id}:
              get:
                description: Read a trade data
                tags:
                  - Trade Data
            /user-defined-field-group:
              get:
                description: List user defined groups
                tags:
                  - User Defined Field Group
            /user-defined-field-group/{id}:
              get:
                description: Read a specific user defined field group and list its fields.
                tags:
                  - User Defined Field Group
            /user-defined-field:
              get:
                description: List user defined fields
                tags:
                  - User Defined Field
            /user-defined-field/{id}:
              get:
                description: Read a user defined field
                tags:
                  - User Defined Field
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/portfolio-metadata-api
          tags:
            - name: Account
              description: CRUD operations on Account
            - name: Account Composite
              description: CRUD operations on Account Composite
            - name: Holdings
              description: CRUD operations on Holdings
            - name: Holdings Composite
              description: CRUD operations on Holdings Composite
            - name: Returns
              description: CRUD operations on Returns
            - name: Returns Composite
              description: CRUD operations on Returns Composite
            - name: Trade Data
              description: CRUD operations on Trade Data
            - name: User Defined Field
              description: CRUD operations on User Defined Field
            - name: User Defined Field Group
              description: CRUD operations on User Defined F
    overlays:
      - type: APIs.io Search
        url: overlays/portfolio-metadata-openapi-search.yml
    aid: factset:factset-portfolio-metadata-api
  - name: FactSet Optimization Engine API (Multi-period)
    description: >-
      The Optimization Engine API (Multi-period) allows users to execute
      multi-period optimization, with client provided data, to solve dynamic
      asset allocation problems
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/optimization-engine-api-multi-period
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#changelog
      - type: OpenAPI
        url: properties/optimization-engine-api-multi-period-openapi-original.yml
        data:
          swagger: '2.0'
          info:
            title: fpo_mp_input
            description: ''
          paths:
            /mpo/v1/optimizeFPO:
              post: {}
          definitions:
            VAR.DistributionType:
              type: number
              enum:
                - 0
                - 1
                - 2
                - 3
                - 4
                - 5
                - 6
              description: |-
                0 - eMonteCarlo 
                1 - eExtremeEventSimulation 
                2 - eHistorical 
                3 - eFactorStressTest 
                4 - eExtremeEventStressTest 
                5 - eStressTestPerSe 
                6 - eFactorExposure 
            VAR.StatusIndicator:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eSuccess 
                1 - eFailure 
            VAR.DistributionDescription:
              type: object
              properties:
                riskModel:
                  type: string
                factorGroup:
                  type: string
                factors:
                  type: array
                  items:
                    type: string
                distributionType:
                  $ref: '#/definitions/VAR.DistributionType'
                reportDate:
                  type: integer
                  format: int32
                reportCurrency:
                  type: string
                horizonInTradingDays:
                  type: number
                  format: float
                returnDates:
                  type: array
                  items:
                    type: integer
                    format: int32
                  description: Only possibly defined for historical distributions
              required: []
            VAR.SimulatedReturns:
              type: object
              properties:
                entity:
                  type: string
                returns:
                  type: array
                  items:
                    type: number
                    format: float
              required: []
            VAR.DistributionStatus:
              type: object
              properties:
                indicator:
                  $ref: '#/definitions/VAR.StatusIndicator'
                message:
                  type: string
              required: []
            VAR.DistributionDataMessage:
              type: object
              properties:
                description:
                  $ref: '#/definitions/VAR.DistributionDescription'
                securitySimulations:
                  type: array
                  items:
                    $ref: '#/definitions/VAR.SimulatedReturns'
                status:
                  $ref: '#/definitions/VAR.DistributionStatus'
              required: []
            optimizer.inputs.MultiPeriodInput:
              type: object
              properties:
                strategy:
                  $ref: '#/definitions/optimizer.inputs.MultiPeriodStrategy'
                universe:
                  $ref: '#/definitions/optimizer.inputs.TotalUniverse'
                portfolios:
                  $ref: '#/definitions/optimizer.inputs.Portfolios'
                riskmodels:
                  $ref: '#/definitions/optimizer.inputs.MultiPeriodRiskModels'
                lookup_tables:
                  $ref: '#/definitions/optimizer.inputs.LookupTables'
                output_statistics:
                  type: boolean
              required: []
            optimizer.inputs.MPFrontierInput:
              type: object
              properties:
                input:
                  $ref: '#/definitions/optimizer.inputs.MultiPeriodInput'
                frontier:
                  $ref: '#/definitions/optimizer.inputs.FrontierSettings'
              required: []
            optimizer.inputs.MultiPeriodStrategy:
              type: object
              properties:
                objective:
                  $ref: '#/definitions/optimizer.inputs.MultiPeriodObjective'
                constraints:
                  $ref: '#/definitions/optimizer.inputs.MultiPeriodConstraints'
                transaction_cost:
                  $ref: '#/definitions/optimizer.inputs.TransactionCost'
                options:
                  $ref: '#/definitions/optimizer.inputs.MultiPeriodOptions'
                expected_return:
                  $ref: '#/definitions/optimizer.inputs.ExpectedReturn'
              required: []
            optimizer.inputs.MultiPeriodConstraints:
              type: object
              properties:
                expected_returns:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPExpectedReturnConstraint'
                diversification:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPDiversificationConstraint'
                factor_exposures:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPFactorExposureConstraint'
                general_linear:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPGeneralLinearConstraint'
                holding_threshold:
                  type: array
                  items:
                    $ref: >-
                      #/definitions/optimizer.inputs.MPHoldingsThresholdConstraint
                leverage:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPLeverageConstraint'
                num_of_assets:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPNumberofAssetsConstraint'
                sensitivity:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPSensitivityConstraint'
                weight_constraint:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPHoldingsWeightConstraint'
                number_of_buys:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPNumberOfBuysConstraint'
                number_of_sells:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPNumberOfSellsConstraint'
                round_lots:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPRoundlotsConstraint'
                trade_threshold:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPTradeThresholdConstraint'
                trading_turnover:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPTurnoverConstraint'
                risk_contribution:
                  type: array
                  items:
                    $ref: >-
                      #/definitions/optimizer.inputs.MPRiskContributionConstraint
                risk_volatility:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPRiskVolatilityConstraint'
                tail_risk:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPLimitTailRiskConstraint'
                  description: MultiPeriod-Specific
                target_probability:
                  type: array
                  items:
                    $ref: >-
                      #/definitions/optimizer.inputs.MPTargetProbabilityConstraint
              required: []
            optimizer.inputs.MPExpectedReturnConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.ExpectedReturnConstraint'
                constraint_on:
                  $ref: '#/definitions/optimizer.inputs.BoundSource.Enum'
                annualization_factor:
                  type: number
                  format: double
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPDiversificationConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.DiversificationConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPFactorExposureConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.FactorExposureConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPGeneralLinearConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.GeneralLinearConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPHoldingsThresholdConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.HoldingsThresholdConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPLeverageConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.LeverageConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPNumberofAssetsConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.NumberofAssetsConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPSensitivityConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.SensitivityConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPHoldingsWeightConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.HoldingsWeightConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPNumberOfBuysConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.NumberOfBuysConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPNumberOfSellsConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.NumberOfSellsConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPRoundlotsConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.RoundlotsConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPTradeThresholdConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.TradeThresholdConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPTransactionCostConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.TransactionCostConstraint'
                  description: not supported in engine yet.
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPTurnoverConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.TurnoverConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPRiskContributionConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.RiskContributionConstraint'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
            optimizer.inputs.MPRiskVolatilityConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.RiskVolatilityConstraint'
                constraint_on:
                  $ref: '#/definitions/optimizer.inputs.BoundSource.Enum'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPLimitTailRiskConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.LimitTailRiskConstraint'
                constraint_on:
                  $ref: '#/definitions/optimizer.inputs.BoundSource.Enum'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.LimitTailRiskConstraint:
              type: object
              properties:
                name:
                  type: string
                risk_measure:
                  $ref: '#/definitions/optimizer.inputs.TailRiskMeasure.Enum'
                max_risk:
                  $ref: '#/definitions/optimizer.inputs.Value'
                confidence_level:
                  $ref: '#/definitions/optimizer.inputs.Value'
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                active_risk:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
                hierarchy:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.MPTargetProbabilityConstraint:
              type: object
              properties:
                constraint:
                  $ref: '#/definitions/optimizer.inputs.TargetProbabilityConstraint'
                constraint_on:
                  $ref: '#/definitions/optimizer.inputs.BoundSource.Enum'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.TargetProbabilityConstraint:
              type: object
              properties:
                name:
                  type: string
                threshold_min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                threshold_max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                min_probability:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max_probability:
                  $ref: '#/definitions/optimizer.inputs.Value'
                hierarchy:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.EFPOConstraintWeightType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EFPOConstraintAssetType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EConstraintReturnType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EConstraintRiskRelativeInterpretationType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EConstraintGroupType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EConstraintTurnoverType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EConstraintValueType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.ELeverageValueType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EConstraintLevel:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EConstraintPenaltyType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EConstraintRiskType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EConstraintUnitType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EWeightingMethodType:
              type: object
              properties: {}
              required: []
              description: 'ToDo :: follow-up for what unit type the optimizer expects,'
            optimizer.inputs.ConstraintGroup:
              type: object
              properties:
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                id:
                  type: string
                nested_groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                group_lookup_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.FactorExposureAttributes:
              type: object
              properties:
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
              required: []
            optimizer.inputs.Penalty:
              type: object
              properties:
                enabled:
                  type: boolean
                penalty_type:
                  $ref: '#/definitions/optimizer.inputs.EConstraintPenaltyType.Enum'
                penalty_value:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max_violation:
                  $ref: '#/definitions/optimizer.inputs.Value'
              required: []
            optimizer.inputs.Constraints:
              type: object
              properties:
                expected_returns:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ExpectedReturnConstraint'
                diversification:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.DiversificationConstraint'
                factor_exposures:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.FactorExposureConstraint'
                general_linear:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.GeneralLinearConstraint'
                holding_threshold:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.HoldingsThresholdConstraint'
                leverage:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.LeverageConstraint'
                num_of_assets:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.NumberofAssetsConstraint'
                sensitivity:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.SensitivityConstraint'
                weight_constraint:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.HoldingsWeightConstraint'
                number_of_buys:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.NumberOfBuysConstraint'
                number_of_sells:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.NumberOfSellsConstraint'
                round_lots:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.RoundlotsConstraint'
                trade_threshold:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.TradeThresholdConstraint'
                transaction_cost:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.TransactionCostConstraint'
                trading_turnover:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.TurnoverConstraint'
                risk_etl:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.LimitRiskETLConstraint'
                risk_contribution:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.RiskContributionConstraint'
                risk_volatility:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.RiskVolatilityConstraint'
                limit_trade_constraint:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.TradingLimitTradeConstraint'
              required: []
            optimizer.inputs.ExpectedReturnConstraint:
              type: object
              properties:
                name:
                  type: string
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                return_value:
                  $ref: '#/definitions/optimizer.inputs.Value'
                use_strategy_return_value:
                  type: boolean
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                return_type:
                  $ref: '#/definitions/optimizer.inputs.EConstraintReturnType.Enum'
                rel_to_benchmark:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '1'
            optimizer.inputs.DiversificationConstraint:
              type: object
              properties:
                name:
                  type: string
                asset_value:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max_percent:
                  $ref: '#/definitions/optimizer.inputs.Value'
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                unit:
                  $ref: '#/definitions/optimizer.inputs.EConstraintUnitType.Enum'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '2'
            optimizer.inputs.FactorExposureConstraint:
              type: object
              properties:
                name:
                  type: string
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                rel_to_benchmark:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
                factors:
                  $ref: '#/definitions/optimizer.inputs.FactorExposureAttributes'
                  description: id --> min/max
                hierarchy:
                  type: integer
                  format: int32
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
              required: []
              description: '3'
            optimizer.inputs.GeneralLinearConstraint:
              type: object
              properties:
                name:
                  type: string
                security_attribute:
                  $ref: '#/definitions/optimizer.inputs.Value'
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                weighting_method:
                  $ref: '#/definitions/optimizer.inputs.EWeightingMethodType.Enum'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                hierarchy:
                  type: integer
                  format: int32
                rel_to_benchmark:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
              description: '4'
            optimizer.inputs.HoldingsThresholdConstraint:
              type: object
              properties:
                name:
                  type: string
                custom_asset:
                  $ref: '#/definitions/optimizer.inputs.Value'
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                asset_type:
                  $ref: '#/definitions/optimizer.inputs.EFPOConstraintAssetType.Enum'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                  description: Scope can be asset
                unit:
                  $ref: '#/definitions/optimizer.inputs.EConstraintUnitType.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '5'
            optimizer.inputs.LeverageConstraint:
              type: object
              properties:
                name:
                  type: string
                value:
                  $ref: '#/definitions/optimizer.inputs.Value'
                value_type:
                  $ref: '#/definitions/optimizer.inputs.ELeverageValueType.Enum'
                hierarchy:
                  type: integer
                  format: int32
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
              required: []
              description: '6'
            optimizer.inputs.NumberofAssetsConstraint:
              type: object
              properties:
                name:
                  type: string
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '7'
            optimizer.inputs.SensitivityConstraint:
              type: object
              properties:
                name:
                  type: string
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                sensitivity_attribute:
                  $ref: '#/definitions/optimizer.inputs.Value'
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                rel_to_benchmark:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
                hierarchy:
                  type: integer
                  format: int32
                unit:
                  $ref: '#/definitions/optimizer.inputs.EConstraintUnitType.Enum'
              required: []
              description: '8'
            optimizer.inputs.HoldingsWeightConstraint:
              type: object
              properties:
                name:
                  type: string
                custom_asset:
                  $ref: '#/definitions/optimizer.inputs.Value'
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                unit:
                  $ref: '#/definitions/optimizer.inputs.EConstraintUnitType.Enum'
                weight_type:
                  $ref: '#/definitions/optimizer.inputs.EFPOConstraintWeightType.Enum'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                asset_type:
                  $ref: '#/definitions/optimizer.inputs.EFPOConstraintAssetType.Enum'
                rel_to_benchmark:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
                hierarchy:
                  type: integer
                  format: int32
                apply_only_to_direct:
                  type: boolean
              required: []
              description: '9'
            optimizer.inputs.NumberOfBuysConstraint:
              type: object
              properties:
                name:
                  type: string
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '10'
            optimizer.inputs.NumberOfSellsConstraint:
              type: object
              properties:
                name:
                  type: string
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '11'
            optimizer.inputs.RoundlotsConstraint:
              type: object
              properties:
                name:
                  type: string
                asset_level:
                  $ref: '#/definitions/optimizer.inputs.Value'
                  description: No Negative Value
                custom_asset:
                  $ref: '#/definitions/optimizer.inputs.Value'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                asset_type:
                  $ref: '#/definitions/optimizer.inputs.EFPOConstraintAssetType.Enum'
                general_value:
                  type: number
                  format: double
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '12'
            optimizer.inputs.TradeThresholdConstraint:
              type: object
              properties:
                name:
                  type: string
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                custom_asset:
                  $ref: '#/definitions/optimizer.inputs.Value'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                unit:
                  $ref: '#/definitions/optimizer.inputs.EConstraintUnitType.Enum'
                asset_type:
                  $ref: '#/definitions/optimizer.inputs.EFPOConstraintAssetType.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '13'
            optimizer.inputs.TransactionCostConstraint:
              type: object
              properties:
                name:
                  type: string
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                custom_asset:
                  $ref: '#/definitions/optimizer.inputs.Value'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                unit:
                  $ref: '#/definitions/optimizer.inputs.EConstraintUnitType.Enum'
                asset_type:
                  $ref: '#/definitions/optimizer.inputs.EFPOConstraintAssetType.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '14'
            optimizer.inputs.TurnoverConstraint:
              type: object
              properties:
                name:
                  type: string
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                custom_asset:
                  $ref: '#/definitions/optimizer.inputs.Value'
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                value_type:
                  $ref: '#/definitions/optimizer.inputs.EConstraintValueType.Enum'
                asset_type:
                  $ref: '#/definitions/optimizer.inputs.EFPOConstraintAssetType.Enum'
                turnover_type:
                  $ref: '#/definitions/optimizer.inputs.EConstraintTurnoverType.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '15'
            optimizer.inputs.TradingLimitTradeConstraint:
              type: object
              properties:
                name:
                  type: string
                custom_asset:
                  $ref: '#/definitions/optimizer.inputs.Value'
                min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                max:
                  $ref: '#/definitions/optimizer.inputs.Value'
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                unit:
                  $ref: '#/definitions/optimizer.inputs.EConstraintUnitType.Enum'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                asset_type:
                  $ref: '#/definitions/optimizer.inputs.EFPOConstraintAssetType.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '19'
            optimizer.inputs.LimitRiskETLConstraint:
              type: object
              properties:
                name:
                  type: string
                max_etl:
                  $ref: '#/definitions/optimizer.inputs.Value'
                confidence_level:
                  $ref: '#/definitions/optimizer.inputs.Value'
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                active_etl:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '16'
            optimizer.inputs.RiskContributionConstraint:
              type: object
              properties:
                name:
                  type: string
                max_percent:
                  $ref: '#/definitions/optimizer.inputs.Value'
                custom_asset:
                  $ref: '#/definitions/optimizer.inputs.Value'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                asset_type:
                  $ref: '#/definitions/optimizer.inputs.EFPOConstraintAssetType.Enum'
                risk_type:
                  $ref: '#/definitions/optimizer.inputs.EConstraintRiskType.Enum'
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '17'
            optimizer.inputs.RiskVolatilityConstraint:
              type: object
              properties:
                name:
                  type: string
                max_value_of_risk:
                  $ref: '#/definitions/optimizer.inputs.Value'
                level:
                  $ref: '#/definitions/optimizer.inputs.EConstraintLevel.Enum'
                penalty:
                  $ref: '#/definitions/optimizer.inputs.Penalty'
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ConstraintGroup'
                risk_type:
                  $ref: '#/definitions/optimizer.inputs.EConstraintRiskType.Enum'
                active_risk:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
                hierarchy:
                  type: integer
                  format: int32
              required: []
              description: '18'
            optimizer.inputs.EValueType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.Value:
              type: object
              properties:
                value_type:
                  $ref: '#/definitions/optimizer.inputs.EValueType.Enum'
                raw_value:
                  type: number
                  format: double
                ref_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.BoundSource:
              type: object
              properties: {}
              required: []
            optimizer.inputs.OnPeriods:
              type: object
              properties:
                periods:
                  type: array
                  items:
                    type: integer
                    format: int32
              required: []
            optimizer.inputs.AcrossPeriods:
              type: object
              properties:
                start_period:
                  type: integer
                  format: int32
                end_period:
                  type: integer
                  format: int32
                rolling:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods.RollingPeriods'
              required: []
            optimizer.inputs.RollingMethod:
              type: object
              properties: {}
              required: []
            optimizer.inputs.TailRiskMeasure:
              type: object
              properties: {}
              required: []
            optimizer.inputs.MultiPeriodObjective:
              type: object
              properties:
                factor_exposure:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPFactorExposureTerm'
                volatility:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPVolatilityTerm'
                general_linear:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPGeneralLinearTerm'
                expected_return:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPExpectedReturnTerm'
                sensitivity:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPSensitivityTerm'
                objective_ratio:
                  $ref: '#/definitions/optimizer.inputs.MPObjectiveRatioTerm'
                tail_risk:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPTailRiskTerm'
                  description: MultiPeriod-Specific
                target_probability:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.MPTargetProbabilityTerm'
              required: []
            optimizer.inputs.MPFactorExposureTerm:
              type: object
              properties:
                term:
                  $ref: '#/definitions/optimizer.inputs.FactorExposureTerm'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPVolatilityTerm:
              type: object
              properties:
                term:
                  $ref: '#/definitions/optimizer.inputs.VolatilityTerm'
                term_on:
                  $ref: '#/definitions/optimizer.inputs.BoundSource.Enum'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPGeneralLinearTerm:
              type: object
              properties:
                term:
                  $ref: '#/definitions/optimizer.inputs.GeneralLinearTerm'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPExpectedReturnTerm:
              type: object
              properties:
                term:
                  $ref: '#/definitions/optimizer.inputs.ExpectedReturnTerm'
                term_on:
                  $ref: '#/definitions/optimizer.inputs.BoundSource.Enum'
                annualization_factor:
                  type: number
                  format: double
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPSensitivityTerm:
              type: object
              properties:
                term:
                  $ref: '#/definitions/optimizer.inputs.SensitivityTerm'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPObjectiveRatioTerm:
              type: object
              properties:
                sharpe_ratio:
                  $ref: '#/definitions/optimizer.inputs.SharpeRatioTerm'
                starr:
                  $ref: '#/definitions/optimizer.inputs.STARRTerm'
                diversification_ratio:
                  $ref: '#/definitions/optimizer.inputs.DiversificationRatioTerm'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.MPTargetProbabilityTerm:
              type: object
              properties:
                term:
                  $ref: '#/definitions/optimizer.inputs.TargetProbabilityTerm'
                constrain_on:
                  $ref: '#/definitions/optimizer.inputs.BoundSource.Enum'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.TargetProbabilityTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                threshold_min:
                  $ref: '#/definitions/optimizer.inputs.Value'
                threshold_max:
                  $ref: '#/definitions/optimizer.inputs.Value'
              required: []
            optimizer.inputs.MPTailRiskTerm:
              type: object
              properties:
                term:
                  $ref: '#/definitions/optimizer.inputs.TailRiskTerm'
                term_on:
                  $ref: '#/definitions/optimizer.inputs.BoundSource.Enum'
                on_periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
                across_periods:
                  $ref: '#/definitions/optimizer.inputs.AcrossPeriods'
              required: []
            optimizer.inputs.TailRiskTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                risk_measure:
                  $ref: '#/definitions/optimizer.inputs.TailRiskMeasure.Enum'
                confidence_level:
                  type: number
                  format: double
                use_centered_etl:
                  type: boolean
                active_risk:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.EObjectiveTermDirection:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EAggregationMethod:
              type: object
              properties: {}
              required: []
            optimizer.inputs.EObjectiveRiskType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.Objective:
              type: object
              properties:
                factor_exposure:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.FactorExposureTerm'
                expected_tail_loss:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ExpectedTailLossTerm'
                volatility:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.VolatilityTerm'
                drawdown:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.DrawdownTerm'
                general_linear:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.GeneralLinearTerm'
                expected_return:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ExpectedReturnTerm'
                sensitivity:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.SensitivityTerm'
                sharpe_ratio:
                  $ref: '#/definitions/optimizer.inputs.SharpeRatioTerm'
                starr:
                  $ref: '#/definitions/optimizer.inputs.STARRTerm'
                diversification_ratio:
                  $ref: '#/definitions/optimizer.inputs.DiversificationRatioTerm'
                null_risk_parity:
                  type: boolean
                  description: This is true when there is no risk_parity
                risk_parity:
                  $ref: '#/definitions/optimizer.inputs.RiskParityTerm'
                transaction_cost:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.TransactionCostTerm'
              required: []
              description: >-
                ToDo :Note to circle back to this when we have more info on
                factors
            optimizer.inputs.FactorExposureTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                factors:
                  type: array
                  items:
                    type: string
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                rel_to_benchmark:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.ExpectedTailLossTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                confidence_level:
                  type: number
                  format: double
                use_centered_etl:
                  type: boolean
                active_risk:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.VolatilityTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                risk_type:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveRiskType.Enum'
                  description: 'TODO:  RiskModel'
                factors:
                  type: array
                  items:
                    type: string
                active_risk:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.DrawdownTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                confidence_level:
                  type: number
                  format: double
              required: []
            optimizer.inputs.GeneralLinearTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                attribute:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                method:
                  $ref: '#/definitions/optimizer.inputs.EAggregationMethod.Enum'
                rel_to_benchmark:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.ExpectedReturnTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                return_values:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                use_alpha:
                  type: boolean
                rel_to_benchmark:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.TransactionCostTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
              required: []
            optimizer.inputs.SensitivityTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                sensitivity_attribute:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                rel_to_benchmark:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.SharpeRatioTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                risk_free_rate:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                active_risk:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.STARRTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                risk_free_rate:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
                confidence_level:
                  type: number
                  format: double
                use_centered_etl:
                  type: boolean
                active_risk:
                  type: boolean
                benchmark_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.DiversificationRatioTerm:
              type: object
              properties:
                name:
                  type: string
                multiplier:
                  $ref: '#/definitions/optimizer.inputs.Value'
                direction:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveTermDirection.Enum'
              required: []
            optimizer.inputs.RiskParityTerm:
              type: object
              properties:
                name:
                  type: string
                risk_type:
                  $ref: '#/definitions/optimizer.inputs.EObjectiveRiskType.Enum'
              required: []
            optimizer.inputs.MultiPeriodOptions:
              type: object
              properties:
                options:
                  $ref: '#/definitions/optimizer.inputs.Options'
                weight_rebalance_periods:
                  type: array
                  items:
                    type: integer
                    format: int32
                total_periods_count:
                  type: integer
                  format: int32
                initial_point_randomization_count:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.Options:
              type: object
              properties:
                maxRunTime:
                  type: integer
                  format: int32
                ConvergenceTolerance:
                  type: number
                  format: double
                cash_flow_formula:
                  $ref: '#/definitions/optimizer.inputs.Value'
                convert_weights_to_cash_for_ip:
                  type: boolean
                convert_weights_to_cash_for_bmk:
                  type: boolean
                composite_asset_lookthrough_level:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.ETransactionCostUnitType:
              type: object
              properties: {}
              required: []
              description: |-
                ToDo :: follow-up for what unit type the optimizer expects,
                and we can populate it accordingly in the request?
            optimizer.inputs.TransactionCost:
              type: object
              properties:
                unit_type:
                  $ref: '#/definitions/optimizer.inputs.ETransactionCostUnitType.Enum'
                buy_cost:
                  $ref: '#/definitions/optimizer.inputs.Value'
                sell_cost:
                  $ref: '#/definitions/optimizer.inputs.Value'
              required: []
            optimizer.inputs.EAlphaUnitType:
              type: object
              properties: {}
              required: []
            optimizer.inputs.ExpectedReturn:
              type: object
              properties:
                alpha:
                  $ref: '#/definitions/optimizer.inputs.Value'
                alpha_unit:
                  $ref: '#/definitions/optimizer.inputs.EAlphaUnitType.Enum'
              required: []
            optimizer.inputs.MultiPeriodRiskModels:
              type: object
              properties:
                risk_models:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.RiskModelForPeriods'
              required: []
            optimizer.inputs.RiskModelForPeriods:
              type: object
              properties:
                risk_model:
                  $ref: '#/definitions/optimizer.inputs.RiskModel'
                periods:
                  $ref: '#/definitions/optimizer.inputs.OnPeriods'
              required: []
              description: Must have *one* model for each period
            optimizer.inputs.RiskModel:
              type: object
              properties:
                simulated_risk_model:
                  $ref: '#/definitions/optimizer.inputs.SimulatedRiskModel'
                quant_risk_model:
                  $ref: '#/definitions/optimizer.inputs.QuantRiskModel'
                raw_model:
                  $ref: '#/definitions/optimizer.inputs.RawRiskModel'
              required: []
            optimizer.inputs.QuantRiskModel:
              type: object
              properties:
                raw_data:
                  $ref: '#/definitions/optimizer.inputs.QuantRiskModelRawData'
                request_info:
                  $ref: '#/definitions/optimizer.inputs.QuantRiskRequestInfo'
              required: []
            optimizer.inputs.QuantRiskRequestInfo:
              type: object
              properties:
                service_url:
                  type: string
                  description: POST
                json_post_body:
                  type: string
                lima_header:
                  type: string
                pickup_base_url:
                  type: string
              required: []
            optimizer.inputs.QuantRiskModelRawData:
              type: object
              properties:
                labels:
                  $ref: '#/definitions/optimizer.inputs.Labels'
                RawAssetCovarianceMatrix:
                  $ref: '#/definitions/optimizer.inputs.SparseMatrix'
                RawFactorExposure:
                  $ref: '#/definitions/optimizer.inputs.SparseMatrix'
                RawFactorCovarianceMatrix:
                  $ref: '#/definitions/optimizer.inputs.DenseMatrix'
                RiskModelCoverageFlag:
                  type: array
                  items:
                    type: integer
                    format: int32
              required: []
            optimizer.inputs.Labels:
              type: object
              properties:
                factor:
                  $ref: '#/definitions/optimizer.inputs.Factor'
                security:
                  $ref: '#/definitions/optimizer.inputs.Security'
              required: []
              description: >-
                Labeling and index information to be able to reconstruct the
                calculated data results to the provided inputs from the request.
            optimizer.inputs.Factor:
              type: object
              properties:
                ids:
                  type: array
                  items:
                    type: string
                names:
                  type: array
                  items:
                    type: string
              required: []
              description: Labels relevant to calculation-levels with 'Factor' in the name
            optimizer.inputs.Security:
              type: object
              properties:
                ids:
                  type: array
                  items:
                    type: string
              required: []
              description: >-
                Labels relevant to calculation-levels with 'Security' in the
                name
            optimizer.inputs.SparseMatrix:
              type: object
              properties:
                rows:
                  type: integer
                  format: int32
                columns:
                  type: integer
                  format: int32
                indexPointer:
                  type: array
                  items:
                    type: integer
                    format: int32
                indices:
                  type: array
                  items:
                    type: integer
                    format: int32
                value:
                  type: array
                  items:
                    type: number
                    format: double
              required: []
              description: Represents a sparse matrix in the CSR format
            optimizer.inputs.DenseMatrix:
              type: object
              properties:
                value:
                  type: array
                  items:
                    $ref: '#/definitions/google.protobuf.ListValue'
                  description: 2D array of doubles
              required: []
              description: Represents a dense matrix
            optimizer.inputs.SimulatedRiskModel:
              type: object
              properties:
                raw_data:
                  $ref: '#/definitions/VAR.DistributionDataMessage'
                request_info:
                  $ref: '#/definitions/optimizer.inputs.SimulatedRiskRequestInfo'
              required: []
            optimizer.inputs.SimulatedRiskRequestInfo:
              type: object
              properties:
                url:
                  type: string
                  description: GET
                lima_header:
                  type: string
              required: []
            optimizer.inputs.RawRiskModel:
              type: object
              properties:
                simulations:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.RawRiskModel.Simulations'
              required: []
            optimizer.inputs.TotalUniverse:
              type: object
              properties:
                assets:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.Asset'
                composite_assets:
                  $ref: '#/definitions/optimizer.inputs.CompositeAsset'
                derivatives:
                  $ref: '#/definitions/optimizer.inputs.Derivative'
              required: []
            optimizer.inputs.Asset:
              type: object
              properties:
                symbol:
                  type: string
                price:
                  type: number
                  format: double
              required: []
            optimizer.inputs.AssetPrice:
              type: object
              properties:
                source:
                  $ref: '#/definitions/optimizer.inputs.AssetPrice.EPriceSource'
                price_override:
                  type: number
                  format: double
              required: []
            optimizer.inputs.CompositeConstituent:
              type: object
              properties:
                univ_index:
                  type: integer
                  format: int32
                weight:
                  type: number
                  format: double
                price:
                  $ref: '#/definitions/optimizer.inputs.AssetPrice'
              required: []
            optimizer.inputs.CompositeAsset:
              type: object
              properties:
                constituents:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.CompositeConstituent'
              required: []
            optimizer.inputs.Derivative:
              type: object
              properties:
                offset_index:
                  type: integer
                  format: int32
                  description: >-
                    Index of the offset. E.g. CASH_USD_FUT for Futures or 2nd
                    leg for Forwards. -1 if no offset generated
                future:
                  $ref: '#/definitions/optimizer.inputs.Derivative.Future'
                forward:
                  type: boolean
                  description: Nothing else is needed for forwards.
              required: []
            optimizer.inputs.LookupTables:
              type: object
              properties:
                groups:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.GroupDefinition'
                  description: tables to be referenced by index from the strategy.
                values:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.ValueReference'
              required: []
            optimizer.inputs.GroupDefinition:
              type: object
              properties:
                univ_indices:
                  type: array
                  items:
                    type: integer
                    format: int32
              required: []
              description: |-
                Contains the subset of assets associated with a
                constraint group. (excluding Factor groups, as the
                optimizer will be respondible for fetching the risk
                model and expanding factor groups.
            optimizer.inputs.ValueReference:
              type: object
              properties:
                asset_values:
                  type: number
                  format: double
              required: []
              description: |-
                Contains the results of an asset-level formula from FPO,
                mapping the TotalUniverse asset index to resulting value.
                The list of ValueReferences in the LookupTables should
                provide results for ALL formulae referenced throughout
                the FPO strategy. When the optimizer encounters a "reference"
                value in the strategy, it will come here to resolve the
                value for each asset within the scope of that reference.
            optimizer.inputs.Portfolios:
              type: object
              properties:
                initial:
                  $ref: '#/definitions/optimizer.inputs.Portfolio'
                benchmarks:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.Portfolio'
                  description: index 0 is always the "Primary Benchmark"
                buylist:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.BuyListItem'
                cash_univ_index:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.Portfolio:
              type: object
              properties:
                holdings:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.PortfolioItem'
              required: []
            optimizer.inputs.PortfolioItem:
              type: object
              properties:
                univ_index:
                  type: integer
                  format: int32
                price:
                  $ref: '#/definitions/optimizer.inputs.AssetPrice'
                  description: if null, use total univ pricing
                shares:
                  type: number
                  format: double
              required: []
            optimizer.inputs.BuyListItem:
              type: object
              properties:
                univ_index:
                  type: integer
                  format: int32
                price:
                  $ref: '#/definitions/optimizer.inputs.AssetPrice'
                  description: if null, use total univ pricing
              required: []
            optimizer.inputs.FrontierSettings:
              type: object
              properties:
                constraint_name:
                  type: string
                objective_term_name:
                  type: string
                min:
                  $ref: '#/definitions/optimizer.inputs.Range'
                max:
                  $ref: '#/definitions/optimizer.inputs.Range'
              required: []
            optimizer.inputs.Range:
              type: object
              properties:
                points:
                  type: integer
                  format: int32
                  description: points determined by Engine
                start_to_end:
                  $ref: '#/definitions/optimizer.inputs.StartEndRange'
                specific_points:
                  $ref: '#/definitions/optimizer.inputs.SpecificPoints'
              required: []
            optimizer.inputs.StartEndRange:
              type: object
              properties:
                start:
                  type: number
                  format: double
                end:
                  type: number
                  format: double
                points:
                  type: integer
                  format: int32
              required: []
            optimizer.inputs.SpecificPoints:
              type: object
              properties:
                points:
                  type: array
                  items:
                    type: number
                    format: double
              required: []
            optimizer.outputs.MultiPeriodOutput:
              type: object
              properties:
                periods:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.outputs.Periods'
                raw_stats:
                  type: string
                  description: temporary
              required: []
            optimizer.outputs.Periods:
              type: object
              properties:
                weights:
                  type: number
                  format: double
              required: []
            google.protobuf.Struct:
              type: object
              properties:
                fields:
                  $ref: '#/definitions/optimizer.inputs.Value'
              required: []
            google.protobuf.Value:
              type: object
              properties:
                nullValue:
                  $ref: '#/definitions/google.protobuf.NullValue'
                numberValue:
                  type: number
                  format: double
                stringValue:
                  type: string
                boolValue:
                  type: boolean
                structValue:
                  $ref: '#/definitions/google.protobuf.Struct'
                listValue:
                  $ref: '#/definitions/google.protobuf.ListValue'
              required: []
            google.protobuf.NullValue:
              type: number
              enum:
                - 0
              description: '0 - NULL_VALUE '
            google.protobuf.ListValue:
              type: object
              properties:
                values:
                  type: array
                  items:
                    $ref: '#/definitions/optimizer.inputs.Value'
              required: []
            optimizer.inputs.EFPOConstraintWeightType.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - ePercentOfPortfolioValue 
                1 - ePercentOfExposure 
            optimizer.inputs.EFPOConstraintAssetType.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
              description: |-
                0 - eAll 
                1 - eCustom 
                2 - eBuyList 
            optimizer.inputs.EConstraintReturnType.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eTarget 
                1 - eMaximizeProbability 
            optimizer.inputs.EConstraintRiskRelativeInterpretationType.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eVolatilityDifference 
                1 - eTrackingError 
            optimizer.inputs.EConstraintGroupType.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
              description: |-
                0 - eTotal 
                1 - eSelection 
                2 - eSecurity 
            optimizer.inputs.EConstraintTurnoverType.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
              description: |-
                0 - eTotal 
                1 - eBuy 
                2 - eSell 
            optimizer.inputs.EConstraintValueType.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eMarketValue 
                1 - eExposureValue 
            optimizer.inputs.ELeverageValueType.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eFixedValue 
                1 - eMaximumValue 
            optimizer.inputs.EConstraintLevel.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
              description: |-
                0 - ePortfolio 
                1 - eGroup 
                2 - eAsset 
            optimizer.inputs.EConstraintPenaltyType.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
              description: |-
                0 - eLinear 
                1 - eQuadratic 
                2 - eScaledQuadratic 
            optimizer.inputs.EConstraintRiskType.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eStandardDevition 
                1 - eVariance 
            optimizer.inputs.EConstraintUnitType.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
              description: |-
                0 - eCurrency 
                1 - ePercentage 
                2 - eNumber 
            optimizer.inputs.EWeightingMethodType.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eWeights 
                1 - eShares 
            optimizer.inputs.EValueType.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
                - 3
              description: |-
                0 - eNA 
                1 - eRaw 
                2 - eReference 
                3 - eExpandRaw 
            optimizer.inputs.BoundSource.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
                - 3
                - 4
                - 5
              description: |-
                0 - ePortfolioReturn 
                1 - ePortfolioValue 
                2 - eFundingRatio 
                3 - eSurplusReturn 
                4 - eDrawdownPercent 
                5 - eDrawdownValue 
            optimizer.inputs.AcrossPeriods.RollingPeriods:
              type: object
              properties:
                frequency:
                  type: integer
                  format: int32
                method:
                  $ref: '#/definitions/optimizer.inputs.RollingMethod.Enum'
              required: []
            optimizer.inputs.RollingMethod.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
                - 3
              description: |-
                0 - eValuePerPath 
                1 - eAllValues 
                2 - eMinPerStep 
                3 - eMaxPerStep 
            optimizer.inputs.TailRiskMeasure.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - ETL 
                1 - VaR 
            optimizer.inputs.EObjectiveTermDirection.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eMinimize 
                1 - eMaximize 
            optimizer.inputs.EAggregationMethod.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eWeights 
                1 - eQuantity 
            optimizer.inputs.EObjectiveRiskType.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
              description: |-
                0 - eETL 
                1 - eStandardDeviation 
                2 - eVariance 
            optimizer.inputs.ETransactionCostUnitType.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - ePercent 
                1 - eCostPerShare 
            optimizer.inputs.EAlphaUnitType.Enum:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - ePercent 
                1 - eAbsolute 
            optimizer.inputs.RawRiskModel.Simulations:
              type: object
              properties:
                id:
                  type: string
                simulatedReturns:
                  type: array
                  items:
                    type: number
                    format: double
              required: []
            optimizer.inputs.AssetPrice.EPriceSource:
              type: number
              enum:
                - 0
                - 1
              description: |-
                0 - eTotalUniverse 
                1 - eOverride 
            optimizer.inputs.Derivative.Future:
              type: object
              properties:
                contract_size:
                  type: number
                  format: double
                method:
                  $ref: >-
                    #/definitions/optimizer.inputs.Derivative.Future.EComputationMethod.Enum
                using_pa_multiply:
                  type: boolean
              required: []
            optimizer.inputs.Derivative.Future.EComputationMethod:
              type: object
              properties: {}
              required: []
            optimizer.inputs.Derivative.Future.EComputationMethod.Enum:
              type: number
              enum:
                - 0
                - 1
                - 2
              description: |-
                0 - eCost 
                1 - eTotalCost 
                2 - eMa
    overlays:
      - type: APIs.io Search
        url: overlays/optimization-engine-api-multi-period-openapi-search.yml
    aid: factset:factset-optimization-engine-api-multi-period
  - name: FactSet Real-Time Price Alerting API
    description: >-
      Basic Price Alerting deals with generation of alerts based on current
      price data. Users can define an upper or lower limit and choose on which
      price type those limit conditions apply.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/real-time-price-alerting-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#changelog
      - type: OpenAPI
        url: properties/real-time-price-alerting-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Price Alerting API For Digital Portals
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /alerting/prices/basic/alert/get:
              get:
                tags:
                  - alerting
                description: >-
                  Details of an alert. The details include the trigger
                  definition at the time of alert creation.
                summary: Details of an alert.
            /alerting/prices/basic/alert/list:
              get:
                tags:
                  - alerting
                description: List of alerts in descending order of creation.
                summary: List of alerts.
            /alerting/prices/basic/trigger/get:
              get:
                tags:
                  - alerting
                description: Details of a trigger.
                summary: Details of a trigger.
            /alerting/prices/basic/trigger/list:
              post:
                tags:
                  - alerting
                description: >-
                  Returns a list of triggers sorted in descending order of
                  creation.
                summary: List of triggers.
          tags:
            - name: alerting
              description: alerting endpoints
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/
          x-interface-version: 2
          x-documenter-version: 6.3.9
          x-api-version: nu
    overlays:
      - type: APIs.io Search
        url: overlays/real-time-price-alerting-openapi-search.yml
    aid: factset:factset-real-time-price-alerting-api
  - name: FactSet Real-Time Quotes API
    description: >-
      The Quotes API combines endpoints for retrieving security end-of-day,
      delayed, and realtime prices with performance key figures and basic
      reference data on the security and market level.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/real-time-quotes-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#changelog
      - type: OpenAPI
        url: properties/real-time-quotes-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Quotes API For Digital Portals
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /basic/assetClass/list:
              get:
                tags:
                  - basic
                description: List of asset classes as defined by FactSet Digital Solutions.
                summary: List of asset classes.
            /basic/backgroundText/type/list:
              post:
                tags:
                  - basic
                summary: List of background text types.
                description: List of background text types.
            /basic/benchmark/type/list:
              get:
                tags:
                  - basic
                summary: List of benchmark types.
                description: List of benchmark types.
            /basic/delivery/list:
              post:
                tags:
                  - basic
                summary: List of deliveries.
                description: List of deliveries.
            /basic/frequency/type/list:
              get:
                tags:
                  - basic
                summary: List of frequency types.
                description: List of frequency types.
            /basic/language/get:
              get:
                tags:
                  - basic
                description: Details for a language.
                summary: Details for a language.
            /basic/language/getByCode:
              get:
                tags:
                  - basic
                description: Details for a language identified by code.
                summary: Details for a language identified by code.
            /basic/language/list:
              get:
                tags:
                  - basic
                description: List of languages.
                summary: List of languages.
            /basic/market/get:
              get:
                tags:
                  - basic
                description: Details of a market.
                summary: Details of a market.
            /basic/market/list:
              post:
                tags:
                  - basic
                description: List of markets.
                summary: List of markets.
            /basic/market/group/list:
              get:
                tags:
                  - basic
                description: List of market groups.
                summary: List of market groups.
            /basic/market/type/list:
              get:
                tags:
                  - basic
                description: List of market types.
                summary: List of market types.
            /basic/media/kind/list:
              get:
                tags:
                  - basic
                summary: List of media kinds.
                description: List of media kinds.
            /basic/media/type/list:
              post:
                tags:
                  - basic
                description: >-
                  List of Internet media types. See
                  http://www.iana.org/assignments/media-types/ for further
                  details. Not all such Internet media types are available on
                  the MDG.
                summary: List of Internet media types.
            /basic/mic/operating/list:
              post:
                tags:
                  - basic
                summary: List of operating market identifier codes (MIC).
                description: List of operating market identifier codes (MIC).
            /basic/region/get:
              get:
                tags:
                  - basic
                summary: Details for a region.
                description: Details for a geographic, political, or economic region.
            /basic/region/list:
              get:
                tags:
                  - basic
                summary: List of regions.
                description: List of geographic, political, and economic regions.
            /basic/region/continent/get:
              get:
                tags:
                  - basic
                summary: Details for a continent.
                description: Details for a continent.
            /basic/region/continent/list:
              get:
                tags:
                  - basic
                summary: List of continents.
                description: List of continents.
            /basic/region/country/get:
              get:
                tags:
                  - basic
                summary: Details for a country.
                description: Details for a country.
            /basic/region/country/getByCode:
              get:
                tags:
                  - basic
                summary: Details for a country identified by code.
                description: Details for a country identified by code.
            /basic/region/country/list:
              get:
                tags:
                  - basic
                summary: List of countries.
                description: List of countries.
            /basic/timezone/get:
              get:
                tags:
                  - basic
                description: >-
                  Details of a timezone identified by id, as specified by the
                  Internet Assigned Numbers Authority. See
                  http://www.iana.org/time-zones for further details. Not all
                  such timezones are available on the MDG.
                summary: Details of a timezone.
            /basic/timezone/getByName:
              get:
                tags:
                  - basic
                description: >-
                  Details of a timezone identified by name, as specified by the
                  Internet Assigned Numbers Authority. See
                  http://www.iana.org/time-zones for further details. Not all
                  such timezones are available on the MDG.
                summary: Details of a timezone identified by name.
            /basic/timezone/list:
              post:
                tags:
                  - basic
                description: >-
                  List of timezones identified by id, as specified by the
                  Internet Assigned Numbers Authority. See
                  http://www.iana.org/time-zones for further details. Not all
                  such timezones are available on the MDG.
                summary: List of timezones.
            /basic/valueUnit/get:
              get:
                tags:
                  - basic
                summary: Details of a value unit.
                description: Details of a value unit.
            /basic/valueUnit/list:
              post:
                tags:
                  - basic
                summary: List of value units.
                description: List of value units.
            /basic/valueUnit/alternative/list:
              get:
                tags:
                  - basic
                description: List of alternative units.
                summary: List of alternative units.
            /basic/valueUnit/currency/list:
              post:
                tags:
                  - basic
                summary: List of currencies.
                description: List of currencies.
            /basic/valueUnit/currency/fractional/get:
              get:
                tags:
                  - basic
                summary: Details of a fractional currency.
                description: Details of a fractional currency.
            /basic/valueUnit/currency/fractional/list:
              get:
                tags:
                  - basic
                summary: List of fractional currencies.
                description: List of fractional currencies.
            /basic/valueUnit/currency/main/list:
              post:
                tags:
                  - basic
                summary: List of main currencies.
                description: List of main currencies.
            /category/get:
              get:
                tags:
                  - category
                summary: Details of a category.
                description: Details of a category.
            /category/list:
              get:
                tags:
                  - category
                summary: List of categories.
                description: List of categories.
            /category/listByLevel:
              get:
                tags:
                  - category
                summary: List of categories assigned to a category level.
                description: List of categories assigned to a category level.
            /category/listBySystem:
              get:
                tags:
                  - category
                summary: List of categories assigned to a category system.
                description: List of categories assigned to a category system.
            /category/dataset/list:
              get:
                tags:
                  - category
                summary: List of entitled category datasets.
                description: List of entitled category datasets.
            /category/instrument/list:
              get:
                tags:
                  - category
                summary: >-
                  List of instruments where a specific dataset has assigned a
                  given category.
                description: >-
                  List of instruments where a specific dataset has assigned a
                  given category.
            /category/level/get:
              get:
                tags:
                  - category
                summary: Details of a category level.
                description: Details of a category level.
            /category/path/get:
              get:
                tags:
                  - category
                summary: Path from the first level to the level of a specific category.
                description: Path from the first level to the level of a specific category.
            /category/system/get:
              get:
                tags:
                  - category
                summary: Details of an entitled category system.
                description: Details of an entitled category system.
            /category/system/list:
              get:
                tags:
                  - category
                summary: List of entitled category systems.
                description: List of entitled category systems.
            /category/system/type/list:
              get:
                tags:
                  - category
                summary: List of category system types.
                description: List of category system types.
            /instrument/get:
              get:
                tags:
                  - instrument
                description: Basic data for an instrument.
                summary: Basic data for an instrument.
            /instrument/getByNotation:
              get:
                tags:
                  - instrument
                description: Basic data for an instrument.
                summary: Basic data for an instrument.
            /instrument/backgroundText/list:
              get:
                tags:
                  - instrument
                summary: Background texts of an instrument.
                description: Background texts of an instrument.
            /instrument/backgroundText/type/list:
              post:
                tags:
                  - instrument
                summary: List of background text types for instruments.
                description: List of background text types for instruments.
            /instrument/benchmark/list:
              post:
                tags:
                  - instrument
                summary: List of benchmarks of a financial instrument.
                description: >-
                  Provides a list of benchmark notations for a selected
                  financial instrument, optionally restricted to specific
                  benchmark types.
            /instrument/category/list:
              post:
                tags:
                  - instrument
                summary: >-
                  List of categories assigned to a specific instrument the
                  application is entitled to see.
                description: >-
                  List of categories assigned to a specific instrument the
                  application is entitled to see. Optionally it is possible to
                  restrict the output to only list those for a specific category
                  dataset.
            /instrument/complianceProperty/list:
              post:
                tags:
                  - instrument
                summary: List of compliance properties for instruments.
                description: List of compliance properties for instruments.
            /instrument/complianceProperty/listByInstrument:
              get:
                tags:
                  - instrument
                summary: Compliance properties of an instrument.
                description: Compliance properties of an instrument.
            /instrument/composite/get:
              get:
                tags:
                  - instrument
                summary: Composite instrument and its components.
                description: Composite instrument and its components.
            /instrument/coupon/list:
              get:
                tags:
                  - instrument
                summary: List of coupons for an interest-bearing instrument.
                description: >-
                  List of coupons for an interest-bearing instrument; any other
                  instrument yields empty values. The endpoint provides details
                  regarding the coupon period, the respective interest rate, and
                  payable amount (the latter only for instruments with a fixed
                  nominal value). The list of coupons is generally not available
                  for a perpetual, i.e. without a predefined maturity date,
                  interst-bearing instrument. 


                  If there is no entitled provider supplying a full list of
                  coupons, the list will be synthesized from summary data
                  available from entitled suppliers (if any). Since the exact
                  product terms are not known, e.g. the handling of holidays and
                  weekends, the list may be imprecise.
            /instrument/coupon/dayCountConvention/type/list:
              get:
                tags:
                  - instrument
                summary: List of day count convention types.
                description: List of day count convention types.
            /instrument/coupon/interestRate/type/list:
              get:
                tags:
                  - instrument
                summary: List of interest rate types.
                description: List of interest rate types.
            /instrument/coupon/keyData/get:
              get:
                tags:
                  - instrument
                summary: >-
                  Interest rate details for selected periods of an
                  interest-bearing instrument.
                description: >-
                  Interest rate details for selected periods of an
                  interest-bearing instrument; any other instrument yields empty
                  values.
            /instrument/crossReference/getByISIN:
              get:
                tags:
                  - instrument
                description: >-
                  Translate a given ISIN to the respective most recent
                  instrument identifier, retrieved from the Cross Reference
                  Service.
                summary: Translate ISIN to instrument.
            /instrument/crossReference/getByWKN:
              get:
                tags:
                  - instrument
                description: >-
                  Translate a given WKN to the respective most recent instrument
                  identifier, retrieved from the Cross Reference Service.
                summary: Translate WKN to instrument.
            /instrument/crossReference/listByISIN:
              post:
                tags:
                  - instrument
                description: >-
                  Translate a given list of ISINs to the respective most recent
                  instrument identifiers, retrieved from the Cross Reference
                  Service.
                summary: Translate a list of ISINs to instruments.
            /instrument/crossReference/listByWKN:
              post:
                tags:
                  - instrument
                description: >-
                  Translate a given list of WKNs to the respective most recent
                  instrument identifiers, retrieved from the Cross Reference
                  Service.
                summary: Translate a list of WKNs to instruments.
            /instrument/crossReference/history/getByISIN:
              get:
                tags:
                  - instrument
                description: >-
                  Retrieve the complete translation history of a given ISIN to
                  the respective instrument association from the Cross Reference
                  Service. The results are sorted in descending order, starting
                  with the most recent.
                summary: ISIN to instrument translation history.
            /instrument/crossReference/history/getByWKN:
              get:
                tags:
                  - instrument
                description: >-
                  Retrieve the complete translation history of a given WKN to
                  the respective instrument association from the Cross Reference
                  Service. The results are sorted in descending order, starting
                  with the most recent.
                summary: WKN to instrument translation history.
            /instrument/exchangeRate/get:
              get:
                tags:
                  - instrument
                description: >-
                  Retrieve an exchange rate instrument identifier using the
                  identifier of the main currencies represented by that exchange
                  rate. 

                   An error is returned if one of the provided parameters is invalid or if no instrument is associated with the given combination of parameters.
                summary: Retrieve an exchange rate instrument identifier.
            /instrument/exchangeRate/getByISOCode:
              get:
                tags:
                  - instrument
                description: >-
                  Retrieve an exchange rate instrument identifier using the ISO
                  4217 code of the main currencies represented by that exchange
                  rate. 


                  An error is returned if one of the provided parameters is
                  invalid or if no instrument is associated with the given
                  combination of parameters.
                summary: Retrieve an exchange rate instrument identifier.
            /instrument/legalEntity/backgroundText/list:
              get:
                tags:
                  - instrument
                summary: >-
                  Role-specific background texts of legal entities related to an
                  instrument.
                description: >-
                  Role-specific background texts of legal entities related to an
                  instrument.
            /instrument/legalEntity/complianceProperty/list:
              get:
                tags:
                  - instrument
                summary: >-
                  Role-specific compliance properties of legal entities related
                  to an instrument.
                description: >-
                  Role-specic compliance properties of legal entities related to
                  an instrument.
            /instrument/mifid/get:
              get:
                tags:
                  - instrument
                description: >-
                  MiFID II data for a specified financial instrument. The
                  instruments governed by MiFID II are called "investment
                  products".
                summary: MiFID II data for a financial instrument.
            /instrument/notation/list:
              post:
                tags:
                  - instrument
                summary: List of active, entitled notations for a set of instruments.
                description: >-
                  List of active, entitled notations for a set of instruments.
                  By default the list of notations (per instrument) is sorted
                  descending by the trading volume, averaged over one month. All
                  identifiers used as parameters must be valid and entitled.
            /instrument/rating/grade/list:
              post:
                tags:
                  - instrument
                description: >-
                  List of rating grades for a list of instruments. The list can
                  be restricted to rating grades belonging to particular rating
                  systems.
                summary: List of rating grades for a list of instruments.
            /instrument/selectionList/list:
              get:
                tags:
                  - instrument
                description: Set of custom instrument-level selection lists.
                summary: Set of custom instrument-level selection lists.
            /instrument/selectionList/listByInstrument:
              get:
                tags:
                  - instrument
                description: >-
                  For each given instrument, returns the instrument-level
                  selection lists of which the instrument is a member.
                summary: >-
                  For each given instrument, returns the instrument-level
                  selection lists of which the instrument is a member.
            /instrument/selectionList/members/list:
              post:
                tags:
                  - instrument
                summary: >-
                  List of instruments belonging to an instrument-level selection
                  list.
                description: >-
                  List of instruments belonging to an instrument-level selection
                  list.
            /notation/get:
              get:
                tags:
                  - notation
                description: Basic data for a notation.
                summary: Basic data for a notation.
            /notation/list:
              get:
                tags:
                  - notation
                description: Basic data for a list of notations.
                summary: Basic data for a list of notations.
            /notation/category/list:
              post:
                tags:
                  - notation
                description: >-
                  List of categories assigned to a specific notation the
                  application is entitled to see. Optionally it is possible to
                  restrict the output to only list those for a specific category
                  dataset.
                summary: >-
                  List of categories assigned to a specific notation the
                  application is entitled to see.
            /notation/crossReference/getByFactSetMarketSymbol:
              get:
                tags:
                  - notation
                summary: Translate a FactSet market symbol to a notation.
                description: >-
                  Translate a FactSet market symbol to a notation. This symbol
                  is also known as TICKER_EXCHANGE.
            /notation/crossReference/listByInstrument:
              post:
                tags:
                  - notation
                summary: List of entitled notations.
                description: List of entitled notations.
            /notation/crossReference/listByISIN:
              post:
                tags:
                  - notation
                summary: List of entitled notations.
                description: List of entitled notations.
            /notation/crossReference/listBySymbol:
              post:
                tags:
                  - notation
                summary: List of entitled notations.
                description: >-
                  List of entitled notations. Symbols are not globally unique;
                  therefore, a given symbol interpreted in different markets
                  might refer to different instruments.
            /notation/crossReference/factSetIdentifier/get:
              get:
                tags:
                  - notation
                summary: Retrieve FactSet identifiers for a given notation.
                description: >-
                  <p>Retrieve FactSet identifiers for a given notation. Security
                  and listing-level identifiers are always included, regional
                  level identifiers are included, if available.
            /notation/crossReference/factSetIdentifier/listByFactSetIdentifier:
              post:
                tags:
                  - notation
                summary: Retrieve a list of notations for a given FactSet identifier.
                description: >-
                  <p>Retrieve a list of notations for a given FactSet
                  identifier, grouped by regional identifiers, if available.
                  Listings without a regional identifier are grouped at the end
                  of the response.</p><p>The notation corresponding to the
                  security's primary listing has the attributes
                  <big><tt>regional.isPrimary</tt></big> and
                  <big><tt>regional.listing.isPrimary</tt></big> both set to
                  true.The security's primary listing might not be among the
                  results depending on the entitlement.</p><p>See the group
                  description for more information about the security's primary
                  listing.</p>
            /notation/crossReference/factSetIdentifier/listByInstrument:
              post:
                tags:
                  - notation
                summary: Retrieve a list of FactSet identifiers for a given instrument.
                description: >-
                  <p>Retrieve a list of FactSet identifiers for a given
                  instrument, grouped by regional identifiers, if available.
                  Listings without a regional identifier are grouped at the end
                  of the response.</p><p>The notation corresponding to the
                  security's primary listing has the attributes
                  <big><tt>regional.isPrimary</tt></big> and
                  <big><tt>regional.listing.isPrimary</tt></big> both set to
                  true.The security's primary listing might not be among the
                  results depending on the entitlement.</p><p>The result
                  contains only notations that have at least one FactSet
                  identifier (see
                  <big><tt>listing.permanentIdentifier</tt></big>,
                  <big><tt>listing.tickerExchange</tt></big>).</p><p>See the
                  group description for more information about the security's
                  primary listing.</p>
            /notation/keyFigures/year/10/get:
              get:
                tags:
                  - notation
                summary: End-of-day (EOD) key figures for the time range of ten years.
                description: End-of-day (EOD) key figures for the time range of ten years.
            /notation/keyFigures/year/10/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of ten years,
                  for a list of notations.
                description: >-
                  End-of-day (EOD) key figures for the time range of ten years,
                  for a list of notations.
            /notation/keyFigures/month/1/get:
              get:
                tags:
                  - notation
                summary: End-of-day (EOD) key figures for the time range of one month.
                description: End-of-day (EOD) key figures for the time range of one month.
            /notation/keyFigures/month/1/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of one month,
                  for a list of notations.
                description: >-
                  End-of-day (EOD) key figures for the time range of one month,
                  for a list of notations.
            /notation/keyFigures/week/1/get:
              get:
                tags:
                  - notation
                summary: End-of-day (EOD) key figures for the time range of one week.
                description: End-of-day (EOD) key figures for the time range of one week.
            /notation/keyFigures/week/1/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of one week,
                  for a list of notations.
                description: >-
                  End-of-day (EOD) key figures for the time range of one week,
                  for a list of notations.
            /notation/keyFigures/year/1/get:
              get:
                tags:
                  - notation
                summary: End-of-day (EOD) key figures for the time range of one year.
                description: End-of-day (EOD) key figures for the time range of one year.
            /notation/keyFigures/year/1/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of one year,
                  for a list of notations.
                description: >-
                  End-of-day (EOD) key figures for the time range of one year,
                  for a list of notations.
            /notation/keyFigures/month/3/get:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of three
                  months.
                description: >-
                  End-of-day (EOD) key figures for the time range of three
                  months.
            /notation/keyFigures/month/3/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of three
                  months, for a list of notations.
                description: >-
                  End-of-day (EOD) key figures for the time range of three
                  months, for a list of notations.
            /notation/keyFigures/year/3/get:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of three
                  years.
                description: >-
                  End-of-day (EOD) key figures for the time range of three
                  years.
            /notation/keyFigures/year/3/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of three
                  years, for a list of notations.
                description: >-
                  End-of-day (EOD) key figures for the time range of three
                  years, for a list of notations.
            /notation/keyFigures/year/5/get:
              get:
                tags:
                  - notation
                summary: End-of-day (EOD) key figures for the time range of five years.
                description: End-of-day (EOD) key figures for the time range of five years.
            /notation/keyFigures/year/5/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of five years,
                  for a list of notations.
                description: >-
                  End-of-day (EOD) key figures for the time range of five years,
                  for a list of notations.
            /notation/keyFigures/month/6/get:
              get:
                tags:
                  - notation
                summary: End-of-day (EOD) key figures for the time range of six months.
                description: End-of-day (EOD) key figures for the time range of six months.
            /notation/keyFigures/month/6/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of six months,
                  for a list of notations.
                description: >-
                  End-of-day (EOD) key figures for the time range of six months,
                  for a list of notations.
            /notation/keyFigures/year/7/get:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of seven
                  years.
                description: >-
                  End-of-day (EOD) key figures for the time range of seven
                  years.
            /notation/keyFigures/year/7/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range of seven
                  years, for a list of notations.
                description: >-
                  End-of-day (EOD) key figures for the time range of seven
                  years, for a list of notations.
            /notation/keyFigures/yearToDate/get:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range year-to-date
                  (YTD)..
                description: >-
                  End-of-day (EOD) key figures for the time range year-to-date
                  (YTD). The time range YTD begins with the last trading day of
                  the previous calendar year for which EOD prices are available
                  and ends with the most recent trading day of the current
                  calendar year for which EOD prices are available..
            /notation/keyFigures/yearToDate/list:
              get:
                tags:
                  - notation
                summary: >-
                  End-of-day (EOD) key figures for the time range year-to-date
                  (YTD), for a list of notations..
                description: >-
                  End-of-day (EOD) key figures for the time range year-to-date
                  (YTD), for a list of notations. The time range YTD begins with
                  the last trading day of the previous calendar year for which
                  EOD prices are available and ends with the most recent
                  tradingday of the current calendar year for which EOD prices
                  are available..
            /notation/keyFigures/tradingDay/average/get:
              get:
                tags:
                  - notation
                description: >-
                  Average end-of-day (EOD) key figures for different trading
                  days periods. A trading day is a calendar day on that trading
                  of the notation was possible.
                summary: >-
                  Average end-of-day (EOD) key figures for different trading
                  days periods.
            /notation/market/list:
              post:
                tags:
                  - notation
                description: >-
                  List of markets with entitled notations. The list contains
                  only markets with at least one active and entitled notation. 

                  All identifiers used as parameters must be valid and entitled.
                summary: List of markets with entitled notations.
            /notation/selectionList/list:
              get:
                tags:
                  - notation
                description: Set of custom notation-level selection lists.
                summary: Set of custom notation-level selection lists.
            /notation/selectionList/listByNotation:
              get:
                tags:
                  - notation
                description: >-
                  For each given notation, returns the notation-level selection
                  lists of which the notation is a member.
                summary: >-
                  For each given notation, returns the notation-level selection
                  lists of which the notation is a member.
            /notation/selectionList/members/list:
              post:
                tags:
                  - notation
                summary: >-
                  List of notations belonging to a notation-level selection
                  list.
                description: >-
                  List of notations belonging to a notation-level selection
                  list.
            /notation/status/get:
              get:
                tags:
                  - notation
                description: >-
                  Intraday trading status of a notation.<br>The endpoint is
                  subscribable to provide push updates. See attribute
                  `_subscriptionMinimalInterval` for valid update rates.
                summary: Intraday trading status of a notation.
            /prices/get:
              get:
                tags:
                  - prices
                summary: >-
                  Overview of trading on the most recent trading day, including
                  the latest price, for a notation.
                description: >-
                  Overview of trading on the most recent trading day, including
                  the latest price, for a notation.


                  The endpoint is subscribable to provide push updates. See
                  attribute `_subscriptionMinimalInterval` for valid update
                  rates.
            /prices/list:
              get:
                tags:
                  - prices
                summary: >-
                  Overview of trading on the most recent trading day, including
                  the latest price, for a list of notations.
                description: >-
                  Overview of trading on the most recent trading day, including
                  the latest price, for a list of notations.
            /prices/bidAsk/get:
              get:
                tags:
                  - prices
                summary: >-
                  Most recent bid and ask prices (best bid / offer) for a
                  notation.
                description: >-
                  Most recent bid and ask prices (best bid / offer) for a
                  notation.


                  The endpoint is subscribable to provide push updates. See
                  attribute `_subscriptionMinimalInterval` for valid update
                  rates.
            /prices/bidAsk/list:
              get:
                tags:
                  - prices
                summary: >-
                  Most recent bid and ask prices (best bid / offer) for a list
                  of notations.
                description: >-
                  Most recent bid and ask prices (best bid / offer) for a list
                  of notations.
            /prices/orderbook/aggregated/get:
              get:
                tags:
                  - prices
                summary: Orderbook aggregated by price.
                description: Orderbook aggregated by price.
            /prices/orderbook/full/get:
              get:
                tags:
                  - prices
                summary: Full orderbook
                description: Full orderbook
            /prices/tradingSchedule/event/list:
              post:
                tags:
                  - prices
                summary: Sequence of market-related events.
                description: >-
                  Sequence of market-related events like the opening time or
                  closing time of a market of a specific
                  notation.<br><br>Pagination to a previous page is not
                  supported and `pagination.previous` is always `null`.
            /prices/tradingSchedule/event/type/list:
              get:
                tags:
                  - prices
                summary: Trading schedule event types.
                description: >-
                  Trading schedule event types define the events which may occur
                  during any period of trading. Types of trading schedule events
                  are for instance OPEN, CLOSE, END_OF_DAY.
            /instrument/search/basic:
              get:
                tags:
                  - instrument
                summary: Basic search for instruments.
                description: >-
                  Search for instruments whose ISIN, specified NSINs, or name
                  match the search value according to a tolerant full-text match
                  algorithm. Better matching results appear in the response
                  before less relevant matches.
            /notation/search/basic:
              get:
                tags:
                  - notation
                summary: Basic search for notations.
                description: >-
                  Search for a notation whose ISIN, specified NSINs, name, or
                  symbol match the search value according to a tolerant
                  full-text match algorithm. If more than one notation of an
                  instrument matches, only the notation with the highest
                  monetary trading volume, averaged over one month, is
                  considered. Better matching results appear in the response
                  before less relevant matches. If the parameter popularity is
                  set to true, the popularity of the notation is the primary
                  sort criterion. Popularity is affected mostly by the request
                  frequency of the notation.
            /notation/searchByText:
              post:
                tags:
                  - notation
                summary: Text-based search for notations.
                description: >-
                  Text-based search for notations in selected identifier and
                  name attributes according to a tolerant full-text match
                  algorithm. The results satisfy all selected filters; sorting
                  by various attributes is possible. If more than one notation
                  of an instrument matches, only the notation with the best
                  market priority (according to the parameter `market.priority`)
                  or, in the absence of market priorities, only the notation
                  with the highest trading volume, averaged over one month, is
                  considered.     
                   All identifiers used as parameters must be valid and entitled.
          tags:
            - name: basic
              description: basic endpoints
            - name: category
              description: category endpoints
            - name: instrument
              description: instrument endpoints
            - name: notation
              description: notation endpoints
            - name: prices
              description: prices endpoints
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/
          x-interface-version: 2
          x-documenter-version: 6.3.9
          x-api-version: nu
    overlays:
      - type: APIs.io Search
        url: overlays/real-time-quotes-openapi-search.yml
    aid: factset:factset-real-time-quotes-api
  - name: FactSet Open FactSet Marketplace API
    description: >-
      Access FactSet’s comprehensive catalog of Data Feeds, APIs and Technology
      Solutions available on the Open FactSet Marketplace.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/openfactset-marketplace-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#changelog
      - type: OpenAPI
        url: properties/open-marketplace-openapi-original.yml
        data:
          swagger: '2.0'
          info:
            title: Open:FactSet Marketplace API
            license:
              name: Proprietary
          host: api-sandbox.factset.com
          paths:
            /ofs/v2/attributes/{id}:
              get:
                summary: Retrieve a collection of Attribute records.
                tags:
                  - Attributes
            /ofs/v2/attributes:
              get:
                summary: Retrieve a collection of Attribute records.
                tags:
                  - Attributes
            /ofs/v2/attributes/search:
              post:
                summary: Retrieve a collection of Attribute records.
                tags:
                  - Attributes
            /ofs/v2/attributes/groups/{id}:
              get:
                summary: Retrieve a specific Attributes Group record.
                tags:
                  - Attributes Groups
            /ofs/v2/attributes/groups:
              get:
                summary: Retrieve a collection of Attributes Group records.
                tags:
                  - Attributes Groups
            /ofs/v2/attributes/groups/used:
              get:
                summary: Retrieve a collection of Attributes Group records in use.
                tags:
                  - Attributes Groups
            /ofs/v2/attributes/groups/search:
              post:
                summary: Retrieve a collection of Attributes Group records.
                tags:
                  - Attributes Groups
            /ofs/v2/media/download/{namespace}/{scope}/{guid}/{fileName}:
              get:
                summary: Retrieve a specific media file
                tags:
                  - Media
              head:
                summary: >-
                  Check the existence and retrieve the headers of a spefic media
                  file
                tags:
                  - Media
            /ofs/v2/partners/{id}:
              get:
                summary: Retrieve a specific Partner record.
                tags:
                  - Partners
            /ofs/v2/partners:
              get:
                summary: Retrieve a collection of Partner records.
                tags:
                  - Partners
            /ofs/v2/partners/search:
              post:
                summary: Retrieve a collection of Partner records.
                tags:
                  - Partners
            /ofs/v2/products/{id}:
              get:
                summary: Retrieve a specific Product record.
                tags:
                  - Products
            /ofs/v2/products/types:
              get:
                summary: >-
                  Retrieve a collection of the available Product Types along
                  with the number of published products per type.
                tags:
                  - Products
            /ofs/v2/products:
              get:
                summary: Retrieve a collection of Product records.
                tags:
                  - Products
            /ofs/v2/products/search:
              post:
                summary: Retrieve a collection of Product records.
                tags:
                  - Products
            /ofs/v2/resources/{id}:
              get:
                summary: Retrieve a specific Resource record.
                tags:
                  - Resources
            /ofs/v2/resources:
              get:
                summary: Retrieve a collection of Resource records.
                tags:
                  - Resources
            /ofs/v2/resources/search:
              post:
                summary: Retrieve a collection of Resource records.
                tags:
                  - Resources
            /ofs/v2/resources/sections/{id}:
              get:
                summary: Retrieve a specific Resources Section record.
                tags:
                  - Resources Sections
            /ofs/v2/resources/sections:
              get:
                summary: Retrieve a collection of Resources Section records.
                tags:
                  - Resources Sections
            /ofs/v2/resources/sections/search:
              post:
                summary: Retrieve a collection of Resources Section records.
                tags:
                  - Resources Sections
          definitions:
            Marking:
              properties:
                state:
                  example: published
                  type: string
              type: object
            Document:
              properties:
                name:
                  type: string
                description:
                  type: string
                fileName:
                  type: string
                url:
                  type: string
                isFile:
                  type: boolean
                isPublic:
                  type: boolean
                order:
                  type: integer
                section:
                  items:
                    properties:
                      id:
                        type: integer
                      name:
                        type: string
                    type: object
                  type: array
              type: object
            PostResourcesSectionSearchDto:
              properties:
                limit:
                  description: Limit the amount of records per page.
                  example: 10
                  type: integer
                  default: 10
                  maximum: 300
                page:
                  description: Select which page to show.
                  example: 1
                  type: integer
                  default: 1
                  minimum: 1
                sort:
                  description: Sort according to  specific field value.
                  example: name:asc
                  type: string
                  default: name:asc
                fields:
                  description: >-
                    Fetch only specific fields. The fields' names separated by a
                    comma.
                  example: name,order
                  type: string
                search:
                  description: Search for terms in certain fields.
                  example: name:Data
                  type: string
                filter:
                  description: Filter against specific field values.
                  example: order:1
                  type: string
              type: object
            GetResourcesSectionDto:
              description: A Json representation of a Document Category record.
              properties:
                id:
                  example: 4c77e650-372b-4ab4-9acd-bbd237d52b74
                  type: string
                name:
                  example: New Provider Resources
                  type: string
                order:
                  example: 3
                  type: integer
                created:
                  example: 1559578671
                  type: integer
                updated:
                  example: 1559578671
                  type: integer
                documents:
                  example:
                    id: 3d8410df-2b04-45fa-bc33-d2cc5418f293
                    name: Candidate Agreement--Exhibit A
                    fileName: Exhibit A.docx
                    description: >-
                      Template for Exhibit A to the new Candidate Agreement.
                      Fill out this document with a description of the
                      product(s) for the Open=>FactSet marketplace
                    url: >-
                      /media/download/resources/documents/c2e2394c-747e-422f-bc5d-b775b14833bd
                    order: 5
                    isFile: true
                    isPublic: true
                    categoryId: 4c77e650-372b-4ab4-9acd-bbd237d52b74
                    created: 1564487399
                    updated: 1568288463
                  items:
                    $ref: '#/definitions/GetResourceDto'
                  type: array
                meta:
                  example:
                    documentsTotal: 1
                    documentsPrivate: 0
                  items:
                    properties:
                      documentsTotal:
                        type: integer
                      documentsPrivate:
                        type: integer
                    type: object
                  type: array
              type: object
            PostResourceSearchDto:
              properties:
                limit:
                  description: Limit the amount of records per page.
                  example: 10
                  type: integer
                  default: 10
                  maximum: 300
                page:
                  description: Select which page to show.
                  example: 1
                  type: integer
                  default: 1
                  minimum: 1
                sort:
                  description: Sort according to  specific field value.
                  example: name:desc
                  type: string
                  default: name:asc
                fields:
                  description: >-
                    Fetch only specific fields. The fields' names separated by a
                    comma.
                  example: name,fileName,isPublic,url
                  type: string
                search:
                  description: Search for terms in certain fields.
                  example: description:Template,name:Template,fileName:Template
                  type: string
                filter:
                  description: Filter against specific field values.
                  example: isFile:true
                  type: string
              type: object
            GetResourceDto:
              description: A Json representation of a Document record.
              properties:
                id:
                  example: 3d8410df-2b04-45fa-bc33-d2cc5418f293
                  type: string
                name:
                  example: Candidate Agreement--Exhibit A
                  type: string
                fileName:
                  example: Exhibit A.docx
                  type: string
                description:
                  example: >-
                    Template for Exhibit A to the new Candidate Agreement. Fill
                    out this document with a description of the product(s) for
                    the Open:FactSet marketplace
                  type: string
                url:
                  example: >-
                    /media/download/resources/documents/c2e2394c-747e-422f-bc5d-b775b14833bd
                  type: string
                order:
                  example: 5
                  type: integer
                isFile:
                  example: true
                  type: boolean
                isPublic:
                  example: true
                  type: boolean
                categoryId:
                  example: 4c77e650-372b-4ab4-9acd-bbd237d52b74
                  type: string
                created:
                  example: 1564487399
                  type: integer
                updated:
                  example: 1568288463
                  type: integer
              type: object
            PostAttributesGroupSearchDto:
              properties:
                limit:
                  description: Limit the amount of records per page.
                  example: 10
                  type: integer
                  default: 10
                  maximum: 300
                page:
                  description: Select which page to show.
                  example: 1
                  type: integer
                  default: 1
                  minimum: 1
                sort:
                  description: Sort according to  specific field value.
                  example: name:asc
                  type: string
                  default: name:asc
                fields:
                  description: >-
                    Fetch only specific fields. The fields' names separated by a
                    comma.
                  example: name,prodType
                  type: string
                search:
                  description: Search for terms in certain fields.
                  example: name:Country,prodType:Data Feed
                  type: string
                filter:
                  description: Filter against specific field values.
                  example: name:Region/Country
                  type: string
              type: object
            GetAttributesGroupDto:
              description: A Json representation of an Attributes Group record.
              properties:
                id:
                  example: fd8f12e9-aa8b-4c2a-9e2e-a212f3ec29e1
                  type: string
                name:
                  example: Region/Country
                  type: string
                prodType:
                  example: Data Feed
                  type: string
                color:
                  example: tag-color-2
                  type: string
                type:
                  example: checkbox
                  type: string
                selection:
                  example: multi
                  type: string
                created:
                  example: 1531815425
                  type: integer
                updated:
                  example: 1531815425
                  type: integer
                attributes:
                  example:
                    - id: 904eb623-2b58-4dba-8e81-61e2ef889bb5
                      name: Europe
                      groupId: fd8f12e9-aa8b-4c2a-9e2e-a212f3ec29e1
                      prodType: Data Feed
                      created: 1531815425
                      updated: 1531815425
                      isUsed: true
                    - id: 8edfdf11-ce9a-45e2-831a-e6d7717736c9
                      name: Global
                      groupId: fd8f12e9-aa8b-4c2a-9e2e-a212f3ec29e1
                      prodType: Data Feed
                      created: 1531815424
                      updated: 1531815424
                      isUsed: true
                  items:
                    properties:
                      name:
                        example: Europe
                        type: string
                      groupId:
                        example: fd8f12e9-aa8b-4c2a-9e2e-a212f3ec29e1
                        type: string
                      prodType:
                        example: Data Feed
                        type: string
                      id:
                        example: 904eb623-2b58-4dba-8e81-61e2ef889bb5
                        type: string
                      created:
                        example: 1531815425
                        type: integer
                      updated:
                        example: 1531815425
                        type: integer
                      isUsed:
                        example: true
                        type: boolean
                    type: object
                  type: array
              type: object
            PostAttributeSearchDto:
              properties:
                limit:
                  description: Limit the amount of records per page.
                  example: 10
                  type: integer
                  default: 10
                  maximum: 300
                page:
                  description: Select which page to show.
                  example: 1
                  type: integer
                  default: 1
                  minimum: 1
                sort:
                  description: Sort according to  specific field value.
                  example: name:asc
                  type: string
                  default: name:asc
                fields:
                  description: >-
                    Fetch only specific fields. The fields' names separated by a
                    comma.
                  example: name,groupId
                  type: string
                search:
                  description: Search for terms in certain fields.
                  example: name:Global,name:Europe
                  type: string
                filter:
                  description: Filter against specific field values.
                  example: name:Europe:Global
                  type: string
              type: object
            GetAttributeDto:
              properties:
                id:
                  example: 904eb623-2b58-4dba-8e81-61e2ef889bb5
                  type: string
                name:
                  example: Europe
                  type: string
                groupId:
                  example: fd8f12e9-aa8b-4c2a-9e2e-a212f3ec29e1
                  type: string
                groupName:
                  example: Region/Country
                  type: string
                prodType:
                  example: Data Feed
                  type: string
                created:
                  example: 1531815425
                  type: integer
                updated:
                  example: 1531815425
                  type: integer
              type: object
            PostProductSearchDto:
              properties:
                limit:
                  description: Limit the amount of records per page.
                  example: 10
                  type: integer
                  default: 10
                  maximum: 300
                page:
                  description: Select which page to show.
                  example: 1
                  type: integer
                  default: 1
                  minimum: 1
                sort:
                  description: Sort according to  specific field value.
                  example: name:asc
                  type: string
                  default: name:asc
                fields:
                  description: >-
                    Fetch only specific fields. The fields' names separated by a
                    comma.
                  example: name,marking.state,slug,partner
                  type: string
                search:
                  description: Search for terms in certain fields.
                  example: name:FactSet,detail:FactSet
                  type: string
                filter:
                  description: Filter against specific field values.
                  example: type:Data Feed:API
                  type: string
              type: object
            GetProductDto:
              description: A Json representation of a Product record.
              properties:
                id:
                  example: 89bba0ab-b123-4766-8a7b-9a174a453571
                  type: string
                marking:
                  $ref: '#/definitions/Marking'
                name:
                  example: FactSet Corporate Governance
                  type: string
                detail:
                  example: >-
                    FactSet’s corporate activism database, SharkRepellent,
                    allows you to monitor and analyze corporate activism with
                    data items related to poison pills, significant activism
                    reported in SEC filings and news sources, and key takeover
                    defenses compiled from articles of incorporation, bylaws,
                    and other publicly available sources.  Data Frequency: 
                    Event;  Update Frequency:  Intraday. 
                  type: string
                dateAdded:
                  example: 1441029240
                  type: integer
                highlight:
                  example:
                    point1: >-
                      Access activism campaign details, including participants,
                      events, defenses, filing dates, and related entities
                    point2: >-
                      Leverage takeover defense and corporate governance data,
                      including bullet proof ratings, charter provisions and
                      amendment details, and appeal/repeal percentage
                      requirements
                    point3: >-
                      Obtain data for all U.S. in-force poison pills, Canadian
                      in-force and ratification pending poison pills, and any
                      other non-U.S. EDGAR filers that adopts a U.S. style
                      poison pill
                  properties:
                    point1:
                      type: string
                    point2:
                      type: string
                    point3:
                      type: string
                  type: object
                coverageTable:
                  example:
                    columns:
                      - field: field1
                        title: region
                        align: left
                        required: true
                      - field: field2
                        title: Count
                        align: left
                        required: true
                      - field: field3
                        title: Type
                        align: left
                        required: false
                      - field: field4
                        title: Start Date
                        align: left
                        required: false
                    rows:
                      - field1: Africa
                        field3: Entities
                        field2: '{40}'
                        field4: '2014'
                      - field1: Asia
                        field3: Entities
                        field2: '{350}'
                        field4: '2000'
                      - field1: Europe
                        field3: Entities
                        field2: '{640}'
                        field4: '1995'
                      - field1: Latin America
                        field3: Entities
                        field2: '{30}'
                        field4: '2006'
                      - field1: Middle East
                        field3: Entities
                        field2: '{70}'
                        field4: '1996'
                      - field1: North America
                        field3: Entities
                        field2: '{11740}'
                        field4: '1984'
                      - field1: Pacific
                        field3: Entities
                        field2: '{370}'
                        field4: '1998'
                  items:
                    properties:
                      columns:
                        items:
                          properties:
                            title:
                              type: string
                            field:
                              type: string
                            align:
                              type: string
                            required:
                              type: boolean
                          type: object
                        type: array
                      rows:
                        items:
                          type: object
                        type: array
                    type: object
                  type: array
                videoUrl:
                  example: https://vimeo.com/320509757
                  type: string
                previewLink:
                  example:
                    linkUrl: >-
                      https://insight.factset.com/resources/at-a-glance-factset-corp-datafeed
                    linkName: FactSet Corporate Governance DataFeed
                  properties:
                    linkUrl:
                      type: string
                    linkName:
                      type: string
                  type: object
                thirdPartyUrls:
                  example:
                    - link: >-
                        https://insight.factset.com/activists-knocking-on-doors-of-big-firms
                      name: Activists Knocking on Doors of Big Firms
                    - link: >-
                        https://advantage.factset.com/analyzing-trends-in-shareholder-activism-webcast
                      name: 'Webcast: 2016 Trends in Shareholder Activism'
                    - link: >-
                        https://insight.factset.com/in-2017-middle-east-ma-activity-dips-value-soars
                      name: In 2017 Middle East M&A Activity Dips, Value Soars
                  items:
                    properties:
                      link:
                        type: string
                      name:
                        type: string
                    type: object
                  type: array
                seoMeta:
                  example:
                    productTitle: FactSet Corporate Governance - Shark Repellent
                    productSummary: >-
                      With FactSet's corporate activism database, monitor and
                      analyze corporate activism campaign details, including
                      participants, events, defenses, and filings.
                  properties:
                    productTitle:
                      type: string
                    productSummary:
                      type: string
                    videoAltText:
                      type: string
                  type: object
                slug:
                  example: factset-corporate-governance
                  type: string
                productStatusAttr:
                  example: Available
                  type: string
                  enum:
                    - Coming Soon
                    - Recently Added
                    - Candidate
                    - In queue
                    - Recently Updated
                    - Available
                    - Available for Testing
                partner:
                  example:
                    name: FactSet
                    logoUrl: >-
                      /media/download/partners/logo/774c3a5c-cc77-4e4c-b4a8-224a35cb00ba
                    slug: factset
                    firmInfo: >-
                      FactSet creates data and technology solutions for
                      investment professionals around the world, providing
                      instant access to financial data and analytics that
                      investors use to make crucial decisions. We combine our
                      unique proprietary datasets, your in-house data, and
                      third-party unstructured data to help you see and seize
                      opportunity sooner.\n
                    videoUrl: https://vimeo.com/320509757
                    companyUrl: https://www.factset.com/
                    socialMedia:
                      linkedin: https://www.linkedin.com/company/factset
                      twitter: https://twitter.com/FactSet
                      facebook: https://www.facebook.com/FactSet/
                    seoMeta:
                      partnerTitle: FactSet
                      partnerSummary: >-
                        FactSet creates data and technology solutions for
                        investment professionals around the world.
                      videoAltText: ''
                    forumTags:
                      - id: factset
                        tag: factset
                    id: caa0ee0f-c0fe-427e-9596-491e6c527b3f
                  properties:
                    id:
                      type: string
                    name:
                      type: string
                    slug:
                      type: string
                    logoUrl:
                      type: string
                    firmInfo:
                      type: string
                    companyUrl:
                      type: string
                    socialMedia:
                      properties:
                        linkedin:
                          type: string
                        facebook:
                          type: string
                        twitter:
                          type: string
                      type: object
                  type: object
                relatedProducts:
                  example:
                    - name: FactSet Ownership
                      id: b7650ba1-519e-4af6-a5d1-8b6cb6ec744c
                      slug: factset-ownership
                    - name: FactSet Mergers
                      id: 8a579d81-ba0e-45c2-9cb9-144c9e7d895c
                      slug: factset-mergers
                    - name: FactSet People
                      id: 168e9bf8-108c-4912-beca-b658083c7c86
                      slug: factset-people
                  items:
                    properties:
                      name:
                        type: string
                      id:
                        type: string
                      slug:
                        type: string
                    type: object
                  type: array
                documents:
                  example:
                    - ref: ofsProductsDataDictionaryFile
                      fileName: >-
                        factset standard datafeed sharkrepellent v1
                        userguide.pdf
                      isFile: true
                      name: Data Dictionary
                      description: ''
                      isPublic: false
                      section:
                        name: Documentation
                        id: 2
                      type: dataDictionary
                      url: >-
                        /media/download/products/documents/4653f3d6-6de1-4e23-b6da-327301c4c860
                      order: 0
                    - fileName: Corporate Governance V1.zip
                      isFile: true
                      name: Starter Kit - Jupyter Notebooks and SQL Queries
                      description: Use case examples and sample code\t
                      isPublic: false
                      section:
                        name: Sample Data
                        id: 1
                      url: >-
                        /media/download/products/documents/5de6b025-d8a3-423b-a8c6-157730abe334
                      order: 1
                    - fileName: >-
                        OFM Sample FactSet Corporate Activism Announced
                        2019.xlsx
                      isFile: true
                      name: Corporate Activism Sample - 2019
                      description: ''
                      isPublic: false
                      section:
                        name: Sample Data
                        id: 1
                      url: >-
                        /media/download/products/documents/b7a73952-c6ed-45fe-bf0d-0ab4b7ceb1e9
                      order: 2
                    - fileName: OFM Sample FactSet Corporate Governance 2019.xlsx
                      isFile: true
                      name: Corporate Governance Sample  - 2019
                      description: ''
                      isPublic: false
                      section:
                        name: Sample Data
                        id: 1
                      url: >-
                        /media/download/products/documents/372ef839-591c-44c4-a668-838bc144cdb1
                      order: 3
                  items:
                    $ref: '#/definitions/Document'
                  type: array
                  default: 'null'
                type:
                  example:
                    - Data Feed
                  items:
                    type: string
                    enum:
                      - Data Feed
                      - API
                      - Solution
                  type: array
                attributesGroups:
                  example:
                    - attributes:
                        - color: tag-color-9
                          created: 1531815428
                          groupId: 5378b993-1057-4197-9a88-92de71d8f55e
                          name: 20+ yrs
                          id: df4b1f7c-58d3-463e-ad9f-55c24cba6f86
                          updated: 1531815428
                      id: 5378b993-1057-4197-9a88-92de71d8f55e
                    - attributes:
                        - color: tag-color-1
                          created: 1531815416
                          groupId: 3bb76ffb-a83c-4b40-ba6b-c4003702f4fe
                          name: Corporate Governance
                          id: ec224c5d-9b20-4af8-9e7c-725ee3cb4aa3
                          updated: 1531815416
                        - color: tag-color-1
                          created: 1531815419
                          groupId: 3bb76ffb-a83c-4b40-ba6b-c4003702f4fe
                          name: Events
                          id: ac310994-b350-48d2-abd4-a779af80f421
                          updated: 1531815419
                        - color: tag-color-1
                          created: 1531815415
                          groupId: 3bb76ffb-a83c-4b40-ba6b-c4003702f4fe
                          name: Corporate Activism
                          id: e2f036fa-c407-4db5-b6b1-0128c739698e
                          updated: 1531815415
                      id: 3bb76ffb-a83c-4b40-ba6b-c4003702f4fe
                  items:
                    properties:
                      id:
                        type: string
                      attributes:
                        items:
                          properties:
                            id:
                              type: string
                            groupId:
                              type: string
                            name:
                              type: string
                            color:
                              type: string
                            created:
                              type: integer
                            updated:
                              type: integer
                          type: object
                        type: array
                    type: object
                  type: array
                previewTags:
                  example:
                    - color: tag-color-1
                      created: 1531815415
                      groupId: 3bb76ffb-a83c-4b40-ba6b-c4003702f4fe
                      name: Corporate Activism
                      id: e2f036fa-c407-4db5-b6b1-0128c739698e
                      updated: 1531815415
                    - color: tag-color-1
                      created: 1531815416
                      groupId: 3bb76ffb-a83c-4b40-ba6b-c4003702f4fe
                      name: Corporate Governance
                      id: ec224c5d-9b20-4af8-9e7c-725ee3cb4aa3
                      updated: 1531815416
                    - color: tag-color-9
                      created: 1531815428
                      groupId: 5378b993-1057-4197-9a88-92de71d8f55e
                      name: 20+ yrs
                      id: df4b1f7c-58d3-463e-ad9f-55c24cba6f86
                      updated: 1531815428
                  items:
                    properties:
                      id:
                        type: string
                      groupId:
                        type: string
                      name:
                        type: string
                      color:
                        type: string
                      created:
                        type: integer
                      updated:
                        type: integer
                    type: object
                  type: array
                updateFrequency:
                  example: ''
                  type: string
                deliveryFrequency:
                  example: ''
                  type: string
                productLabelOverride:
                  example: ''
                  type: string
                created:
                  example: 1565883044
                  type: integer
                updated:
                  example: 1576275398
                  type: integer
                meta:
                  example:
                    documentsTotal: 4
                    documentsPrivate: 4
                  items:
                    properties:
                      documentsTotal:
                        type: integer
                      documentsPrivate:
                        type: integer
                    type: object
                  type: array
                versionSchema:
                  example:
                    major: 1
                    minor: 0
                    patch: 0
                    versionedId: 89bba0ab-b123-4766-8a7b-9a174a453571-1.0.0
                    originalId: 89bba0ab-b123-4766-8a7b-9a174a453571
                  properties:
                    major:
                      type: integer
                    minor:
                      type: integer
                    patch:
                      type: integer
                    versionedId:
                      type: string
                    originalId:
                      type: string
                  type: object
              type: object
            PostPartnerSearchDto:
              properties:
                limit:
                  description: Limit the amount of records per page.
                  example: 10
                  type: integer
                  default: 10
                  maximum: 300
                page:
                  description: Select which page to show.
                  example: 1
                  type: integer
                  default: 1
                  minimum: 1
                sort:
                  description: Sort according to  specific field value.
                  example: name:asc
                  type: string
                  default: name:asc
                fields:
                  description: >-
                    Fetch only specific fields. The fields' names separated by a
                    comma.
                  example: name,marking.state,slug
                  type: string
                search:
                  description: Search for terms in certain fields.
                  example: name:FactSet
                  type: string
                filter:
                  description: Filter against specific field values.
                  example: name:FactSet
                  type: string
              type: object
            GetPartnerDto:
              description: A Json representation of a Partner record.
              properties:
                id:
                  example: caa0ee0f-c0fe-427e-9596-491e6c527b3f
                  type: string
                logoUrl:
                  example: >-
                    /media/download/partners/logo/774c3a5c-cc77-4e4c-b4a8-224a35cb00ba
                  type: string
                forumTags:
                  example:
                    - id: factset
                      tag: factset
                  items:
                    properties:
                      tag:
                        type: string
                      id:
                        type: string
                    type: object
                  type: array
                videoUrl:
                  example: https://vimeo.com/320509757
                  type: string
                firmInfo:
                  example: >-
                    FactSet creates data and technology solutions for investment
                    professionals around the world, providing instant access to
                    financial data and analytics that investors use to make
                    crucial decisions. We combine our unique proprietary
                    datasets, your in-house data, and third-party unstructured
                    data to help you see and seize opportunity sooner.\n
                  type: string
                socialMedia:
                  example:
                    linkedin: https://www.linkedin.com/company/factset
                    twitter: https://twitter.com/FactSet
                    facebook: https://www.facebook.com/FactSet/
                  properties:
                    linkedin:
                      type: string
                    facebook:
                      type: string
                    twitter:
                      type: string
                  type: object
                name:
                  example: FactSet
                  type: string
                firmId:
                  example: 6992
                  type: integer
                companyUrl:
                  example: https://www.factset.com/
                  type: string
                seoMeta:
                  example:
                    partnerTitle: FactSet
                    partnerSummary: >-
                      FactSet creates data and technology solutions for
                      investment professionals around the world.
                    videoAltText: ''
                  properties:
                    productTitle:
                      type: string
                    productSummary:
                      type: string
                  type: object
                publishedDate:
                  example: 1568801114
                  type: integer
                slug:
                  example: factset
                  type: string
                marking:
                  $ref: '#/definitions/Marking'
                created:
                  example: 1518816584
                  type: integer
                updated:
                  example: 1568801114
                  type: integer
                versionSchema:
                  example:
                    major: 1
                    minor: 0
                    patch: 0
                    versionedId: caa0ee0f-c0fe-427e-9596-491e6c527b3f-1.0.0
                    originalId: caa0ee0f-c0fe-427e-9596-491e6c527b3f
                  properties:
                    major:
                      type: integer
                    minor:
                      type: integer
                    patch:
                      type: integer
                    versionedId:
                      type: string
                    originalId:
                      type: string
                  type: object
              type: object
          securityDefinitions:
            Basic:
              type: null
    overlays:
      - type: APIs.io Search
        url: overlays/open-marketplace-openapi-search.yml
    aid: factset:factset-open-factset-marketplace-api
  - name: FactSet Entity API
    description: ' FactSet’s Entity API provides access to FactSet’s complete security and entity level symbology, comprehensive entity reference data, and all of the necessary relationships and connections to create a foundation that tightly correlates disparate sources o'
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-entity-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-entity-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-entity-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-entity-api#changelog
      - type: OpenAPI
        url: properties/entity-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Entity API
          tags:
            - name: Entity Reference
              description: >-
                Retrieve Entity Reference information for a list of securities,
                such as Parent Equity and Business Descriptions.
            - name: Entity Securities
              description: >-
                Retrieve the related equity or fixed income securities for a
                given list of ids
            - name: Entity Structure
              description: >-
                Retrieve the Entities corporate structure, its subsidiaries and
                related entity ids.
            - name: Entity Reference Chinese
            - name: Historical Credit Parent
          paths:
            /factset-entity/v1/entity-references:
              get:
                summary: Returns an entity reference profiles for an individual entity
                description: >
                  Returns an Entity reference profile for the requested Entity
                  Id(s). Data points include - Ultimate Parent Id, Credit Parent
                  Id, Headquarters location details, Website URL, and Business
                  Description.
                tags:
                  - Entity Reference
              post:
                summary: Returns an entity reference data for a list of ids.
                description: >
                  Returns an entity reference object for the requested entity
                  ids. Data points include - ultimate parent id, headquarters
                  location details, credit parent id, website, and business
                  description.
                tags:
                  - Entity Reference
            /factset-entity/v1/entity-securities:
              get:
                summary: >-
                  Returns all Equity Exchange Listings and all debt instruments
                  issued for the requested entity.
                description: >
                  Returns all Equity Exchange Listings (ticker-exchange) and all
                  debt instruments (cusips) issued for the requested entity.
                tags:
                  - Entity Securities
              post:
                summary: >-
                  Returns all Equity Exchange Listings and all debt instruments
                  issued for the requested entity.
                description: >
                  Returns all Equity Exchange Listings (ticker-exchange) and all
                  debt instruments (cusips) issued for the requested entity.
                tags:
                  - Entity Securities
            /factset-entity/v1/entity-structures:
              get:
                summary: >-
                  Returns all active or inactive entities and respective levels
                  below the requested entity id.
                description: >
                  Returns all active or inactive entities below the requested
                  entity id.
                tags:
                  - Entity Structure
              post:
                summary: >-
                  Returns all active or inactive entities below the requested
                  entity id.
                description: >
                  Returns all active or inactive entities and respective levels
                  below the requested entity id.
                tags:
                  - Entity Structure
            /factset-entity/v1/ultimate-entity-structures:
              get:
                summary: >-
                  Returns the full ultimate parent entity hiearachy. Control
                  levels and active status of underlying entities.
                description: >
                  Returns full ultimate entity structure including ultimate
                  parent and all subordinates. Will accept entity from any level
                  of entity structure or active vs. inactive status of entity.
                tags:
                  - Entity Structure
              post:
                summary: >-
                  Returns all active or inactive entities and respective levels
                  below the requested entity id.
                description: >
                  Returns all active or inactive entities and respective levels
                  below the requested entity id.
                tags:
                  - Entity Structure
            /factset-entity/v1/entity-reference-chi:
              get:
                summary: >-
                  Returns entity reference data in Chinese for an individual
                  entity.
                description: >
                  Returns entity reference data in Chinese for the requested
                  Id(s). Data points include Business Description and Entity
                  Name in both simplified and traditional Chinese.
                tags:
                  - Entity Reference Chinese
              post:
                summary: >-
                  Returns entity reference data in Chinese for an individual
                  entity.
                description: >
                  Returns entity reference data in Chinese for the requested
                  Id(s). Data points include Business Description and Entity
                  Name in both simplified and traditional Chinese.
                tags:
                  - Entity Reference Chinese
            /factset-entity/v1/hist-credit-parent:
              get:
                summary: Returns historical credit parents for the requested id(s).
                description: >
                  Returns the credit parent for requested fixed income ids.
                  Point in time credit parent retrieval is

                  also available if an asOfDate is provided. The full credit
                  parent history of a security is returned if

                  no asOfDate is provided.


                  This endpoint uses a seven day calendar to account for changes
                  that occur on all seven days of the week.
                tags:
                  - Historical Credit Parent
              post:
                summary: Returns historical credit parents for the requested id(s).
                description: >
                  Returns the credit parent for requested fixed income ids.
                  Point in time credit parent retrieval is

                  also available if an asOfDate is provided. The full credit
                  parent history of a security is returned if

                  no asOfDate is provided.


                  This endpoint uses a seven day calendar to account for changes
                  that occur on all seven days of the week.
                tags:
                  - Historical Cr
    overlays:
      - type: APIs.io Search
        url: overlays/entity-openapi-search.yml
    aid: factset:factset-entity-api
  - name: Procure to Pay Invoice and Billing
    description: >-
      List and download available PDF invoices. Generate custom billing
      reports. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#changelog
      - type: OpenAPI
        url: properties/procure-to-pay-api-scim-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet SCIM API
          paths:
            /ServiceProviderConfig:
              get:
                tags:
                  - Server configuration
                summary: Get server configuration.
            /Schemas:
              get:
                tags:
                  - Schemas
                summary: Get a list of schemas.
            /Schemas/{id}:
              get:
                tags:
                  - Schemas
                summary: Get a schema.
            /Users:
              get:
                tags:
                  - Users
                summary: Get a list of users.
              post:
                tags:
                  - Users
                summary: Create a user.
            /Users/{id}:
              get:
                tags:
                  - Users
                summary: Get a user.
              put:
                tags:
                  - Users
                summary: Replace a user.
              patch:
                tags:
                  - Users
                summary: Patch a user (add, replace, or remove attributes of a user.)
              delete:
                tags:
                  - Users
                summary: Delete a user
            /Groups:
              get:
                tags:
                  - Groups
                summary: Get a list of groups.
            /Group/{id}:
              get:
                tags:
                  - Groups
                summary: Get a group.
              put:
                tags:
                  - Groups
                summary: Replace a group.
              patch:
                tags:
                  - Groups
                summary: Patch a group (add, replace, or remove attributes of a group.)
            /Locations:
              get:
                tags:
                  - Locations
                summary: Get a list of locations.
            /Locations/{id}:
              get:
                tags:
                  - Locations
                summary: Get a location.
              put:
                tags:
                  - Locations
                summary: Replace a location.
              patch:
                tags:
                  - Locations
                summary: >-
                  Patch a location (add, replace, or remove attributes of a
                  location.)
            /Products:
              get:
                tags:
                  - Products
                summary: Get a list of products.
            /Products/{id}:
              get:
                tags:
                  - Products
                summary: Get a product.
            /FileManagerAudit:
              get:
                tags:
                  - FileManagerAudit
                summary: Get File Manager a
    overlays:
      - type: APIs.io Search
        url: overlays/procure-to-pay-api-scim-openapi-search.yml
    aid: factset:procure-to-pay-invoice-and-billing
  - name: FactSet IRN Notes API
    description: >-
      Notes API allows users to extract, create, update and delete their notes
      in the Internal Research Notes application.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-notes-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#changelog
      - type: OpenAPI
        url: properties/irn-notes-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/irn-notes-openapi-search.yml
    aid: factset:factset-irn-notes-api
  - name: FactSet RBICS API
    description: >-
      A Comprehensive structured taxonomy to classify companies by what they
      primarily do. FactSet Revere Business Industry Classification System
      (RBICS) delivers a granular view for investors by classifying companies
      using a bottom-up approach…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-rbics-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-rbics-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-rbics-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-rbics-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-rbics-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-rbics-api#changelog
      - type: OpenAPI
        url: properties/rbics-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet RIBCS
            license:
              name: Apache 2.0
              url: http://www.apache.org/licenses/LICENSE-2.0.html
          tags:
            - name: Entity Focus
              description: >-
                Fetches the full 6 level classification taxonomy for a list of
                ids and a date.
            - name: Structure
              description: Fetches the full RBICS Taxonomy Structure, ids, and descriptions
          paths:
            /factset-rbics/v1/entity-focus:
              get:
                summary: Get RBICS classification for the Focus industry
                description: >
                  Gets RBICS classifications for the Focus industry for a short
                  list of companies. Full history is included if _date_
                  parameter is not specified.
                    
                    RBICS Focus offers a single-sector mapping of about 48,000 of the most liquid and publicly-traded companies based on their primary lines of business; it uses revenues as the key factor in determining a company’s primary line of business, by mapping a company to the lowest-level sector from which it derives 50% or more of its revenues.

                    The RBICS Extended Universe – Industry Group is not currently supported through the RBICS API. 
                tags:
                  - Entity Focus
              post:
                summary: Get RBICS classification for the Focus industry
                description: >
                  Gets RBICS classifications for the Focus industry for a long
                  list of companies. Full history is included if _date_
                  parameter is not specified.
                            
                    RBICS Focus offers a single-sector mapping of about 48,000 of the most liquid and publicly-traded companies based on their primary lines of business; it uses revenues as the key factor in determining a company’s primary line of business, by mapping a company to the lowest-level sector from which it derives 50% or more of its revenues.

                    The RBICS Extended Universe – Industry Group is not currently supported through the RBICS API. 
                tags:
                  - Entity Focus
            /factset-rbics/v1/structure:
              get:
                summary: >-
                  Get the full RBICS Taxonomy Structure Ids, Names, and
                  effective periods.
                description: >
                  Understand the full RBICS Taxonomy Structure through time to
                  help organize your analysis or facilitate the use of RBICS in
                  application development.


                  Designed to overcome disparate and non-standardized company
                  disclosures, the RBICS taxonomy is a normalized global
                  industry classification consisting of a fourteen-by-six
                  matrix. There are twelve economies with two specialty sectors,
                  each with six incremental detailed layers, resulting in over
                  1,600 sector groups.


                  The top-levels' market-defined approach groups companies based
                  on their behavioral similarities and stock price co-movement,
                  while the patented product-based approach used in the lower
                  levels enables the necessary precision to capture the
                  specialty sectors of global markets.
                tags:
                  - Structure
              post:
                summary: >-
                  Get the full RBICS Taxonomy Structure Ids, Names, and
                  effective periods.
                description: >
                  Get the full RBICS Taxonomy Structure Ids, Names, and
                  effective periods. POST method is optimal for requesting large
                  lists of `rbicsIds`.
                tags:
                  - S
    overlays:
      - type: APIs.io Search
        url: overlays/rbics-openapi-search.yml
    aid: factset:factset-rbics-api
  - name: FactSet GeoRev API
    description: >-
      FactSet Revere Geographic Revenue ("GeoRev") Exposure data provides a
      highly structured and normalized display of companies’ revenues by
      geography.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-georev-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-georev-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-georev-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-georev-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-georev-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-georev-api#changelog
      - type: OpenAPI
        url: properties/georev-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet GeoRev API
          tags:
            - name: Regions
              description: >-
                Get the Super-Regions, Regions, and Area Revenue breakdowns for
                a requested list of symbols.
            - name: Countries
              description: Get the Country Revenue breakdown for all countries
          paths:
            /factset-georev/v1/regions:
              get:
                tags:
                  - Regions
                summary: Gets the revenue details for the requested Regions
                description: >
                  Gets the Geographic Revenue, Percents, Confidence, and Ranks
                  for a requested list of ids and Regions, for a given
                  start-date and end-date. Regions represent a taxonomy of Super
                  Regions, Regions, and Areas, with Super Regions being the
                  largest collection. *Country specific revenue can be requested
                  in the /countries endpoint.*
              post:
                tags:
                  - Regions
                summary: >-
                  Gets the revenue details for the requested Regions. Use for
                  large lists of company ids.
                description: >
                  Gets the Geographic Revenue, Percents, Confidence, and Ranks
                  for a requested list of ids and Regions, for a given
                  start-date and end-date. Regions represent a taxonomy of Super
                  Regions, Regions, and Areas, with Super Regions being the
                  largest collection. *Country specific revenue can be requested
                  in the /countries endpoint.*
            /factset-georev/v1/countries:
              get:
                tags:
                  - Countries
                summary: Gets the revenue details for the requested Countries.
                description: >
                  Gets the **Countries'** Geographic Revenue, Percents,
                  Confidence, and Ranks for a requested list of ids and country
                  ISO codes, for a given start-date and end-date. 300 countries
                  are supported. Countries represent the fourth and bottom level
                  of the GeoRev taxonomy. Visit [OA
                  8754](https://my.apps.factset.com/oa/pages/8754) for a list of
                  ISO2 Country Codes. By default, the service will return all
                  Countries for the requested security.
              post:
                tags:
                  - Countries
                summary: >-
                  Gets the revenue details for the requested Countries. Use for
                  large lists of ids.
                description: >
                  Gets the **Countries'** Geographic Revenue, Percents,
                  Confidence, and Ranks for a requested list of ids and country
                  ISO codes, for a given start-date and end-date. Nearly 300
                  countries are supported. Countries represent the fourth and
                  bottom level of the GeoRev taxonomy. The full list of
                  countries and their related regional mappings can be found by
                  using the /country-mappings endpoint or visit [OA
                  8754](https://my.apps.factset.com/oa/pages/8754) for a list of
                  ISO2 Coun
    overlays:
      - type: APIs.io Search
        url: overlays/georev-openapi-original.yml
      - type: APIs.io Search
        url: overlays/georev-openapi-search.yml
    aid: factset:factset-georev-api
  - name: FactSet Direct Streaming of Transaction Messages API
    description: >-
      Connect transaction data from your OMS to be leveraged in FactSet's PMP
      and Portfolio Analytics applications
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#changelog
      - type: OpenAPI
        url: >-
          properties/direct-streaming-of-transaction-messages-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: DSOTM API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /transactions:
              post:
                tags:
                  - DSOTM
                summary: Push transactions data into FactSet.
                description: >-
                  This endpoint takes the transactions data and pushes them into
                  FactSet.
          externalDocs:
            description: API Documentation
            url: >-
              https://developer.factset.com/api-catalog/direct-streaming-transaction-me
    overlays:
      - type: APIs.io Search
        url: overlays/direct-streaming-of-transaction-messages-openapi-original.yml
      - type: APIs.io Search
        url: overlays/direct-streaming-of-transaction-messages-openapi-search.yml
    aid: factset:factset-direct-streaming-of-transaction-messages-api
  - name: Open FactSet Partners - Documents
    description: 'Access to all job listing files provided by the OFM Partners: LinkUp'
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/openfactset-partners-documents
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#changelog
      - type: OpenAPI
        url: properties/open-partners-documents-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Open:FactSet - Partners
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: >-
              https://developer.factset.com/api-catalog/openfactset-partners-documents
          paths:
            /linkup/job-listings:
              get:
                tags:
                  - LinkUp
                summary: >-
                  Returns the  daily files from Open:FactSet Partner - LinkUp.
                  The LinkUp API provides access to job listings dataset that is
                  sourced directly from employer webistes globally delivered
                  daily.
                description: >-
                  Returns the  daily files from Open:FactSet Partner - LinkUp.
                  The LinkUp API provides access to job listings dataset that is
                  sourced directly from employer webistes globally delivered
                  daily. **This API is no longer being sold for new clients.**
            /orbit/transcripts/daily:
              get:
                tags:
                  - Orbit
                summary: Returns the daily files from Open:FactSet Partner - Orbit.
                description: Returns the daily files from Open:FactSet Partner - Orbit.
            /orbit/transcripts/history:
              get:
                tags:
                  - Orbit
                summary: Returns the history files from Open:FactSet Partner - Orbit
                description: >-
                  Returns the historical files from February 28th, 2005 to
                  current date. 
            /ozmosi/clinical-trials/daily:
              get:
                tags:
                  - Ozmosi
                summary: >-
                  Returns the daily files of Clinical Trial Details from
                  Open:FactSet Partner - Ozmosi.
                description: >-
                  Returns the daily files of Clinical Trial Details from
                  Open:FactSet Partner - Ozmosi.
            /ozmosi/diseases/daily:
              get:
                tags:
                  - Ozmosi
                summary: >-
                  Returns the daily files of Diseases Details from Open:FactSet
                  Partner- Ozmosi.
                description: >-
                  Returns the daily files of Diseases Details from Open:FactSet
                  Partner- Ozmosi.
            /ozmosi/biomarkers/daily:
              get:
                tags:
                  - Ozmosi
                summary: >-
                  Returns the daily files of Biomarkers Details from
                  Open:FactSet Partner - Ozmosi.
                description: >-
                  Returns the daily files of Biomarkers Details from
                  Open:FactSet Partner - Ozmosi.
            /ozmosi/beam-endpoints/daily:
              get:
                tags:
                  - Ozmosi
                summary: >-
                  Returns the daily files of Beam Endpoints Details from
                  Open:FactSet Partner - Ozmosi.
                description: >-
                  Returns the daily files of Beam Endpoints Details from
                  Open:FactSet Partner - Ozmosi.
            /ozmosi/primaryoutcome/daily:
              get:
                tags:
                  - Ozmosi
                summary: >-
                  Returns the daily files of PrimaryOutcome Details from
                  Open:FactSet Partner - Ozmosi.
                description: >-
                  Returns the daily files of PrimaryOutcome Details from
                  Open:FactSet Partner - Ozmosi.
            /ozmosi/orangepurple/daily:
              get:
                tags:
                  - Ozmosi
                summary: >-
                  Returns the daily files of OrangePurple Details from
                  Open:FactSet Partner - Ozmosi.
                description: >-
                  Returns the daily files of OrangePurple Details from
                  Open:FaStset Partner - Ozmosi.
            /ozmosi/intervention/daily:
              get:
                tags:
                  - Ozmosi
                summary: >-
                  Returns the daily files of Intervention details from
                  Open:FactSet Partner - Ozmosi.
                description: >-
                  Returns the daily files of Intervention details from
                  Open:FactSet Partner - Ozmosi.
            /ozmosi/sponsors/daily:
              get:
                tags:
                  - Ozmosi
                summary: >-
                  Returns the daily files of Sponsors Details from Open:FactSet
                  Partner - Ozmosi.
                description: >-
                  Returns the daily files of Sponsors Details from Open:FactSet
                  Partner - Ozmosi.
            /ozmosi/collaborators/daily:
              get:
                tags:
                  - Ozmosi
                summary: >-
                  Returns the daily files of Collaborators Details from
                  Open:FactSet Partner - Ozmosi.
                description: >-
                  Returns the daily files of Collaborators Details from
                  Open:FactSet Partner - Ozmosi.
            /ozmosi/clinical-trials/history:
              get:
                tags:
                  - Ozmosi
                summary: Returns the history files from Open:FactSet Partner - Ozmosi
                description: >-
                  Returns the historical files from June 23rd, 2005 to current
                  date.
            /luxembourg/green-bonds/daily:
              get:
                tags:
                  - Luxembourg
                summary: Returns daily files from Open:FactSet Partner - Luxembourg
                description: >
                  Returns XML files and relevant metadata provided by Open:
                  FactSet Partner – Luxembourg.
            /scripts-asia/transcripts:
              get:
                tags:
                  - Scripts Asia
                summary: >-
                  Returns the daily files from Open:FactSet Partner - Scripts
                  Asia.
                description: >-
                  Returns XML files and relevant metadata provided by Open:
                  FactSet Partner – Scripts Asia.

                  - type=delta returns the files from March 1st 2023 to current
                  date.

                  - type=full will returns the files from start of date until
                  Feb 28th 2023.
          tags:
            - name: Luxembourg
              description: >
                <a
                href=https://go.factset.com/marketplace/catalog/product/lgx-datahub>Luxembourg</a>
                API provides access to Green Bonds data. 
            - name: Orbit
              description: >
                <a
                href=https://go.factset.com/marketplace/catalog/product/china-a-shares-transcripts>Orbit</a>
                API covers full universe of almost 4,800 companies since the
                early 2000's. Content covers 3 types, both in Chinese and
                English: 1) Earning Call Transcripts 2) Public disclosures on
                broker onsite research 3) Executive official responses on online
                platforms.
            - name: Ozmosi
              description: >
                <a
                href=https://open.factset.com/partners/ozmosi/en-us>Ozmosi</a>
                API provides access to Clinical Trials data.
            - name: Scripts Asia
              description: >-
                Scripts Asia API provides access to Asia Pacific regional
                collected transcripts.
            - name: LinkUp
              description: >
                <a
                href=https://go.factset.com/marketplace/catalog/product/linkup-raw>LinkUp</a>
                API provides access to job list
    overlays:
      - type: APIs.io Search
        url: overlays/open-partners-documents-openapi-search.yml
    aid: factset:open-factset-partners-documents
  - name: FactSet Estimates Report Builder API
    description: >-
      The FactSet Estimates Report Builder APIs return consensus estimate data
      with fiscal periods and line items structured in a presentation-ready
      format.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-estimates-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#changelog
      - type: OpenAPI
        url: properties/estimates-report-builder-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: FactSet Estimates Report Builder
            description: ''
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: Read more about STACH 2.0's row organized schema
            url: https://factset.github.io/stachschema/#/v2/RowOrganized
          tags:
            - name: All Estimates
            - name: Estimate Tables
          paths:
            /income-statement:
              get:
                tags:
                  - All Estimates
                summary: Income Statement
                description: >-
                  Returns historical and future period broker estimate consensus
                  in a statement format for Income Statement line items.
            /balance-sheet:
              get:
                tags:
                  - All Estimates
                summary: Balance Sheet
                description: >-
                  Returns historical and future period broker estimate consensus
                  in a statement format for Balance Sheet line items.
            /cash-flow:
              get:
                tags:
                  - All Estimates
                summary: Cash Flow
                description: >-
                  Returns historical and future period broker estimate consensus
                  in a statement format for Cash Flow line items.
            /per-share:
              get:
                tags:
                  - All Estimates
                summary: Per Share
                description: >-
                  Returns historical and future period broker estimate consensus
                  in a statement format for Per Share line items.
            /industry-metrics:
              get:
                tags:
                  - All Estimates
                summary: Industry Metrics
                description: >-
                  Returns historical and future period broker estimate consensus
                  in a statement format for industry-specific metrics.
            /product-segments:
              get:
                tags:
                  - All Estimates
                summary: Product Segments
                description: >-
                  Returns historical and future period broker estimate consensus
                  in a statement format for line items broken down by product
                  and business.
            /geographic-segments:
              get:
                tags:
                  - All Estimates
                summary: Geographic Segments
                description: >-
                  Returns historical and future period broker estimate consensus
                  in a statement format for line items broken down
                  geographically.
            /valuation:
              get:
                tags:
                  - All Estimates
                summary: Valuation
                description: >-
                  Returns valuation ratios in a statement format calculated from
                  historical and future period broker estimate consensus.
            /table:
              get:
                tags:
                  - Estimate Tables
                summary: Interim/Annual Estimate Table
                description: >-
                  Returns a timeseries grid of Interim and Annual data for a
                  sing
    overlays:
      - type: APIs.io Search
        url: overlays/estimates-report-builder-openapi-search.yml
    aid: factset:factset-estimates-report-builder-api
  - name: FactSet Data Monitor API
    description: >-
      Data Monitor is an SDK that provides access to the same, trusted,
      information available within FactSet's Workstation and Web offerings.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/data-monitor-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#changelog
    overlays: []
    aid: factset:factset-data-monitor-api
  - name: FactSet Fundamentals API
    description: >-
      Gain access to current, comprehensive, and comparative information on
      securities in worldwide developed and emerging markets. Composed of annual
      and interim/quarterly data and detailed historical financial statement
      content, FactSet Fundamentals…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-fundamentals-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#changelog
      - type: OpenAPI
        url: properties/fundamentals-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Fundamentals API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/factset-fundamentals-api
          paths:
            /fundamentals:
              get:
                tags:
                  - FactSet Fundamentals
                summary: Returns Company Fundamental Data.
                description: >
                  Retrieves FactSet Fundamental standardized data for specified
                  securities. Use the ```/metrics``` endpoint to retrieve a full
                  list of valid metrics or data items.



                  The ```/fundamentals``` endpoint currently supports Long
                  Running asynchronous requests up to **20 minutes** via batch
                  parameter. Id limits are increased to 2000 ids per request
                  when using batch capability. This 2000 id limit has been
                  derived based on single metric for one day. This feature is
                  available for all users.       
              post:
                tags:
                  - FactSet Fundamentals
                summary: Returns Company Fundamental Data.
                description: >
                  Retrieves FactSet Fundamental standardized data for specified
                  securities. Use the ```/metrics``` endpoint to retrieve a full
                  list of valid metrics or data items.



                  The ```/fundamentals``` endpoint currently supports Long
                  Running asynchronous requests up to **20 minutes** via batch
                  parameter. Id limits are increased to 30000 ids per request
                  when using batch capability. This 30000 id limit has been
                  derived based on single metric for one day. This feature is
                  available for all users. 
            /segments:
              get:
                tags:
                  - Segments
                summary: Returns Company Segments data.
                description: >
                  Retrieves Fundamentals Metrics data for individual companies.


                  The ```/segments``` endpoint currently supports Long Running
                  asynchronous requests up to **20 minutes** via batch
                  parameter. Id limits are increased to 2000 ids per request
                  when using batch capability.This 2000 id limit has been
                  derived based on single metric for one day. This feature is
                  available for all users.
              post:
                tags:
                  - Segments
                summary: Returns Company Segment Data.
                description: >
                  Retrieves Sales Metrics data for specified companies.


                  The ```/segments``` endpoint currently supports Long Running
                  asynchronous requests up to **20 minutes** via batch
                  parameter. Id limits are increased to 30000 ids per request
                  when using batch capability.This 30000 id limit has been
                  derived based on single metric for one day. This feature is
                  available for all users.
            /metrics:
              get:
                summary: Returns available FactSet Fundamental metrics and ratios.
                tags:
                  - Metrics
                description: >
                  Returns list of available FF_* metrics that can be used in the
                  `metrics` parameter of related endpoints. These are related to
                  FactSet Fundamentals standardized data. As Reported will be
                  available in future endpoints. Leave Category and Subcategory
                  blank to request all available items. The Endpoint Data model
                  is optimized for time-series data with periodicity. Some items
                  in this list are non-time series.

                  **For methodology definitions, reference the `OApageID` or
                  `OAurl` response items to launch the available methodology
                  page.**
            /batch-status:
              get:
                tags:
                  - Batch Processing
                summary: |
                  Returns the status for a Batch Request
                description: >-
                  Return the status for the underlying batch request that is
                  specified by the id.
            /batch-result:
              get:
                tags:
                  - Batch Processing
                summary: |
                  Returns the response for a Batch Request
                description: >
                  Returns the response data for the underlying batch request
                  that is specified by the id.


                  By default, this endpoint will return data as JSON. If you
                  wish to receive your data in CSV format, you can edit the
                  header to have the "accept" parameter as "text/csv" instead of
                  "applicat
    overlays:
      - type: APIs.io Search
        url: overlays/fundamentals-openapi-search.yml
    aid: factset:factset-fundamentals-api
  - name: FactSet ETF API
    description: ETF Reference Data
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-etf-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#changelog
      - type: OpenAPI
        url: properties/etf-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: FactSet Exchange Traded Funds API
            license:
              name: License Information
              url: http://www.factset.com/api/license.html
          paths:
            /factset-etf/v1/reference:
              get:
                summary: Return reference data for an ETF.
                description: |
                  Returns reference data items for Exchange Traded Funds.
                tags:
                  - Reference
              post:
                summary: Fetch Reference Data for a large list of ETF securities.
                description: >
                  Returns reference data items for a list of Exchange Traded
                  Funds.
                tags:
                  - Reference
            /factset-etf/v1/metrics:
              get:
                summary: Available ETF metrics
                tags:
                  - Data Items
                description: >
                  Returns a list of available metrics that can be used in the
                  `metrics` parameter of related endpoints. Leave _category_
                  blank to request all availa
    overlays:
      - type: APIs.io Search
        url: overlays/etf-openapi-search.yml
    aid: factset:factset-etf-api
  - name: FactSet Search Answers
    description: >-
      The FactSet Search Answers API provides answers to search queries,
      reflecting the data shown within FactSet Search Answers.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-search-answers
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#changelog
      - type: OpenAPI
        url: properties/search-answers-openapi-original.yml
        data:
          openapi: 3.0.2
          info:
            title: FactSet Search Answers API
          paths:
            /search/answers/v1/data:
              get:
                summary: Fetch FactSet answer in data format
                tags:
                  - answers
                description: >-
                  Returns an answer to the specified query (if a valid answer
                  exists). Returns the answer data only (as JSON), without any
                  markup information.
            /search/answers/v1/adaptive-card:
              get:
                summary: Fetch FactSet answer in Adaptive Card format
                tags:
                  - answers
                description: >-
                  Returns an answer to the specified query (if valid answer
                  exists) in the Adaptive Card format (https://adaptivecar
    overlays:
      - type: APIs.io Search
        url: overlays/search-answers-openapi-search.yml
    aid: factset:factset-search-answers
  - name: FactSet Capital Structure Report Builder API
    description: >-
      Curated data from multiple sources for comprehensive capital analysis
      reports
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/capital-structure-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#changelog
      - type: OpenAPI
        url: properties/capital-structure-report-builder-openapi-original.yml
        data:
          openapi: 3.0.3
          info:
            title: FactSet Capital Structure Report Builder API
            description: ''
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          externalDocs:
            description: Read more about STACH 2.0's row organized schema
            url: https://factset.github.io/stachschema/#/v2/RowOrganized
          tags:
            - name: Capital Structure
          paths:
            /dcs-detail:
              get:
                tags:
                  - Capital Structure
                summary: Debt Capital Structure (DCS)
            /source-of-capital:
              get:
                tags:
                  - Capital Structure
                summary: Source of Capital
            /dcs-summary:
              get:
                tags:
                  - Capital Structure
                summary: Debt Capital Structure (DC
    overlays:
      - type: APIs.io Search
        url: overlays/capital-structure-report-builder-openapi-search.yml
    aid: factset:factset-capital-structure-report-builder-api
  - name: FactSet Trading API
    description: This Trading API gives programmatic access to FactSet's trading platform
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-trading-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-trading-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-trading-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-trading-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-trading-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-trading-api#changelog
      - type: OpenAPI
        url: properties/trading-openapi-original.yml
        data:
          openapi: 3.0.1
          info:
            title: EMS API
            license:
              name: Apache License, Version 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0
          paths:
            /orders/create:
              post:
                tags:
                  - Orders
                summary: Send orders to EMS for execution.
                description: >-
                  This endpoint takes the list of orders and place them on EMS
                  for execution.
            /orders/replace:
              post:
                tags:
                  - Orders
                summary: Replace the orders on EMS system.
                description: >-
                  This endpoint takes the list of orders to be replaced on the
                  EMS system.
            /orders/cancel:
              post:
                tags:
                  - Orders
                summary: Cancel the orders on EMS system.
                description: >-
                  This endpoint takes the list of orders to be cancelled on the
                  EMS system.
            /child-orders/create:
              post:
                tags:
                  - ChildOrders
                summary: Create Child Orders
                description: This endpoint is used to create child orders.
            /child-orders/replace:
              post:
                tags:
                  - ChildOrders
                summary: Replace the Child Orders on EMS system.
                description: >-
                  This endpoint takes the child order to be replaced on the EMS
                  system.
            /child-orders/cancel:
              post:
                tags:
                  - ChildOrders
                summary: Cancel Child Orders
                description: This endpoint is to cancel a specific child order.
          tags:
            - name: Orders
              description: These endpoints relate to Order Entry.
            - name: ChildOrders
              description: These endpoints relate to Order Routing.
          externalDocs:
            description: API Documentation
            url: https://developer.factset.com/api-catalog/factset-tra
    overlays:
      - type: APIs.io Search
        url: overlays/trading-openapi-search.yml
    aid: factset:factset-trading-api
common:
  - type: Portal
    url: https://developer.factset.com/
  - type: Getting Started
    url: https://developer.factset.com/learn/getting-started
  - type: Authentication
    url: https://developer.factset.com/learn/authentication
  - type: Widget
    url: https://developer.factset.com/widgets
  - type: Recipes
    url: https://developer.factset.com/recipe-catalog
  - type: Error Logs
    url: https://developer.factset.com/learn/self-service-tools-error-logs
  - type: Login
    url: https://login.factset.com/
  - type: Contact
    url: https://developer.factset.com/contact
  - type: Privacy
    url: https://www.factset.com/privacy
  - type: Terms of Service
    url: https://www.factset.com/legal-statement
  - type: License
    url: https://developer.factset.com/licenses
  - type: LinkedIn
    url: https://www.linkedin.com/company/factset/
  - type: Facebook
    url: https://www.facebook.com/FactSet
  - type: Instagram
    url: https://www.instagram.com/lifeatfactset/
maintainers:
  - FN: API Evangelist
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
aid: factset
---