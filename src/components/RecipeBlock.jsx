import { Card } from 'antd';


let CardStyle = {
  backgroundColor: "#000c17",
  color: "#fff",
  textAlign: 'justify',
  fontFamily: "Dosis",
  minHeight: "80vh",
}

let CardTitleStyle = {
  textAlign: 'center',
  fontFamily: "Dosis",
}

let GridTitleStyle = {
  textAlign: "center",
  fontFamily: "Dosis",
  fontSize: "24px",
  fontWeight: "Bold",
}

const RecipeBlock = (props) => {
  //TODO: Clean up and simplify
  let name;
  let ingredients;
  let directions;
  if (props.name == "") {
    name = "None Selected";
    ingredients = ["None Selected"];
    directions = ["None Selected"];
  } else {
    name = props.name;
    ingredients = props.ingredients;
    directions = props.directions;
  };

  return (
    <Card title={name.replaceAll("\"", "")} style={CardTitleStyle}>
      <Card.Grid hoverable={false} style={CardStyle}>
        <div style={GridTitleStyle}>Ingredients</div>
        {
          ingredients.map((a, index) => {
            return (<li key={index} style={{ padding: '5px' }}>{a}</li>)
          })
        }
      </Card.Grid>
      <Card.Grid hoverable={false} style={CardStyle}></Card.Grid>
      <Card.Grid hoverable={false} style={CardStyle}>
        <div style={GridTitleStyle}>Directions</div>
        {directions.map((d, index) => {
          return (
            <div key={`d${index}`} style={{ padding: '5px' }}>{d}</div>
          )
        }
        )}
      </Card.Grid>
    </Card>
  )
};

export default RecipeBlock;