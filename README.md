# React Unleash POC

This is a small boilerplate to test React integration with Unleash feature flags. It use following main libraries -

- React
- Vite
- Typescript
- Redux-toolkit with RTK-Query
- MSW
- React-Testing-Library
- Vitest
- Unleash integration

## Setup

- Install dependencies - run `pnpm i`
- Run local unleash instance or use the hosted instance
  - For local - [Quick start](https://docs.getunleash.io/quickstart)
  - For hosted - request instance URL and token from the provider
- Create `.env` file in the root of the project with following values

  ```shell
    VITE_UNLEASH_API_URL=<Unleash API URL>
    VITE_UNLEASH_TOKEN=<Unleash API token>
  ```
- For test purposes, create the following feature flag in unleash
  - `web.instead.email`
  - Feel free to use any strategy for dev and prod
  - Make sure at least dev scenario is switched on
- Run the application - `pnpm dev`
- Open app to test - `http://localhost:3000`

### Note

- Since we're mocking `Unleash` data with `MSW`, it's possible to run this app without `Unleash` at all, but it'll not be able to demonstrate the `Unleash` integration fully.
