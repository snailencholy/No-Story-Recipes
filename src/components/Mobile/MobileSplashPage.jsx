import { Layout, Button } from 'antd';

const { Header, Content } = Layout;

const MobileSplashPage = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          fontFamily: 'Dosis',
          fontWeight: "bold",
          fontSize: "30px"
        }}
      >
        NO STORY RECIPES
      </Header>
      <Content
        style={{
          padding: "2.5%",
          justifyContent: "center",
          alignItems: 'center',
          alignContent: 'center',
          textAlign: 'justify',
          color: '#fff',
          backgroundColor: '#000c17',
          fontSize: '24px',
          fontFamily: 'Dosis',
        }}
      >
        <div
          style={{
            margin: "2.5%"
          }}
        >
          When I was a young lad on my Gam-gam's farm in rural mudhutsville I looked at the sunset while eating a delicious flan...
        </div>
        <div
          style={{
            margin: "2.5%"
          }}
        >
          No one want's to read a novel while they're trying to cook dinner or bake bread. Use this as a place to store and display your recipes.
        </div>
        <div
          style={{
            margin: "2.5%"
          }}
        >
          If you do want to put a novel in the directions, however, that's on you.
        </div>
        <Button
          block
          style={{
            backgroundColor: '#001529',
            color: "#fff"
          }}
        >
          Login/Signup
        </Button>
      </Content>
    </Layout>
  )
}

export default MobileSplashPage;