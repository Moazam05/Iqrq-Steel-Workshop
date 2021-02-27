import React from 'react'
import {Bench,Door,Fabrication,Gate,Grill,Stair,MetallicStructure,PotStand,Railing,Shelf,Stand,Table,Window} from './graphql/index.js'
import { Query } from 'react-apollo';
import {useRouteMatch} from 'react-router-dom';
// import  "./ProductDetails.css"

import ReactHtmlParser from 'react-html-parser';

function ProductDetails({comingQuery}) {

    let { url } = useRouteMatch();
    let required = url.split(":")

    let newRequired = required[required.length - 3] // category
    newRequired = newRequired.replace("/", "")
    console.log(newRequired)

    let newRequired2 = required[required.length - 1] // code
    newRequired2 = newRequired2.replace(" ", "")
    console.log(newRequired2)

    if (newRequired === "benches") {
      comingQuery = Bench
      newRequired = "bench"
    } else if (newRequired === "doors") {
      comingQuery = Door
      newRequired = "door"
    } else if (newRequired === "fabrications") {
      comingQuery = Fabrication
      newRequired = "fabrication"
    } else if (newRequired === "gates") {
      comingQuery = Gate
      newRequired = "gate"
    } else if (newRequired === "grills") {
      comingQuery = Grill
      newRequired = "grill"
    } else if (newRequired === "stairs") {
      comingQuery = Stair
      newRequired = "stair"
    } else if (newRequired === "railings") {
      comingQuery = Railing
      newRequired = "railing"
    } else if (newRequired === "shelves") {
      comingQuery = Shelf
      newRequired = "shelf"
    } else if (newRequired === "stands") {
      comingQuery = Stand
      newRequired = "stand"
    } else if (newRequired === "tables") {
      comingQuery = Table
      newRequired = "table"
    } else if (newRequired === "windows") {
      comingQuery = Window
      newRequired = "window"
    } else if (newRequired === "metallicStructures") {
      comingQuery = MetallicStructure
      newRequired = "metallicStructure"
    } else if (newRequired === "potStands") {
      comingQuery = PotStand
      newRequired = "potStand"
    }





    return (
        <Query query={comingQuery} variables={({itemCode:newRequired2})}>

          {({ loading, error, data }) => {

          if (loading) return <div>Fetching</div>

          if (error)   {
              console.log(error)
              return <div>Error</div>}

          // console.log(newRequired.slice(0, -1))
          console.log(data[newRequired])
          // console.log(data)
          let item = data[newRequired];

          return (
              <>
                  <h2>Name {item.name}</h2>
                  <h4>Item Code {item.itemCode}</h4>
                  <p>Added Date {item.addingDate}</p>
                  <h4>Estimated Price : {item.price}</h4>
                  <div>Description
                    <br/>
                    {ReactHtmlParser(item.description.html)}
                  </div>
                  <p>Images
                    {item.images.map((eachImage, index)=>{
                      return <img src={eachImage.url} key={index} />
                    })}
                  </p>
                  <button>Make Appointment</button>
              </>
          )
          }} 


</Query>
    )
}

export default ProductDetails
