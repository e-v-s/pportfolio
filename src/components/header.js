import * as React from "react"
import './header.css'

import Logo from '../images/logo.png'
import Close from '../images/close.png'

function Header (props) {
	return(
		<div className='header'>
			{
				props.close === false ?
				<div className='headerClosed'>
					<img alt='logo' className='logoMobile' src={Logo} onClick={() => props.handleClickPage('home')} />
					<img alt='close' className='close' src={Close} onClick={() => props.handleClickToggle()} />
				</div> :
				<div className='headerOpened'>
					<div className='headerLogoAndButton'>
						<img alt='logo' className='logoMobile' src={Logo} onClick={() => props.handleClickPage('home')} />
						<img alt='close' className='close' src={Close} onClick={() => props.handleClickToggle()} />
					</div>
					<ul className='mobileMenuLanguage'>
						<li className='mobileMenuItemLanguage' id={props.idpt} onClick={() => props.handleClickLanguage('pt-br') & props.handleClickToggle()}>
							PT-BR /
						</li>
						<li className='mobileMenuItemLanguage' onClick={() => props.handleClickLanguage('en') & props.handleClickToggle()}>
							EN /
						</li>
						<li className='mobileMenuItemLanguage' onClick={() => props.handleClickLanguage('es') & props.handleClickToggle()}>
							ES
						</li>
					</ul>	
					<ul className='mobileMenu'>
						<li className='mobileMenuItem' onClick={() => props.handleClickPage('home') & props.handleClickToggle()}>Home</li>
						<li className='mobileMenuItem' onClick={() => props.handleClickPage('about') & props.handleClickToggle()}>About</li>
						<li className='mobileMenuItem' onClick={() => props.handleClickPage('work') & props.handleClickToggle()}>Work</li>
						<li className='mobileMenuItem' onClick={() => props.handleClickPage('contact') & props.handleClickToggle()}>Contact</li>
					</ul>
				</div>
			}
			<div className='headerWide'>
				<ul className='headerMenu'>
							<li className='headerMenuItem' style={{paddingLeft: '100px'}} onClick={() => props.handleClickPage('about')}>
								About
							</li>
							<li className='headerMenuItem' style={{paddingLeft: '20px'}} onClick={() => props.handleClickPage('work')}>
								Work
							</li>
							<li className='headerMenuItem' style={{paddingLeft: '20px'}} onClick={() => props.handleClickPage('contact')}>
								Contact
							</li>
					</ul>				
					<img alt='logo' className='logo' src={Logo} onClick={() => props.handleClickPage('home')} />
					<ul className='headerMenu'>
						<li className='headerMenuItem' id={props.idpt} onClick={() => props.handleClickLanguage('pt-br')}>
							PT-BR /
						</li>
						<li className='headerMenuItem' style={{paddingLeft: '20px'}} onClick={() => props.handleClickLanguage('en')}>
							EN /
						</li>
						<li className='headerMenuItem' style={{paddingLeft: '20px', paddingRight: '100px'}} onClick={() => props.handleClickLanguage('es')}>
							ES
						</li>
					</ul>	
			</div>
		</div>
	)
}

export default Header
