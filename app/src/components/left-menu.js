import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions';

class LeftMenu extends Component {

  subMenu(data,i) {
      return (
        <div key={i}><Link to={"/"+data.type} activeClassName="active">{data.label}</Link></div>
      );
  }

  menu(data,i) {
      var accType = (this.props.config.activeAccType == data.type?"":data.type);
      var html = <div key={i} className="panel">
                    <button onClick={() => this.props.leftMenuToggle(true,accType)} data-toggle="collapse" className={(this.props.config.activeAccType != data.type?"collapsed ":"") + data.type}>
                      <span>{data.label}</span>
                    </button>
                    <div className={"panel-collapse collapse" + (this.props.config.activeAccType == data.type?" in":"")}>

                      {data.child.map(this.subMenu,this)}

                    </div>
                 </div>

      return(html);
  }

  render(state) {
    return (
      <div className="sidebar">
        <h4 className="heading"><span>{this.props.data.label}</span></h4>
        <div className="items" id="left-nav-acc">

          {this.props.data.child.map(this.menu,this)}

        </div>
        <button id="left-collapse-btn" onClick={() => this.props.leftMenuToggle(!this.props.config.isOpen)} className="collapse-btn"></button>
      </div>
    );
  }
}

function mapState(state){
  return {};
}

export default connect (mapState,actions)(LeftMenu);
