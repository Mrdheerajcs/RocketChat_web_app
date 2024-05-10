import React from 'react'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSocket } from "../../context/SocketProvider";

const SocialNav = () => {

    const { profile } = useSocket();

    return (
        <>
            <ul className="social-nav p-0 mb-0 text-center">
                <li>
                    {!(profile || profile?.facebook) ?
                        <Link to="#" className='text-[var(--themeColor)]'><Facebook /></Link>
                        :
                        <Link to={profile?.facebook} className='text-[var(--themeColor)]'><Facebook /></Link>
                    }
                </li>
                <li>
                    {!(profile || profile?.instagram) ?
                        <Link to="#" className='text-[var(--themeColor)]'><Instagram /></Link>
                        :
                        <Link to={profile?.Instagram} className='text-[var(--themeColor)]'><Instagram /></Link>
                    }
                </li>
                <li>
                    {!(profile || profile?.linkedin) ?
                        <Link to="#" className='text-[var(--themeColor)]'><LinkedIn className='text-[var(--themeColor)]' /></Link>
                        :
                        <Link to={profile?.linkedin} className='text-[var(--themeColor)]'><LinkedIn className='text-[var(--themeColor)]' /></Link>
                    }
                </li>
                <li>
                    {!(profile || profile?.twitter) ?
                        <Link to="#" className='text-[var(--themeColor)]'><Twitter /></Link>
                        :
                        <Link to={profile?.twitter} className='text-[var(--themeColor)]'><Twitter /></Link>
                    }
                </li>
                <li>
                    {!(profile || profile?.youtube)?
                        <Link to="#" className='text-[var(--themeColor)]'><YouTube /></Link>
                        :
                        <Link to={profile?.youtube} className='text-[var(--themeColor)]'><YouTube /></Link>
                    }
                </li>
            </ul>
        </>
    )
}

export default SocialNav
