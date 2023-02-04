# REACT 2023

## Section 2: The Job of a React Developer

A Senior React Developer is very proficient in these 3 skills:

### 1. Decide on Components

- what is a component
- how much do we want to break down a component
- how do we build the re-usable components

### 2. Decide the State and where it lives

- state can live in different locations
- the architectural decision of where it goes

### 3. What changes when state changes

- based on the javascript object of State we have to decide what we want to re-render, what part of the Virtual DOM changes
- this has huge effect on performance

## Section 3: React Basics

### 28. Monsters Rolodex - Component State

to include components you don't just return, you render like below

```jsx
import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            Hello, my Name is Ivan.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
```

<!-- Referenced  ahead to 321. ES6 Classes for reference -->

Class - a blueprint of what we want created
Example:

```js
// ES6 Class
class Elf {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  // keep functions(object methods) inside the class
  attack() {
    return 'attack with ' + this.weapon
  }
  // ... other methods
}

// instances of class
const peter = new Elf('Peter', 'stones')
console.log(peter instanceof Elf) // true
console.log(peter.attack()) // attack with stones
const sam = new Elf('Sam', 'fire')
console.log(sam.attack()) // attack with fire
```

### 29. Monsters Rolodex - Component State

```jsx
class App extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Tester'
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hi, {this.state.name}</p>
          <button>Change Name</button>
        </header>
      </div>
    )
  }
}

export default App
```

### 30. Monsters Rolodex - setState

`setState()` - updates state to a different object (shallow merge)

Once React detects a different object in memory, it re-renders the component (otherwise it won't), then updates the applications UI.

```jsx
 render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>Hi, { this.state.name }</p>
          <button onClick={ () => {
            // change object
            this.setState({ name: 'JoJo' })
          }}
          >
            Change Name
          </button>
        </header>
      </div>
    )
  }
```

### 31. Monsters Rolodex - States and Shallow Merge

A "shallow merge" only updates the keys for the values that are being passed to it, anything else it keeps and retains as it was.

**Best Practice**: When updating the state, make sure to use the same types (String, Object, Array, Boolean) of values for the object properties.

Also, passing a function is the preferred way to do so (however, not always), as covered in next lesson.

### 32. Monsters Rolodex - setState and Secondary Callback

The reason the console.log(this.state) seems like it's a step behind, is because the onClick function is ran asynchronously

```jsx
<button onClick={ () => {
  // setState is async
  this.setState({ name: { firstName: 'Testy' } })
  console.log(this.state)
} }
```

To fix this we can add a callback:

```jsx
// 1st function is updater
// 2nd function is the callback
this.setState(
  () => {},
  () => {}
)
```

- A "callback" is just a function that says "Once I'm finished, I want you to run this..."
- A callback is going to run only after all the changes have been applied.

```jsx
this.setState(
  // updater
  () => {
    return {
      name: { firstName: 'Testy', lastName: 'McTesterson' }
    }
  },
  // callback
  () => {
    console.log(this.state)
  }
)
```

Please note: we get access to state and props : `this.setState(state, props)` (these are optional)

The callback is also optional, but if we want to see the updated change, we need to do it in this manner.

The reason why we want to use this is because sometimes we want to maybe update our state based on the previous value of the state. (covered later)

This is the ideal way to write your setState code in class components.

resulting code:

```jsx
// App.js
import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: { firstName: 'Jojo', lastName: 'Jones' },
      company: 'EWD'
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi, {this.state.name.firstName} {this.state.name.lastName}, I work
            at {this.state.company}
          </p>
          <button
            onClick={() => {
              // update function
              this.setState(
                () => {
                  return {
                    name: { firstName: 'Testy', lastName: 'McTesterson' }
                  }
                },
                // callback function
                () => {
                  console.log(this.state)
                }
              )
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    )
  }
}

export default App
```

### 33. Monsters Rolodex - Mapping Arrays to Elements

- for more info see [#309 .map()](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/14849144)

### 34. Optional: map() + key attribute

from lesson:

"A good rule of thumb as to when to use the key attribute you saw in the previous video, is this: Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)

If you are new to the concept of using the map() function we saw in the previous video and you would like to learn more, we created a bonus video to explain the function in more detail. Simply go to Appendix 1: Key Developer Concepts at the bottom of the course video player, and watch the video on the map() function.

Otherwise, let's keep going to the next video :)"

### 35. Monsters Rolodex - Keys for Mapping

We need a unique key (id is used here) to differentiate. For example, say we have two of the same name.

```jsx
import { Component } from 'react'

// import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      people: [
        {
          id: '12asd',
          name: 'Matthew'
        },
        {
          id: '123asd',
          name: 'Mark'
        },
        {
          id: '1234asd',
          name: 'Luke'
        },
        {
          id: '12345asd',
          name: 'John'
        }
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        {this.state.people.map(person => {
          return (
            <div key={person.id}>
              <h1>{person.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
```

### 36. Monsters Rolodex - Single Page Applications (SPA's)

Obvious review information for me

### 37. Monsters Rolodex - Lifecycle Method: componentDidMount

Resources:

- https://jsonplaceholder.typicode.com/users
- [Component Lifecycle Methods (Beta docs)](https://beta.reactjs.org/reference/react/Component)

Using a fetch request:

```jsx
import { Component } from 'react'

// import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      people: []
    }
  }
  // runs upon mount - stays until dismount in lifecycle
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return {
              people: users
            }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  render() {
    return (
      <div className='App'>
        {this.state.people.map(person => {
          return (
            <div key={person.id}>
              <h1>{person.name}</h1>
            </div>
          )
        })}
        <div>{/* get inserted here */}</div>
      </div>
    )
  }
}

export default App
```

### 38. Optional: Promises

- [Promises (course video)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15037608)
- [Promises(MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

"If you are new to the concept of using the Promises we saw in the previous video and you would like to learn more, we created a bonus video to explain promises in more detail. Simply go to Appendix 1: Key Developer Concepts at the bottom of the course video player, and watch the video titled Promises .

Otherwise, let's keep going to the next video :)"

```js
// promise means it will eventually have a value (either resolved "data" or rejected "error")
// will be pending until resolve or reject is reached
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve('I have succeded')
    }, 1000) // returns "I have succeeded" after 1 second
  } else {
    reject('I have failed')
  }
})

// to access
myPromise
  .then(value => console.log(value)) // I have succeded
  .catch(rejectValue => console.log(rejectValue)) // I have failed
```

And that's the main benefit of using promises is because when we make an API call, we don't know whether or not that'll work 100% of the time.

If we call a server, we don't know if that server is down, or something else happened like a missing id or...

**HMMM...** async / await is ES7?

### 39. Monsters Rolodex - Renders & Re-renders in React

Order:

1. `constructor()` <!-- no matter what, this is run first -->

- initialize `state`

2. `render` <!-- determines what to show (initial UI) -->
3. `componentDidMount` <!-- mounts onto DOM -->
4. `render` runs again because the state has changed

look at logs:

```jsx
class App extends Component {
  constructor() {
    super()

    // initialize state with empty array
    this.state = {
      people: []
    }
    console.log('1 - constructor')
  }
  // runs upon mount - stays until dismount in lifecycle
  componentDidMount() {
    console.log('3 - componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return {
              people: users
            }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  render() {
    console.log('2 - render')
    return (
      <div className='App'>
        {this.state.people.map(person => {
          return (
            <div key={person.id}>
              <h1>{person.name}</h1>
            </div>
          )
        })}
        <div>{/* get inserted here */}</div>
      </div>
    )
  }
}

export default App
```

![Rendering order](render-order.png)

### 40. Monsters Rolodex - Input Search Box Component

Work on functionality before styling

- Think about what you want the app to do
  - you'll have a better idea of your end product

React has created an element for each html tag (but with more functionality). In fact, any HTML property you can think of is equally available on these React HTML components.

One thing, though, that I want you to notice is that some of them are named a little differently.

And the reason why it's className instead of class is because this is written in JSX and JSX is a syntax extension of JavaScript, meaning that all of the rules of JavaScript apply to JS because you're really just writing JavaScript with some additional functionality and class being a protected keyword.

And JavaScript means that class is also a protected keyword inside of JSX.
When you think about classes, we use it up here `className='App` and what it does is allows us in JavaScript to create classes as well as class components.

```jsx
<input
  className='search-box'
  type='search'
  placeholder='Search users'
  onChange={event => {
    console.log(event.target.value)
  }}
/>
```

### 41. Monsters Rolodex - Searching & Filtering

```js
const myArray = [1, 3, 5, 7, 9]
// .filter returns whatever is true (in a new array)
myArray.filter(el => el > 4) // [5,7,9]
```

So most of the time, remember, if you're going to modify an array, create a new array with that modification.

There's a series of these different methods on arrays that are helpful. `.map`, `.filter`, and another one we're going to learn later called `.reduce`.

**Please note**: I changed people back to monsters (as is used in course)

```jsx
<input
  className='search-box'
  type='search'
  placeholder='Search monsters'
  onChange={event => {
    console.log(event.target.value)
    const searchString = event.target.value.toLowerCase()
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchString)
    })

    this.setState(() => {
      return { monsters: filteredMonsters }
    })
  }}
/>
```

### 42. Optional: fiter(), includes()

### 43. Monsters Rolodex - Storing Original Data

At this point as we type we shrink the list, however when we remove characters we typed we still have that narrowed down list...

**Best practice**:

_If you are going to modify any kind of data inside of your state, such as filtering it out based on user input or whatever, if you're going to go back to it and most of the time you want to go back to it and at least keep some kind of reference to that original list._

What you want to do is you want to actually keep your state equal to the original list of whatever it is that you're keeping track of.

So for us, it's the users.

We want to keep that original list of users.

We don't actually want to modify the state and use that value.

Instead, we want to filter that value and then pass it into wherever we need it to be.

So how do we do this?

**If stuck, re-watch this video (starting around 5:36)**

re-ordered variables...

Now works for filtering the way it should:

```jsx
import { Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()

    // initialize state with empty array
    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('constructor')
  }
  // runs upon mount - stays until dismount in lifecycle
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return {
              monsters: users
            }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  render() {
    console.log('render')

    // creates new array
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search monsters'
          onChange={event => {
            const searchField = event.target.value.toLowerCase()

            this.setState(() => {
              return { searchField }
            })
          }}
        />
        {filteredMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
        <div>{/* get inserted here */}</div>
      </div>
    )
  }
}

export default App
```

Remember:

1. you want to filter from the full list. The best place to do that is from the state.
2. So after you've updated the state with the full original list, don't modify that (modify it somewhere else inside of input because we want to access that input value)
3. we don't want to store the event, we want to store the value where it's useful for the rest of the application (where it's `lowerCase`d)
4. once we have this search field now inside of the `render`, we are able to filter it down from the original list of monsters using the search field.

There's a couple little optimizations that I'm going to show you in the next video, and we're going to deep dive into that so that you can learn a little bit more about the render cycles, about React and these class components.

### 44. Monsters Rolodex - Optimizations

Every time JavaScript needs to update the DOM, it needs to run the `render` method.

```jsx
import { Component } from 'react'

// import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()

    // initialize state with empty array
    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('constructor')
  }
  // runs upon mount - stays until dismount in lifecycle
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return {
              monsters: users
            }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  // run once when it initializes class, making the app more performant by not having to call function every time
  onSearchChange = event => {
    // value
    const searchField = event.target.value.toLowerCase()
    // stored in state
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render')

    // optimization - don't have to call 'this' every time, making it more readable
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    // creates new array
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search monsters'
          // this function gets re-created everytime render runs
          onChange={onSearchChange}
        />
        {filteredMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
        <div>{/* get inserted here */}</div>
      </div>
    )
  }
}

export default App
```

### 45. Monsters Rolodex - Understanding Components

You want to try and figure out if when you're creating a component, you can genericize the functionality of that component as much as you can so that it becomes as reusable as possible.

The point of this is to reduce repetitive code, and being able to scale your applications easier.

This enables the idea of build your app like legos (where each block has a single responsibility).

How the app is structured right now the list is fully tied to the search and is in-seperable. It's not generalized!

So now we need to understand more about components and how they are rendered.

So let's get started...

Seperate folder structure by their responsibilty:

- components
  - card-list
  - search-box

### 46. Monsters Rolodex - CardList Component

We are naming the file `card-list.component.jsx` so it's easy to distinguish that the file is a component, and what the component does. (very convenient when using a file search, or looking at a filelist)

This is prue preference (after experience in other projects, my preference as well).

**NOTE**: You cannot have multiple components at the same level, you MUST have one parent (top-level) level component returned.

```jsx
// card-list.component.jsx
import { Component } from 'react'

class CardList extends Component {
  render() {
    return (
      <div>
        <h1>Hello, I'm the CardList Component</h1>
      </div>
    )
  }
}

export default CardList
```

```jsx
// App.js
//...
import CardList from './components/card-list/card-list.component'
//...
;<CardList />
//...
```

### 47. Monsters Rolodex - Component Props

Props are pretty much shorthand for properties, which is identical to what we used for the search input:

- className
- type
- placeholder
- onChange

These are all props of input. And input, as I mentioned, is a react component that simulates a generates a input HTML tag when you actually render it to the page.

The difference with other props inside of our components that we write is that we can name them technically whatever we want, but we have to make sure that what we pass in is the same thing as what the component is expecting.

### 48. Monsters Rolodex - Rendering and Re-rendering part 2

Render gets called twice inside CardList component

Before in App.js:

1. initialized in constructor
2. render()
3. componentDidMount

- setState
  - whenever setState gets called render gets called again

In card-list:

1. initial state (from App.js '[]')
2. setState (full array)

So it comes down to 2 conditions:

1. setState
2. props are updated

React always gets rendered from the top - down

**App > Parent Component > Child Component**

REWATCH when stuck on flow!!

1. Constructor (under the hood)
2. render
3. next Component ... etc.

**NOTE**: If your component is not updating, then you're probably not either updating props or using setState.

### 49. SearchBox Component

**REMEMBER**: we are generalizing everything inside components so they can be re-used!

```jsx
// search-box.component.jsx
import { Component } from 'react'

class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type='search' // keep, others are dynamic
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default SearchBox
```

```jsx
// App.js
// ... see commit history
```

### 50. Monsters Rolodex - CSS in React

Write CSS that is relevant to the component in the respective folder:

- `App.css` - styling applied to entire application
- `search-box.styles.css` - only applies to this component
- etc.

```js
// outputs class="search-box monsters-search-box" in HTML
className={`search-box ${ this.props.className }`}
```

now we can target this search box in CSS

```css
/* search-box.styles.css */
.search-box {
}
```

This CSS file is not in isolation from the rest of the application, because the file is present across the entire website. Even though it's just imported in that component.

The reason why we import this file in the component is to make it simpler for us when we are creating the components, in order to be able to target what we are styling, for convenience.

We will cover isolation in later lessons where we use CSS in JS libraries.

### 51. Monsters Rolodex -

whoa... missed some commits... long day

### 53. Monsters Rolodex - Finishing Touches

When creating a new component it good practice to start with what's required upfront:

```jsx
// card.component.jsx
import { Component} from 'react`

import './card.styles.css'

class Card extends Component {
  render() {
    return(
      // html
    )
  }
}

export default Card
// now import Card and add `<Card />` in parent component
// also make sure to pass props
```

if you don't have access to the variables, make sure to destructure them ex: `const {id, name, email} = this.props.monster`

### 54. Functional vs Class Components

React has been built with 2 types of developers in mind:

- prefer Class components
- prefer Funcional components

Different companies usually have their own preference, so it's best to be aware of both practices as a developer.

Different companies will write React differently. Most will write them in a mix.

It's important to start with Class components because React was founded on this concept.

Then it's just a matter of changing the model to a different form of component, and we're gonna dive deep into all of that.

Once we start the Capstone project we will start flip-flopping between functional and class components. Most of the time you can use either.

### 55. Class Component Lifecycle Methods Breakdown

![class component lifecycle](../img/class-component-lifecycle.png)

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

unmounting - removing the component - like when navigating to different pages, or changing your UI where you don't need a component on the page anymore. Once it gets taken off the page it's unmounted.

This is where you want to remove any event listeners, or anything that consumes memory by relying on the component being alive.

This wil run before you actually pull that off so you don't get any memory leaks.

These are unique to Class components:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

Functional components don't have these lifecycle methods, but they still follow these same three phases of components (Mounting, Updating, Unmounting)

### 56. Functional Component Intro

So let's talk about functional components.

- A functional component typically takes the form of a arrow function.
- Arrow functions at this point are the norm of writing functions.
- And the way that we want to replicate, let's say this app component is, we would say `const App` the same way that we said class app.

- So we're initializing some constant variable named app and we want it to be equal to a function.

That is pretty much all you need as far as the boilerplate of a functional component goes.

```js
const App = () => {

  return()
}
```

You don't need this constructor, you don't need these lifecycle methods.

You don't need the render.

These are all things that are only unique to class components.

These are methods attached to a class functions in this particular case, and functional components are pure functions, meaning that all react is going to do is run this function top to bottom.

Whatever gets returned finally from this function is going to be the UI that this function returns.

Clearly when we look at this functional component, there's no constructor method because constructor, as we know, is related to classes because there's no constructor and no class.

A functional component behaves, as you would expect, a regular JavaScript function to do. And all a JavaScript function does is it takes some arguments and it returns something.

In this particular case, a react functional component takes arguments that are the props of this component and then it returns JSX.

React under the Hood will keep a reference to that component and of course the functional component that instantiated it.

But as far as your concern, the simplicity of a functional component is like a JavaScript function.

### 57. Pure & Impure Functions

A pure function should return the same thing no matter how many times it gets called when it's given the same arguments.

```js
// pure function
const pureFunc = (a, b) => {
  return a + b
}
```

```js
// impure function
let c = 3 // an outside influence (may change without the function knowing)

funcA = (a, b) => {
  return a + b + c
}
```

A pure function is when everything that gets passed in is under it's full isolated control.

**Side effects**:

```js
c = 3

funcB = (a, b) => {
  c = a + b

  return a * b
}

funcB(2, 4) // 8

console.log(c) // 6
// c is being changed outside the function which is a side effect
```

In summary an impure fure is a function that relies on a variable outside that function.

In React, what we are going to be writing is impure functions. We use Hooks to create them, so we will be generating side affects with them. So you have to understand the

### 58. Monsters Rolodex - Hooks: useState

```js
// array destructuring
const arr = [2, 4]
const [a, b] = arr
// a = 2
// b = 4
```

Each hook only hooks into 1 value

### 59. Monsters Rolodex - Functional Component Re-rendering

**React is running the entire function every time it needs to render a component that is a functional component.**

However, in Class components the only thing that ran was what was inside the render method.

With Functional components there is not render method, the entire function is basicly like the render method.

Whenever the props change the whole function gets ran, similarily, when state changes the whole function gets run (line by line).

That's how React knows what needs to be changed, "How do I know what the new UI is going to be"

React checks whether state value is different, if it's the same, it won't re-render (run the whole function).

You need to stop thinking about functional components and lifecycles and start seeing it instead as when does react determine that I need to rerun my entire functional component.

That's really the difference.

### 60. Monsters Rolodex - Infinite Re-rendering

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(
    (
      users // causes infinite loop because it's different than array stored in function, (stored outside browser) even if values are exactly the same
    ) => setMonsters(users)
  )
```

We can stop this with `useEffect` hook

It's incredibly important because through this, will you actually understand how functional components really work and how React determines using functional components that it needs to re-render.

**So remember**:

Functional components -

- Any time it renders or renders runs the code inside of this function.

- Top to bottom.

- Every single time.

#### If you have some weird bug:

- whenever you're coding out React components and you notice that you're stuck in a render loop, think about what's happening.
- Think about all the steps with re rendering.
- Think about the fact that this function runs top to bottom.
- Look at the variables in your state.

### 61. Hooks: useEffect

In the last lesson we saw that using a fetch method caused an infinite loop because it was not equal to the data in the function, which caused a side effect.

To fix this we need to use `useEffect()`

```jsx
// takes 2 arguments - callback function and array
useEffect(
  // callback function
  () => {},
  // whenever any values change inside of this dependancy array run this callback function
  []
)
```

The callback function runs the very first time this app mounts, because it's the first time the entire code is ran.

The only time the callback function gets called again is if the data in the array gets changed.

So here's how we do it:

```jsx
// only ran once in this case, since the data dosn't change
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
}, [])
```

### 62. Monsters Rolodex - Remaining Components

- see commit for details on converting from class component to functional components

mostly it's just:

- removing `import Component`
- remove `render()`
- destructuring
- remove `this.props`

#### Before:

```jsx
// class component
import { Component } from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'
class CardList extends Component {
  render() {
    const { monsters } = this.props
    return (
      <div className='card-list'>
        {monsters.map(monster => {
          return <Card monster={monster} key={monster.id} />
        })}
      </div>
    )
  }
}
export default CardList
```

#### After:

```jsx
// functional component
import Card from '../card/card.component'
import './card-list.styles.css'
const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map(monster => {
      return <Card monster={monster} key={monster.id} />
    })}
  </div>
)
export default CardList
```

### 63. React v18: Migrating from React v17 + ReactDOM v18 Changes

Have been using 18... so no issues here

### 64. React v18: Strict Mode Changes

Double Render:
Renders two times for each call because it renders the content, the updates the content, as seen here:

```jsx
// [value, setValue]
const [searchField, setSearchField] = useState('')
```

React also double renders that to detect any weird behaviors, resulting in 4 calls. Strict Mode disables the suppression (hiding) of the double calls.

### 65. DOM and Virtual DOM

- The DOM is the native "tree" representing HTML
  - Updating the DOM is expensive computationally

This is where the Virtual DOM comes in...

The Virtual DOM is a javascript representation of the DOM

- The Virtual DOM keeps track of changes to the real DOM
- javascript runs quicker
- makes 2 copies of the DOM
  - 1st copy - snapshot of actual DOM that it's going to make changes against
  - 2nd copy - re-renders what changes (setState, props)
    - looks inside nested elements
    - re-renders changes
      - removes elements no longer matching (unmounting)
      - adds new elements to reflect changes (mounting)
    - have I updated everything?
      - here's the new Virtual DOM
      - compare to 1st copy (snapshot)
        - highlight changes
    - makes changes to "real" DOM
- Real DOM now takes form

### 66. React and React DOM

```html
<!-- #root content gets replaced with third (bottom) script -->
<div id="root">React is not rendered</div>

<script src="https://unpkg.com/react@18.0.0-rc.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.0.0-rc.0/umd/react-dom.development.js"></script>

<!-- Pure React (written without JSX) -->
<script>
  const App = () => {
    return React.createElement('div', {}, [
      React.createElement('h1', {class: 'title'}, 'React IS rendered')
    ])

  ReactDOM.render(React.createElement(App), document.getElementById('root'))
</script>
```

Basicly this is all React does...

It's significantly easier for us to write JSX which looks like HTML and absorbs and takes in JavaScript variables rather than constantly writing this verbose create element where we define what we're looking for, then the attributes and then the children.

But that's really all it's doing under the hood.

It's really that simple.

### 67. React and React DOM part 2

`createElement()` just replaces JSX, everything else about our components is still the same.

```js
const Person = props => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.name),
    React.createElement('p', {}, props.occupation)
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { class: 'title' }, 'React IS rendered'),
    React.createElement(Person, { name: 'Jesus', occupation: 'Savior' }, null),
    React.createElement(
      Person,
      { name: 'Abraham', occupation: 'prophet' },
      null
    ),
    React.createElement(Person, { name: 'Moses', occupation: 'prophet' }, null)
  ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
```

Again, JSX just simplifies this verbose (repetitive) process, everything else about these components is exactly the same.

JSX just makes it more readable to the developer.

lets' break it down...

```js
React.createElement(
  // element to be created
  'h1',
  // attributes / props
  { class: 'title' },
  // what are the children inside
  []
)
```

### 68.ReactDOM v18 Changes

```jsx
const Person = props => {
  return React.createElement('div', {}, [
    React.createElement('h2', { key: 1 }, props.name),
    React.createElement('p', { key: 2 }, props.occupation)
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement(
      'h1',
      { className: 'title', key: 2 },
      'React IS rendered'
    ),
    React.createElement(
      Person,
      { name: 'Jesus', occupation: 'Savior', key: 4 },
      null
    ),
    React.createElement(
      Person,
      { name: 'Abraham', occupation: 'prophet', key: 5 },
      null
    ),
    React.createElement(
      Person,
      { name: 'Moses', occupation: 'prophet', key: 6 },
      null
    )
  ])
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
```

### 69. DOM Paint Flashing

To enable:

- [x] menu > more tools > rendering > enable Paint flashing

When elements are being mounted and unmounted the paint is flashed, showing where it's being re-rendered.

In React only the portions relevant will be modied.

## Section 4: Capstone Project: Intro & Setup

[Docs (includes v18.2.0)](https://reactjs.org/)
[Beta Docs](https://beta.reactjs.org/learn)

### 73. Github Strategy

Forked, then Cloned repo from course.

- updated React v18.2.0
- created master branch
  - he has main

### 74. The Long Road Ahead

- explains how we will learn from the course

### 75. Project Overview

![final Project](../img/final-project.png)
For more details, see [video](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15100008#questions)
