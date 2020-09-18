import React,{useState,useEffect} from 'react';
import Enquiry from '../Enquiry/Enquiry';
import './enquirybox.styles.css';

function EnquiryBox() {

  const [visiblequery,setVisiblequery] = useState(false)

  const setQuery = () => {
    setVisiblequery(!visiblequery)
}

  useEffect(() => {
    setTimeout(() => setQuery(),5000)

    return () => {
      clearTimeout()
    }

  }, [])

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