'use client';
import "./styles.css";

function page() {
    return (
        <>

            {/* <!-- Geometric Background Canvas --> */}
            <div className="bg-canvas">
                <div className="geometric-shape shape1"></div>
                <div className="geometric-shape shape2"></div>
                <div className="geometric-shape shape3"></div>
            </div>

            {/* <!-- Deconstructed Header --> */}
            <header>
                <nav>
                    <div className="logo">
                        <img src="./arise-logo.png" />
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#success">Success</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="nav-cta">
                        <a href="#enroll" className="btn-header">Enroll Now</a>
                    </div>
                </nav>
            </header>

            {/* <!-- Cubist Hero --> */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-label">Next-Gen FMGE Prep</div>
                    <h1>
                        <span className="word1">ARISE  </span>
                        <span className="word2">Medical</span>
                        <span className="word3">Academy</span>
                    </h1>
                    <p className="hero-description">
                        Arise Medical Academy, established in 2010, is a leading FMGE coaching centre in Kerala committed to delivering quality, learner-focused medical education. With consistent top results and dedicated student support, the academy helps aspiring doctors achieve their career goals with skill and professionalism.
                    </p>
                    <div className="hero-cta">
                        <a href="#programs" className="btn-primary"><span>EXPLORE PROGRAMS</span></a>
                        <a href="#demo" className="btn-secondary">Watch Demo →</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="abstract-composition">
                        <div className="composition-element element1"></div>
                        <div className="composition-element element2"></div>
                        <div className="composition-element element3"></div>
                        <div className="composition-element element4"></div>
                    </div>
                </div>
            </section>

            {/* <!-- Brutalist Stats --> */}
            <section className="stats">
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-number">97%</div>
                        <div className="stat-label">Pass Rate</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">8.2K</div>
                        <div className="stat-label">Doctors Trained</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">15</div>
                        <div className="stat-label">Years Leading</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">∞</div>
                        <div className="stat-label">Innovation</div>
                    </div>
                </div>
            </section>

            {/* <!-- Asymmetric Features --> */}
            <section className="features" id="features">
                <div className="section-header">
                    <div className="section-tag">Why We're Different</div>
                    <h2 className="section-title">Fragmented traditional methods. Unified breakthrough results.</h2>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <span className="feature-icon">⚡</span>
                        <h3 className="feature-title">Neuro-Mapped Learning</h3>
                        <p className="feature-description">
                            Brain-optimized curriculum using spaced repetition, memory encoding,
                            and neural pattern recognition for maximum retention.
                        </p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🔬</span>
                        <h3 className="feature-title">Clinical Immersion Lab</h3>
                        <p className="feature-description">
                            Virtual reality case studies, 3D anatomy visualization, and
                            diagnostic simulation preparing you for real-world medicine.
                        </p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🎯</span>
                        <h3 className="feature-title">AI-Driven Precision</h3>
                        <p className="feature-description">
                            Machine learning algorithms analyze your performance, predict
                            weak spots, and dynamically adjust your study path.
                        </p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">📊</span>
                        <h3 className="feature-title">Real-Time Analytics</h3>
                        <p className="feature-description">
                            Live performance dashboards, comparative ranking, and granular
                            insights into every aspect of your preparation.
                        </p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🧠</span>
                        <h3 className="feature-title">Cognitive Load Theory</h3>
                        <p className="feature-description">
                            Information architecture designed to prevent overwhelm and
                            maximize working memory efficiency during study sessions.
                        </p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">⚕️</span>
                        <h3 className="feature-title">Doctor-Led Mentorship</h3>
                        <p className="feature-description">
                            Personal guidance from practicing physicians who've cracked
                            FMGE, offering insider perspectives on exam strategy.
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- Diagonal Course Cards --> */}
            <section className="courses" id="programs">
                <div className="section-header">
                    <div className="section-tag">Training Programs</div>
                    <h2 className="section-title">Choose your trajectory</h2>
                </div>
                <div className="course-grid">
                    <div className="course-card">
                        <div className="course-visual">💎</div>
                        <div className="course-content">
                            <h3 className="course-title">TOTAL MASTERY</h3>
                            <ul className="course-features">
                                <li>18-month comprehensive program</li>
                                <li>All 19 subjects • Deep conceptual coverage</li>
                                <li>300+ hours live instruction</li>
                                <li>10,000+ practice questions</li>
                                <li>Weekly performance analytics</li>
                                <li>1-on-1 doctor mentorship</li>
                                <li>Lifetime content access</li>
                            </ul>
                            <a href="#enroll" className="btn-primary"><span>BEGIN JOURNEY</span></a>
                        </div>
                    </div>
                    <div className="course-card">
                        <div className="course-visual">🚀</div>
                        <div className="course-content">
                            <h3 className="course-title">RAPID FIRE</h3>
                            <ul className="course-features">
                                <li>4-month intensive bootcamp</li>
                                <li>High-yield topic concentration</li>
                                <li>120+ hours rapid instruction</li>
                                <li>Pattern recognition training</li>
                                <li>Daily mock examinations</li>
                                <li>Last-minute strategy sessions</li>
                                <li>Exam-day psychology prep</li>
                            </ul>
                            <a href="#enroll" className="btn-primary"><span>ACCELERATE NOW</span></a>
                        </div>
                    </div>
                    <div className="course-card">
                        <div className="course-visual">🎯</div>
                        <div className="course-content">
                            <h3 className="course-title">TEST ARSENAL</h3>
                            <ul className="course-features">
                                <li>50 full-length FMGE simulations</li>
                                <li>Subject-wise diagnostic tests</li>
                                <li>Previous 15 years' papers</li>
                                <li>Advanced performance metrics</li>
                                <li>National rank predictions</li>
                                <li>Video solutions for every question</li>
                                <li>Unlimited test attempts</li>
                            </ul>
                            <a href="#enroll" className="btn-primary"><span>START TESTING</span></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Layered Testimonials --> */}
            <section className="testimonials" id="success">
                <div className="section-header">
                    <div className="section-tag">Student Victories</div>
                    <h2 className="section-title">From struggle to triumph</h2>
                </div>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "The cognitive load approach changed everything. I went from overwhelmed
                            to confident. Their methodology doesn't just teach - it rewires how you think."
                        </p>
                        <div className="testimonial-author">Dr. Ananya Krishnan</div>
                        <div className="testimonial-rank">FMGE Dec 2024 • AIR 23</div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "After failing twice, I found this institute. The AI analytics pinpointed
                            exactly where I was losing marks. Passed with distinction on third attempt."
                        </p>
                        <div className="testimonial-author">Dr. Vikram Singh</div>
                        <div className="testimonial-rank">FMGE Jun 2024 • 89th Percentile</div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "The clinical immersion lab gave me confidence I'd never felt. By exam day,
                            I wasn't just answering questions - I was diagnosing real patients in my mind."
                        </p>
                        <div className="testimonial-author">Dr. Priya Reddy</div>
                        <div className="testimonial-rank">FMGE Dec 2024 • AIR 156</div>
                    </div>
                </div>
            </section>

            {/* <!-- Full-Bleed CTA --> */}
            <section className="cta-section" id="enroll">
                <h2>READY TO RECONSTRUCT YOUR FUTURE?</h2>
                <p>Join 8,200+ doctors who shattered their limits with us</p>
                <div className="cta-buttons">
                    <a href="#" className="btn-cta">BOOK FREE STRATEGY CALL</a>
                    <a href="#" className="btn-cta">DOWNLOAD SYLLABUS</a>
                </div>
            </section>

            {/* <!-- Minimal Footer --> */}
            <footer>
                <div>
                    <div className="footer-brand">ARISE Medical Academy</div>
                    <p className="footer-tagline">
                        Deconstructing medical education.<br />
                        Reconstructing medical careers.<br />
                        Since 2010.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Quick Access</h4>
                    <ul>
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#features">Methodology</a></li>
                        <li><a href="#success">Success Stories</a></li>
                        <li><a href="#">Faculty</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="tel:+919876543210">+91 99291 13115</a></li>
                        <li><a href="mailto:breakthrough@fmge.institute">info@arisemedicalacademy.com</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">Telegram</a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 ARISE Medical Academy • All Rights Reserved </p>
                </div>
        </footer >

        </>
    )
}

export default page
