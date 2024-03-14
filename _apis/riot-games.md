---
name: Riot Games
description: >-
  With this site we hope to provide the League of Legends developer community
  with access to game data in a secure and reliable way. This is just part of
  our ongoing effort to respond to players and developers requests for data and
  to arm the community with more ways to contribute to the player experience. We
  want this API to meet the same high standards as our in-game experiences, so
  we'll be iterating and evolving as we hear your feedback and suggestions (so
  share 'em all).
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/riot-games.yml
created: 2023/11/23
modified: 2023/11/23
specificationVersion: '0.16'
tags:
  - Games
  - Video Games
apis:
  - name: Riot Games Account API
    description: The Riot Games API for managing your account.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.riotgames.com/apis#account-v1
    baseURL: https://api.example.com
    tags:
      - Games
      - Video Games
    properties:
      - type: OpenAPI
        url: https://developer.riotgames.com/apis#account-v1
    overlays: []
    aid: riot-games:riot-games-account-api
  - name: Riot Games Champion Master API
    description: The Riot Games API for champion master.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.riotgames.com/apis#champion-mastery-v4
    baseURL: https://api.example.com
    tags:
      - Games
      - Video Games
    properties:
      - type: OpenAPI
        url: https://developer.riotgames.com/apis#champion-mastery-v4
    overlays: []
    aid: riot-games:riot-games-champion-master-api
  - name: Riot Games Champion API
    description: The Riot Games API for champion.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.riotgames.com/apis#champion-v3
    baseURL: https://api.example.com
    tags:
      - Games
      - Video Games
    properties:
      - type: OpenAPI
        url: https://developer.riotgames.com/apis#champion-v3
    overlays: []
    aid: riot-games:riot-games-champion-api
  - name: Riot Games Clash API
    description: The Riot Games API for clash.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.riotgames.com/apis#clash-v1
    baseURL: https://api.example.com
    tags:
      - Games
      - Video Games
    properties:
      - type: OpenAPI
        url: https://developer.riotgames.com/apis#clash-v1
    overlays: []
    aid: riot-games:riot-games-clash-api
  - name: Riot Games League Exp API
    description: The Riot Games API for league exp.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.riotgames.com/apis#league-exp-v4
    baseURL: https://api.example.com
    tags:
      - Games
      - Video Games
    properties:
      - type: OpenAPI
        url: https://developer.riotgames.com/apis#league-exp-v4
    overlays: []
    aid: riot-games:riot-games-league-exp-api
  - name: Riot Games League API
    description: The Riot Games API for league.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.riotgames.com/apis#league-v4
    baseURL: https://api.example.com
    tags:
      - Games
      - Video Games
    properties:
      - type: OpenAPI
        url: https://developer.riotgames.com/apis#league-v4
    overlays: []
    aid: riot-games:riot-games-league-api
  - name: Riot Games LOL Challenges API
    description: The Riot Games API forLOL challenges,
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.riotgames.com/apis#lol-challenges-v1
    baseURL: https://api.example.com
    tags:
      - Games
      - Video Games
    properties:
      - type: OpenAPI
        url: https://developer.riotgames.com/apis#lol-challenges-v1
    overlays: []
    aid: riot-games:riot-games-lol-challenges-api
common:
  - type: Portal
    url: https://developer.riotgames.com/docs/portal
  - type: Policies
    url: https://developer.riotgames.com/policies/general
  - type: FAQ
    url: https://developer.riotgames.com/docs/faqs
  - type: Blog
    url: https://www.riotgames.com/en/DevRel
  - type: Discord
    url: https://discord.gg/riotgamesdevrel
  - type: Issues
    url: https://github.com/RiotGames/developer-relations/issues
  - type: Login
    url: https://auth.riotgames.com/login
  - type: Getting Started
    url: https://developer.riotgames.com/docs/portal#_getting-started
  - type: Terms of Service
    url: https://developer.riotgames.com/terms
  - type: Status
    url: https://developer.riotgames.com/api-status/
  - type: Privacy
    url: https://www.riotgames.com/en/privacy-notice
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
aid: riot-games
---