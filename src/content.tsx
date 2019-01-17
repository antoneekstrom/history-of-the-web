
import React from 'react';
import { Component } from 'react';

import { Link, Italic, Code, ActiveButton, CodeBlock, Button } from "./index";

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


                <div className="text-content">
                    <header>
                        <h1>Information</h1>
                        <h3>Den här sidan är gjord, utvecklad, skapad, framkallad, utformad, genererad, producerad, frambringad, uppfunnen, bildad, gestaltad och bringad till existens av Anton Ekström.</h3>
                    </header>

                    <section>
                        <h2>Kontakt och källkod</h2>
                        <address>
                            <h3 className="less-margin">Min mejladress:</h3>
                            <Link href="mailto:anton.ekstrom@elev.kungsbacka.se">anton.ekstrom@elev.kungsbacka.se</Link>
    
                            <h3 className="less-margin">Min mejladress om du vill att jag ser mejlet:</h3>
                            <Link href="mailto:anton.e.ekstrom@gmail.com">anton.e.ekstrom@gmail.com</Link>
    
                            <h3 className="less-margin">Github repo för den här sidan:</h3>
                            <Link href="https://github.com/zimbosaurus/history-of-the-web">github.com/zimbosaurus - history-of-the-web</Link>
                        </address>
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
                <p>På 70-talet började internet ta fart på riktigt. 1973 blir nätet internationellt och under året började datorer från flera platser i världen att kopplas upp till nätet.</p>
            </div>
        );
    }
}

class Content80 extends Component<any, any> {
    render() {
        return (
            <div>
                <h2>1980-talet</h2>
                <p>Första januari 1983 övergick Arpanet från <Link href="https://en.wikipedia.org/wiki/Network_Control_Program">NCP</Link> till <Link href="https://en.wikipedia.org/wiki/Internet_protocol_suite">TCP/IP</Link> protokollet som var mer flexibelt. I Sverige skedde den första Internet uppkopplingen 1984 på Chalmers. I Sverige handlade utvecklingen under 80-talet mest om universiteten som kopplas samman med hjälp av nätet för att dela forskning och information.</p>
                <h3>Internet Protocol Suite</h3>
                <p>Också känt som <Code>TCP/IP</Code> eftersom <Code>TCP</Code> och <Code>IP</Code> är de underliggande protokollen som systemet bygger på. Protokollen specifierar hur kommunikation bör ske mellan enheter. Systemet delas upp i fyra lager som klassifierar de olika protokollen. Alla enheter som kopplas upp direkt till nätet får en egen unik IP adress som används för kommunikation mellan enheter.</p>
            </div>
        );
    }
}

class Content90 extends Component<any, any> {
    render() {
        return (
            <div>
                <h2>1990-talet</h2>

                <h3>1990</h3>
                <p>Året 1990 börjar webben mer likna det vi har idag. <Link href="https://en.wikipedia.org/wiki/Tim_Berners-Lee">Tim Berners-Lee</Link> kommer på systemet med URL adresser och länkar som idag är det grundläggande systemet för att navigera sidor på nätet.</p>

                <h3>1991</h3>
                <p>1991 blir den allra första webbsidan tillgänglig att besöka på internet. Det var ett forskningscentrum vid namnet <Link href="https://home.cern/">CERN</Link> i Schweiz, den går fortfarande att besökas <Link href="http://info.cern.ch/hypertext/WWW/TheProject.html">här</Link>.</p>

                <h3>1993</h3>
                <p><Link href="https://en.wikipedia.org/wiki/World_Wide_Web">The World Wide Web</Link> hade börjat ta fart men samtidigt utvecklades en konkurrent som kallas <Link href="https://en.wikipedia.org/wiki/Gopher_(protocol)">Gopher</Link> och många trodde att detta skulle bli det ledande nätet. Det dröjde inte länge innan webbläsaren <Link>Mosaic</Link> utvecklades som var mycket häftig på den tiden och då blev Gopher mindre aktuellt. Mosaic kunde till och med visa bilder vilket var oerhört nice.</p>
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

class OmSidan extends Component<any, any> {
    render() {
        return (
            <main className="cool">
                <article className="text-content">
                    <header>
                        <h1>Om sidan</h1>
                        <h3>Den är väldigt (väldigt) cool, faktiskt då asså. Hell yeah brother.</h3>
                    </header>
    
                    <section>
                        <h2>Dynamisk webbsida</h2>
                        <p>Den här sidan är rätt cool om jag skall vara helt ärlig. Med hjälp av <Link href="http://reactjs.org">React</Link> har jag gjort en sida som uppdateras dynamiskt men som fortfarande kan navigeras med hjälp av <Code>URL</Code>:en i adressfältet. Ett litet problem var att den här sidan är hostad av ett webbhotell och därför kan jag inte kontrollera server-sidad <Code>routing</Code> själv. Min lösning var att använda mig av sökparametrar istället för att navigera sidan med snedstreck <Code>/</Code>. Detta ser inte like fint/intuitivt ut men det fungerar ganska väl.</p>
                    </section>
                    <section>
                        <h2>Typescript</h2>
                        <h3>Om Typescript</h3>
                        <p>Den här hemsidan är skriven i <Link href="https://www.typescriptlang.org/">Typescript</Link> vilket är ett programmeringsspråk som är ett <Link href="https://en.wikipedia.org/wiki/Subset">superset</Link> av javascript. Det här betyder att det är väldigt likt JS, all javascript kod är också fungerande Typescript. Det som är bra med Typescript är att det är mer <Italic>starkt skrivet</Italic> (<Link href="https://en.wikipedia.org/wiki/Strong_and_weak_typing">strongly typed</Link>). Något som kan vara lite jobbigt med javascript är att språket inte riktigt bryr sig om vad man gör när man skriver språket i sin IDE. Språket är väldigt <Code>weakly typed</Code> ger inte särskilt mycket feedback när man programmerar.</p>

                        <h3>Exempel</h3>
                        <p>I Typescript kan man specifiera typen av variabel i koden.</p>
                        <CodeBlock lang="typescript">
                        {`
function cool(nice : number) : number {
    return nice * 3;
}
                        `}
                        </CodeBlock>
                        <p>Det går att skapa interfaces för att göra mallar för object och klasser.</p>
                        <CodeBlock lang="typescript">
                        {`
interface Despacito {
    heck : string;
    yeah : number;
    brother : boolean;
}
                        `}
                        </CodeBlock>
                        <p>Det går till och med att specifiera typen av funktion eller object som skall finnas i en variabel eller tas in av en function.</p>
                        <CodeBlock lang="typescript">
                        {`
coolFunktion : (s : string) => void;
niceObjekt : {nice : boolean; epic : string};
                        `}
                        </CodeBlock>

                        <h3>Språket kompileras</h3>
                        <p>Typescript är bra eftersom det inte låter dig kompilera koden om det är fel på koden. Det här gör att man kan upptäcka många fel innan man kör programmet. Typescript kan inte köras direkt av webbläsaren utan måste först kompileras till vanlig javascript. Jag använder mig av <Link href="">webpack</Link> för att inkludera moduler från <Link>npm</Link> och för att kompilera. Källkoden omvandlas då till en enda <Code>bundle.js</Code> fil som presenteras som en statisk fil på sidan.</p>
                    </section>
                </article>
            </main>
        );
    }
}

// Export all the components
export { Content60, Content70, Content80, Content90, Content2000, ContentPlaceholder, Information, OmSidan }; 