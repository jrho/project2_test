import * as React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck, Col,  Row } from 'reactstrap';
import store from '../../app/store';
import {connect} from 'react-redux';
import {App} from '../../app/App';
import {ItemCard, ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';
import {setCurrentProduct} from '../../redux/actions/productActions';

export class ItemsPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.listingClicked = this.listingClicked.bind(this);
    }

    listingClicked(item)
    {
        store.dispatch(setCurrentProduct(item));
        this.props.history.push("/pages/clothes/product");
    }

    render()
    {
        const data = this.props.productList;

        let rows = [];
        for(let i = 0; i < data.length; i++)
        {
            let listings = [];
            for(let r = 0; r < 3; r++)
            {
                if(i < data.length)
                {
                    let item = {
                        name: data[i].name,
                        company: data[i].company,
                        image: data[i].image,
                        description: data[i].description,
                        price: data[i].price
                    }

                    let children = [];
                    children.push(<ItemTitle>{item.name}</ItemTitle>);
                    children.push(<ItemSubtitle>{item.company}</ItemSubtitle>);
                    children.push(<ItemImage src={item.image}/>);
                    children.push(<ItemDescription>{item.description}</ItemDescription>);

                    listings.push(<ItemListing clicked={this.listingClicked} currentProduct={item}> {children} </ItemListing>)
                    i++;
                }
            }
            i--;
            rows.push(<ItemRow>{listings}</ItemRow>);
        }
        
        return(
            <div>
                {rows}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state passed into mapstatetoprops");
    console.log(state);
    return {productList: state.product.productList};
}
  
export default connect(mapStateToProps, null) (ItemsPage);