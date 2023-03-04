import React from 'react';
import s from "./Form.module.css";

const Form = () => {
    return (
        <section className={s.form} id={'contacts'}>
            <div className={s.container}>
                <div className={s.form__body}>
                    <h2 className={s.form__title}>
                        Contact with me</h2>
                    <form action="" method="get" className={s.form__field}>
                        <input className={s.form__nameInput} type="text" id="name" name="name" placeholder={'Enter your name'} required/>
                        <input className={s.form__mailInput} type="email" id="mail" name="mail" placeholder={'Enter your email'} required/>
                        <textarea rows={15} className={s.form__commentInput} maxLength={300} placeholder="Enter your comment" required/>
                        <span className={s.form__errorField}>{}</span>
                        <div>
                            <input className={s.form__submitBtn} type="submit" value='SEND'/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Form;