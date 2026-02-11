'use client'
import "./styles.css";
import TopSlider from "../TopNavbar";

function page() {
    
  return (
    <>
   
    {/* <!-- Sophisticated Header --> */}
    <header>
          <TopSlider />
        <nav>
            <div className="logo"><img src="./arise-logo.png" /></div>
            <ul className="nav-links">
                <li><a href="">Home</a></li>
                <li><a href="">Courses</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Registration Fees</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Gallery</a></li>
            </ul>
            <a href="#enroll" className="nav-cta">Get Started</a>
        </nav>
    </header>

    {/* <!-- Elegant Hero --> */}
    <section className="hero">
        <div className="hero-content">
            <span className="hero-label">Premier FMGE Preparation</span>
            <h1>Where Medicine Meets <span className="highlight">Mastery</span></h1>
            <p className="hero-subtitle">
                Elevate your FMGE preparation with India's most refined and results-driven 
                coaching institute. We blend academic excellence with personalized mentorship 
                to create doctors of distinction.
            </p>
            <div className="hero-buttons">
                <a href="#programs" className="btn-primary">Explore Programs</a>
                <a href="#demo" className="btn-secondary">Schedule Consultation</a>
            </div>
        </div>
        <div className="hero-visual">
            <div className="visual-card card-1">
                <div className="card-icon">📚</div>
                <h3 className="card-title">Curated Curriculum</h3>
                <p className="card-description">Meticulously designed study materials aligned with NMC guidelines</p>
            </div>
            <div className="visual-card card-2">
                <div className="card-icon">👨‍⚕️</div>
                <h3 className="card-title">Expert Faculty</h3>
                <p className="card-description">Learn from practicing physicians and subject specialists</p>
            </div>
            <div className="visual-card card-3">
                <div className="card-icon">🎯</div>
                <h3 className="card-title">Proven Results</h3>
                <p className="card-description">Consistent track record of exceptional pass rates</p>
            </div>
        </div>
    </section>

    {/* <!-- Refined Stats --> */}
    <section className="stats">
        <div className="stats-container">
            <div className="stat-item">
                <div className="stat-number">94%</div>
                <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">6,500+</div>
                <div className="stat-label">Doctors Trained</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Faculty</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">12</div>
                <div className="stat-label">Years Excellence</div>
            </div>
        </div>
    </section>

    {/* <!-- Elegant Features --> */}
    <section className="features" id="approach">
        <div className="section-header">
            <span className="section-tag">Our Methodology</span>
            <h2 className="section-title">A Refined Approach to Excellence</h2>
            <p className="section-subtitle">
                We've perfected the art of FMGE preparation through years of experience, 
                combining traditional academic rigor with modern pedagogical innovations.
            </p>
        </div>
        <div className="features-grid">
            <div className="feature-card">
                <div className="feature-icon">📖</div>
                <h3 className="feature-title">Comprehensive Study Material</h3>
                <p className="feature-description">
                    Thoughtfully curated content covering all 19 subjects with emphasis on 
                    high-yield topics, clinical correlations, and memory retention techniques.
                </p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">🔬</div>
                <h3 className="feature-title">Clinical Case Integration</h3>
                <p className="feature-description">
                    Real patient scenarios woven into every lesson, preparing you not just 
                    for exams but for clinical practice and diagnostic reasoning.
                </p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">Personalized Analytics</h3>
                <p className="feature-description">
                    Detailed performance tracking with AI-powered insights identifying 
                    strengths, weaknesses, and optimal study patterns.
                </p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">🎓</div>
                <h3 className="feature-title">Individual Mentorship</h3>
                <p className="feature-description">
                    One-on-one guidance from experienced physicians who understand your 
                    journey and provide personalized academic and career counseling.
                </p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h3 className="feature-title">Extensive Testing Program</h3>
                <p className="feature-description">
                    Regular assessments including subject tests, mock exams, and grand tests 
                    designed to mirror actual FMGE patterns and difficulty levels.
                </p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3 className="feature-title">Flexible Learning Modes</h3>
                <p className="feature-description">
                    Seamless integration of classNameroom instruction, live online sessions, 
                    and self-paced video lectures with premium mobile app access.
                </p>
            </div>
        </div>
    </section>

    {/* <!-- Premium Courses --> */}
    <section className="courses" id="programs">
        <div className="courses-container">
            <div className="section-header">
                <span className="section-tag">Training Programs</span>
                <h2 className="section-title">Tailored to Your Timeline</h2>
                <p className="section-subtitle">
                    Select the program that aligns with your preparation journey, whether 
                    you're beginning comprehensive preparation or need focused revision.
                </p>
            </div>
            <div className="course-grid">
                <div className="course-card">
                    <div className="course-image">
                        <div className="course-image-content">
                            <div className="course-icon">🎓</div>
                            <div className="course-badge">Most Comprehensive</div>
                        </div>
                    </div>
                    <div className="course-content">
                        <h3 className="course-title">Complete FMGE Program</h3>
                        <p className="course-description">
                            Our flagship 15-month comprehensive program designed for medical 
                            graduates seeking thorough preparation across all subjects.
                        </p>
                        <ul className="course-features">
                            <li>19 subjects with complete coverage</li>
                            <li>250+ hours of expert instruction</li>
                            <li>Comprehensive study materials</li>
                            <li>6,000+ practice questions</li>
                            <li>Weekly subject tests</li>
                            <li>25 full-length mock exams</li>
                            <li>Personal faculty mentorship</li>
                            <li>Lifetime video access</li>
                        </ul>
                        <a href="#enroll" className="btn-primary">Learn More</a>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-image">
                        <div className="course-image-content">
                            <div className="course-icon">⚡</div>
                            <div className="course-badge">Intensive Prep</div>
                        </div>
                    </div>
                    <div className="course-content">
                        <h3 className="course-title">Rapid Revision Program</h3>
                        <p className="course-description">
                            A focused 5-month intensive course covering high-yield topics 
                            and exam strategies for efficient last-mile preparation.
                        </p>
                        <ul className="course-features">
                            <li>High-yield topic focus</li>
                            <li>120+ hours strategic teaching</li>
                            <li>Rapid revision modules</li>
                            <li>3,500+ targeted MCQs</li>
                            <li>Bi-weekly mock tests</li>
                            <li>Pattern analysis workshops</li>
                            <li>Exam strategy sessions</li>
                            <li>Mobile app access</li>
                        </ul>
                        <a href="#enroll" className="btn-primary">Learn More</a>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-image">
                        <div className="course-image-content">
                            <div className="course-icon">🎯</div>
                            <div className="course-badge">Assessment Focus</div>
                        </div>
                    </div>
                    <div className="course-content">
                        <h3 className="course-title">Premium Test Series</h3>
                        <p className="course-description">
                            Comprehensive testing program with detailed analytics and 
                            performance tracking for candidates seeking practice excellence.
                        </p>
                        <ul className="course-features">
                            <li>40 full-length mock exams</li>
                            <li>Subject-wise sectional tests</li>
                            <li>Previous years' questions</li>
                            <li>Detailed video solutions</li>
                            <li>Performance analytics</li>
                            <li>National rank predictor</li>
                            <li>Timed exam simulation</li>
                            <li>Unlimited test retakes</li>
                        </ul>
                        <a href="#enroll" className="btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Testimonials --> */}
    <section className="testimonials" id="success">
        <div className="section-header">
            <span className="section-tag">Student Success</span>
            <h2 className="section-title">Excellence in Their Words</h2>
            <p className="section-subtitle">
                Hear from our successful candidates who achieved their FMGE dreams 
                through dedication and our guidance.
            </p>
        </div>
        <div className="testimonial-grid">
            <div className="testimonial-card">
                <div className="testimonial-content">
                    <p className="testimonial-text">
                        The personalized attention and systematic approach made all the difference. 
                        The faculty understood my strengths and weaknesses, crafting a study plan 
                        that helped me excel in areas where I struggled.
                    </p>
                    <div className="testimonial-author">
                        <div className="author-image">AK</div>
                        <div className="author-info">
                            <h4>Dr. Aisha Khan</h4>
                            <p>FMGE Dec 2024 • AIR 38</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-card">
                <div className="testimonial-content">
                    <p className="testimonial-text">
                        After attempting FMGE twice, I found this institute. Their structured 
                        curriculum, regular testing, and encouraging environment gave me the 
                        confidence I needed. Third time was indeed the charm!
                    </p>
                    <div className="testimonial-author">
                        <div className="author-image">RS</div>
                        <div className="author-info">
                            <h4>Dr. Rohan Sharma</h4>
                            <p>FMGE Jun 2024 • Qualified</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-card">
                <div className="testimonial-content">
                    <p className="testimonial-text">
                        The study materials were exceptional—concise yet comprehensive. The 
                        clinical case discussions helped me think like a doctor, not just a 
                        test-taker. I'm grateful for this transformative experience.
                    </p>
                    <div className="testimonial-author">
                        <div className="author-image">NP</div>
                        <div className="author-info">
                            <h4>Dr. Neha Patel</h4>
                            <p>FMGE Dec 2024 • AIR 142</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Premium CTA --> */}
    <section className="cta">
        <div className="cta-content">
            <h2>Begin Your Journey to Excellence</h2>
            <p>Join a community of ambitious medical graduates committed to achieving FMGE success</p>
            <div className="cta-buttons">
                <a href="#" className="btn-primary">Schedule Free Consultation</a>
                <a href="#" className="btn-primary">Download Brochure</a>
            </div>
        </div>
    </section>

    {/* <!-- Refined Footer --> */}
    <footer>
        <div className="footer-content">
            <div>
                <div className="footer-brand">ARISE Medical Academy</div>
                <p className="footer-description">
                    Dedicated to nurturing medical excellence through refined pedagogy, 
                    personalized mentorship, and unwavering commitment to student success.
                </p>
            </div>
            <div className="footer-section">
                <h4>Programs</h4>
                <ul>
                    <li><a href="#">Complete Program</a></li>
                    <li><a href="#">Rapid Revision</a></li>
                    <li><a href="#">Test Series</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">Study Materials</a></li>
                    <li><a href="#">Success Stories</a></li>
                    <li><a href="#">Faculty</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Contact</h4>
                <ul>
                    <li><a href="tel:+919929113115">+91 99291 13115</a></li>
                    <li><a href="mailto:info@arisemedicalacademy.com">info@arisemedicalacademy.com</a></li>
                    <li><a href="#">Plot no -26, Tonk Rd, near Pushp Enclave, Krishna Vihar, Sector 5, Pratap Nagar, Jaipur, Rajasthan 302033</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2026 ARISE Medical Academy. All rights reserved.</p>
        </div>
    </footer>

 

    </>
    
  )
}

export default page
