import Header from "../components/header"
import Footer from "../components/footer"

function Layout({children}) {
  return <div className="index">
    <Header/>
    {children}
  </div>
}
export default Layout
