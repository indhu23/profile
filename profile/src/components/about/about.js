import React from 'react';


class About extends React.Component {

    constructor(props) {
        super(props);
        this.renderAboutView = this.renderAboutView.bind(this);
        this.renderExperienceView = this.renderExperienceView.bind(this);
        this.renderEducationView = this.renderEducationView.bind(this);
        this.renderSkillsView = this.renderSkillsView.bind(this);
        this.renderInterestsView = this.renderInterestsView.bind(this);
        this.renderAcademicProjectsView = this.renderAcademicProjectsView.bind(this);
    }


    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.selectedView !== this.props.selectedView) {
            const target = this.props.selectedView;
            var element = document.getElementById(target);
            element.scrollIntoView({block: 'start', behavior: 'smooth'});
        }
    }

    render() {
        return (
            <div className="container-fluid p-0">

                {this.renderAboutView()}
                {this.renderExperienceView()}
                {this.renderEducationView()}
                {this.renderAcademicProjectsView()}
                {this.renderSkillsView()}
                {this.renderInterestsView()}
            </div>
        );
    }

    renderAboutView = function () {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h2 className="mb-0">Indhuja <br/>

                        <span className="text-primary">Balakrishnan</span>
                    </h2>&nbsp;
                    <p className="mb-5">
                        I am an experienced Full Stack Developer who can get things done!
                            I have a demonstrated history of working in the Banking Industry, Smart TV application development
                            and I am Proficient in JavaScript. <br/><br/>
                            I am also experienced in Typescript, ReactJs, Redux, emberJS, nodeJS, Polymer
                            frameworks. <br/><br/>

                        Good knowledge in Spring framework, Node.js, Maven, Firebase and SQL.<br/>
                        <br/>
                        Checkout my recent experiments with SAP UI5 {' '}
                        <a href="https://indhu23.github.io/sapUI5-resume/" style={{textDecoration: 'underline'}}>here</a>
                    </p>
                    <ul className="list-inline list-social-icons mb-0">
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/indhuja-balakrishnan">
                                    <span className="fa-stack fa-lg">
                                      <i className="fa fa-circle fa-stack-2x"></i>
                                      <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                    </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/indhu23">
                                    <span className="fa-stack fa-lg">
                                      <i className="fa fa-circle fa-stack-2x"></i>
                                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

        );
    };

    renderExperienceView = function () {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                    <h2 className="mb-5">Experience</h2>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Senior Full Stack Developer</h3>
                            <div className="subheading mb-3">SAP SE</div>
                            <p><strong>Project:</strong> Compliance Cockpit, a platform that automates security compliance workflows at SAP to reduce risk and improve audit efficiency.</p>
                            <p><li>Led architectural design and implementation of advanced compliance workflow capabilities, driving key technical decisions across the stack.</li>
                                <li>Played a pivotal role in the successful SDOL adoption project, ensuring the platform passed security and data protection validations and strengthened overall compliance posture.</li>
                                <li>Designed and delivered the Evidence Request Management system, significantly improving audit evidence collection efficiency and workflow transparency.</li>
                                <li>Acted as a technical liaison between engineering and audit stakeholders, translating complex audit and regulatory requirements into scalable product solutions.</li>
                                <li>Mentored team members and established best practices for code quality, testing, and development standards.</li>
                                <li>Implemented robust unit and end-to-end test strategies, including the use of customized GitHub Copilot agents.</li>
                                <li>Participated in code reviews, debugging, and performance improvements across the application.</li></p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">March 2025 - Present</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Full Stack Developer</h3>
                            <div className="subheading mb-3">SAP SE</div>
                            <p><li>Contributed to the development of Compliance Cockpit, focusing on core feature implementation and system enhancements.</li>
                                <li>Built and maintained frontend components and backend APIs for compliance workflows using Vue.js and Node.js.</li>
                                <li>Collaborated with senior engineers to translate requirements into technical tasks and deliverables.</li>
                                <li>Recognized with multiple spot awards for outstanding contributions and delivery excellence.</li></p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">June 2019 - March 2025</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Internship & Master Thesis Student</h3>
                            <div className="subheading mb-3">SAP SE</div>
                            <p><li>Implemented a set of unique interactive components within the design at runtime-based research application titled 'Discovery'.</li>
                                <li>Design and implementation of concepts for easy user interaction in polymer framework through behavior-based approach.</li>
                                <li>Combining the concepts of data visualization with elastic user interactions.</li></p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">September 2018 - May 2019</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-item d-flex flex-column flex-md-row">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0">Software Associate Engineer</h3>
                                <div className="subheading mb-3">Foxxum GmbH</div>
                                <p><li>Worked on development of smart TV apps and provided technical feedback of app failures
                                    on different TV platforms. This feedback involved going through different applications written in
                                    different frameworks, identifying the bugs, and providing solution for vendors to fix them.</li>
                                <li>Developed an automation testing framework in JavaScript for testing of accepted Smart TV features on
                                    the Foxxum platform.</li></p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">March 2018 - August 2018</span>
                            </div>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Working student</h3>
                            <div className="subheading mb-3">Cap3 GmbH</div>
                            <p>
                                <li>Worked in developing an application for creating and conducting digital
                                    empirical tests.
                                </li>
                                <li>Developed modules using React and Redux frameworks in
                                    Typescript.
                                </li>
                            </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">July 2017 – November 2017</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Senior System Analyst</h3>
                            <div className="subheading mb-3">Standard Chartered Global Business Services</div>
                            <p>
                                <li>Collaborated with business and design teams to understand requirements
                                    and develop various modules in a responsive single page ember.js web application.
                                </li>
                                <li>Developed front-end banking web application modules using HTML5, CSS, JavaScript,
                                    AJAX and Ember.js framework in an Agile (Scrum) Development environment.
                                </li>
                                <li>Used Chrome Developer Tools and Firebug to ensure front-end code and assets were optimized and of high-quality
                                </li>
                            </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">March 2015 – March 2017</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Analyst</h3>
                            <div className="subheading mb-3">Standard Chartered Global Business Services</div>
                            <p>
                                <li>Worked in the existing system of Online Retail banking application, Standard
                                    Chartered Breeze-Jersey and contributed for major changes in both the font-end
                                    and back-end development.
                                </li>
                                <li>Worked in technologies like Spring, Maven, Hibernate etc.</li>
                            </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">July 2014 – February 2015</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    renderEducationView = function () {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                    <h2 className="mb-5">Education</h2>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Fachhochschule Kiel</h3>
                            <div className="subheading mb-3">Masters in Information Engineering</div>
                            <div>Specialization – Information Technology and Systems development</div>
                            <p></p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Since March 2017</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Panimalar Engineering College, India</h3>
                            <div className="subheading mb-3">Bachelors in Computer Science Engineering</div>
                            <p>Overall Aggregate: 83.1%</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">August 2010 – March 2014</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Jaigopal Garodia Matric Higher Secondary School</h3>
                            <div className="subheading mb-3">All India Secondary School Examination (AISSE)</div>
                            <p>Overall Aggregate: 93.5%</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">June 2008 – March 2010</span>
                        </div>
                    </div>


                </div>
            </section>

        );
    };
    renderAcademicProjectsView = function () {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
                <div className="my-auto">
                    <h2 className="mb-5">Graduate Projects</h2>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">

                            <div className="subheading mb-3">Online Ferry Booking application, Fachhochschule Kiel</div>
                               <p> <li>Developed an Interactive Ferry booking application with login, Admin view, User view, scheduling and booking functionalities.</li>
                                <li>
                                   Technologies used: React, Redux, webpack.
                            </li></p>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">

                            <div className="subheading mb-3">Online food sharing application (Essen Markt), Fachhochschule Kiel</div>
                            <p> <li>Designed a project plan and developed a simple web-based application where locals can share surplus food with another. </li>
                                <li>Application included live chat functionalities.</li>
                                <li>
                                    Technologies used: HTML5, bootstrap, LESS, AJAX, jQuery(front-end), node.js, express.js, firebase(back-end), Socket IO.
                                </li></p>
                        </div>
                    </div>

                </div>
            </section>
        );
    };
    renderSkillsView = function () {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3"> Languages &amp; Tools</div>
                    <ul className="list-inline list-icons">
                        <li className="list-inline-item">
                            <i className="devicons devicons-html5"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-css3"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-javascript"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-jquery"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-less"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-bootstrap"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-drupal"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-grunt"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-npm"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-react"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-ember"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-mysql"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-java"></i>
                        </li>
                    </ul>

                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            <span className="text-primary subheading mb-3">Languages</span>&nbsp;
                             - German (A2 level), English (Fluent), Hindi (Basics), Tamil (Mother
                            Tongue),Telugu (Basics)
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            <span className="text-primary subheading mb-3">Technical Languages</span>&nbsp;
                             - JavaScript, Es6, Typescript, Java, XHTML/HTML5, CSS2/CSS3, JSON, XML, AJAX, LESS
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            <span className="text-primary subheading mb-3"> Database </span>&nbsp;
                           - PL/SQL (oracle), nosql(Firebase)& PostgreSQL
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            <span className="text-primary subheading mb-3">  Framework </span>&nbsp;
                           - Spring, Hibernate, Ember.js, React, Redux, Node.js, SAP UI5, Vue.js, Objection.js & Knex.js
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            <span className="text-primary subheading mb-3">  Tools </span>&nbsp;
                           - Git/Subversion, Atom, JIRA, Chrome Developer Tools, Maven, Slack, Webpack
                        </li>
                    </ul>
                </div>
            </section>
        );
    };

    renderInterestsView = function () {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
                <div className="my-auto">
                    <h2 className="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. During the warmer months here in Kiel, I enjoy
                        sailing, canoeing and kayaking.</p>
                    <p>I love travelling to different countries and exploring new cities whenever I get the opportunity.</p>
                    <p className="mb-0">When forced indoors, I follow a number of fantasy genre movies and
                        television shows, and I spend a large amount of my free time
                        exploring the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
        );
    };
}

export default About;
