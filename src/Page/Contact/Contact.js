import React, { useRef, useState } from "react";
import img from '../../Images/contact.jpg'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_tecb3rm", "template_5dte0es", form.current, "Y79F1DeAStuuh47PH"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    // form.reset();
                    form.current.reset();

                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <div className="container bg">
                {/* heading row  */}
                <div className="row mt-5">
                    <h1 className='text text-center  mt-5'> Contact Us</h1>
                </div>
                <div className='fs-1 text-center'>
                    <a href="mailto:mohitverma8817@gmail.com"><i className='fa fa-envelope m-4 text-info'></i></a>
                    <a href="tel:91 8076766168"><i className='fa fa-phone m-4 text-info'></i></a>
                    <a href="https://wa.me/+91 8076766168/"><i className='fa fa-whatsapp m-4 text-info'></i></a>
                </div>
                {/* form row  */}

                <div className="row mt-5">
                    {/* right side col  */}
                    <div className="col-lg-6">
                        <img src={img} alt="" className='w-100' />
                    </div>

                    {/* left side col  */}
                    <div className="col-lg-6 mt-4">
                        <form className='mt-3' ref={form} onSubmit={sendEmail}>
                            <div class="form-group m-3 ">
                                <input type="name" name="to_name" class="form-control w-75 p-3" placeholder="Name" required />
                            </div>
                            <div class="form-group m-3 ">
                                <input type="email" name="from_name" class="form-control w-75 p-3" placeholder="Email" required />
                            </div>
                            <div class="form-group m-3 ">
                                <textarea type="textarea" name="message" class="form-control w-75 p-3" placeholder="Comment" required />
                            </div>

                            <button className='btn btn-warning m-3' value="Send">Send Mesg </button>

                            <h3 className='m-4 text  text-danger fs-4'>{done && "Thanks for Contact me"}</h3>
                        </form>
                    </div>


                </div>

            </div>


        </div>

    )
}

export default Contact