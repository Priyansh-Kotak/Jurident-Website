import React, { Component } from 'react';
import Carrd from "./MyCard"
import {articles} from "./data"

export default class MyCards extends Component {
    
        articles = articles;
      
        constructor(){
    
            super();
            console.log("Hello I am a constructor from NewsItem");
            this.state={
              articles : this.articles,
              loading : false
            }
          }


          render() {
            return (
              <div className="container my-3">
                <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
                <div className="row grid grid-cols-2 gap-4">
                {this.state.articles.map((element)=>{
                  return <div className="col md-4" key = {element.url}>
                  <Carrd title={element.title.slice(0,45)} description={element.description.slice(0,150)} imag = {element.urlToImage} tags= {element.source.name} time = {element.publishedAt} author = {element.author} newsUrl={element.url} id={element.id}/>
                  </div>
                })}
                
                </div>
              </div>
            )
          }
        }
