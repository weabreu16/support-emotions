import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../StyleSheet1.css';

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
                    <li>Provide tools to the patient to deal with conflicts.</li>
                    <li>Get help from professionals.</li>
                    <li>Have a space of trust where you can talk about topics that you do not feel free to talk to your arrivals, with a professional in the psychological area.</li>
                </section>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <div className="card-header">Categories</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="~/Home/Profiles">Profile</a></li>
                                    <li><a href="~/Home/Meeting">Meetings</a></li>
                                    <li><a href="~/Home/Chats">Chats</a></li>
                                    <li><a href="~/Home/Article">Articles</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="~/Home/Calendar">Calendar</a></li>
                                    <li><a href="~/Home/Article">Articles</a></li>
                                    <li><a href="~/Home/HowTo">How to install</a></li>
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
