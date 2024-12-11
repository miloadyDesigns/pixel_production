import React from 'react';
import Link from 'next/link';
import Div from '../Div';

export default function Portfolio({ href, src, title, subtitle, variant }) {
  return (
    <Link
      href={href}
      className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
    >
      <>
        <Div className="cs-portfolio_hover" />
        <Div
          className="cs-portfolio_bg cs-bg"
          style={{
            backgroundImage: `url("${src}")`,
            backgroundSize: 'cover',        // Ensures the image covers the element
            backgroundPosition: 'center',   // Centers the image
            backgroundRepeat: 'no-repeat',   // Prevents the image from repeating
          }}

        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h3 className="cs-portfolio_title">{title}</h3>
          <Div className="cs-portfolio_subtitle">{subtitle}</Div>
        </Div>
      </>
    </Link>
  );
}
