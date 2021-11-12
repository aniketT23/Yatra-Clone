import styled from 'styled-components';

const Passenger= styled.div`
background-color:white;
`
export function Contact(){

    return (
        <Passenger>
            <div>
            <h4>Contact Detils</h4>
              <input type="email" placeholder="Email ID" value=""/>
                <input type="text" placeholder=" mobile Number"/>
                </div>
                <p>Your booking details will be sent to this email address and mobile number.</p>
                <input type="checkbox"/>
                <p>Also send my booking details on WhatsApp </p>
                <hr></hr>
                <h3>Traveller Information</h3>
                <p> <span>Important Note:</span> Please ensure that the names of the passengers on the travel documents is the same as on their government issued identity proof.</p>

                <h4>Adult1</h4>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
        </Passenger>
    )

}