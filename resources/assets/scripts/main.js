// import external dependencies
import 'jquery';
import 'fancybox';

// Import everything from autoload
import './autoload/**/*';

// import local dependencies
// import Router from './util/Router';
// import common from './routes/common';
// import home from './routes/home';
// import aboutUs from './routes/about';
// import AOS from 'aos';

import preloader from './components/preloader';
import hamburger from './components/hamburger';
import menu from './components/menu';


/** Populate Router instance with DOM routes */
// const routes = new Router({
//   // All pages
//   common,
//   // Home page
//   home,
//   // About Us page, note the change from about-us to aboutUs.
//   aboutUs,
// });

// Load Events
$(document).ready(function () {
  preloader.init();
  hamburger.init();
  menu.init();

  // window.addEventListener('scroll', () => {
  //   skrollr.init();
  // });
});
