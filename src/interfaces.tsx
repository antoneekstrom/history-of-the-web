/**
 * Components that toggle visible in state.
 */
export interface IVisibility {

    visible : string

}

/**
 * Components that has dynamically changing content
 */
export interface IContent {

    content : JSX.Element

}

/**
 * Components that contains a page
 */
export interface IPage {

    page : JSX.Element

}

/**
 * Components that has a function that is called when an element inside it is clicked.
 */
export interface IOnClick {

    onClick : Function

}