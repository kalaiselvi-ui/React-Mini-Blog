import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Blog from './Blog';
import Details from './Details';

function App() {
  return (
       <>
       <h1 className="text-center text-success mt-3">React Dynamic Router</h1>

       <Router>
           <Link to="/blog">Go to Blog</Link>
           <Route path="/blog"> 
               <Blog />
           </Route>
           <Route path="/details/:id" render={props=>(
               <Details {...props}/>
           )}> 
            
           </Route>

       </Router>
       </>
   
  );
}

export default App;
