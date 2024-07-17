import { Card } from 'antd';

let ingredientList = [
  "milk",
  "egg",
  "SUGAR",
  "DEATH"
]

let recipeText = "BLAH BLAH LOREM IPSUM Bacon ipsum dolor amet turducken tongue picanha pork chop meatloaf cow tri-tip bacon frankfurter filet mignon alcatra short ribs short loin. Boudin hamburger salami, chicken filet mignon prosciutto buffalo corned beef tail ribeye tri-tip pork chop cow strip steak doner. Ham jowl filet mignon doner. Corned beef prosciutto landjaeger, pork venison pastrami andouille drumstick meatloaf sausage. Shankle kielbasa beef jerky biltong short loin cow. Chicken short ribs drumstick turducken, doner tri-tip sausage capicola short loin leberkas buffalo alcatra pork chop salami pig. Hamburger meatball venison, andouille jerky fatback pig jowl salami short ribs."

let CardStyle = {
  backgroundColor: "#000c17",
  color: "#fff",
  textAlign: 'justify',
  fontFamily: "Barlow Condensed",
  minHeight: "80vh",
}

let CardTitleStyle = {
  color: "#fff",
  textAlign: 'center',
  fontFamily: "Barlow Condensed",
  fontWeight: "Bold"
}

const RecipeBlock = () => {
  return (
    <Card title="Recipe Name" style={CardTitleStyle}>
      <Card.Grid hoverable={false} style={CardStyle} >
        {
          ingredientList.map(a => {
            return (<div style={{ padding: '5px' }}>{a}</div>)
          })
        }
      </Card.Grid>
      <Card.Grid hoverable={false} style={CardStyle}></Card.Grid>
      <Card.Grid hoverable={false} style={CardStyle}>
        <p>{recipeText}</p>
      </Card.Grid>
    </Card>
  )
};

export default RecipeBlock;