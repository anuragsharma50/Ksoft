import React,{useState} from 'react';
import Enquiry from '../Enquiry/Enquiry';
import './enquirybox.styles.css';

function EnquiryBox() {

  const [visiblequery] = useState(false)

  const setQuery = () => {
    // setVisiblequery(!visiblequery)
    window.location.assign('https://forms.gle/YSVy3ENdksbPxT7A8');
}

  // useEffect(() => {
  //   setTimeout(() => setQuery(),5000)

  //   return () => {
  //     clearTimeout()
  //   }

  // }, [])

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