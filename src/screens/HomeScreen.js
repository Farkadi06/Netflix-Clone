import React from 'react'
import requests from '../api/requests'
import Banner from '../Components/Banner'
import './HomeScreen.css'
import Navbar from '../Components/Navbar'
import Row from '../Components/Row'

function HomeScreen() {
    return (
        <div className ="homeScreen">

            <Navbar />
          
            <Banner/>

            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow/>
            <Row 
                title="Top Rated"
                fetchUrl = {requests.fetchTopRated}/>
            <Row 
                title="Action Movies"
                fetchUrl = {requests.fetchActionMovies}/>
            <Row 
                title="Comedy Movies"
                fetchUrl = {requests.fetchComedyMovies}/>
            <Row 
                title="Romance Movies"
                fetchUrl = {requests.fetchRomanceMovies}/>
            <Row 
                title="Documentaries"
                fetchUrl = {requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen
