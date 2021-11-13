/** @format */
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./booking.css";
import { Flight } from "./flights";
import { Company } from "./company";
import { Info } from "./info";
import { Middle } from "./middle";
import { Total } from "./total";
import { useState } from "react";
const Body = styled.div`
	display: flex;
	/* border: 1px solid black; */
	margin: auto;
	max-width: 100%;
	margin-top: 5%;
`;
const Heading = styled.div`
	display: flex;
	/* border: 1px solid blue; */
	width: 100%;
	h3 {
		margin: 2%;
	}
	a {
		/* border: 2px solid brown; */
		margin-left: 30%;
		text-align: right;
		font-size: 12px;
		text-decoration: none;
	}
`;
const Deaparture = styled.div`
	display: flex;
	.dot {
		margin: 2% 2%;
		border-left: 1px dotted black;
	}
	.vertical {
		margin-right: 2%;

		writing-mode: vertical-lr;
		text-align: center;
		transform: rotate(180deg);
	}
`;
const Inner = styled.div`
	display: flex;
`;

const Return = styled.div`
	display: flex;
	.dot {
		margin: 2% 2%;
		border-left: 1px dotted black;
	}
	.vertical {
		margin-right: 2%;

		writing-mode: vertical-lr;
		text-align: center;
		transform: rotate(180deg);
	}
`;
const RightEl = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	min-width: 60%;
	/* border: 1px solid red; */

	div .btn {
		margin: 2% auto;
		position: relative;
		left: 35%;
		border: none;
		background-color: rgb(214, 68, 67);
		padding: 2%;
		color: white;
		border-radius: 6px;
		font-size: 20px;
	}
`;
const LeftEL = styled.div`
	margin: auto;
	margin-top: 0px;
	min-width: 25%;
	/* border: 1px solid blueviolet; */
	flex-direction: column;
`;

const Book = styled.div`
	background-color: white;
`;

const Travel = styled.div``;

export function Booking({ value }) {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		mobile: "",
	});
	function handle(e) {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
		console.log(userData);
	}
	function save() {
		localStorage.setItem("userData", JSON.stringify(userData));
	}
	var details = JSON.parse(localStorage.getItem("Details"));
	return (
		<Body style={{ backgroundColor: "rgb(226, 226, 226)" }}>
			<RightEl>
				<Heading>
					<h3>Review Your Bookings</h3>
					<a href='#'>Change Flight</a>
				</Heading>

				<Book>
					<Deaparture>
						<div className='vertical'>Departure</div>
						<div>
							<Company
								name={details.flight}
								model={details.model}
								logo={details.logo}
								sup='De Havilland DHC-8'></Company>
							<Company
								name={details.flight}
								model={details.model}
								logo={details.logo}
								sup='De Havilland DHC-8'></Company>
						</div>
						<div className='dot'></div>
						<div>
							<Inner>
								<Flight
									name={value.from}
									time={details.tfrom}
									logo={details.logo}
									date={details.date}
									airport='Indra Gandhi,T-1D'></Flight>
								<Info
									duration='1h 10m'
									meal='No Meal Fare'
									classs='Economy'></Info>
								<Flight
									name={details.mid}
									time={details.mida}
									date={details.date}
									logo={details.logo}
									airport='Sanganeer,T-2'></Flight>
							</Inner>
							<Middle></Middle>
							<Inner>
								<Flight
									name={details.mid}
									time={details.midd}
									date={details.date}
									airport='Indra Gandhi,T-1D'></Flight>
								<Info
									duration='1h 45m'
									meal='No Meal Fare'
									classs='Economy'></Info>
								<Flight
									name={value.to}
									time={details.tto}
									date={details.date}
									airport='Chatrapati Shivaji,T-2'></Flight>
							</Inner>
						</div>
					</Deaparture>
					<hr></hr>
					<Return>
						<div className='vertical'>Return</div>
						<div>
							<Company
								name={details.flight}
								model={details.model}
								logo={details.logo}
								sup='De Havilland DHC-8'></Company>
							<Company
								name={details.flight}
								model={details.model}
								logo={details.logo}
								sup='De Havilland DHC-8'></Company>
						</div>
						<div className='dot'></div>
						<div>
							<Inner>
								<Flight
									name='Mumbai,In'
									time='13:50'
									date='Tue,25 Nov 2021'
									airport='Chatrapati Shivaji,T-2'></Flight>
								<Info
									duration='1h 10m'
									meal='No Meal Fare'
									classs='Economy'></Info>
								<Flight
									name='Jodhpur, IN'
									time='15:10'
									date='Thu, 25 Nov 2021'
									airport='Jodhpur , T-1'></Flight>
							</Inner>
							<Middle></Middle>
							<Inner>
								<Flight
									name='Jodhpur, IN'
									time='13:05'
									date='Fri, 26 Nov 2021'
									airport='Jodhpur , T-1'></Flight>
								<Info
									duration='1h 10m'
									meal='No Meal Fare'
									classs='Economy'></Info>
								<Flight
									name='New Delhi, IN'
									time='14:20'
									date='Fri, 26 Nov 2021'
									airport='Indira Gandhi , T-1C'></Flight>
							</Inner>
						</div>
					</Return>
				</Book>
				<div>
					<h3>
						Enter Travellers Deatils | <a href='#'> SignIn</a> to book faster
						and use eCash
					</h3>
					<Book>
						<Travel>
							<p>Conatct Details</p>
							<input
								type='text'
								placeholder='Name'
								value={userData.name}
								name='name'
								onChange={handle}
							/>
							<input
								type='email'
								placeholder='Email ID'
								value={userData.email}
								name='email'
								onChange={handle}
							/>
							<input
								value={userData.mobile}
								type='text'
								name='mobile'
								placeholder=' mobile Number'
								onChange={handle}
							/>
						</Travel>
					</Book>
					<button
						onClick={() => {
							save();
							window.location.href = "/payment/upi";
						}}
						className='btn'>
						Proceed To Payment
					</button>
				</div>
			</RightEl>
			<LeftEL>
				<Heading>
					<h3>Fare Details</h3>
					<a href='#'>View Fare Rules</a>
				</Heading>
				<Book>
					<Total
						base={details.price}
						fee='₹729'
						fare={details.price + 729}
						total={details.price + 729 + Math.floor((details.price * 18) / 100)}
						cash='₹500'></Total>
				</Book>
			</LeftEL>
		</Body>
	);
}
