import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import House from '../assets/images/House.jpg';

const About = () => {
    const [topSeller, setTopSeller] = useState([]);
    const [realtors, setRealtors] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getTopSeller = async () => {
            try {
                const res = await axios.get(`http://104.236.212.4/api/smart_stay/topseller`, config);
                setTopSeller(res.data);
            }
            catch (err) {

            }
        };

        getTopSeller();
    }, []);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getRealtors = async () => {
            try {
                const res = await axios.get(`http://104.236.212.4/api/smart_stay/`, config);
                setRealtors(res.data);
            }
            catch (err) {

            }
        };

        getRealtors();
    }, []);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__contact'>{realtor.email}</p>
                    <p className='about__about'>{realtor.description}</p>
                </Fragment>
            );
        });

        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+1] ? allRealtors[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+2] ? allRealtors[i+2] : null}
                    </div>
                </div>
            );
        }

        return results;
    };  

    const getTopSeller = () => {
        let result = [];

        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Top Seller:</h3>
                    <p className='about__realtor'>{seller.name}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__contact'>{seller.email}</p>
                    <p className='about__about'>{seller.description}</p>
                </Fragment>
            );
        });

        return result;
    };

    return (
        <main className='about'>
            <Helmet>
                <title>Smart Coastal Living- About</title>
                <meta
                    name='description'
                    content='About us'
                />
            </Helmet>
            <header className='about__header'>
                <h1 className='about__heading'>About Smart Coastal Living</h1>
            </header>
            <section className='about__info'>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <h2 className='about__subheading'>We find the perfect home for you</h2>
                        <p className='about__paragraph'>
                       Smart Coastal Living is a place where miles of deserted beaches divide the warm Indian Ocean and the lush coastal vegetation. A place where you observe schools of dolphins frolicking in the waves and whale sharks cruising lazily by. A place to enjoy bird watching and encounter over 200 species of birds, and indigenous wild life with shy blue duiker and families of bushbuck wandering through.
                        </p>    
                        <div className='about__display'>
                            <img className='about__display__image' src={House} alt='' />
                        </div>
                        <p className='about__paragraph'>
                        A place where you observe schools of dolphins frolicking in the waves and whale sharks cruising lazily by. A place to enjoy bird watching and encounter over 200 species of birds, and indigenous wild life with shy blue duiker and families of bushbuck wandering through.
                        </p>
                    </div>
                    <div className='col-1-of-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about__team'>
                <div className='row'>
                    <h2 className='about__subheading'>Meet out awesome team!</h2>
                </div>
                {getAllRealtors()}
            </section>
        </main>
    );
};

export default About;