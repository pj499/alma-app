"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "./Header";
import heart from "../assets/images/3dicons-heart-front-color.png"
import rocket from "../assets/images/3dicons-rocket-dynamic-color.png"
import chat from "../assets/images/3dicons-chat-bubble-dynamic-color.png"
import mail from "../assets/images/3dicons-mail-front-color.png"

const LeadForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        website: "",
        visaCategories: [] as string[],
        additionalInfo: "",
        resume: null as File | null,
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, resume: e.target.files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.country || !formData.website || !formData.visaCategories.length) {
            setError("Please fill in all required fields.");
            return;
        }else if(!formData.resume){
            setError("Please upload your resume.");
            return;
        }

        const form = new FormData();
        form.append("firstName", formData.firstName);
        form.append("lastName", formData.lastName);
        form.append("email", formData.email);
        form.append("country", formData.country);
        form.append("website", formData.website);
        form.append("additionalInfo", formData.additionalInfo);
        if (formData.resume) {
            form.append("resume", formData.resume);
        }

        formData.visaCategories.forEach((category) => {
            form.append("visaCategories[]", category);
        });

        const response = await fetch("/api/submitForm", {
            method: "POST",
            body: form,
        });

        if (response.ok) {
            setSubmitted(true);
        } else {
            setError("There was an error submitting your form.");
        }

        setFormData({ ...formData, resume: null });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-black">
            <Header />
            {!submitted ? (

                <div className="p-6 max-w-lg mx-auto mt-80 md:max-w-xl lg:max-w-xl text-center">
                    <Image src={chat} alt="Heart Icon" className="w-30 mx-auto" />
                    <h2 className="text-2xl font-bold text-center mb-4 text-black">
                        Want to understand your visa options?
                    </h2>
                    <p className="text-center mb-6 font-bold text-black">
                        Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.
                    </p>
                    <div className="p-6 max-w-md mx-auto md:max-w-md lg:max-w-l">
                        {error && <p className="text-red-500 text-center">{error}</p>}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="w-full p-2 border rounded-md border-gray-300"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="w-full p-2 border rounded-md mt-2 border-gray-300"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-2 border rounded-md border-gray-300"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="country"
                                placeholder="Country of Citizenship"
                                className="w-full p-2 border rounded-md border-gray-300"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="website"
                                placeholder="LinkedIn / Personal Website URL"
                                className="w-full p-2 border rounded-md border-gray-300"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="resume"
                                className="relative top-5 px-8 py-4 border rounded-md cursor-pointer bg-gray-200 text-gray-500 border-gray-300 text-center mx-auto "
                            >
                                {formData.resume ? formData.resume.name : "Upload Resume / CV"}
                            </label>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <Image src={rocket} alt="Heart Icon" className="mt-20 w-20 mx-auto" />
                            <p className="font-semibold text-xl">Visa categories of interest?</p>
                            <div className="flex flex-col">
                                {["O-1", "EB-1A", "EB-2 NIW", "I don't know"].map((option) => (
                                    <label key={option} className="flex items-center">
                                        <input
                                            className="cursor-pointer mr-2 border-gray-300"
                                            type="checkbox"
                                            name="visaCategory"
                                            value={option}
                                            onChange={(e) => {
                                                const { value, checked } = e.target;
                                                setFormData((prevData) => {
                                                    const visaCategories = checked
                                                        ? [...prevData.visaCategories, value]
                                                        : prevData.visaCategories.filter((category) => category !== value);
                                                    return { ...prevData, visaCategories };
                                                });
                                            }}

                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                            <Image src={heart} alt="Heart Icon" className="mt-4 w-15 mx-auto" />

                            <p className="mt-4 font-semibold text-xl">How can we help you?</p>
                            <textarea
                                name="comments"
                                placeholder="What is your current status and when does it expire?
What is your past immigration history? Are you looking for long-term permanent residency of short term employment visa or both? Are there any timeline considerations?"
                                className="w-full p-2 border rounded-md mt-2 min-h-40 text-black"
                                onChange={handleChange}
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full mt-4 bg-black text-white p-2 rounded-md cursor-pointer hover:bg-gray-800"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="text-center p-6 max-w-l mx-auto md:max-w-md lg:max-w-l">
                    <Image src={mail} alt="Heart Icon" className="w-25 mx-auto mt-40" />
                    <h2 className="text-xl font-bold mb-10 mt-4">Thank You!</h2>
                    <p className='font-bold mb-9'>Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai.</p>
                    <button
                        className="mt-4 bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 font-bold"
                        onClick={() => setSubmitted(false)}
                    >
                        Go Back to Homepage
                    </button>
                </div>
            )}
        </div>
    );
};

export default LeadForm;
