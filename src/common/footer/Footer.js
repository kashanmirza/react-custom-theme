import React from 'react'

const Footer = (props) => {

    return(
        <div className="footer clearfix">
          <p>Current Date &amp; Time:
            <span>{props.footer.date} / {props.footer.month} / {props.footer.year}</span>
            <span> {props.footer.hours} / {props.footer.min} / {props.footer.sec}</span>
          </p>
        </div>
    )

}

export default Footer;