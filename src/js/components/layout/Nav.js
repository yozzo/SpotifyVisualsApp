import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const ruqiaClass = location.pathname.match(/^\/ruqia/) ? " active" : "";
    const empireSoundsClass = location.pathname.match(/^\/empireSounds/) ? " active" : "";
    const mHopeClass = location.pathname.match(/^\/mhope/) ? " active" : "";
    const biomesClass = location.pathname.match(/^\/biomes/) ? " active" : "";
    const krakenClass = location.pathname.match(/^\/kraken/) ? " active" : "";
    const pathosClass = location.pathname.match(/^\/pathos/) ? " active" : "";
    const lastMinutechnageOfHeartClass = location.pathname.match(/^\/lastMinuteChangeOfHeart/) ? " active" : "";
    const teardropTattooClass = location.pathname.match(/^\/teardropTattoo/) ? " active" : "";
    const blueprintClass = location.pathname.match(/^\/blueprint/) ? " active" : "";
    const navClass = collapsed ? "collapse" : "";

    //TODO: get titles from Spotify?

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={"nav-item" + featuredClass}>
                <IndexLink to="/" class="nav-home" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={"nav-item" + empireSoundsClass}>
                <Link to="empireSounds" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Empire Sounds</Link>
              </li>
              <li class={"nav-item" + biomesClass}>
                <Link to="biomes" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Biomes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// /*
// <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
//   <div class="container">
//     <div class="navbar-header">
//       <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
//         <span class="sr-only">Toggle navigation</span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//       </button>
//     </div>
//
//     <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
//       <ul class="nav navbar-nav">
//         <li class={"nav-item" + featuredClass}>
//           <IndexLink to="/" class="nav-home" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
//         </li>
//         <li class={"nav-item" + ruqiaClass}>
//           <Link to="ruqia" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Ruqia</Link>
//         </li>
//         <li class={"nav-item" + empireSoundsClass}>
//           <Link to="empireSounds" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Empire Sounds</Link>
//         </li>
//         <li class={"nav-item" + mHopeClass}>
//           <Link to="mhope" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>MHope</Link>
//         </li>
//         <li class={"nav-item" + biomesClass}>
//           <Link to="biomes" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Biomes</Link>
//         </li>
//         <li class={"nav-item" + krakenClass}>
//           <Link to="kraken" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Kraken</Link>
//         </li>
//         <li class={"nav-item" + pathosClass}>
//           <Link to="pathos" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Pathos</Link>
//         </li>
//         <li class={"nav-item" + lastMinutechnageOfHeartClass}>
//           <Link to="lastMinuteChangeOfHeart" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Last Minute Change Of Heart</Link>
//         </li>
//         <li class={"nav-item" + teardropTattooClass}>
//           <Link to="teardropTattoo" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Teardrop Tattoo</Link>
//         </li>
//         <li class={"nav-item" + blueprintClass}>
//           <Link to="blueprint" class="nav-item-link" onClick={this.toggleCollapse.bind(this)}>Blueprint</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>*/
