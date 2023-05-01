import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <div >
                <h4>Login With</h4>
                <Button className='px-5 mb-2 py-2' variant="outline-primary"><FaGoogle />  Login with Google</Button>
                <Button className='px-5 py-2' variant="outline-secondary"><FaGithub></FaGithub>  Login with Git Hub</Button>
            </div>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Tiwtter</ListGroup.Item>
                </ListGroup>



            </div>
            <div className='mt-4'>
                <QZone></QZone>
            </div>
            <div className='mt-4   text-white text-center'>
                <div className=' p-5 ' style={{ backgroundImage: `url(${bg}`, height: '100%' }}>

                    <h2 className='mb-4' >Create an Amazing NewsPaper</h2>


                    <p className='mb-4'>
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <button className=" mt-5 btn btn-danger"> Learn More</button>

                </div>



            </div>

        </div>
    );
};

export default RightNav;