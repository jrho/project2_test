import * as React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck, Col,  Row } from 'reactstrap';
import store from '../../app/store';
import {connect} from 'react-redux';
import {App} from '../../app/App';
import {ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';
import {setCurrentProduct} from '../../redux/actions/productActions';

// interface Item
// {
//     name: string,
    
// }
// interface ItemsData
// {

// }
export class ItemsPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.listingClicked = this.listingClicked.bind(this);
    }

    listingClicked(product)
    {
        store.dispatch(setCurrentProduct(product));
        this.props.history.push("/pages/clothes/product");
    }

    render()
    {
        //made dummy data below for testing. delete once mapStateToProps is working
        let dummyData = [];
        const item = {
            title: "A Really Cool Hat",
            subtitle: "The Mad Hatters",
            image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",
            description: "A really well made hat. Its good. Buy it. Really, you should"
        }
        for(let i = 0; i < 7; i++)
        {
            dummyData.push(item);
        }

        // this should be used when mapStateToProps is working. gets the current list of items by category from the redux store.
        // const data = this.props.productList;
        const data = dummyData;

        //everything else below this for the render method is complete!
        let rows = [];
        for(let i = 0; i < data.length; i++)
        {
            let listings = [];
            for(let r = 0; r < 3; r++)
            {
                if(i < data.length)
                {
                    listings.push(<ItemListing item={data[i++]} onClicked={this.listingClicked}/>)
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
    console.log("state from mapstatetoprops");
    console.log(state);
    alert("map state to props was called");
    return {productList: state};
}
  
export default connect(mapStateToProps, null) (ItemsPage);