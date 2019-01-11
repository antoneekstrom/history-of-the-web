'use strict'

import ReactDOM from 'react-dom';
import React from 'react';
import { Component } from 'react';

import { Content60, Content70, Content80, Content90, Content2000, ContentPlaceholder, Information } from './content';

/**
 * Page component contains the whole page that is being rendered.
 */
class Page extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            page: <Main/>
        };
    }

    showPage(page) {
        this.setState({page: page});
    }

    render() {
        
        return (
            <div className="wrapper">

                <Navigation>
                    <Button onClick={() => this.showPage(<Main/>)}>Hem</Button>
                    <Button onClick={() => this.showPage(<Information/>)}>Information</Button>
                </Navigation>

                {this.state.page}
            </div>
        );
    }
}

/**
 * Contains the main content.
 */
class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: <ContentPlaceholder/>
        };
    }

    changeContent(content) {
        this.setState({content: content});
    }

    render() {
        return (
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

class Content extends Component {
    render() {
        return (
            <article className="content">
                {this.props.children}
            </article>
        );
    }
}

class Description extends Component {
    render() {
        return (
            <div>
                <h3>På den här sidan hittar du en riktigt tuff tidslinje där det finns information om viktiga händelser som har med webbens utveckling att göra.</h3>
            </div>
        );
    }
}

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

class Tooltip extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            visible: 'hidden'
        };
    }

    toggleVisibility() {
        const vis = this.state.visible;
        
        if (vis == 'hidden') this.setState({visible: 'visible'});
        else this.setState({visible: 'hidden'});
    }

    getSpanStyle() {

        var style = {
            visibility: this.state.visible
        };

        Object.assign(style, this.props.style);

        return style;
    }
    
    render() {
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

class Period extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let text = this.props.children != null ? <h3 className="timeline-period-text">{this.props.children}</h3> : undefined;

        return (
            <div style={{backgroundColor: this.props.color}} className="timeline-period" onClick={() => this.props.onClick()}>
                <Tooltip style={{backgroundColor: this.props.color}} text={this.props.tooltip}>{text}</Tooltip>
            </div>
        );
    }
}

class TimeLine extends Component {

    render() {
        return (
            <div className="timeline-container">
                <div className="timeline">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

/**
 * Absolutely positioned menu that is positioned at the top of the screen.
 */
class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
                {this.props.children}
            </nav>
        );
    }
}

export class Link extends Component {
    getClass() {
        return this.props.className + " link";
    }
    render() {
        return (
            <a className={this.getClass()} onClick={() => this.props.onClick()} href={this.props.href} target="_blank">{this.props.children}</a>
        );
    }
}

export class Button extends Link {
    getClass() {
        return super.getClass() + " button";
    }
}

class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="mailto:anton.ekstrom@elev.kungsbacka.se">Kontakta mig</a>
            </footer>
        );
    }
}

ReactDOM.render(<Page/>, document.getElementById("root"));