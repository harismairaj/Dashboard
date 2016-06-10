import axios from 'axios';
import {
  FETCH_BRAND,
  TOP_MENU,
  LEFT_MENU
} from './types';

export function fetchBrand(){

  //const request = axios.get("https://10.0.100.86:8243/UDBbrand/1.0.0/brandJSON");
  const request2 = {
      logo:{
        label:"360training",
        source:"assets/img/logo.svg",
        url:"/"
      },
      userData:{
        name:"Username",
        email:"username@email.com"
      },
      topMenu:{
        child:[
          {label:"Account Information",type:"account-info",url:"#"},
          {label:"Address Book",type:"address-book",url:"#"},
          {label:"My Orders",type:"orders",url:"#"},
          {label:"Billing & Subscription",type:"billing",url:"#"},
          {label:"Support",type:"support",url:"#"},
          {label:"MENU_DIVIDER",type:"menu_divider",url:"#"},
          {label:"Terms Of Use",type:"terms",url:"#"},
          {label:"Privacy Policy",type:"privacy-policy",url:"#"},
          {label:"MENU_DIVIDER",type:"menu_divider",url:"#"},
          {label:"Sign Out",type:"sign-out",url:"#"}
        ]
      },
      leftMenu:{
          label:"Dashboard",
          child:[
            {
              label:"Learner",
              type:"learn",
              url:"#",
              child:[
                    {label:"My Courses",type:"courses",url:"#"},
                    {label:"My Subscriptions",type:"subscriptions",url:"#"}
              ]
            },
            {
              label:"Author",
              type:"author",
              url:"#",
              child:[
                    {label:"Create & Manage Courses",type:"create-course",url:"#"},
                    {label:"Course Reports",type:"course-report",url:"#"}
              ]
            },
            {
              label:"Manage",
              type:"manage",
              url:"#",
              child:[
                    {label:"Manage Users",type:"manage-users",url:"#"},
                    {label:"Enroll Users",type:"enroll-users",url:"#"},
                    {label:"Run Reports",type:"run-report",url:"#"}
              ]
            },
            {
              label:"Resources",
              type:"resources",
              url:"#",
              child:[
                    {label:"Shop Courses",type:"shop",url:"#"},
                    {label:"Browse Free Courses",type:"browse-free-courses",url:"#"},
                    {label:"Support Forum",type:"support",url:"#"}
              ]
            }
        ]
      }
    };

  return{
    type:FETCH_BRAND,
    payload:request2
  };
}

export function leftMenuToggle(isOpen, activeAccType = ''){
  return{
    type:LEFT_MENU,
    payload:{
      "isOpen":isOpen,
      "activeAccType":activeAccType
    }
  };
}

export function topMenuToggle(isOpen){
  return{
    type:TOP_MENU,
    payload:{
      "isOpen":isOpen
    }
  }
}
