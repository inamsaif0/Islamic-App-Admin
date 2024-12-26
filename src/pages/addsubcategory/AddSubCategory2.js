import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
// import SubCategoryTable from '../../components/tables/SubCategoryTable'
import CustomDropzone from '../../components/customDropzone/CustomDropzone'
import SubCategoryTable2 from '../../components/tables/SubCategoryTable2'

const AddSubCategory2 = () => {
  const [file, setFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  console.log('multipleFiles==>', multipleFiles)
  return (
    <>
      <Header />
      <SubCategoryTable2 />
      <Footer />
    </>

  )
}

export default AddSubCategory2