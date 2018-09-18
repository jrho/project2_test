// import React, { PureComponent } from 'react';
import './home.css';
// import { Col, Container, Row } from 'reactstrap';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import { Button } from 'react-bootstrap';
// import { Carousel } from 'react-bootstrap';




// export class HomePage extends PureComponent {
//     render() {
//         const { t } = this.props;
//         return (
//             <div class="wholeContainer" >
//                 <div class="jumbotron-wrap jumbotron-wrap-image mb-0">
//                     <div class="container">
//                         <div id="mainCarousel" class="carousel slide" data-ride="carousel">
//                             <div class="carousel-inner">
//                                 <div class="carousel-item active">
//                                     <div class="jumbotron">
//                                         <h1 class="text-center">Shopping with us today! We have great deals</h1>
//                                         {/* <p class="lead text-center">We have variety brands with unique styles</p> */}
//                                         <p class="lead text-center">
//                                             <a class="btn btn-primary btn-lg" href="#" role="button"><i class="fa fa-info"></i> &nbsp; Learn more</a>
//                                             <a class="btn btn-secondary btn-lg" href="" role="button"><i class="fa fa-gbp"></i> &nbsp; Register</a>
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div class="carousel-item">
//                                     <div class="jumbotron">
//                                         <h1 class="text-center">Join us now! We now have great deals</h1>
//                                         <p class="lead text-center">Join us to get best fashion</p>
//                                         <p class="lead text-center">
//                                             <a class="btn btn-primary btn-lg" href="#" role="button"><i class="fa fa-info"></i> &nbsp; Learn more</a>
//                                             <a class="btn btn-secondary btn-lg" href="#" role="button"><i class="fa fa-gbp"></i> &nbsp; Register</a>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <a class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
//                                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                                 <span class="sr-only">Previous</span>
//                             </a>
//                             <a class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
//                                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                                 <span class="sr-only">Next</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>



//                 <div>
//                     <section id="about" class="colored-bg">
//                         <div class="container">
//                             <div class="row">

//                                 <div class="col-md-8">
//                                     <article>
//                                         <h2 class="article-title">Introduction JM-Terrely</h2>

//                                         {/* <p class="article-meta">Posted on <time datetime="2018-05-14">14 May</time> by <a href="#" rel="author">James Rho</a></p> */}

//                                         <p>Welcome to JM-Terrely, we provide unique brands with fancy fashion style. Come check it out </p>

//                                         <p>Brands</p>

//                                         <ul>
//                                             <li>UNI-CLO</li>
//                                             <li>OLD-NAVY</li>
//                                             <li>H&M</li>
//                                             <li>FOREVER21</li>
//                                             <li>ZARA</li>
//                                             <li>BANANA REPUBLIC</li>
//                                         </ul>


//                                     </article>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>


//         )
//     }
// }



import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    src: '../home/img/shopping2.jpg',
    altText: 'Join us now',
    caption: 'We have variety of brands and unique styles'
  },
  {
    id: 2,
    src: '../home/img/shopping1.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
         {/* <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 350px;
                background-image: url(../home/img/shopping2.jpg);
                background-position: top left;
                background-repeat: no-repeat;
                opacity: 0.9;
                background-size: cover;
              }`
          }
        </style>  */}
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div> //whole return wrapper
    );
  }
}

