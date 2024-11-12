import React from 'react'
import parse from 'html-react-parser';
import Button from '../Button'
import Spacing from '../Spacing'
import Div from '../Div';

export default function SectionHeading({ title, subtitle, subtitle2, btnLink, btnText, variant, children }) {
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
      <h1 className="cs-section_subtitle">{parse(subtitle)}</h1>
      <h2 className="cs-section_title font-semibold">{parse(title)}</h2>
      <h3 className="cs-section_subtitle">{subtitle2}</h3>
      {children}
      {btnText && (
        <>
          <Spacing lg='45' md='20' />
          <Button btnLink={btnLink} btnText={btnText} />
        </>
      )}
    </Div>
  )
}
