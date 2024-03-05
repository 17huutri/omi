// import React from 'react';
// import { Link } from 'react-router-dom';
// import pic11 from '../picture/pic11.png';
// import pic12 from '../picture/pic12.png';
// import pic13 from '../picture/pic13.png';
// import '../css/coupon.css';
// import Detail1Component from './Detail1Component';
// const Coupon = () => {
//     return (
//         <div className='coupon'>
//             <h1>Promos for you</h1>
//             <div className="pic">
//                 <Link to="/detal1"><img src={pic11} alt="Banner 1" /></Link>
//             </div>
//             <div className="pic">
//                 <Link to="/detail2"><img src={pic12} alt="Banner 2" /></Link>
//             </div>
//             <div className="pic">
//                 <Link to="/detail3"><img src={pic13} alt="Banner 3" /></Link>
//             </div>
//         </div>
//     );
// }

// export default Coupon;



import React, { useState } from 'react';
import pic11 from '../picture/pic11.png';
import pic12 from '../picture/pic12.png';
import pic13 from '../picture/pic13.png';
import '../css/coupon.css';
import DetailsComponent from '../components/detail'

const Coupon = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Define details for each image
    const imageDetails = {
        [pic11]: {
            title: "Get 25% off buying Banana",
            expirationDate: "24 July 2020",
            highlights: "Enjoy free delivery every buy long bread, only at New York. Thank You for choosing Grocery 😊",
            termsAndConditions: [
                "Easypromos only uses details of its users to facilitate the successful operation of the promotions.",
                "Easypromos will never utilize details of registered users for any other reason.",
                "Easypromos cannot be held responsible for the prizes, products, or services offered to users through the promotions."
            ]
        },
        [pic12]: {
            title: "Special Offer: Buy One Get One Free",
            expirationDate: "31 August 2020",
            highlights: "Don't miss out on this limited-time offer! Buy one product and get another one for free.",
            termsAndConditions: [
                "Offer valid while supplies last.",
                "Cannot be combined with other promotions.",
                "Free item must be of equal or lesser value."
            ]
        },
        [pic13]: {
            title: "50% off on all Vegetables",
            expirationDate: "15 September 2020",
            highlights: "Stock up on fresh vegetables with this exclusive offer! Get 50% off on all vegetables.",
            termsAndConditions: [
                "Discount applies to regular-priced items only.",
                "Offer valid for in-store purchases only.",
                "Excludes organic produce."
            ]
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className='coupon'>
            <h1>Promos for you</h1>
            <div className="pic" onClick={() => handleImageClick(pic11)}>
                <img src={pic11} alt="Banner 1" />
            </div>
            <div className="pic" onClick={() => handleImageClick(pic12)}>
                <img src={pic12} alt="Banner 2" />
            </div>
            <div className="pic" onClick={() => handleImageClick(pic13)}>
                <img src={pic13} alt="Banner 3" />
            </div>
            {selectedImage && (
                <DetailsComponent
                    title={imageDetails[selectedImage].title}
                    expirationDate={imageDetails[selectedImage].expirationDate}
                    highlights={imageDetails[selectedImage].highlights}
                    termsAndConditions={imageDetails[selectedImage].termsAndConditions}
                />
            )}
        </div>
    );
}

export default Coupon;
