import { useState } from 'react';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Flex, Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


import RecipeBlock from './components/RecipeBlock';

import listyList from './data/list.json';


const App = () => {

  const onClick = (e) => {
    console.log('click ', e);
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
          defaultSelectedKeys={['1']}
          style={{
            paddingTop: '5.5vh',
            fontFamily: "Barlow Condensed",
          }}
          mode="inline"
          theme="dark"
          items={listyList}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            textAlign: 'center',
            color: "#fff",
            fontFamily: "Barlow Condensed",
            fontWeight: "bold",
            fontSize: "16px"
          }}
        >
          Recipes don't need a fuckin' novel
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
            <RecipeBlock />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
};

export default App;
