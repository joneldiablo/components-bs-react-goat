# Components React BS

Bootstrap based components for React Goat.

## Usage

```tsx
import { Action } from '@farm-js/components-bs-react-goat';

<Action name="save" icon="check">Save</Action>
```

You can also access all components from the aggregated module:

```tsx
import components from '@farm-js/components-bs-react-goat/components';

const { Action: SaveAction } = components;
```

Render a Bootstrap alert container:

```tsx
import { AlertContainer } from '@farm-js/components-bs-react-goat/containers';

<AlertContainer name="notice" label="Heads up!" color="warning" />
```
