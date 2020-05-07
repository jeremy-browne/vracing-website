import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.facebookLabel = "VRacing Facebook";
        this.twitterLabel = "Vracing Twitter";
        this.instagramLabel = "VRacing Instagram";
        this.linkedinLabel = "VRacing LinkedIn";
        this.emailLabel = "VRacing e-mail"
    }
    render() {
        return (
            <div className="container">
                <div className="content">
                    <img src={require("./images/2.png")} alt="Vracing Logo" />
                    <p>We're taking a bit of a break during COVID-19, but rest assured we'll be back, and with better racing than ever.</p>

                    <div className="footer">
                        <a href="https://www.facebook.com/vracing.global/" className="fa fa-facebook" alt={this.facebookLabel}><span>{this.facebookLabel}</span></a>
                        <a href="https://www.instagram.com/vracing.global/" className="fa fa-twitter" alt={this.twitterLabel}><span>{this.twitterLabel}</span></a>
                        <a href="https://twitter.com/VRacing_global" className="fa fa-instagram" alt={this.instagramLabel}><span>{this.instagramLabel}</span></a>
                        <a href="https://www.linkedin.com/company/vracingglobal" className="fa fa-linkedin" alt={this.instagramLabel}><span>{this.linkedinLabel}</span></a>
                        <a href="mailto:contact@vracingsim.com" className="fa fa-envelope"alt={this.emailLabel}><span>{this.emailLabel}</span></a>
                    </div>
                    <p className="lowerText">&copy; VRacing 2020</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));