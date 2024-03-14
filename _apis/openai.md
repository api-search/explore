---
name: OpenAI
description: >-
  OpenAI is an AI research and deployment company. Our mission is to ensure that
  artificial general intelligence benefits all of humanity. Our mission is to
  ensure that artificial general intelligence—AI systems that are generally
  smarter than humans—benefits all of humanity. We are building safe and
  beneficial AGI, but will also consider our mission fulfilled if our work aids
  others to achieve this outcome.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/openai.yml
created: 2023/11/9
modified: 2023/11/9
specificationVersion: '0.16'
tags:
  - APIs
  - Artificial Intelligence
apis:
  - name: OpenAI Assistants API
    description: >-
      The Assistants API allows you to build AI assistants within your own
      applications. An Assistant has instructions and can leverage models,
      tools, and knowledge to respond to user queries. The Assistants API
      currently supports three types of tools - Code Interpreter, Retrieval, and
      Function calling. In the future, we plan to release more OpenAI-built
      tools, and allow you to provide your own tools on our platform.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/assistants/overview
    baseURL: https://platform.openai.com/
    tags:
      - Assistants
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/assistants-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: OpenAI Assistants
            license:
              name: MIT
              url: https://github.com/openai/openai-openapi/blob/master/LICENSE
          tags:
            - name: Assistants
              description: Build Assistants that can call models and use tools.
          paths:
            /assistants:
              get:
                tags:
                  - Assistants
                summary: Returns a list of assistants.
              post:
                tags:
                  - Assistants
                summary: Create an assistant with a model and instructions.
            /assistants/{assistant_id}:
              get:
                tags:
                  - Assistants
                summary: Retrieves an assistant.
              post:
                tags:
                  - Assistants
                summary: Modifies an assistant.
              delete:
                tags:
                  - Assistants
                summary: Delete an assistant.
            /assistants/{assistant_id}/files:
              get:
                tags:
                  - Assistants
                summary: Returns a list of assistant files.
              post:
                tags:
                  - Assistants
                summary: >-
                  Create an assistant file by attaching a
                  [File](/docs/api-reference/files) to an
                  [assistant](/docs/api-reference/assistants).
            /assistants/{assistant_id}/files/{file_id}:
              get:
                tags:
                  - Assistants
                summary: Retrieves an AssistantFile.
              delete:
                tags:
                  - Assistants
                summary: Delete an assistant file.
          x-oaiMeta:
            groups:
              - id: audio
                title: Audio
                description: |
                  Learn how to turn audio into text or text into audio.

                  Related guide: [Speech to text](/docs/guides/speech-to-text)
                sections:
                  - type: endpoint
                    key: createSpeech
                    path: createSpeech
                  - type: endpoint
                    key: createTranscription
                    path: createTranscription
                  - type: endpoint
                    key: createTranslation
                    path: createTranslation
              - id: chat
                title: Chat
                description: >
                  Given a list of messages comprising a conversation, the model
                  will return a response.


                  Related guide: [Chat
                  Completions](/docs/guides/text-generation)
                sections:
                  - type: endpoint
                    key: createChatCompletion
                    path: create
                  - type: object
                    key: CreateChatCompletionResponse
                    path: object
                  - type: object
                    key: CreateChatCompletionStreamResponse
                    path: streaming
              - id: embeddings
                title: Embeddings
                description: >
                  Get a vector representation of a given input that can be
                  easily consumed by machine learning models and algorithms.


                  Related guide: [Embeddings](/docs/guides/embeddings)
                sections:
                  - type: endpoint
                    key: createEmbedding
                    path: create
                  - type: object
                    key: Embedding
                    path: object
              - id: fine-tuning
                title: Fine-tuning
                description: >
                  Manage fine-tuning jobs to tailor a model to your specific
                  training data.


                  Related guide: [Fine-tune models](/docs/guides/fine-tuning)
                sections:
                  - type: endpoint
                    key: createFineTuningJob
                    path: create
                  - type: endpoint
                    key: listPaginatedFineTuningJobs
                    path: list
                  - type: endpoint
                    key: listFineTuningEvents
                    path: list-events
                  - type: endpoint
                    key: retrieveFineTuningJob
                    path: retrieve
                  - type: endpoint
                    key: cancelFineTuningJob
                    path: cancel
                  - type: object
                    key: FineTuningJob
                    path: object
                  - type: object
                    key: FineTuningJobEvent
                    path: event-object
              - id: files
                title: Files
                description: >
                  Files are used to upload documents that can be used with
                  features like [Assistants](/docs/api-reference/assistants) and
                  [Fine-tuning](/docs/api-reference/fine-tuning).
                sections:
                  - type: endpoint
                    key: createFile
                    path: create
                  - type: endpoint
                    key: listFiles
                    path: list
                  - type: endpoint
                    key: retrieveFile
                    path: retrieve
                  - type: endpoint
                    key: deleteFile
                    path: delete
                  - type: endpoint
                    key: downloadFile
                    path: retrieve-contents
                  - type: object
                    key: OpenAIFile
                    path: object
              - id: images
                title: Images
                description: >
                  Given a prompt and/or an input image, the model will generate
                  a new image.


                  Related guide: [Image generation](/docs/guides/images)
                sections:
                  - type: endpoint
                    key: createImage
                    path: create
                  - type: endpoint
                    key: createImageEdit
                    path: createEdit
                  - type: endpoint
                    key: createImageVariation
                    path: createVariation
                  - type: object
                    key: Image
                    path: object
              - id: models
                title: Models
                description: >
                  List and describe the various models available in the API. You
                  can refer to the [Models](/docs/models) documentation to
                  understand what models are available and the differences
                  between them.
                sections:
                  - type: endpoint
                    key: listModels
                    path: list
                  - type: endpoint
                    key: retrieveModel
                    path: retrieve
                  - type: endpoint
                    key: deleteModel
                    path: delete
                  - type: object
                    key: Model
                    path: object
              - id: moderations
                title: Moderations
                description: >
                  Given a input text, outputs if the model classifies it as
                  violating OpenAI's content policy.


                  Related guide: [Moderations](/docs/guides/moderation)
                sections:
                  - type: endpoint
                    key: createModeration
                    path: create
                  - type: object
                    key: CreateModerationResponse
                    path: object
              - id: assistants
                title: Assistants
                beta: true
                description: >
                  Build assistants that can call models and use tools to perform
                  tasks.


                  [Get started with the Assistants API](/docs/assistants)
                sections:
                  - type: endpoint
                    key: createAssistant
                    path: createAssistant
                  - type: endpoint
                    key: createAssistantFile
                    path: createAssistantFile
                  - type: endpoint
                    key: listAssistants
                    path: listAssistants
                  - type: endpoint
                    key: listAssistantFiles
                    path: listAssistantFiles
                  - type: endpoint
                    key: getAssistant
                    path: getAssistant
                  - type: endpoint
                    key: getAssistantFile
                    path: getAssistantFile
                  - type: endpoint
                    key: modifyAssistant
                    path: modifyAssistant
                  - type: endpoint
                    key: deleteAssistant
                    path: deleteAssistant
                  - type: endpoint
                    key: deleteAssistantFile
                    path: deleteAssistantFile
                  - type: object
                    key: AssistantObject
                    path: object
                  - type: object
                    key: AssistantFileObject
                    path: file-object
              - id: threads
                title: Threads
                beta: true
                description: |
                  Create threads that assistants can interact with.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createThread
                    path: createThread
                  - type: endpoint
                    key: getThread
                    path: getThread
                  - type: endpoint
                    key: modifyThread
                    path: modifyThread
                  - type: endpoint
                    key: deleteThread
                    path: deleteThread
                  - type: object
                    key: ThreadObject
                    path: object
              - id: messages
                title: Messages
                beta: true
                description: |
                  Create messages within threads

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createMessage
                    path: createMessage
                  - type: endpoint
                    key: listMessages
                    path: listMessages
                  - type: endpoint
                    key: listMessageFiles
                    path: listMessageFiles
                  - type: endpoint
                    key: getMessage
                    path: getMessage
                  - type: endpoint
                    key: getMessageFile
                    path: getMessageFile
                  - type: endpoint
                    key: modifyMessage
                    path: modifyMessage
                  - type: object
                    key: MessageObject
                    path: object
                  - type: object
                    key: MessageFileObject
                    path: file-object
              - id: runs
                title: Runs
                beta: true
                description: |
                  Represents an execution run on a thread.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createRun
                    path: createRun
                  - type: endpoint
                    key: createThreadAndRun
                    path: createThreadAndRun
                  - type: endpoint
                    key: listRuns
                    path: listRuns
                  - type: endpoint
                    key: listRunSteps
                    path: listRunSteps
                  - type: endpoint
                    key: getRun
                    path: getRun
                  - type: endpoint
                    key: getRunStep
                    path: getRunStep
                  - type: endpoint
                    key: modifyRun
                    path: modifyRun
                  - type: endpoint
                    key: submitToolOuputsToRun
                    path: submitToolOutputs
                  - type: endpoint
                    key: cancelRun
                    path: cancelRun
                  - type: object
                    key: RunObject
                    path: object
                  - type: object
                    key: RunStepObject
                    path: step-object
              - id: completions
                title: Completions
                legacy: true
                description: >
                  Given a prompt, the model will return one or more predicted
                  completions along with the probabilities of alternative tokens
                  at each position. Most developer should use our [Chat
                  Completions
                  API](/docs/guides/text-generation/text-generation-models) to
                  leverage our best and newest models. Most models that support
                  the legacy Completions endpoint [will be shut off on January
                  4th, 2024](/docs/deprecations/2023-07-06-gpt-and-embeddings).
                sections:
                  - type: endpoint
                    key: createCompletion
                    path: create
                  - type: object
                    key: CreateCompletionResponse
                    path: nu
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/assistants-openapi-search.yml
      - type: APIs.io Search
        url: overlays/assistants-openapi-search.yml
    aid: openai:openai-assistants-api
  - name: OpenAI Audio API
    description: >-
      The Audio API provides two speech to text endpoints, transcriptions and
      translations, based on our state-of-the-art open source large-v2 Whisper
      model.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/guides/speech-to-text
    baseURL: https://platform.openai.com/
    tags:
      - Audio
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/audio-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: ' audio'
            license:
              name: MIT
              url: https://github.com/openai/openai-openapi/blob/master/LICENSE
          tags:
            - name: Assistants
              description: Build Assistants that can call models and use tools.
            - name: Audio
              description: Learn how to turn audio into text or text into audio.
            - name: Chat
              description: >-
                Given a list of messages comprising a conversation, the model
                will return a response.
            - name: Completions
              description: >-
                Given a prompt, the model will return one or more predicted
                completions, and can also return the probabilities of
                alternative tokens at each position.
            - name: Embeddings
              description: >-
                Get a vector representation of a given input that can be easily
                consumed by machine learning models and algorithms.
            - name: Fine-tuning
              description: >-
                Manage fine-tuning jobs to tailor a model to your specific
                training data.
            - name: Files
              description: >-
                Files are used to upload documents that can be used with
                features like Assistants and Fine-tuning.
            - name: Images
              description: >-
                Given a prompt and/or an input image, the model will generate a
                new image.
            - name: Models
              description: List and describe the various models available in the API.
            - name: Moderations
              description: >-
                Given a input text, outputs if the model classifies it as
                violating OpenAI's content policy.
          paths:
            /audio/speech:
              post:
                tags:
                  - Audio
                summary: Generates audio from the input text.
            /audio/transcriptions:
              post:
                tags:
                  - Audio
                summary: Transcribes audio into the input language.
            /audio/translations:
              post:
                tags:
                  - Audio
                summary: Translates audio into English.
          x-oaiMeta:
            groups:
              - id: audio
                title: Audio
                description: |
                  Learn how to turn audio into text or text into audio.

                  Related guide: [Speech to text](/docs/guides/speech-to-text)
                sections:
                  - type: endpoint
                    key: createSpeech
                    path: createSpeech
                  - type: endpoint
                    key: createTranscription
                    path: createTranscription
                  - type: endpoint
                    key: createTranslation
                    path: createTranslation
              - id: chat
                title: Chat
                description: >
                  Given a list of messages comprising a conversation, the model
                  will return a response.


                  Related guide: [Chat
                  Completions](/docs/guides/text-generation)
                sections:
                  - type: endpoint
                    key: createChatCompletion
                    path: create
                  - type: object
                    key: CreateChatCompletionResponse
                    path: object
                  - type: object
                    key: CreateChatCompletionStreamResponse
                    path: streaming
              - id: embeddings
                title: Embeddings
                description: >
                  Get a vector representation of a given input that can be
                  easily consumed by machine learning models and algorithms.


                  Related guide: [Embeddings](/docs/guides/embeddings)
                sections:
                  - type: endpoint
                    key: createEmbedding
                    path: create
                  - type: object
                    key: Embedding
                    path: object
              - id: fine-tuning
                title: Fine-tuning
                description: >
                  Manage fine-tuning jobs to tailor a model to your specific
                  training data.


                  Related guide: [Fine-tune models](/docs/guides/fine-tuning)
                sections:
                  - type: endpoint
                    key: createFineTuningJob
                    path: create
                  - type: endpoint
                    key: listPaginatedFineTuningJobs
                    path: list
                  - type: endpoint
                    key: listFineTuningEvents
                    path: list-events
                  - type: endpoint
                    key: retrieveFineTuningJob
                    path: retrieve
                  - type: endpoint
                    key: cancelFineTuningJob
                    path: cancel
                  - type: object
                    key: FineTuningJob
                    path: object
                  - type: object
                    key: FineTuningJobEvent
                    path: event-object
              - id: files
                title: Files
                description: >
                  Files are used to upload documents that can be used with
                  features like [Assistants](/docs/api-reference/assistants) and
                  [Fine-tuning](/docs/api-reference/fine-tuning).
                sections:
                  - type: endpoint
                    key: createFile
                    path: create
                  - type: endpoint
                    key: listFiles
                    path: list
                  - type: endpoint
                    key: retrieveFile
                    path: retrieve
                  - type: endpoint
                    key: deleteFile
                    path: delete
                  - type: endpoint
                    key: downloadFile
                    path: retrieve-contents
                  - type: object
                    key: OpenAIFile
                    path: object
              - id: images
                title: Images
                description: >
                  Given a prompt and/or an input image, the model will generate
                  a new image.


                  Related guide: [Image generation](/docs/guides/images)
                sections:
                  - type: endpoint
                    key: createImage
                    path: create
                  - type: endpoint
                    key: createImageEdit
                    path: createEdit
                  - type: endpoint
                    key: createImageVariation
                    path: createVariation
                  - type: object
                    key: Image
                    path: object
              - id: models
                title: Models
                description: >
                  List and describe the various models available in the API. You
                  can refer to the [Models](/docs/models) documentation to
                  understand what models are available and the differences
                  between them.
                sections:
                  - type: endpoint
                    key: listModels
                    path: list
                  - type: endpoint
                    key: retrieveModel
                    path: retrieve
                  - type: endpoint
                    key: deleteModel
                    path: delete
                  - type: object
                    key: Model
                    path: object
              - id: moderations
                title: Moderations
                description: >
                  Given a input text, outputs if the model classifies it as
                  violating OpenAI's content policy.


                  Related guide: [Moderations](/docs/guides/moderation)
                sections:
                  - type: endpoint
                    key: createModeration
                    path: create
                  - type: object
                    key: CreateModerationResponse
                    path: object
              - id: assistants
                title: Assistants
                beta: true
                description: >
                  Build assistants that can call models and use tools to perform
                  tasks.


                  [Get started with the Assistants API](/docs/assistants)
                sections:
                  - type: endpoint
                    key: createAssistant
                    path: createAssistant
                  - type: endpoint
                    key: createAssistantFile
                    path: createAssistantFile
                  - type: endpoint
                    key: listAssistants
                    path: listAssistants
                  - type: endpoint
                    key: listAssistantFiles
                    path: listAssistantFiles
                  - type: endpoint
                    key: getAssistant
                    path: getAssistant
                  - type: endpoint
                    key: getAssistantFile
                    path: getAssistantFile
                  - type: endpoint
                    key: modifyAssistant
                    path: modifyAssistant
                  - type: endpoint
                    key: deleteAssistant
                    path: deleteAssistant
                  - type: endpoint
                    key: deleteAssistantFile
                    path: deleteAssistantFile
                  - type: object
                    key: AssistantObject
                    path: object
                  - type: object
                    key: AssistantFileObject
                    path: file-object
              - id: threads
                title: Threads
                beta: true
                description: |
                  Create threads that assistants can interact with.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createThread
                    path: createThread
                  - type: endpoint
                    key: getThread
                    path: getThread
                  - type: endpoint
                    key: modifyThread
                    path: modifyThread
                  - type: endpoint
                    key: deleteThread
                    path: deleteThread
                  - type: object
                    key: ThreadObject
                    path: object
              - id: messages
                title: Messages
                beta: true
                description: |
                  Create messages within threads

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createMessage
                    path: createMessage
                  - type: endpoint
                    key: listMessages
                    path: listMessages
                  - type: endpoint
                    key: listMessageFiles
                    path: listMessageFiles
                  - type: endpoint
                    key: getMessage
                    path: getMessage
                  - type: endpoint
                    key: getMessageFile
                    path: getMessageFile
                  - type: endpoint
                    key: modifyMessage
                    path: modifyMessage
                  - type: object
                    key: MessageObject
                    path: object
                  - type: object
                    key: MessageFileObject
                    path: file-object
              - id: runs
                title: Runs
                beta: true
                description: |
                  Represents an execution run on a thread.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createRun
                    path: createRun
                  - type: endpoint
                    key: createThreadAndRun
                    path: createThreadAndRun
                  - type: endpoint
                    key: listRuns
                    path: listRuns
                  - type: endpoint
                    key: listRunSteps
                    path: listRunSteps
                  - type: endpoint
                    key: getRun
                    path: getRun
                  - type: endpoint
                    key: getRunStep
                    path: getRunStep
                  - type: endpoint
                    key: modifyRun
                    path: modifyRun
                  - type: endpoint
                    key: submitToolOuputsToRun
                    path: submitToolOutputs
                  - type: endpoint
                    key: cancelRun
                    path: cancelRun
                  - type: object
                    key: RunObject
                    path: object
                  - type: object
                    key: RunStepObject
                    path: step-object
              - id: completions
                title: Completions
                legacy: true
                description: >
                  Given a prompt, the model will return one or more predicted
                  completions along with the probabilities of alternative tokens
                  at each position. Most developer should use our [Chat
                  Completions
                  API](/docs/guides/text-generation/text-generation-models) to
                  leverage our best and newest models. Most models that support
                  the legacy Completions endpoint [will be shut off on January
                  4th, 2024](/docs/deprecations/2023-07-06-gpt-and-embeddings).
                sections:
                  - type: endpoint
                    key: createCompletion
                    path: create
                  - type: object
                    key: CreateCompletionResponse
                    path: nu
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/audio-openapi-search.yml
      - type: APIs.io Search
        url: overlays/audio-openapi-search.yml
    aid: openai:openai-audio-api
  - name: OpenAI Chat API
    description: >-
      Given a list of messages comprising a conversation, the model will return
      a response., providing an AI chat interface you can use to engage with
      users.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/chat
    baseURL: https://platform.openai.com/
    tags:
      - Chat
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/chat-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: OpenAI Chat
            license:
              name: MIT
              url: https://github.com/openai/openai-openapi/blob/master/LICENSE
          tags:
            - name: Assistants
              description: Build Assistants that can call models and use tools.
            - name: Audio
              description: Learn how to turn audio into text or text into audio.
            - name: Chat
              description: >-
                Given a list of messages comprising a conversation, the model
                will return a response.
            - name: Completions
              description: >-
                Given a prompt, the model will return one or more predicted
                completions, and can also return the probabilities of
                alternative tokens at each position.
            - name: Embeddings
              description: >-
                Get a vector representation of a given input that can be easily
                consumed by machine learning models and algorithms.
            - name: Fine-tuning
              description: >-
                Manage fine-tuning jobs to tailor a model to your specific
                training data.
            - name: Files
              description: >-
                Files are used to upload documents that can be used with
                features like Assistants and Fine-tuning.
            - name: Images
              description: >-
                Given a prompt and/or an input image, the model will generate a
                new image.
            - name: Models
              description: List and describe the various models available in the API.
            - name: Moderations
              description: >-
                Given a input text, outputs if the model classifies it as
                violating OpenAI's content policy.
          paths:
            /chat/completions:
              post:
                tags:
                  - Chat
                summary: Creates a model response for the given chat conversation.
          x-oaiMeta:
            groups:
              - id: audio
                title: Audio
                description: |
                  Learn how to turn audio into text or text into audio.

                  Related guide: [Speech to text](/docs/guides/speech-to-text)
                sections:
                  - type: endpoint
                    key: createSpeech
                    path: createSpeech
                  - type: endpoint
                    key: createTranscription
                    path: createTranscription
                  - type: endpoint
                    key: createTranslation
                    path: createTranslation
              - id: chat
                title: Chat
                description: >
                  Given a list of messages comprising a conversation, the model
                  will return a response.


                  Related guide: [Chat
                  Completions](/docs/guides/text-generation)
                sections:
                  - type: endpoint
                    key: createChatCompletion
                    path: create
                  - type: object
                    key: CreateChatCompletionResponse
                    path: object
                  - type: object
                    key: CreateChatCompletionStreamResponse
                    path: streaming
              - id: embeddings
                title: Embeddings
                description: >
                  Get a vector representation of a given input that can be
                  easily consumed by machine learning models and algorithms.


                  Related guide: [Embeddings](/docs/guides/embeddings)
                sections:
                  - type: endpoint
                    key: createEmbedding
                    path: create
                  - type: object
                    key: Embedding
                    path: object
              - id: fine-tuning
                title: Fine-tuning
                description: >
                  Manage fine-tuning jobs to tailor a model to your specific
                  training data.


                  Related guide: [Fine-tune models](/docs/guides/fine-tuning)
                sections:
                  - type: endpoint
                    key: createFineTuningJob
                    path: create
                  - type: endpoint
                    key: listPaginatedFineTuningJobs
                    path: list
                  - type: endpoint
                    key: listFineTuningEvents
                    path: list-events
                  - type: endpoint
                    key: retrieveFineTuningJob
                    path: retrieve
                  - type: endpoint
                    key: cancelFineTuningJob
                    path: cancel
                  - type: object
                    key: FineTuningJob
                    path: object
                  - type: object
                    key: FineTuningJobEvent
                    path: event-object
              - id: files
                title: Files
                description: >
                  Files are used to upload documents that can be used with
                  features like [Assistants](/docs/api-reference/assistants) and
                  [Fine-tuning](/docs/api-reference/fine-tuning).
                sections:
                  - type: endpoint
                    key: createFile
                    path: create
                  - type: endpoint
                    key: listFiles
                    path: list
                  - type: endpoint
                    key: retrieveFile
                    path: retrieve
                  - type: endpoint
                    key: deleteFile
                    path: delete
                  - type: endpoint
                    key: downloadFile
                    path: retrieve-contents
                  - type: object
                    key: OpenAIFile
                    path: object
              - id: images
                title: Images
                description: >
                  Given a prompt and/or an input image, the model will generate
                  a new image.


                  Related guide: [Image generation](/docs/guides/images)
                sections:
                  - type: endpoint
                    key: createImage
                    path: create
                  - type: endpoint
                    key: createImageEdit
                    path: createEdit
                  - type: endpoint
                    key: createImageVariation
                    path: createVariation
                  - type: object
                    key: Image
                    path: object
              - id: models
                title: Models
                description: >
                  List and describe the various models available in the API. You
                  can refer to the [Models](/docs/models) documentation to
                  understand what models are available and the differences
                  between them.
                sections:
                  - type: endpoint
                    key: listModels
                    path: list
                  - type: endpoint
                    key: retrieveModel
                    path: retrieve
                  - type: endpoint
                    key: deleteModel
                    path: delete
                  - type: object
                    key: Model
                    path: object
              - id: moderations
                title: Moderations
                description: >
                  Given a input text, outputs if the model classifies it as
                  violating OpenAI's content policy.


                  Related guide: [Moderations](/docs/guides/moderation)
                sections:
                  - type: endpoint
                    key: createModeration
                    path: create
                  - type: object
                    key: CreateModerationResponse
                    path: object
              - id: assistants
                title: Assistants
                beta: true
                description: >
                  Build assistants that can call models and use tools to perform
                  tasks.


                  [Get started with the Assistants API](/docs/assistants)
                sections:
                  - type: endpoint
                    key: createAssistant
                    path: createAssistant
                  - type: endpoint
                    key: createAssistantFile
                    path: createAssistantFile
                  - type: endpoint
                    key: listAssistants
                    path: listAssistants
                  - type: endpoint
                    key: listAssistantFiles
                    path: listAssistantFiles
                  - type: endpoint
                    key: getAssistant
                    path: getAssistant
                  - type: endpoint
                    key: getAssistantFile
                    path: getAssistantFile
                  - type: endpoint
                    key: modifyAssistant
                    path: modifyAssistant
                  - type: endpoint
                    key: deleteAssistant
                    path: deleteAssistant
                  - type: endpoint
                    key: deleteAssistantFile
                    path: deleteAssistantFile
                  - type: object
                    key: AssistantObject
                    path: object
                  - type: object
                    key: AssistantFileObject
                    path: file-object
              - id: threads
                title: Threads
                beta: true
                description: |
                  Create threads that assistants can interact with.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createThread
                    path: createThread
                  - type: endpoint
                    key: getThread
                    path: getThread
                  - type: endpoint
                    key: modifyThread
                    path: modifyThread
                  - type: endpoint
                    key: deleteThread
                    path: deleteThread
                  - type: object
                    key: ThreadObject
                    path: object
              - id: messages
                title: Messages
                beta: true
                description: |
                  Create messages within threads

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createMessage
                    path: createMessage
                  - type: endpoint
                    key: listMessages
                    path: listMessages
                  - type: endpoint
                    key: listMessageFiles
                    path: listMessageFiles
                  - type: endpoint
                    key: getMessage
                    path: getMessage
                  - type: endpoint
                    key: getMessageFile
                    path: getMessageFile
                  - type: endpoint
                    key: modifyMessage
                    path: modifyMessage
                  - type: object
                    key: MessageObject
                    path: object
                  - type: object
                    key: MessageFileObject
                    path: file-object
              - id: runs
                title: Runs
                beta: true
                description: |
                  Represents an execution run on a thread.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createRun
                    path: createRun
                  - type: endpoint
                    key: createThreadAndRun
                    path: createThreadAndRun
                  - type: endpoint
                    key: listRuns
                    path: listRuns
                  - type: endpoint
                    key: listRunSteps
                    path: listRunSteps
                  - type: endpoint
                    key: getRun
                    path: getRun
                  - type: endpoint
                    key: getRunStep
                    path: getRunStep
                  - type: endpoint
                    key: modifyRun
                    path: modifyRun
                  - type: endpoint
                    key: submitToolOuputsToRun
                    path: submitToolOutputs
                  - type: endpoint
                    key: cancelRun
                    path: cancelRun
                  - type: object
                    key: RunObject
                    path: object
                  - type: object
                    key: RunStepObject
                    path: step-object
              - id: completions
                title: Completions
                legacy: true
                description: >
                  Given a prompt, the model will return one or more predicted
                  completions along with the probabilities of alternative tokens
                  at each position. Most developer should use our [Chat
                  Completions
                  API](/docs/guides/text-generation/text-generation-models) to
                  leverage our best and newest models. Most models that support
                  the legacy Completions endpoint [will be shut off on January
                  4th, 2024](/docs/deprecations/2023-07-06-gpt-and-embeddings).
                sections:
                  - type: endpoint
                    key: createCompletion
                    path: create
                  - type: object
                    key: CreateCompletionResponse
                    path: nu
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/chat-openapi-search.yml
      - type: APIs.io Search
        url: overlays/chat-openapi-search.yml
    aid: openai:openai-chat-api
  - name: OpenAI Chat Completions API
    description: >-
      Chat models take a list of messages as input and return a model-generated
      message as output. Although the chat format is designed to make multi-turn
      conversations easy, it’s just as useful for single-turn tasks without any
      conversation.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://platform.openai.com/docs/guides/text-generation/chat-completions-api
    baseURL: https://platform.openai.com/
    tags:
      - Completions
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/completions-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: OpenAI Completions
            license:
              name: MIT
              url: https://github.com/openai/openai-openapi/blob/master/LICENSE
          tags:
            - name: Assistants
              description: Build Assistants that can call models and use tools.
            - name: Audio
              description: Learn how to turn audio into text or text into audio.
            - name: Chat
              description: >-
                Given a list of messages comprising a conversation, the model
                will return a response.
            - name: Completions
              description: >-
                Given a prompt, the model will return one or more predicted
                completions, and can also return the probabilities of
                alternative tokens at each position.
            - name: Embeddings
              description: >-
                Get a vector representation of a given input that can be easily
                consumed by machine learning models and algorithms.
            - name: Fine-tuning
              description: >-
                Manage fine-tuning jobs to tailor a model to your specific
                training data.
            - name: Files
              description: >-
                Files are used to upload documents that can be used with
                features like Assistants and Fine-tuning.
            - name: Images
              description: >-
                Given a prompt and/or an input image, the model will generate a
                new image.
            - name: Models
              description: List and describe the various models available in the API.
            - name: Moderations
              description: >-
                Given a input text, outputs if the model classifies it as
                violating OpenAI's content policy.
          paths:
            /chat/completions:
              post:
                tags:
                  - Chat
                summary: Creates a model response for the given chat conversation.
            /completions:
              post:
                tags:
                  - Completions
                summary: Creates a completion for the provided prompt and parameters.
          x-oaiMeta:
            groups:
              - id: audio
                title: Audio
                description: |
                  Learn how to turn audio into text or text into audio.

                  Related guide: [Speech to text](/docs/guides/speech-to-text)
                sections:
                  - type: endpoint
                    key: createSpeech
                    path: createSpeech
                  - type: endpoint
                    key: createTranscription
                    path: createTranscription
                  - type: endpoint
                    key: createTranslation
                    path: createTranslation
              - id: chat
                title: Chat
                description: >
                  Given a list of messages comprising a conversation, the model
                  will return a response.


                  Related guide: [Chat
                  Completions](/docs/guides/text-generation)
                sections:
                  - type: endpoint
                    key: createChatCompletion
                    path: create
                  - type: object
                    key: CreateChatCompletionResponse
                    path: object
                  - type: object
                    key: CreateChatCompletionStreamResponse
                    path: streaming
              - id: embeddings
                title: Embeddings
                description: >
                  Get a vector representation of a given input that can be
                  easily consumed by machine learning models and algorithms.


                  Related guide: [Embeddings](/docs/guides/embeddings)
                sections:
                  - type: endpoint
                    key: createEmbedding
                    path: create
                  - type: object
                    key: Embedding
                    path: object
              - id: fine-tuning
                title: Fine-tuning
                description: >
                  Manage fine-tuning jobs to tailor a model to your specific
                  training data.


                  Related guide: [Fine-tune models](/docs/guides/fine-tuning)
                sections:
                  - type: endpoint
                    key: createFineTuningJob
                    path: create
                  - type: endpoint
                    key: listPaginatedFineTuningJobs
                    path: list
                  - type: endpoint
                    key: listFineTuningEvents
                    path: list-events
                  - type: endpoint
                    key: retrieveFineTuningJob
                    path: retrieve
                  - type: endpoint
                    key: cancelFineTuningJob
                    path: cancel
                  - type: object
                    key: FineTuningJob
                    path: object
                  - type: object
                    key: FineTuningJobEvent
                    path: event-object
              - id: files
                title: Files
                description: >
                  Files are used to upload documents that can be used with
                  features like [Assistants](/docs/api-reference/assistants) and
                  [Fine-tuning](/docs/api-reference/fine-tuning).
                sections:
                  - type: endpoint
                    key: createFile
                    path: create
                  - type: endpoint
                    key: listFiles
                    path: list
                  - type: endpoint
                    key: retrieveFile
                    path: retrieve
                  - type: endpoint
                    key: deleteFile
                    path: delete
                  - type: endpoint
                    key: downloadFile
                    path: retrieve-contents
                  - type: object
                    key: OpenAIFile
                    path: object
              - id: images
                title: Images
                description: >
                  Given a prompt and/or an input image, the model will generate
                  a new image.


                  Related guide: [Image generation](/docs/guides/images)
                sections:
                  - type: endpoint
                    key: createImage
                    path: create
                  - type: endpoint
                    key: createImageEdit
                    path: createEdit
                  - type: endpoint
                    key: createImageVariation
                    path: createVariation
                  - type: object
                    key: Image
                    path: object
              - id: models
                title: Models
                description: >
                  List and describe the various models available in the API. You
                  can refer to the [Models](/docs/models) documentation to
                  understand what models are available and the differences
                  between them.
                sections:
                  - type: endpoint
                    key: listModels
                    path: list
                  - type: endpoint
                    key: retrieveModel
                    path: retrieve
                  - type: endpoint
                    key: deleteModel
                    path: delete
                  - type: object
                    key: Model
                    path: object
              - id: moderations
                title: Moderations
                description: >
                  Given a input text, outputs if the model classifies it as
                  violating OpenAI's content policy.


                  Related guide: [Moderations](/docs/guides/moderation)
                sections:
                  - type: endpoint
                    key: createModeration
                    path: create
                  - type: object
                    key: CreateModerationResponse
                    path: object
              - id: assistants
                title: Assistants
                beta: true
                description: >
                  Build assistants that can call models and use tools to perform
                  tasks.


                  [Get started with the Assistants API](/docs/assistants)
                sections:
                  - type: endpoint
                    key: createAssistant
                    path: createAssistant
                  - type: endpoint
                    key: createAssistantFile
                    path: createAssistantFile
                  - type: endpoint
                    key: listAssistants
                    path: listAssistants
                  - type: endpoint
                    key: listAssistantFiles
                    path: listAssistantFiles
                  - type: endpoint
                    key: getAssistant
                    path: getAssistant
                  - type: endpoint
                    key: getAssistantFile
                    path: getAssistantFile
                  - type: endpoint
                    key: modifyAssistant
                    path: modifyAssistant
                  - type: endpoint
                    key: deleteAssistant
                    path: deleteAssistant
                  - type: endpoint
                    key: deleteAssistantFile
                    path: deleteAssistantFile
                  - type: object
                    key: AssistantObject
                    path: object
                  - type: object
                    key: AssistantFileObject
                    path: file-object
              - id: threads
                title: Threads
                beta: true
                description: |
                  Create threads that assistants can interact with.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createThread
                    path: createThread
                  - type: endpoint
                    key: getThread
                    path: getThread
                  - type: endpoint
                    key: modifyThread
                    path: modifyThread
                  - type: endpoint
                    key: deleteThread
                    path: deleteThread
                  - type: object
                    key: ThreadObject
                    path: object
              - id: messages
                title: Messages
                beta: true
                description: |
                  Create messages within threads

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createMessage
                    path: createMessage
                  - type: endpoint
                    key: listMessages
                    path: listMessages
                  - type: endpoint
                    key: listMessageFiles
                    path: listMessageFiles
                  - type: endpoint
                    key: getMessage
                    path: getMessage
                  - type: endpoint
                    key: getMessageFile
                    path: getMessageFile
                  - type: endpoint
                    key: modifyMessage
                    path: modifyMessage
                  - type: object
                    key: MessageObject
                    path: object
                  - type: object
                    key: MessageFileObject
                    path: file-object
              - id: runs
                title: Runs
                beta: true
                description: |
                  Represents an execution run on a thread.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createRun
                    path: createRun
                  - type: endpoint
                    key: createThreadAndRun
                    path: createThreadAndRun
                  - type: endpoint
                    key: listRuns
                    path: listRuns
                  - type: endpoint
                    key: listRunSteps
                    path: listRunSteps
                  - type: endpoint
                    key: getRun
                    path: getRun
                  - type: endpoint
                    key: getRunStep
                    path: getRunStep
                  - type: endpoint
                    key: modifyRun
                    path: modifyRun
                  - type: endpoint
                    key: submitToolOuputsToRun
                    path: submitToolOutputs
                  - type: endpoint
                    key: cancelRun
                    path: cancelRun
                  - type: object
                    key: RunObject
                    path: object
                  - type: object
                    key: RunStepObject
                    path: step-object
              - id: completions
                title: Completions
                legacy: true
                description: >
                  Given a prompt, the model will return one or more predicted
                  completions along with the probabilities of alternative tokens
                  at each position. Most developer should use our [Chat
                  Completions
                  API](/docs/guides/text-generation/text-generation-models) to
                  leverage our best and newest models. Most models that support
                  the legacy Completions endpoint [will be shut off on January
                  4th, 2024](/docs/deprecations/2023-07-06-gpt-and-embeddings).
                sections:
                  - type: endpoint
                    key: createCompletion
                    path: create
                  - type: object
                    key: CreateCompletionResponse
                    path: nu
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/completions-openapi-search.yml
      - type: APIs.io Search
        url: overlays/completions-openapi-search.yml
    aid: openai:openai-chat-completions-api
  - name: OpenAI Embeddings API
    description: >-
      Learn how to turn text into numbers, unlocking use cases like search.
      OpenAI’s text embeddings measure the relatedness of text strings.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/guides/embeddings
    baseURL: https://platform.openai.com/
    tags:
      - Embed
      - Embeddings
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/embeddings-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: ' embeddings'
            license:
              name: MIT
              url: https://github.com/openai/openai-openapi/blob/master/LICENSE
          tags:
            - name: Assistants
              description: Build Assistants that can call models and use tools.
            - name: Audio
              description: Learn how to turn audio into text or text into audio.
            - name: Chat
              description: >-
                Given a list of messages comprising a conversation, the model
                will return a response.
            - name: Completions
              description: >-
                Given a prompt, the model will return one or more predicted
                completions, and can also return the probabilities of
                alternative tokens at each position.
            - name: Embeddings
              description: >-
                Get a vector representation of a given input that can be easily
                consumed by machine learning models and algorithms.
            - name: Fine-tuning
              description: >-
                Manage fine-tuning jobs to tailor a model to your specific
                training data.
            - name: Files
              description: >-
                Files are used to upload documents that can be used with
                features like Assistants and Fine-tuning.
            - name: Images
              description: >-
                Given a prompt and/or an input image, the model will generate a
                new image.
            - name: Models
              description: List and describe the various models available in the API.
            - name: Moderations
              description: >-
                Given a input text, outputs if the model classifies it as
                violating OpenAI's content policy.
          paths:
            /embeddings:
              post:
                tags:
                  - Embeddings
                summary: Creates an embedding vector representing the input text.
          x-oaiMeta:
            groups:
              - id: audio
                title: Audio
                description: |
                  Learn how to turn audio into text or text into audio.

                  Related guide: [Speech to text](/docs/guides/speech-to-text)
                sections:
                  - type: endpoint
                    key: createSpeech
                    path: createSpeech
                  - type: endpoint
                    key: createTranscription
                    path: createTranscription
                  - type: endpoint
                    key: createTranslation
                    path: createTranslation
              - id: chat
                title: Chat
                description: >
                  Given a list of messages comprising a conversation, the model
                  will return a response.


                  Related guide: [Chat
                  Completions](/docs/guides/text-generation)
                sections:
                  - type: endpoint
                    key: createChatCompletion
                    path: create
                  - type: object
                    key: CreateChatCompletionResponse
                    path: object
                  - type: object
                    key: CreateChatCompletionStreamResponse
                    path: streaming
              - id: embeddings
                title: Embeddings
                description: >
                  Get a vector representation of a given input that can be
                  easily consumed by machine learning models and algorithms.


                  Related guide: [Embeddings](/docs/guides/embeddings)
                sections:
                  - type: endpoint
                    key: createEmbedding
                    path: create
                  - type: object
                    key: Embedding
                    path: object
              - id: fine-tuning
                title: Fine-tuning
                description: >
                  Manage fine-tuning jobs to tailor a model to your specific
                  training data.


                  Related guide: [Fine-tune models](/docs/guides/fine-tuning)
                sections:
                  - type: endpoint
                    key: createFineTuningJob
                    path: create
                  - type: endpoint
                    key: listPaginatedFineTuningJobs
                    path: list
                  - type: endpoint
                    key: listFineTuningEvents
                    path: list-events
                  - type: endpoint
                    key: retrieveFineTuningJob
                    path: retrieve
                  - type: endpoint
                    key: cancelFineTuningJob
                    path: cancel
                  - type: object
                    key: FineTuningJob
                    path: object
                  - type: object
                    key: FineTuningJobEvent
                    path: event-object
              - id: files
                title: Files
                description: >
                  Files are used to upload documents that can be used with
                  features like [Assistants](/docs/api-reference/assistants) and
                  [Fine-tuning](/docs/api-reference/fine-tuning).
                sections:
                  - type: endpoint
                    key: createFile
                    path: create
                  - type: endpoint
                    key: listFiles
                    path: list
                  - type: endpoint
                    key: retrieveFile
                    path: retrieve
                  - type: endpoint
                    key: deleteFile
                    path: delete
                  - type: endpoint
                    key: downloadFile
                    path: retrieve-contents
                  - type: object
                    key: OpenAIFile
                    path: object
              - id: images
                title: Images
                description: >
                  Given a prompt and/or an input image, the model will generate
                  a new image.


                  Related guide: [Image generation](/docs/guides/images)
                sections:
                  - type: endpoint
                    key: createImage
                    path: create
                  - type: endpoint
                    key: createImageEdit
                    path: createEdit
                  - type: endpoint
                    key: createImageVariation
                    path: createVariation
                  - type: object
                    key: Image
                    path: object
              - id: models
                title: Models
                description: >
                  List and describe the various models available in the API. You
                  can refer to the [Models](/docs/models) documentation to
                  understand what models are available and the differences
                  between them.
                sections:
                  - type: endpoint
                    key: listModels
                    path: list
                  - type: endpoint
                    key: retrieveModel
                    path: retrieve
                  - type: endpoint
                    key: deleteModel
                    path: delete
                  - type: object
                    key: Model
                    path: object
              - id: moderations
                title: Moderations
                description: >
                  Given a input text, outputs if the model classifies it as
                  violating OpenAI's content policy.


                  Related guide: [Moderations](/docs/guides/moderation)
                sections:
                  - type: endpoint
                    key: createModeration
                    path: create
                  - type: object
                    key: CreateModerationResponse
                    path: object
              - id: assistants
                title: Assistants
                beta: true
                description: >
                  Build assistants that can call models and use tools to perform
                  tasks.


                  [Get started with the Assistants API](/docs/assistants)
                sections:
                  - type: endpoint
                    key: createAssistant
                    path: createAssistant
                  - type: endpoint
                    key: createAssistantFile
                    path: createAssistantFile
                  - type: endpoint
                    key: listAssistants
                    path: listAssistants
                  - type: endpoint
                    key: listAssistantFiles
                    path: listAssistantFiles
                  - type: endpoint
                    key: getAssistant
                    path: getAssistant
                  - type: endpoint
                    key: getAssistantFile
                    path: getAssistantFile
                  - type: endpoint
                    key: modifyAssistant
                    path: modifyAssistant
                  - type: endpoint
                    key: deleteAssistant
                    path: deleteAssistant
                  - type: endpoint
                    key: deleteAssistantFile
                    path: deleteAssistantFile
                  - type: object
                    key: AssistantObject
                    path: object
                  - type: object
                    key: AssistantFileObject
                    path: file-object
              - id: threads
                title: Threads
                beta: true
                description: |
                  Create threads that assistants can interact with.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createThread
                    path: createThread
                  - type: endpoint
                    key: getThread
                    path: getThread
                  - type: endpoint
                    key: modifyThread
                    path: modifyThread
                  - type: endpoint
                    key: deleteThread
                    path: deleteThread
                  - type: object
                    key: ThreadObject
                    path: object
              - id: messages
                title: Messages
                beta: true
                description: |
                  Create messages within threads

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createMessage
                    path: createMessage
                  - type: endpoint
                    key: listMessages
                    path: listMessages
                  - type: endpoint
                    key: listMessageFiles
                    path: listMessageFiles
                  - type: endpoint
                    key: getMessage
                    path: getMessage
                  - type: endpoint
                    key: getMessageFile
                    path: getMessageFile
                  - type: endpoint
                    key: modifyMessage
                    path: modifyMessage
                  - type: object
                    key: MessageObject
                    path: object
                  - type: object
                    key: MessageFileObject
                    path: file-object
              - id: runs
                title: Runs
                beta: true
                description: |
                  Represents an execution run on a thread.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createRun
                    path: createRun
                  - type: endpoint
                    key: createThreadAndRun
                    path: createThreadAndRun
                  - type: endpoint
                    key: listRuns
                    path: listRuns
                  - type: endpoint
                    key: listRunSteps
                    path: listRunSteps
                  - type: endpoint
                    key: getRun
                    path: getRun
                  - type: endpoint
                    key: getRunStep
                    path: getRunStep
                  - type: endpoint
                    key: modifyRun
                    path: modifyRun
                  - type: endpoint
                    key: submitToolOuputsToRun
                    path: submitToolOutputs
                  - type: endpoint
                    key: cancelRun
                    path: cancelRun
                  - type: object
                    key: RunObject
                    path: object
                  - type: object
                    key: RunStepObject
                    path: step-object
              - id: completions
                title: Completions
                legacy: true
                description: >
                  Given a prompt, the model will return one or more predicted
                  completions along with the probabilities of alternative tokens
                  at each position. Most developer should use our [Chat
                  Completions
                  API](/docs/guides/text-generation/text-generation-models) to
                  leverage our best and newest models. Most models that support
                  the legacy Completions endpoint [will be shut off on January
                  4th, 2024](/docs/deprecations/2023-07-06-gpt-and-embeddings).
                sections:
                  - type: endpoint
                    key: createCompletion
                    path: create
                  - type: object
                    key: CreateCompletionResponse
                    path: nu
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/embeddings-openapi-search.yml
      - type: APIs.io Search
        url: overlays/embeddings-openapi-search.yml
    aid: openai:openai-embeddings-api
  - name: OpenAI Files API
    description: >-
      Files are used to upload documents that can be used with features like
      Assistants and Fine-tuning. Upload a file that can be used across various
      endpoints. The size of all the files uploaded by one organization can be
      up to 100 GB.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/files
    baseURL: https://platform.openai.com/
    tags:
      - Files
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/files-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: ' files'
            license:
              name: MIT
              url: https://github.com/openai/openai-openapi/blob/master/LICENSE
          tags:
            - name: Assistants
              description: Build Assistants that can call models and use tools.
            - name: Audio
              description: Learn how to turn audio into text or text into audio.
            - name: Chat
              description: >-
                Given a list of messages comprising a conversation, the model
                will return a response.
            - name: Completions
              description: >-
                Given a prompt, the model will return one or more predicted
                completions, and can also return the probabilities of
                alternative tokens at each position.
            - name: Embeddings
              description: >-
                Get a vector representation of a given input that can be easily
                consumed by machine learning models and algorithms.
            - name: Fine-tuning
              description: >-
                Manage fine-tuning jobs to tailor a model to your specific
                training data.
            - name: Files
              description: >-
                Files are used to upload documents that can be used with
                features like Assistants and Fine-tuning.
            - name: Images
              description: >-
                Given a prompt and/or an input image, the model will generate a
                new image.
            - name: Models
              description: List and describe the various models available in the API.
            - name: Moderations
              description: >-
                Given a input text, outputs if the model classifies it as
                violating OpenAI's content policy.
          paths:
            /files:
              get:
                tags:
                  - Files
                summary: >-
                  Returns a list of files that belong to the user's
                  organization.
              post:
                tags:
                  - Files
                summary: >
                  Upload a file that can be used across various endpoints. The
                  size of all the files uploaded by one organization can be up
                  to 100 GB.


                  The size of individual files can be a maximum of 512 MB or 2
                  million tokens for Assistants. See the [Assistants Tools
                  guide](/docs/assistants/tools) to learn more about the types
                  of files supported. The Fine-tuning API only supports `.jsonl`
                  files.


                  Please [contact us](https://help.openai.com/) if you need to
                  increase these storage limits.
            /files/{file_id}:
              delete:
                tags:
                  - Files
                summary: Delete a file.
              get:
                tags:
                  - Files
                summary: Returns information about a specific file.
            /files/{file_id}/content:
              get:
                tags:
                  - Files
                summary: Returns the contents of the specified file.
            /assistants/{assistant_id}/files:
              get:
                tags:
                  - Assistants
                summary: Returns a list of assistant files.
              post:
                tags:
                  - Assistants
                summary: >-
                  Create an assistant file by attaching a
                  [File](/docs/api-reference/files) to an
                  [assistant](/docs/api-reference/assistants).
            /assistants/{assistant_id}/files/{file_id}:
              get:
                tags:
                  - Assistants
                summary: Retrieves an AssistantFile.
              delete:
                tags:
                  - Assistants
                summary: Delete an assistant file.
            /threads/{thread_id}/messages/{message_id}/files:
              get:
                tags:
                  - Assistants
                summary: Returns a list of message files.
            /threads/{thread_id}/messages/{message_id}/files/{file_id}:
              get:
                tags:
                  - Assistants
                summary: Retrieves a message file.
          x-oaiMeta:
            groups:
              - id: audio
                title: Audio
                description: |
                  Learn how to turn audio into text or text into audio.

                  Related guide: [Speech to text](/docs/guides/speech-to-text)
                sections:
                  - type: endpoint
                    key: createSpeech
                    path: createSpeech
                  - type: endpoint
                    key: createTranscription
                    path: createTranscription
                  - type: endpoint
                    key: createTranslation
                    path: createTranslation
              - id: chat
                title: Chat
                description: >
                  Given a list of messages comprising a conversation, the model
                  will return a response.


                  Related guide: [Chat
                  Completions](/docs/guides/text-generation)
                sections:
                  - type: endpoint
                    key: createChatCompletion
                    path: create
                  - type: object
                    key: CreateChatCompletionResponse
                    path: object
                  - type: object
                    key: CreateChatCompletionStreamResponse
                    path: streaming
              - id: embeddings
                title: Embeddings
                description: >
                  Get a vector representation of a given input that can be
                  easily consumed by machine learning models and algorithms.


                  Related guide: [Embeddings](/docs/guides/embeddings)
                sections:
                  - type: endpoint
                    key: createEmbedding
                    path: create
                  - type: object
                    key: Embedding
                    path: object
              - id: fine-tuning
                title: Fine-tuning
                description: >
                  Manage fine-tuning jobs to tailor a model to your specific
                  training data.


                  Related guide: [Fine-tune models](/docs/guides/fine-tuning)
                sections:
                  - type: endpoint
                    key: createFineTuningJob
                    path: create
                  - type: endpoint
                    key: listPaginatedFineTuningJobs
                    path: list
                  - type: endpoint
                    key: listFineTuningEvents
                    path: list-events
                  - type: endpoint
                    key: retrieveFineTuningJob
                    path: retrieve
                  - type: endpoint
                    key: cancelFineTuningJob
                    path: cancel
                  - type: object
                    key: FineTuningJob
                    path: object
                  - type: object
                    key: FineTuningJobEvent
                    path: event-object
              - id: files
                title: Files
                description: >
                  Files are used to upload documents that can be used with
                  features like [Assistants](/docs/api-reference/assistants) and
                  [Fine-tuning](/docs/api-reference/fine-tuning).
                sections:
                  - type: endpoint
                    key: createFile
                    path: create
                  - type: endpoint
                    key: listFiles
                    path: list
                  - type: endpoint
                    key: retrieveFile
                    path: retrieve
                  - type: endpoint
                    key: deleteFile
                    path: delete
                  - type: endpoint
                    key: downloadFile
                    path: retrieve-contents
                  - type: object
                    key: OpenAIFile
                    path: object
              - id: images
                title: Images
                description: >
                  Given a prompt and/or an input image, the model will generate
                  a new image.


                  Related guide: [Image generation](/docs/guides/images)
                sections:
                  - type: endpoint
                    key: createImage
                    path: create
                  - type: endpoint
                    key: createImageEdit
                    path: createEdit
                  - type: endpoint
                    key: createImageVariation
                    path: createVariation
                  - type: object
                    key: Image
                    path: object
              - id: models
                title: Models
                description: >
                  List and describe the various models available in the API. You
                  can refer to the [Models](/docs/models) documentation to
                  understand what models are available and the differences
                  between them.
                sections:
                  - type: endpoint
                    key: listModels
                    path: list
                  - type: endpoint
                    key: retrieveModel
                    path: retrieve
                  - type: endpoint
                    key: deleteModel
                    path: delete
                  - type: object
                    key: Model
                    path: object
              - id: moderations
                title: Moderations
                description: >
                  Given a input text, outputs if the model classifies it as
                  violating OpenAI's content policy.


                  Related guide: [Moderations](/docs/guides/moderation)
                sections:
                  - type: endpoint
                    key: createModeration
                    path: create
                  - type: object
                    key: CreateModerationResponse
                    path: object
              - id: assistants
                title: Assistants
                beta: true
                description: >
                  Build assistants that can call models and use tools to perform
                  tasks.


                  [Get started with the Assistants API](/docs/assistants)
                sections:
                  - type: endpoint
                    key: createAssistant
                    path: createAssistant
                  - type: endpoint
                    key: createAssistantFile
                    path: createAssistantFile
                  - type: endpoint
                    key: listAssistants
                    path: listAssistants
                  - type: endpoint
                    key: listAssistantFiles
                    path: listAssistantFiles
                  - type: endpoint
                    key: getAssistant
                    path: getAssistant
                  - type: endpoint
                    key: getAssistantFile
                    path: getAssistantFile
                  - type: endpoint
                    key: modifyAssistant
                    path: modifyAssistant
                  - type: endpoint
                    key: deleteAssistant
                    path: deleteAssistant
                  - type: endpoint
                    key: deleteAssistantFile
                    path: deleteAssistantFile
                  - type: object
                    key: AssistantObject
                    path: object
                  - type: object
                    key: AssistantFileObject
                    path: file-object
              - id: threads
                title: Threads
                beta: true
                description: |
                  Create threads that assistants can interact with.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createThread
                    path: createThread
                  - type: endpoint
                    key: getThread
                    path: getThread
                  - type: endpoint
                    key: modifyThread
                    path: modifyThread
                  - type: endpoint
                    key: deleteThread
                    path: deleteThread
                  - type: object
                    key: ThreadObject
                    path: object
              - id: messages
                title: Messages
                beta: true
                description: |
                  Create messages within threads

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createMessage
                    path: createMessage
                  - type: endpoint
                    key: listMessages
                    path: listMessages
                  - type: endpoint
                    key: listMessageFiles
                    path: listMessageFiles
                  - type: endpoint
                    key: getMessage
                    path: getMessage
                  - type: endpoint
                    key: getMessageFile
                    path: getMessageFile
                  - type: endpoint
                    key: modifyMessage
                    path: modifyMessage
                  - type: object
                    key: MessageObject
                    path: object
                  - type: object
                    key: MessageFileObject
                    path: file-object
              - id: runs
                title: Runs
                beta: true
                description: |
                  Represents an execution run on a thread.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createRun
                    path: createRun
                  - type: endpoint
                    key: createThreadAndRun
                    path: createThreadAndRun
                  - type: endpoint
                    key: listRuns
                    path: listRuns
                  - type: endpoint
                    key: listRunSteps
                    path: listRunSteps
                  - type: endpoint
                    key: getRun
                    path: getRun
                  - type: endpoint
                    key: getRunStep
                    path: getRunStep
                  - type: endpoint
                    key: modifyRun
                    path: modifyRun
                  - type: endpoint
                    key: submitToolOuputsToRun
                    path: submitToolOutputs
                  - type: endpoint
                    key: cancelRun
                    path: cancelRun
                  - type: object
                    key: RunObject
                    path: object
                  - type: object
                    key: RunStepObject
                    path: step-object
              - id: completions
                title: Completions
                legacy: true
                description: >
                  Given a prompt, the model will return one or more predicted
                  completions along with the probabilities of alternative tokens
                  at each position. Most developer should use our [Chat
                  Completions
                  API](/docs/guides/text-generation/text-generation-models) to
                  leverage our best and newest models. Most models that support
                  the legacy Completions endpoint [will be shut off on January
                  4th, 2024](/docs/deprecations/2023-07-06-gpt-and-embeddings).
                sections:
                  - type: endpoint
                    key: createCompletion
                    path: create
                  - type: object
                    key: CreateCompletionResponse
                    path: nu
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/files-openapi-search.yml
      - type: APIs.io Search
        url: overlays/files-openapi-search.yml
    aid: openai:openai-files-api
  - name: OpenAI Fine Tuning API
    description: >-
      Manage fine-tuning jobs to tailor a model to your specific training data.
      Creates a fine-tuning job which begins the process of creating a new model
      from a given dataset.Response includes details of the enqueued job
      including job status and the name of the fine-tuned models once complete.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/fine-tuning
    baseURL: https://platform.openai.com/
    tags:
      - Fine Tuning
      - Models
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/fint-tuning-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/fint-tuning-openapi-search.yml
      - type: APIs.io Search
        url: overlays/fint-tuning-openapi-search.yml
    aid: openai:openai-fine-tuning-api
  - name: OpenAI Images API
    description: >-
      Learn how to generate or manipulate images with DALL·E in the API. The
      Images API provides three methods for interacting with images - creating
      images from scratch based on a text prompt, creating edited versions of
      images by having the model replace some areas of a pre-existing image,
      based on a new text prompt, Creating variations of an existing image.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/guides/images/image-generation
    baseURL: https://platform.openai.com/
    tags:
      - Images
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/images-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: ' images'
            license:
              name: MIT
              url: https://github.com/openai/openai-openapi/blob/master/LICENSE
          tags:
            - name: Assistants
              description: Build Assistants that can call models and use tools.
            - name: Audio
              description: Learn how to turn audio into text or text into audio.
            - name: Chat
              description: >-
                Given a list of messages comprising a conversation, the model
                will return a response.
            - name: Completions
              description: >-
                Given a prompt, the model will return one or more predicted
                completions, and can also return the probabilities of
                alternative tokens at each position.
            - name: Embeddings
              description: >-
                Get a vector representation of a given input that can be easily
                consumed by machine learning models and algorithms.
            - name: Fine-tuning
              description: >-
                Manage fine-tuning jobs to tailor a model to your specific
                training data.
            - name: Files
              description: >-
                Files are used to upload documents that can be used with
                features like Assistants and Fine-tuning.
            - name: Images
              description: >-
                Given a prompt and/or an input image, the model will generate a
                new image.
            - name: Models
              description: List and describe the various models available in the API.
            - name: Moderations
              description: >-
                Given a input text, outputs if the model classifies it as
                violating OpenAI's content policy.
          paths:
            /images/generations:
              post:
                tags:
                  - Images
                summary: Creates an image given a prompt.
            /images/edits:
              post:
                tags:
                  - Images
                summary: >-
                  Creates an edited or extended image given an original image
                  and a prompt.
            /images/variations:
              post:
                tags:
                  - Images
                summary: Creates a variation of a given image.
          x-oaiMeta:
            groups:
              - id: audio
                title: Audio
                description: |
                  Learn how to turn audio into text or text into audio.

                  Related guide: [Speech to text](/docs/guides/speech-to-text)
                sections:
                  - type: endpoint
                    key: createSpeech
                    path: createSpeech
                  - type: endpoint
                    key: createTranscription
                    path: createTranscription
                  - type: endpoint
                    key: createTranslation
                    path: createTranslation
              - id: chat
                title: Chat
                description: >
                  Given a list of messages comprising a conversation, the model
                  will return a response.


                  Related guide: [Chat
                  Completions](/docs/guides/text-generation)
                sections:
                  - type: endpoint
                    key: createChatCompletion
                    path: create
                  - type: object
                    key: CreateChatCompletionResponse
                    path: object
                  - type: object
                    key: CreateChatCompletionStreamResponse
                    path: streaming
              - id: embeddings
                title: Embeddings
                description: >
                  Get a vector representation of a given input that can be
                  easily consumed by machine learning models and algorithms.


                  Related guide: [Embeddings](/docs/guides/embeddings)
                sections:
                  - type: endpoint
                    key: createEmbedding
                    path: create
                  - type: object
                    key: Embedding
                    path: object
              - id: fine-tuning
                title: Fine-tuning
                description: >
                  Manage fine-tuning jobs to tailor a model to your specific
                  training data.


                  Related guide: [Fine-tune models](/docs/guides/fine-tuning)
                sections:
                  - type: endpoint
                    key: createFineTuningJob
                    path: create
                  - type: endpoint
                    key: listPaginatedFineTuningJobs
                    path: list
                  - type: endpoint
                    key: listFineTuningEvents
                    path: list-events
                  - type: endpoint
                    key: retrieveFineTuningJob
                    path: retrieve
                  - type: endpoint
                    key: cancelFineTuningJob
                    path: cancel
                  - type: object
                    key: FineTuningJob
                    path: object
                  - type: object
                    key: FineTuningJobEvent
                    path: event-object
              - id: files
                title: Files
                description: >
                  Files are used to upload documents that can be used with
                  features like [Assistants](/docs/api-reference/assistants) and
                  [Fine-tuning](/docs/api-reference/fine-tuning).
                sections:
                  - type: endpoint
                    key: createFile
                    path: create
                  - type: endpoint
                    key: listFiles
                    path: list
                  - type: endpoint
                    key: retrieveFile
                    path: retrieve
                  - type: endpoint
                    key: deleteFile
                    path: delete
                  - type: endpoint
                    key: downloadFile
                    path: retrieve-contents
                  - type: object
                    key: OpenAIFile
                    path: object
              - id: images
                title: Images
                description: >
                  Given a prompt and/or an input image, the model will generate
                  a new image.


                  Related guide: [Image generation](/docs/guides/images)
                sections:
                  - type: endpoint
                    key: createImage
                    path: create
                  - type: endpoint
                    key: createImageEdit
                    path: createEdit
                  - type: endpoint
                    key: createImageVariation
                    path: createVariation
                  - type: object
                    key: Image
                    path: object
              - id: models
                title: Models
                description: >
                  List and describe the various models available in the API. You
                  can refer to the [Models](/docs/models) documentation to
                  understand what models are available and the differences
                  between them.
                sections:
                  - type: endpoint
                    key: listModels
                    path: list
                  - type: endpoint
                    key: retrieveModel
                    path: retrieve
                  - type: endpoint
                    key: deleteModel
                    path: delete
                  - type: object
                    key: Model
                    path: object
              - id: moderations
                title: Moderations
                description: >
                  Given a input text, outputs if the model classifies it as
                  violating OpenAI's content policy.


                  Related guide: [Moderations](/docs/guides/moderation)
                sections:
                  - type: endpoint
                    key: createModeration
                    path: create
                  - type: object
                    key: CreateModerationResponse
                    path: object
              - id: assistants
                title: Assistants
                beta: true
                description: >
                  Build assistants that can call models and use tools to perform
                  tasks.


                  [Get started with the Assistants API](/docs/assistants)
                sections:
                  - type: endpoint
                    key: createAssistant
                    path: createAssistant
                  - type: endpoint
                    key: createAssistantFile
                    path: createAssistantFile
                  - type: endpoint
                    key: listAssistants
                    path: listAssistants
                  - type: endpoint
                    key: listAssistantFiles
                    path: listAssistantFiles
                  - type: endpoint
                    key: getAssistant
                    path: getAssistant
                  - type: endpoint
                    key: getAssistantFile
                    path: getAssistantFile
                  - type: endpoint
                    key: modifyAssistant
                    path: modifyAssistant
                  - type: endpoint
                    key: deleteAssistant
                    path: deleteAssistant
                  - type: endpoint
                    key: deleteAssistantFile
                    path: deleteAssistantFile
                  - type: object
                    key: AssistantObject
                    path: object
                  - type: object
                    key: AssistantFileObject
                    path: file-object
              - id: threads
                title: Threads
                beta: true
                description: |
                  Create threads that assistants can interact with.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createThread
                    path: createThread
                  - type: endpoint
                    key: getThread
                    path: getThread
                  - type: endpoint
                    key: modifyThread
                    path: modifyThread
                  - type: endpoint
                    key: deleteThread
                    path: deleteThread
                  - type: object
                    key: ThreadObject
                    path: object
              - id: messages
                title: Messages
                beta: true
                description: |
                  Create messages within threads

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createMessage
                    path: createMessage
                  - type: endpoint
                    key: listMessages
                    path: listMessages
                  - type: endpoint
                    key: listMessageFiles
                    path: listMessageFiles
                  - type: endpoint
                    key: getMessage
                    path: getMessage
                  - type: endpoint
                    key: getMessageFile
                    path: getMessageFile
                  - type: endpoint
                    key: modifyMessage
                    path: modifyMessage
                  - type: object
                    key: MessageObject
                    path: object
                  - type: object
                    key: MessageFileObject
                    path: file-object
              - id: runs
                title: Runs
                beta: true
                description: |
                  Represents an execution run on a thread.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createRun
                    path: createRun
                  - type: endpoint
                    key: createThreadAndRun
                    path: createThreadAndRun
                  - type: endpoint
                    key: listRuns
                    path: listRuns
                  - type: endpoint
                    key: listRunSteps
                    path: listRunSteps
                  - type: endpoint
                    key: getRun
                    path: getRun
                  - type: endpoint
                    key: getRunStep
                    path: getRunStep
                  - type: endpoint
                    key: modifyRun
                    path: modifyRun
                  - type: endpoint
                    key: submitToolOuputsToRun
                    path: submitToolOutputs
                  - type: endpoint
                    key: cancelRun
                    path: cancelRun
                  - type: object
                    key: RunObject
                    path: object
                  - type: object
                    key: RunStepObject
                    path: step-object
              - id: completions
                title: Completions
                legacy: true
                description: >
                  Given a prompt, the model will return one or more predicted
                  completions along with the probabilities of alternative tokens
                  at each position. Most developer should use our [Chat
                  Completions
                  API](/docs/guides/text-generation/text-generation-models) to
                  leverage our best and newest models. Most models that support
                  the legacy Completions endpoint [will be shut off on January
                  4th, 2024](/docs/deprecations/2023-07-06-gpt-and-embeddings).
                sections:
                  - type: endpoint
                    key: createCompletion
                    path: create
                  - type: object
                    key: CreateCompletionResponse
                    path: nu
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/images-openapi-search.yml
      - type: APIs.io Search
        url: overlays/images-openapi-search.yml
    aid: openai:openai-images-api
  - name: OpenAI Models API
    description: >-
      List and describe the various models available in the API. You can refer
      to the Models documentation to understand what models are available and
      the differences between them.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/models
    baseURL: https://platform.openai.com/
    tags:
      - Models
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/models-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: ' models'
            license:
              name: MIT
              url: https://github.com/openai/openai-openapi/blob/master/LICENSE
          tags:
            - name: Models
              description: List and describe the various models available in the API.
          paths:
            /models:
              get:
                tags:
                  - Models
                summary: >-
                  Lists the currently available models, and provides basic
                  information about each one such as the owner and availability.
            /models/{model}:
              get:
                tags:
                  - Models
                summary: >-
                  Retrieves a model instance, providing basic information about
                  the model such as the owner and permissioning.
              delete:
                tags:
                  - Models
                summary: >-
                  Delete a fine-tuned model. You must have the Owner role in
                  your organization to delete a model.
          x-oaiMeta:
            groups:
              - id: audio
                title: Audio
                description: |
                  Learn how to turn audio into text or text into audio.

                  Related guide: [Speech to text](/docs/guides/speech-to-text)
                sections:
                  - type: endpoint
                    key: createSpeech
                    path: createSpeech
                  - type: endpoint
                    key: createTranscription
                    path: createTranscription
                  - type: endpoint
                    key: createTranslation
                    path: createTranslation
              - id: chat
                title: Chat
                description: >
                  Given a list of messages comprising a conversation, the model
                  will return a response.


                  Related guide: [Chat
                  Completions](/docs/guides/text-generation)
                sections:
                  - type: endpoint
                    key: createChatCompletion
                    path: create
                  - type: object
                    key: CreateChatCompletionResponse
                    path: object
                  - type: object
                    key: CreateChatCompletionStreamResponse
                    path: streaming
              - id: embeddings
                title: Embeddings
                description: >
                  Get a vector representation of a given input that can be
                  easily consumed by machine learning models and algorithms.


                  Related guide: [Embeddings](/docs/guides/embeddings)
                sections:
                  - type: endpoint
                    key: createEmbedding
                    path: create
                  - type: object
                    key: Embedding
                    path: object
              - id: fine-tuning
                title: Fine-tuning
                description: >
                  Manage fine-tuning jobs to tailor a model to your specific
                  training data.


                  Related guide: [Fine-tune models](/docs/guides/fine-tuning)
                sections:
                  - type: endpoint
                    key: createFineTuningJob
                    path: create
                  - type: endpoint
                    key: listPaginatedFineTuningJobs
                    path: list
                  - type: endpoint
                    key: listFineTuningEvents
                    path: list-events
                  - type: endpoint
                    key: retrieveFineTuningJob
                    path: retrieve
                  - type: endpoint
                    key: cancelFineTuningJob
                    path: cancel
                  - type: object
                    key: FineTuningJob
                    path: object
                  - type: object
                    key: FineTuningJobEvent
                    path: event-object
              - id: files
                title: Files
                description: >
                  Files are used to upload documents that can be used with
                  features like [Assistants](/docs/api-reference/assistants) and
                  [Fine-tuning](/docs/api-reference/fine-tuning).
                sections:
                  - type: endpoint
                    key: createFile
                    path: create
                  - type: endpoint
                    key: listFiles
                    path: list
                  - type: endpoint
                    key: retrieveFile
                    path: retrieve
                  - type: endpoint
                    key: deleteFile
                    path: delete
                  - type: endpoint
                    key: downloadFile
                    path: retrieve-contents
                  - type: object
                    key: OpenAIFile
                    path: object
              - id: images
                title: Images
                description: >
                  Given a prompt and/or an input image, the model will generate
                  a new image.


                  Related guide: [Image generation](/docs/guides/images)
                sections:
                  - type: endpoint
                    key: createImage
                    path: create
                  - type: endpoint
                    key: createImageEdit
                    path: createEdit
                  - type: endpoint
                    key: createImageVariation
                    path: createVariation
                  - type: object
                    key: Image
                    path: object
              - id: models
                title: Models
                description: >
                  List and describe the various models available in the API. You
                  can refer to the [Models](/docs/models) documentation to
                  understand what models are available and the differences
                  between them.
                sections:
                  - type: endpoint
                    key: listModels
                    path: list
                  - type: endpoint
                    key: retrieveModel
                    path: retrieve
                  - type: endpoint
                    key: deleteModel
                    path: delete
                  - type: object
                    key: Model
                    path: object
              - id: moderations
                title: Moderations
                description: >
                  Given a input text, outputs if the model classifies it as
                  violating OpenAI's content policy.


                  Related guide: [Moderations](/docs/guides/moderation)
                sections:
                  - type: endpoint
                    key: createModeration
                    path: create
                  - type: object
                    key: CreateModerationResponse
                    path: object
              - id: assistants
                title: Assistants
                beta: true
                description: >
                  Build assistants that can call models and use tools to perform
                  tasks.


                  [Get started with the Assistants API](/docs/assistants)
                sections:
                  - type: endpoint
                    key: createAssistant
                    path: createAssistant
                  - type: endpoint
                    key: createAssistantFile
                    path: createAssistantFile
                  - type: endpoint
                    key: listAssistants
                    path: listAssistants
                  - type: endpoint
                    key: listAssistantFiles
                    path: listAssistantFiles
                  - type: endpoint
                    key: getAssistant
                    path: getAssistant
                  - type: endpoint
                    key: getAssistantFile
                    path: getAssistantFile
                  - type: endpoint
                    key: modifyAssistant
                    path: modifyAssistant
                  - type: endpoint
                    key: deleteAssistant
                    path: deleteAssistant
                  - type: endpoint
                    key: deleteAssistantFile
                    path: deleteAssistantFile
                  - type: object
                    key: AssistantObject
                    path: object
                  - type: object
                    key: AssistantFileObject
                    path: file-object
              - id: threads
                title: Threads
                beta: true
                description: |
                  Create threads that assistants can interact with.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createThread
                    path: createThread
                  - type: endpoint
                    key: getThread
                    path: getThread
                  - type: endpoint
                    key: modifyThread
                    path: modifyThread
                  - type: endpoint
                    key: deleteThread
                    path: deleteThread
                  - type: object
                    key: ThreadObject
                    path: object
              - id: messages
                title: Messages
                beta: true
                description: |
                  Create messages within threads

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createMessage
                    path: createMessage
                  - type: endpoint
                    key: listMessages
                    path: listMessages
                  - type: endpoint
                    key: listMessageFiles
                    path: listMessageFiles
                  - type: endpoint
                    key: getMessage
                    path: getMessage
                  - type: endpoint
                    key: getMessageFile
                    path: getMessageFile
                  - type: endpoint
                    key: modifyMessage
                    path: modifyMessage
                  - type: object
                    key: MessageObject
                    path: object
                  - type: object
                    key: MessageFileObject
                    path: file-object
              - id: runs
                title: Runs
                beta: true
                description: |
                  Represents an execution run on a thread.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createRun
                    path: createRun
                  - type: endpoint
                    key: createThreadAndRun
                    path: createThreadAndRun
                  - type: endpoint
                    key: listRuns
                    path: listRuns
                  - type: endpoint
                    key: listRunSteps
                    path: listRunSteps
                  - type: endpoint
                    key: getRun
                    path: getRun
                  - type: endpoint
                    key: getRunStep
                    path: getRunStep
                  - type: endpoint
                    key: modifyRun
                    path: modifyRun
                  - type: endpoint
                    key: submitToolOuputsToRun
                    path: submitToolOutputs
                  - type: endpoint
                    key: cancelRun
                    path: cancelRun
                  - type: object
                    key: RunObject
                    path: object
                  - type: object
                    key: RunStepObject
                    path: step-object
              - id: completions
                title: Completions
                legacy: true
                description: >
                  Given a prompt, the model will return one or more predicted
                  completions along with the probabilities of alternative tokens
                  at each position. Most developer should use our [Chat
                  Completions
                  API](/docs/guides/text-generation/text-generation-models) to
                  leverage our best and newest models. Most models that support
                  the legacy Completions endpoint [will be shut off on January
                  4th, 2024](/docs/deprecations/2023-07-06-gpt-and-embeddings).
                sections:
                  - type: endpoint
                    key: createCompletion
                    path: create
                  - type: object
                    key: CreateCompletionResponse
                    path: nu
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/models-openapi-search.yml
      - type: APIs.io Search
        url: overlays/models-openapi-search.yml
    aid: openai:openai-models-api
  - name: OpenAI Threads API
    description: Create threads that assistants can interact with.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/threads
    baseURL: https://platform.openai.com/
    tags:
      - Threads
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: properties/threads-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: ' threads'
            license:
              name: MIT
              url: https://github.com/openai/openai-openapi/blob/master/LICENSE
          tags:
            - name: Assistants
              description: Build Assistants that can call models and use tools.
            - name: Audio
              description: Learn how to turn audio into text or text into audio.
            - name: Chat
              description: >-
                Given a list of messages comprising a conversation, the model
                will return a response.
            - name: Completions
              description: >-
                Given a prompt, the model will return one or more predicted
                completions, and can also return the probabilities of
                alternative tokens at each position.
            - name: Embeddings
              description: >-
                Get a vector representation of a given input that can be easily
                consumed by machine learning models and algorithms.
            - name: Fine-tuning
              description: >-
                Manage fine-tuning jobs to tailor a model to your specific
                training data.
            - name: Files
              description: >-
                Files are used to upload documents that can be used with
                features like Assistants and Fine-tuning.
            - name: Images
              description: >-
                Given a prompt and/or an input image, the model will generate a
                new image.
            - name: Models
              description: List and describe the various models available in the API.
            - name: Moderations
              description: >-
                Given a input text, outputs if the model classifies it as
                violating OpenAI's content policy.
          paths:
            /threads:
              post:
                tags:
                  - Assistants
                summary: Create a thread.
            /threads/{thread_id}:
              get:
                tags:
                  - Assistants
                summary: Retrieves a thread.
              post:
                tags:
                  - Assistants
                summary: Modifies a thread.
              delete:
                tags:
                  - Assistants
                summary: Delete a thread.
            /threads/{thread_id}/messages:
              get:
                tags:
                  - Assistants
                summary: Returns a list of messages for a given thread.
              post:
                tags:
                  - Assistants
                summary: Create a message.
            /threads/{thread_id}/messages/{message_id}:
              get:
                tags:
                  - Assistants
                summary: Retrieve a message.
              post:
                tags:
                  - Assistants
                summary: Modifies a message.
            /threads/runs:
              post:
                tags:
                  - Assistants
                summary: Create a thread and run it in one request.
            /threads/{thread_id}/runs:
              get:
                tags:
                  - Assistants
                summary: Returns a list of runs belonging to a thread.
              post:
                tags:
                  - Assistants
                summary: Create a run.
            /threads/{thread_id}/runs/{run_id}:
              get:
                tags:
                  - Assistants
                summary: Retrieves a run.
              post:
                tags:
                  - Assistants
                summary: Modifies a run.
            /threads/{thread_id}/runs/{run_id}/submit_tool_outputs:
              post:
                tags:
                  - Assistants
                summary: >
                  When a run has the `status: "requires_action"` and
                  `required_action.type` is `submit_tool_outputs`, this endpoint
                  can be used to submit the outputs from the tool calls once
                  they're all completed. All outputs must be submitted in a
                  single request.
            /threads/{thread_id}/runs/{run_id}/cancel:
              post:
                tags:
                  - Assistants
                summary: Cancels a run that is `in_progress`.
            /threads/{thread_id}/runs/{run_id}/steps:
              get:
                tags:
                  - Assistants
                summary: Returns a list of run steps belonging to a run.
            /threads/{thread_id}/runs/{run_id}/steps/{step_id}:
              get:
                tags:
                  - Assistants
                summary: Retrieves a run step.
            /threads/{thread_id}/messages/{message_id}/files:
              get:
                tags:
                  - Assistants
                summary: Returns a list of message files.
            /threads/{thread_id}/messages/{message_id}/files/{file_id}:
              get:
                tags:
                  - Assistants
                summary: Retrieves a message file.
          x-oaiMeta:
            groups:
              - id: audio
                title: Audio
                description: |
                  Learn how to turn audio into text or text into audio.

                  Related guide: [Speech to text](/docs/guides/speech-to-text)
                sections:
                  - type: endpoint
                    key: createSpeech
                    path: createSpeech
                  - type: endpoint
                    key: createTranscription
                    path: createTranscription
                  - type: endpoint
                    key: createTranslation
                    path: createTranslation
              - id: chat
                title: Chat
                description: >
                  Given a list of messages comprising a conversation, the model
                  will return a response.


                  Related guide: [Chat
                  Completions](/docs/guides/text-generation)
                sections:
                  - type: endpoint
                    key: createChatCompletion
                    path: create
                  - type: object
                    key: CreateChatCompletionResponse
                    path: object
                  - type: object
                    key: CreateChatCompletionStreamResponse
                    path: streaming
              - id: embeddings
                title: Embeddings
                description: >
                  Get a vector representation of a given input that can be
                  easily consumed by machine learning models and algorithms.


                  Related guide: [Embeddings](/docs/guides/embeddings)
                sections:
                  - type: endpoint
                    key: createEmbedding
                    path: create
                  - type: object
                    key: Embedding
                    path: object
              - id: fine-tuning
                title: Fine-tuning
                description: >
                  Manage fine-tuning jobs to tailor a model to your specific
                  training data.


                  Related guide: [Fine-tune models](/docs/guides/fine-tuning)
                sections:
                  - type: endpoint
                    key: createFineTuningJob
                    path: create
                  - type: endpoint
                    key: listPaginatedFineTuningJobs
                    path: list
                  - type: endpoint
                    key: listFineTuningEvents
                    path: list-events
                  - type: endpoint
                    key: retrieveFineTuningJob
                    path: retrieve
                  - type: endpoint
                    key: cancelFineTuningJob
                    path: cancel
                  - type: object
                    key: FineTuningJob
                    path: object
                  - type: object
                    key: FineTuningJobEvent
                    path: event-object
              - id: files
                title: Files
                description: >
                  Files are used to upload documents that can be used with
                  features like [Assistants](/docs/api-reference/assistants) and
                  [Fine-tuning](/docs/api-reference/fine-tuning).
                sections:
                  - type: endpoint
                    key: createFile
                    path: create
                  - type: endpoint
                    key: listFiles
                    path: list
                  - type: endpoint
                    key: retrieveFile
                    path: retrieve
                  - type: endpoint
                    key: deleteFile
                    path: delete
                  - type: endpoint
                    key: downloadFile
                    path: retrieve-contents
                  - type: object
                    key: OpenAIFile
                    path: object
              - id: images
                title: Images
                description: >
                  Given a prompt and/or an input image, the model will generate
                  a new image.


                  Related guide: [Image generation](/docs/guides/images)
                sections:
                  - type: endpoint
                    key: createImage
                    path: create
                  - type: endpoint
                    key: createImageEdit
                    path: createEdit
                  - type: endpoint
                    key: createImageVariation
                    path: createVariation
                  - type: object
                    key: Image
                    path: object
              - id: models
                title: Models
                description: >
                  List and describe the various models available in the API. You
                  can refer to the [Models](/docs/models) documentation to
                  understand what models are available and the differences
                  between them.
                sections:
                  - type: endpoint
                    key: listModels
                    path: list
                  - type: endpoint
                    key: retrieveModel
                    path: retrieve
                  - type: endpoint
                    key: deleteModel
                    path: delete
                  - type: object
                    key: Model
                    path: object
              - id: moderations
                title: Moderations
                description: >
                  Given a input text, outputs if the model classifies it as
                  violating OpenAI's content policy.


                  Related guide: [Moderations](/docs/guides/moderation)
                sections:
                  - type: endpoint
                    key: createModeration
                    path: create
                  - type: object
                    key: CreateModerationResponse
                    path: object
              - id: assistants
                title: Assistants
                beta: true
                description: >
                  Build assistants that can call models and use tools to perform
                  tasks.


                  [Get started with the Assistants API](/docs/assistants)
                sections:
                  - type: endpoint
                    key: createAssistant
                    path: createAssistant
                  - type: endpoint
                    key: createAssistantFile
                    path: createAssistantFile
                  - type: endpoint
                    key: listAssistants
                    path: listAssistants
                  - type: endpoint
                    key: listAssistantFiles
                    path: listAssistantFiles
                  - type: endpoint
                    key: getAssistant
                    path: getAssistant
                  - type: endpoint
                    key: getAssistantFile
                    path: getAssistantFile
                  - type: endpoint
                    key: modifyAssistant
                    path: modifyAssistant
                  - type: endpoint
                    key: deleteAssistant
                    path: deleteAssistant
                  - type: endpoint
                    key: deleteAssistantFile
                    path: deleteAssistantFile
                  - type: object
                    key: AssistantObject
                    path: object
                  - type: object
                    key: AssistantFileObject
                    path: file-object
              - id: threads
                title: Threads
                beta: true
                description: |
                  Create threads that assistants can interact with.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createThread
                    path: createThread
                  - type: endpoint
                    key: getThread
                    path: getThread
                  - type: endpoint
                    key: modifyThread
                    path: modifyThread
                  - type: endpoint
                    key: deleteThread
                    path: deleteThread
                  - type: object
                    key: ThreadObject
                    path: object
              - id: messages
                title: Messages
                beta: true
                description: |
                  Create messages within threads

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createMessage
                    path: createMessage
                  - type: endpoint
                    key: listMessages
                    path: listMessages
                  - type: endpoint
                    key: listMessageFiles
                    path: listMessageFiles
                  - type: endpoint
                    key: getMessage
                    path: getMessage
                  - type: endpoint
                    key: getMessageFile
                    path: getMessageFile
                  - type: endpoint
                    key: modifyMessage
                    path: modifyMessage
                  - type: object
                    key: MessageObject
                    path: object
                  - type: object
                    key: MessageFileObject
                    path: file-object
              - id: runs
                title: Runs
                beta: true
                description: |
                  Represents an execution run on a thread.

                  Related guide: [Assistants](/docs/assistants/overview)
                sections:
                  - type: endpoint
                    key: createRun
                    path: createRun
                  - type: endpoint
                    key: createThreadAndRun
                    path: createThreadAndRun
                  - type: endpoint
                    key: listRuns
                    path: listRuns
                  - type: endpoint
                    key: listRunSteps
                    path: listRunSteps
                  - type: endpoint
                    key: getRun
                    path: getRun
                  - type: endpoint
                    key: getRunStep
                    path: getRunStep
                  - type: endpoint
                    key: modifyRun
                    path: modifyRun
                  - type: endpoint
                    key: submitToolOuputsToRun
                    path: submitToolOutputs
                  - type: endpoint
                    key: cancelRun
                    path: cancelRun
                  - type: object
                    key: RunObject
                    path: object
                  - type: object
                    key: RunStepObject
                    path: step-object
              - id: completions
                title: Completions
                legacy: true
                description: >
                  Given a prompt, the model will return one or more predicted
                  completions along with the probabilities of alternative tokens
                  at each position. Most developer should use our [Chat
                  Completions
                  API](/docs/guides/text-generation/text-generation-models) to
                  leverage our best and newest models. Most models that support
                  the legacy Completions endpoint [will be shut off on January
                  4th, 2024](/docs/deprecations/2023-07-06-gpt-and-embeddings).
                sections:
                  - type: endpoint
                    key: createCompletion
                    path: create
                  - type: object
                    key: CreateCompletionResponse
                    path: nu
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/threads-openapi-search.yml
      - type: APIs.io Search
        url: overlays/threads-openapi-search.yml
    aid: openai:openai-threads-api
common:
  - type: Getting Started
    url: https://platform.openai.com/docs/quickstart
  - type: Cookbook
    url: https://cookbook.openai.com
  - type: Rate Limits
    url: https://platform.openai.com/docs/guides/rate-limits
  - type: Libraries
    url: https://platform.openai.com/docs/libraries
  - type: Deprecations
    url: https://platform.openai.com/docs/deprecations
  - type: Errors
    url: https://platform.openai.com/docs/guides/error-codes
  - type: Plugins
    url: https://platform.openai.com/docs/plugins/introduction
  - type: Forum
    url: https://community.openai.com
  - type: Examples
    url: https://platform.openai.com/examples
  - type: Status
    url: https://status.openai.com
  - type: API Keys
    url: https://platform.openai.com/api-keys
  - type: Support
    url: https://help.openai.com/en/
  - type: Tutorials
    url: https://platform.openai.com/docs/tutorials
  - type: Change Log
    url: https://platform.openai.com/docs/changelog
  - type: Plugins
    url: https://platform.openai.com/docs/plugins/introduction
  - type: Playground
    url: https://platform.openai.com/playground
  - type: Keys
    url: https://platform.openai.com/api-keys
  - type: Usage
    url: https://platform.openai.com/usage
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
aid: openai
---