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
   
-useEffect()
--it called after the component render

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
