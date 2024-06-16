# Campoal

This React application demonstrates my proficiency by implementing a modular component-based architecture with a mix of functional components and hooks for efficient state management. I've utilized design patterns like Container/Presentational components.Responsive design is ensured through tailwind CSS  adapting seamlessly across devices.

## Key Features
 - Make use of various animations
 - Responsive design
 - Well structured code

## Project Setup

### Prerequisites 
- Node.js 
- npm  or yarn 

### Installation

1. Clone the repository: 
```bash 
git clone https://github.com/yourusername/your-repository.git 
```
2. Navigate to the project directory:
```bash 
cd your-repository
```
3. Install dependencies:
```bash
npm install
# or
yarn install
```
### Run Project Locally
To start the development server, run:
```bash
npm start 
# or 
yarn start
```

The app will be available at `http://localhost:5173`

####  Code Structure Overview

```markdown

The project follows a modular structure with separation of concerns. Here's an overview of the main directories and files:

/src
  /assets                 # Static assets like images, fonts, etc.
  /components             # Reusable components
    - AboutCard.tsx       #About page card component
    - AnimateNumber.tsx   #On view number update component
    - Footer.tsx          #Footer of the app component
    - Header.tsx          #Header of the app component
    - MainNav.tsx         #Navigation for medium to large device
    - MobileNav.tsx       #Side Navigation for mobile display component
    - TeamCard.tsx        #Team members show card component
  /layouts                #layouts of the application
    - layout.tsx          #Header and footer layout 
  /pages                  #Page component
    - About.tsx           #about page 
    - Contact.tsx         # contact-us page
    - Home.tsx            #home page of app
    - Ourbelif.tsx        #company belif page
    - Story.tsx           #company stories page
    - Team.tsx            #company teams/staff page
    - Values.tsx          #values of company page
    - Vision.tsx          #company vison page  
  - App.tsx               #Group of all pages
  - data.ts               #Json data for the app
  - index.css             #Some design template
  - main.tsx              #Entry point of app
  
```

 ## Libraries and Tools Used 
- **React** : A JavaScript library for building user interfaces. 
 - **React Router**: For routing and navigation. 
 - **Zod**: For form validation. 
- **Framer motion**: For various animation. 
 - **Tailwind**: For css styling. 
 - **Typescript**:For type safety.
- **ESLint and Prettier**: For code linting and formatting. These libraries and tools were chosen for their popularity, ease of use, and ability to facilitate the development of a clean and maintainable codebase.
- **AntDesign**: For Icons.
- **React spring/web,react-intersection-observer**:For number increase animation

## Design Decisions
### Component Structure 
The app is built using a component-based architecture. Each component is designed to be reusable and modular. This approach improves maintainability and scalability. 
### State Management 
State management is handled using React's built-in hooks (`useState`). For more complex state logic, context and custom hooks are used to encapsulate stateful logic and make it reusable. 
### Styling
 Styling is done using styled-components for better modularity and to avoid class name conflicts. This approach also allows for dynamic styling based on props. 
 ### User Experience
  The design focuses on user experience by ensuring that the UI is intuitive and responsive. Key UX principles like consistency, feedback, and simplicity were considered during the design process.
## Additional Steps or Configurations


 ### Deployment

For deployment, ensure that you have configured the necessary environment variables and optimized the build. To create a production build, run:

```bash
npm run build 
# or 
yarn build
```


 #### GitHub Repository [Link to the repository]
 https://github.com/Ankit-exe/Demo

 #### Link to the site
[https://demo-b4jr.onrender.com/](https://demo-b4jr.onrender.com/?fbclid=IwZXh0bgNhZW0CMTAAAR3i63L-9D4fLFvD-ZmEBjLbbuD9PyX0FZY2BFROXu7AAkvyIJsbwTUNmTI_aem_ZmFrZWR1bW15MTZieXRlcw)
