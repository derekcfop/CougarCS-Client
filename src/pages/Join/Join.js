import React, { lazy, Suspense } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import analyticsSVG from '../../assets/analytics.svg';
import collectingSVG from '../../assets/collecting.svg';
import gif from '../../assets/member.svg';
import memorySVG from '../../assets/memory.svg';
import teachingSVG from '../../assets/teaching.svg';
import { MetaData } from '../../components/Meta/MetaData';
import './Join.css';
import Loading from '../../components/Loading/Loading';
const UserRegister = lazy(() =>
	import('../../components/UserRegister/UserRegister')
);
const Membership = () => {
	const meta = {
		title: 'Membership',
		desc: 'Learn more about our membership.',
		url: 'https://cougarcs.com/join',
		img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
	};

	return (
		<div>
			<MetaData {...meta} />
			<Container fluid className='contained hero hero-membership'>
				<Row>
					<Col md='6' className='order-md-2'>
						<img src={gif} alt='undraw svg' style={{ width: '100%' }}></img>
					</Col>
					<Col md='6' className='order-md-0'>
						<div className='membership'>
							<h1>Membership</h1>
							<div className='lead-text'>
								<p>
									CougarCS offers students exclusive access to a variety of
									events and resources aimed at career preparedness. Throughout
									every semester, we host dozens of technical workshops,
									information sessions, and programming challenges. Technical
									workshops and information sessions, often hosted by Fortune
									100 companies, cover a broad spectrum of topics such as resume
									critiques, career fair preparation, mock interviews and much
									more. Our programming challenges offer our members a chance to
									showcase their problem solving skills in a high energy
									environment, compete with their peers, and earn prizes. In
									addition to these events, we also provide weekly tutoring and
									academic support. CougarCS also has a far reaching network of
									alumni who are industry professionals and are always looking
									to connect with current members!
								</p>
								<p>
									Memberships are priced at{' '}
									<strong>$40.00 for a full year </strong> or{' '}
									<strong>$25.00 a semester</strong>. You can join by completing
									the form below.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Container fluid style={{ textAlign: 'center', marginBottom: '10rem' }}>
				<h2>What Are The Benefits</h2>
				<Row className='benefits' md={12} xs={12}>
					<div>
						<Row>
							<Col>
								<Card style={{ textAlign: 'center', border: 'none' }}>
									<Card.Body>
										<div>
											<img
												src={analyticsSVG}
												style={{ height: '10em', width: '9em', color: 'red' }}
												alt='undraw'
											/>
										</div>
										<Card.Title style={{ textAlign: 'center' }}>
											Technical workshops
										</Card.Title>
										<p style={{ textAlign: 'center' }}>
											Learn industry standards and refine your skills in teams{' '}
										</p>
									</Card.Body>
								</Card>
							</Col>
							<Col>
								<Card style={{ textAlign: 'center', border: 'none' }}>
									<Card.Body>
										<div>
											<img
												src={collectingSVG}
												alt='undraw'
												style={{ height: '10em', width: '9em', color: 'red' }}
											/>
										</div>
										<Card.Title>Information Sessions</Card.Title>
										<p>
											Connect with companies from all over the world hiring at
											UH
										</p>
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card style={{ textAlign: 'center', border: 'none' }}>
									<Card.Body>
										<div>
											<img
												src={memorySVG}
												alt='undraw'
												style={{ height: '10em', width: '9em', color: 'red' }}
											/>
										</div>
										<Card.Title>Career Fair Preparation</Card.Title>
										<p>Practice with mock interviews and resume building</p>
									</Card.Body>
								</Card>
							</Col>
							<Col>
								<Card style={{ textAlign: 'center', border: 'none' }}>
									<Card.Body>
										<div>
											<img
												src={teachingSVG}
												alt='undraw'
												style={{ height: '10em', width: '9em', color: 'red' }}
											/>
										</div>
										<Card.Title style={{ textAlign: 'center' }}>
											Tutoring and Academic Support
										</Card.Title>
										<p style={{ textAlign: 'center' }}>
											Work through problems with intelligent and approachable
											tutors who are focused on member success
										</p>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</div>
				</Row>
			</Container>
			<Suspense fallback={<Loading />}>
				<UserRegister />
			</Suspense>
		</div>
	);
};
export default Membership;
