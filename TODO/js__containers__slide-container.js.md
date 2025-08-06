# TODO

**Origin:** `js/containers/slide-container.js` in `dbl-components`.
**Destination:** `js/containers/slide-container.js` in `components-bs-react-goat`.
**Existing TS:** Yes, already exists in `react-goat` at `containers/slide-container.tsx`.
Review the existing TypeScript file and the original JS file. Merge any updates from the JS version into the TS version, ensuring that both implementations stay synchronized.
This file uses Bootstrap classes or depends on Bootstrap (or is located in a Bootstrap folder), so it belongs in `components-bs-react-goat`.
Add comprehensive TypeScript typings and typedoc. Keep all names and comments in English.
Write unit tests for the component, mocking all external dependencies (including any imports from `dbl-utils` or related files). Ensure that behavior matches the original JS implementation.
Document any props, state variables and events.