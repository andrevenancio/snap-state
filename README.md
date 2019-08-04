# snap-state
state management in a snap 👌. (under 1KB)

## Motivation
You probably don't always need to use Redux or React Context API and wrapping your Consumer inside your Provider, or is it the other way around? 🤷‍♂️

For simpler applications you might just want a K.I.S.S. approach 🤔(did he just called me stupid?)

## How does it work?
This library was done with React and Preact in mind, but if you're using your own thing good on you. I got you fam!

## React
You can create your state somewhere (well, maybe at the application level to look profesh)!
Once that's out of the way, you can change it from anywhere in your app regardless of component hierarchy. 🎉🎉🎉

Now every time the state changes, any component subscribing to changes will be updated.

For example, lets say we want to create a property that stores a "theme", how does that look? Well, just create your initial state:

```javascript
import { State } from 'snap-state';

State.theme = 'dark';
```

Now you just need to subscribe to changes to that particular prop. How? However you want to! Some examples below.

### Hooks
I know you're fancy, so if functional programming is your thing, check out the `useSnapState` hook.

```javascript
import { useSnapState } from 'snap-state';

function Example() {
    const props = useSnapState(['theme']);
    return (
        <p>the theme is {props.theme}</p>
    );
}
```

Every time you change `State.theme` anywhere on your app, your component will be updated.

### High Order Components
If you're more into class based components you can decorate your component with `withSnapState` HOC.

```javascript
import React, { Component } from 'react';
import { withSnapState } from 'snap-state';

class Example extends Component {
    render() {
        return (
            <p>the theme is {this.props.theme}</p>
        );
    }
}

export default withSnapState(['theme'])(Example);
```

## Vanilla
What if you're building a custom WebGL application that makes a cat fly through space? What if you want to store all the planets your Space Cat visits, do you still need React? Not really no.

```
import { State, onSnapState } from 'snap-state';

// subscribe to changes on the "planet" prop
const unsubscribe = onSnapState(['planet'], ({ value }) => {
    console.log(`Space cat just went pass ${value}.`);
});

// change your state and look at that amazing callback.
setTimeout(() => {
    State.planet = 'mars';
}, 500);

// when your cat reaches another galaxy and you feel its time to let it go
// you can unsubscribe from further changes
unsubscribe();
```
