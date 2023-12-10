import NavBar from "@/components/headers/navbar/NavBar"
import { Layout } from "antd"
import { Outlet } from "react-router-dom"

const {Header, Content} = Layout

const RootLayout = () => {
  return (
    <Layout>
      <Header className="sticky top-0 bg-white flex items-center justify-between">
        <NavBar/>
      </Header>
      <Content>
        <Outlet/>
      </Content>
    </Layout>
  )
}

export default RootLayout