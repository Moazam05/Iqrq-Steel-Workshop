import React from 'react'
import {Alert} from 'react-bootstrap'



function toTitleCase(str) {
    return str.replace(
      /(\w*\W*|\w*)\s*/g,
      function(txt) {
      return(txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
      }
    ); 
  }


function StatusAlert({accountValues}) {

    if (accountValues.data.status === "pending") {
        return <Alert variant="secondary" style={{marginTop:"10px"}}>
            <Alert.Heading>Nice to see you, Mr/Ms. {toTitleCase(accountValues.data.name)}</Alert.Heading>
            <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
            </p>
            <h3>{toTitleCase(accountValues.data.status)}</h3>
        </Alert>
    }


    if (accountValues.data.status === "in progress") {
        return <Alert variant="primary" style={{marginTop:"10px"}}>
            <Alert.Heading>Nice to see you, Mr/Ms. {toTitleCase(accountValues.data.name)}</Alert.Heading>
            <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
            </p>
            <h3>{toTitleCase(accountValues.data.status)}</h3>
        </Alert>
    }


    if (accountValues.data.status === "discharged") {
        return <Alert variant="warning" style={{marginTop:"10px"}}>
            <Alert.Heading>Nice to see you, Mr/Ms. {toTitleCase(accountValues.data.name)}</Alert.Heading>
            <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
            </p>
            <h3>{toTitleCase(accountValues.data.status)}</h3>
        </Alert>
    }


    if (accountValues.data.status === "completed") {
        return <Alert variant="success" style={{marginTop:"10px"}}>
            <Alert.Heading>Nice to see you, Mr/Ms. {toTitleCase(accountValues.data.name)}</Alert.Heading>
            <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
            </p>
            <h3>{toTitleCase(accountValues.data.status)}</h3>
        </Alert>
    }

// following is for Failed
    return (
        <Alert variant="danger" style={{marginTop:"10px"}}>
            <Alert.Heading>Nice to see you, Mr/Ms. {toTitleCase(accountValues.data.name)}</Alert.Heading>
            <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
            </p>
            <h3>{toTitleCase(accountValues.data.status)}</h3>
        </Alert>
    )
}

export default StatusAlert
