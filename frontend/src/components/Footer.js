import React from 'react';


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center py-3">
                    <div className="col-auto">
                        <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
                    </div>
                    <div className="col-auto">
                        <i className="bi bi-twitter" style={{ fontSize: "1.5rem" }}></i>
                    </div>
                    <div className="col-auto">
                        <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
                    </div>
                    <div className="col-auto">
                        <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src="/img/logos/footer.png" alt="Association For Computing Machinery" />
                    </div>
                    <div className="col-md-4">
                        <h5>Useful Links</h5>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ borderBottom: "1px solid grey", color: "#007bff" }}>
                                <a href="https://acm.org" target="_blank" rel='noreferrer'>ACM</a>
                            </li>
                            <li style={{ borderBottom: "1px solid grey", color: "#007bff" }}>
                                <a href="https://india.acm.org" target='_blank' rel="noreferrer">ACM India</a>
                            </li>
                            <li style={{ borderBottom: "1px solid grey", color: "#007bff" }}>
                                <a href="https://xrds.acm.org" target='_blank' rel="noreferrer">ACM Magazine</a>
                            </li>
                            <li style={{ borderBottom: "1px solid grey", color: "#007bff" }}>
                                <a href="https://dl.acm.org" target='_blank' rel="noreferrer">ACM Digital Library</a>
                            </li>
                            <li style={{ borderBottom: "1px solid grey", color: "#007bff" }}>
                                <a href="https://webmail.gmritchapter.hosting.acm.org" target='_blank' rel="noreferrer">Web Mail</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Address</h5>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>GMR Institute of Technology</li>
                            <li>GMR Nagar</li>
                            <li>Rajam - 532127</li>
                            <li>Vizianagarm Dist.</li>
                            <li>Andhra Pradesh</li>
                            <li>acm@gmrit.edu.in</li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-auto text-center">
                        ACM Women Student Chapter | GMRIT
                        <br />
                        Developed with ❤️ by Team ACMW GMRIT
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer