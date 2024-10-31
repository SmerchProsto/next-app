import React, { useState } from "react";
import { Container } from '@mui/material';
import { ContactFormBlock, FormField, SubmitButton } from "@/components/ContactForm/lib/styles/index.";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Form submitted successfully');
                setTouched({ name: false, email: false, message: false });
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Container>
            <ContactFormBlock onSubmit={handleSubmit} className="contact-form">
                <FormField className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={touched.name && !formData.name ? 'invalid' : ''}
                    />
                </FormField>
                <FormField className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={touched.email && !formData.email ? 'invalid' : ''}
                    />
                </FormField>
                <FormField className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={touched.message && !formData.message ? 'invalid' : ''}
                    />
                </FormField>
                <SubmitButton type="submit" variant="contained" color="primary">
                    Submit
                </SubmitButton>
            </ContactFormBlock>
        </Container>
    );
}
