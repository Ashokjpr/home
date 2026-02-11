'use client'
import "./styles.css";
import TopSlider from "./TopNavbar";

function page() {
    
  return (
   <>
  
    {/* <!-- Header --> */}
    <header>
        <TopSlider />
        <nav>
            <div className="logo"><img src="/arise-logo.png" /></div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Courses</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Success Stories</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </header>

    {/* <!-- Hero Section --> */}
    <section className="hero" id="home">
        <h1>Master FMGE with Confidence</h1>
        <p>India's Premier FMGE Coaching Institute | Expert Faculty | Proven Results</p>
        <div className="cta-buttons">
            <a href="#courses" className="btn btn-primary">Explore Courses</a>
            <a href="#contact" className="btn btn-secondary">Book Free Demo</a>
        </div>
    </section>

    {/* <!-- Stats Section --> */}
    <section className="stats">
        <div className="stats-container">
            <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Faculty</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
            </div>
        </div>
    </section>

    {/* <!-- Features Section --> */}
    <section className="features" id="features">
        <h2 className="section-title">Why Choose ARISE Medical Academy?</h2>
        <p className="section-subtitle">Comprehensive training designed for your success</p>
        <div className="features-grid">
            <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>Comprehensive Study Material</h3>
                <p>Updated curriculum covering all FMGE topics with detailed notes, diagrams, and clinical correlations aligned with NMC guidelines.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">👨‍⚕️</div>
                <h3>Expert Faculty</h3>
                <p>Learn from experienced doctors and subject specialists who understand FMGE patterns and clinical applications.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h3>Regular Mock Tests</h3>
                <p>Practice with pattern-based mock tests, previous year questions, and detailed performance analysis to track progress.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">💻</div>
                <h3>Online & Offline ClassNclassNamees</h3>
                <p>Flexible learning options with live interactive sessions, recorded lectures, and mobile app access anytime, anywhere.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Doubt Resolution</h3>
                <p>24/7 doubt clearing sessions with dedicated mentors ensuring no query goes unanswered before your exam.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Performance Analytics</h3>
                <p>Advanced AI-driven analytics to identify weak areas and personalized study plans for targeted improvement.</p>
            </div>
        </div>
    </section>

    {/* <!-- Courses Section --> */}
    <section className="courses" id="courses">
        <div className="courses-container">
            <h2 className="section-title">Our FMGE Programs</h2>
            <p className="section-subtitle">Choose the program that fits your preparation timeline</p>

            <div className="course-card">
                <div className="course-image">🎓</div>
                <div className="course-content">
                    <h3>FMGE Complete Course</h3>
                    <ul>
                        <li>12-month comprehensive program</li>
                        <li>All subjects covered with clinical focus</li>
                        <li>200+ hours of live classNamees</li>
                        <li>5000+ practice MCQs</li>
                        <li>Weekly tests & grand tests</li>
                        <li>Personal mentorship</li>
                    </ul>
                    <a href="#contact" className="btn btn-primary">Enroll Now</a>
                </div>
            </div>

            <div className="course-card">
                <div className="course-image">⚡</div>
                <div className="course-content">
                    <h3>FMGE Crash Course</h3>
                    <ul>
                        <li>3-month intensive revision program</li>
                        <li>High-yield topics and mnemonics</li>
                        <li>100+ hours focused teaching</li>
                        <li>Subject-wise mock tests</li>
                        <li>Quick revision notes</li>
                        <li>Exam strategy sessions</li>
                    </ul>
                    <a href="#contact" className="btn btn-primary">Enroll Now</a>
                </div>
            </div>

            <div className="course-card">
                <div className="course-image">🎯</div>
                <div className="course-content">
                    <h3>FMGE Test Series</h3>
                    <ul>
                        <li>30 full-length mock tests</li>
                        <li>Subject-wise tests for all 19 subjects</li>
                        <li>Previous 10 years' questions</li>
                        <li>Detailed solutions with explanations</li>
                        <li>All India ranking system</li>
                        <li>Performance analytics dashboard</li>
                    </ul>
                    <a href="#contact" className="btn btn-primary">Enroll Now</a>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Testimonials --> */}
    <section className="testimonials" id="testimonials">
        <h2 className="section-title">Student Success Stories</h2>
        <p className="section-subtitle">Hear from our successful FMGE candidates</p>
        <div className="testimonial-grid">
            <div className="testimonial-card">
                <p className="testimonial-text">"MedExcel Academy's structured approach and regular testing helped me clear FMGE in my first attempt. The faculty's guidance was invaluable!"</p>
                <p className="testimonial-author">Dr. Priya Sharma</p>
                <p className="testimonial-role">FMGE December 2024 - Rank 47</p>
            </div>
            <div className="testimonial-card">
                <p className="testimonial-text">"The mock tests were exactly like the actual exam. The detailed explanations helped me understand concepts I struggled with for months."</p>
                <p className="testimonial-author">Dr. Rahul Mehta</p>
                <p className="testimonial-role">FMGE June 2024 - Qualified</p>
            </div>
            <div className="testimonial-card">
                <p className="testimonial-text">"Best coaching for FMGE! The online classNamees were interactive, study material was comprehensive, and doubt sessions were extremely helpful."</p>
                <p className="testimonial-author">Dr. Sneha Patel</p>
                <p className="testimonial-role">FMGE December 2024 - Qualified</p>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section className="contact" id="contact">
        <h2>Ready to Start Your FMGE Journey?</h2>
        <p>Join thousands of successful doctors who trusted ARISE Medical Academy</p>
        <div className="cta-buttons">
            <a href="#" className="btn btn-primary">Book Free Counseling</a>
            <a href="#" className="btn btn-secondary">Download Brochure</a>
        </div>
        <div className="contact-info">
            <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>+91 99291 13115</div>
            </div>
            <div className="contact-item">
                <div className=" contact-icon">✉️</div>
                <div>info@arisemedicalacademy.com</div>
            </div>
            <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>Plot no -26, Tonk Rd, near Pushp Enclave, Krishna Vihar, Sector 5, Pratap Nagar, Jaipur, Rajasthan 302033</div>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer>
        <p>&copy; 2026 ARISE Medical Academy. All Rights Reserved.</p>
    </footer>

   </>
  )
}

export default page
