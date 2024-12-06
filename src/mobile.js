import './mobile.css'


function mobile({mainImageUrl,title,specifications,price,assuranceImageUrl}){
    const handleWishPop=()=>{
        const element = document.querySelector(".wishpopUp");
        element.style.display='block';
    }
    const handleClosePop =()=>{
        const element = document.querySelector(".wishpopUp");
        element.style.display='none';
    }
    return(
        <>
            <div className="mobileContainer">
                <div className="imgContainer">
                    <img src={mainImageUrl} alt='iam profudct'/>
                </div>
                <div className="detailsContainer">
                    <h3 className='productTitle'>{title}</h3>
                    <ul className="specification">
                        {specifications.map((spec, index) => (
                            <li key={index}>{spec}</li>
                            ))}   
                    </ul>
                </div>
                <div className="priceContainer">
                    <h4 className="price">
                    ₹ {price}
                    </h4>
                    <img src={assuranceImageUrl} alt="assured" />
                    <div className="free">Free Delivery</div>
                    <div className="wishlist">
                        <button onClick={handleWishPop}> <span style={{fontSize:'25px'}}>♥</span> WishList</button>
                    </div>
                </div>
            </div>
            <div className="wishpopUp">
                <h3><span>Successfully</span> is added to Wishlist</h3>
                <div className="closePop"><button onClick={handleClosePop}>Close</button></div>
            </div>
        </>
    )
};

export default mobile;