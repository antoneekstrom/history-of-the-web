
import React from 'react';
import { Component } from 'react';

import { Link } from "./index";

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

                <div className="information-inner-container">
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

// Export all the components
export { Content60, Content70, Content80, Content90, Content2000, ContentPlaceholder, Information }; 