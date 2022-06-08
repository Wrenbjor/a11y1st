import Logo from './logo.svg';
function Purpose() {
    return (
        <div>
            <section className='section tir'>
                <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child">
                            <img src={Logo} width="250" alt="Accssibility First Logo" />
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <p id="purpose" className="title">Purpose</p>
                            <p>A11y 1st was created to be a single resource for software developers to learn about accessibility in web design and development.</p>
                            <br />
                            <p>As this community grows, we look forward to developers and designers contributing articles and techniques they have learned while attempting to implement accessibility within their designs, pages, and apps.</p>
                            <br />
                            <p>There are many that believe public awareness is what is needed to make changes on how accessibility is managed on the web. We feel that it should just be the new standard that designers and developers use when building web pages. We don't need to talk about it, we just need to do it.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Purpose;