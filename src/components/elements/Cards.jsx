import React from 'react';
import PropTypes from 'prop-types';
import { cardDataProps } from 'lib/Proptypes';
import Card from 'components/elements/Card';

export default function Cards({ cardData }) {
  return (
    <div className="grid mt-4 items-center justify-items-center md:grid-cols-2 md:w-[700px] lg:max-w-[900px] lg:w-[900px]">
      {cardData.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}

Cards.defaultProps = {
  cardData: [
    {
      id: 1,
      vid: 'amazingwords.mov',
      header: 'Amazing Words - The Bible Made Simple',
      desc: 'Fully functional ecommerce site featuring bible scripts, workbooks and more.',
      tech: 'Shopify, Klayvio, Recharge, loox, fireflare',
      linkLabel: 'Amazing Words Store',
      linkPath: 'https://www.amazingwords.com/',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
    {
      id: 2,
      vid: 'Notes.mp4',
      header: 'Reminder - Note taking App',
      desc: `This web app built in ES6 JS allows the user to create, update and delete notes.
      Notes are saved to local storage so that refreshing the browser does not erase present notes.`,
      linkLabel: 'Reminder App',
      tech: 'JS ES6, HTML/CSS',
      linkPath: 'https://remarkable-sawine-af096d.netlify.app',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
    {
      id: 3,
      vid: 'Restau.mp4',
      header: 'Foodie - Restaurant Advisor',
      desc: `On map change, a set of restaurants is fetched from an API. Restaurant information 
      is displayed for the user. The map can be changed by dragging, or searching in the search bar.`,
      tech: 'React, HTML, Bootstrap, Axios, GCP, Netlify Funcs',
      linkLabel: 'Foodie App',
      linkPath: 'https://stellar-gumption-d40773.netlify.app/',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
    {
      id: 4,
      vid: 'Campr.mov',
      header: 'CAMPR - Campground Review Site',
      desc: `Review campgrounds around the globe. You must be registered for full access. Mapbox enables rendering of 
      campground location data and Cloudinary provides a server to store uploaded images.`,
      tech: 'JS ES6 (Node, Express, EJS, Axios), Moongose/MongoDB, HTML/CSS',
      linkLabel: 'CAMPR App',
      linkPath: 'https://hidden-temple-04624.herokuapp.com/',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
  ],
};

Cards.propTypes = {
  cardData: PropTypes.arrayOf(cardDataProps),
};
