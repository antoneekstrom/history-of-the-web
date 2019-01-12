
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
 * Set the page URL parameter
 * @param path the path to set the parameter to
 * @param data the optional data to provide for the state event
 */
export function setPage(path : string, data ?: any) {

    // Create URL obj
    var url : URL = new URL(window.location.href);

    // Change the parameter
    url.searchParams.set('page', path);

    // Push the new URL
    history.pushState(data, '', url.href);

    // Manually trigger onpopstate
    var popStateEvent = new PopStateEvent('popstate', { state: data });
    dispatchEvent(popStateEvent);
}