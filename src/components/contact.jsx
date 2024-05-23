import '../css/contact.css'

const Contactuscontent = ()=>{
    return(
    <>
     <section class="contact-form">
        <h2>Send us a message</h2>
        <form action="#" method="post">
            <label for='name'>Name:</label>
            <input type="text" id='name' name='name' required/>
            <label for='email'>Email:</label>
            <input type="email" id='email' name='email' required/>
            <label for='msg'>Message:</label>
            <textarea name="msg" id="msg" rows="5"></textarea>
            <button type='submit'>Send</button>
        </form>
     </section>
    </>
    )
}
export default Contactuscontent