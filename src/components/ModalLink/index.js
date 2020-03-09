import React from 'react'
import {
    Link,
    withRouter,
} from "react-router-dom";

export default withRouter((props) => {
    return (
        <Link to={{
            pathname: "/modal" + props.to,
            state: { background: props.location }
        }} >{props.children}</Link>
    )
})