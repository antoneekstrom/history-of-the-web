/**
 * Components that toggle visible in state.
 */
export interface IVisibility {

    /**
     * If the component is visible.
     */
    visible : string

}

/**
 * Components that has dynamically changing content
 */
export interface IContent {

    /**
     * The content that is to be displayed in the component.
     */
    content : JSX.Element

}

/**
 * Components that contains a page
 */
export interface IPage {

    /**
     * The page that is to be displayed in the component.
     */
    page : JSX.Element
    
}

/**
 * Components that has a function that is called when an element inside it is clicked.
 */
export interface IOnClick {

    /**
     * The function that should be called when the component is clicked.
     */
    onClick : Function

}