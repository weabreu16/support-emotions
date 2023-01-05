import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../StyleSheet1.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="container mt-5 text-justify">
        <div className="row">
            <div className="col-lg-8">
                <header className="mb-4">
                    <h1 className="fw-bolder mb-1">Getting Started</h1>
                    <div className="text-muted fst-italic mb-2">Posted on December 17, 2022 by Emotions</div>
                </header>
                <div className="img-emotions"></div>
                <section className="mb-5">
                    <p className="fs-5 mb-4">Emotions is presented as a mobile platform that can run on both IOS and Android Operating Systems.</p>
                    <p className="fs-5 mb-4">This application consists of helping our users when they are not feeling well.</p>
                    <p className="fs-5 mb-4">The way in which this application achieved this through meetings with certified psychologists who were available to have meetings with our users in order to help them enter a state of calm and security that their information and problems will not leave that space.</p>
                    <h2 className="fw-bolder mb-4 mt-5">Our Purpose</h2>
                    <p className="fs-5 mb-4">Have a space of trust where you can talk about topics that you do not feel free to talk to your arrivals, with a professional in the psychological area.</p>
                    <h2 className="fw-bolder mb-4 mt-5">Our Goals</h2>
                    <p className="fs-5 mb-4">Offering psychological therapy online is a treatment that is very important as it will help you:</p>
                    <ul>
                        <li>Provide tools to the patient to deal with conflicts.</li>
                        <li>Get help from professionals.</li>
                        <li>Have a space of trust where you can talk about topics that you do not feel free to talk to your arrivals, with a professional in the psychological area.</li>  
                    </ul>

                    <h2 className="fw-bolder mb-4 mt-5">Run-Through</h2>
                    <p className="fs-5 mb-4">Lost? Don't worry, see how easy it is to use the application through the following video, which show how to perform each of the application's features.</p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/q-z-U19ck9U" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    >    
                    </iframe>
                </section>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <div className="card-header">Categories</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="/profiles">Profiles</Link></li>
                                    <li><Link to="/meeting">Meetings</Link></li>
                                    <li><Link to="/chats">Chats</Link></li>
                                    <li><Link to="/article">Articles</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="/calendar">Calendar</Link></li>
                                    <li><Link to="/article">Articles</Link></li>
                                    <li><Link to="/how-to">How to install</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-body">“The purpose of life is finding the largest burden that you can bear and bearing it.”</div>
                    <div className="card-header">Jordan B. Peterson</div>
                </div>
            </div>
        </div>
    </div>
  )
}
