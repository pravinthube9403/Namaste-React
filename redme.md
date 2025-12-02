# two types of import export

- deafault export/import
- export default component
  -import component from "path"

-Named export/import
-export const component
-import {component} from "path"

- if we have two exports it will be fine because it us to how we are importiong the component default one or named one

...

# Hooks

-normal js utility function

--useState()
-whenever state variable changes ,react triggers a reconciliation cycle(Re-Renders the components)

- Invalid hook call. Hooks can only be called inside of the body of a function component.
- This could happen for one of the following reasons:

1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app

- never create a useState in condition and function

-useEffect()
--it called after the component render

- if no dependency array on every component render it will called
- useEffect(() => {
- console.log("Header UseEffect Called");
- });

- if the array is empty =[]=> useEffect called on initial render only once
- console.log("header render")
- useEffect(() => {
- console.log("Header UseEffect Called");
- },[]);

- if dependency array is [btnName]=> called everytime bynName is updated
- console.log("header render")
- useEffect(() => {
- console.log("Header UseEffect Called");
- },[btnName]);

# Virtual DOM

-Reconciliation Algorithm (React Fiber)

-virtual DOM is a representation of actual DOM
-virtual dom is nothing but a Object

# Deep Algorithm

-finds out the difference between previous DOM and updated DOM

# Monolethe Architecture

-all code in one project
--sending sms
--api

# Microservices Architecture

-ui
-authintication
-db
-sms sending

-build different and all the combine together foms a big app

-seperation of consons

--how to interact with each other

# Routing

# 2 types of routing

# 1 client side routing

-without making a network calling
-eg about component contact component

# 2 server side routing

- make a network call and the page come from server
  -eg card component
