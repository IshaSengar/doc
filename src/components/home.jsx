import '../css/home.css'

const Homecontent = ()=>{
    return(
        <>
        <div>
        <section class="hero">
            <h2>Your Health is Our Priority</h2>
            <p>We are committed to providing you with the highest quality healthcare.</p>
        </section>


        <section class='services'>
            <h2>Our Services</h2>
            <ol>
                <li>General Checkups</li>
                <li>Specialized Treatments</li>
                <li>Emergency Care</li>
                <li>Health Education</li>
            </ol>
        </section>


        <section class="testimonials">
            <h2>What Our Patients Say</h2>
            <div class="testimonial">
                <p>"Great doctors and friendly staff. I always feel well taken care of."</p>
                <p>- John Doe</p>
            </div>
            <div class="testimonial">
                <p>"The best medical practice in town! Highly recommend."</p>
                <p>- Jane Smith</p>
            </div>
        </section>

        </div>
        </>
    )
}
export default Homecontent