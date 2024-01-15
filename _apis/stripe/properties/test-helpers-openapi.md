---
openapi: 3.0.0
info:
  title: Stripe Test Helpers API
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
  '/v1/test_helpers/customers/{customer}/fund_cash_balance':
    post:
      description: <p>Create an incoming testmode bank transfer</p>
      operationId: PostTestHelpersCustomersCustomerFundCashBalance
      parameters:
        - in: path
          name: customer
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
                amount:
                  description: >-
                    Amount to be used for this test cash balance transaction. A
                    positive integer representing how much to fund in the
                    [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal)
                    (e.g., 100 cents to fund $1.00 or 100 to fund ¥100, a
                    zero-decimal currency).
                  type: integer
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                reference:
                  description: >-
                    A description of the test funding. This simulates free-text
                    references supplied by customers when making bank transfers
                    to their cash balance. You can use this to test how Stripe's
                    [reconciliation
                    algorithm](https://stripe.com/docs/payments/customer-balance/reconciliation)
                    applies to different user inputs.
                  maxLength: 5000
                  type: string
              required:
                - amount
                - currency
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/customer_cash_balance_transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Incoming Bank Transfer
      tags:
        - Tests
        - Incoming
        - Bank
        - Transfers
  /v1/test_helpers/issuing/authorizations:
    post:
      description: <p>Create a test-mode authorization.</p>
      operationId: PostTestHelpersIssuingAuthorizations
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              amount_details:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              merchant_data:
                explode: true
                style: deepObject
              network_data:
                explode: true
                style: deepObject
              verification_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The total amount to attempt to authorize. This amount is in
                    the provided currency, or defaults to the card's currency,
                    and in the [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal).
                  type: integer
                amount_details:
                  description: >-
                    Detailed breakdown of amount components. These amounts are
                    denominated in `currency` and in the [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal).
                  properties:
                    atm_fee:
                      type: integer
                    cashback_amount:
                      type: integer
                  title: amount_details_specs
                  type: object
                authorization_method:
                  description: How the card details were provided. Defaults to online.
                  enum:
                    - chip
                    - contactless
                    - keyed_in
                    - online
                    - swipe
                  type: string
                card:
                  description: Card associated with this authorization.
                  maxLength: 5000
                  type: string
                currency:
                  description: >-
                    The currency of the authorization. If not provided, defaults
                    to the currency of the card. Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                is_amount_controllable:
                  description: >-
                    If set `true`, you may provide
                    [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount)
                    to control how much to hold for the authorization.
                  type: boolean
                merchant_data:
                  description: >-
                    Details about the seller (grocery store, e-commerce website,
                    etc.) where the card authorization happened.
                  properties:
                    category:
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
                        - stationary_office_supplies_printing_and_writing_paper
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
                    city:
                      maxLength: 5000
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    name:
                      maxLength: 5000
                      type: string
                    network_id:
                      maxLength: 5000
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                    terminal_id:
                      maxLength: 5000
                      type: string
                    url:
                      maxLength: 5000
                      type: string
                  title: merchant_data_specs
                  type: object
                network_data:
                  description: >-
                    Details about the authorization, such as identifiers, set by
                    the card network.
                  properties:
                    acquiring_institution_id:
                      maxLength: 5000
                      type: string
                  title: network_data_specs
                  type: object
                verification_data:
                  description: >-
                    Verifications that Stripe performed on information that the
                    cardholder provided to the merchant.
                  properties:
                    address_line1_check:
                      enum:
                        - match
                        - mismatch
                        - not_provided
                      type: string
                    address_postal_code_check:
                      enum:
                        - match
                        - mismatch
                        - not_provided
                      type: string
                    authentication_exemption:
                      properties:
                        claimed_by:
                          enum:
                            - acquirer
                            - issuer
                          type: string
                        type:
                          enum:
                            - low_value_transaction
                            - transaction_risk_analysis
                            - unknown
                          type: string
                          x-stripeBypassValidation: true
                      required:
                        - claimed_by
                        - type
                      title: authentication_exemption_specs
                      type: object
                    cvc_check:
                      enum:
                        - match
                        - mismatch
                        - not_provided
                      type: string
                    expiry_check:
                      enum:
                        - match
                        - mismatch
                        - not_provided
                      type: string
                    three_d_secure:
                      properties:
                        result:
                          enum:
                            - attempt_acknowledged
                            - authenticated
                            - failed
                            - required
                          type: string
                          x-stripeBypassValidation: true
                      required:
                        - result
                      title: three_d_secure_specs
                      type: object
                  title: verification_data_specs
                  type: object
                wallet:
                  description: >-
                    The digital wallet used for this transaction. One of
                    `apple_pay`, `google_pay`, or `samsung_pay`. Will populate
                    as `null` when no digital wallet was utilized.
                  enum:
                    - apple_pay
                    - google_pay
                    - samsung_pay
                  type: string
              required:
                - amount
                - card
              type: object
        required: true
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
      summary: Create Autorization
      tags:
        - Tests
        - Authorization
  '/v1/test_helpers/issuing/authorizations/{authorization}/capture':
    post:
      description: <p>Capture a test-mode authorization.</p>
      operationId: PostTestHelpersIssuingAuthorizationsAuthorizationCapture
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
              purchase_details:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                capture_amount:
                  description: >-
                    The amount to capture from the authorization. If not
                    provided, the full amount of the authorization will be
                    captured. This amount is in the authorization currency and
                    in the [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal).
                  type: integer
                close_authorization:
                  description: >-
                    Whether to close the authorization after capture. Defaults
                    to true. Set to false to enable multi-capture flows.
                  type: boolean
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                purchase_details:
                  description: >-
                    Additional purchase information that is optionally provided
                    by the merchant.
                  properties:
                    flight:
                      properties:
                        departure_at:
                          format: unix-time
                          type: integer
                        passenger_name:
                          maxLength: 5000
                          type: string
                        refundable:
                          type: boolean
                        segments:
                          items:
                            properties:
                              arrival_airport_code:
                                maxLength: 3
                                type: string
                              carrier:
                                maxLength: 5000
                                type: string
                              departure_airport_code:
                                maxLength: 3
                                type: string
                              flight_number:
                                maxLength: 5000
                                type: string
                              service_class:
                                maxLength: 5000
                                type: string
                              stopover_allowed:
                                type: boolean
                            title: flight_segment_specs
                            type: object
                          type: array
                        travel_agency:
                          maxLength: 5000
                          type: string
                      title: flight_specs
                      type: object
                    fuel:
                      properties:
                        type:
                          enum:
                            - diesel
                            - other
                            - unleaded_plus
                            - unleaded_regular
                            - unleaded_super
                          maxLength: 5000
                          type: string
                        unit:
                          enum:
                            - liter
                            - us_gallon
                          maxLength: 5000
                          type: string
                        unit_cost_decimal:
                          format: decimal
                          type: string
                        volume_decimal:
                          format: decimal
                          type: string
                      title: fuel_specs
                      type: object
                    lodging:
                      properties:
                        check_in_at:
                          format: unix-time
                          type: integer
                        nights:
                          type: integer
                      title: lodging_specs
                      type: object
                    receipt:
                      items:
                        properties:
                          description:
                            maxLength: 26
                            type: string
                          quantity:
                            format: decimal
                            type: string
                          total:
                            type: integer
                          unit_cost:
                            type: integer
                        title: receipt_specs
                        type: object
                      type: array
                    reference:
                      maxLength: 5000
                      type: string
                  title: purchase_details_specs
                  type: object
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
      summary: Capture Authorization
      tags:
        - Tests
        - Capture
        - Authorization
  '/v1/test_helpers/issuing/authorizations/{authorization}/expire':
    post:
      description: <p>Expire a test-mode Authorization.</p>
      operationId: PostTestHelpersIssuingAuthorizationsAuthorizationExpire
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
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
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
      summary: Expire Authorization
      tags:
        - Tests
        - Expires
        - Authorization
  '/v1/test_helpers/issuing/authorizations/{authorization}/increment':
    post:
      description: <p>Increment a test-mode Authorization.</p>
      operationId: PostTestHelpersIssuingAuthorizationsAuthorizationIncrement
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
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                increment_amount:
                  description: >-
                    The amount to increment the authorization by. This amount is
                    in the authorization currency and in the [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal).
                  type: integer
                is_amount_controllable:
                  description: >-
                    If set `true`, you may provide
                    [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount)
                    to control how much to hold for the authorization.
                  type: boolean
              required:
                - increment_amount
              type: object
        required: true
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
      summary: Increment Authorization
      tags:
        - Tests
        - Increments
        - Authorization
  '/v1/test_helpers/issuing/authorizations/{authorization}/reverse':
    post:
      description: <p>Reverse a test-mode Authorization.</p>
      operationId: PostTestHelpersIssuingAuthorizationsAuthorizationReverse
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
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                reverse_amount:
                  description: >-
                    The amount to reverse from the authorization. If not
                    provided, the full amount of the authorization will be
                    reversed. This amount is in the authorization currency and
                    in the [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal).
                  type: integer
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
      summary: Reverse Authorization
      tags:
        - Tests
        - Reverse
        - Authorization
  '/v1/test_helpers/issuing/cards/{card}/shipping/deliver':
    post:
      description: >-
        <p>Updates the shipping status of the specified Issuing
        <code>Card</code> object to <code>delivered</code>.</p>
      operationId: PostTestHelpersIssuingCardsCardShippingDeliver
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
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
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
      summary: Update Shipping Status to Deliver
      tags:
        - Tests
        - Shipping
        - Status
        - Delivers
  '/v1/test_helpers/issuing/cards/{card}/shipping/fail':
    post:
      description: >-
        <p>Updates the shipping status of the specified Issuing
        <code>Card</code> object to <code>failure</code>.</p>
      operationId: PostTestHelpersIssuingCardsCardShippingFail
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
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
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
      summary: Update Shipping Status to Fail
      tags:
        - Tests
        - Shipping
        - Status
        - Fails
  '/v1/test_helpers/issuing/cards/{card}/shipping/return':
    post:
      description: >-
        <p>Updates the shipping status of the specified Issuing
        <code>Card</code> object to <code>returned</code>.</p>
      operationId: PostTestHelpersIssuingCardsCardShippingReturn
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
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
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
      summary: Update Shipping Status to Return
      tags:
        - Tests
        - Shipping
        - Status
        - Return
  '/v1/test_helpers/issuing/cards/{card}/shipping/ship':
    post:
      description: >-
        <p>Updates the shipping status of the specified Issuing
        <code>Card</code> object to <code>shipped</code>.</p>
      operationId: PostTestHelpersIssuingCardsCardShippingShip
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
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
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
      summary: Update Shipping Status to Ship
      tags:
        - Tests
        - Shipping
        - Status
        - Ship
  /v1/test_helpers/issuing/transactions/create_force_capture:
    post:
      description: >-
        <p>Allows the user to capture an arbitrary amount, also known as a
        forced capture.</p>
      operationId: PostTestHelpersIssuingTransactionsCreateForceCapture
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              merchant_data:
                explode: true
                style: deepObject
              purchase_details:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The total amount to attempt to capture. This amount is in
                    the provided currency, or defaults to the cards currency,
                    and in the [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal).
                  type: integer
                card:
                  description: Card associated with this transaction.
                  maxLength: 5000
                  type: string
                currency:
                  description: >-
                    The currency of the capture. If not provided, defaults to
                    the currency of the card. Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                merchant_data:
                  description: >-
                    Details about the seller (grocery store, e-commerce website,
                    etc.) where the card authorization happened.
                  properties:
                    category:
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
                        - stationary_office_supplies_printing_and_writing_paper
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
                    city:
                      maxLength: 5000
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    name:
                      maxLength: 5000
                      type: string
                    network_id:
                      maxLength: 5000
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                    terminal_id:
                      maxLength: 5000
                      type: string
                    url:
                      maxLength: 5000
                      type: string
                  title: merchant_data_specs
                  type: object
                purchase_details:
                  description: >-
                    Additional purchase information that is optionally provided
                    by the merchant.
                  properties:
                    flight:
                      properties:
                        departure_at:
                          format: unix-time
                          type: integer
                        passenger_name:
                          maxLength: 5000
                          type: string
                        refundable:
                          type: boolean
                        segments:
                          items:
                            properties:
                              arrival_airport_code:
                                maxLength: 3
                                type: string
                              carrier:
                                maxLength: 5000
                                type: string
                              departure_airport_code:
                                maxLength: 3
                                type: string
                              flight_number:
                                maxLength: 5000
                                type: string
                              service_class:
                                maxLength: 5000
                                type: string
                              stopover_allowed:
                                type: boolean
                            title: flight_segment_specs
                            type: object
                          type: array
                        travel_agency:
                          maxLength: 5000
                          type: string
                      title: flight_specs
                      type: object
                    fuel:
                      properties:
                        type:
                          enum:
                            - diesel
                            - other
                            - unleaded_plus
                            - unleaded_regular
                            - unleaded_super
                          maxLength: 5000
                          type: string
                        unit:
                          enum:
                            - liter
                            - us_gallon
                          maxLength: 5000
                          type: string
                        unit_cost_decimal:
                          format: decimal
                          type: string
                        volume_decimal:
                          format: decimal
                          type: string
                      title: fuel_specs
                      type: object
                    lodging:
                      properties:
                        check_in_at:
                          format: unix-time
                          type: integer
                        nights:
                          type: integer
                      title: lodging_specs
                      type: object
                    receipt:
                      items:
                        properties:
                          description:
                            maxLength: 26
                            type: string
                          quantity:
                            format: decimal
                            type: string
                          total:
                            type: integer
                          unit_cost:
                            type: integer
                        title: receipt_specs
                        type: object
                      type: array
                    reference:
                      maxLength: 5000
                      type: string
                  title: purchase_details_specs
                  type: object
              required:
                - amount
                - card
              type: object
        required: true
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
      summary: Create Force Capture
      tags:
        - Tests
        - Force
        - Capture
  /v1/test_helpers/issuing/transactions/create_unlinked_refund:
    post:
      description: >-
        <p>Allows the user to refund an arbitrary amount, also known as a
        unlinked refund.</p>
      operationId: PostTestHelpersIssuingTransactionsCreateUnlinkedRefund
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              merchant_data:
                explode: true
                style: deepObject
              purchase_details:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The total amount to attempt to refund. This amount is in the
                    provided currency, or defaults to the cards currency, and in
                    the [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal).
                  type: integer
                card:
                  description: Card associated with this unlinked refund transaction.
                  maxLength: 5000
                  type: string
                currency:
                  description: >-
                    The currency of the unlinked refund. If not provided,
                    defaults to the currency of the card. Three-letter [ISO
                    currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                merchant_data:
                  description: >-
                    Details about the seller (grocery store, e-commerce website,
                    etc.) where the card authorization happened.
                  properties:
                    category:
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
                        - stationary_office_supplies_printing_and_writing_paper
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
                    city:
                      maxLength: 5000
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    name:
                      maxLength: 5000
                      type: string
                    network_id:
                      maxLength: 5000
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                    terminal_id:
                      maxLength: 5000
                      type: string
                    url:
                      maxLength: 5000
                      type: string
                  title: merchant_data_specs
                  type: object
                purchase_details:
                  description: >-
                    Additional purchase information that is optionally provided
                    by the merchant.
                  properties:
                    flight:
                      properties:
                        departure_at:
                          format: unix-time
                          type: integer
                        passenger_name:
                          maxLength: 5000
                          type: string
                        refundable:
                          type: boolean
                        segments:
                          items:
                            properties:
                              arrival_airport_code:
                                maxLength: 3
                                type: string
                              carrier:
                                maxLength: 5000
                                type: string
                              departure_airport_code:
                                maxLength: 3
                                type: string
                              flight_number:
                                maxLength: 5000
                                type: string
                              service_class:
                                maxLength: 5000
                                type: string
                              stopover_allowed:
                                type: boolean
                            title: flight_segment_specs
                            type: object
                          type: array
                        travel_agency:
                          maxLength: 5000
                          type: string
                      title: flight_specs
                      type: object
                    fuel:
                      properties:
                        type:
                          enum:
                            - diesel
                            - other
                            - unleaded_plus
                            - unleaded_regular
                            - unleaded_super
                          maxLength: 5000
                          type: string
                        unit:
                          enum:
                            - liter
                            - us_gallon
                          maxLength: 5000
                          type: string
                        unit_cost_decimal:
                          format: decimal
                          type: string
                        volume_decimal:
                          format: decimal
                          type: string
                      title: fuel_specs
                      type: object
                    lodging:
                      properties:
                        check_in_at:
                          format: unix-time
                          type: integer
                        nights:
                          type: integer
                      title: lodging_specs
                      type: object
                    receipt:
                      items:
                        properties:
                          description:
                            maxLength: 26
                            type: string
                          quantity:
                            format: decimal
                            type: string
                          total:
                            type: integer
                          unit_cost:
                            type: integer
                        title: receipt_specs
                        type: object
                      type: array
                    reference:
                      maxLength: 5000
                      type: string
                  title: purchase_details_specs
                  type: object
              required:
                - amount
                - card
              type: object
        required: true
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
      summary: Create Unlinked Refund
      tags:
        - Tests
        - Unlinked
        - Refunds
  '/v1/test_helpers/issuing/transactions/{transaction}/refund':
    post:
      description: <p>Refund a test-mode Transaction.</p>
      operationId: PostTestHelpersIssuingTransactionsTransactionRefund
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
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                refund_amount:
                  description: >-
                    The total amount to attempt to refund. This amount is in the
                    provided currency, or defaults to the cards currency, and in
                    the [smallest currency
                    unit](https://stripe.com/docs/currencies#zero-decimal).
                  type: integer
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
      summary: Refund Transaction
      tags:
        - Tests
        - Refunds
        - Transactions
  '/v1/test_helpers/refunds/{refund}/expire':
    post:
      description: <p>Expire a refund with a status of <code>requires_action</code>.</p>
      operationId: PostTestHelpersRefundsRefundExpire
      parameters:
        - in: path
          name: refund
          required: true
          schema:
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/refund'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Expire Refund
      tags:
        - Tests
        - Expires
        - Refunds
  '/v1/test_helpers/terminal/readers/{reader}/present_payment_method':
    post:
      description: >-
        <p>Presents a payment method on a simulated reader. Can be used to
        simulate accepting a payment, saving a card or refunding a
        transaction.</p>
      operationId: PostTestHelpersTerminalReadersReaderPresentPaymentMethod
      parameters:
        - in: path
          name: reader
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              card_present:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              interac_present:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount_tip:
                  description: Simulated on-reader tip amount.
                  type: integer
                card_present:
                  description: Simulated data for the card_present payment method.
                  properties:
                    number:
                      maxLength: 5000
                      type: string
                  title: card_present
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                interac_present:
                  description: Simulated data for the interac_present payment method.
                  properties:
                    number:
                      maxLength: 5000
                      type: string
                  title: interac_present
                  type: object
                type:
                  description: Simulated payment type.
                  enum:
                    - card_present
                    - interac_present
                  type: string
                  x-stripeBypassValidation: true
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Present Payment Method on Reader
      tags:
        - Tests
        - Presents
        - Payments
        - Methods
        - Readers
  /v1/test_helpers/test_clocks:
    get:
      description: <p>Returns a list of your test clocks.</p>
      operationId: GetTestHelpersTestClocks
      parameters:
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
                      $ref: '#/components/schemas/test_helpers.test_clock'
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
                    pattern: ^/v1/test_helpers/test_clocks
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: BillingClocksResourceBillingClockList
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
      summary: Retrieve Test Clocks
      tags:
        - Tests
        - Clocks
    post:
      description: >-
        <p>Creates a new test clock that can be attached to new customers and
        quotes.</p>
      operationId: PostTestHelpersTestClocks
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
                frozen_time:
                  description: The initial frozen time for this test clock.
                  format: unix-time
                  type: integer
                name:
                  description: The name for this test clock.
                  maxLength: 300
                  type: string
              required:
                - frozen_time
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/test_helpers.test_clock'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Test Clock
      tags:
        - Tests
        - Clocks
  '/v1/test_helpers/test_clocks/{test_clock}':
    delete:
      description: <p>Deletes a test clock.</p>
      operationId: DeleteTestHelpersTestClocksTestClock
      parameters:
        - in: path
          name: test_clock
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
                $ref: '#/components/schemas/deleted_test_helpers.test_clock'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Test Clock
      tags:
        - Tests
        - Clocks
    get:
      description: <p>Retrieves a test clock.</p>
      operationId: GetTestHelpersTestClocksTestClock
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
          name: test_clock
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
                $ref: '#/components/schemas/test_helpers.test_clock'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Test Clock
      tags:
        - Tests
        - Clocks
  '/v1/test_helpers/test_clocks/{test_clock}/advance':
    post:
      description: >-
        <p>Starts advancing a test clock to a specified time in the future.
        Advancement is done when status changes to <code>Ready</code>.</p>
      operationId: PostTestHelpersTestClocksTestClockAdvance
      parameters:
        - in: path
          name: test_clock
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
                frozen_time:
                  description: >-
                    The time to advance the test clock. Must be after the test
                    clock's current frozen time. Cannot be more than two
                    intervals in the future from the shortest subscription in
                    this test clock. If there are no subscriptions in this test
                    clock, it cannot be more than two years in the future.
                  format: unix-time
                  type: integer
              required:
                - frozen_time
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/test_helpers.test_clock'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Advance Test Clock
      tags:
        - Advance
        - Tests
        - Clocks
  '/v1/test_helpers/treasury/inbound_transfers/{id}/fail':
    post:
      description: >-
        <p>Transitions a test mode created InboundTransfer to the
        <code>failed</code> status. The InboundTransfer must already be in the
        <code>processing</code> state.</p>
      operationId: PostTestHelpersTreasuryInboundTransfersIdFail
      parameters:
        - in: path
          name: id
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
              failure_details:
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
                failure_details:
                  description: Details about a failed InboundTransfer.
                  properties:
                    code:
                      enum:
                        - account_closed
                        - account_frozen
                        - bank_account_restricted
                        - bank_ownership_changed
                        - debit_not_authorized
                        - incorrect_account_holder_address
                        - incorrect_account_holder_name
                        - incorrect_account_holder_tax_id
                        - insufficient_funds
                        - invalid_account_number
                        - invalid_currency
                        - no_account
                        - other
                      type: string
                  title: failure_details_params
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.inbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Fail Inbound Transfer
      tags:
        - Fails
        - Inbound
        - Transfer
        - Tests
  '/v1/test_helpers/treasury/inbound_transfers/{id}/return':
    post:
      description: >-
        <p>Marks the test mode InboundTransfer object as returned and links the
        InboundTransfer to a ReceivedDebit. The InboundTransfer must already be
        in the <code>succeeded</code> state.</p>
      operationId: PostTestHelpersTreasuryInboundTransfersIdReturn
      parameters:
        - in: path
          name: id
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.inbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Return Inbound Transfer
      tags:
        - Tests
        - Inbound
        - Transfers
  '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed':
    post:
      description: >-
        <p>Transitions a test mode created InboundTransfer to the
        <code>succeeded</code> status. The InboundTransfer must already be in
        the <code>processing</code> state.</p>
      operationId: PostTestHelpersTreasuryInboundTransfersIdSucceed
      parameters:
        - in: path
          name: id
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.inbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Succeed Inbound Transfer
      tags:
        - Tests
        - Succeed
        - Inbound
        - Transfers
  '/v1/test_helpers/treasury/outbound_payments/{id}/fail':
    post:
      description: >-
        <p>Transitions a test mode created OutboundPayment to the
        <code>failed</code> status. The OutboundPayment must already be in the
        <code>processing</code> state.</p>
      operationId: PostTestHelpersTreasuryOutboundPaymentsIdFail
      parameters:
        - in: path
          name: id
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_payment'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Fail Outbound Payment
      tags:
        - Tests
        - Fails
        - Outbound
        - Payments
  '/v1/test_helpers/treasury/outbound_payments/{id}/post':
    post:
      description: >-
        <p>Transitions a test mode created OutboundPayment to the
        <code>posted</code> status. The OutboundPayment must already be in the
        <code>processing</code> state.</p>
      operationId: PostTestHelpersTreasuryOutboundPaymentsIdPost
      parameters:
        - in: path
          name: id
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_payment'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Transition Outbound Payment
      tags:
        - Tests
        - Transitions
        - Outbound
        - Payments
  '/v1/test_helpers/treasury/outbound_payments/{id}/return':
    post:
      description: >-
        <p>Transitions a test mode created OutboundPayment to the
        <code>returned</code> status. The OutboundPayment must already be in the
        <code>processing</code> state.</p>
      operationId: PostTestHelpersTreasuryOutboundPaymentsIdReturn
      parameters:
        - in: path
          name: id
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
              returned_details:
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
                returned_details:
                  description: Optional hash to set the the return code.
                  properties:
                    code:
                      enum:
                        - account_closed
                        - account_frozen
                        - bank_account_restricted
                        - bank_ownership_changed
                        - declined
                        - incorrect_account_holder_name
                        - invalid_account_number
                        - invalid_currency
                        - no_account
                        - other
                      type: string
                  title: returned_details_params
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_payment'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Return Outbound Payment
      tags:
        - Tests
        - Outbound
        - Payments
  '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail':
    post:
      description: >-
        <p>Transitions a test mode created OutboundTransfer to the
        <code>failed</code> status. The OutboundTransfer must already be in the
        <code>processing</code> state.</p>
      operationId: PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail
      parameters:
        - in: path
          name: outbound_transfer
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Fail Outbound Transfer
      tags:
        - Tests
        - Fails
        - Outbound
        - Transfers
  '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post':
    post:
      description: >-
        <p>Transitions a test mode created OutboundTransfer to the
        <code>posted</code> status. The OutboundTransfer must already be in the
        <code>processing</code> state.</p>
      operationId: PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost
      parameters:
        - in: path
          name: outbound_transfer
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Transition Outbound Transfer
      tags:
        - Tests
        - Transitions
        - Outbound
        - Transfers
  '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return':
    post:
      description: >-
        <p>Transitions a test mode created OutboundTransfer to the
        <code>returned</code> status. The OutboundTransfer must already be in
        the <code>processing</code> state.</p>
      operationId: PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn
      parameters:
        - in: path
          name: outbound_transfer
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
              returned_details:
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
                returned_details:
                  description: Details about a returned OutboundTransfer.
                  properties:
                    code:
                      enum:
                        - account_closed
                        - account_frozen
                        - bank_account_restricted
                        - bank_ownership_changed
                        - declined
                        - incorrect_account_holder_name
                        - invalid_account_number
                        - invalid_currency
                        - no_account
                        - other
                      type: string
                  title: returned_details_params
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Return Outbound Transfer
      tags:
        - Tests
        - Outbound
        - Transfers
  /v1/test_helpers/treasury/received_credits:
    post:
      description: >-
        <p>Use this endpoint to simulate a test mode ReceivedCredit initiated by
        a third party. In live mode, you can’t directly create ReceivedCredits
        initiated by third parties.</p>
      operationId: PostTestHelpersTreasuryReceivedCredits
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              initiating_payment_method_details:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: Amount (in cents) to be transferred.
                  type: integer
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users.
                  maxLength: 5000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                financial_account:
                  description: The FinancialAccount to send funds to.
                  type: string
                initiating_payment_method_details:
                  description: Initiating payment method details for the object.
                  properties:
                    type:
                      enum:
                        - us_bank_account
                      type: string
                    us_bank_account:
                      properties:
                        account_holder_name:
                          maxLength: 5000
                          type: string
                        account_number:
                          maxLength: 5000
                          type: string
                        routing_number:
                          maxLength: 5000
                          type: string
                      title: us_bank_account_source_params
                      type: object
                  required:
                    - type
                  title: source_params
                  type: object
                network:
                  description: The rails used for the object.
                  enum:
                    - ach
                    - us_domestic_wire
                  type: string
              required:
                - amount
                - currency
                - financial_account
                - network
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.received_credit'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Received Credit
      tags:
        - Tests
        - Received
        - Credits
  /v1/test_helpers/treasury/received_debits:
    post:
      description: >-
        <p>Use this endpoint to simulate a test mode ReceivedDebit initiated by
        a third party. In live mode, you can’t directly create ReceivedDebits
        initiated by third parties.</p>
      operationId: PostTestHelpersTreasuryReceivedDebits
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              initiating_payment_method_details:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: Amount (in cents) to be transferred.
                  type: integer
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users.
                  maxLength: 5000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                financial_account:
                  description: The FinancialAccount to pull funds from.
                  type: string
                initiating_payment_method_details:
                  description: Initiating payment method details for the object.
                  properties:
                    type:
                      enum:
                        - us_bank_account
                      type: string
                    us_bank_account:
                      properties:
                        account_holder_name:
                          maxLength: 5000
                          type: string
                        account_number:
                          maxLength: 5000
                          type: string
                        routing_number:
                          maxLength: 5000
                          type: string
                      title: us_bank_account_source_params
                      type: object
                  required:
                    - type
                  title: source_params
                  type: object
                network:
                  description: The rails used for the object.
                  enum:
                    - ach
                  type: string
              required:
                - amount
                - currency
                - financial_account
                - network
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.received_debit'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Received Debit
      tags:
        - Tests
        - Received
        - Debits
components:
  schemas:
    customer_cash_balance_transaction:
      description: >-
        Customers with certain payments enabled have a cash balance,
        representing funds that were paid

        by the customer to a merchant, but have not yet been allocated to a
        payment. Cash Balance Transactions

        represent when funds are moved into or out of this balance. This
        includes funding by the customer, allocation

        to payments, and refunds to the customer.
      properties:
        adjusted_for_overdraft:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraft
        applied_to_payment:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_applied_to_payment_transaction
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
          maxLength: 5000
          type: string
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
          description: >-
            The customer whose available cash balance changed as a result of
            this transaction.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
        ending_balance:
          description: >-
            The total available cash balance for the specified currency after
            this transaction was applied. Represented in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal).
          type: integer
        funded:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_funded_transaction
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        net_amount:
          description: >-
            The amount by which the cash balance changed, represented in the
            [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal). A positive
            value represents funds being added to the cash balance, a negative
            value represents funds being removed from the cash balance.
          type: integer
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - customer_cash_balance_transaction
          type: string
        refunded_from_payment:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_refunded_from_payment_transaction
        transferred_to_balance:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_transferred_to_balance
        type:
          description: >-
            The type of the cash balance transaction. New types may be added in
            future. See [Customer
            Balance](https://stripe.com/docs/payments/customer-balance#types) to
            learn more about these types.
          enum:
            - adjusted_for_overdraft
            - applied_to_payment
            - funded
            - funding_reversed
            - refunded_from_payment
            - return_canceled
            - return_initiated
            - transferred_to_balance
            - unapplied_from_payment
          type: string
        unapplied_from_payment:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_unapplied_from_payment_transaction
      required:
        - created
        - currency
        - customer
        - ending_balance
        - id
        - livemode
        - net_amount
        - object
        - type
      title: CustomerCashBalanceTransaction
      type: object
      x-expandableFields:
        - adjusted_for_overdraft
        - applied_to_payment
        - customer
        - funded
        - refunded_from_payment
        - transferred_to_balance
        - unapplied_from_payment
      x-resourceId: customer_cash_balance_transaction
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
    refund:
      description: >-
        Refund objects allow you to refund a previously created charge that
        isn't

        refunded yet. Funds are refunded to the credit or debit card that's

        initially charged.


        Related guide: [Refunds](https://stripe.com/docs/refunds)
      properties:
        amount:
          description: 'Amount, in cents (or local equivalent).'
          type: integer
        balance_transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/balance_transaction'
          description: >-
            Balance transaction that describes the impact on your account
            balance.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/balance_transaction'
        charge:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/charge'
          description: ID of the charge that's refunded.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/charge'
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
        description:
          description: >-
            An arbitrary string attached to the object. You can use this for
            displaying to users (available on non-card refunds only).
          maxLength: 5000
          type: string
        destination_details:
          $ref: '#/components/schemas/refund_destination_details'
        failure_balance_transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/balance_transaction'
          description: >-
            After the refund fails, this balance transaction describes the
            adjustment made on your account balance that reverses the initial
            balance transaction.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/balance_transaction'
        failure_reason:
          description: >-
            Provides the reason for the refund failure. Possible values are:
            `lost_or_stolen_card`, `expired_or_canceled_card`,
            `charge_for_pending_refund_disputed`, `insufficient_funds`,
            `declined`, `merchant_request`, or `unknown`.
          maxLength: 5000
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        instructions_email:
          description: >-
            For payment methods without native refund support (for example,
            Konbini, PromptPay), provide an email address for the customer to
            receive refund instructions.
          maxLength: 5000
          type: string
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          nullable: true
          type: object
        next_action:
          $ref: '#/components/schemas/refund_next_action'
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - refund
          type: string
        payment_intent:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_intent'
          description: ID of the PaymentIntent that's refunded.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/payment_intent'
        reason:
          description: >-
            Reason for the refund, which is either user-provided (`duplicate`,
            `fraudulent`, or `requested_by_customer`) or generated by Stripe
            internally (`expired_uncaptured_charge`).
          enum:
            - duplicate
            - expired_uncaptured_charge
            - fraudulent
            - requested_by_customer
          nullable: true
          type: string
          x-stripeBypassValidation: true
        receipt_number:
          description: >-
            This is the transaction number that appears on email receipts sent
            for this refund.
          maxLength: 5000
          nullable: true
          type: string
        source_transfer_reversal:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/transfer_reversal'
          description: >-
            The transfer reversal that's associated with the refund. Only
            present if the charge came from another Stripe account.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/transfer_reversal'
        status:
          description: >-
            Status of the refund. This can be `pending`, `requires_action`,
            `succeeded`, `failed`, or `canceled`. Learn more about [failed
            refunds](https://stripe.com/docs/refunds#failed-refunds).
          maxLength: 5000
          nullable: true
          type: string
        transfer_reversal:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/transfer_reversal'
          description: >-
            This refers to the transfer reversal object if the accompanying
            transfer reverses. This is only applicable if the charge was created
            using the destination parameter.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/transfer_reversal'
      required:
        - amount
        - created
        - currency
        - id
        - object
      title: Refund
      type: object
      x-expandableFields:
        - balance_transaction
        - charge
        - destination_details
        - failure_balance_transaction
        - next_action
        - payment_intent
        - source_transfer_reversal
        - transfer_reversal
      x-resourceId: refund
    terminal.reader:
      description: >-
        A Reader represents a physical device for accepting payment details.


        Related guide: [Connecting to a
        reader](https://stripe.com/docs/terminal/payments/connect-reader)
      properties:
        action:
          anyOf:
            - $ref: >-
                #/components/schemas/terminal_reader_reader_resource_reader_action
          description: The most recent action performed by the reader.
          nullable: true
        device_sw_version:
          description: The current software version of the reader.
          maxLength: 5000
          nullable: true
          type: string
        device_type:
          description: >-
            Type of reader, one of `bbpos_wisepad3`, `stripe_m2`,
            `bbpos_chipper2x`, `bbpos_wisepos_e`, `verifone_P400`, or
            `simulated_wisepos_e`.
          enum:
            - bbpos_chipper2x
            - bbpos_wisepad3
            - bbpos_wisepos_e
            - simulated_wisepos_e
            - stripe_m2
            - verifone_P400
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        ip_address:
          description: The local IP address of the reader.
          maxLength: 5000
          nullable: true
          type: string
        label:
          description: Custom label given to the reader for easier identification.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        location:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/terminal.location'
          description: The location identifier of the reader.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/terminal.location'
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
            - terminal.reader
          type: string
        serial_number:
          description: Serial number of the reader.
          maxLength: 5000
          type: string
        status:
          description: The networking status of the reader.
          maxLength: 5000
          nullable: true
          type: string
      required:
        - device_type
        - id
        - label
        - livemode
        - metadata
        - object
        - serial_number
      title: TerminalReaderReader
      type: object
      x-expandableFields:
        - action
        - location
      x-resourceId: terminal.reader
    test_helpers.test_clock:
      description: >-
        A test clock enables deterministic control over objects in testmode.
        With a test clock, you can create

        objects at a frozen time in the past or future, and advance to a
        specific future time to observe webhooks and state changes. After the
        clock advances,

        you can either validate the current state of your scenario (and test
        your assumptions), change the current state of your scenario (and test
        more complex scenarios), or keep advancing forward in time.
      properties:
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        deletes_after:
          description: Time at which this clock is scheduled to auto delete.
          format: unix-time
          type: integer
        frozen_time:
          description: Time at which all objects belonging to this clock are frozen.
          format: unix-time
          type: integer
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        name:
          description: The custom name supplied at creation.
          maxLength: 5000
          nullable: true
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - test_helpers.test_clock
          type: string
        status:
          description: The status of the Test Clock.
          enum:
            - advancing
            - internal_failure
            - ready
          type: string
      required:
        - created
        - deletes_after
        - frozen_time
        - id
        - livemode
        - object
        - status
      title: TestClock
      type: object
      x-expandableFields: []
      x-resourceId: test_helpers.test_clock
    deleted_test_helpers.test_clock:
      description: ''
      properties:
        deleted:
          description: Always true for a deleted object
          enum:
            - true
          type: boolean
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - test_helpers.test_clock
          type: string
      required:
        - deleted
        - id
        - object
      title: DeletedTestClock
      type: object
      x-expandableFields: []
      x-resourceId: deleted_test_helpers.test_clock
    treasury.inbound_transfer:
      description: >-
        Use
        [InboundTransfers](https://stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers)
        to add funds to your
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a
        PaymentMethod that is owned by you. The funds will be transferred via an
        ACH debit.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        cancelable:
          description: Returns `true` if the InboundTransfer is able to be canceled.
          type: boolean
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
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        failure_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_inbound_transfers_resource_failure_details
          description: >-
            Details about this InboundTransfer's failure. Only set when status
            is `failed`.
          nullable: true
        financial_account:
          description: The FinancialAccount that received the funds.
          maxLength: 5000
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        linked_flows:
          $ref: >-
            #/components/schemas/treasury_inbound_transfers_resource_inbound_transfer_resource_linked_flows
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
            - treasury.inbound_transfer
          type: string
        origin_payment_method:
          description: The origin payment method to be debited for an InboundTransfer.
          maxLength: 5000
          type: string
        origin_payment_method_details:
          anyOf:
            - $ref: '#/components/schemas/inbound_transfers'
          description: Details about the PaymentMethod for an InboundTransfer.
          nullable: true
        returned:
          description: >-
            Returns `true` if the funds for an InboundTransfer were returned
            after the InboundTransfer went to the `succeeded` state.
          nullable: true
          type: boolean
        statement_descriptor:
          description: >-
            Statement descriptor shown when funds are debited from the source.
            Not all payment networks support `statement_descriptor`.
          maxLength: 5000
          type: string
        status:
          description: >-
            Status of the InboundTransfer: `processing`, `succeeded`, `failed`,
            and `canceled`. An InboundTransfer is `processing` if it is created
            and pending. The status changes to `succeeded` once the funds have
            been "confirmed" and a `transaction` is created and posted. The
            status changes to `failed` if the transfer fails.
          enum:
            - canceled
            - failed
            - processing
            - succeeded
          type: string
        status_transitions:
          $ref: >-
            #/components/schemas/treasury_inbound_transfers_resource_inbound_transfer_resource_status_transitions
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - cancelable
        - created
        - currency
        - financial_account
        - id
        - linked_flows
        - livemode
        - metadata
        - object
        - origin_payment_method
        - statement_descriptor
        - status
        - status_transitions
      title: TreasuryInboundTransfersResourceInboundTransfer
      type: object
      x-expandableFields:
        - failure_details
        - linked_flows
        - origin_payment_method_details
        - status_transitions
        - transaction
      x-resourceId: treasury.inbound_transfer
    treasury.outbound_payment:
      description: >-
        Use OutboundPayments to send funds to another party's external bank
        account or
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To
        send money to an account belonging to the same user, use an
        [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).


        Simulate OutboundPayment state changes with the
        `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods
        can only be called on test mode objects.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        cancelable:
          description: 'Returns `true` if the object can be canceled, and `false` otherwise.'
          type: boolean
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
        customer:
          description: >-
            ID of the [customer](https://stripe.com/docs/api/customers) to whom
            an OutboundPayment is sent.
          maxLength: 5000
          nullable: true
          type: string
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        destination_payment_method:
          description: >-
            The PaymentMethod via which an OutboundPayment is sent. This field
            can be empty if the OutboundPayment was created using
            `destination_payment_method_data`.
          maxLength: 5000
          nullable: true
          type: string
        destination_payment_method_details:
          anyOf:
            - $ref: '#/components/schemas/outbound_payments_payment_method_details'
          description: Details about the PaymentMethod for an OutboundPayment.
          nullable: true
        end_user_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_outbound_payments_resource_outbound_payment_resource_end_user_details
          description: Details about the end user.
          nullable: true
        expected_arrival_date:
          description: >-
            The date when funds are expected to arrive in the destination
            account.
          format: unix-time
          type: integer
        financial_account:
          description: The FinancialAccount that funds were pulled from.
          maxLength: 5000
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
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
            - treasury.outbound_payment
          type: string
        returned_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_outbound_payments_resource_returned_status
          description: >-
            Details about a returned OutboundPayment. Only set when the status
            is `returned`.
          nullable: true
        statement_descriptor:
          description: >-
            The description that appears on the receiving end for an
            OutboundPayment (for example, bank statement for external bank
            transfer).
          maxLength: 5000
          type: string
        status:
          description: >-
            Current status of the OutboundPayment: `processing`, `failed`,
            `posted`, `returned`, `canceled`. An OutboundPayment is `processing`
            if it has been created and is pending. The status changes to
            `posted` once the OutboundPayment has been "confirmed" and funds
            have left the account, or to `failed` or `canceled`. If an
            OutboundPayment fails to arrive at its destination, its status will
            change to `returned`.
          enum:
            - canceled
            - failed
            - posted
            - processing
            - returned
          type: string
        status_transitions:
          $ref: >-
            #/components/schemas/treasury_outbound_payments_resource_outbound_payment_resource_status_transitions
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - cancelable
        - created
        - currency
        - expected_arrival_date
        - financial_account
        - id
        - livemode
        - metadata
        - object
        - statement_descriptor
        - status
        - status_transitions
        - transaction
      title: TreasuryOutboundPaymentsResourceOutboundPayment
      type: object
      x-expandableFields:
        - destination_payment_method_details
        - end_user_details
        - returned_details
        - status_transitions
        - transaction
      x-resourceId: treasury.outbound_payment
    treasury.outbound_transfer:
      description: >-
        Use OutboundTransfers to transfer funds from a
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a
        PaymentMethod belonging to the same entity. To send funds to a different
        party, use
        [OutboundPayments](https://stripe.com/docs/api#outbound_payments)
        instead. You can send funds over ACH rails or through a domestic wire
        transfer to a user's own external bank account.


        Simulate OutboundTransfer state changes with the
        `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods
        can only be called on test mode objects.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        cancelable:
          description: 'Returns `true` if the object can be canceled, and `false` otherwise.'
          type: boolean
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
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        destination_payment_method:
          description: >-
            The PaymentMethod used as the payment instrument for an
            OutboundTransfer.
          maxLength: 5000
          nullable: true
          type: string
        destination_payment_method_details:
          $ref: '#/components/schemas/outbound_transfers_payment_method_details'
        expected_arrival_date:
          description: >-
            The date when funds are expected to arrive in the destination
            account.
          format: unix-time
          type: integer
        financial_account:
          description: The FinancialAccount that funds were pulled from.
          maxLength: 5000
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
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
            - treasury.outbound_transfer
          type: string
        returned_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_outbound_transfers_resource_returned_details
          description: >-
            Details about a returned OutboundTransfer. Only set when the status
            is `returned`.
          nullable: true
        statement_descriptor:
          description: >-
            Information about the OutboundTransfer to be sent to the recipient
            account.
          maxLength: 5000
          type: string
        status:
          description: >-
            Current status of the OutboundTransfer: `processing`, `failed`,
            `canceled`, `posted`, `returned`. An OutboundTransfer is
            `processing` if it has been created and is pending. The status
            changes to `posted` once the OutboundTransfer has been "confirmed"
            and funds have left the account, or to `failed` or `canceled`. If an
            OutboundTransfer fails to arrive at its destination, its status will
            change to `returned`.
          enum:
            - canceled
            - failed
            - posted
            - processing
            - returned
          type: string
        status_transitions:
          $ref: >-
            #/components/schemas/treasury_outbound_transfers_resource_status_transitions
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - cancelable
        - created
        - currency
        - destination_payment_method_details
        - expected_arrival_date
        - financial_account
        - id
        - livemode
        - metadata
        - object
        - statement_descriptor
        - status
        - status_transitions
        - transaction
      title: TreasuryOutboundTransfersResourceOutboundTransfer
      type: object
      x-expandableFields:
        - destination_payment_method_details
        - returned_details
        - status_transitions
        - transaction
      x-resourceId: treasury.outbound_transfer
    treasury.received_credit:
      description: >-
        ReceivedCredits represent funds sent to a
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for
        example, via ACH or wire). These money movements are not initiated from
        the FinancialAccount.
      properties:
        amount:
          description: Amount (in cents) transferred.
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
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          type: string
        failure_code:
          description: >-
            Reason for the failure. A ReceivedCredit might fail because the
            receiving FinancialAccount is closed or frozen.
          enum:
            - account_closed
            - account_frozen
            - other
          nullable: true
          type: string
          x-stripeBypassValidation: true
        financial_account:
          description: The FinancialAccount that received the funds.
          maxLength: 5000
          nullable: true
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        initiating_payment_method_details:
          $ref: >-
            #/components/schemas/treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details
        linked_flows:
          $ref: '#/components/schemas/treasury_received_credits_resource_linked_flows'
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        network:
          description: The rails used to send the funds.
          enum:
            - ach
            - card
            - stripe
            - us_domestic_wire
          type: string
          x-stripeBypassValidation: true
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.received_credit
          type: string
        reversal_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_received_credits_resource_reversal_details
          description: Details describing when a ReceivedCredit may be reversed.
          nullable: true
        status:
          description: >-
            Status of the ReceivedCredit. ReceivedCredits are created either
            `succeeded` (approved) or `failed` (declined). If a ReceivedCredit
            is declined, the failure reason can be found in the `failure_code`
            field.
          enum:
            - failed
            - succeeded
          type: string
          x-stripeBypassValidation: true
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - created
        - currency
        - description
        - id
        - initiating_payment_method_details
        - linked_flows
        - livemode
        - network
        - object
        - status
      title: TreasuryReceivedCreditsResourceReceivedCredit
      type: object
      x-expandableFields:
        - initiating_payment_method_details
        - linked_flows
        - reversal_details
        - transaction
      x-resourceId: treasury.received_credit
    treasury.received_debit:
      description: >-
        ReceivedDebits represent funds pulled from a
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts).
        These are not initiated from the FinancialAccount.
      properties:
        amount:
          description: Amount (in cents) transferred.
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
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          type: string
        failure_code:
          description: >-
            Reason for the failure. A ReceivedDebit might fail because the
            FinancialAccount doesn't have sufficient funds, is closed, or is
            frozen.
          enum:
            - account_closed
            - account_frozen
            - insufficient_funds
            - other
          nullable: true
          type: string
        financial_account:
          description: The FinancialAccount that funds were pulled from.
          maxLength: 5000
          nullable: true
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        initiating_payment_method_details:
          $ref: >-
            #/components/schemas/treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details
        linked_flows:
          $ref: '#/components/schemas/treasury_received_debits_resource_linked_flows'
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        network:
          description: The network used for the ReceivedDebit.
          enum:
            - ach
            - card
            - stripe
          type: string
          x-stripeBypassValidation: true
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.received_debit
          type: string
        reversal_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_received_debits_resource_reversal_details
          description: Details describing when a ReceivedDebit might be reversed.
          nullable: true
        status:
          description: >-
            Status of the ReceivedDebit. ReceivedDebits are created with a
            status of either `succeeded` (approved) or `failed` (declined). The
            failure reason can be found under the `failure_code`.
          enum:
            - failed
            - succeeded
          type: string
          x-stripeBypassValidation: true
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - created
        - currency
        - description
        - id
        - linked_flows
        - livemode
        - network
        - object
        - status
      title: TreasuryReceivedDebitsResourceReceivedDebit
      type: object
      x-expandableFields:
        - initiating_payment_method_details
        - linked_flows
        - reversal_details
        - transaction
      x-resourceId: treasury.received_debit
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
  - name: Tests
    description: Needs a description.
  - name: Incoming
    description: Needs a description.
  - name: Bank
    description: Needs a description.
  - name: Transfers
    description: Needs a description.
  - name: Autorization
    description: Needs a description.
  - name: Capture
    description: Needs a description.
  - name: Authorization
    description: Needs a description.
  - name: Expires
    description: Needs a description.
  - name: Increments
    description: Needs a description.
  - name: Reverse
    description: Needs a description.
  - name: Shipping
    description: Needs a description.
  - name: Status
    description: Needs a description.
  - name: Delivers
    description: Needs a description.
  - name: Fail
    description: Needs a description.
  - name: Return
    description: Needs a description.
  - name: Ship
    description: Needs a description.
  - name: Force
    description: Needs a description.
  - name: Unlinked
    description: Needs a description.
  - name: Refunds
    description: Needs a description.
  - name: Transactions
    description: Needs a description.
  - name: Presents
    description: Needs a description.
  - name: Payments
    description: Needs a description.
  - name: Methods
    description: Needs a description.
  - name: Readers
    description: Needs a description.
  - name: Clocks
    description: Needs a description.
  - name: Advance
    description: Needs a description.
  - name: Fails
    description: Needs a description.
  - name: Inbound
    description: Needs a description.
  - name: Transfer
    description: Needs a description.
  - name: Succeed
    description: Needs a description.
  - name: Outbound
    description: Needs a description.
  - name: Transitions
    description: Needs a description.
  - name: Received
    description: Needs a description.
  - name: Credits
    description: Needs a description.
  - name: Debit
    description: Needs a description.
---