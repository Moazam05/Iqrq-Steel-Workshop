import gql from "graphql-tag";

// query DetailedMissionsInfo($id: String!) {
  // launch(id: $id) {

export const Benches = gql`
query MyQuery{
  benches{
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Bench = gql`
query MyQuery($itemCode: String!) {
  bench(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;





export const Doors = gql`
query MyQuery {
  doors {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Door = gql`
query MyQuery($itemCode: String!) {
  door(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;




export const Fabrications = gql`
query MyQuery {
  fabrications {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Fabrication = gql`
query MyQuery($itemCode: String!) {
  fabrication(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;





export const Gates = gql`
query MyQuery {
  gates {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Gate = gql`
query MyQuery($itemCode: String!) {
  gate(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;





export const Grills = gql`
query MyQuery {
  grills {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Grill = gql`
query MyQuery($itemCode: String!) {
  grill(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;




export const Stairs = gql`
query MyQuery {
  stairs {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Stair = gql`
query MyQuery($itemCode: String!) {
  stair(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;




export const MetallicStructures = gql`
query MyQuery {
  metallicStructures {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const MetallicStructure = gql`
query MyQuery($itemCode: String!) {
  metallicStructure(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;




export const PotStands = gql`
query MyQuery {
  potStands {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const PotStand = gql`
query MyQuery($itemCode: String!) {
  potStand(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;




export const Railings = gql`
query MyQuery {
  railings {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Railing = gql`
query MyQuery($itemCode: String!) {
  railing(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;




export const Shelves = gql`
query MyQuery {
  shelves {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Shelf = gql`
query MyQuery($itemCode: String!) {
  shelf(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;




export const Stands = gql`
query MyQuery {
  stands {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Stand = gql`
query MyQuery($itemCode: String!) {
  stand(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;





export const Tables = gql`
query MyQuery {
  tables {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Table = gql`
query MyQuery($itemCode: String!) {
  table(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;





export const Windows = gql`
query MyQuery {
  windows {
    name
    price
    itemCode
    addingDate
    description {
      html
    }
    images {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
export const Window = gql`
query MyQuery($itemCode: String!) {
  window(where: {itemCode: $itemCode}) {
    name
    price
    itemCode
    description {
      html
    }
    addingDate
    images {
      url
    }
  }
}
`;





export const AllCategories_QUERY = gql`
query MyQuery {
  allCategories {
    name
    image {
      url(transformation: {validateOptions: false})
    }
  }
}
`;
