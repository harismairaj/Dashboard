import { combineReducers } from 'redux';
import Branding from './branding';
import TopMenu from './top-menu';
import LeftMenu from './left-menu';


const rootReducer = combineReducers({
  "branding":Branding,
  "topMenu":TopMenu,
  "leftMenu":LeftMenu
});

export default rootReducer;
