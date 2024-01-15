---
openapi: 3.0.0
info:
  title: Stripe Issuing API
  description: Needs description.
  contact:
    email: dev-platform@stripe.com
    name: Stripe Dev Platform Team
    url: 'https://stripe.com'
  termsOfService: 'https://stripe.com/us/terms/'
  version: '2023-10-16'
  x-stripeSpecFilename: spec3
security:
  - basicAuth: []
  - bearerAuth: []
servers:
  - url: 'https://api.stripe.com/'
paths:
  /v1/issuing/authorizations:
    get:
      description: >-
        <p>Returns a list of Issuing <code>Authorization</code> objects. The
        objects are sorted in descending order by creation date, with the most
        recently created object appearing first.</p>
      operationId: GetIssuingAuthorizations
      parameters:
        - description: Only return authorizations that belong to the given card.
          in: query
          name: card
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Only return authorizations that belong to the given cardholder.
          in: query
          name: cardholder
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return authorizations that were created during the given date
            interval.
          explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return authorizations with the given status. One of `pending`,
            `closed`, or `reversed`.
          in: query
          name: status
          required: false
          schema:
            enum:
              - closed
              - pending
              - reversed
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/issuing.authorization'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/issuing/authorizations
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: IssuingAuthorizationList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Authorizations
      tags:
        - Issuing
        - Authorizations
  '/v1/issuing/authorizations/{authorization}':
    get:
      description: <p>Retrieves an Issuing <code>Authorization</code> object.</p>
      operationId: GetIssuingAuthorizationsAuthorization
      parameters:
        - in: path
          name: authorization
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.authorization'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Authorization
      tags:
        - Issuing
        - Authorizations
    post:
      description: >-
        <p>Updates the specified Issuing <code>Authorization</code> object by
        setting the values of the parameters passed. Any parameters not provided
        will be left unchanged.</p>
      operationId: PostIssuingAuthorizationsAuthorization
      parameters:
        - in: path
          name: authorization
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.authorization'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Issuing Authorization
      tags:
        - Issuing
        - Authorizations
  '/v1/issuing/authorizations/{authorization}/approve':
    post:
      description: >-
        <p>[Deprecated] Approves a pending Issuing <code>Authorization</code>
        object. This request should be made within the timeout window of the <a
        href="/docs/issuing/controls/real-time-authorizations">real-time
        authorization</a> flow. 

        This method is deprecated. Instead, <a
        href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond
        directly to the webhook request to approve an authorization</a>.</p>
      operationId: PostIssuingAuthorizationsAuthorizationApprove
      parameters:
        - in: path
          name: authorization
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    If the authorization's
                    `pending_request.is_amount_controllable` property is `true`,
                    you may provide this value to control how much to hold for
                    the authorization. Must be positive (use
                    [`decline`](https://stripe.com/docs/api/issuing/authorizations/decline)
                    to decline an authorization request).
                  type: integer
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.authorization'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Approve Issuing Authorization
      tags:
        - Approve
        - Issuing
        - Authorizations
  '/v1/issuing/authorizations/{authorization}/decline':
    post:
      description: >-
        <p>[Deprecated] Declines a pending Issuing <code>Authorization</code>
        object. This request should be made within the timeout window of the <a
        href="/docs/issuing/controls/real-time-authorizations">real time
        authorization</a> flow.

        This method is deprecated. Instead, <a
        href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond
        directly to the webhook request to decline an authorization</a>.</p>
      operationId: PostIssuingAuthorizationsAuthorizationDecline
      parameters:
        - in: path
          name: authorization
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.authorization'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Decline Issuing Authorization
      tags:
        - Decline
        - Issuing
        - Authorizations
  /v1/issuing/cardholders:
    get:
      description: >-
        <p>Returns a list of Issuing <code>Cardholder</code> objects. The
        objects are sorted in descending order by creation date, with the most
        recently created object appearing first.</p>
      operationId: GetIssuingCardholders
      parameters:
        - description: >-
            Only return cardholders that were created during the given date
            interval.
          explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: Only return cardholders that have the given email address.
          in: query
          name: email
          required: false
          schema:
            type: string
          style: form
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: Only return cardholders that have the given phone number.
          in: query
          name: phone_number
          required: false
          schema:
            type: string
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return cardholders that have the given status. One of `active`,
            `inactive`, or `blocked`.
          in: query
          name: status
          required: false
          schema:
            enum:
              - active
              - blocked
              - inactive
            type: string
          style: form
        - description: >-
            Only return cardholders that have the given type. One of
            `individual` or `company`.
          in: query
          name: type
          required: false
          schema:
            enum:
              - company
              - individual
            type: string
            x-stripeBypassValidation: true
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/issuing.cardholder'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/issuing/cardholders
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: IssuingCardholderList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Cardholders
      tags:
        - Issuing
        - Cardholders
    post:
      description: >-
        <p>Creates a new Issuing <code>Cardholder</code> object that can be
        issued cards.</p>
      operationId: PostIssuingCardholders
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              billing:
                explode: true
                style: deepObject
              company:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              individual:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              preferred_locales:
                explode: true
                style: deepObject
              spending_controls:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                billing:
                  description: The cardholder's billing address.
                  properties:
                    address:
                      properties:
                        city:
                          maxLength: 5000
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 5000
                          type: string
                        line2:
                          maxLength: 5000
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      required:
                        - city
                        - country
                        - line1
                        - postal_code
                      title: required_address
                      type: object
                  required:
                    - address
                  title: billing_specs
                  type: object
                company:
                  description: Additional information about a `company` cardholder.
                  properties:
                    tax_id:
                      maxLength: 5000
                      type: string
                  title: company_param
                  type: object
                email:
                  description: The cardholder's email address.
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                individual:
                  description: Additional information about an `individual` cardholder.
                  properties:
                    card_issuing:
                      properties:
                        user_terms_acceptance:
                          properties:
                            date:
                              format: unix-time
                              type: integer
                            ip:
                              type: string
                            user_agent:
                              anyOf:
                                - maxLength: 5000
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                          title: terms_acceptance_param
                          type: object
                      title: card_issuing_param
                      type: object
                    dob:
                      properties:
                        day:
                          type: integer
                        month:
                          type: integer
                        year:
                          type: integer
                      required:
                        - day
                        - month
                        - year
                      title: date_of_birth_specs
                      type: object
                    first_name:
                      type: string
                    last_name:
                      type: string
                    verification:
                      properties:
                        document:
                          properties:
                            back:
                              maxLength: 5000
                              type: string
                            front:
                              maxLength: 5000
                              type: string
                          title: person_verification_document_param
                          type: object
                      title: person_verification_param
                      type: object
                  title: individual_param
                  type: object
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                name:
                  description: >-
                    The cardholder's name. This will be printed on cards issued
                    to them. The maximum length of this field is 24 characters.
                    This field cannot contain any special characters or numbers.
                  type: string
                phone_number:
                  description: >-
                    The cardholder's phone number. This will be transformed to
                    [E.164](https://en.wikipedia.org/wiki/E.164) if it is not
                    provided in that format already. This is required for all
                    cardholders who will be creating EU cards. See the [3D
                    Secure
                    documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied)
                    for more details.
                  type: string
                preferred_locales:
                  description: >-
                    The cardholder’s preferred locales (languages), ordered by
                    preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
                     This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
                  items:
                    enum:
                      - de
                      - en
                      - es
                      - fr
                      - it
                    type: string
                  type: array
                spending_controls:
                  description: >-
                    Rules that control spending across this cardholder's cards.
                    Refer to our
                    [documentation](https://stripe.com/docs/issuing/controls/spending-controls)
                    for more details.
                  properties:
                    allowed_categories:
                      items:
                        enum:
                          - ac_refrigeration_repair
                          - accounting_bookkeeping_services
                          - advertising_services
                          - agricultural_cooperative
                          - airlines_air_carriers
                          - airports_flying_fields
                          - ambulance_services
                          - amusement_parks_carnivals
                          - antique_reproductions
                          - antique_shops
                          - aquariums
                          - architectural_surveying_services
                          - art_dealers_and_galleries
                          - artists_supply_and_craft_shops
                          - auto_and_home_supply_stores
                          - auto_body_repair_shops
                          - auto_paint_shops
                          - auto_service_shops
                          - automated_cash_disburse
                          - automated_fuel_dispensers
                          - automobile_associations
                          - automotive_parts_and_accessories_stores
                          - automotive_tire_stores
                          - bail_and_bond_payments
                          - bakeries
                          - bands_orchestras
                          - barber_and_beauty_shops
                          - betting_casino_gambling
                          - bicycle_shops
                          - billiard_pool_establishments
                          - boat_dealers
                          - boat_rentals_and_leases
                          - book_stores
                          - books_periodicals_and_newspapers
                          - bowling_alleys
                          - bus_lines
                          - business_secretarial_schools
                          - buying_shopping_services
                          - cable_satellite_and_other_pay_television_and_radio
                          - camera_and_photographic_supply_stores
                          - candy_nut_and_confectionery_stores
                          - car_and_truck_dealers_new_used
                          - car_and_truck_dealers_used_only
                          - car_rental_agencies
                          - car_washes
                          - carpentry_services
                          - carpet_upholstery_cleaning
                          - caterers
                          - >-
                            charitable_and_social_service_organizations_fundraising
                          - chemicals_and_allied_products
                          - child_care_services
                          - childrens_and_infants_wear_stores
                          - chiropodists_podiatrists
                          - chiropractors
                          - cigar_stores_and_stands
                          - civic_social_fraternal_associations
                          - cleaning_and_maintenance
                          - clothing_rental
                          - colleges_universities
                          - commercial_equipment
                          - commercial_footwear
                          - commercial_photography_art_and_graphics
                          - commuter_transport_and_ferries
                          - computer_network_services
                          - computer_programming
                          - computer_repair
                          - computer_software_stores
                          - computers_peripherals_and_software
                          - concrete_work_services
                          - construction_materials
                          - consulting_public_relations
                          - correspondence_schools
                          - cosmetic_stores
                          - counseling_services
                          - country_clubs
                          - courier_services
                          - court_costs
                          - credit_reporting_agencies
                          - cruise_lines
                          - dairy_products_stores
                          - dance_hall_studios_schools
                          - dating_escort_services
                          - dentists_orthodontists
                          - department_stores
                          - detective_agencies
                          - digital_goods_applications
                          - digital_goods_games
                          - digital_goods_large_volume
                          - digital_goods_media
                          - direct_marketing_catalog_merchant
                          - >-
                            direct_marketing_combination_catalog_and_retail_merchant
                          - direct_marketing_inbound_telemarketing
                          - direct_marketing_insurance_services
                          - direct_marketing_other
                          - direct_marketing_outbound_telemarketing
                          - direct_marketing_subscription
                          - direct_marketing_travel
                          - discount_stores
                          - doctors
                          - door_to_door_sales
                          - drapery_window_covering_and_upholstery_stores
                          - drinking_places
                          - drug_stores_and_pharmacies
                          - drugs_drug_proprietaries_and_druggist_sundries
                          - dry_cleaners
                          - durable_goods
                          - duty_free_stores
                          - eating_places_restaurants
                          - educational_services
                          - electric_razor_stores
                          - electric_vehicle_charging
                          - electrical_parts_and_equipment
                          - electrical_services
                          - electronics_repair_shops
                          - electronics_stores
                          - elementary_secondary_schools
                          - emergency_services_gcas_visa_use_only
                          - employment_temp_agencies
                          - equipment_rental
                          - exterminating_services
                          - family_clothing_stores
                          - fast_food_restaurants
                          - financial_institutions
                          - fines_government_administrative_entities
                          - fireplace_fireplace_screens_and_accessories_stores
                          - floor_covering_stores
                          - florists
                          - florists_supplies_nursery_stock_and_flowers
                          - freezer_and_locker_meat_provisioners
                          - fuel_dealers_non_automotive
                          - funeral_services_crematories
                          - >-
                            furniture_home_furnishings_and_equipment_stores_except_appliances
                          - furniture_repair_refinishing
                          - furriers_and_fur_shops
                          - general_services
                          - gift_card_novelty_and_souvenir_shops
                          - glass_paint_and_wallpaper_stores
                          - glassware_crystal_stores
                          - golf_courses_public
                          - government_licensed_horse_dog_racing_us_region_only
                          - >-
                            government_licensed_online_casions_online_gambling_us_region_only
                          - government_owned_lotteries_non_us_region
                          - government_owned_lotteries_us_region_only
                          - government_services
                          - grocery_stores_supermarkets
                          - hardware_equipment_and_supplies
                          - hardware_stores
                          - health_and_beauty_spas
                          - hearing_aids_sales_and_supplies
                          - heating_plumbing_a_c
                          - hobby_toy_and_game_shops
                          - home_supply_warehouse_stores
                          - hospitals
                          - hotels_motels_and_resorts
                          - household_appliance_stores
                          - industrial_supplies
                          - information_retrieval_services
                          - insurance_default
                          - insurance_underwriting_premiums
                          - intra_company_purchases
                          - jewelry_stores_watches_clocks_and_silverware_stores
                          - landscaping_services
                          - laundries
                          - laundry_cleaning_services
                          - legal_services_attorneys
                          - luggage_and_leather_goods_stores
                          - lumber_building_materials_stores
                          - manual_cash_disburse
                          - marinas_service_and_supplies
                          - marketplaces
                          - masonry_stonework_and_plaster
                          - massage_parlors
                          - medical_and_dental_labs
                          - >-
                            medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                          - medical_services
                          - membership_organizations
                          - mens_and_boys_clothing_and_accessories_stores
                          - mens_womens_clothing_stores
                          - metal_service_centers
                          - miscellaneous
                          - miscellaneous_apparel_and_accessory_shops
                          - miscellaneous_auto_dealers
                          - miscellaneous_business_services
                          - miscellaneous_food_stores
                          - miscellaneous_general_merchandise
                          - miscellaneous_general_services
                          - miscellaneous_home_furnishing_specialty_stores
                          - miscellaneous_publishing_and_printing
                          - miscellaneous_recreation_services
                          - miscellaneous_repair_shops
                          - miscellaneous_specialty_retail
                          - mobile_home_dealers
                          - motion_picture_theaters
                          - motor_freight_carriers_and_trucking
                          - motor_homes_dealers
                          - motor_vehicle_supplies_and_new_parts
                          - motorcycle_shops_and_dealers
                          - motorcycle_shops_dealers
                          - >-
                            music_stores_musical_instruments_pianos_and_sheet_music
                          - news_dealers_and_newsstands
                          - non_fi_money_orders
                          - non_fi_stored_value_card_purchase_load
                          - nondurable_goods
                          - nurseries_lawn_and_garden_supply_stores
                          - nursing_personal_care
                          - office_and_commercial_furniture
                          - opticians_eyeglasses
                          - optometrists_ophthalmologist
                          - orthopedic_goods_prosthetic_devices
                          - osteopaths
                          - package_stores_beer_wine_and_liquor
                          - paints_varnishes_and_supplies
                          - parking_lots_garages
                          - passenger_railways
                          - pawn_shops
                          - pet_shops_pet_food_and_supplies
                          - petroleum_and_petroleum_products
                          - photo_developing
                          - >-
                            photographic_photocopy_microfilm_equipment_and_supplies
                          - photographic_studios
                          - picture_video_production
                          - piece_goods_notions_and_other_dry_goods
                          - plumbing_heating_equipment_and_supplies
                          - political_organizations
                          - postal_services_government_only
                          - precious_stones_and_metals_watches_and_jewelry
                          - professional_services
                          - public_warehousing_and_storage
                          - quick_copy_repro_and_blueprint
                          - railroads
                          - real_estate_agents_and_managers_rentals
                          - record_stores
                          - recreational_vehicle_rentals
                          - religious_goods_stores
                          - religious_organizations
                          - roofing_siding_sheet_metal
                          - secretarial_support_services
                          - security_brokers_dealers
                          - service_stations
                          - sewing_needlework_fabric_and_piece_goods_stores
                          - shoe_repair_hat_cleaning
                          - shoe_stores
                          - small_appliance_repair
                          - snowmobile_dealers
                          - special_trade_services
                          - specialty_cleaning
                          - sporting_goods_stores
                          - sporting_recreation_camps
                          - sports_and_riding_apparel_stores
                          - sports_clubs_fields
                          - stamp_and_coin_stores
                          - >-
                            stationary_office_supplies_printing_and_writing_paper
                          - stationery_stores_office_and_school_supply_stores
                          - swimming_pools_sales
                          - t_ui_travel_germany
                          - tailors_alterations
                          - tax_payments_government_agencies
                          - tax_preparation_services
                          - taxicabs_limousines
                          - telecommunication_equipment_and_telephone_sales
                          - telecommunication_services
                          - telegraph_services
                          - tent_and_awning_shops
                          - testing_laboratories
                          - theatrical_ticket_agencies
                          - timeshares
                          - tire_retreading_and_repair
                          - tolls_bridge_fees
                          - tourist_attractions_and_exhibits
                          - towing_services
                          - trailer_parks_campgrounds
                          - transportation_services
                          - travel_agencies_tour_operators
                          - truck_stop_iteration
                          - truck_utility_trailer_rentals
                          - typesetting_plate_making_and_related_services
                          - typewriter_stores
                          - u_s_federal_government_agencies_or_departments
                          - uniforms_commercial_clothing
                          - used_merchandise_and_secondhand_stores
                          - utilities
                          - variety_stores
                          - veterinary_services
                          - video_amusement_game_supplies
                          - video_game_arcades
                          - video_tape_rental_stores
                          - vocational_trade_schools
                          - watch_jewelry_repair
                          - welding_repair
                          - wholesale_clubs
                          - wig_and_toupee_stores
                          - wires_money_orders
                          - womens_accessory_and_specialty_shops
                          - womens_ready_to_wear_stores
                          - wrecking_and_salvage_yards
                        maxLength: 5000
                        type: string
                      type: array
                    blocked_categories:
                      items:
                        enum:
                          - ac_refrigeration_repair
                          - accounting_bookkeeping_services
                          - advertising_services
                          - agricultural_cooperative
                          - airlines_air_carriers
                          - airports_flying_fields
                          - ambulance_services
                          - amusement_parks_carnivals
                          - antique_reproductions
                          - antique_shops
                          - aquariums
                          - architectural_surveying_services
                          - art_dealers_and_galleries
                          - artists_supply_and_craft_shops
                          - auto_and_home_supply_stores
                          - auto_body_repair_shops
                          - auto_paint_shops
                          - auto_service_shops
                          - automated_cash_disburse
                          - automated_fuel_dispensers
                          - automobile_associations
                          - automotive_parts_and_accessories_stores
                          - automotive_tire_stores
                          - bail_and_bond_payments
                          - bakeries
                          - bands_orchestras
                          - barber_and_beauty_shops
                          - betting_casino_gambling
                          - bicycle_shops
                          - billiard_pool_establishments
                          - boat_dealers
                          - boat_rentals_and_leases
                          - book_stores
                          - books_periodicals_and_newspapers
                          - bowling_alleys
                          - bus_lines
                          - business_secretarial_schools
                          - buying_shopping_services
                          - cable_satellite_and_other_pay_television_and_radio
                          - camera_and_photographic_supply_stores
                          - candy_nut_and_confectionery_stores
                          - car_and_truck_dealers_new_used
                          - car_and_truck_dealers_used_only
                          - car_rental_agencies
                          - car_washes
                          - carpentry_services
                          - carpet_upholstery_cleaning
                          - caterers
                          - >-
                            charitable_and_social_service_organizations_fundraising
                          - chemicals_and_allied_products
                          - child_care_services
                          - childrens_and_infants_wear_stores
                          - chiropodists_podiatrists
                          - chiropractors
                          - cigar_stores_and_stands
                          - civic_social_fraternal_associations
                          - cleaning_and_maintenance
                          - clothing_rental
                          - colleges_universities
                          - commercial_equipment
                          - commercial_footwear
                          - commercial_photography_art_and_graphics
                          - commuter_transport_and_ferries
                          - computer_network_services
                          - computer_programming
                          - computer_repair
                          - computer_software_stores
                          - computers_peripherals_and_software
                          - concrete_work_services
                          - construction_materials
                          - consulting_public_relations
                          - correspondence_schools
                          - cosmetic_stores
                          - counseling_services
                          - country_clubs
                          - courier_services
                          - court_costs
                          - credit_reporting_agencies
                          - cruise_lines
                          - dairy_products_stores
                          - dance_hall_studios_schools
                          - dating_escort_services
                          - dentists_orthodontists
                          - department_stores
                          - detective_agencies
                          - digital_goods_applications
                          - digital_goods_games
                          - digital_goods_large_volume
                          - digital_goods_media
                          - direct_marketing_catalog_merchant
                          - >-
                            direct_marketing_combination_catalog_and_retail_merchant
                          - direct_marketing_inbound_telemarketing
                          - direct_marketing_insurance_services
                          - direct_marketing_other
                          - direct_marketing_outbound_telemarketing
                          - direct_marketing_subscription
                          - direct_marketing_travel
                          - discount_stores
                          - doctors
                          - door_to_door_sales
                          - drapery_window_covering_and_upholstery_stores
                          - drinking_places
                          - drug_stores_and_pharmacies
                          - drugs_drug_proprietaries_and_druggist_sundries
                          - dry_cleaners
                          - durable_goods
                          - duty_free_stores
                          - eating_places_restaurants
                          - educational_services
                          - electric_razor_stores
                          - electric_vehicle_charging
                          - electrical_parts_and_equipment
                          - electrical_services
                          - electronics_repair_shops
                          - electronics_stores
                          - elementary_secondary_schools
                          - emergency_services_gcas_visa_use_only
                          - employment_temp_agencies
                          - equipment_rental
                          - exterminating_services
                          - family_clothing_stores
                          - fast_food_restaurants
                          - financial_institutions
                          - fines_government_administrative_entities
                          - fireplace_fireplace_screens_and_accessories_stores
                          - floor_covering_stores
                          - florists
                          - florists_supplies_nursery_stock_and_flowers
                          - freezer_and_locker_meat_provisioners
                          - fuel_dealers_non_automotive
                          - funeral_services_crematories
                          - >-
                            furniture_home_furnishings_and_equipment_stores_except_appliances
                          - furniture_repair_refinishing
                          - furriers_and_fur_shops
                          - general_services
                          - gift_card_novelty_and_souvenir_shops
                          - glass_paint_and_wallpaper_stores
                          - glassware_crystal_stores
                          - golf_courses_public
                          - government_licensed_horse_dog_racing_us_region_only
                          - >-
                            government_licensed_online_casions_online_gambling_us_region_only
                          - government_owned_lotteries_non_us_region
                          - government_owned_lotteries_us_region_only
                          - government_services
                          - grocery_stores_supermarkets
                          - hardware_equipment_and_supplies
                          - hardware_stores
                          - health_and_beauty_spas
                          - hearing_aids_sales_and_supplies
                          - heating_plumbing_a_c
                          - hobby_toy_and_game_shops
                          - home_supply_warehouse_stores
                          - hospitals
                          - hotels_motels_and_resorts
                          - household_appliance_stores
                          - industrial_supplies
                          - information_retrieval_services
                          - insurance_default
                          - insurance_underwriting_premiums
                          - intra_company_purchases
                          - jewelry_stores_watches_clocks_and_silverware_stores
                          - landscaping_services
                          - laundries
                          - laundry_cleaning_services
                          - legal_services_attorneys
                          - luggage_and_leather_goods_stores
                          - lumber_building_materials_stores
                          - manual_cash_disburse
                          - marinas_service_and_supplies
                          - marketplaces
                          - masonry_stonework_and_plaster
                          - massage_parlors
                          - medical_and_dental_labs
                          - >-
                            medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                          - medical_services
                          - membership_organizations
                          - mens_and_boys_clothing_and_accessories_stores
                          - mens_womens_clothing_stores
                          - metal_service_centers
                          - miscellaneous
                          - miscellaneous_apparel_and_accessory_shops
                          - miscellaneous_auto_dealers
                          - miscellaneous_business_services
                          - miscellaneous_food_stores
                          - miscellaneous_general_merchandise
                          - miscellaneous_general_services
                          - miscellaneous_home_furnishing_specialty_stores
                          - miscellaneous_publishing_and_printing
                          - miscellaneous_recreation_services
                          - miscellaneous_repair_shops
                          - miscellaneous_specialty_retail
                          - mobile_home_dealers
                          - motion_picture_theaters
                          - motor_freight_carriers_and_trucking
                          - motor_homes_dealers
                          - motor_vehicle_supplies_and_new_parts
                          - motorcycle_shops_and_dealers
                          - motorcycle_shops_dealers
                          - >-
                            music_stores_musical_instruments_pianos_and_sheet_music
                          - news_dealers_and_newsstands
                          - non_fi_money_orders
                          - non_fi_stored_value_card_purchase_load
                          - nondurable_goods
                          - nurseries_lawn_and_garden_supply_stores
                          - nursing_personal_care
                          - office_and_commercial_furniture
                          - opticians_eyeglasses
                          - optometrists_ophthalmologist
                          - orthopedic_goods_prosthetic_devices
                          - osteopaths
                          - package_stores_beer_wine_and_liquor
                          - paints_varnishes_and_supplies
                          - parking_lots_garages
                          - passenger_railways
                          - pawn_shops
                          - pet_shops_pet_food_and_supplies
                          - petroleum_and_petroleum_products
                          - photo_developing
                          - >-
                            photographic_photocopy_microfilm_equipment_and_supplies
                          - photographic_studios
                          - picture_video_production
                          - piece_goods_notions_and_other_dry_goods
                          - plumbing_heating_equipment_and_supplies
                          - political_organizations
                          - postal_services_government_only
                          - precious_stones_and_metals_watches_and_jewelry
                          - professional_services
                          - public_warehousing_and_storage
                          - quick_copy_repro_and_blueprint
                          - railroads
                          - real_estate_agents_and_managers_rentals
                          - record_stores
                          - recreational_vehicle_rentals
                          - religious_goods_stores
                          - religious_organizations
                          - roofing_siding_sheet_metal
                          - secretarial_support_services
                          - security_brokers_dealers
                          - service_stations
                          - sewing_needlework_fabric_and_piece_goods_stores
                          - shoe_repair_hat_cleaning
                          - shoe_stores
                          - small_appliance_repair
                          - snowmobile_dealers
                          - special_trade_services
                          - specialty_cleaning
                          - sporting_goods_stores
                          - sporting_recreation_camps
                          - sports_and_riding_apparel_stores
                          - sports_clubs_fields
                          - stamp_and_coin_stores
                          - >-
                            stationary_office_supplies_printing_and_writing_paper
                          - stationery_stores_office_and_school_supply_stores
                          - swimming_pools_sales
                          - t_ui_travel_germany
                          - tailors_alterations
                          - tax_payments_government_agencies
                          - tax_preparation_services
                          - taxicabs_limousines
                          - telecommunication_equipment_and_telephone_sales
                          - telecommunication_services
                          - telegraph_services
                          - tent_and_awning_shops
                          - testing_laboratories
                          - theatrical_ticket_agencies
                          - timeshares
                          - tire_retreading_and_repair
                          - tolls_bridge_fees
                          - tourist_attractions_and_exhibits
                          - towing_services
                          - trailer_parks_campgrounds
                          - transportation_services
                          - travel_agencies_tour_operators
                          - truck_stop_iteration
                          - truck_utility_trailer_rentals
                          - typesetting_plate_making_and_related_services
                          - typewriter_stores
                          - u_s_federal_government_agencies_or_departments
                          - uniforms_commercial_clothing
                          - used_merchandise_and_secondhand_stores
                          - utilities
                          - variety_stores
                          - veterinary_services
                          - video_amusement_game_supplies
                          - video_game_arcades
                          - video_tape_rental_stores
                          - vocational_trade_schools
                          - watch_jewelry_repair
                          - welding_repair
                          - wholesale_clubs
                          - wig_and_toupee_stores
                          - wires_money_orders
                          - womens_accessory_and_specialty_shops
                          - womens_ready_to_wear_stores
                          - wrecking_and_salvage_yards
                        maxLength: 5000
                        type: string
                      type: array
                    spending_limits:
                      items:
                        properties:
                          amount:
                            type: integer
                          categories:
                            items:
                              enum:
                                - ac_refrigeration_repair
                                - accounting_bookkeeping_services
                                - advertising_services
                                - agricultural_cooperative
                                - airlines_air_carriers
                                - airports_flying_fields
                                - ambulance_services
                                - amusement_parks_carnivals
                                - antique_reproductions
                                - antique_shops
                                - aquariums
                                - architectural_surveying_services
                                - art_dealers_and_galleries
                                - artists_supply_and_craft_shops
                                - auto_and_home_supply_stores
                                - auto_body_repair_shops
                                - auto_paint_shops
                                - auto_service_shops
                                - automated_cash_disburse
                                - automated_fuel_dispensers
                                - automobile_associations
                                - automotive_parts_and_accessories_stores
                                - automotive_tire_stores
                                - bail_and_bond_payments
                                - bakeries
                                - bands_orchestras
                                - barber_and_beauty_shops
                                - betting_casino_gambling
                                - bicycle_shops
                                - billiard_pool_establishments
                                - boat_dealers
                                - boat_rentals_and_leases
                                - book_stores
                                - books_periodicals_and_newspapers
                                - bowling_alleys
                                - bus_lines
                                - business_secretarial_schools
                                - buying_shopping_services
                                - >-
                                  cable_satellite_and_other_pay_television_and_radio
                                - camera_and_photographic_supply_stores
                                - candy_nut_and_confectionery_stores
                                - car_and_truck_dealers_new_used
                                - car_and_truck_dealers_used_only
                                - car_rental_agencies
                                - car_washes
                                - carpentry_services
                                - carpet_upholstery_cleaning
                                - caterers
                                - >-
                                  charitable_and_social_service_organizations_fundraising
                                - chemicals_and_allied_products
                                - child_care_services
                                - childrens_and_infants_wear_stores
                                - chiropodists_podiatrists
                                - chiropractors
                                - cigar_stores_and_stands
                                - civic_social_fraternal_associations
                                - cleaning_and_maintenance
                                - clothing_rental
                                - colleges_universities
                                - commercial_equipment
                                - commercial_footwear
                                - commercial_photography_art_and_graphics
                                - commuter_transport_and_ferries
                                - computer_network_services
                                - computer_programming
                                - computer_repair
                                - computer_software_stores
                                - computers_peripherals_and_software
                                - concrete_work_services
                                - construction_materials
                                - consulting_public_relations
                                - correspondence_schools
                                - cosmetic_stores
                                - counseling_services
                                - country_clubs
                                - courier_services
                                - court_costs
                                - credit_reporting_agencies
                                - cruise_lines
                                - dairy_products_stores
                                - dance_hall_studios_schools
                                - dating_escort_services
                                - dentists_orthodontists
                                - department_stores
                                - detective_agencies
                                - digital_goods_applications
                                - digital_goods_games
                                - digital_goods_large_volume
                                - digital_goods_media
                                - direct_marketing_catalog_merchant
                                - >-
                                  direct_marketing_combination_catalog_and_retail_merchant
                                - direct_marketing_inbound_telemarketing
                                - direct_marketing_insurance_services
                                - direct_marketing_other
                                - direct_marketing_outbound_telemarketing
                                - direct_marketing_subscription
                                - direct_marketing_travel
                                - discount_stores
                                - doctors
                                - door_to_door_sales
                                - drapery_window_covering_and_upholstery_stores
                                - drinking_places
                                - drug_stores_and_pharmacies
                                - drugs_drug_proprietaries_and_druggist_sundries
                                - dry_cleaners
                                - durable_goods
                                - duty_free_stores
                                - eating_places_restaurants
                                - educational_services
                                - electric_razor_stores
                                - electric_vehicle_charging
                                - electrical_parts_and_equipment
                                - electrical_services
                                - electronics_repair_shops
                                - electronics_stores
                                - elementary_secondary_schools
                                - emergency_services_gcas_visa_use_only
                                - employment_temp_agencies
                                - equipment_rental
                                - exterminating_services
                                - family_clothing_stores
                                - fast_food_restaurants
                                - financial_institutions
                                - fines_government_administrative_entities
                                - >-
                                  fireplace_fireplace_screens_and_accessories_stores
                                - floor_covering_stores
                                - florists
                                - florists_supplies_nursery_stock_and_flowers
                                - freezer_and_locker_meat_provisioners
                                - fuel_dealers_non_automotive
                                - funeral_services_crematories
                                - >-
                                  furniture_home_furnishings_and_equipment_stores_except_appliances
                                - furniture_repair_refinishing
                                - furriers_and_fur_shops
                                - general_services
                                - gift_card_novelty_and_souvenir_shops
                                - glass_paint_and_wallpaper_stores
                                - glassware_crystal_stores
                                - golf_courses_public
                                - >-
                                  government_licensed_horse_dog_racing_us_region_only
                                - >-
                                  government_licensed_online_casions_online_gambling_us_region_only
                                - government_owned_lotteries_non_us_region
                                - government_owned_lotteries_us_region_only
                                - government_services
                                - grocery_stores_supermarkets
                                - hardware_equipment_and_supplies
                                - hardware_stores
                                - health_and_beauty_spas
                                - hearing_aids_sales_and_supplies
                                - heating_plumbing_a_c
                                - hobby_toy_and_game_shops
                                - home_supply_warehouse_stores
                                - hospitals
                                - hotels_motels_and_resorts
                                - household_appliance_stores
                                - industrial_supplies
                                - information_retrieval_services
                                - insurance_default
                                - insurance_underwriting_premiums
                                - intra_company_purchases
                                - >-
                                  jewelry_stores_watches_clocks_and_silverware_stores
                                - landscaping_services
                                - laundries
                                - laundry_cleaning_services
                                - legal_services_attorneys
                                - luggage_and_leather_goods_stores
                                - lumber_building_materials_stores
                                - manual_cash_disburse
                                - marinas_service_and_supplies
                                - marketplaces
                                - masonry_stonework_and_plaster
                                - massage_parlors
                                - medical_and_dental_labs
                                - >-
                                  medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                                - medical_services
                                - membership_organizations
                                - mens_and_boys_clothing_and_accessories_stores
                                - mens_womens_clothing_stores
                                - metal_service_centers
                                - miscellaneous
                                - miscellaneous_apparel_and_accessory_shops
                                - miscellaneous_auto_dealers
                                - miscellaneous_business_services
                                - miscellaneous_food_stores
                                - miscellaneous_general_merchandise
                                - miscellaneous_general_services
                                - miscellaneous_home_furnishing_specialty_stores
                                - miscellaneous_publishing_and_printing
                                - miscellaneous_recreation_services
                                - miscellaneous_repair_shops
                                - miscellaneous_specialty_retail
                                - mobile_home_dealers
                                - motion_picture_theaters
                                - motor_freight_carriers_and_trucking
                                - motor_homes_dealers
                                - motor_vehicle_supplies_and_new_parts
                                - motorcycle_shops_and_dealers
                                - motorcycle_shops_dealers
                                - >-
                                  music_stores_musical_instruments_pianos_and_sheet_music
                                - news_dealers_and_newsstands
                                - non_fi_money_orders
                                - non_fi_stored_value_card_purchase_load
                                - nondurable_goods
                                - nurseries_lawn_and_garden_supply_stores
                                - nursing_personal_care
                                - office_and_commercial_furniture
                                - opticians_eyeglasses
                                - optometrists_ophthalmologist
                                - orthopedic_goods_prosthetic_devices
                                - osteopaths
                                - package_stores_beer_wine_and_liquor
                                - paints_varnishes_and_supplies
                                - parking_lots_garages
                                - passenger_railways
                                - pawn_shops
                                - pet_shops_pet_food_and_supplies
                                - petroleum_and_petroleum_products
                                - photo_developing
                                - >-
                                  photographic_photocopy_microfilm_equipment_and_supplies
                                - photographic_studios
                                - picture_video_production
                                - piece_goods_notions_and_other_dry_goods
                                - plumbing_heating_equipment_and_supplies
                                - political_organizations
                                - postal_services_government_only
                                - precious_stones_and_metals_watches_and_jewelry
                                - professional_services
                                - public_warehousing_and_storage
                                - quick_copy_repro_and_blueprint
                                - railroads
                                - real_estate_agents_and_managers_rentals
                                - record_stores
                                - recreational_vehicle_rentals
                                - religious_goods_stores
                                - religious_organizations
                                - roofing_siding_sheet_metal
                                - secretarial_support_services
                                - security_brokers_dealers
                                - service_stations
                                - >-
                                  sewing_needlework_fabric_and_piece_goods_stores
                                - shoe_repair_hat_cleaning
                                - shoe_stores
                                - small_appliance_repair
                                - snowmobile_dealers
                                - special_trade_services
                                - specialty_cleaning
                                - sporting_goods_stores
                                - sporting_recreation_camps
                                - sports_and_riding_apparel_stores
                                - sports_clubs_fields
                                - stamp_and_coin_stores
                                - >-
                                  stationary_office_supplies_printing_and_writing_paper
                                - >-
                                  stationery_stores_office_and_school_supply_stores
                                - swimming_pools_sales
                                - t_ui_travel_germany
                                - tailors_alterations
                                - tax_payments_government_agencies
                                - tax_preparation_services
                                - taxicabs_limousines
                                - >-
                                  telecommunication_equipment_and_telephone_sales
                                - telecommunication_services
                                - telegraph_services
                                - tent_and_awning_shops
                                - testing_laboratories
                                - theatrical_ticket_agencies
                                - timeshares
                                - tire_retreading_and_repair
                                - tolls_bridge_fees
                                - tourist_attractions_and_exhibits
                                - towing_services
                                - trailer_parks_campgrounds
                                - transportation_services
                                - travel_agencies_tour_operators
                                - truck_stop_iteration
                                - truck_utility_trailer_rentals
                                - typesetting_plate_making_and_related_services
                                - typewriter_stores
                                - u_s_federal_government_agencies_or_departments
                                - uniforms_commercial_clothing
                                - used_merchandise_and_secondhand_stores
                                - utilities
                                - variety_stores
                                - veterinary_services
                                - video_amusement_game_supplies
                                - video_game_arcades
                                - video_tape_rental_stores
                                - vocational_trade_schools
                                - watch_jewelry_repair
                                - welding_repair
                                - wholesale_clubs
                                - wig_and_toupee_stores
                                - wires_money_orders
                                - womens_accessory_and_specialty_shops
                                - womens_ready_to_wear_stores
                                - wrecking_and_salvage_yards
                              maxLength: 5000
                              type: string
                            type: array
                          interval:
                            enum:
                              - all_time
                              - daily
                              - monthly
                              - per_authorization
                              - weekly
                              - yearly
                            type: string
                        required:
                          - amount
                          - interval
                        title: spending_limits_param
                        type: object
                      type: array
                    spending_limits_currency:
                      type: string
                  title: authorization_controls_param_v2
                  type: object
                status:
                  description: >-
                    Specifies whether to permit authorizations on this
                    cardholder's cards. Defaults to `active`.
                  enum:
                    - active
                    - inactive
                  type: string
                type:
                  description: >-
                    One of `individual` or `company`. See [Choose a cardholder
                    type](https://stripe.com/docs/issuing/other/choose-cardholder)
                    for more details.
                  enum:
                    - company
                    - individual
                  type: string
                  x-stripeBypassValidation: true
              required:
                - billing
                - name
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.cardholder'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Issuing Cardholder
      tags:
        - Issuing
        - Cardholders
  '/v1/issuing/cardholders/{cardholder}':
    get:
      description: <p>Retrieves an Issuing <code>Cardholder</code> object.</p>
      operationId: GetIssuingCardholdersCardholder
      parameters:
        - in: path
          name: cardholder
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.cardholder'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Cardholder
      tags:
        - Issuing
        - Cardholders
    post:
      description: >-
        <p>Updates the specified Issuing <code>Cardholder</code> object by
        setting the values of the parameters passed. Any parameters not provided
        will be left unchanged.</p>
      operationId: PostIssuingCardholdersCardholder
      parameters:
        - in: path
          name: cardholder
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              billing:
                explode: true
                style: deepObject
              company:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              individual:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              preferred_locales:
                explode: true
                style: deepObject
              spending_controls:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                billing:
                  description: The cardholder's billing address.
                  properties:
                    address:
                      properties:
                        city:
                          maxLength: 5000
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 5000
                          type: string
                        line2:
                          maxLength: 5000
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      required:
                        - city
                        - country
                        - line1
                        - postal_code
                      title: required_address
                      type: object
                  required:
                    - address
                  title: billing_specs
                  type: object
                company:
                  description: Additional information about a `company` cardholder.
                  properties:
                    tax_id:
                      maxLength: 5000
                      type: string
                  title: company_param
                  type: object
                email:
                  description: The cardholder's email address.
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                individual:
                  description: Additional information about an `individual` cardholder.
                  properties:
                    card_issuing:
                      properties:
                        user_terms_acceptance:
                          properties:
                            date:
                              format: unix-time
                              type: integer
                            ip:
                              type: string
                            user_agent:
                              anyOf:
                                - maxLength: 5000
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                          title: terms_acceptance_param
                          type: object
                      title: card_issuing_param
                      type: object
                    dob:
                      properties:
                        day:
                          type: integer
                        month:
                          type: integer
                        year:
                          type: integer
                      required:
                        - day
                        - month
                        - year
                      title: date_of_birth_specs
                      type: object
                    first_name:
                      type: string
                    last_name:
                      type: string
                    verification:
                      properties:
                        document:
                          properties:
                            back:
                              maxLength: 5000
                              type: string
                            front:
                              maxLength: 5000
                              type: string
                          title: person_verification_document_param
                          type: object
                      title: person_verification_param
                      type: object
                  title: individual_param
                  type: object
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                phone_number:
                  description: >-
                    The cardholder's phone number. This is required for all
                    cardholders who will be creating EU cards. See the [3D
                    Secure
                    documentation](https://stripe.com/docs/issuing/3d-secure)
                    for more details.
                  type: string
                preferred_locales:
                  description: >-
                    The cardholder’s preferred locales (languages), ordered by
                    preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
                     This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
                  items:
                    enum:
                      - de
                      - en
                      - es
                      - fr
                      - it
                    type: string
                  type: array
                spending_controls:
                  description: >-
                    Rules that control spending across this cardholder's cards.
                    Refer to our
                    [documentation](https://stripe.com/docs/issuing/controls/spending-controls)
                    for more details.
                  properties:
                    allowed_categories:
                      items:
                        enum:
                          - ac_refrigeration_repair
                          - accounting_bookkeeping_services
                          - advertising_services
                          - agricultural_cooperative
                          - airlines_air_carriers
                          - airports_flying_fields
                          - ambulance_services
                          - amusement_parks_carnivals
                          - antique_reproductions
                          - antique_shops
                          - aquariums
                          - architectural_surveying_services
                          - art_dealers_and_galleries
                          - artists_supply_and_craft_shops
                          - auto_and_home_supply_stores
                          - auto_body_repair_shops
                          - auto_paint_shops
                          - auto_service_shops
                          - automated_cash_disburse
                          - automated_fuel_dispensers
                          - automobile_associations
                          - automotive_parts_and_accessories_stores
                          - automotive_tire_stores
                          - bail_and_bond_payments
                          - bakeries
                          - bands_orchestras
                          - barber_and_beauty_shops
                          - betting_casino_gambling
                          - bicycle_shops
                          - billiard_pool_establishments
                          - boat_dealers
                          - boat_rentals_and_leases
                          - book_stores
                          - books_periodicals_and_newspapers
                          - bowling_alleys
                          - bus_lines
                          - business_secretarial_schools
                          - buying_shopping_services
                          - cable_satellite_and_other_pay_television_and_radio
                          - camera_and_photographic_supply_stores
                          - candy_nut_and_confectionery_stores
                          - car_and_truck_dealers_new_used
                          - car_and_truck_dealers_used_only
                          - car_rental_agencies
                          - car_washes
                          - carpentry_services
                          - carpet_upholstery_cleaning
                          - caterers
                          - >-
                            charitable_and_social_service_organizations_fundraising
                          - chemicals_and_allied_products
                          - child_care_services
                          - childrens_and_infants_wear_stores
                          - chiropodists_podiatrists
                          - chiropractors
                          - cigar_stores_and_stands
                          - civic_social_fraternal_associations
                          - cleaning_and_maintenance
                          - clothing_rental
                          - colleges_universities
                          - commercial_equipment
                          - commercial_footwear
                          - commercial_photography_art_and_graphics
                          - commuter_transport_and_ferries
                          - computer_network_services
                          - computer_programming
                          - computer_repair
                          - computer_software_stores
                          - computers_peripherals_and_software
                          - concrete_work_services
                          - construction_materials
                          - consulting_public_relations
                          - correspondence_schools
                          - cosmetic_stores
                          - counseling_services
                          - country_clubs
                          - courier_services
                          - court_costs
                          - credit_reporting_agencies
                          - cruise_lines
                          - dairy_products_stores
                          - dance_hall_studios_schools
                          - dating_escort_services
                          - dentists_orthodontists
                          - department_stores
                          - detective_agencies
                          - digital_goods_applications
                          - digital_goods_games
                          - digital_goods_large_volume
                          - digital_goods_media
                          - direct_marketing_catalog_merchant
                          - >-
                            direct_marketing_combination_catalog_and_retail_merchant
                          - direct_marketing_inbound_telemarketing
                          - direct_marketing_insurance_services
                          - direct_marketing_other
                          - direct_marketing_outbound_telemarketing
                          - direct_marketing_subscription
                          - direct_marketing_travel
                          - discount_stores
                          - doctors
                          - door_to_door_sales
                          - drapery_window_covering_and_upholstery_stores
                          - drinking_places
                          - drug_stores_and_pharmacies
                          - drugs_drug_proprietaries_and_druggist_sundries
                          - dry_cleaners
                          - durable_goods
                          - duty_free_stores
                          - eating_places_restaurants
                          - educational_services
                          - electric_razor_stores
                          - electric_vehicle_charging
                          - electrical_parts_and_equipment
                          - electrical_services
                          - electronics_repair_shops
                          - electronics_stores
                          - elementary_secondary_schools
                          - emergency_services_gcas_visa_use_only
                          - employment_temp_agencies
                          - equipment_rental
                          - exterminating_services
                          - family_clothing_stores
                          - fast_food_restaurants
                          - financial_institutions
                          - fines_government_administrative_entities
                          - fireplace_fireplace_screens_and_accessories_stores
                          - floor_covering_stores
                          - florists
                          - florists_supplies_nursery_stock_and_flowers
                          - freezer_and_locker_meat_provisioners
                          - fuel_dealers_non_automotive
                          - funeral_services_crematories
                          - >-
                            furniture_home_furnishings_and_equipment_stores_except_appliances
                          - furniture_repair_refinishing
                          - furriers_and_fur_shops
                          - general_services
                          - gift_card_novelty_and_souvenir_shops
                          - glass_paint_and_wallpaper_stores
                          - glassware_crystal_stores
                          - golf_courses_public
                          - government_licensed_horse_dog_racing_us_region_only
                          - >-
                            government_licensed_online_casions_online_gambling_us_region_only
                          - government_owned_lotteries_non_us_region
                          - government_owned_lotteries_us_region_only
                          - government_services
                          - grocery_stores_supermarkets
                          - hardware_equipment_and_supplies
                          - hardware_stores
                          - health_and_beauty_spas
                          - hearing_aids_sales_and_supplies
                          - heating_plumbing_a_c
                          - hobby_toy_and_game_shops
                          - home_supply_warehouse_stores
                          - hospitals
                          - hotels_motels_and_resorts
                          - household_appliance_stores
                          - industrial_supplies
                          - information_retrieval_services
                          - insurance_default
                          - insurance_underwriting_premiums
                          - intra_company_purchases
                          - jewelry_stores_watches_clocks_and_silverware_stores
                          - landscaping_services
                          - laundries
                          - laundry_cleaning_services
                          - legal_services_attorneys
                          - luggage_and_leather_goods_stores
                          - lumber_building_materials_stores
                          - manual_cash_disburse
                          - marinas_service_and_supplies
                          - marketplaces
                          - masonry_stonework_and_plaster
                          - massage_parlors
                          - medical_and_dental_labs
                          - >-
                            medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                          - medical_services
                          - membership_organizations
                          - mens_and_boys_clothing_and_accessories_stores
                          - mens_womens_clothing_stores
                          - metal_service_centers
                          - miscellaneous
                          - miscellaneous_apparel_and_accessory_shops
                          - miscellaneous_auto_dealers
                          - miscellaneous_business_services
                          - miscellaneous_food_stores
                          - miscellaneous_general_merchandise
                          - miscellaneous_general_services
                          - miscellaneous_home_furnishing_specialty_stores
                          - miscellaneous_publishing_and_printing
                          - miscellaneous_recreation_services
                          - miscellaneous_repair_shops
                          - miscellaneous_specialty_retail
                          - mobile_home_dealers
                          - motion_picture_theaters
                          - motor_freight_carriers_and_trucking
                          - motor_homes_dealers
                          - motor_vehicle_supplies_and_new_parts
                          - motorcycle_shops_and_dealers
                          - motorcycle_shops_dealers
                          - >-
                            music_stores_musical_instruments_pianos_and_sheet_music
                          - news_dealers_and_newsstands
                          - non_fi_money_orders
                          - non_fi_stored_value_card_purchase_load
                          - nondurable_goods
                          - nurseries_lawn_and_garden_supply_stores
                          - nursing_personal_care
                          - office_and_commercial_furniture
                          - opticians_eyeglasses
                          - optometrists_ophthalmologist
                          - orthopedic_goods_prosthetic_devices
                          - osteopaths
                          - package_stores_beer_wine_and_liquor
                          - paints_varnishes_and_supplies
                          - parking_lots_garages
                          - passenger_railways
                          - pawn_shops
                          - pet_shops_pet_food_and_supplies
                          - petroleum_and_petroleum_products
                          - photo_developing
                          - >-
                            photographic_photocopy_microfilm_equipment_and_supplies
                          - photographic_studios
                          - picture_video_production
                          - piece_goods_notions_and_other_dry_goods
                          - plumbing_heating_equipment_and_supplies
                          - political_organizations
                          - postal_services_government_only
                          - precious_stones_and_metals_watches_and_jewelry
                          - professional_services
                          - public_warehousing_and_storage
                          - quick_copy_repro_and_blueprint
                          - railroads
                          - real_estate_agents_and_managers_rentals
                          - record_stores
                          - recreational_vehicle_rentals
                          - religious_goods_stores
                          - religious_organizations
                          - roofing_siding_sheet_metal
                          - secretarial_support_services
                          - security_brokers_dealers
                          - service_stations
                          - sewing_needlework_fabric_and_piece_goods_stores
                          - shoe_repair_hat_cleaning
                          - shoe_stores
                          - small_appliance_repair
                          - snowmobile_dealers
                          - special_trade_services
                          - specialty_cleaning
                          - sporting_goods_stores
                          - sporting_recreation_camps
                          - sports_and_riding_apparel_stores
                          - sports_clubs_fields
                          - stamp_and_coin_stores
                          - >-
                            stationary_office_supplies_printing_and_writing_paper
                          - stationery_stores_office_and_school_supply_stores
                          - swimming_pools_sales
                          - t_ui_travel_germany
                          - tailors_alterations
                          - tax_payments_government_agencies
                          - tax_preparation_services
                          - taxicabs_limousines
                          - telecommunication_equipment_and_telephone_sales
                          - telecommunication_services
                          - telegraph_services
                          - tent_and_awning_shops
                          - testing_laboratories
                          - theatrical_ticket_agencies
                          - timeshares
                          - tire_retreading_and_repair
                          - tolls_bridge_fees
                          - tourist_attractions_and_exhibits
                          - towing_services
                          - trailer_parks_campgrounds
                          - transportation_services
                          - travel_agencies_tour_operators
                          - truck_stop_iteration
                          - truck_utility_trailer_rentals
                          - typesetting_plate_making_and_related_services
                          - typewriter_stores
                          - u_s_federal_government_agencies_or_departments
                          - uniforms_commercial_clothing
                          - used_merchandise_and_secondhand_stores
                          - utilities
                          - variety_stores
                          - veterinary_services
                          - video_amusement_game_supplies
                          - video_game_arcades
                          - video_tape_rental_stores
                          - vocational_trade_schools
                          - watch_jewelry_repair
                          - welding_repair
                          - wholesale_clubs
                          - wig_and_toupee_stores
                          - wires_money_orders
                          - womens_accessory_and_specialty_shops
                          - womens_ready_to_wear_stores
                          - wrecking_and_salvage_yards
                        maxLength: 5000
                        type: string
                      type: array
                    blocked_categories:
                      items:
                        enum:
                          - ac_refrigeration_repair
                          - accounting_bookkeeping_services
                          - advertising_services
                          - agricultural_cooperative
                          - airlines_air_carriers
                          - airports_flying_fields
                          - ambulance_services
                          - amusement_parks_carnivals
                          - antique_reproductions
                          - antique_shops
                          - aquariums
                          - architectural_surveying_services
                          - art_dealers_and_galleries
                          - artists_supply_and_craft_shops
                          - auto_and_home_supply_stores
                          - auto_body_repair_shops
                          - auto_paint_shops
                          - auto_service_shops
                          - automated_cash_disburse
                          - automated_fuel_dispensers
                          - automobile_associations
                          - automotive_parts_and_accessories_stores
                          - automotive_tire_stores
                          - bail_and_bond_payments
                          - bakeries
                          - bands_orchestras
                          - barber_and_beauty_shops
                          - betting_casino_gambling
                          - bicycle_shops
                          - billiard_pool_establishments
                          - boat_dealers
                          - boat_rentals_and_leases
                          - book_stores
                          - books_periodicals_and_newspapers
                          - bowling_alleys
                          - bus_lines
                          - business_secretarial_schools
                          - buying_shopping_services
                          - cable_satellite_and_other_pay_television_and_radio
                          - camera_and_photographic_supply_stores
                          - candy_nut_and_confectionery_stores
                          - car_and_truck_dealers_new_used
                          - car_and_truck_dealers_used_only
                          - car_rental_agencies
                          - car_washes
                          - carpentry_services
                          - carpet_upholstery_cleaning
                          - caterers
                          - >-
                            charitable_and_social_service_organizations_fundraising
                          - chemicals_and_allied_products
                          - child_care_services
                          - childrens_and_infants_wear_stores
                          - chiropodists_podiatrists
                          - chiropractors
                          - cigar_stores_and_stands
                          - civic_social_fraternal_associations
                          - cleaning_and_maintenance
                          - clothing_rental
                          - colleges_universities
                          - commercial_equipment
                          - commercial_footwear
                          - commercial_photography_art_and_graphics
                          - commuter_transport_and_ferries
                          - computer_network_services
                          - computer_programming
                          - computer_repair
                          - computer_software_stores
                          - computers_peripherals_and_software
                          - concrete_work_services
                          - construction_materials
                          - consulting_public_relations
                          - correspondence_schools
                          - cosmetic_stores
                          - counseling_services
                          - country_clubs
                          - courier_services
                          - court_costs
                          - credit_reporting_agencies
                          - cruise_lines
                          - dairy_products_stores
                          - dance_hall_studios_schools
                          - dating_escort_services
                          - dentists_orthodontists
                          - department_stores
                          - detective_agencies
                          - digital_goods_applications
                          - digital_goods_games
                          - digital_goods_large_volume
                          - digital_goods_media
                          - direct_marketing_catalog_merchant
                          - >-
                            direct_marketing_combination_catalog_and_retail_merchant
                          - direct_marketing_inbound_telemarketing
                          - direct_marketing_insurance_services
                          - direct_marketing_other
                          - direct_marketing_outbound_telemarketing
                          - direct_marketing_subscription
                          - direct_marketing_travel
                          - discount_stores
                          - doctors
                          - door_to_door_sales
                          - drapery_window_covering_and_upholstery_stores
                          - drinking_places
                          - drug_stores_and_pharmacies
                          - drugs_drug_proprietaries_and_druggist_sundries
                          - dry_cleaners
                          - durable_goods
                          - duty_free_stores
                          - eating_places_restaurants
                          - educational_services
                          - electric_razor_stores
                          - electric_vehicle_charging
                          - electrical_parts_and_equipment
                          - electrical_services
                          - electronics_repair_shops
                          - electronics_stores
                          - elementary_secondary_schools
                          - emergency_services_gcas_visa_use_only
                          - employment_temp_agencies
                          - equipment_rental
                          - exterminating_services
                          - family_clothing_stores
                          - fast_food_restaurants
                          - financial_institutions
                          - fines_government_administrative_entities
                          - fireplace_fireplace_screens_and_accessories_stores
                          - floor_covering_stores
                          - florists
                          - florists_supplies_nursery_stock_and_flowers
                          - freezer_and_locker_meat_provisioners
                          - fuel_dealers_non_automotive
                          - funeral_services_crematories
                          - >-
                            furniture_home_furnishings_and_equipment_stores_except_appliances
                          - furniture_repair_refinishing
                          - furriers_and_fur_shops
                          - general_services
                          - gift_card_novelty_and_souvenir_shops
                          - glass_paint_and_wallpaper_stores
                          - glassware_crystal_stores
                          - golf_courses_public
                          - government_licensed_horse_dog_racing_us_region_only
                          - >-
                            government_licensed_online_casions_online_gambling_us_region_only
                          - government_owned_lotteries_non_us_region
                          - government_owned_lotteries_us_region_only
                          - government_services
                          - grocery_stores_supermarkets
                          - hardware_equipment_and_supplies
                          - hardware_stores
                          - health_and_beauty_spas
                          - hearing_aids_sales_and_supplies
                          - heating_plumbing_a_c
                          - hobby_toy_and_game_shops
                          - home_supply_warehouse_stores
                          - hospitals
                          - hotels_motels_and_resorts
                          - household_appliance_stores
                          - industrial_supplies
                          - information_retrieval_services
                          - insurance_default
                          - insurance_underwriting_premiums
                          - intra_company_purchases
                          - jewelry_stores_watches_clocks_and_silverware_stores
                          - landscaping_services
                          - laundries
                          - laundry_cleaning_services
                          - legal_services_attorneys
                          - luggage_and_leather_goods_stores
                          - lumber_building_materials_stores
                          - manual_cash_disburse
                          - marinas_service_and_supplies
                          - marketplaces
                          - masonry_stonework_and_plaster
                          - massage_parlors
                          - medical_and_dental_labs
                          - >-
                            medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                          - medical_services
                          - membership_organizations
                          - mens_and_boys_clothing_and_accessories_stores
                          - mens_womens_clothing_stores
                          - metal_service_centers
                          - miscellaneous
                          - miscellaneous_apparel_and_accessory_shops
                          - miscellaneous_auto_dealers
                          - miscellaneous_business_services
                          - miscellaneous_food_stores
                          - miscellaneous_general_merchandise
                          - miscellaneous_general_services
                          - miscellaneous_home_furnishing_specialty_stores
                          - miscellaneous_publishing_and_printing
                          - miscellaneous_recreation_services
                          - miscellaneous_repair_shops
                          - miscellaneous_specialty_retail
                          - mobile_home_dealers
                          - motion_picture_theaters
                          - motor_freight_carriers_and_trucking
                          - motor_homes_dealers
                          - motor_vehicle_supplies_and_new_parts
                          - motorcycle_shops_and_dealers
                          - motorcycle_shops_dealers
                          - >-
                            music_stores_musical_instruments_pianos_and_sheet_music
                          - news_dealers_and_newsstands
                          - non_fi_money_orders
                          - non_fi_stored_value_card_purchase_load
                          - nondurable_goods
                          - nurseries_lawn_and_garden_supply_stores
                          - nursing_personal_care
                          - office_and_commercial_furniture
                          - opticians_eyeglasses
                          - optometrists_ophthalmologist
                          - orthopedic_goods_prosthetic_devices
                          - osteopaths
                          - package_stores_beer_wine_and_liquor
                          - paints_varnishes_and_supplies
                          - parking_lots_garages
                          - passenger_railways
                          - pawn_shops
                          - pet_shops_pet_food_and_supplies
                          - petroleum_and_petroleum_products
                          - photo_developing
                          - >-
                            photographic_photocopy_microfilm_equipment_and_supplies
                          - photographic_studios
                          - picture_video_production
                          - piece_goods_notions_and_other_dry_goods
                          - plumbing_heating_equipment_and_supplies
                          - political_organizations
                          - postal_services_government_only
                          - precious_stones_and_metals_watches_and_jewelry
                          - professional_services
                          - public_warehousing_and_storage
                          - quick_copy_repro_and_blueprint
                          - railroads
                          - real_estate_agents_and_managers_rentals
                          - record_stores
                          - recreational_vehicle_rentals
                          - religious_goods_stores
                          - religious_organizations
                          - roofing_siding_sheet_metal
                          - secretarial_support_services
                          - security_brokers_dealers
                          - service_stations
                          - sewing_needlework_fabric_and_piece_goods_stores
                          - shoe_repair_hat_cleaning
                          - shoe_stores
                          - small_appliance_repair
                          - snowmobile_dealers
                          - special_trade_services
                          - specialty_cleaning
                          - sporting_goods_stores
                          - sporting_recreation_camps
                          - sports_and_riding_apparel_stores
                          - sports_clubs_fields
                          - stamp_and_coin_stores
                          - >-
                            stationary_office_supplies_printing_and_writing_paper
                          - stationery_stores_office_and_school_supply_stores
                          - swimming_pools_sales
                          - t_ui_travel_germany
                          - tailors_alterations
                          - tax_payments_government_agencies
                          - tax_preparation_services
                          - taxicabs_limousines
                          - telecommunication_equipment_and_telephone_sales
                          - telecommunication_services
                          - telegraph_services
                          - tent_and_awning_shops
                          - testing_laboratories
                          - theatrical_ticket_agencies
                          - timeshares
                          - tire_retreading_and_repair
                          - tolls_bridge_fees
                          - tourist_attractions_and_exhibits
                          - towing_services
                          - trailer_parks_campgrounds
                          - transportation_services
                          - travel_agencies_tour_operators
                          - truck_stop_iteration
                          - truck_utility_trailer_rentals
                          - typesetting_plate_making_and_related_services
                          - typewriter_stores
                          - u_s_federal_government_agencies_or_departments
                          - uniforms_commercial_clothing
                          - used_merchandise_and_secondhand_stores
                          - utilities
                          - variety_stores
                          - veterinary_services
                          - video_amusement_game_supplies
                          - video_game_arcades
                          - video_tape_rental_stores
                          - vocational_trade_schools
                          - watch_jewelry_repair
                          - welding_repair
                          - wholesale_clubs
                          - wig_and_toupee_stores
                          - wires_money_orders
                          - womens_accessory_and_specialty_shops
                          - womens_ready_to_wear_stores
                          - wrecking_and_salvage_yards
                        maxLength: 5000
                        type: string
                      type: array
                    spending_limits:
                      items:
                        properties:
                          amount:
                            type: integer
                          categories:
                            items:
                              enum:
                                - ac_refrigeration_repair
                                - accounting_bookkeeping_services
                                - advertising_services
                                - agricultural_cooperative
                                - airlines_air_carriers
                                - airports_flying_fields
                                - ambulance_services
                                - amusement_parks_carnivals
                                - antique_reproductions
                                - antique_shops
                                - aquariums
                                - architectural_surveying_services
                                - art_dealers_and_galleries
                                - artists_supply_and_craft_shops
                                - auto_and_home_supply_stores
                                - auto_body_repair_shops
                                - auto_paint_shops
                                - auto_service_shops
                                - automated_cash_disburse
                                - automated_fuel_dispensers
                                - automobile_associations
                                - automotive_parts_and_accessories_stores
                                - automotive_tire_stores
                                - bail_and_bond_payments
                                - bakeries
                                - bands_orchestras
                                - barber_and_beauty_shops
                                - betting_casino_gambling
                                - bicycle_shops
                                - billiard_pool_establishments
                                - boat_dealers
                                - boat_rentals_and_leases
                                - book_stores
                                - books_periodicals_and_newspapers
                                - bowling_alleys
                                - bus_lines
                                - business_secretarial_schools
                                - buying_shopping_services
                                - >-
                                  cable_satellite_and_other_pay_television_and_radio
                                - camera_and_photographic_supply_stores
                                - candy_nut_and_confectionery_stores
                                - car_and_truck_dealers_new_used
                                - car_and_truck_dealers_used_only
                                - car_rental_agencies
                                - car_washes
                                - carpentry_services
                                - carpet_upholstery_cleaning
                                - caterers
                                - >-
                                  charitable_and_social_service_organizations_fundraising
                                - chemicals_and_allied_products
                                - child_care_services
                                - childrens_and_infants_wear_stores
                                - chiropodists_podiatrists
                                - chiropractors
                                - cigar_stores_and_stands
                                - civic_social_fraternal_associations
                                - cleaning_and_maintenance
                                - clothing_rental
                                - colleges_universities
                                - commercial_equipment
                                - commercial_footwear
                                - commercial_photography_art_and_graphics
                                - commuter_transport_and_ferries
                                - computer_network_services
                                - computer_programming
                                - computer_repair
                                - computer_software_stores
                                - computers_peripherals_and_software
                                - concrete_work_services
                                - construction_materials
                                - consulting_public_relations
                                - correspondence_schools
                                - cosmetic_stores
                                - counseling_services
                                - country_clubs
                                - courier_services
                                - court_costs
                                - credit_reporting_agencies
                                - cruise_lines
                                - dairy_products_stores
                                - dance_hall_studios_schools
                                - dating_escort_services
                                - dentists_orthodontists
                                - department_stores
                                - detective_agencies
                                - digital_goods_applications
                                - digital_goods_games
                                - digital_goods_large_volume
                                - digital_goods_media
                                - direct_marketing_catalog_merchant
                                - >-
                                  direct_marketing_combination_catalog_and_retail_merchant
                                - direct_marketing_inbound_telemarketing
                                - direct_marketing_insurance_services
                                - direct_marketing_other
                                - direct_marketing_outbound_telemarketing
                                - direct_marketing_subscription
                                - direct_marketing_travel
                                - discount_stores
                                - doctors
                                - door_to_door_sales
                                - drapery_window_covering_and_upholstery_stores
                                - drinking_places
                                - drug_stores_and_pharmacies
                                - drugs_drug_proprietaries_and_druggist_sundries
                                - dry_cleaners
                                - durable_goods
                                - duty_free_stores
                                - eating_places_restaurants
                                - educational_services
                                - electric_razor_stores
                                - electric_vehicle_charging
                                - electrical_parts_and_equipment
                                - electrical_services
                                - electronics_repair_shops
                                - electronics_stores
                                - elementary_secondary_schools
                                - emergency_services_gcas_visa_use_only
                                - employment_temp_agencies
                                - equipment_rental
                                - exterminating_services
                                - family_clothing_stores
                                - fast_food_restaurants
                                - financial_institutions
                                - fines_government_administrative_entities
                                - >-
                                  fireplace_fireplace_screens_and_accessories_stores
                                - floor_covering_stores
                                - florists
                                - florists_supplies_nursery_stock_and_flowers
                                - freezer_and_locker_meat_provisioners
                                - fuel_dealers_non_automotive
                                - funeral_services_crematories
                                - >-
                                  furniture_home_furnishings_and_equipment_stores_except_appliances
                                - furniture_repair_refinishing
                                - furriers_and_fur_shops
                                - general_services
                                - gift_card_novelty_and_souvenir_shops
                                - glass_paint_and_wallpaper_stores
                                - glassware_crystal_stores
                                - golf_courses_public
                                - >-
                                  government_licensed_horse_dog_racing_us_region_only
                                - >-
                                  government_licensed_online_casions_online_gambling_us_region_only
                                - government_owned_lotteries_non_us_region
                                - government_owned_lotteries_us_region_only
                                - government_services
                                - grocery_stores_supermarkets
                                - hardware_equipment_and_supplies
                                - hardware_stores
                                - health_and_beauty_spas
                                - hearing_aids_sales_and_supplies
                                - heating_plumbing_a_c
                                - hobby_toy_and_game_shops
                                - home_supply_warehouse_stores
                                - hospitals
                                - hotels_motels_and_resorts
                                - household_appliance_stores
                                - industrial_supplies
                                - information_retrieval_services
                                - insurance_default
                                - insurance_underwriting_premiums
                                - intra_company_purchases
                                - >-
                                  jewelry_stores_watches_clocks_and_silverware_stores
                                - landscaping_services
                                - laundries
                                - laundry_cleaning_services
                                - legal_services_attorneys
                                - luggage_and_leather_goods_stores
                                - lumber_building_materials_stores
                                - manual_cash_disburse
                                - marinas_service_and_supplies
                                - marketplaces
                                - masonry_stonework_and_plaster
                                - massage_parlors
                                - medical_and_dental_labs
                                - >-
                                  medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                                - medical_services
                                - membership_organizations
                                - mens_and_boys_clothing_and_accessories_stores
                                - mens_womens_clothing_stores
                                - metal_service_centers
                                - miscellaneous
                                - miscellaneous_apparel_and_accessory_shops
                                - miscellaneous_auto_dealers
                                - miscellaneous_business_services
                                - miscellaneous_food_stores
                                - miscellaneous_general_merchandise
                                - miscellaneous_general_services
                                - miscellaneous_home_furnishing_specialty_stores
                                - miscellaneous_publishing_and_printing
                                - miscellaneous_recreation_services
                                - miscellaneous_repair_shops
                                - miscellaneous_specialty_retail
                                - mobile_home_dealers
                                - motion_picture_theaters
                                - motor_freight_carriers_and_trucking
                                - motor_homes_dealers
                                - motor_vehicle_supplies_and_new_parts
                                - motorcycle_shops_and_dealers
                                - motorcycle_shops_dealers
                                - >-
                                  music_stores_musical_instruments_pianos_and_sheet_music
                                - news_dealers_and_newsstands
                                - non_fi_money_orders
                                - non_fi_stored_value_card_purchase_load
                                - nondurable_goods
                                - nurseries_lawn_and_garden_supply_stores
                                - nursing_personal_care
                                - office_and_commercial_furniture
                                - opticians_eyeglasses
                                - optometrists_ophthalmologist
                                - orthopedic_goods_prosthetic_devices
                                - osteopaths
                                - package_stores_beer_wine_and_liquor
                                - paints_varnishes_and_supplies
                                - parking_lots_garages
                                - passenger_railways
                                - pawn_shops
                                - pet_shops_pet_food_and_supplies
                                - petroleum_and_petroleum_products
                                - photo_developing
                                - >-
                                  photographic_photocopy_microfilm_equipment_and_supplies
                                - photographic_studios
                                - picture_video_production
                                - piece_goods_notions_and_other_dry_goods
                                - plumbing_heating_equipment_and_supplies
                                - political_organizations
                                - postal_services_government_only
                                - precious_stones_and_metals_watches_and_jewelry
                                - professional_services
                                - public_warehousing_and_storage
                                - quick_copy_repro_and_blueprint
                                - railroads
                                - real_estate_agents_and_managers_rentals
                                - record_stores
                                - recreational_vehicle_rentals
                                - religious_goods_stores
                                - religious_organizations
                                - roofing_siding_sheet_metal
                                - secretarial_support_services
                                - security_brokers_dealers
                                - service_stations
                                - >-
                                  sewing_needlework_fabric_and_piece_goods_stores
                                - shoe_repair_hat_cleaning
                                - shoe_stores
                                - small_appliance_repair
                                - snowmobile_dealers
                                - special_trade_services
                                - specialty_cleaning
                                - sporting_goods_stores
                                - sporting_recreation_camps
                                - sports_and_riding_apparel_stores
                                - sports_clubs_fields
                                - stamp_and_coin_stores
                                - >-
                                  stationary_office_supplies_printing_and_writing_paper
                                - >-
                                  stationery_stores_office_and_school_supply_stores
                                - swimming_pools_sales
                                - t_ui_travel_germany
                                - tailors_alterations
                                - tax_payments_government_agencies
                                - tax_preparation_services
                                - taxicabs_limousines
                                - >-
                                  telecommunication_equipment_and_telephone_sales
                                - telecommunication_services
                                - telegraph_services
                                - tent_and_awning_shops
                                - testing_laboratories
                                - theatrical_ticket_agencies
                                - timeshares
                                - tire_retreading_and_repair
                                - tolls_bridge_fees
                                - tourist_attractions_and_exhibits
                                - towing_services
                                - trailer_parks_campgrounds
                                - transportation_services
                                - travel_agencies_tour_operators
                                - truck_stop_iteration
                                - truck_utility_trailer_rentals
                                - typesetting_plate_making_and_related_services
                                - typewriter_stores
                                - u_s_federal_government_agencies_or_departments
                                - uniforms_commercial_clothing
                                - used_merchandise_and_secondhand_stores
                                - utilities
                                - variety_stores
                                - veterinary_services
                                - video_amusement_game_supplies
                                - video_game_arcades
                                - video_tape_rental_stores
                                - vocational_trade_schools
                                - watch_jewelry_repair
                                - welding_repair
                                - wholesale_clubs
                                - wig_and_toupee_stores
                                - wires_money_orders
                                - womens_accessory_and_specialty_shops
                                - womens_ready_to_wear_stores
                                - wrecking_and_salvage_yards
                              maxLength: 5000
                              type: string
                            type: array
                          interval:
                            enum:
                              - all_time
                              - daily
                              - monthly
                              - per_authorization
                              - weekly
                              - yearly
                            type: string
                        required:
                          - amount
                          - interval
                        title: spending_limits_param
                        type: object
                      type: array
                    spending_limits_currency:
                      type: string
                  title: authorization_controls_param_v2
                  type: object
                status:
                  description: >-
                    Specifies whether to permit authorizations on this
                    cardholder's cards.
                  enum:
                    - active
                    - inactive
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.cardholder'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Issuing Cardholder
      tags:
        - Issuing
        - Cardholders
  /v1/issuing/cards:
    get:
      description: >-
        <p>Returns a list of Issuing <code>Card</code> objects. The objects are
        sorted in descending order by creation date, with the most recently
        created object appearing first.</p>
      operationId: GetIssuingCards
      parameters:
        - description: Only return cards belonging to the Cardholder with the provided ID.
          in: query
          name: cardholder
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Only return cards that were issued during the given date interval.
          explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Only return cards that have the given expiration month.
          in: query
          name: exp_month
          required: false
          schema:
            type: integer
          style: form
        - description: Only return cards that have the given expiration year.
          in: query
          name: exp_year
          required: false
          schema:
            type: integer
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: Only return cards that have the given last four digits.
          in: query
          name: last4
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return cards that have the given status. One of `active`,
            `inactive`, or `canceled`.
          in: query
          name: status
          required: false
          schema:
            enum:
              - active
              - canceled
              - inactive
            type: string
            x-stripeBypassValidation: true
          style: form
        - description: >-
            Only return cards that have the given type. One of `virtual` or
            `physical`.
          in: query
          name: type
          required: false
          schema:
            enum:
              - physical
              - virtual
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/issuing.card'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/issuing/cards
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: IssuingCardList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Cards
      tags:
        - Issuing
        - Cards
    post:
      description: <p>Creates an Issuing <code>Card</code> object.</p>
      operationId: PostIssuingCards
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              shipping:
                explode: true
                style: deepObject
              spending_controls:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                cardholder:
                  description: >-
                    The
                    [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object)
                    object with which the card will be associated.
                  maxLength: 5000
                  type: string
                currency:
                  description: The currency for the card.
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                financial_account:
                  type: string
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                replacement_for:
                  description: The card this is meant to be a replacement for (if any).
                  maxLength: 5000
                  type: string
                replacement_reason:
                  description: >-
                    If `replacement_for` is specified, this should indicate why
                    that card is being replaced.
                  enum:
                    - damaged
                    - expired
                    - lost
                    - stolen
                  type: string
                  x-stripeBypassValidation: true
                shipping:
                  description: The address where the card will be shipped.
                  properties:
                    address:
                      properties:
                        city:
                          maxLength: 5000
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 5000
                          type: string
                        line2:
                          maxLength: 5000
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      required:
                        - city
                        - country
                        - line1
                        - postal_code
                      title: required_address
                      type: object
                    customs:
                      properties:
                        eori_number:
                          maxLength: 5000
                          type: string
                      title: customs_param
                      type: object
                    name:
                      maxLength: 5000
                      type: string
                    phone_number:
                      type: string
                    require_signature:
                      type: boolean
                    service:
                      enum:
                        - express
                        - priority
                        - standard
                      type: string
                      x-stripeBypassValidation: true
                    type:
                      enum:
                        - bulk
                        - individual
                      type: string
                  required:
                    - address
                    - name
                  title: shipping_specs
                  type: object
                spending_controls:
                  description: >-
                    Rules that control spending for this card. Refer to our
                    [documentation](https://stripe.com/docs/issuing/controls/spending-controls)
                    for more details.
                  properties:
                    allowed_categories:
                      items:
                        enum:
                          - ac_refrigeration_repair
                          - accounting_bookkeeping_services
                          - advertising_services
                          - agricultural_cooperative
                          - airlines_air_carriers
                          - airports_flying_fields
                          - ambulance_services
                          - amusement_parks_carnivals
                          - antique_reproductions
                          - antique_shops
                          - aquariums
                          - architectural_surveying_services
                          - art_dealers_and_galleries
                          - artists_supply_and_craft_shops
                          - auto_and_home_supply_stores
                          - auto_body_repair_shops
                          - auto_paint_shops
                          - auto_service_shops
                          - automated_cash_disburse
                          - automated_fuel_dispensers
                          - automobile_associations
                          - automotive_parts_and_accessories_stores
                          - automotive_tire_stores
                          - bail_and_bond_payments
                          - bakeries
                          - bands_orchestras
                          - barber_and_beauty_shops
                          - betting_casino_gambling
                          - bicycle_shops
                          - billiard_pool_establishments
                          - boat_dealers
                          - boat_rentals_and_leases
                          - book_stores
                          - books_periodicals_and_newspapers
                          - bowling_alleys
                          - bus_lines
                          - business_secretarial_schools
                          - buying_shopping_services
                          - cable_satellite_and_other_pay_television_and_radio
                          - camera_and_photographic_supply_stores
                          - candy_nut_and_confectionery_stores
                          - car_and_truck_dealers_new_used
                          - car_and_truck_dealers_used_only
                          - car_rental_agencies
                          - car_washes
                          - carpentry_services
                          - carpet_upholstery_cleaning
                          - caterers
                          - >-
                            charitable_and_social_service_organizations_fundraising
                          - chemicals_and_allied_products
                          - child_care_services
                          - childrens_and_infants_wear_stores
                          - chiropodists_podiatrists
                          - chiropractors
                          - cigar_stores_and_stands
                          - civic_social_fraternal_associations
                          - cleaning_and_maintenance
                          - clothing_rental
                          - colleges_universities
                          - commercial_equipment
                          - commercial_footwear
                          - commercial_photography_art_and_graphics
                          - commuter_transport_and_ferries
                          - computer_network_services
                          - computer_programming
                          - computer_repair
                          - computer_software_stores
                          - computers_peripherals_and_software
                          - concrete_work_services
                          - construction_materials
                          - consulting_public_relations
                          - correspondence_schools
                          - cosmetic_stores
                          - counseling_services
                          - country_clubs
                          - courier_services
                          - court_costs
                          - credit_reporting_agencies
                          - cruise_lines
                          - dairy_products_stores
                          - dance_hall_studios_schools
                          - dating_escort_services
                          - dentists_orthodontists
                          - department_stores
                          - detective_agencies
                          - digital_goods_applications
                          - digital_goods_games
                          - digital_goods_large_volume
                          - digital_goods_media
                          - direct_marketing_catalog_merchant
                          - >-
                            direct_marketing_combination_catalog_and_retail_merchant
                          - direct_marketing_inbound_telemarketing
                          - direct_marketing_insurance_services
                          - direct_marketing_other
                          - direct_marketing_outbound_telemarketing
                          - direct_marketing_subscription
                          - direct_marketing_travel
                          - discount_stores
                          - doctors
                          - door_to_door_sales
                          - drapery_window_covering_and_upholstery_stores
                          - drinking_places
                          - drug_stores_and_pharmacies
                          - drugs_drug_proprietaries_and_druggist_sundries
                          - dry_cleaners
                          - durable_goods
                          - duty_free_stores
                          - eating_places_restaurants
                          - educational_services
                          - electric_razor_stores
                          - electric_vehicle_charging
                          - electrical_parts_and_equipment
                          - electrical_services
                          - electronics_repair_shops
                          - electronics_stores
                          - elementary_secondary_schools
                          - emergency_services_gcas_visa_use_only
                          - employment_temp_agencies
                          - equipment_rental
                          - exterminating_services
                          - family_clothing_stores
                          - fast_food_restaurants
                          - financial_institutions
                          - fines_government_administrative_entities
                          - fireplace_fireplace_screens_and_accessories_stores
                          - floor_covering_stores
                          - florists
                          - florists_supplies_nursery_stock_and_flowers
                          - freezer_and_locker_meat_provisioners
                          - fuel_dealers_non_automotive
                          - funeral_services_crematories
                          - >-
                            furniture_home_furnishings_and_equipment_stores_except_appliances
                          - furniture_repair_refinishing
                          - furriers_and_fur_shops
                          - general_services
                          - gift_card_novelty_and_souvenir_shops
                          - glass_paint_and_wallpaper_stores
                          - glassware_crystal_stores
                          - golf_courses_public
                          - government_licensed_horse_dog_racing_us_region_only
                          - >-
                            government_licensed_online_casions_online_gambling_us_region_only
                          - government_owned_lotteries_non_us_region
                          - government_owned_lotteries_us_region_only
                          - government_services
                          - grocery_stores_supermarkets
                          - hardware_equipment_and_supplies
                          - hardware_stores
                          - health_and_beauty_spas
                          - hearing_aids_sales_and_supplies
                          - heating_plumbing_a_c
                          - hobby_toy_and_game_shops
                          - home_supply_warehouse_stores
                          - hospitals
                          - hotels_motels_and_resorts
                          - household_appliance_stores
                          - industrial_supplies
                          - information_retrieval_services
                          - insurance_default
                          - insurance_underwriting_premiums
                          - intra_company_purchases
                          - jewelry_stores_watches_clocks_and_silverware_stores
                          - landscaping_services
                          - laundries
                          - laundry_cleaning_services
                          - legal_services_attorneys
                          - luggage_and_leather_goods_stores
                          - lumber_building_materials_stores
                          - manual_cash_disburse
                          - marinas_service_and_supplies
                          - marketplaces
                          - masonry_stonework_and_plaster
                          - massage_parlors
                          - medical_and_dental_labs
                          - >-
                            medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                          - medical_services
                          - membership_organizations
                          - mens_and_boys_clothing_and_accessories_stores
                          - mens_womens_clothing_stores
                          - metal_service_centers
                          - miscellaneous
                          - miscellaneous_apparel_and_accessory_shops
                          - miscellaneous_auto_dealers
                          - miscellaneous_business_services
                          - miscellaneous_food_stores
                          - miscellaneous_general_merchandise
                          - miscellaneous_general_services
                          - miscellaneous_home_furnishing_specialty_stores
                          - miscellaneous_publishing_and_printing
                          - miscellaneous_recreation_services
                          - miscellaneous_repair_shops
                          - miscellaneous_specialty_retail
                          - mobile_home_dealers
                          - motion_picture_theaters
                          - motor_freight_carriers_and_trucking
                          - motor_homes_dealers
                          - motor_vehicle_supplies_and_new_parts
                          - motorcycle_shops_and_dealers
                          - motorcycle_shops_dealers
                          - >-
                            music_stores_musical_instruments_pianos_and_sheet_music
                          - news_dealers_and_newsstands
                          - non_fi_money_orders
                          - non_fi_stored_value_card_purchase_load
                          - nondurable_goods
                          - nurseries_lawn_and_garden_supply_stores
                          - nursing_personal_care
                          - office_and_commercial_furniture
                          - opticians_eyeglasses
                          - optometrists_ophthalmologist
                          - orthopedic_goods_prosthetic_devices
                          - osteopaths
                          - package_stores_beer_wine_and_liquor
                          - paints_varnishes_and_supplies
                          - parking_lots_garages
                          - passenger_railways
                          - pawn_shops
                          - pet_shops_pet_food_and_supplies
                          - petroleum_and_petroleum_products
                          - photo_developing
                          - >-
                            photographic_photocopy_microfilm_equipment_and_supplies
                          - photographic_studios
                          - picture_video_production
                          - piece_goods_notions_and_other_dry_goods
                          - plumbing_heating_equipment_and_supplies
                          - political_organizations
                          - postal_services_government_only
                          - precious_stones_and_metals_watches_and_jewelry
                          - professional_services
                          - public_warehousing_and_storage
                          - quick_copy_repro_and_blueprint
                          - railroads
                          - real_estate_agents_and_managers_rentals
                          - record_stores
                          - recreational_vehicle_rentals
                          - religious_goods_stores
                          - religious_organizations
                          - roofing_siding_sheet_metal
                          - secretarial_support_services
                          - security_brokers_dealers
                          - service_stations
                          - sewing_needlework_fabric_and_piece_goods_stores
                          - shoe_repair_hat_cleaning
                          - shoe_stores
                          - small_appliance_repair
                          - snowmobile_dealers
                          - special_trade_services
                          - specialty_cleaning
                          - sporting_goods_stores
                          - sporting_recreation_camps
                          - sports_and_riding_apparel_stores
                          - sports_clubs_fields
                          - stamp_and_coin_stores
                          - >-
                            stationary_office_supplies_printing_and_writing_paper
                          - stationery_stores_office_and_school_supply_stores
                          - swimming_pools_sales
                          - t_ui_travel_germany
                          - tailors_alterations
                          - tax_payments_government_agencies
                          - tax_preparation_services
                          - taxicabs_limousines
                          - telecommunication_equipment_and_telephone_sales
                          - telecommunication_services
                          - telegraph_services
                          - tent_and_awning_shops
                          - testing_laboratories
                          - theatrical_ticket_agencies
                          - timeshares
                          - tire_retreading_and_repair
                          - tolls_bridge_fees
                          - tourist_attractions_and_exhibits
                          - towing_services
                          - trailer_parks_campgrounds
                          - transportation_services
                          - travel_agencies_tour_operators
                          - truck_stop_iteration
                          - truck_utility_trailer_rentals
                          - typesetting_plate_making_and_related_services
                          - typewriter_stores
                          - u_s_federal_government_agencies_or_departments
                          - uniforms_commercial_clothing
                          - used_merchandise_and_secondhand_stores
                          - utilities
                          - variety_stores
                          - veterinary_services
                          - video_amusement_game_supplies
                          - video_game_arcades
                          - video_tape_rental_stores
                          - vocational_trade_schools
                          - watch_jewelry_repair
                          - welding_repair
                          - wholesale_clubs
                          - wig_and_toupee_stores
                          - wires_money_orders
                          - womens_accessory_and_specialty_shops
                          - womens_ready_to_wear_stores
                          - wrecking_and_salvage_yards
                        maxLength: 5000
                        type: string
                      type: array
                    blocked_categories:
                      items:
                        enum:
                          - ac_refrigeration_repair
                          - accounting_bookkeeping_services
                          - advertising_services
                          - agricultural_cooperative
                          - airlines_air_carriers
                          - airports_flying_fields
                          - ambulance_services
                          - amusement_parks_carnivals
                          - antique_reproductions
                          - antique_shops
                          - aquariums
                          - architectural_surveying_services
                          - art_dealers_and_galleries
                          - artists_supply_and_craft_shops
                          - auto_and_home_supply_stores
                          - auto_body_repair_shops
                          - auto_paint_shops
                          - auto_service_shops
                          - automated_cash_disburse
                          - automated_fuel_dispensers
                          - automobile_associations
                          - automotive_parts_and_accessories_stores
                          - automotive_tire_stores
                          - bail_and_bond_payments
                          - bakeries
                          - bands_orchestras
                          - barber_and_beauty_shops
                          - betting_casino_gambling
                          - bicycle_shops
                          - billiard_pool_establishments
                          - boat_dealers
                          - boat_rentals_and_leases
                          - book_stores
                          - books_periodicals_and_newspapers
                          - bowling_alleys
                          - bus_lines
                          - business_secretarial_schools
                          - buying_shopping_services
                          - cable_satellite_and_other_pay_television_and_radio
                          - camera_and_photographic_supply_stores
                          - candy_nut_and_confectionery_stores
                          - car_and_truck_dealers_new_used
                          - car_and_truck_dealers_used_only
                          - car_rental_agencies
                          - car_washes
                          - carpentry_services
                          - carpet_upholstery_cleaning
                          - caterers
                          - >-
                            charitable_and_social_service_organizations_fundraising
                          - chemicals_and_allied_products
                          - child_care_services
                          - childrens_and_infants_wear_stores
                          - chiropodists_podiatrists
                          - chiropractors
                          - cigar_stores_and_stands
                          - civic_social_fraternal_associations
                          - cleaning_and_maintenance
                          - clothing_rental
                          - colleges_universities
                          - commercial_equipment
                          - commercial_footwear
                          - commercial_photography_art_and_graphics
                          - commuter_transport_and_ferries
                          - computer_network_services
                          - computer_programming
                          - computer_repair
                          - computer_software_stores
                          - computers_peripherals_and_software
                          - concrete_work_services
                          - construction_materials
                          - consulting_public_relations
                          - correspondence_schools
                          - cosmetic_stores
                          - counseling_services
                          - country_clubs
                          - courier_services
                          - court_costs
                          - credit_reporting_agencies
                          - cruise_lines
                          - dairy_products_stores
                          - dance_hall_studios_schools
                          - dating_escort_services
                          - dentists_orthodontists
                          - department_stores
                          - detective_agencies
                          - digital_goods_applications
                          - digital_goods_games
                          - digital_goods_large_volume
                          - digital_goods_media
                          - direct_marketing_catalog_merchant
                          - >-
                            direct_marketing_combination_catalog_and_retail_merchant
                          - direct_marketing_inbound_telemarketing
                          - direct_marketing_insurance_services
                          - direct_marketing_other
                          - direct_marketing_outbound_telemarketing
                          - direct_marketing_subscription
                          - direct_marketing_travel
                          - discount_stores
                          - doctors
                          - door_to_door_sales
                          - drapery_window_covering_and_upholstery_stores
                          - drinking_places
                          - drug_stores_and_pharmacies
                          - drugs_drug_proprietaries_and_druggist_sundries
                          - dry_cleaners
                          - durable_goods
                          - duty_free_stores
                          - eating_places_restaurants
                          - educational_services
                          - electric_razor_stores
                          - electric_vehicle_charging
                          - electrical_parts_and_equipment
                          - electrical_services
                          - electronics_repair_shops
                          - electronics_stores
                          - elementary_secondary_schools
                          - emergency_services_gcas_visa_use_only
                          - employment_temp_agencies
                          - equipment_rental
                          - exterminating_services
                          - family_clothing_stores
                          - fast_food_restaurants
                          - financial_institutions
                          - fines_government_administrative_entities
                          - fireplace_fireplace_screens_and_accessories_stores
                          - floor_covering_stores
                          - florists
                          - florists_supplies_nursery_stock_and_flowers
                          - freezer_and_locker_meat_provisioners
                          - fuel_dealers_non_automotive
                          - funeral_services_crematories
                          - >-
                            furniture_home_furnishings_and_equipment_stores_except_appliances
                          - furniture_repair_refinishing
                          - furriers_and_fur_shops
                          - general_services
                          - gift_card_novelty_and_souvenir_shops
                          - glass_paint_and_wallpaper_stores
                          - glassware_crystal_stores
                          - golf_courses_public
                          - government_licensed_horse_dog_racing_us_region_only
                          - >-
                            government_licensed_online_casions_online_gambling_us_region_only
                          - government_owned_lotteries_non_us_region
                          - government_owned_lotteries_us_region_only
                          - government_services
                          - grocery_stores_supermarkets
                          - hardware_equipment_and_supplies
                          - hardware_stores
                          - health_and_beauty_spas
                          - hearing_aids_sales_and_supplies
                          - heating_plumbing_a_c
                          - hobby_toy_and_game_shops
                          - home_supply_warehouse_stores
                          - hospitals
                          - hotels_motels_and_resorts
                          - household_appliance_stores
                          - industrial_supplies
                          - information_retrieval_services
                          - insurance_default
                          - insurance_underwriting_premiums
                          - intra_company_purchases
                          - jewelry_stores_watches_clocks_and_silverware_stores
                          - landscaping_services
                          - laundries
                          - laundry_cleaning_services
                          - legal_services_attorneys
                          - luggage_and_leather_goods_stores
                          - lumber_building_materials_stores
                          - manual_cash_disburse
                          - marinas_service_and_supplies
                          - marketplaces
                          - masonry_stonework_and_plaster
                          - massage_parlors
                          - medical_and_dental_labs
                          - >-
                            medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                          - medical_services
                          - membership_organizations
                          - mens_and_boys_clothing_and_accessories_stores
                          - mens_womens_clothing_stores
                          - metal_service_centers
                          - miscellaneous
                          - miscellaneous_apparel_and_accessory_shops
                          - miscellaneous_auto_dealers
                          - miscellaneous_business_services
                          - miscellaneous_food_stores
                          - miscellaneous_general_merchandise
                          - miscellaneous_general_services
                          - miscellaneous_home_furnishing_specialty_stores
                          - miscellaneous_publishing_and_printing
                          - miscellaneous_recreation_services
                          - miscellaneous_repair_shops
                          - miscellaneous_specialty_retail
                          - mobile_home_dealers
                          - motion_picture_theaters
                          - motor_freight_carriers_and_trucking
                          - motor_homes_dealers
                          - motor_vehicle_supplies_and_new_parts
                          - motorcycle_shops_and_dealers
                          - motorcycle_shops_dealers
                          - >-
                            music_stores_musical_instruments_pianos_and_sheet_music
                          - news_dealers_and_newsstands
                          - non_fi_money_orders
                          - non_fi_stored_value_card_purchase_load
                          - nondurable_goods
                          - nurseries_lawn_and_garden_supply_stores
                          - nursing_personal_care
                          - office_and_commercial_furniture
                          - opticians_eyeglasses
                          - optometrists_ophthalmologist
                          - orthopedic_goods_prosthetic_devices
                          - osteopaths
                          - package_stores_beer_wine_and_liquor
                          - paints_varnishes_and_supplies
                          - parking_lots_garages
                          - passenger_railways
                          - pawn_shops
                          - pet_shops_pet_food_and_supplies
                          - petroleum_and_petroleum_products
                          - photo_developing
                          - >-
                            photographic_photocopy_microfilm_equipment_and_supplies
                          - photographic_studios
                          - picture_video_production
                          - piece_goods_notions_and_other_dry_goods
                          - plumbing_heating_equipment_and_supplies
                          - political_organizations
                          - postal_services_government_only
                          - precious_stones_and_metals_watches_and_jewelry
                          - professional_services
                          - public_warehousing_and_storage
                          - quick_copy_repro_and_blueprint
                          - railroads
                          - real_estate_agents_and_managers_rentals
                          - record_stores
                          - recreational_vehicle_rentals
                          - religious_goods_stores
                          - religious_organizations
                          - roofing_siding_sheet_metal
                          - secretarial_support_services
                          - security_brokers_dealers
                          - service_stations
                          - sewing_needlework_fabric_and_piece_goods_stores
                          - shoe_repair_hat_cleaning
                          - shoe_stores
                          - small_appliance_repair
                          - snowmobile_dealers
                          - special_trade_services
                          - specialty_cleaning
                          - sporting_goods_stores
                          - sporting_recreation_camps
                          - sports_and_riding_apparel_stores
                          - sports_clubs_fields
                          - stamp_and_coin_stores
                          - >-
                            stationary_office_supplies_printing_and_writing_paper
                          - stationery_stores_office_and_school_supply_stores
                          - swimming_pools_sales
                          - t_ui_travel_germany
                          - tailors_alterations
                          - tax_payments_government_agencies
                          - tax_preparation_services
                          - taxicabs_limousines
                          - telecommunication_equipment_and_telephone_sales
                          - telecommunication_services
                          - telegraph_services
                          - tent_and_awning_shops
                          - testing_laboratories
                          - theatrical_ticket_agencies
                          - timeshares
                          - tire_retreading_and_repair
                          - tolls_bridge_fees
                          - tourist_attractions_and_exhibits
                          - towing_services
                          - trailer_parks_campgrounds
                          - transportation_services
                          - travel_agencies_tour_operators
                          - truck_stop_iteration
                          - truck_utility_trailer_rentals
                          - typesetting_plate_making_and_related_services
                          - typewriter_stores
                          - u_s_federal_government_agencies_or_departments
                          - uniforms_commercial_clothing
                          - used_merchandise_and_secondhand_stores
                          - utilities
                          - variety_stores
                          - veterinary_services
                          - video_amusement_game_supplies
                          - video_game_arcades
                          - video_tape_rental_stores
                          - vocational_trade_schools
                          - watch_jewelry_repair
                          - welding_repair
                          - wholesale_clubs
                          - wig_and_toupee_stores
                          - wires_money_orders
                          - womens_accessory_and_specialty_shops
                          - womens_ready_to_wear_stores
                          - wrecking_and_salvage_yards
                        maxLength: 5000
                        type: string
                      type: array
                    spending_limits:
                      items:
                        properties:
                          amount:
                            type: integer
                          categories:
                            items:
                              enum:
                                - ac_refrigeration_repair
                                - accounting_bookkeeping_services
                                - advertising_services
                                - agricultural_cooperative
                                - airlines_air_carriers
                                - airports_flying_fields
                                - ambulance_services
                                - amusement_parks_carnivals
                                - antique_reproductions
                                - antique_shops
                                - aquariums
                                - architectural_surveying_services
                                - art_dealers_and_galleries
                                - artists_supply_and_craft_shops
                                - auto_and_home_supply_stores
                                - auto_body_repair_shops
                                - auto_paint_shops
                                - auto_service_shops
                                - automated_cash_disburse
                                - automated_fuel_dispensers
                                - automobile_associations
                                - automotive_parts_and_accessories_stores
                                - automotive_tire_stores
                                - bail_and_bond_payments
                                - bakeries
                                - bands_orchestras
                                - barber_and_beauty_shops
                                - betting_casino_gambling
                                - bicycle_shops
                                - billiard_pool_establishments
                                - boat_dealers
                                - boat_rentals_and_leases
                                - book_stores
                                - books_periodicals_and_newspapers
                                - bowling_alleys
                                - bus_lines
                                - business_secretarial_schools
                                - buying_shopping_services
                                - >-
                                  cable_satellite_and_other_pay_television_and_radio
                                - camera_and_photographic_supply_stores
                                - candy_nut_and_confectionery_stores
                                - car_and_truck_dealers_new_used
                                - car_and_truck_dealers_used_only
                                - car_rental_agencies
                                - car_washes
                                - carpentry_services
                                - carpet_upholstery_cleaning
                                - caterers
                                - >-
                                  charitable_and_social_service_organizations_fundraising
                                - chemicals_and_allied_products
                                - child_care_services
                                - childrens_and_infants_wear_stores
                                - chiropodists_podiatrists
                                - chiropractors
                                - cigar_stores_and_stands
                                - civic_social_fraternal_associations
                                - cleaning_and_maintenance
                                - clothing_rental
                                - colleges_universities
                                - commercial_equipment
                                - commercial_footwear
                                - commercial_photography_art_and_graphics
                                - commuter_transport_and_ferries
                                - computer_network_services
                                - computer_programming
                                - computer_repair
                                - computer_software_stores
                                - computers_peripherals_and_software
                                - concrete_work_services
                                - construction_materials
                                - consulting_public_relations
                                - correspondence_schools
                                - cosmetic_stores
                                - counseling_services
                                - country_clubs
                                - courier_services
                                - court_costs
                                - credit_reporting_agencies
                                - cruise_lines
                                - dairy_products_stores
                                - dance_hall_studios_schools
                                - dating_escort_services
                                - dentists_orthodontists
                                - department_stores
                                - detective_agencies
                                - digital_goods_applications
                                - digital_goods_games
                                - digital_goods_large_volume
                                - digital_goods_media
                                - direct_marketing_catalog_merchant
                                - >-
                                  direct_marketing_combination_catalog_and_retail_merchant
                                - direct_marketing_inbound_telemarketing
                                - direct_marketing_insurance_services
                                - direct_marketing_other
                                - direct_marketing_outbound_telemarketing
                                - direct_marketing_subscription
                                - direct_marketing_travel
                                - discount_stores
                                - doctors
                                - door_to_door_sales
                                - drapery_window_covering_and_upholstery_stores
                                - drinking_places
                                - drug_stores_and_pharmacies
                                - drugs_drug_proprietaries_and_druggist_sundries
                                - dry_cleaners
                                - durable_goods
                                - duty_free_stores
                                - eating_places_restaurants
                                - educational_services
                                - electric_razor_stores
                                - electric_vehicle_charging
                                - electrical_parts_and_equipment
                                - electrical_services
                                - electronics_repair_shops
                                - electronics_stores
                                - elementary_secondary_schools
                                - emergency_services_gcas_visa_use_only
                                - employment_temp_agencies
                                - equipment_rental
                                - exterminating_services
                                - family_clothing_stores
                                - fast_food_restaurants
                                - financial_institutions
                                - fines_government_administrative_entities
                                - >-
                                  fireplace_fireplace_screens_and_accessories_stores
                                - floor_covering_stores
                                - florists
                                - florists_supplies_nursery_stock_and_flowers
                                - freezer_and_locker_meat_provisioners
                                - fuel_dealers_non_automotive
                                - funeral_services_crematories
                                - >-
                                  furniture_home_furnishings_and_equipment_stores_except_appliances
                                - furniture_repair_refinishing
                                - furriers_and_fur_shops
                                - general_services
                                - gift_card_novelty_and_souvenir_shops
                                - glass_paint_and_wallpaper_stores
                                - glassware_crystal_stores
                                - golf_courses_public
                                - >-
                                  government_licensed_horse_dog_racing_us_region_only
                                - >-
                                  government_licensed_online_casions_online_gambling_us_region_only
                                - government_owned_lotteries_non_us_region
                                - government_owned_lotteries_us_region_only
                                - government_services
                                - grocery_stores_supermarkets
                                - hardware_equipment_and_supplies
                                - hardware_stores
                                - health_and_beauty_spas
                                - hearing_aids_sales_and_supplies
                                - heating_plumbing_a_c
                                - hobby_toy_and_game_shops
                                - home_supply_warehouse_stores
                                - hospitals
                                - hotels_motels_and_resorts
                                - household_appliance_stores
                                - industrial_supplies
                                - information_retrieval_services
                                - insurance_default
                                - insurance_underwriting_premiums
                                - intra_company_purchases
                                - >-
                                  jewelry_stores_watches_clocks_and_silverware_stores
                                - landscaping_services
                                - laundries
                                - laundry_cleaning_services
                                - legal_services_attorneys
                                - luggage_and_leather_goods_stores
                                - lumber_building_materials_stores
                                - manual_cash_disburse
                                - marinas_service_and_supplies
                                - marketplaces
                                - masonry_stonework_and_plaster
                                - massage_parlors
                                - medical_and_dental_labs
                                - >-
                                  medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                                - medical_services
                                - membership_organizations
                                - mens_and_boys_clothing_and_accessories_stores
                                - mens_womens_clothing_stores
                                - metal_service_centers
                                - miscellaneous
                                - miscellaneous_apparel_and_accessory_shops
                                - miscellaneous_auto_dealers
                                - miscellaneous_business_services
                                - miscellaneous_food_stores
                                - miscellaneous_general_merchandise
                                - miscellaneous_general_services
                                - miscellaneous_home_furnishing_specialty_stores
                                - miscellaneous_publishing_and_printing
                                - miscellaneous_recreation_services
                                - miscellaneous_repair_shops
                                - miscellaneous_specialty_retail
                                - mobile_home_dealers
                                - motion_picture_theaters
                                - motor_freight_carriers_and_trucking
                                - motor_homes_dealers
                                - motor_vehicle_supplies_and_new_parts
                                - motorcycle_shops_and_dealers
                                - motorcycle_shops_dealers
                                - >-
                                  music_stores_musical_instruments_pianos_and_sheet_music
                                - news_dealers_and_newsstands
                                - non_fi_money_orders
                                - non_fi_stored_value_card_purchase_load
                                - nondurable_goods
                                - nurseries_lawn_and_garden_supply_stores
                                - nursing_personal_care
                                - office_and_commercial_furniture
                                - opticians_eyeglasses
                                - optometrists_ophthalmologist
                                - orthopedic_goods_prosthetic_devices
                                - osteopaths
                                - package_stores_beer_wine_and_liquor
                                - paints_varnishes_and_supplies
                                - parking_lots_garages
                                - passenger_railways
                                - pawn_shops
                                - pet_shops_pet_food_and_supplies
                                - petroleum_and_petroleum_products
                                - photo_developing
                                - >-
                                  photographic_photocopy_microfilm_equipment_and_supplies
                                - photographic_studios
                                - picture_video_production
                                - piece_goods_notions_and_other_dry_goods
                                - plumbing_heating_equipment_and_supplies
                                - political_organizations
                                - postal_services_government_only
                                - precious_stones_and_metals_watches_and_jewelry
                                - professional_services
                                - public_warehousing_and_storage
                                - quick_copy_repro_and_blueprint
                                - railroads
                                - real_estate_agents_and_managers_rentals
                                - record_stores
                                - recreational_vehicle_rentals
                                - religious_goods_stores
                                - religious_organizations
                                - roofing_siding_sheet_metal
                                - secretarial_support_services
                                - security_brokers_dealers
                                - service_stations
                                - >-
                                  sewing_needlework_fabric_and_piece_goods_stores
                                - shoe_repair_hat_cleaning
                                - shoe_stores
                                - small_appliance_repair
                                - snowmobile_dealers
                                - special_trade_services
                                - specialty_cleaning
                                - sporting_goods_stores
                                - sporting_recreation_camps
                                - sports_and_riding_apparel_stores
                                - sports_clubs_fields
                                - stamp_and_coin_stores
                                - >-
                                  stationary_office_supplies_printing_and_writing_paper
                                - >-
                                  stationery_stores_office_and_school_supply_stores
                                - swimming_pools_sales
                                - t_ui_travel_germany
                                - tailors_alterations
                                - tax_payments_government_agencies
                                - tax_preparation_services
                                - taxicabs_limousines
                                - >-
                                  telecommunication_equipment_and_telephone_sales
                                - telecommunication_services
                                - telegraph_services
                                - tent_and_awning_shops
                                - testing_laboratories
                                - theatrical_ticket_agencies
                                - timeshares
                                - tire_retreading_and_repair
                                - tolls_bridge_fees
                                - tourist_attractions_and_exhibits
                                - towing_services
                                - trailer_parks_campgrounds
                                - transportation_services
                                - travel_agencies_tour_operators
                                - truck_stop_iteration
                                - truck_utility_trailer_rentals
                                - typesetting_plate_making_and_related_services
                                - typewriter_stores
                                - u_s_federal_government_agencies_or_departments
                                - uniforms_commercial_clothing
                                - used_merchandise_and_secondhand_stores
                                - utilities
                                - variety_stores
                                - veterinary_services
                                - video_amusement_game_supplies
                                - video_game_arcades
                                - video_tape_rental_stores
                                - vocational_trade_schools
                                - watch_jewelry_repair
                                - welding_repair
                                - wholesale_clubs
                                - wig_and_toupee_stores
                                - wires_money_orders
                                - womens_accessory_and_specialty_shops
                                - womens_ready_to_wear_stores
                                - wrecking_and_salvage_yards
                              maxLength: 5000
                              type: string
                            type: array
                          interval:
                            enum:
                              - all_time
                              - daily
                              - monthly
                              - per_authorization
                              - weekly
                              - yearly
                            type: string
                        required:
                          - amount
                          - interval
                        title: spending_limits_param
                        type: object
                      type: array
                  title: authorization_controls_param
                  type: object
                status:
                  description: >-
                    Whether authorizations can be approved on this card. May be
                    blocked from activating cards depending on past-due
                    Cardholder requirements. Defaults to `inactive`.
                  enum:
                    - active
                    - inactive
                  type: string
                type:
                  description: >-
                    The type of card to issue. Possible values are `physical` or
                    `virtual`.
                  enum:
                    - physical
                    - virtual
                  type: string
              required:
                - currency
                - type
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.card'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Issuing Card
      tags:
        - Issuing
        - Cards
  '/v1/issuing/cards/{card}':
    get:
      description: <p>Retrieves an Issuing <code>Card</code> object.</p>
      operationId: GetIssuingCardsCard
      parameters:
        - in: path
          name: card
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.card'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Card
      tags:
        - Issuing
        - Cards
    post:
      description: >-
        <p>Updates the specified Issuing <code>Card</code> object by setting the
        values of the parameters passed. Any parameters not provided will be
        left unchanged.</p>
      operationId: PostIssuingCardsCard
      parameters:
        - in: path
          name: card
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              pin:
                explode: true
                style: deepObject
              spending_controls:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                cancellation_reason:
                  description: Reason why the `status` of this card is `canceled`.
                  enum:
                    - lost
                    - stolen
                  type: string
                  x-stripeBypassValidation: true
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                pin:
                  description: The desired new PIN for this card.
                  properties:
                    encrypted_number:
                      maxLength: 5000
                      type: string
                  title: encrypted_pin_param
                  type: object
                spending_controls:
                  description: >-
                    Rules that control spending for this card. Refer to our
                    [documentation](https://stripe.com/docs/issuing/controls/spending-controls)
                    for more details.
                  properties:
                    allowed_categories:
                      items:
                        enum:
                          - ac_refrigeration_repair
                          - accounting_bookkeeping_services
                          - advertising_services
                          - agricultural_cooperative
                          - airlines_air_carriers
                          - airports_flying_fields
                          - ambulance_services
                          - amusement_parks_carnivals
                          - antique_reproductions
                          - antique_shops
                          - aquariums
                          - architectural_surveying_services
                          - art_dealers_and_galleries
                          - artists_supply_and_craft_shops
                          - auto_and_home_supply_stores
                          - auto_body_repair_shops
                          - auto_paint_shops
                          - auto_service_shops
                          - automated_cash_disburse
                          - automated_fuel_dispensers
                          - automobile_associations
                          - automotive_parts_and_accessories_stores
                          - automotive_tire_stores
                          - bail_and_bond_payments
                          - bakeries
                          - bands_orchestras
                          - barber_and_beauty_shops
                          - betting_casino_gambling
                          - bicycle_shops
                          - billiard_pool_establishments
                          - boat_dealers
                          - boat_rentals_and_leases
                          - book_stores
                          - books_periodicals_and_newspapers
                          - bowling_alleys
                          - bus_lines
                          - business_secretarial_schools
                          - buying_shopping_services
                          - cable_satellite_and_other_pay_television_and_radio
                          - camera_and_photographic_supply_stores
                          - candy_nut_and_confectionery_stores
                          - car_and_truck_dealers_new_used
                          - car_and_truck_dealers_used_only
                          - car_rental_agencies
                          - car_washes
                          - carpentry_services
                          - carpet_upholstery_cleaning
                          - caterers
                          - >-
                            charitable_and_social_service_organizations_fundraising
                          - chemicals_and_allied_products
                          - child_care_services
                          - childrens_and_infants_wear_stores
                          - chiropodists_podiatrists
                          - chiropractors
                          - cigar_stores_and_stands
                          - civic_social_fraternal_associations
                          - cleaning_and_maintenance
                          - clothing_rental
                          - colleges_universities
                          - commercial_equipment
                          - commercial_footwear
                          - commercial_photography_art_and_graphics
                          - commuter_transport_and_ferries
                          - computer_network_services
                          - computer_programming
                          - computer_repair
                          - computer_software_stores
                          - computers_peripherals_and_software
                          - concrete_work_services
                          - construction_materials
                          - consulting_public_relations
                          - correspondence_schools
                          - cosmetic_stores
                          - counseling_services
                          - country_clubs
                          - courier_services
                          - court_costs
                          - credit_reporting_agencies
                          - cruise_lines
                          - dairy_products_stores
                          - dance_hall_studios_schools
                          - dating_escort_services
                          - dentists_orthodontists
                          - department_stores
                          - detective_agencies
                          - digital_goods_applications
                          - digital_goods_games
                          - digital_goods_large_volume
                          - digital_goods_media
                          - direct_marketing_catalog_merchant
                          - >-
                            direct_marketing_combination_catalog_and_retail_merchant
                          - direct_marketing_inbound_telemarketing
                          - direct_marketing_insurance_services
                          - direct_marketing_other
                          - direct_marketing_outbound_telemarketing
                          - direct_marketing_subscription
                          - direct_marketing_travel
                          - discount_stores
                          - doctors
                          - door_to_door_sales
                          - drapery_window_covering_and_upholstery_stores
                          - drinking_places
                          - drug_stores_and_pharmacies
                          - drugs_drug_proprietaries_and_druggist_sundries
                          - dry_cleaners
                          - durable_goods
                          - duty_free_stores
                          - eating_places_restaurants
                          - educational_services
                          - electric_razor_stores
                          - electric_vehicle_charging
                          - electrical_parts_and_equipment
                          - electrical_services
                          - electronics_repair_shops
                          - electronics_stores
                          - elementary_secondary_schools
                          - emergency_services_gcas_visa_use_only
                          - employment_temp_agencies
                          - equipment_rental
                          - exterminating_services
                          - family_clothing_stores
                          - fast_food_restaurants
                          - financial_institutions
                          - fines_government_administrative_entities
                          - fireplace_fireplace_screens_and_accessories_stores
                          - floor_covering_stores
                          - florists
                          - florists_supplies_nursery_stock_and_flowers
                          - freezer_and_locker_meat_provisioners
                          - fuel_dealers_non_automotive
                          - funeral_services_crematories
                          - >-
                            furniture_home_furnishings_and_equipment_stores_except_appliances
                          - furniture_repair_refinishing
                          - furriers_and_fur_shops
                          - general_services
                          - gift_card_novelty_and_souvenir_shops
                          - glass_paint_and_wallpaper_stores
                          - glassware_crystal_stores
                          - golf_courses_public
                          - government_licensed_horse_dog_racing_us_region_only
                          - >-
                            government_licensed_online_casions_online_gambling_us_region_only
                          - government_owned_lotteries_non_us_region
                          - government_owned_lotteries_us_region_only
                          - government_services
                          - grocery_stores_supermarkets
                          - hardware_equipment_and_supplies
                          - hardware_stores
                          - health_and_beauty_spas
                          - hearing_aids_sales_and_supplies
                          - heating_plumbing_a_c
                          - hobby_toy_and_game_shops
                          - home_supply_warehouse_stores
                          - hospitals
                          - hotels_motels_and_resorts
                          - household_appliance_stores
                          - industrial_supplies
                          - information_retrieval_services
                          - insurance_default
                          - insurance_underwriting_premiums
                          - intra_company_purchases
                          - jewelry_stores_watches_clocks_and_silverware_stores
                          - landscaping_services
                          - laundries
                          - laundry_cleaning_services
                          - legal_services_attorneys
                          - luggage_and_leather_goods_stores
                          - lumber_building_materials_stores
                          - manual_cash_disburse
                          - marinas_service_and_supplies
                          - marketplaces
                          - masonry_stonework_and_plaster
                          - massage_parlors
                          - medical_and_dental_labs
                          - >-
                            medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                          - medical_services
                          - membership_organizations
                          - mens_and_boys_clothing_and_accessories_stores
                          - mens_womens_clothing_stores
                          - metal_service_centers
                          - miscellaneous
                          - miscellaneous_apparel_and_accessory_shops
                          - miscellaneous_auto_dealers
                          - miscellaneous_business_services
                          - miscellaneous_food_stores
                          - miscellaneous_general_merchandise
                          - miscellaneous_general_services
                          - miscellaneous_home_furnishing_specialty_stores
                          - miscellaneous_publishing_and_printing
                          - miscellaneous_recreation_services
                          - miscellaneous_repair_shops
                          - miscellaneous_specialty_retail
                          - mobile_home_dealers
                          - motion_picture_theaters
                          - motor_freight_carriers_and_trucking
                          - motor_homes_dealers
                          - motor_vehicle_supplies_and_new_parts
                          - motorcycle_shops_and_dealers
                          - motorcycle_shops_dealers
                          - >-
                            music_stores_musical_instruments_pianos_and_sheet_music
                          - news_dealers_and_newsstands
                          - non_fi_money_orders
                          - non_fi_stored_value_card_purchase_load
                          - nondurable_goods
                          - nurseries_lawn_and_garden_supply_stores
                          - nursing_personal_care
                          - office_and_commercial_furniture
                          - opticians_eyeglasses
                          - optometrists_ophthalmologist
                          - orthopedic_goods_prosthetic_devices
                          - osteopaths
                          - package_stores_beer_wine_and_liquor
                          - paints_varnishes_and_supplies
                          - parking_lots_garages
                          - passenger_railways
                          - pawn_shops
                          - pet_shops_pet_food_and_supplies
                          - petroleum_and_petroleum_products
                          - photo_developing
                          - >-
                            photographic_photocopy_microfilm_equipment_and_supplies
                          - photographic_studios
                          - picture_video_production
                          - piece_goods_notions_and_other_dry_goods
                          - plumbing_heating_equipment_and_supplies
                          - political_organizations
                          - postal_services_government_only
                          - precious_stones_and_metals_watches_and_jewelry
                          - professional_services
                          - public_warehousing_and_storage
                          - quick_copy_repro_and_blueprint
                          - railroads
                          - real_estate_agents_and_managers_rentals
                          - record_stores
                          - recreational_vehicle_rentals
                          - religious_goods_stores
                          - religious_organizations
                          - roofing_siding_sheet_metal
                          - secretarial_support_services
                          - security_brokers_dealers
                          - service_stations
                          - sewing_needlework_fabric_and_piece_goods_stores
                          - shoe_repair_hat_cleaning
                          - shoe_stores
                          - small_appliance_repair
                          - snowmobile_dealers
                          - special_trade_services
                          - specialty_cleaning
                          - sporting_goods_stores
                          - sporting_recreation_camps
                          - sports_and_riding_apparel_stores
                          - sports_clubs_fields
                          - stamp_and_coin_stores
                          - >-
                            stationary_office_supplies_printing_and_writing_paper
                          - stationery_stores_office_and_school_supply_stores
                          - swimming_pools_sales
                          - t_ui_travel_germany
                          - tailors_alterations
                          - tax_payments_government_agencies
                          - tax_preparation_services
                          - taxicabs_limousines
                          - telecommunication_equipment_and_telephone_sales
                          - telecommunication_services
                          - telegraph_services
                          - tent_and_awning_shops
                          - testing_laboratories
                          - theatrical_ticket_agencies
                          - timeshares
                          - tire_retreading_and_repair
                          - tolls_bridge_fees
                          - tourist_attractions_and_exhibits
                          - towing_services
                          - trailer_parks_campgrounds
                          - transportation_services
                          - travel_agencies_tour_operators
                          - truck_stop_iteration
                          - truck_utility_trailer_rentals
                          - typesetting_plate_making_and_related_services
                          - typewriter_stores
                          - u_s_federal_government_agencies_or_departments
                          - uniforms_commercial_clothing
                          - used_merchandise_and_secondhand_stores
                          - utilities
                          - variety_stores
                          - veterinary_services
                          - video_amusement_game_supplies
                          - video_game_arcades
                          - video_tape_rental_stores
                          - vocational_trade_schools
                          - watch_jewelry_repair
                          - welding_repair
                          - wholesale_clubs
                          - wig_and_toupee_stores
                          - wires_money_orders
                          - womens_accessory_and_specialty_shops
                          - womens_ready_to_wear_stores
                          - wrecking_and_salvage_yards
                        maxLength: 5000
                        type: string
                      type: array
                    blocked_categories:
                      items:
                        enum:
                          - ac_refrigeration_repair
                          - accounting_bookkeeping_services
                          - advertising_services
                          - agricultural_cooperative
                          - airlines_air_carriers
                          - airports_flying_fields
                          - ambulance_services
                          - amusement_parks_carnivals
                          - antique_reproductions
                          - antique_shops
                          - aquariums
                          - architectural_surveying_services
                          - art_dealers_and_galleries
                          - artists_supply_and_craft_shops
                          - auto_and_home_supply_stores
                          - auto_body_repair_shops
                          - auto_paint_shops
                          - auto_service_shops
                          - automated_cash_disburse
                          - automated_fuel_dispensers
                          - automobile_associations
                          - automotive_parts_and_accessories_stores
                          - automotive_tire_stores
                          - bail_and_bond_payments
                          - bakeries
                          - bands_orchestras
                          - barber_and_beauty_shops
                          - betting_casino_gambling
                          - bicycle_shops
                          - billiard_pool_establishments
                          - boat_dealers
                          - boat_rentals_and_leases
                          - book_stores
                          - books_periodicals_and_newspapers
                          - bowling_alleys
                          - bus_lines
                          - business_secretarial_schools
                          - buying_shopping_services
                          - cable_satellite_and_other_pay_television_and_radio
                          - camera_and_photographic_supply_stores
                          - candy_nut_and_confectionery_stores
                          - car_and_truck_dealers_new_used
                          - car_and_truck_dealers_used_only
                          - car_rental_agencies
                          - car_washes
                          - carpentry_services
                          - carpet_upholstery_cleaning
                          - caterers
                          - >-
                            charitable_and_social_service_organizations_fundraising
                          - chemicals_and_allied_products
                          - child_care_services
                          - childrens_and_infants_wear_stores
                          - chiropodists_podiatrists
                          - chiropractors
                          - cigar_stores_and_stands
                          - civic_social_fraternal_associations
                          - cleaning_and_maintenance
                          - clothing_rental
                          - colleges_universities
                          - commercial_equipment
                          - commercial_footwear
                          - commercial_photography_art_and_graphics
                          - commuter_transport_and_ferries
                          - computer_network_services
                          - computer_programming
                          - computer_repair
                          - computer_software_stores
                          - computers_peripherals_and_software
                          - concrete_work_services
                          - construction_materials
                          - consulting_public_relations
                          - correspondence_schools
                          - cosmetic_stores
                          - counseling_services
                          - country_clubs
                          - courier_services
                          - court_costs
                          - credit_reporting_agencies
                          - cruise_lines
                          - dairy_products_stores
                          - dance_hall_studios_schools
                          - dating_escort_services
                          - dentists_orthodontists
                          - department_stores
                          - detective_agencies
                          - digital_goods_applications
                          - digital_goods_games
                          - digital_goods_large_volume
                          - digital_goods_media
                          - direct_marketing_catalog_merchant
                          - >-
                            direct_marketing_combination_catalog_and_retail_merchant
                          - direct_marketing_inbound_telemarketing
                          - direct_marketing_insurance_services
                          - direct_marketing_other
                          - direct_marketing_outbound_telemarketing
                          - direct_marketing_subscription
                          - direct_marketing_travel
                          - discount_stores
                          - doctors
                          - door_to_door_sales
                          - drapery_window_covering_and_upholstery_stores
                          - drinking_places
                          - drug_stores_and_pharmacies
                          - drugs_drug_proprietaries_and_druggist_sundries
                          - dry_cleaners
                          - durable_goods
                          - duty_free_stores
                          - eating_places_restaurants
                          - educational_services
                          - electric_razor_stores
                          - electric_vehicle_charging
                          - electrical_parts_and_equipment
                          - electrical_services
                          - electronics_repair_shops
                          - electronics_stores
                          - elementary_secondary_schools
                          - emergency_services_gcas_visa_use_only
                          - employment_temp_agencies
                          - equipment_rental
                          - exterminating_services
                          - family_clothing_stores
                          - fast_food_restaurants
                          - financial_institutions
                          - fines_government_administrative_entities
                          - fireplace_fireplace_screens_and_accessories_stores
                          - floor_covering_stores
                          - florists
                          - florists_supplies_nursery_stock_and_flowers
                          - freezer_and_locker_meat_provisioners
                          - fuel_dealers_non_automotive
                          - funeral_services_crematories
                          - >-
                            furniture_home_furnishings_and_equipment_stores_except_appliances
                          - furniture_repair_refinishing
                          - furriers_and_fur_shops
                          - general_services
                          - gift_card_novelty_and_souvenir_shops
                          - glass_paint_and_wallpaper_stores
                          - glassware_crystal_stores
                          - golf_courses_public
                          - government_licensed_horse_dog_racing_us_region_only
                          - >-
                            government_licensed_online_casions_online_gambling_us_region_only
                          - government_owned_lotteries_non_us_region
                          - government_owned_lotteries_us_region_only
                          - government_services
                          - grocery_stores_supermarkets
                          - hardware_equipment_and_supplies
                          - hardware_stores
                          - health_and_beauty_spas
                          - hearing_aids_sales_and_supplies
                          - heating_plumbing_a_c
                          - hobby_toy_and_game_shops
                          - home_supply_warehouse_stores
                          - hospitals
                          - hotels_motels_and_resorts
                          - household_appliance_stores
                          - industrial_supplies
                          - information_retrieval_services
                          - insurance_default
                          - insurance_underwriting_premiums
                          - intra_company_purchases
                          - jewelry_stores_watches_clocks_and_silverware_stores
                          - landscaping_services
                          - laundries
                          - laundry_cleaning_services
                          - legal_services_attorneys
                          - luggage_and_leather_goods_stores
                          - lumber_building_materials_stores
                          - manual_cash_disburse
                          - marinas_service_and_supplies
                          - marketplaces
                          - masonry_stonework_and_plaster
                          - massage_parlors
                          - medical_and_dental_labs
                          - >-
                            medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                          - medical_services
                          - membership_organizations
                          - mens_and_boys_clothing_and_accessories_stores
                          - mens_womens_clothing_stores
                          - metal_service_centers
                          - miscellaneous
                          - miscellaneous_apparel_and_accessory_shops
                          - miscellaneous_auto_dealers
                          - miscellaneous_business_services
                          - miscellaneous_food_stores
                          - miscellaneous_general_merchandise
                          - miscellaneous_general_services
                          - miscellaneous_home_furnishing_specialty_stores
                          - miscellaneous_publishing_and_printing
                          - miscellaneous_recreation_services
                          - miscellaneous_repair_shops
                          - miscellaneous_specialty_retail
                          - mobile_home_dealers
                          - motion_picture_theaters
                          - motor_freight_carriers_and_trucking
                          - motor_homes_dealers
                          - motor_vehicle_supplies_and_new_parts
                          - motorcycle_shops_and_dealers
                          - motorcycle_shops_dealers
                          - >-
                            music_stores_musical_instruments_pianos_and_sheet_music
                          - news_dealers_and_newsstands
                          - non_fi_money_orders
                          - non_fi_stored_value_card_purchase_load
                          - nondurable_goods
                          - nurseries_lawn_and_garden_supply_stores
                          - nursing_personal_care
                          - office_and_commercial_furniture
                          - opticians_eyeglasses
                          - optometrists_ophthalmologist
                          - orthopedic_goods_prosthetic_devices
                          - osteopaths
                          - package_stores_beer_wine_and_liquor
                          - paints_varnishes_and_supplies
                          - parking_lots_garages
                          - passenger_railways
                          - pawn_shops
                          - pet_shops_pet_food_and_supplies
                          - petroleum_and_petroleum_products
                          - photo_developing
                          - >-
                            photographic_photocopy_microfilm_equipment_and_supplies
                          - photographic_studios
                          - picture_video_production
                          - piece_goods_notions_and_other_dry_goods
                          - plumbing_heating_equipment_and_supplies
                          - political_organizations
                          - postal_services_government_only
                          - precious_stones_and_metals_watches_and_jewelry
                          - professional_services
                          - public_warehousing_and_storage
                          - quick_copy_repro_and_blueprint
                          - railroads
                          - real_estate_agents_and_managers_rentals
                          - record_stores
                          - recreational_vehicle_rentals
                          - religious_goods_stores
                          - religious_organizations
                          - roofing_siding_sheet_metal
                          - secretarial_support_services
                          - security_brokers_dealers
                          - service_stations
                          - sewing_needlework_fabric_and_piece_goods_stores
                          - shoe_repair_hat_cleaning
                          - shoe_stores
                          - small_appliance_repair
                          - snowmobile_dealers
                          - special_trade_services
                          - specialty_cleaning
                          - sporting_goods_stores
                          - sporting_recreation_camps
                          - sports_and_riding_apparel_stores
                          - sports_clubs_fields
                          - stamp_and_coin_stores
                          - >-
                            stationary_office_supplies_printing_and_writing_paper
                          - stationery_stores_office_and_school_supply_stores
                          - swimming_pools_sales
                          - t_ui_travel_germany
                          - tailors_alterations
                          - tax_payments_government_agencies
                          - tax_preparation_services
                          - taxicabs_limousines
                          - telecommunication_equipment_and_telephone_sales
                          - telecommunication_services
                          - telegraph_services
                          - tent_and_awning_shops
                          - testing_laboratories
                          - theatrical_ticket_agencies
                          - timeshares
                          - tire_retreading_and_repair
                          - tolls_bridge_fees
                          - tourist_attractions_and_exhibits
                          - towing_services
                          - trailer_parks_campgrounds
                          - transportation_services
                          - travel_agencies_tour_operators
                          - truck_stop_iteration
                          - truck_utility_trailer_rentals
                          - typesetting_plate_making_and_related_services
                          - typewriter_stores
                          - u_s_federal_government_agencies_or_departments
                          - uniforms_commercial_clothing
                          - used_merchandise_and_secondhand_stores
                          - utilities
                          - variety_stores
                          - veterinary_services
                          - video_amusement_game_supplies
                          - video_game_arcades
                          - video_tape_rental_stores
                          - vocational_trade_schools
                          - watch_jewelry_repair
                          - welding_repair
                          - wholesale_clubs
                          - wig_and_toupee_stores
                          - wires_money_orders
                          - womens_accessory_and_specialty_shops
                          - womens_ready_to_wear_stores
                          - wrecking_and_salvage_yards
                        maxLength: 5000
                        type: string
                      type: array
                    spending_limits:
                      items:
                        properties:
                          amount:
                            type: integer
                          categories:
                            items:
                              enum:
                                - ac_refrigeration_repair
                                - accounting_bookkeeping_services
                                - advertising_services
                                - agricultural_cooperative
                                - airlines_air_carriers
                                - airports_flying_fields
                                - ambulance_services
                                - amusement_parks_carnivals
                                - antique_reproductions
                                - antique_shops
                                - aquariums
                                - architectural_surveying_services
                                - art_dealers_and_galleries
                                - artists_supply_and_craft_shops
                                - auto_and_home_supply_stores
                                - auto_body_repair_shops
                                - auto_paint_shops
                                - auto_service_shops
                                - automated_cash_disburse
                                - automated_fuel_dispensers
                                - automobile_associations
                                - automotive_parts_and_accessories_stores
                                - automotive_tire_stores
                                - bail_and_bond_payments
                                - bakeries
                                - bands_orchestras
                                - barber_and_beauty_shops
                                - betting_casino_gambling
                                - bicycle_shops
                                - billiard_pool_establishments
                                - boat_dealers
                                - boat_rentals_and_leases
                                - book_stores
                                - books_periodicals_and_newspapers
                                - bowling_alleys
                                - bus_lines
                                - business_secretarial_schools
                                - buying_shopping_services
                                - >-
                                  cable_satellite_and_other_pay_television_and_radio
                                - camera_and_photographic_supply_stores
                                - candy_nut_and_confectionery_stores
                                - car_and_truck_dealers_new_used
                                - car_and_truck_dealers_used_only
                                - car_rental_agencies
                                - car_washes
                                - carpentry_services
                                - carpet_upholstery_cleaning
                                - caterers
                                - >-
                                  charitable_and_social_service_organizations_fundraising
                                - chemicals_and_allied_products
                                - child_care_services
                                - childrens_and_infants_wear_stores
                                - chiropodists_podiatrists
                                - chiropractors
                                - cigar_stores_and_stands
                                - civic_social_fraternal_associations
                                - cleaning_and_maintenance
                                - clothing_rental
                                - colleges_universities
                                - commercial_equipment
                                - commercial_footwear
                                - commercial_photography_art_and_graphics
                                - commuter_transport_and_ferries
                                - computer_network_services
                                - computer_programming
                                - computer_repair
                                - computer_software_stores
                                - computers_peripherals_and_software
                                - concrete_work_services
                                - construction_materials
                                - consulting_public_relations
                                - correspondence_schools
                                - cosmetic_stores
                                - counseling_services
                                - country_clubs
                                - courier_services
                                - court_costs
                                - credit_reporting_agencies
                                - cruise_lines
                                - dairy_products_stores
                                - dance_hall_studios_schools
                                - dating_escort_services
                                - dentists_orthodontists
                                - department_stores
                                - detective_agencies
                                - digital_goods_applications
                                - digital_goods_games
                                - digital_goods_large_volume
                                - digital_goods_media
                                - direct_marketing_catalog_merchant
                                - >-
                                  direct_marketing_combination_catalog_and_retail_merchant
                                - direct_marketing_inbound_telemarketing
                                - direct_marketing_insurance_services
                                - direct_marketing_other
                                - direct_marketing_outbound_telemarketing
                                - direct_marketing_subscription
                                - direct_marketing_travel
                                - discount_stores
                                - doctors
                                - door_to_door_sales
                                - drapery_window_covering_and_upholstery_stores
                                - drinking_places
                                - drug_stores_and_pharmacies
                                - drugs_drug_proprietaries_and_druggist_sundries
                                - dry_cleaners
                                - durable_goods
                                - duty_free_stores
                                - eating_places_restaurants
                                - educational_services
                                - electric_razor_stores
                                - electric_vehicle_charging
                                - electrical_parts_and_equipment
                                - electrical_services
                                - electronics_repair_shops
                                - electronics_stores
                                - elementary_secondary_schools
                                - emergency_services_gcas_visa_use_only
                                - employment_temp_agencies
                                - equipment_rental
                                - exterminating_services
                                - family_clothing_stores
                                - fast_food_restaurants
                                - financial_institutions
                                - fines_government_administrative_entities
                                - >-
                                  fireplace_fireplace_screens_and_accessories_stores
                                - floor_covering_stores
                                - florists
                                - florists_supplies_nursery_stock_and_flowers
                                - freezer_and_locker_meat_provisioners
                                - fuel_dealers_non_automotive
                                - funeral_services_crematories
                                - >-
                                  furniture_home_furnishings_and_equipment_stores_except_appliances
                                - furniture_repair_refinishing
                                - furriers_and_fur_shops
                                - general_services
                                - gift_card_novelty_and_souvenir_shops
                                - glass_paint_and_wallpaper_stores
                                - glassware_crystal_stores
                                - golf_courses_public
                                - >-
                                  government_licensed_horse_dog_racing_us_region_only
                                - >-
                                  government_licensed_online_casions_online_gambling_us_region_only
                                - government_owned_lotteries_non_us_region
                                - government_owned_lotteries_us_region_only
                                - government_services
                                - grocery_stores_supermarkets
                                - hardware_equipment_and_supplies
                                - hardware_stores
                                - health_and_beauty_spas
                                - hearing_aids_sales_and_supplies
                                - heating_plumbing_a_c
                                - hobby_toy_and_game_shops
                                - home_supply_warehouse_stores
                                - hospitals
                                - hotels_motels_and_resorts
                                - household_appliance_stores
                                - industrial_supplies
                                - information_retrieval_services
                                - insurance_default
                                - insurance_underwriting_premiums
                                - intra_company_purchases
                                - >-
                                  jewelry_stores_watches_clocks_and_silverware_stores
                                - landscaping_services
                                - laundries
                                - laundry_cleaning_services
                                - legal_services_attorneys
                                - luggage_and_leather_goods_stores
                                - lumber_building_materials_stores
                                - manual_cash_disburse
                                - marinas_service_and_supplies
                                - marketplaces
                                - masonry_stonework_and_plaster
                                - massage_parlors
                                - medical_and_dental_labs
                                - >-
                                  medical_dental_ophthalmic_and_hospital_equipment_and_supplies
                                - medical_services
                                - membership_organizations
                                - mens_and_boys_clothing_and_accessories_stores
                                - mens_womens_clothing_stores
                                - metal_service_centers
                                - miscellaneous
                                - miscellaneous_apparel_and_accessory_shops
                                - miscellaneous_auto_dealers
                                - miscellaneous_business_services
                                - miscellaneous_food_stores
                                - miscellaneous_general_merchandise
                                - miscellaneous_general_services
                                - miscellaneous_home_furnishing_specialty_stores
                                - miscellaneous_publishing_and_printing
                                - miscellaneous_recreation_services
                                - miscellaneous_repair_shops
                                - miscellaneous_specialty_retail
                                - mobile_home_dealers
                                - motion_picture_theaters
                                - motor_freight_carriers_and_trucking
                                - motor_homes_dealers
                                - motor_vehicle_supplies_and_new_parts
                                - motorcycle_shops_and_dealers
                                - motorcycle_shops_dealers
                                - >-
                                  music_stores_musical_instruments_pianos_and_sheet_music
                                - news_dealers_and_newsstands
                                - non_fi_money_orders
                                - non_fi_stored_value_card_purchase_load
                                - nondurable_goods
                                - nurseries_lawn_and_garden_supply_stores
                                - nursing_personal_care
                                - office_and_commercial_furniture
                                - opticians_eyeglasses
                                - optometrists_ophthalmologist
                                - orthopedic_goods_prosthetic_devices
                                - osteopaths
                                - package_stores_beer_wine_and_liquor
                                - paints_varnishes_and_supplies
                                - parking_lots_garages
                                - passenger_railways
                                - pawn_shops
                                - pet_shops_pet_food_and_supplies
                                - petroleum_and_petroleum_products
                                - photo_developing
                                - >-
                                  photographic_photocopy_microfilm_equipment_and_supplies
                                - photographic_studios
                                - picture_video_production
                                - piece_goods_notions_and_other_dry_goods
                                - plumbing_heating_equipment_and_supplies
                                - political_organizations
                                - postal_services_government_only
                                - precious_stones_and_metals_watches_and_jewelry
                                - professional_services
                                - public_warehousing_and_storage
                                - quick_copy_repro_and_blueprint
                                - railroads
                                - real_estate_agents_and_managers_rentals
                                - record_stores
                                - recreational_vehicle_rentals
                                - religious_goods_stores
                                - religious_organizations
                                - roofing_siding_sheet_metal
                                - secretarial_support_services
                                - security_brokers_dealers
                                - service_stations
                                - >-
                                  sewing_needlework_fabric_and_piece_goods_stores
                                - shoe_repair_hat_cleaning
                                - shoe_stores
                                - small_appliance_repair
                                - snowmobile_dealers
                                - special_trade_services
                                - specialty_cleaning
                                - sporting_goods_stores
                                - sporting_recreation_camps
                                - sports_and_riding_apparel_stores
                                - sports_clubs_fields
                                - stamp_and_coin_stores
                                - >-
                                  stationary_office_supplies_printing_and_writing_paper
                                - >-
                                  stationery_stores_office_and_school_supply_stores
                                - swimming_pools_sales
                                - t_ui_travel_germany
                                - tailors_alterations
                                - tax_payments_government_agencies
                                - tax_preparation_services
                                - taxicabs_limousines
                                - >-
                                  telecommunication_equipment_and_telephone_sales
                                - telecommunication_services
                                - telegraph_services
                                - tent_and_awning_shops
                                - testing_laboratories
                                - theatrical_ticket_agencies
                                - timeshares
                                - tire_retreading_and_repair
                                - tolls_bridge_fees
                                - tourist_attractions_and_exhibits
                                - towing_services
                                - trailer_parks_campgrounds
                                - transportation_services
                                - travel_agencies_tour_operators
                                - truck_stop_iteration
                                - truck_utility_trailer_rentals
                                - typesetting_plate_making_and_related_services
                                - typewriter_stores
                                - u_s_federal_government_agencies_or_departments
                                - uniforms_commercial_clothing
                                - used_merchandise_and_secondhand_stores
                                - utilities
                                - variety_stores
                                - veterinary_services
                                - video_amusement_game_supplies
                                - video_game_arcades
                                - video_tape_rental_stores
                                - vocational_trade_schools
                                - watch_jewelry_repair
                                - welding_repair
                                - wholesale_clubs
                                - wig_and_toupee_stores
                                - wires_money_orders
                                - womens_accessory_and_specialty_shops
                                - womens_ready_to_wear_stores
                                - wrecking_and_salvage_yards
                              maxLength: 5000
                              type: string
                            type: array
                          interval:
                            enum:
                              - all_time
                              - daily
                              - monthly
                              - per_authorization
                              - weekly
                              - yearly
                            type: string
                        required:
                          - amount
                          - interval
                        title: spending_limits_param
                        type: object
                      type: array
                  title: authorization_controls_param
                  type: object
                status:
                  description: >-
                    Dictates whether authorizations can be approved on this
                    card. May be blocked from activating cards depending on
                    past-due Cardholder requirements. Defaults to `inactive`. If
                    this card is being canceled because it was lost or stolen,
                    this information should be provided as
                    `cancellation_reason`.
                  enum:
                    - active
                    - canceled
                    - inactive
                  type: string
                  x-stripeBypassValidation: true
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.card'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Issuing Card
      tags:
        - Issuing
        - Cards
  /v1/issuing/disputes:
    get:
      description: >-
        <p>Returns a list of Issuing <code>Dispute</code> objects. The objects
        are sorted in descending order by creation date, with the most recently
        created object appearing first.</p>
      operationId: GetIssuingDisputes
      parameters:
        - description: >-
            Select Issuing disputes that were created during the given date
            interval.
          explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Select Issuing disputes with the given status.
          in: query
          name: status
          required: false
          schema:
            enum:
              - expired
              - lost
              - submitted
              - unsubmitted
              - won
            type: string
          style: form
        - description: Select the Issuing dispute for the given transaction.
          in: query
          name: transaction
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/issuing.dispute'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/issuing/disputes
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: IssuingDisputeList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Disputes
      tags:
        - Issuing
        - Disputes
    post:
      description: >-
        <p>Creates an Issuing <code>Dispute</code> object. Individual pieces of
        evidence within the <code>evidence</code> object are optional at this
        point. Stripe only validates that required evidence is present during
        submission. Refer to <a
        href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute
        reasons and evidence</a> for more details about evidence
        requirements.</p>
      operationId: PostIssuingDisputes
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              evidence:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              treasury:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The dispute amount in the card's currency and in the
                    [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal). If
                    not set, defaults to the full transaction amount.
                  type: integer
                evidence:
                  description: Evidence provided for the dispute.
                  properties:
                    canceled:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            canceled_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            cancellation_policy_provided:
                              anyOf:
                                - type: boolean
                                - enum:
                                    - ''
                                  type: string
                            cancellation_reason:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            expected_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_description:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_type:
                              enum:
                                - ''
                                - merchandise
                                - service
                              type: string
                            return_status:
                              enum:
                                - ''
                                - merchant_rejected
                                - successful
                              type: string
                            returned_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                          title: canceled
                          type: object
                        - enum:
                            - ''
                          type: string
                    duplicate:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            card_statement:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            cash_receipt:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            check_image:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            original_transaction:
                              maxLength: 5000
                              type: string
                          title: duplicate
                          type: object
                        - enum:
                            - ''
                          type: string
                    fraudulent:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                          title: fraudulent
                          type: object
                        - enum:
                            - ''
                          type: string
                    merchandise_not_as_described:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            received_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            return_description:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            return_status:
                              enum:
                                - ''
                                - merchant_rejected
                                - successful
                              type: string
                            returned_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                          title: merchandise_not_as_described
                          type: object
                        - enum:
                            - ''
                          type: string
                    not_received:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            expected_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_description:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_type:
                              enum:
                                - ''
                                - merchandise
                                - service
                              type: string
                          title: not_received
                          type: object
                        - enum:
                            - ''
                          type: string
                    other:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_description:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_type:
                              enum:
                                - ''
                                - merchandise
                                - service
                              type: string
                          title: other
                          type: object
                        - enum:
                            - ''
                          type: string
                    reason:
                      enum:
                        - canceled
                        - duplicate
                        - fraudulent
                        - merchandise_not_as_described
                        - not_received
                        - other
                        - service_not_as_described
                      type: string
                      x-stripeBypassValidation: true
                    service_not_as_described:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            canceled_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            cancellation_reason:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            received_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                          title: service_not_as_described
                          type: object
                        - enum:
                            - ''
                          type: string
                  title: evidence_param
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                transaction:
                  description: >-
                    The ID of the issuing transaction to create a dispute for.
                    For transaction on Treasury FinancialAccounts, use
                    `treasury.received_debit`.
                  maxLength: 5000
                  type: string
                treasury:
                  description: Params for disputes related to Treasury FinancialAccounts
                  properties:
                    received_debit:
                      maxLength: 5000
                      type: string
                  required:
                    - received_debit
                  title: treasury_param
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.dispute'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Issuing Dispute
      tags:
        - Issuing
        - Disputes
  '/v1/issuing/disputes/{dispute}':
    get:
      description: <p>Retrieves an Issuing <code>Dispute</code> object.</p>
      operationId: GetIssuingDisputesDispute
      parameters:
        - in: path
          name: dispute
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.dispute'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Dispute
      tags:
        - Issuing
        - Disputes
    post:
      description: >-
        <p>Updates the specified Issuing <code>Dispute</code> object by setting
        the values of the parameters passed. Any parameters not provided will be
        left unchanged. Properties on the <code>evidence</code> object can be
        unset by passing in an empty string.</p>
      operationId: PostIssuingDisputesDispute
      parameters:
        - in: path
          name: dispute
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              evidence:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The dispute amount in the card's currency and in the
                    [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal).
                  type: integer
                evidence:
                  description: Evidence provided for the dispute.
                  properties:
                    canceled:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            canceled_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            cancellation_policy_provided:
                              anyOf:
                                - type: boolean
                                - enum:
                                    - ''
                                  type: string
                            cancellation_reason:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            expected_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_description:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_type:
                              enum:
                                - ''
                                - merchandise
                                - service
                              type: string
                            return_status:
                              enum:
                                - ''
                                - merchant_rejected
                                - successful
                              type: string
                            returned_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                          title: canceled
                          type: object
                        - enum:
                            - ''
                          type: string
                    duplicate:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            card_statement:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            cash_receipt:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            check_image:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            original_transaction:
                              maxLength: 5000
                              type: string
                          title: duplicate
                          type: object
                        - enum:
                            - ''
                          type: string
                    fraudulent:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                          title: fraudulent
                          type: object
                        - enum:
                            - ''
                          type: string
                    merchandise_not_as_described:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            received_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            return_description:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            return_status:
                              enum:
                                - ''
                                - merchant_rejected
                                - successful
                              type: string
                            returned_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                          title: merchandise_not_as_described
                          type: object
                        - enum:
                            - ''
                          type: string
                    not_received:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            expected_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_description:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_type:
                              enum:
                                - ''
                                - merchandise
                                - service
                              type: string
                          title: not_received
                          type: object
                        - enum:
                            - ''
                          type: string
                    other:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_description:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            product_type:
                              enum:
                                - ''
                                - merchandise
                                - service
                              type: string
                          title: other
                          type: object
                        - enum:
                            - ''
                          type: string
                    reason:
                      enum:
                        - canceled
                        - duplicate
                        - fraudulent
                        - merchandise_not_as_described
                        - not_received
                        - other
                        - service_not_as_described
                      type: string
                      x-stripeBypassValidation: true
                    service_not_as_described:
                      anyOf:
                        - properties:
                            additional_documentation:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            canceled_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                            cancellation_reason:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            explanation:
                              anyOf:
                                - maxLength: 1500
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                            received_at:
                              anyOf:
                                - format: unix-time
                                  type: integer
                                - enum:
                                    - ''
                                  type: string
                          title: service_not_as_described
                          type: object
                        - enum:
                            - ''
                          type: string
                  title: evidence_param
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.dispute'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Issuing Dispute
      tags:
        - Issuing
        - Disputes
  '/v1/issuing/disputes/{dispute}/submit':
    post:
      description: >-
        <p>Submits an Issuing <code>Dispute</code> to the card network. Stripe
        validates that all evidence fields required for the dispute’s reason are
        present. For more details, see <a
        href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute
        reasons and evidence</a>.</p>
      operationId: PostIssuingDisputesDisputeSubmit
      parameters:
        - in: path
          name: dispute
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.dispute'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Submit Issuing Dispute
      tags:
        - Submit
        - Issuing
        - Disputes
  /v1/issuing/settlements:
    get:
      description: >-
        <p>Returns a list of Issuing <code>Settlement</code> objects. The
        objects are sorted in descending order by creation date, with the most
        recently created object appearing first.</p>
      operationId: GetIssuingSettlements
      parameters:
        - description: >-
            Only return issuing settlements that were created during the given
            date interval.
          explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/issuing.settlement'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/issuing/settlements
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: IssuingSettlementList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Settlements
      tags:
        - Issuing
        - Settlements
  '/v1/issuing/settlements/{settlement}':
    get:
      description: <p>Retrieves an Issuing <code>Settlement</code> object.</p>
      operationId: GetIssuingSettlementsSettlement
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: settlement
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.settlement'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Settlement
      tags:
        - Issuing
        - Settlements
    post:
      description: >-
        <p>Updates the specified Issuing <code>Settlement</code> object by
        setting the values of the parameters passed. Any parameters not provided
        will be left unchanged.</p>
      operationId: PostIssuingSettlementsSettlement
      parameters:
        - in: path
          name: settlement
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.settlement'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Issuing Settlement
      tags:
        - Issuing
        - Settlements
  /v1/issuing/tokens:
    get:
      description: <p>Lists all Issuing <code>Token</code> objects for a given card.</p>
      operationId: GetIssuingTokens
      parameters:
        - description: The Issuing card identifier to list tokens for.
          in: query
          name: card
          required: true
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Select Issuing tokens that were created during the given date
            interval.
          explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Select Issuing tokens with the given status.
          in: query
          name: status
          required: false
          schema:
            enum:
              - active
              - deleted
              - requested
              - suspended
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/issuing.token'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: IssuingNetworkTokenList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Tokens
      tags:
        - Issuing
        - Tokens
  '/v1/issuing/tokens/{token}':
    get:
      description: <p>Retrieves an Issuing <code>Token</code> object.</p>
      operationId: GetIssuingTokensToken
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: token
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.token'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Token
      tags:
        - Issuing
        - Tokens
    post:
      description: >-
        <p>Attempts to update the specified Issuing <code>Token</code> object to
        the status specified.</p>
      operationId: PostIssuingTokensToken
      parameters:
        - in: path
          name: token
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                status:
                  description: Specifies which status the token should be updated to.
                  enum:
                    - active
                    - deleted
                    - suspended
                  type: string
              required:
                - status
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.token'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Issuing Token
      tags:
        - Issuing
        - Tokens
  /v1/issuing/transactions:
    get:
      description: >-
        <p>Returns a list of Issuing <code>Transaction</code> objects. The
        objects are sorted in descending order by creation date, with the most
        recently created object appearing first.</p>
      operationId: GetIssuingTransactions
      parameters:
        - description: Only return transactions that belong to the given card.
          in: query
          name: card
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Only return transactions that belong to the given cardholder.
          in: query
          name: cardholder
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return transactions that were created during the given date
            interval.
          explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return transactions that have the given type. One of `capture`
            or `refund`.
          in: query
          name: type
          required: false
          schema:
            enum:
              - capture
              - refund
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/issuing.transaction'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/issuing/transactions
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: IssuingTransactionList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Transactions
      tags:
        - Issuing
        - Transactions
  '/v1/issuing/transactions/{transaction}':
    get:
      description: <p>Retrieves an Issuing <code>Transaction</code> object.</p>
      operationId: GetIssuingTransactionsTransaction
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: transaction
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Issuing Transaction
      tags:
        - Issuing
        - Transactions
    post:
      description: >-
        <p>Updates the specified Issuing <code>Transaction</code> object by
        setting the values of the parameters passed. Any parameters not provided
        will be left unchanged.</p>
      operationId: PostIssuingTransactionsTransaction
      parameters:
        - in: path
          name: transaction
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/issuing.transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Issuing Transaction
      tags:
        - Issuing
        - Transactions
components:
  schemas:
    error:
      description: An error response from the Stripe API
      properties:
        error:
          $ref: '#/components/schemas/api_errors'
      required:
        - error
      type: object
    issuing.authorization:
      description: >-
        When an [issued card](https://stripe.com/docs/issuing) is used to make a
        purchase, an Issuing `Authorization`

        object is created.
        [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations)
        must be approved for the

        purchase to be completed successfully.


        Related guide: [Issued card
        authorizations](https://stripe.com/docs/issuing/purchases/authorizations)
      properties:
        amount:
          description: >-
            The total amount that was authorized or rejected. This amount is in
            `currency` and in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal). `amount`
            should be the same as `merchant_amount`, unless `currency` and
            `merchant_currency` are different.
          type: integer
        amount_details:
          anyOf:
            - $ref: '#/components/schemas/issuing_authorization_amount_details'
          description: >-
            Detailed breakdown of amount components. These amounts are
            denominated in `currency` and in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal).
          nullable: true
        approved:
          description: Whether the authorization has been approved.
          type: boolean
        authorization_method:
          description: How the card details were provided.
          enum:
            - chip
            - contactless
            - keyed_in
            - online
            - swipe
          type: string
        balance_transactions:
          description: List of balance transactions associated with this authorization.
          items:
            $ref: '#/components/schemas/balance_transaction'
          type: array
        card:
          $ref: '#/components/schemas/issuing.card'
        cardholder:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.cardholder'
          description: The cardholder to whom this authorization belongs.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.cardholder'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            The currency of the cardholder. This currency can be different from
            the currency presented at authorization and the `merchant_currency`
            field on this authorization. Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        merchant_amount:
          description: >-
            The total amount that was authorized or rejected. This amount is in
            the `merchant_currency` and in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal).
            `merchant_amount` should be the same as `amount`, unless
            `merchant_currency` and `currency` are different.
          type: integer
        merchant_currency:
          description: >-
            The local currency that was presented to the cardholder for the
            authorization. This currency can be different from the cardholder
            currency and the `currency` field on this authorization.
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        merchant_data:
          $ref: '#/components/schemas/issuing_authorization_merchant_data'
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        network_data:
          anyOf:
            - $ref: '#/components/schemas/issuing_authorization_network_data'
          description: >-
            Details about the authorization, such as identifiers, set by the
            card network.
          nullable: true
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - issuing.authorization
          type: string
        pending_request:
          anyOf:
            - $ref: '#/components/schemas/issuing_authorization_pending_request'
          description: >-
            The pending authorization request. This field will only be non-null
            during an `issuing_authorization.request` webhook.
          nullable: true
        request_history:
          description: >-
            History of every time a `pending_request` authorization was
            approved/declined, either by you directly or by Stripe (e.g. based
            on your spending_controls). If the merchant changes the
            authorization by performing an incremental authorization, you can
            look at this field to see the previous requests for the
            authorization. This field can be helpful in determining why a given
            authorization was approved/declined.
          items:
            $ref: '#/components/schemas/issuing_authorization_request'
          type: array
        status:
          description: The current status of the authorization in its lifecycle.
          enum:
            - closed
            - pending
            - reversed
          type: string
        token:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.token'
          description: >-
            [Token](https://stripe.com/docs/api/issuing/tokens/object) object
            used for this authorization. If a network token was not used for
            this authorization, this field will be null.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.token'
        transactions:
          description: >-
            List of
            [transactions](https://stripe.com/docs/api/issuing/transactions)
            associated with this authorization.
          items:
            $ref: '#/components/schemas/issuing.transaction'
          type: array
        treasury:
          anyOf:
            - $ref: '#/components/schemas/issuing_authorization_treasury'
          description: >-
            [Treasury](https://stripe.com/docs/api/treasury) details related to
            this authorization if it was created on a
            [FinancialAccount](https://stripe.com/docs/api/treasury/financial_accounts).
          nullable: true
        verification_data:
          $ref: '#/components/schemas/issuing_authorization_verification_data'
        wallet:
          description: >-
            The digital wallet used for this transaction. One of `apple_pay`,
            `google_pay`, or `samsung_pay`. Will populate as `null` when no
            digital wallet was utilized.
          maxLength: 5000
          nullable: true
          type: string
      required:
        - amount
        - approved
        - authorization_method
        - balance_transactions
        - card
        - created
        - currency
        - id
        - livemode
        - merchant_amount
        - merchant_currency
        - merchant_data
        - metadata
        - object
        - request_history
        - status
        - transactions
        - verification_data
      title: IssuingAuthorization
      type: object
      x-expandableFields:
        - amount_details
        - balance_transactions
        - card
        - cardholder
        - merchant_data
        - network_data
        - pending_request
        - request_history
        - token
        - transactions
        - treasury
        - verification_data
      x-resourceId: issuing.authorization
    issuing.cardholder:
      description: >-
        An Issuing `Cardholder` object represents an individual or business
        entity who is [issued](https://stripe.com/docs/issuing) cards.


        Related guide: [How to create a
        cardholder](https://stripe.com/docs/issuing/cards#create-cardholder)
      properties:
        billing:
          $ref: '#/components/schemas/issuing_cardholder_address'
        company:
          anyOf:
            - $ref: '#/components/schemas/issuing_cardholder_company'
          description: Additional information about a `company` cardholder.
          nullable: true
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        email:
          description: The cardholder's email address.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        individual:
          anyOf:
            - $ref: '#/components/schemas/issuing_cardholder_individual'
          description: Additional information about an `individual` cardholder.
          nullable: true
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        name:
          description: The cardholder's name. This will be printed on cards issued to them.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - issuing.cardholder
          type: string
        phone_number:
          description: >-
            The cardholder's phone number. This is required for all cardholders
            who will be creating EU cards. See the [3D Secure
            documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied)
            for more details.
          maxLength: 5000
          nullable: true
          type: string
        preferred_locales:
          description: >-
            The cardholder’s preferred locales (languages), ordered by
            preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
             This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
          items:
            enum:
              - de
              - en
              - es
              - fr
              - it
            type: string
          nullable: true
          type: array
        requirements:
          $ref: '#/components/schemas/issuing_cardholder_requirements'
        spending_controls:
          anyOf:
            - $ref: '#/components/schemas/issuing_cardholder_authorization_controls'
          description: >-
            Rules that control spending across this cardholder's cards. Refer to
            our
            [documentation](https://stripe.com/docs/issuing/controls/spending-controls)
            for more details.
          nullable: true
        status:
          description: >-
            Specifies whether to permit authorizations on this cardholder's
            cards.
          enum:
            - active
            - blocked
            - inactive
          type: string
        type:
          description: >-
            One of `individual` or `company`. See [Choose a cardholder
            type](https://stripe.com/docs/issuing/other/choose-cardholder) for
            more details.
          enum:
            - company
            - individual
          type: string
          x-stripeBypassValidation: true
      required:
        - billing
        - created
        - id
        - livemode
        - metadata
        - name
        - object
        - requirements
        - status
        - type
      title: IssuingCardholder
      type: object
      x-expandableFields:
        - billing
        - company
        - individual
        - requirements
        - spending_controls
      x-resourceId: issuing.cardholder
    issuing.card:
      description: >-
        You can [create physical or virtual
        cards](https://stripe.com/docs/issuing/cards) that are issued to
        cardholders.
      properties:
        brand:
          description: The brand of the card.
          maxLength: 5000
          type: string
        cancellation_reason:
          description: The reason why the card was canceled.
          enum:
            - design_rejected
            - lost
            - stolen
          nullable: true
          type: string
          x-stripeBypassValidation: true
        cardholder:
          $ref: '#/components/schemas/issuing.cardholder'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Supported currencies are `usd` in the US, `eur` in the
            EU, and `gbp` in the UK.
          type: string
        cvc:
          description: >-
            The card's CVC. For security reasons, this is only available for
            virtual cards, and will be omitted unless you explicitly request it
            with [the `expand`
            parameter](https://stripe.com/docs/api/expanding_objects).
            Additionally, it's only available via the ["Retrieve a card"
            endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not
            via "List all cards" or any other endpoint.
          maxLength: 5000
          type: string
        exp_month:
          description: The expiration month of the card.
          type: integer
        exp_year:
          description: The expiration year of the card.
          type: integer
        financial_account:
          description: The financial account this card is attached to.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        last4:
          description: The last 4 digits of the card number.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        number:
          description: >-
            The full unredacted card number. For security reasons, this is only
            available for virtual cards, and will be omitted unless you
            explicitly request it with [the `expand`
            parameter](https://stripe.com/docs/api/expanding_objects).
            Additionally, it's only available via the ["Retrieve a card"
            endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not
            via "List all cards" or any other endpoint.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - issuing.card
          type: string
        replaced_by:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.card'
          description: 'The latest card that replaces this card, if any.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.card'
        replacement_for:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.card'
          description: 'The card this card replaces, if any.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.card'
        replacement_reason:
          description: The reason why the previous card needed to be replaced.
          enum:
            - damaged
            - expired
            - lost
            - stolen
          nullable: true
          type: string
          x-stripeBypassValidation: true
        shipping:
          anyOf:
            - $ref: '#/components/schemas/issuing_card_shipping'
          description: Where and how the card will be shipped.
          nullable: true
        spending_controls:
          $ref: '#/components/schemas/issuing_card_authorization_controls'
        status:
          description: >-
            Whether authorizations can be approved on this card. May be blocked
            from activating cards depending on past-due Cardholder requirements.
            Defaults to `inactive`.
          enum:
            - active
            - canceled
            - inactive
          type: string
          x-stripeBypassValidation: true
        type:
          description: The type of the card.
          enum:
            - physical
            - virtual
          type: string
        wallets:
          anyOf:
            - $ref: '#/components/schemas/issuing_card_wallets'
          description: >-
            Information relating to digital wallets (like Apple Pay and Google
            Pay).
          nullable: true
      required:
        - brand
        - cardholder
        - created
        - currency
        - exp_month
        - exp_year
        - id
        - last4
        - livemode
        - metadata
        - object
        - spending_controls
        - status
        - type
      title: IssuingCard
      type: object
      x-expandableFields:
        - cardholder
        - replaced_by
        - replacement_for
        - shipping
        - spending_controls
        - wallets
      x-resourceId: issuing.card
    issuing.dispute:
      description: >-
        As a [card issuer](https://stripe.com/docs/issuing), you can dispute
        transactions that the cardholder does not recognize, suspects to be
        fraudulent, or has other issues with.


        Related guide: [Issuing
        disputes](https://stripe.com/docs/issuing/purchases/disputes)
      properties:
        amount:
          description: >-
            Disputed amount in the card's currency and in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal). Usually the
            amount of the `transaction`, but can differ (usually because of
            currency fluctuation).
          type: integer
        balance_transactions:
          description: List of balance transactions associated with the dispute.
          items:
            $ref: '#/components/schemas/balance_transaction'
          nullable: true
          type: array
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: The currency the `transaction` was made in.
          type: string
        evidence:
          $ref: '#/components/schemas/issuing_dispute_evidence'
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - issuing.dispute
          type: string
        status:
          description: Current status of the dispute.
          enum:
            - expired
            - lost
            - submitted
            - unsubmitted
            - won
          type: string
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.transaction'
          description: The transaction being disputed.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.transaction'
        treasury:
          anyOf:
            - $ref: '#/components/schemas/issuing_dispute_treasury'
          description: >-
            [Treasury](https://stripe.com/docs/api/treasury) details related to
            this dispute if it was created on a
            [FinancialAccount](/docs/api/treasury/financial_accounts
          nullable: true
      required:
        - amount
        - created
        - currency
        - evidence
        - id
        - livemode
        - metadata
        - object
        - status
        - transaction
      title: IssuingDispute
      type: object
      x-expandableFields:
        - balance_transactions
        - evidence
        - transaction
        - treasury
      x-resourceId: issuing.dispute
    issuing.settlement:
      description: >-
        When a non-stripe BIN is used, any use of an [issued
        card](https://stripe.com/docs/issuing) must be settled directly with the
        card network. The net amount owed is represented by an Issuing
        `Settlement` object.
      properties:
        bin:
          description: The Bank Identification Number reflecting this settlement record.
          maxLength: 5000
          type: string
        clearing_date:
          description: >-
            The date that the transactions are cleared and posted to user's
            accounts.
          type: integer
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        interchange_fees:
          description: >-
            The total interchange received as reimbursement for the
            transactions.
          type: integer
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        net_total:
          description: The total net amount required to settle with the network.
          type: integer
        network:
          description: 'The card network for this settlement report. One of ["visa"]'
          enum:
            - visa
          type: string
        network_fees:
          description: The total amount of fees owed to the network.
          type: integer
        network_settlement_identifier:
          description: The Settlement Identification Number assigned by the network.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - issuing.settlement
          type: string
        settlement_service:
          description: One of `international` or `uk_national_net`.
          maxLength: 5000
          type: string
        transaction_count:
          description: The total number of transactions reflected in this settlement.
          type: integer
        transaction_volume:
          description: The total transaction amount reflected in this settlement.
          type: integer
      required:
        - bin
        - clearing_date
        - created
        - currency
        - id
        - interchange_fees
        - livemode
        - metadata
        - net_total
        - network
        - network_fees
        - network_settlement_identifier
        - object
        - settlement_service
        - transaction_count
        - transaction_volume
      title: IssuingSettlement
      type: object
      x-expandableFields: []
      x-resourceId: issuing.settlement
    issuing.token:
      description: >-
        An issuing token object is created when an issued card is added to a
        digital wallet. As a [card issuer](https://stripe.com/docs/issuing), you
        can [view and manage these
        tokens](https://stripe.com/docs/issuing/controls/token-management)
        through Stripe.
      properties:
        card:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.card'
          description: Card associated with this token.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.card'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        device_fingerprint:
          description: >-
            The hashed ID derived from the device ID from the card network
            associated with the token
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        last4:
          description: The last four digits of the token.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        network:
          description: The token service provider / card network associated with the token.
          enum:
            - mastercard
            - visa
          type: string
        network_data:
          $ref: '#/components/schemas/issuing_network_token_network_data'
        network_updated_at:
          description: >-
            Time at which the token was last updated by the card network.
            Measured in seconds since the Unix epoch.
          format: unix-time
          type: integer
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - issuing.token
          type: string
        status:
          description: The usage state of the token.
          enum:
            - active
            - deleted
            - requested
            - suspended
          type: string
        wallet_provider:
          description: 'The digital wallet for this token, if one was used.'
          enum:
            - apple_pay
            - google_pay
            - samsung_pay
          type: string
      required:
        - card
        - created
        - id
        - livemode
        - network
        - network_updated_at
        - object
        - status
      title: IssuingNetworkToken
      type: object
      x-expandableFields:
        - card
        - network_data
      x-resourceId: issuing.token
    issuing.transaction:
      description: >-
        Any use of an [issued card](https://stripe.com/docs/issuing) that
        results in funds entering or leaving

        your Stripe account, such as a completed purchase or refund, is
        represented by an Issuing

        `Transaction` object.


        Related guide: [Issued card
        transactions](https://stripe.com/docs/issuing/purchases/transactions)
      properties:
        amount:
          description: >-
            The transaction amount, which will be reflected in your balance.
            This amount is in your currency and in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal).
          type: integer
        amount_details:
          anyOf:
            - $ref: '#/components/schemas/issuing_transaction_amount_details'
          description: >-
            Detailed breakdown of amount components. These amounts are
            denominated in `currency` and in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal).
          nullable: true
        authorization:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.authorization'
          description: The `Authorization` object that led to this transaction.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.authorization'
        balance_transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/balance_transaction'
          description: >-
            ID of the [balance
            transaction](https://stripe.com/docs/api/balance_transactions)
            associated with this transaction.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/balance_transaction'
        card:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.card'
          description: The card used to make this transaction.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.card'
        cardholder:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.cardholder'
          description: The cardholder to whom this transaction belongs.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.cardholder'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        dispute:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.dispute'
          description: 'If you''ve disputed the transaction, the ID of the dispute.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.dispute'
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        merchant_amount:
          description: >-
            The amount that the merchant will receive, denominated in
            `merchant_currency` and in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal). It will be
            different from `amount` if the merchant is taking payment in a
            different currency.
          type: integer
        merchant_currency:
          description: The currency with which the merchant is taking payment.
          type: string
        merchant_data:
          $ref: '#/components/schemas/issuing_authorization_merchant_data'
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        network_data:
          anyOf:
            - $ref: '#/components/schemas/issuing_transaction_network_data'
          description: >-
            Details about the transaction, such as processing dates, set by the
            card network.
          nullable: true
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - issuing.transaction
          type: string
        purchase_details:
          anyOf:
            - $ref: '#/components/schemas/issuing_transaction_purchase_details'
          description: >-
            Additional purchase information that is optionally provided by the
            merchant.
          nullable: true
        token:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/issuing.token'
          description: >-
            [Token](https://stripe.com/docs/api/issuing/tokens/object) object
            used for this transaction. If a network token was not used for this
            transaction, this field will be null.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/issuing.token'
        treasury:
          anyOf:
            - $ref: '#/components/schemas/issuing_transaction_treasury'
          description: >-
            [Treasury](https://stripe.com/docs/api/treasury) details related to
            this transaction if it was created on a
            [FinancialAccount](/docs/api/treasury/financial_accounts
          nullable: true
        type:
          description: The nature of the transaction.
          enum:
            - capture
            - refund
          type: string
          x-stripeBypassValidation: true
        wallet:
          description: >-
            The digital wallet used for this transaction. One of `apple_pay`,
            `google_pay`, or `samsung_pay`.
          enum:
            - apple_pay
            - google_pay
            - samsung_pay
          nullable: true
          type: string
      required:
        - amount
        - card
        - created
        - currency
        - id
        - livemode
        - merchant_amount
        - merchant_currency
        - merchant_data
        - metadata
        - object
        - type
      title: IssuingTransaction
      type: object
      x-expandableFields:
        - amount_details
        - authorization
        - balance_transaction
        - card
        - cardholder
        - dispute
        - merchant_data
        - network_data
        - purchase_details
        - token
        - treasury
      x-resourceId: issuing.transaction
  securitySchemes:
    basicAuth:
      description: >-
        Basic HTTP authentication. Allowed headers-- Authorization: Basic
        <api_key> | Authorization: Basic <base64 hash of `api_key:`>
      scheme: basic
      type: http
    bearerAuth:
      bearerFormat: auth-scheme
      description: >-
        Bearer HTTP authentication. Allowed headers-- Authorization: Bearer
        <api_key>
      scheme: bearer
      type: http
tags:
  - name: Issuing
    description: Needs a description.
  - name: Authorizations
    description: Needs a description.
  - name: Approve
    description: Needs a description.
  - name: Decline
    description: Needs a description.
  - name: Cardholders
    description: Needs a description.
  - name: Cards
    description: Needs a description.
  - name: Disputes
    description: Needs a description.
  - name: Submit
    description: Needs a description.
  - name: Settlements
    description: Needs a description.
  - name: Tokens
    description: Needs a description.
  - name: Transactions
    description: Needs a description.
---