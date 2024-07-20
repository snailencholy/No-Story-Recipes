import { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import axios from 'axios';
const { Header, Sider, Content } = Layout;


import RecipeBlock from './components/RecipeBlock';

const listUrl = "http://localhost:8080";
const recipeUrl = "http://localhost:8080/recipe"
//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'


const App = () => {
  const [recipeName, setRecipeName] = useState("");
  const [menuList, setMenuList] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState("");

  useEffect(() => {
    axios
      .get(listUrl)
      .then(data => {
        setMenuList(data.data);
      })
      .catch(error => console.log(error));
  }, [])

  const onClick = (e) => {
    console.log(e);
    axios
      .get(`${recipeUrl}/${e.key}`)
      .then(data => {
        //console.log(data.data.Title, data.data.Ingredients, data.data.Directions);
        if (data.data.Title === null || data.data.Title === "null") {
          setRecipeName("No information found");
          setDirections(["No information found"]);
          setIngredients(["No information found"]);
        } else {
          let replacedI = data.data.Ingredients.replaceAll("\\", "").replaceAll("[", "").replaceAll("]", "").replaceAll("\"", "");
          let ingredients = replacedI.split(",");
          let replacedD = data.data.Directions.replaceAll("\\", "").replaceAll("[", "").replaceAll("]", "").replaceAll("\"", "");
          let directions = replacedD.split(",");
          setRecipeName(data.data.Title);
          setIngredients(ingredients);
          setDirections(directions);
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <Layout
      style={{
        height: '100vh'
      }}
    >
      <Sider
        width={'25%'}
      >

        < Menu
          onClick={onClick}
          style={{
            paddingTop: '5.75vh',
            fontFamily: "Dosis",
            fontSize: "24px",
          }}
          mode="inline"
          theme="dark"
          items={menuList}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            textAlign: 'center',
            color: "#fff",
            fontFamily: "Dosis",
            fontWeight: "800",
            fontSize: "40px"
          }}
        >
          Recipes don't need a novel
        </Header>
        <Content
          style={{
            margin: '0',
            backgroundColor: "#000c17",
            color: "#fff"
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
            }}
          >
            <RecipeBlock name={recipeName} ingredients={ingredients} directions={directions} />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
};

export default App;
