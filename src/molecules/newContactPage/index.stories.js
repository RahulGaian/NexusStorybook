import React, { useState } from "react";
import FormComponent from ".";

export default {
    title: "Components / ModalForm1",
    component: FormComponent
}

export const Default = () => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return <FormComponent handleInputChange={handleInputChange} formData={formData} />;
};
