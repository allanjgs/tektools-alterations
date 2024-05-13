import React, { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import Button from '../../admin/components/ui/button';
import logo from "./../../img/200x60.png";
import Profile from "./Profile";

const Header = () => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  useEffect(() => {
    if (!userData) {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        fetch('/users/auth', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Code': code
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro na resposta da API');
            }
            return response.json();
          })
          .then(data => {
            localStorage.setItem('userData', JSON.stringify(data));
            setUserData(data);
          })
          .catch(error => console.error('Erro ao autenticar com a API:', error));
      } else {
        console.log("Código não encontrado na URL.");
      }
    }
  }, [userData]);

  const handleClick = () => {
    console.log('clicado')
    //window.location.replace('https://discord.com/oauth2/authorize?client_id=1018337890884931654&response_type=code&redirect_uri=https%3A%2F%2Ftektools-alterations.vercel.app&scope=identify+guilds')
    window.location.replace('https://discord.com/oauth2/authorize?client_id=1018337890884931654&response_type=code&scope=identify+guilds')
  };
  return (

    <header className={` w-full transition-all z-30 py-1 ${isActive ? ' fixed  bg-dark ' : ''}`}>
      <div className=" mx-10 flex flex-row justify-between items-center">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        {userData ? (
          <Profile userData={userData} />
        ) : (
          <div>
            {/* <div className="text-white">
            <ul className="flex flex-row gap-x-5">
              <li><a href="/">Home</a></li>
              <li><a href="#featureTop">Features</a></li>
              <li><a href="#pricingTop">Pricing</a></li>
              <li><a href="#faqTop">FAQ</a></li>
              <li><a href="https://verification.TekTools.app/#">Verification</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
            </ul>
          </div> */}
            <div className="flex flex-row items-center ">
              <Button
                onClick={handleClick}
                type='button'
                className='capitalize text-white w-auto px-5 gap-x-3'>
                <FaDiscord className="text-xl" />
                Login with Discord
              </Button>
            </div>
          </div>
        )}

      </div>

    </header>
  )
}


export default Header;
