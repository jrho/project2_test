import React, {Component} from 'react';
import {Card, CardBody, Col, ButtonToolbar} from 'reactstrap';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import {Link} from 'react-router-dom';


// function getData(){
//     fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/cart/get/2`, {
//       // fetch('http://localhost:3001/cart/get/2',{
//   headers: {
//     "Content-Type": "application/json"
//   },
//   method: "GET"
// })
//   .then(resp => resp.json())
//   .then(resp => {
//      for(let i=0; i<resp.length;i++){
//          data.push(resp[i]);
       
//      }
//     // console.log(data[0].quantity);
//     return data;
//   });//end fetch

// }
// getData();

// function handleClick(){


// }


export class ZaraCard extends Component {


  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='product-card'>
              <div className='product-card__info'>
                <h2 className='product-card__title'>ZARA</h2>
                <div className='product-card__rate'>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarOutlineIcon/>
                </div>
                
                {/* <img src ='../img/uni.png' alt='uni_logo' height = '43' width='43'></img>
             */}
             <div className='company-zara'></div>
                <p>Zara SA (Spanish: [ˈθaɾa]) is a Spanish fast fashion[3] (clothing and accessories) retailer based in Arteixo (A Coruña) in Galicia.
                   The company was founded in 1975 by Amancio Ortega and Rosalía Mera. It is the main brand of the Inditex group,[4] the world's largest apparel retailer. The fashion group also owns brands such as Massimo Dutti, Pull&Bear, Bershka, Stradivarius, Oysho, Zara Home, and Uterqüe. Zara as of 2017 manages up to 20 clothing collections a year. </p>
                
              </div>
            </div>
          </CardBody>
          <button className='btn btn-primary' >Subscribe</button>
        </Card>
      </Col>
    )
  }
}