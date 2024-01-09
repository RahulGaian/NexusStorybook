import React from "react";

// import  Papa  from "papaparse"
import "../SolutionPages/SolutionPageIndex.css";

// import ProductBanner from "../../components/productComponents/productBanner/productBanner";
import ProductContent from "../../components/productComponents/productContent/productContent";
import SolutionPageBanner from "../../components/solutionPageComponents/SolutionPageBanner/SolutionPageBanner";
import Blobs from "../../molecules/blobs";
import "./products.css";
// import CSVFILE from "./test-products - Sheet 1.csv"
const Products = ({ datas }) => {
  // //console.log(datas)
  const banner = datas.banner;
  banner.description = banner.paragraph;
  //console.log(banner)

  // const [data, setData]=useState([])

  // useEffect(()=>{

  //  const GetData=()=>{
  //   Papa.parse(CSVFILE,{
  //      download: true,
  //      complete: function (input) {
  //      }
  //  });

  // }
  //   GetData();
  // },[]

  // )

  return (
    <section >

  

        <section className="solutionContainer productContainer" >

        <Blobs top={"-200px"} left={"85%"}></Blobs>
      <Blobs top={"20%"} color="yellow" left={"-200px"}></Blobs>
      <Blobs top={"38%"}  color="yellow" left={"85%"}></Blobs>
      <Blobs top={"50%"} color="yellow" left={"-200px"}></Blobs>
      <Blobs top={"63%"}   left={"85%"}></Blobs>

        

          {/* <ProductBanner data={banner} /> */}
          
          <SolutionPageBanner bannerData={banner} />

          <ProductContent data={datas} />
        </section>

    </section>
  );
};

export default Products;
