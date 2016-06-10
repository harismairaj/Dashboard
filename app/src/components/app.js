import React, { Component } from 'react';
import Header from './header';
import LeftMenu from './left-menu';
import {connect} from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchBrand();
    this.props.topMenuToggle(false);
    this.props.leftMenuToggle(true);
  }

  render() {
    if(typeof this.props.branding.logo != 'undefined')
    {
      return (
        <div>
          <div id="wrapper" className={(!this.props.leftMenu.isOpen)?"left-toggle":""}>
            <Header
              data={{
                logo:this.props.branding.logo,
                menu:this.props.branding.topMenu.child,
                user:this.props.branding.userData,
              }}
              config={this.props.topMenu}
            />
            <LeftMenu
              data={this.props.branding.leftMenu}
              config={this.props.leftMenu}
            />
            <div className="main">
              {this.props.children}
            </div>
          </div>
          <div id="content-overlay"></div>
        </div>
      );
    }
    else
    {
      return (<div></div>);
    }
  }
}

function mapState(state) {
  return {
          "branding":state.branding,
          "topMenu":state.topMenu,
          "leftMenu":state.leftMenu
         };
}

export default connect(mapState,actions)(App);
