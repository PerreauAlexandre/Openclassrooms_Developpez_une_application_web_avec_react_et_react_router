import { useState } from 'react'
import './Accordion.scss'

type AccordionProps = {
  title: string
  content: string[] | string
  accordionLarge: boolean
}

function Accordion({ title, content, accordionLarge }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`accordion ${accordionLarge ? 'large' : 'medium'}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <i
          className={`chevron ${isOpen ? 'open' : ''} fa-solid fa-chevron-up`}
        ></i>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          content.map((line, index) => <p key={index}>{line}</p>)
        )}
      </div>
    </div>
  )
}

export default Accordion
