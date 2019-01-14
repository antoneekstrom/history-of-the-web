
/**
 * @returns {URL} an URL object representing the current URL
 */
export function getURL() : URL {
    return new URL(window.location.href);
}

/**
 * @returns {string} the URL parameter of 'page'
 */
export function getPage() : string {
    return getURL().searchParams.get('page');
}

/**
 * 
 * @param paramater 
 * @param value 
 * @param data 
 */
function setUrlParameter(paramater : string, value : string, data ?: any) {
    // Create URL obj
    var url : URL = new URL(window.location.href);

    // Change the parameter
    url.searchParams.set(paramater, value);

    // Push the new URL
    history.pushState(data, '', url.href);
}

/**
 * Set the page URL parameter
 * @param path the path to set the parameter to
 * @param data the optional data to provide for the state event
 */
export function setPage(path : string, data ?: any) {

    // Set the page paramater
    setUrlParameter('page', path, data);

    // Manually trigger onpopstate
    var popStateEvent = new PopStateEvent('popstate', { state: data });
    dispatchEvent(popStateEvent);
}

/**
 * 
 */
export type ElementConsumer = (page : JSX.Element) => void;

/**
 * 
 */
export interface PageMap { [route : string] : JSX.Element; }

/**
 * 
 */
export class Router {

    pageConsumer : ElementConsumer

    pages : PageMap

    fallbackRoute : string;

    /**
     * Construct Router.
     * @param pages the pages to map routes to
     * @param pageConsumer the consumer which receives pages when they are routed to
     */
    constructor(pages : PageMap, pageConsumer ?: ElementConsumer, fallbackRoute ?: string) {
        this.pages = pages;
        this.pageConsumer = pageConsumer;
        this.fallbackRoute = fallbackRoute;

        window.onpopstate = () => this.invokeConsumer();
    }

    getRoutePage(route : string) : JSX.Element {
        return this.pages[route];
    }

    routeExists(route : string) : boolean {
        let exists = false;

        if (route == undefined) return exists;

        for (let r in this.pages) if (r == route) exists = true;

        return exists;
    }

    invokeConsumer() {
        const currentRoute = getPage();
        let found = false;

        if (this.routeExists(currentRoute))
        for (let route in this.pages) {

            let page : JSX.Element = this.getRoutePage(route);

            if (currentRoute == route) {
                this.pageConsumer(page);
                found = true;
            }
        }

        if (!found) {
            setUrlParameter('page', this.fallbackRoute);
            this.pageConsumer(this.getRoutePage(this.fallbackRoute));
        }
    }

    setPageConsumer(consumer : ElementConsumer) {
        this.pageConsumer = consumer;
    }
    
}