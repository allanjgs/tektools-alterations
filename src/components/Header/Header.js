import { useEffect, useState } from 'react'
import avatar from '../../img/AvatarTektools.png';
import logo from '../../img/200x60.png';
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { ChartPieIcon, CursorArrowRaysIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import { IoIosArrowDown } from 'react-icons/io';
import Button from '../../admin/components/ui/button';
import { FaDiscord } from 'react-icons/fa';
import { getDiscordAuthUrl } from '../../alternateBranch';

let selectedServer = localStorage.getItem('selectedServer')
const products = [
  { name: 'My servers', description: '', href: selectedServer ? '/dashboard' : '/select-server', icon: ChartPieIcon },
  { name: 'Pro', description: '', href: '#', icon: MdOutlineWorkspacePremium },
  { name: 'Support server', description: '', href: '#', icon: MdSupportAgent },
  { name: 'Docs', description: '', href: 'https://docs.tektools.app/', icon: CursorArrowRaysIcon },
]

export default function Header() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [isActive, setIsActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  //Scroll effect
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  //Link Discord Auth

  const handleClick = () => {
    const authUrl = getDiscordAuthUrl();
    window.location.replace(authUrl);
    //window.location.replace('https://discord.com/oauth2/authorize?client_id=1018337890884931654&response_type=code&redirect_uri=https%3A%2F%2Ftektools-alterations.vercel.app&scope=identify+guilds')
    // window.location.replace('https://discord.com/oauth2/authorize?client_id=1018337890884931654&response_type=code&scope=identify+guilds')
  };
  //API Connection 
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
  const handleAccount = () => {
    console.log('Account Section')
    window.location.replace('/')
  }
  const handleLogout = () => {
    localStorage.clear(userData)
    window.location.replace('/')
  }

  return (
    <header className={`w-full transition duration-300 z-30 text-white py-5  ${isActive ? ' fixed border-none bg-dark ' : 'border-b border-gray/50'}`}>
      <nav className="mx-auto flex  items-center justify-between px-5 lg:px-28" aria-label="Global">
        {/* logo aqui */}
        <div className="flex lg:flex-1">
          <a href="/" className="flex gap-x-5">
            <span className="sr-only">TekTools</span>
            <img className="lg:h-12 h-8 w-auto" src={avatar} alt="Avatar" />
            <img className="lg:h-12 h-8 w-auto" src={logo} alt="Tektools" />
          </a>
        </div>
        {/* Menu Desktop and not logged */}
        {!userData && <div className="hidden text-lg lg:flex gap-x-8">
          <a href="/" className="hover:text-accentMain transition duration-300">
            Features
          </a>
          <a href="/" className="hover:text-accentMain transition duration-300">
            Pricing
          </a>
          <a href="/" className="hover:text-accentMain transition duration-300">
            FAQ
          </a>
        </div>
        }
        <div className="flex lg:flex-1 lg:justify-end ">
          <div className="relative">
            {userData ? (
              <button
                className="flex items-center gap-x-4 text-sm font-semibold border-none "
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img className="rounded-full h-8 lg:h-12" src={`https://cdn.discordapp.com/avatars/${userData.user.id}/${userData.user.avatar}`} alt="Avatar" />
                <h2 className="text-xl font-semibold">{userData.user.global_name}</h2>
                <IoIosArrowDown className="h-5 w-5 flex " aria-hidden="false" />
              </button>
            ) : (
              <Button
                onClick={handleClick}
                type='button'
                className='capitalize text-white bg-mainHover w-auto px-5 gap-x-3'>
                <FaDiscord className="text-xl" />
                Login with Discord
              </Button>
            )}
            {showDropdown && (
              <div className="absolute right-5 top-full z-30 mt-5 w-screen max-w-xs overflow-hidden rounded-3xl bg-dark shadow-lg ">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray hover:scale-105  transition duration-300"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:text-accentMain">
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <div className="flex-auto  ">
                        <a href={item.href} className="block font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 ">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray ">
                  <button className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray hover:text-accentMain transition duration-300" onClick={handleAccount}>
                    <BiUser className="h-5 w-5 flex-none " aria-hidden="true" />
                    Account
                  </button>
                  <button className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray hover:text-red-500 transition duration-300" onClick={handleLogout}>
                    <XMarkIcon className="h-5 w-5 flex-none " aria-hidden="true" />
                    Logout
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </nav>
    </header >
  )
}
