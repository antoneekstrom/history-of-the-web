'use strict'

import React from 'react';
import { Component } from 'react';

import { Link } from "./index";

class Information extends Component {
    render() {
        return (
            <main className="information">

                <section>
                    <h2>Den här sidan är gjord av Anton Ekström.</h2>
                    <h3>Kontakta mig här:</h3>
                    <Link href="mailto:anton.ekstrom@elev.kungsbacka.se">anton.ekstrom@elev.kungsbacka.se</Link>
                </section>

                <section>
                    <h2>Källor</h2>
                    <ul>
                        <Link href="https://www.internetmuseum.se/berattelsen-om-internets-historia/">Internet Museum - Berättelsen om internets historia</Link>
                        <Link href="https://sv.wikipedia.org/wiki/ARPANET">Wikipedia - ARPANET</Link>
                    </ul>
                </section>
            </main>
        );
    }
}

class ContentPlaceholder extends Component {
    render() {
        return (
            <div>
                <h2>Tidslinjen finns nedanför!</h2>
                <p>Klicka på en del av tidslinjen för att läsa om vad som hände under den perioden.</p>
            </div>
        );
    }
}

class Content60 extends Component {
    render() {
        return (
            <div>
                <h2>1960-talet</h2>
                <p>Under 60-talet började det hända mycket inom nätverkstekniken. Det Amerikanska försvaret <Link href="https://www.darpa.mil/">DARPA</Link> utvecklade <Link href="https://sv.wikipedia.org/wiki/ARPANET">ARPANET</Link> som skulle vara ett decentraliserat nätverk som var säkert från att bli saboterat av Sovjetunionen.</p>
            </div>
        );
    }
}

class Content70 extends Component {
    render() {
        return (
            <div>
                <h2>1970-talet</h2>
                <p>Wow då hände det mycket alltså, du skulle bara veta allt som hände, herregud det var makalöst faktiskt.</p>
            </div>
        );
    }
}

class Content80 extends Component {
    render() {
        return (
            <div>
                <h2>1980-talet</h2>
                <p>Wow då hände det mycket alltså, du skulle bara veta allt som hände, herregud det var makalöst faktiskt.</p>
            </div>
        );
    }
}

class Content90 extends Component {
    render() {
        return (
            <div>
                <h2>1990-talet</h2>
                <p>Wow då hände det mycket alltså, du skulle bara veta allt som hände, herregud det var makalöst faktiskt.</p>
            </div>
        );
    }
}

class Content2000 extends Component {
    render() {
        return (
            <div>
                <h2>2000-talet</h2>
                <p>Wow då hände det mycket alltså, du skulle bara veta allt som hände, herregud det var makalöst faktiskt.</p>
            </div>
        );
    }
}

export { Content60, Content70, Content80, Content90, Content2000, ContentPlaceholder, Information }; 