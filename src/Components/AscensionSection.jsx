import React from "react";

const AscensionSection = () => {
    return (
        <section className="ascensionSection section" data-section="ascension">
            <div className="wrapper">
                <h4 className="subtitle wow fadeInDown" data-wow-duration=".7s" data-wow-delay=".7s">ascension</h4>
                <h2 className="title wow fadeInDown" data-wow-duration=".7s" data-wow-delay=".5s">gamified combat style election</h2>
                <h4 className="block-subtitle wow fadeIn" data-wow-duration=".7s" data-wow-delay=".7s">// goal of ascencion</h4>
                <p className="text wow fadeIn" data-wow-duration=".7s" data-wow-delay=".7s">The goal of Ascension is to Disrupt the narrative of the Tragedy of the Commons and the Anti-commons through gamified self-preservation. A feudalistic process driven by the ability to attack each other and remove your opponent's ability to vote and receive rewards. Members of Ascension are competing for the right to manage and govern over the community. </p>
                <h4 className="block-subtitle wow fadeIn" data-wow-duration=".7s" data-wow-delay="1.4s">/// executive control over governance</h4>
                <p className="text wow fadeIn" data-wow-duration=".7s" data-wow-delay="1.4s">Acting as a temporary board of directors known as Chamber Members, individuals are elected to positions that govern the operation of the treasury for a predetermined length of time giving them executive control over governance.
                    <br /><br />
                    The process of feudalistic gamified on-chain combat style election is known as Ascension.</p>

                <div className="blocks">
                    <div className="block">
                        <video no-controls="true" autoPlay loop playsInline muted>
                            <source src="img/video/animateVIdeo.mp4" />
                        </video>
                    </div>
                    <div className="block">
                        <video no-controls="true" autoPlay loop playsInline muted>
                            <source src="img/video/animateVIdeo-2.mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AscensionSection;