import React from 'react'
import Card from '../Card.js'

import {Helmet} from "react-helmet";

function Blogs() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Iqra Steel Works Blogs</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="hfkjs dhjfh hkjs" />
            </Helmet>

            Blogs
            <Card heading="Our Blogs" />
        </div>
    )
}

export default Blogs
