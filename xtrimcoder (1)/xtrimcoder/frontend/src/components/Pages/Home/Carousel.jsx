import React from 'react'

export default function Carousel() {
  return (
    <div className='my-4'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1663512773~exp=1663513373~hmac=20dc40d4450ef3c29eab973af28e9076d8b3c9aa90ecfc7f6609b27fc134fc80" className="d-block w-100 rounded" height={"369px"} alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="20000">
      <img src="https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-3941.jpg?w=740&t=st=1663512823~exp=1663513423~hmac=6707b37549c47ec2fe5cf4e24e1e55b5b8391ae89e1543c753bfc92d04dfed8a" className="d-block w-100 rounded" height={"369px"} alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src="https://img.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg?w=996&t=st=1663512884~exp=1663513484~hmac=bbdbd43655ecea71cb74df9ea88253085c1115ba9d495c1f2e8f5b69f7d1b090" className="d-block w-100 rounded" height={"369px"}  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
