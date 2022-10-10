import React from "react";
import { Helmet } from "react-helmet"
import './ScheduleModal.css'

const ScheduleModal = ({handleClose, show, children}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'; 
  console.log(show)
  return(
      <div className={showHideClassName}>
        <section className="modal-main">
        {children}
        <input type="button" value='Close' onClick={handleClose}/>
        </section>
        <Helmet>
          <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
        </Helmet>   
      </div>
  )    
}

export default ScheduleModal