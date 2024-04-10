import React from 'react'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube, Search } from '@material-ui/icons';

const SocialNav = () => {
    return (
        <>
            <ul className="social-nav p-0 mb-0 text-center">
                <li>
                    <a href="#" className='text-[var(--themeColor)]'><Facebook /></a>
                </li>
                <li>
                    <a href="#" className='text-[var(--themeColor)]'><Instagram /></a>
                </li>
                <li>
                    <a href="#" className='text-[var(--themeColor)]'><LinkedIn className='text-[var(--themeColor)]' /></a>
                </li>
                <li>
                    <a href="#" className='text-[var(--themeColor)]'><Twitter /></a>
                </li>
                <li>
                    <a href="#" className='text-[var(--themeColor)]'><YouTube /></a>
                </li>
            </ul>
        </>
    )
}

export default SocialNav
