import React from "react";
import {Link} from "react-router-dom";
import styled, {keyframes} from "styled-components";
import flipInX from "react-animations/lib/flip-in-x";

const Roll = styled.div`
  animation: 3s ${keyframes`${flipInX}`};
`;

export function Navbar(props) {
    const{isAuth, username, sendLogOut} = props;
    return (
        <div className="havbar">
            <ul className="navbar-title">
                <li><Link className ="linkNav" to='/home'>Home</Link></li>
                <li><Link className ="linkNav" to='/donation'>Crowdfunding</Link></li>
                <li>Volonteering</li>

            </ul>
            {!isAuth
                ? <div className="enter-login">

                {/*<div className={'donate'}><Link className ="linkNav" to='/donation'>DONATE</Link></div>*/}
                <div className="login"><Link className ="linkNavLogin" to='/login'>
                    <p> Log In</p>
                </Link>
                </div>

                <div className="create-login"><Link className ="linkNavSingIn" to='/singIn'>CREATE ACCOUNT</Link></div>
            </div>
                : <div className="userName-area">

                    {/*<div className={'donate'}><Link className ="linkNav" to='/donation'>DONATE</Link></div>*/}
                    <div className="userName"><Link className ="linkNav" to='/login'>
                        <p className= "login_logout_text"> {username}</p>
                    </Link>
                    </div>

                    <button className="logOut" onClick={sendLogOut}><Link className ="linkNav" to='/login'>
                        <p className= "login_logout_text">V</p></Link></button>
                </div>
            }

        </div>
    );
}
