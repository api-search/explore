---
openapi: 3.0.0
info:
  title: Stripe Reporting API
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
  /v1/reporting/report_runs:
    get:
      description: >-
        <p>Returns a list of Report Runs, with the most recent appearing
        first.</p>
      operationId: GetReportingReportRuns
      parameters:
        - explode: true
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
                      $ref: '#/components/schemas/reporting.report_run'
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
                    pattern: ^/v1/reporting/report_runs
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: FinancialReportingFinanceReportRunList
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
      summary: Retrieve Report Runs
      tags:
        - Reports
        - Runs
    post:
      description: >-
        <p>Creates a new object and begin running the report. (Certain report
        types require a <a
        href="https://stripe.com/docs/keys#test-live-modes">live-mode API
        key</a>.)</p>
      operationId: PostReportingReportRuns
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              parameters:
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
                parameters:
                  description: >-
                    Parameters specifying how the report should be run.
                    Different Report Types have different required and optional
                    parameters, listed in the [API Access to
                    Reports](https://stripe.com/docs/reporting/statements/api)
                    documentation.
                  properties:
                    columns:
                      items:
                        maxLength: 5000
                        type: string
                      type: array
                    connected_account:
                      type: string
                    currency:
                      type: string
                    interval_end:
                      format: unix-time
                      type: integer
                    interval_start:
                      format: unix-time
                      type: integer
                    payout:
                      type: string
                    reporting_category:
                      enum:
                        - advance
                        - advance_funding
                        - anticipation_repayment
                        - charge
                        - charge_failure
                        - climate_order_purchase
                        - climate_order_refund
                        - connect_collection_transfer
                        - connect_reserved_funds
                        - contribution
                        - dispute
                        - dispute_reversal
                        - fee
                        - financing_paydown
                        - financing_paydown_reversal
                        - financing_payout
                        - financing_payout_reversal
                        - issuing_authorization_hold
                        - issuing_authorization_release
                        - issuing_dispute
                        - issuing_transaction
                        - network_cost
                        - obligation
                        - other_adjustment
                        - partial_capture_reversal
                        - payout
                        - payout_reversal
                        - platform_earning
                        - platform_earning_refund
                        - refund
                        - refund_failure
                        - risk_reserved_funds
                        - tax
                        - topup
                        - topup_reversal
                        - transfer
                        - transfer_reversal
                        - unreconciled_customer_funds
                      maxLength: 5000
                      type: string
                      x-stripeBypassValidation: true
                    timezone:
                      enum:
                        - Africa/Abidjan
                        - Africa/Accra
                        - Africa/Addis_Ababa
                        - Africa/Algiers
                        - Africa/Asmara
                        - Africa/Asmera
                        - Africa/Bamako
                        - Africa/Bangui
                        - Africa/Banjul
                        - Africa/Bissau
                        - Africa/Blantyre
                        - Africa/Brazzaville
                        - Africa/Bujumbura
                        - Africa/Cairo
                        - Africa/Casablanca
                        - Africa/Ceuta
                        - Africa/Conakry
                        - Africa/Dakar
                        - Africa/Dar_es_Salaam
                        - Africa/Djibouti
                        - Africa/Douala
                        - Africa/El_Aaiun
                        - Africa/Freetown
                        - Africa/Gaborone
                        - Africa/Harare
                        - Africa/Johannesburg
                        - Africa/Juba
                        - Africa/Kampala
                        - Africa/Khartoum
                        - Africa/Kigali
                        - Africa/Kinshasa
                        - Africa/Lagos
                        - Africa/Libreville
                        - Africa/Lome
                        - Africa/Luanda
                        - Africa/Lubumbashi
                        - Africa/Lusaka
                        - Africa/Malabo
                        - Africa/Maputo
                        - Africa/Maseru
                        - Africa/Mbabane
                        - Africa/Mogadishu
                        - Africa/Monrovia
                        - Africa/Nairobi
                        - Africa/Ndjamena
                        - Africa/Niamey
                        - Africa/Nouakchott
                        - Africa/Ouagadougou
                        - Africa/Porto-Novo
                        - Africa/Sao_Tome
                        - Africa/Timbuktu
                        - Africa/Tripoli
                        - Africa/Tunis
                        - Africa/Windhoek
                        - America/Adak
                        - America/Anchorage
                        - America/Anguilla
                        - America/Antigua
                        - America/Araguaina
                        - America/Argentina/Buenos_Aires
                        - America/Argentina/Catamarca
                        - America/Argentina/ComodRivadavia
                        - America/Argentina/Cordoba
                        - America/Argentina/Jujuy
                        - America/Argentina/La_Rioja
                        - America/Argentina/Mendoza
                        - America/Argentina/Rio_Gallegos
                        - America/Argentina/Salta
                        - America/Argentina/San_Juan
                        - America/Argentina/San_Luis
                        - America/Argentina/Tucuman
                        - America/Argentina/Ushuaia
                        - America/Aruba
                        - America/Asuncion
                        - America/Atikokan
                        - America/Atka
                        - America/Bahia
                        - America/Bahia_Banderas
                        - America/Barbados
                        - America/Belem
                        - America/Belize
                        - America/Blanc-Sablon
                        - America/Boa_Vista
                        - America/Bogota
                        - America/Boise
                        - America/Buenos_Aires
                        - America/Cambridge_Bay
                        - America/Campo_Grande
                        - America/Cancun
                        - America/Caracas
                        - America/Catamarca
                        - America/Cayenne
                        - America/Cayman
                        - America/Chicago
                        - America/Chihuahua
                        - America/Ciudad_Juarez
                        - America/Coral_Harbour
                        - America/Cordoba
                        - America/Costa_Rica
                        - America/Creston
                        - America/Cuiaba
                        - America/Curacao
                        - America/Danmarkshavn
                        - America/Dawson
                        - America/Dawson_Creek
                        - America/Denver
                        - America/Detroit
                        - America/Dominica
                        - America/Edmonton
                        - America/Eirunepe
                        - America/El_Salvador
                        - America/Ensenada
                        - America/Fort_Nelson
                        - America/Fort_Wayne
                        - America/Fortaleza
                        - America/Glace_Bay
                        - America/Godthab
                        - America/Goose_Bay
                        - America/Grand_Turk
                        - America/Grenada
                        - America/Guadeloupe
                        - America/Guatemala
                        - America/Guayaquil
                        - America/Guyana
                        - America/Halifax
                        - America/Havana
                        - America/Hermosillo
                        - America/Indiana/Indianapolis
                        - America/Indiana/Knox
                        - America/Indiana/Marengo
                        - America/Indiana/Petersburg
                        - America/Indiana/Tell_City
                        - America/Indiana/Vevay
                        - America/Indiana/Vincennes
                        - America/Indiana/Winamac
                        - America/Indianapolis
                        - America/Inuvik
                        - America/Iqaluit
                        - America/Jamaica
                        - America/Jujuy
                        - America/Juneau
                        - America/Kentucky/Louisville
                        - America/Kentucky/Monticello
                        - America/Knox_IN
                        - America/Kralendijk
                        - America/La_Paz
                        - America/Lima
                        - America/Los_Angeles
                        - America/Louisville
                        - America/Lower_Princes
                        - America/Maceio
                        - America/Managua
                        - America/Manaus
                        - America/Marigot
                        - America/Martinique
                        - America/Matamoros
                        - America/Mazatlan
                        - America/Mendoza
                        - America/Menominee
                        - America/Merida
                        - America/Metlakatla
                        - America/Mexico_City
                        - America/Miquelon
                        - America/Moncton
                        - America/Monterrey
                        - America/Montevideo
                        - America/Montreal
                        - America/Montserrat
                        - America/Nassau
                        - America/New_York
                        - America/Nipigon
                        - America/Nome
                        - America/Noronha
                        - America/North_Dakota/Beulah
                        - America/North_Dakota/Center
                        - America/North_Dakota/New_Salem
                        - America/Nuuk
                        - America/Ojinaga
                        - America/Panama
                        - America/Pangnirtung
                        - America/Paramaribo
                        - America/Phoenix
                        - America/Port-au-Prince
                        - America/Port_of_Spain
                        - America/Porto_Acre
                        - America/Porto_Velho
                        - America/Puerto_Rico
                        - America/Punta_Arenas
                        - America/Rainy_River
                        - America/Rankin_Inlet
                        - America/Recife
                        - America/Regina
                        - America/Resolute
                        - America/Rio_Branco
                        - America/Rosario
                        - America/Santa_Isabel
                        - America/Santarem
                        - America/Santiago
                        - America/Santo_Domingo
                        - America/Sao_Paulo
                        - America/Scoresbysund
                        - America/Shiprock
                        - America/Sitka
                        - America/St_Barthelemy
                        - America/St_Johns
                        - America/St_Kitts
                        - America/St_Lucia
                        - America/St_Thomas
                        - America/St_Vincent
                        - America/Swift_Current
                        - America/Tegucigalpa
                        - America/Thule
                        - America/Thunder_Bay
                        - America/Tijuana
                        - America/Toronto
                        - America/Tortola
                        - America/Vancouver
                        - America/Virgin
                        - America/Whitehorse
                        - America/Winnipeg
                        - America/Yakutat
                        - America/Yellowknife
                        - Antarctica/Casey
                        - Antarctica/Davis
                        - Antarctica/DumontDUrville
                        - Antarctica/Macquarie
                        - Antarctica/Mawson
                        - Antarctica/McMurdo
                        - Antarctica/Palmer
                        - Antarctica/Rothera
                        - Antarctica/South_Pole
                        - Antarctica/Syowa
                        - Antarctica/Troll
                        - Antarctica/Vostok
                        - Arctic/Longyearbyen
                        - Asia/Aden
                        - Asia/Almaty
                        - Asia/Amman
                        - Asia/Anadyr
                        - Asia/Aqtau
                        - Asia/Aqtobe
                        - Asia/Ashgabat
                        - Asia/Ashkhabad
                        - Asia/Atyrau
                        - Asia/Baghdad
                        - Asia/Bahrain
                        - Asia/Baku
                        - Asia/Bangkok
                        - Asia/Barnaul
                        - Asia/Beirut
                        - Asia/Bishkek
                        - Asia/Brunei
                        - Asia/Calcutta
                        - Asia/Chita
                        - Asia/Choibalsan
                        - Asia/Chongqing
                        - Asia/Chungking
                        - Asia/Colombo
                        - Asia/Dacca
                        - Asia/Damascus
                        - Asia/Dhaka
                        - Asia/Dili
                        - Asia/Dubai
                        - Asia/Dushanbe
                        - Asia/Famagusta
                        - Asia/Gaza
                        - Asia/Harbin
                        - Asia/Hebron
                        - Asia/Ho_Chi_Minh
                        - Asia/Hong_Kong
                        - Asia/Hovd
                        - Asia/Irkutsk
                        - Asia/Istanbul
                        - Asia/Jakarta
                        - Asia/Jayapura
                        - Asia/Jerusalem
                        - Asia/Kabul
                        - Asia/Kamchatka
                        - Asia/Karachi
                        - Asia/Kashgar
                        - Asia/Kathmandu
                        - Asia/Katmandu
                        - Asia/Khandyga
                        - Asia/Kolkata
                        - Asia/Krasnoyarsk
                        - Asia/Kuala_Lumpur
                        - Asia/Kuching
                        - Asia/Kuwait
                        - Asia/Macao
                        - Asia/Macau
                        - Asia/Magadan
                        - Asia/Makassar
                        - Asia/Manila
                        - Asia/Muscat
                        - Asia/Nicosia
                        - Asia/Novokuznetsk
                        - Asia/Novosibirsk
                        - Asia/Omsk
                        - Asia/Oral
                        - Asia/Phnom_Penh
                        - Asia/Pontianak
                        - Asia/Pyongyang
                        - Asia/Qatar
                        - Asia/Qostanay
                        - Asia/Qyzylorda
                        - Asia/Rangoon
                        - Asia/Riyadh
                        - Asia/Saigon
                        - Asia/Sakhalin
                        - Asia/Samarkand
                        - Asia/Seoul
                        - Asia/Shanghai
                        - Asia/Singapore
                        - Asia/Srednekolymsk
                        - Asia/Taipei
                        - Asia/Tashkent
                        - Asia/Tbilisi
                        - Asia/Tehran
                        - Asia/Tel_Aviv
                        - Asia/Thimbu
                        - Asia/Thimphu
                        - Asia/Tokyo
                        - Asia/Tomsk
                        - Asia/Ujung_Pandang
                        - Asia/Ulaanbaatar
                        - Asia/Ulan_Bator
                        - Asia/Urumqi
                        - Asia/Ust-Nera
                        - Asia/Vientiane
                        - Asia/Vladivostok
                        - Asia/Yakutsk
                        - Asia/Yangon
                        - Asia/Yekaterinburg
                        - Asia/Yerevan
                        - Atlantic/Azores
                        - Atlantic/Bermuda
                        - Atlantic/Canary
                        - Atlantic/Cape_Verde
                        - Atlantic/Faeroe
                        - Atlantic/Faroe
                        - Atlantic/Jan_Mayen
                        - Atlantic/Madeira
                        - Atlantic/Reykjavik
                        - Atlantic/South_Georgia
                        - Atlantic/St_Helena
                        - Atlantic/Stanley
                        - Australia/ACT
                        - Australia/Adelaide
                        - Australia/Brisbane
                        - Australia/Broken_Hill
                        - Australia/Canberra
                        - Australia/Currie
                        - Australia/Darwin
                        - Australia/Eucla
                        - Australia/Hobart
                        - Australia/LHI
                        - Australia/Lindeman
                        - Australia/Lord_Howe
                        - Australia/Melbourne
                        - Australia/NSW
                        - Australia/North
                        - Australia/Perth
                        - Australia/Queensland
                        - Australia/South
                        - Australia/Sydney
                        - Australia/Tasmania
                        - Australia/Victoria
                        - Australia/West
                        - Australia/Yancowinna
                        - Brazil/Acre
                        - Brazil/DeNoronha
                        - Brazil/East
                        - Brazil/West
                        - CET
                        - CST6CDT
                        - Canada/Atlantic
                        - Canada/Central
                        - Canada/Eastern
                        - Canada/Mountain
                        - Canada/Newfoundland
                        - Canada/Pacific
                        - Canada/Saskatchewan
                        - Canada/Yukon
                        - Chile/Continental
                        - Chile/EasterIsland
                        - Cuba
                        - EET
                        - EST
                        - EST5EDT
                        - Egypt
                        - Eire
                        - Etc/GMT
                        - Etc/GMT+0
                        - Etc/GMT+1
                        - Etc/GMT+10
                        - Etc/GMT+11
                        - Etc/GMT+12
                        - Etc/GMT+2
                        - Etc/GMT+3
                        - Etc/GMT+4
                        - Etc/GMT+5
                        - Etc/GMT+6
                        - Etc/GMT+7
                        - Etc/GMT+8
                        - Etc/GMT+9
                        - Etc/GMT-0
                        - Etc/GMT-1
                        - Etc/GMT-10
                        - Etc/GMT-11
                        - Etc/GMT-12
                        - Etc/GMT-13
                        - Etc/GMT-14
                        - Etc/GMT-2
                        - Etc/GMT-3
                        - Etc/GMT-4
                        - Etc/GMT-5
                        - Etc/GMT-6
                        - Etc/GMT-7
                        - Etc/GMT-8
                        - Etc/GMT-9
                        - Etc/GMT0
                        - Etc/Greenwich
                        - Etc/UCT
                        - Etc/UTC
                        - Etc/Universal
                        - Etc/Zulu
                        - Europe/Amsterdam
                        - Europe/Andorra
                        - Europe/Astrakhan
                        - Europe/Athens
                        - Europe/Belfast
                        - Europe/Belgrade
                        - Europe/Berlin
                        - Europe/Bratislava
                        - Europe/Brussels
                        - Europe/Bucharest
                        - Europe/Budapest
                        - Europe/Busingen
                        - Europe/Chisinau
                        - Europe/Copenhagen
                        - Europe/Dublin
                        - Europe/Gibraltar
                        - Europe/Guernsey
                        - Europe/Helsinki
                        - Europe/Isle_of_Man
                        - Europe/Istanbul
                        - Europe/Jersey
                        - Europe/Kaliningrad
                        - Europe/Kiev
                        - Europe/Kirov
                        - Europe/Kyiv
                        - Europe/Lisbon
                        - Europe/Ljubljana
                        - Europe/London
                        - Europe/Luxembourg
                        - Europe/Madrid
                        - Europe/Malta
                        - Europe/Mariehamn
                        - Europe/Minsk
                        - Europe/Monaco
                        - Europe/Moscow
                        - Europe/Nicosia
                        - Europe/Oslo
                        - Europe/Paris
                        - Europe/Podgorica
                        - Europe/Prague
                        - Europe/Riga
                        - Europe/Rome
                        - Europe/Samara
                        - Europe/San_Marino
                        - Europe/Sarajevo
                        - Europe/Saratov
                        - Europe/Simferopol
                        - Europe/Skopje
                        - Europe/Sofia
                        - Europe/Stockholm
                        - Europe/Tallinn
                        - Europe/Tirane
                        - Europe/Tiraspol
                        - Europe/Ulyanovsk
                        - Europe/Uzhgorod
                        - Europe/Vaduz
                        - Europe/Vatican
                        - Europe/Vienna
                        - Europe/Vilnius
                        - Europe/Volgograd
                        - Europe/Warsaw
                        - Europe/Zagreb
                        - Europe/Zaporozhye
                        - Europe/Zurich
                        - Factory
                        - GB
                        - GB-Eire
                        - GMT
                        - GMT+0
                        - GMT-0
                        - GMT0
                        - Greenwich
                        - HST
                        - Hongkong
                        - Iceland
                        - Indian/Antananarivo
                        - Indian/Chagos
                        - Indian/Christmas
                        - Indian/Cocos
                        - Indian/Comoro
                        - Indian/Kerguelen
                        - Indian/Mahe
                        - Indian/Maldives
                        - Indian/Mauritius
                        - Indian/Mayotte
                        - Indian/Reunion
                        - Iran
                        - Israel
                        - Jamaica
                        - Japan
                        - Kwajalein
                        - Libya
                        - MET
                        - MST
                        - MST7MDT
                        - Mexico/BajaNorte
                        - Mexico/BajaSur
                        - Mexico/General
                        - NZ
                        - NZ-CHAT
                        - Navajo
                        - PRC
                        - PST8PDT
                        - Pacific/Apia
                        - Pacific/Auckland
                        - Pacific/Bougainville
                        - Pacific/Chatham
                        - Pacific/Chuuk
                        - Pacific/Easter
                        - Pacific/Efate
                        - Pacific/Enderbury
                        - Pacific/Fakaofo
                        - Pacific/Fiji
                        - Pacific/Funafuti
                        - Pacific/Galapagos
                        - Pacific/Gambier
                        - Pacific/Guadalcanal
                        - Pacific/Guam
                        - Pacific/Honolulu
                        - Pacific/Johnston
                        - Pacific/Kanton
                        - Pacific/Kiritimati
                        - Pacific/Kosrae
                        - Pacific/Kwajalein
                        - Pacific/Majuro
                        - Pacific/Marquesas
                        - Pacific/Midway
                        - Pacific/Nauru
                        - Pacific/Niue
                        - Pacific/Norfolk
                        - Pacific/Noumea
                        - Pacific/Pago_Pago
                        - Pacific/Palau
                        - Pacific/Pitcairn
                        - Pacific/Pohnpei
                        - Pacific/Ponape
                        - Pacific/Port_Moresby
                        - Pacific/Rarotonga
                        - Pacific/Saipan
                        - Pacific/Samoa
                        - Pacific/Tahiti
                        - Pacific/Tarawa
                        - Pacific/Tongatapu
                        - Pacific/Truk
                        - Pacific/Wake
                        - Pacific/Wallis
                        - Pacific/Yap
                        - Poland
                        - Portugal
                        - ROC
                        - ROK
                        - Singapore
                        - Turkey
                        - UCT
                        - US/Alaska
                        - US/Aleutian
                        - US/Arizona
                        - US/Central
                        - US/East-Indiana
                        - US/Eastern
                        - US/Hawaii
                        - US/Indiana-Starke
                        - US/Michigan
                        - US/Mountain
                        - US/Pacific
                        - US/Pacific-New
                        - US/Samoa
                        - UTC
                        - Universal
                        - W-SU
                        - WET
                        - Zulu
                      maxLength: 5000
                      type: string
                  title: run_parameter_specs
                  type: object
                report_type:
                  description: >-
                    The ID of the [report
                    type](https://stripe.com/docs/reporting/statements/api#report-types)
                    to run, such as `"balance.summary.1"`.
                  type: string
              required:
                - report_type
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/reporting.report_run'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Report Run
      tags:
        - Reports
        - Runs
  '/v1/reporting/report_runs/{report_run}':
    get:
      description: <p>Retrieves the details of an existing Report Run.</p>
      operationId: GetReportingReportRunsReportRun
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
          name: report_run
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
                $ref: '#/components/schemas/reporting.report_run'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Report Run
      tags:
        - Reports
        - Runs
  /v1/reporting/report_types:
    get:
      description: <p>Returns a full list of Report Types.</p>
      operationId: GetReportingReportTypes
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
                      $ref: '#/components/schemas/reporting.report_type'
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
                title: FinancialReportingFinanceReportTypeList
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
      summary: Retrieve Report Types
      tags:
        - Reports
        - Types
  '/v1/reporting/report_types/{report_type}':
    get:
      description: >-
        <p>Retrieves the details of a Report Type. (Certain report types require
        a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API
        key</a>.)</p>
      operationId: GetReportingReportTypesReportType
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
          name: report_type
          required: true
          schema:
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
                $ref: '#/components/schemas/reporting.report_type'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Report Type
      tags:
        - Reports
        - Types
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
    reporting.report_run:
      description: >-
        The Report Run object represents an instance of a report type generated
        with

        specific run parameters. Once the object is created, Stripe begins
        processing the report.

        When the report has finished running, it will give you a reference to a
        file

        where you can retrieve your results. For an overview, see

        [API Access to
        Reports](https://stripe.com/docs/reporting/statements/api).


        Note that certain report types can only be run based on your live-mode
        data (not test-mode

        data), and will error when queried without a [live-mode API
        key](https://stripe.com/docs/keys#test-live-modes).
      properties:
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        error:
          description: >-
            If something should go wrong during the run, a message about the
            failure (populated when
             `status=failed`).
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            `true` if the report is run on live mode data and `false` if it is
            run on test mode data.
          type: boolean
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - reporting.report_run
          type: string
        parameters:
          $ref: >-
            #/components/schemas/financial_reporting_finance_report_run_run_parameters
        report_type:
          description: >-
            The ID of the [report
            type](https://stripe.com/docs/reports/report-types) to run, such as
            `"balance.summary.1"`.
          maxLength: 5000
          type: string
        result:
          anyOf:
            - $ref: '#/components/schemas/file'
          description: >-
            The file object representing the result of the report run (populated
            when
             `status=succeeded`).
          nullable: true
        status:
          description: >-
            Status of this report run. This will be `pending` when the run is
            initially created.
             When the run finishes, this will be set to `succeeded` and the `result` field will be populated.
             Rarely, we may encounter an error, at which point this will be set to `failed` and the `error` field will be populated.
          maxLength: 5000
          type: string
        succeeded_at:
          description: |-
            Timestamp at which this run successfully finished (populated when
             `status=succeeded`). Measured in seconds since the Unix epoch.
          format: unix-time
          nullable: true
          type: integer
      required:
        - created
        - id
        - livemode
        - object
        - parameters
        - report_type
        - status
      title: reporting_report_run
      type: object
      x-expandableFields:
        - parameters
        - result
      x-resourceId: reporting.report_run
    reporting.report_type:
      description: >-
        The Report Type resource corresponds to a particular type of report,
        such as

        the "Activity summary" or "Itemized payouts" reports. These objects are

        identified by an ID belonging to a set of enumerated values. See

        [API Access to Reports
        documentation](https://stripe.com/docs/reporting/statements/api)

        for those Report Type IDs, along with required and optional parameters.


        Note that certain report types can only be run based on your live-mode
        data (not test-mode

        data), and will error when queried without a [live-mode API
        key](https://stripe.com/docs/keys#test-live-modes).
      properties:
        data_available_end:
          description: >-
            Most recent time for which this Report Type is available. Measured
            in seconds since the Unix epoch.
          format: unix-time
          type: integer
        data_available_start:
          description: >-
            Earliest time for which this Report Type is available. Measured in
            seconds since the Unix epoch.
          format: unix-time
          type: integer
        default_columns:
          description: >-
            List of column names that are included by default when this Report
            Type gets run. (If the Report Type doesn't support the `columns`
            parameter, this will be null.)
          items:
            maxLength: 5000
            type: string
          nullable: true
          type: array
        id:
          description: >-
            The [ID of the Report
            Type](https://stripe.com/docs/reporting/statements/api#available-report-types),
            such as `balance.summary.1`.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        name:
          description: Human-readable name of the Report Type
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - reporting.report_type
          type: string
        updated:
          description: >-
            When this Report Type was latest updated. Measured in seconds since
            the Unix epoch.
          format: unix-time
          type: integer
        version:
          description: >-
            Version of the Report Type. Different versions report with the same
            ID will have the same purpose, but may take different run parameters
            or have different result schemas.
          type: integer
      required:
        - data_available_end
        - data_available_start
        - id
        - livemode
        - name
        - object
        - updated
        - version
      title: reporting_report_type
      type: object
      x-expandableFields: []
      x-resourceId: reporting.report_type
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
  - name: Reports
    description: Needs a description.
  - name: Runs
    description: Needs a description.
  - name: Types
    description: Needs a description.
---