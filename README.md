# jsx-simple-state
State management (hopefully) make simple.

1) Create your state anywhere on your app
```javascript
import { h, render } from 'preact';
import { State } from "jsx-simple-state";
import SomeButton from './button';
import SomePage from './page';

// define a prop for a "theme"
State.theme = 'dark';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <SomeButton />
      <SomePage />
    </div>
  );
}

render(<App />, document.querySelector('body'), document.querySelector('#app'));
```

2) You can change the state from anywhere on your app (regardless of your component hierarchy).
```javascript
import { h } from 'preact';
import { State } from 'jsx-simple-state';

export function SomeButton() {
  return (
    <button onPointerDown={() => { State.theme = 'light'; }}>Light Theme</button>
  );
}
```

3) When you want a component to consume the state changes simply connect it with `withConsumer` High Order Component.
```javascript
import { h, Component } from 'preact';
import { withConsumer } from 'jsx-simple-state';

class SomePage extends Component {
  render() {
    return (
      <p>The selected theme is {this.props.theme}</p>
    );
  }
}

export default withConsumer(['theme'])(SomePage);
```
