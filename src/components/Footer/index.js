import React from 'react'
import {
     FooterContainer,
     FooterWrap,
     SocialMedia,
     SocialMediaWrap,
     SocialLogo,
     SocialIcons,
     SocialIconLink
} from './FooterElements';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" >Pizza</SocialLogo>
                        <SocialIcons>
                              <SocialIconLink href="/" target="_blank"
                                aria-label="Facebook" rel="noopener noreferrer">
                                    <FaFacebook />
                              </SocialIconLink>
                              <SocialIconLink href="/" target="_blank"
                                aria-label="Insatgran" rel="noopener noreferrer">
                                    <FaInstagram />
                              </SocialIconLink>
                              <SocialIconLink href="/" target="_blank"
                                aria-label="Youtube" rel="noopener noreferrer">
                                    <FaYoutube />
                          </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
    )
}

export default Footer
