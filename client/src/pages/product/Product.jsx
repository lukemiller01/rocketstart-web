import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../containers/footer/Footer';
import { useOutletContext } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ProductFeature from '../../components/productFeature/ProductFeature';
import './product.css'


const Product = () => {

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL}/>
      <div className='product'>
        <div className='product__header'>
          <h1>Product</h1>
          <p className='product__header-text'>Explore Rocketstart's features to help you make your next big career move, expand your professional network, and more.</p>
          <div className='product__header-button_container'>
            <HashLink smooth to="/product#contact-finder">
              <button className='button'>
                Contact Finder
              </button>
            </HashLink>
            <HashLink smooth to="/product#message-analysis">
              <button className='button'>
                Message Analysis
              </button>
            </HashLink>
          </div>
        </div>
        <div className='product__feature-container'>
          <ProductFeature
            feature={'Contact Finder'}
            description={"Paste any job application URL into Rocketstart and find the recruiter hiring for the role in one click. Rocketstart searches the web for over 20 parameters, including the role description's key words, active recruiters at the company, and similar posted positions."}
            image={'ContactFinder'}
            id={'contact-finder'}

            boxOne={"+95% of Jobs"}
            boxOneText={"Contact Finder provides results for over 95% of jobs posted online."}
            boxTwo={"Transparent Data"}
            boxTwoText={"Rocketstart's data is used ethically. Every contact we distribute has a public source."}
            boxThree={"+70% Accuracy"}
            boxThreeText={"Contact Finder is accurate and its algorithm is continously improving."}

            boxIconOne={'work'}
            boxIconTwo={'database'}
            boxIconThree={'add_task'} />

          <ProductFeature
            feature={'Message Analysis'}
            description={"Write a LinkedIn connection invite in Rocketstart and use text insights to craft the perfect message. Rocketstart analyzes your text for four attributes proven to increase reply rates when sending a cold message. When you're done, copy the text and send your message on LinkedIn."}
            image={'MessageAnalysis'}
            id={'message-analysis'}

            boxOne={"25% More Responses"}
            boxOneText={"Rocketstart messages receive higher response rates than messages written unaided."}
            boxTwo={"Optimized For LinkedIn"}
            boxTwoText={"Rocketstart makes LinkedIn's 300 character limit feel enormous by suggesting efficient phrases."}
            boxThree={"Research-Backed"}
            boxThreeText={"Message Analysis consolidates techniques used by leading sales professionals and career coaches into one tool."}

            boxIconOne={'monitoring'}
            boxIconTwo={'analytics'}
            boxIconThree={'science'}/>
        </div>
      </div>
      <div className="grey__bg">
        <Footer/>
      </div>
    </div>
  )
}

export default Product