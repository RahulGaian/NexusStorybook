import React from "react";

// import  Papa  from "papaparse"
// import "../SolutionPages/SolutionPageIndex.css";

// import ProductBanner from "../../components/productComponents/productBanner/productBanner";
import ProductContent from "../../components/productComponents/productContent/productContent";
import SolutionPageBanner from "../../components/solutionPageComponents/SolutionPageBanner/SolutionPageBanner";
// import "./products.css";
// import CSVFILE from "./test-products - Sheet 1.csv"
const Products = ({ datas }) => {
  // console.log(datas)
  const banner = datas.banner;
  banner.description = banner.paragraph;
  console.log(banner)

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
    <>
   
        <section className="solutionContainer">
          {/* <ProductBanner data={banner} /> */}
          <SolutionPageBanner bannerData={banner} />

          <ProductContent data={datas} />
        </section>

    </>
  );
};

export default Products;
