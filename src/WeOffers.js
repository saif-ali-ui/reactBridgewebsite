import { Button } from '@material-ui/core';
import ElderlyIcon from '@mui/icons-material/Elderly';
import SellIcon from '@mui/icons-material/Sell';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import React from 'react';


const WeOffers = () => {
    return (
        <div className='container'>
            <h1 className='heading'> Our Packages</h1>

            <Button
                variant="contained"
                color="primary"
                style={{ paddingLeft: '10px', backgroundColor: '#00bcd4', marginLeft: '3px', marginRight: '3px' }}
                startIcon={<SellIcon />}
            >
                On Demand Service
            </Button>

            <Button
                variant="contained"
                color="primary"
                style={{ paddingLeft: '10px', backgroundColor: '#00bcd4', marginLeft: '3px', marginRight: '3px' }}
                startIcon={<SubscriptionsIcon />}
            >
                Monthly Subscription
            </Button>



            <div class="container d-flex justify-content-center">
                <figure class="cardx card-product-grid card-lg">
                    <p style={{ padding: '20px' }}>
                        BLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <figcaption class="info-wrap">
                        <div class="row">
                            <div class="col-md-9 col-xs-9 text-left"> <a href="#" class="title" data-abc="true">Monthly Package</a> </div>
                            <div class="col-md-3 col-xs-3 text-end">
                                <div class="rating text-right"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <span class="rated">Rated 4.0/5</span> </div>
                            </div>
                        </div>
                    </figcaption>
                    <div class="bottom-wrap-payment">
                        <figcaption class="info-wrap">
                            <div class="row">
                                <div class="col-md-9 col-xs-9 text-left"> <a href="#" class="title" data-abc="true">Price in PKR</a></div>
                                <div class="col-md-3 col-xs-3">
                                    <div class="rating text-end"> 2000/- </div>
                                </div>
                            </div>
                        </figcaption>
                    </div>
                    <div class="bottom-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <a href="#" class="btn btn-primary float-right" data-abc="true"> Buy now </a>
                        <div class="price-wrap">
                            <a href="#" class="btn btn-warning float-left" data-abc="true"> Cancel </a>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default WeOffers;