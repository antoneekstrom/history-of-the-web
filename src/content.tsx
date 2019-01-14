
import React from 'react';
import { Component } from 'react';

import { Link, Italic, Code } from "./index";

/*
 * 
 * This file contains the "content", which are the components that contain text and the media that is to be consumed by the page visitor. 
 * 
*/

/**
 * The information page.
 */
class Information extends Component<any, any> {
    render() {
        return (
            // The page is split into a main container and an inner container,
            // this is to create a centered container that isn't the full width if the screen and is also properly centered.
            // 
            // Page is split into sections to create spacing between different parts
            <main className="information">

                <header>
                    <h1>Information</h1>
                </header>

                <div className="text-content">
                    <section>
                        <h2>Den här sidan är gjord av Anton Ekström.</h2>
                        <h3>Kontakta mig här:</h3>
                        <Link href="mailto:anton.ekstrom@elev.kungsbacka.se">anton.ekstrom@elev.kungsbacka.se</Link>
                    </section>
    
                    <section>
                        <h3>Github repo för den här sidan:</h3>
                        <Link href="https://github.com/zimbosaurus/history-of-the-web">Github</Link>
                    </section>
    
                    <section>
                        <h2>Källor</h2>
                        <ul>
                            <Link href="https://www.internetmuseum.se/berattelsen-om-internets-historia/">Internet Museum - Berättelsen om internets historia</Link>
                            <Link href="https://sv.wikipedia.org/wiki/ARPANET">Wikipedia - ARPANET</Link>
                        </ul>
                    </section>
                </div>

            </main>
        );
    }
}

/**
 * Text that is displayed when the user has not yet clicked on the timeline
 */
class ContentPlaceholder extends Component<any, any> {
    render() {
        return (
            <div>
                <h2>Tidslinjen finns nedanför!</h2>
                <p>Klicka på en del av tidslinjen för att läsa om vad som hände under den perioden.</p>
            </div>
        );
    }
}

/*
 * 
 * Below are the entries on the different time periods 
 * 
 */

class Content60 extends Component<any, any> {
    render() {
        return (
            <div>
                <h2>1960-talet</h2>
                <p>Under 60-talet började det hända mycket inom nätverkstekniken. Det Amerikanska försvaret <Link href="https://www.darpa.mil/">DARPA</Link> utvecklade <Link href="https://sv.wikipedia.org/wiki/ARPANET">ARPANET</Link> som skulle vara ett decentraliserat nätverk som var säkert från att bli saboterat av Sovjetunionen.</p>
            </div>
        );
    }
}

class Content70 extends Component<any, any> {
    render() {
        return (
            <div>
                <h2>1970-talet</h2>
                <p>Wow då hände det mycket alltså, du skulle bara veta allt som hände, herregud det var makalöst faktiskt.</p>
            </div>
        );
    }
}

class Content80 extends Component<any, any> {
    render() {
        return (
            <div>
                <h2>1980-talet</h2>
                <p>Wow då hände det mycket alltså, du skulle bara veta allt som hände, herregud det var makalöst faktiskt.</p>
            </div>
        );
    }
}

class Content90 extends Component<any, any> {
    render() {
        return (
            <div>
                <h2>1990-talet</h2>
                <p>Wow då hände det mycket alltså, du skulle bara veta allt som hände, herregud det var makalöst faktiskt.</p>
            </div>
        );
    }
}

class Content2000 extends Component<any, any> {
    render() {
        return (
            <div>
                <h2>2000-talet</h2>
                <p>Wow då hände det mycket alltså, du skulle bara veta allt som hände, herregud det var makalöst faktiskt.</p>
            </div>
        );
    }
}

class Cool extends Component<any, any> {
    render() {
        return (
            <main className="cool">
                <div className="text-content">
                    <header>
                        <h1>väldigt cool</h1>
                        <h3>väldigt (väldigt) cool</h3>
                    </header>
    
                    <section>
                        <h2>coolt</h2>
                        <p>Den här sidan är rätt cool om jag skall vara helt ärlig. Med hjälp av <a href="http://reactjs.org">React</a> har jag gjort en sida som uppdateras dynamiskt men som fortfarande kan navigeras med hjälp av <Code>URL</Code>:en i adressfältet. Ett litet problem var att den här sidan är hostad av ett webbhotell och därför kan jag inte kontrollera server-sidad <Code>routing</Code> själv. Min lösning var att använda mig av sökparametrar istället för att navigera sidan med snedstreck <Code>/</Code>. Detta ser inte like fint/intuitivt ut men det fungerar ganska väl.</p>
                    </section>
                </div>
            </main>
        );
    }
}

// Export all the components
export { Content60, Content70, Content80, Content90, Content2000, ContentPlaceholder, Information, Cool }; 