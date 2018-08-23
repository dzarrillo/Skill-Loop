import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./pages/UpLoad";
import Charts from "./pages/Charts";
import Learn from "./pages/Learn";
import WhatIf from "./pages/WhatIf";
import Resume from "./pages/Resume";
import NoMatch from "./pages/NoMatch";

// import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import InputFileReader from "./pages/InputFileReader";

const App = () => (
  <Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Upload}/>
      <Route exact path="/charts" component={Charts}/>
      <Route exact path="/learn" component={Learn}/>
      <Route exact path="/whatif" component={WhatIf}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/inputfilereader" component={InputFileReader}/>
      {/* <Route exact path="/books" component={Books}/>
      <Route exact path="/books/:id" component={Detail}/> */}
      <Route component={NoMatch}/>
    </Switch>
  </div>
  </Router>
);

export default App;
