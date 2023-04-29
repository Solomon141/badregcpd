import React from 'react';

function AboutUs() {
    const headingStyles = {
        fontSize: 25,
        color: '#f59028',
        paddingTop: 30,
      };
  return (
    <div className='container'>
      <p style={headingStyles}> Market strategy </p>
      <p> The major goal of Badreg PlC is to introduce products which are of reliable quality and efficacy at a reasonable price to the majority of the population. To attain this goal, the following market strategies are drawn up: </p>
      <p> Communicate with pharmaceutical manufacturers and suppliers known for their conformity to international standards of quality and register quality products that can be used to treat prevalent health problems. </p>
      <p> Carry out promotional work in an ethical and professional manner, yet aggressively, with intent to improve awareness of all health professionals all over the country. Promotion is assisted by professional samples, scientific literature and gimmicks.</p>
      <p> Work with strong wholesale distributors to raise the number of distribution channels and back up existing distributors by supporting them with promotion and after sales service.</p>

      <p> Badreg Pvt. Ltd. Co. is young and robust pharmaceutical company, which has acquired high reputation over the years and steadily growing its volume of business activities. Our harmonious and synergetic relationships with our suppliers, FMHACA and all relevant Ethiopian government authorities, agencies and our customers are source of our pride and success.</p>

      <p style={headingStyles}> Financial capability</p>
      <p> Having strong and stable financial capacity coupled with our solid relationship with our Bankers has always enabled us to ensure the availability of products continuously and assure that we can maintain stock of all our partner products well in advance sufficient at least for over 4 months.</p>
      <p style={headingStyles}> Work force </p>
      <p> Our company is manned with licensed and capable personnel, well experienced sales agents, efficient delivery system and competent management. The Company has created permanent employment opportunity for about 89 fellow citizens so far and this is expected to continue in the years ahead.</p>
      <p> In addition, our company also has proper warehouses and distribution centers. All these have enabled us to attain steady business growth and successfully achieve the goals we had set in cooperation with our partners over the years</p>
    </div>
  );
}

export default AboutUs;
