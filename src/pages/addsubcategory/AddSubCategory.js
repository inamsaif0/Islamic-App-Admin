import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import SubCategoryTable from '../../components/tables/SubCategoryTable'
import CustomDropzone from '../../components/customDropzone/CustomDropzone'

const AddSubCategory = () => {
  const [file, setFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  console.log('multipleFiles==>',multipleFiles)
  return (
    <>
    <Header />
   <SubCategoryTable />
    <Footer />
   </>

  )
}

export default AddSubCategory