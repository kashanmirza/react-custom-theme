import React, { Component } from 'react';
import { Route, Switch, } from "react-router-dom";


//App Routes
import Home from '../pageComponent/Home';
import Aboutus from '../pageComponent/Aboutus';
import Contactus from '../pageComponent/Contactus';

import Overview from '../pageComponent/Overview';
import Dml from '../pageComponent/Dml';
import Formhandling from '../pageComponent/Formhandling';
import Stepsformhandling from '../pageComponent/Stepsformhandling';
import Icons from '../pageComponent/Icons';
import Portlate from '../pageComponent/Portlate';
import Messages from '../pageComponent/Messages';
import Buttons from '../pageComponent/Buttons';
import Tabs from '../pageComponent/Tabs';
import Modalexample from '../pageComponent/Modalexample';
import Tooltipexample from '../pageComponent/Tooltipexample';
import Progressbarcustom from '../pageComponent/Progressbarcustom';
import Form from '../pageComponent/Form';
import Charts from '../thirdPartyComponent/Charts';
import Datatable from '../thirdPartyComponent/Datatable';
import Switchbutton from '../thirdPartyComponent/Switchbutton';
import Progressbar from '../thirdPartyComponent/Progressbar';
import Ratingstar from '../thirdPartyComponent/Ratingstar';
import Scrollbar from '../thirdPartyComponent/Scrollbar';
import Datetimepicker from '../thirdPartyComponent/Datetimepicker';
import Reactseletc from '../thirdPartyComponent/Reactseletc';
import Checkboxradiobutton from '../thirdPartyComponent/Checkboxradiobutton';
import Treemenu from '../thirdPartyComponent/Treemenu';
import Qrcode from '../thirdPartyComponent/Qrcode';


class AppRoutes extends Component {

  constructor(props) {
    super(props);

    this.state = {
     
    }
  }

  

  render() {
    return (
      <div className="overviewBox">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/Aboutus" component={Aboutus} />
              <Route path="/Contactus" component={Contactus} />
              <Route path="/Overview" component={Overview} />
              <Route path="/Dml" component={Dml} />
              <Route path="/Formhandling" component={Formhandling} />
              <Route path="/Stepsformhandling" component={Stepsformhandling} />
              <Route path="/Icons" component={Icons} />
              <Route path="/Portlate" component={Portlate} />
              <Route path="/Messages" component={Messages} />
              <Route path="/Buttons" component={Buttons} />
              <Route path="/Tabs" component={Tabs} />
              <Route path="/Modalexample" component={Modalexample} />
              <Route path="/Tooltipexample" component={Tooltipexample} />
              <Route path="/Progressbarcustom" component={Progressbarcustom} />
              <Route path="/Form" component={Form} />
              <Route path="/Charts" component={Charts} />
              <Route path="/Datatable" component={Datatable} />
              <Route path="/Switchbutton" component={Switchbutton} />
              <Route path="/Progressbar" component={Progressbar} />
              <Route path="/Ratingstar" component={Ratingstar} />
              <Route path="/Scrollbar" component={Scrollbar} />
              <Route path="/Datetimepicker" component={Datetimepicker} />
              <Route path="/Reactseletc" component={Reactseletc} />
              <Route path="/Checkboxradiobutton" component={Checkboxradiobutton} />
              <Route path="/Treemenu" component={Treemenu} />
              <Route path="/Qrcode" component={Qrcode} />
            </Switch>
      </div >
    );
  }
}

export default AppRoutes;

