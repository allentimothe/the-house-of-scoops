import React from 'react';
import './OrderForm.css';

const OrderForm = () => {
  return (
    <div>
      <form>
        <label>Quote Request/Inquiry</label>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut! 
        </p>
        <textarea rows='6' placeholder='Type a short message here' />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default OrderForm;