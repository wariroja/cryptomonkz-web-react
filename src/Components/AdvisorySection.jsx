import React from "react";

const AdvisorySection = () => {
    return (
        <section className="advisorySection section">
            <div className="wrapper">
                <div className="build wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".5s"><img src="img/main/advisory/build.png" alt="" /></div>
                <div className="top">
                    <h4 className="subtitle wow fadeInDown" data-wow-duration=".7s" data-wow-delay=".7s">consultants</h4>
                    <h2 className="title wow fadeInDown" data-wow-duration=".7s" data-wow-delay=".5s">Advisory <br /> board</h2>
                </div>
                <div className="content">
                    <div className="content-item right wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".5s">
                        <h4 className="content-item__title">
                            <span className="white">FrankyNines </span>
                            <span className="orange">// Founder, SupDucks</span>
                        </h4>
                        <div className="content-item__img"><img src="img/main/advisory/img-1.png" alt="" /></div>
                    </div>
                    <div className="content-item__line"></div>
                    <div className="content-item left wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".5s">
                        <div className="content-item__img"><img src="img/main/advisory/img-2.png" alt="" /></div>
                        <h4 className="content-item__title">
                            <span className="white">Frank Wilder </span>
                            <span className="orange">// Founder, WilderWorld</span>
                        </h4>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default AdvisorySection;