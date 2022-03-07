import React from 'react';
import { Route} from react-router-dom;

function App() {

  return(
  <div>
<div>This is the app.</div>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUp} />
    <Route path="/home" component={Home} />
    <Route path="/podcasts" component={Podcasts}/>
    <Route path="/songs" component={Songs} />
  </div>
  );
}

export default App;
