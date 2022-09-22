import React from 'react'
import './team.css'
import nikita from './img/nikita.jpg'
import vishal from './img/vishal.jpg'
import nehanshu from './img/nehanshu.jpg'
export default function Team() {
  return (
    <div>
        <section className="section-team">
		<div className="container">
			<div className="row justify-content-center text-center">
				<div className="col-md-8 col-lg-6">
					<div className="header-section">
						<h3 className="small-title">Our Experts</h3>
						<h2 className="title">Let's meet with our team members</h2>
					</div>
				</div>
			</div>
			<div className="row">

				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="single-person">
						<div className="person-image">
							<img src={nehanshu}  alt=""/>
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name" style={{textAlign:"center"}}>Nehanmshu Ajmera</h3>
							<span className="speciality d-flex justify-content-center">UI/UX Designer</span>
						</div>
					</div>
				</div>

				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="single-person">
						<div className="person-image">
							<img src={vishal} alt=""/>
							<span className="icon">
								<i className="fab fa-react"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name" style={{textAlign:"center"}}>Vishal Sharma</h3>
							<span className="speciality d-flex justify-content-center">Full Stack Developer</span>
						</div>
					</div>
				</div>

				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="single-person">
						<div className="person-image">
							<img src={nikita} alt=""/>
							<span className="icon">
								<i className="fab fa-js"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name" style={{textAlign:"center"}}>Nikita Choudhary</h3>
							<span className="speciality d-flex justify-content-center">UI/UX Designer</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

    </div>
  )
}
