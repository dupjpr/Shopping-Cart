
import './style/header.css';



const Header = ({ handleClickBag, cart, total }) => {
    return (
        <header >
            <div className="header-logo">
                <span><i className="fas fa-ship"></i></span>
                <h1>Sea Food</h1>
            </div>
            <div className="header-bag">
               <i className="fas fa-shopping-bag" onClick={(e) => handleClickBag(e)}></i>
                <span className='total'>${total}</span>
                <p className='number-items'>{cart.length}</p>
            </div>
        </header>
    );
}

export default Header;