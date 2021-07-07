1. What problem does the context API help solve?

It helps us store not have props passed down from one component to another. Instead state is passed down to a specific component of our choosing. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is where all the state of an application is stored in a redux-react app. Reducers help us write pure functions to manage stae changes, and actions are useeffects that we use to illicit a change in an app, like sending data, clicking a button, etc. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and component state is local.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is middleware that lets us return a function instead of an action object. It provides us the ability to handle asynch operations inside our action creators. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

As much as context api is simpler than redux, I think I prefer redux. The flow of state is easy to understand once you know where information is going. 
