import React,{useState} from 'react';
import Enquiry from '../Enquiry/Enquiry';
import './enquirybox.styles.css';

function EnquiryBox() {

  const [visiblequery, setVisiblequery] = useState(false)

  const setQuery = () => {
    console.log(visiblequery)
    setVisiblequery(!visiblequery)
  }

  return (
    <div>
      {
        visiblequery && <Enquiry setQuery={setQuery}/>
      }
      {
        !visiblequery && <button className='enquiry-box' onClick={() => setQuery()}>Enquiry</button>
      } 
    </div>
  );
}

export default EnquiryBox;