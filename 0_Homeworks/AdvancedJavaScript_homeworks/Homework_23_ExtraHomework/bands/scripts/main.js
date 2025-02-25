import BandComponent from "../components/band-component.js";
import NavigationComponent from "../components/nav-component.js";

const bandComponent = new BandComponent();

const navComponent = new NavigationComponent();
// navComponent.bandComponent = bandComponent;
bandComponent.fillTable();
navComponent.createNavigation();
