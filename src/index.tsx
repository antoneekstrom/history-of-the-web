
// ReactDOM is used to render the react components
import ReactDOM from 'react-dom';

// Import React
import React, { ReactElement } from 'react';

// Extend component to create a react component
import { Component } from 'react';

// Import "content" components from the other file
import { Content60, Content70, Content80, Content90, Content2000, ContentPlaceholder, Information, OmSidan, ContentFramtiden } from './content';

// Interfaces to be used by React components
import * as Interfaces from './interfaces';

// Router, for routing
import * as Routing from './routing';
import { Router } from './routing';

// Prismjs, for styling code blocks
import 'prismjs/components/prism-core';
import Prism from 'prismjs';

import './prism-themes/theme-override.css'

/*
 * I have now switched over to using Typescript which is more strongly typed than vanilla js and therefore provides better intellisense and such.
 * This makes it easier to catch errors and generally write less buggy code.
 * 
 * Because of typescript I now have to provide types for react components so that the compiler knows what kind of objects are
 * to be present in state and props.
 * 
 * class Element extends React.Component
 *      becomes
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

    /**
     * The router.
     */
    router : Router;

    /**
     * Pages mapped to a route.
     */
    pages : Routing.PageMap;

    constructor(props) {
        super(props);

        this.pages = {
            "hem": <Main/>,
            "om sidan": <OmSidan/>,
            "information": <Information/>
        };

        // The router takes in routes, pages and a pageHandler which is mapped to showing the page in this component.
        this.router = new Router(this.pages, (page) => this.showPage(page), 'hem');

        // The current page that is being displayed
        // The page component is stored in state so that the page will be automatically updated whenever the state changes
        this.state = {
            page: undefined
        };
    }

    // Invoked when the component is loaded into the page
    componentWillMount() {

        // Set the page
        Routing.setPage(Routing.getPage());
    }

    /**
     * Show a component on this page.
     * @param {Component} page the page component to show
     */
    showPage(page : JSX.Element) {
        this.setState({page: page});
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    /**
     * Create the navigation buttons for the pages.
     */
    getNavButtons() : JSX.Element[] {
        return Object.keys(this.pages).map((key) => <NavButton key={key} path={key}>{key}</NavButton>);
    }

    render() {

        return (
            // The whole page is wrapped in a wrapper
            // Navigation contains the buttons in the top
            // Beneath, the state-page is being rendered
            <div className="wrapper">

                <Navigation>{this.getNavButtons()}</Navigation>
                <div className="page">{this.state.page}</div>

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

                <div className="main-inner-container">
                    <div className="top-container">
                        <Header/>
                        <Content>{this.state.content}</Content>
                    </div>
    
                    <TimeLine>
                        <Period onClick={() => this.changeContent(<Content60/>)} tooltip="Arpanet" color="#1B998B">1960-talet</Period>
                        <Period onClick={() => this.changeContent(<Content70/>)} tooltip="Internet" color="#F18805">1970-talet</Period>
                        <Period onClick={() => this.changeContent(<Content80/>)} tooltip="TCP/IP" color="#D95D39">1980-talet</Period>
                        <Period onClick={() => this.changeContent(<Content90/>)} tooltip="World Wide Web" color="#1D7874">1990-talet</Period>
                        <Period onClick={() => this.changeContent(<Content2000/>)} tooltip="Y2K" color="#EEBA0B">2000-talet</Period>
                        <Period onClick={() => this.changeContent(<ContentFramtiden/>)} tooltip="Web 3.0" color="#4971af">Framtiden?</Period>
                    </TimeLine>
                </div>

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

export class BackToTopButton extends Component<{minHeight : number}, {visible : boolean}> {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            
            const y = window.scrollY;
            const v = this.state.visible;
            const height = y >= this.props.minHeight;

            if (height && !v) this.setState({visible: true})
            else if (!height && v) this.setState({visible: false});
        });
    }

    scrollToTop() {
        scrollTo(0,0);
    }

    handleClick() {
        this.scrollToTop();
    }
    
    render() {
        return (
            <div className={`backtotop ${this.state.visible ? 'active' : ''}`}>
                <FilledButton onClick={() => this.handleClick()}>Tillbaka upp</FilledButton>
            </div>
        );
    }
}

/**
 * A bar/ribbon at the top of the page that contains buttons for major navigation.
 */
export class Navigation extends Component<any, any> {

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

export class SectionNavButton extends Component<{id : string}, any> {
    render() {
        return (
            <div className="nav link link-container">
                <a className="link button" href={`#${this.props.id}`}>{this.props.children}</a>
            </div>
        );

    }
}

/**
 * Navigation button.
 */
export class NavButton extends Component<any, any> {

    constructor(props) {
        super(props);
    }
    
    getClass() : string {
        var className = 'link button';

        if (this.props.path == Routing.getPage()) {
            className += ' active';
        }

        return className;
    }

    handleClick() {

        // Change the URL to this buttons path
        Routing.setPage(this.props.path);

    }

    render() {
        return (
            <div className="nav link link-container">
                <a onClick={() => this.handleClick()} className={this.getClass()}>{this.props.children}</a>
            </div>
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

export class CodeBlock extends Component<{lang : string}, any> {

    render() {
        return (
            <pre className={"language-" + this.props.lang}>
                <code className={"language-" + this.props.lang}>{this.props.children}</code>
            </pre>
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

export class Code extends Component<any, any> {
    render() {
        return (
            <span className="code">{this.props.children}</span>
        );
    }
}

export class FilledButton extends Button {
    getClass() {
        return super.getClass() + " filled";
    }
}

export class Italic extends Component<any, any> {
    render() {
        return (
            <span className="italic">{this.props.children}</span>
        );
    }
}

// Render the entire page
ReactDOM.render(<Page/>, document.getElementById("root"));