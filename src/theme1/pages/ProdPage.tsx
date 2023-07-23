import Container from "../components/ProdDetails/Container/Container"
import ProductDetails from "../components/ProdDetails/ProductDetails"
import Similar from "../components/ProdDetails/Similar/Similar"


const ProdPage = () => {
  return (
    <div className="container mx-auto md:my-12 max-md:p-4">
        <ProductDetails/>
        {/*<h3>{props.match.params.id}</h3>*/}
        <Container/>
        <Similar/>
    </div>
  )
}

export default ProdPage