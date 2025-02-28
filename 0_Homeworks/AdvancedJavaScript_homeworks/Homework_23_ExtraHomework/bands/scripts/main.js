import BandComponent from "../components/band-component.js";
import NavigationComponent from "../components/nav-component.js";
import FilterComponent from "../components/filter-component.js";

const bandComponent = new BandComponent();
const filterComponent = new FilterComponent();
const navComponent = new NavigationComponent();
// debugger;
// navComponent.bandComponent = bandComponent;
bandComponent.fillTable();
setTimeout(() => {
  filterComponent.createFilters();
  filterComponent.fillSelect();
  filterComponent.showOnlyActive();
}, 100);
navComponent.createNavigation();
