import Header from "../components/header"
import Footer from "../components/footer"

function Layout({children}) {
  return <div className="index">
    <Header/>
    {children}
    <Footer />
  </div>
}
export default Layout
