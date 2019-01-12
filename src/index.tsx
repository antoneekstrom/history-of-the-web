
// ReactDOM is used to render the react components
import ReactDOM from 'react-dom';

// Import React
import React, { ReactElement } from 'react';

// Extend component to create a react component
import { Component } from 'react';

// Import "content" components from the other file
import { Content60, Content70, Content80, Content90, Content2000, ContentPlaceholder, Information } from './content';

// Interfaces to be used by React components
import * as Interfaces from './interfaces';
import { any } from 'prop-types';

import * as router from './router';

/*
 * I have now switched over to using Typescript which is more strongly typed than vanilla js and therefore provides better intellisense and such.
 * This makes it easier to catch errors and generally write less buggy code.
 * 
 * Because of typescript I now have to provide types for react components so that the compiler knows what kind of objects are
 * to be present in state and props.
 * 
 * class Element extends React.Component
 * --becomes
 * class Element extends React.Component<Props, State>
*/

/**
 * Get the queries in the URL
 * @returns {URLSearchParams} the search parameters
 */
export function getUrlParams() {
    return new URLSearchParams(window.location.search);
}

/**
 * Page component contains the whole page that is being rendered.
 */
class Page extends Component<any, Interfaces.IPage> {

    constructor(props) {
        super(props);

        // Get the page url parameter
        var page = router.getPage();

        if (page == null) router.setPage('hem');

        // The current page that is being displayed
        // The page component is stored in state so that the page will be automatically updated whenever the state changes
        this.state = {
            page: page == 'info' ? <Information/> : <Main/>
        };
    }

    /**
     * @param {Component} page the page component to show
     */
    showPage(page) {
        this.setState({page: page});
    }

    render() {
        return (
            // The whole page is wrapped in a wrapper
            // Navigation contains the buttons in the top
            // Beneath, the state-page is being rendered
            <div className="wrapper">

                <Navigation>
                    <NavButton onClick={() => this.showPage(<Main/>)} path="hem">Hem</NavButton>
                    <NavButton onClick={() => this.showPage(<Information/>)} path="info">Information</NavButton>
                </Navigation>

                {this.state.page}
            </div>
        );
    }
}

/**
 * Contains the main content.
 */
class Main extends Component<any, Interfaces.IContent> {

    constructor(props) {
        super(props);

        // The currently displayed information about a selected period
        this.state = {
            content: <ContentPlaceholder/>
        };
    }

    /**
     * @param {Component} content change the information text
     */
    changeContent(content) {

        // Use setState() so that the page will be immediately updated
        this.setState({content: content});
    }

    render() {
        return (

            // Page is divided into a top container and the timeline container that is below
            <main>

                <div className="top-container">
                    <Header/>
                    <Content>{this.state.content}</Content>
                </div>

                <TimeLine>
                    <Period onClick={() => this.changeContent(<Content60/>)} tooltip="Arpanet" color="#1B998B">1960-talet</Period>
                    <Period onClick={() => this.changeContent(<Content70/>)} tooltip="TCP/IP" color="#F18805">1970-talet</Period>
                    <Period onClick={() => this.changeContent(<Content80/>)} tooltip="Något häftigt" color="#D95D39">1980-talet</Period>
                    <Period onClick={() => this.changeContent(<Content90/>)} tooltip="Nätverk o sånt" color="#1D7874">1990-talet</Period>
                    <Period onClick={() => this.changeContent(<Content2000/>)} tooltip="Google?" color="#EEBA0B">2000-talet</Period>
                </TimeLine>

            </main>
        );
    }
}

/**
 * Content is the information that is being displayed in the top right part of the screen.
 */
class Content extends Component {
    render() {
        return (
            <article className="content">
                {this.props.children}
            </article>
        );
    }
}

/**
 * This is the subtitle that is located under the page title, inside the header
 */
class Description extends Component {
    render() {
        return (
            <div>
                <h3>På den här sidan hittar du en riktigt tuff tidslinje där det finns information om viktiga händelser som har med webbens utveckling att göra.</h3>
            </div>
        );
    }
}

/**
 * The title and subtitle.
 */
class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-inner-container">
                    <h1>Webbens<br/>Historia</h1>
                    <Description/>
                </div>
            </header>
        );
    }
}

/**
 * Tooltip is displayed when the container is being hovered upon.
 */
class Tooltip extends Component<any, Interfaces.IVisibility> {
    
    constructor(props) {
        super(props);

        // State toggles if the tooltip is being displayed
        this.state = {
            visible: 'hidden'
        };
    }

    /**
     * Toggle the visibility of the tooltip
     */
    toggleVisibility() {

        const vis = this.state.visible;
        
        //toggle between visible and hidden
        if (vis == 'hidden') this.setState({visible: 'visible'});
        else this.setState({visible: 'hidden'});
    }

    /**
     * Combine the visibility state with the supplied style object and return it
     * @returns {Object} the style object
     */
    getSpanStyle() : Object {

        var style = {
            visibility: this.state.visible
        };

        // Only combine them if the style exists
        if (this.props.style != null)
        Object.assign(style, this.props.style);

        return style;
    }
    
    render() {
        // Toggles state when the mouse enters or leaves the main container
        return (
            <div className="tooltip" onMouseEnter={() => this.toggleVisibility()} onMouseLeave={() => this.toggleVisibility()}>
                {this.props.children}
                <span style={this.getSpanStyle()} className="tooltip-text">
                    <p>{this.props.text}</p>
                </span>
            </div>
        );
    }
}

/**
 * A part of the timeline.
 */
class Period extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        // Only add text element inside the period if there is any text
        let text = this.props.children != null ? <h3 className="timeline-period-text">{this.props.children}</h3> : undefined;

        return (
            // Uses color from props
            // Elevates onClick call to parents
            <div style={{backgroundColor: this.props.color}} className="timeline-period" onClick={() => this.props.onClick()}>
                <Tooltip style={{backgroundColor: this.props.color}} text={this.props.tooltip}>{text}</Tooltip>
            </div>
        );
    }
}

/**
 * The timeline.
 */
class TimeLine extends Component {

    render() {
        return (
            // It's basically just two containers
            <div className="timeline-container">
                <div className="timeline">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

/**
 * A bar/ribbon at the top of the page that contains buttons for major navigation.
 */
class Navigation extends Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navigation">
                {this.props.children}
            </nav>
        );
    }
}

/**
 * Navigation button.
 */
export class NavButton extends Component<{onClick : () => void; path : string}, any> {

    constructor(props) {
        super(props);
    }
    
    getClass() : string {
        var className = 'link button';

        if (this.props.path == router.getPage()) {
            className += ' active';
        }

        return className;
    }

    handleClick() {

        // Change the URL to this buttons path
        router.setPage(this.props.path);

        // Because onClick changes the state in the Page component this will rerender this component and therefore apply the active class from getClass() correctly
        this.props.onClick();

    }

    render() {
        return (
            <a onClick={() => this.handleClick()} className={this.getClass()}>{this.props.children}</a>
        );
    }
}

/**
 * A link.
 */
export class Link extends Component<any, any> {

    /**
     * Construct the classes.
     */
    getClass() {

        const className = this.props.className;

        return className != undefined ? className : "" + " link";
    }
    onClick() {
        var c = this.props.onClick;
        if (c != undefined) c();
    }
    render() {
        return (
            <a className={this.getClass()} onClick={() => this.onClick()} href={this.props.href} target="_blank">{this.props.children}</a>
        );
    }
}

/**
 * A button.
 */
export class Button extends Link {
    getClass() {
        return super.getClass() + " button";
    }
}

/**
 * Not being used currently, footers are annoying
 */
class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="mailto:anton.ekstrom@elev.kungsbacka.se">Kontakta mig</a>
            </footer>
        );
    }
}

// Render the entire page
ReactDOM.render(<Page/>, document.getElementById("root"));