---
runme:
  id: 01HSJZQK9C03RMVFPX9GK2Q2JD
  version: v3
---

# Stan coding challenge


## Technical and Architectural Choices

I really like the implementation of atomic design principles with UI component in a separate repo with full unit test and e2e test embbed, as it allows for a more modular and scalable codebase. Although, this is a smaller project, but I do like the idea of having smaller components that can be reused and tested.

Another note is, I like the implementation of Smart Components and Dumb Components concepts on top of the atomic design principles. As we can fully test, in isolations, as shown pages is for navigation and data fetching, while components are for UI rendering. 

If I were to do it in larger codebase, I would have a container folder where all the data fetching logic is stored, and the page component would just render it as children, this does provide a significant improvement on re-rendering issues as any re-rendering on that child component would not affect the entire parent component.

## Improvements

If given more time, I would add more comprehensive tests, particularly integration and end-to-end tests. I would also add containers package where data fetching layer would exist. I would also add more comprehensive error handling and logging.

## Other Projects

Here are some other projects that I'm proud of:

+ Klotti (monorepo):
  - Frontend:
    - Built on top of expo and react-native
    - Smart and Dumb Components
    - Zustand for state management
    - Expo router
  - Backend:
    - Graphql and Apollo
    - Graphql Codegen as code-first approach
    - Drizzle ORM for database
    - Hosted on Supabase
  - UI Components:
    - Atomic design principles
    - Storybook for UI components


## Feedback on the Coding Challenge

I found the coding challenge to be well-structured and relevant especially on setting up my own webpack. It was a good opportunity to demonstrate my skills in a practical context.