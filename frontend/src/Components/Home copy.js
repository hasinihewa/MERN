import React, { Component } from 'react';
import '../AppoinmentStyles/HeaderStyle.css';
import p1 from '../AppoinmentAssets/p1.jpg';
import p2 from '../AppoinmentAssets/p2.jpg'
import p3 from '../AppoinmentAssets/p3.jpg'
//import w from '../Assets/w.jpg'
//import w2 from '../Assets/w2.jpg'
//import w3 from '../Assets/w3.jpg'

export default class Home extends Component {

    render() {

        return (
            <div>

            <h2>Top Rated Photographers</h2>
            <br/>

            <div class="row">
                <div class="col">
                    <div class="card">
                    <img src={p1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Cinemoment Photography</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/photographer" class="btnH btn-primary">View Profile</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <img src={p2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Ceylon Elegance</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btnH btn-primary">View Profile</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <img src={p3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Neo Creations</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btnH btn-primary">View Profile</a>
                        </div>
                    </div>
                </div>

            </div>

            <br/>

            <div class="row">
                <div class="col">
                    <div class="card">
                    <img src={p1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Sandeepa Malith Photography</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btnH btn-primary">View Profile</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <img src={p2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Ceylon Lemerance</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btnH btn-primary">View Profile</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <img src={p3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Dhanushka Senadheera Photography</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btnH btn-primary">View Profile</a>
                        </div>
                    </div>
                </div>

            </div>

            <br/>
            <br/>

            <h2>Choose an Event Type</h2>

            <br/>

            <div class="container overflow-hidden">
                <div class="row gy-5">
                    <div class="col-6">
                        {/*<img src={w} class="card-img-top" alt="..."/>*/}
                        <div class="p-3 border bg-light"><button type="button" class="button">Weddings</button></div>
                    </div>
                    <div class="col-6">
                        {/*<img src={w2} class="card-img-top" alt="..."/>*/}
                        <div class="p-3 border bg-light"><button type="button" class="button">Birthdays</button></div>
                    </div>
                    <div class="col-6">
                        {/*<img src={w3} class="card-img-top" alt="..."/>*/}
                        <div class="p-3 border bg-light"><button type="button" class="button">Convocations</button></div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border bg-light"><button type="button" class="button">Other Events</button></div>
                    </div>
                </div>
            </div>
            
            </div>
        )
      }

}