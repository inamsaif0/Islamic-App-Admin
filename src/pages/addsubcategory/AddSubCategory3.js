import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import CustomDropzone from '../../components/customDropzone/CustomDropzone'
import SubCategoryTable3 from '../../components/tables/SubCategoryTable3'

const AddSubCategory3 = () => {
  const [file, setFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  console.log('multipleFiles==>', multipleFiles)
  return (
    <>
      <Header />
      <SubCategoryTable3 />
      <Footer />
    </>

  )
}

export default AddSubCategory3