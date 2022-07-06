import React from 'react'
import AppBars from '../organisms/headers/AppBars'
import {useParams} from "react-router-dom";
import BookdetailView from '../organisms/BookDetailView/BookdetailView';
import FooterComp from '../molecules/Footer';
function Bookdetailviewpage() {
   const {id} =useParams();

    return (
    <>
    <AppBars/>
    <BookdetailView id={id}></BookdetailView>   
    <FooterComp/>
    </>
  )
}

export default Bookdetailviewpage