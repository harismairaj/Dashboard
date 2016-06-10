import React, {Component} from 'react';

class FourOFour extends Component{

  static contextTypes = {
    router:React.PropTypes.object
  }

  render(){
    this.context.router.push('/');
    return <Composition {...this.props}/>;
  };

}
