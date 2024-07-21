import { Card } from "antd";


let CardStyle = {
  backgroundColor: "#000c17",
  color: "#fff",
  textAlign: 'justify',
  fontFamily: "Dosis",
  minHeight: "25vh",
  marginBottom: "2.5vh",
}

let CardTitleStyle = {
  textAlign: 'center',
  fontFamily: "Dosis",
  color: "#fff"
}


const MobileRecipeBlock = (props) => {
  let { name, ingredients, directions } = props;
  if (name === "" || name === undefined) {
    name = "None Selected";
    ingredients = ["None Selected"];
    directions = ["None Selected"];
  };
  return (
    <Card style={{
      textAlign: 'center',
      fontFamily: "Dosis",
      backgroundColor: '#000c17',
      color: "#fff"
    }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '2.5vh' }}>{name.replaceAll("\"", "")}</div>
      <Card type="inner" style={CardStyle}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '2px' }}>Ingredients</div>
        {ingredients.map((ingredient, index) => {
          return (
            <div key={`I${index}`}>
              {ingredient}
            </div>
          )
        })}
      </Card>
      <Card type="inner" style={CardStyle}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '2px' }}>Directions</div>
        {directions.map((paragraph, index) => {
          return (
            <div key={`D${index}`} style={{ textAlign: "justify" }}>
              {paragraph}
            </div>
          )
        })}
      </Card>
    </Card>
  )
}

export default MobileRecipeBlock;