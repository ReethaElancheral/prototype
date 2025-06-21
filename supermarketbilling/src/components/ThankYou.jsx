import thanksimg from '../assets/images/thankyou.png'


export default function ThankYouPage() {
  return (
    <>
    
    <div className="thankscontainer" style={{
      textAlign: 'center',
      padding: '60px',
      fontFamily: 'sans-serif'
    }}>
      <img
        src={thanksimg}
        alt="Thank You"
        style={{ maxWidth: '300px', marginBottom: '30px' }}
      />
      <h2 style={{ color: 'black' }}>Thank You For Shopping!!!</h2>
    </div>
    </>
  );
}
