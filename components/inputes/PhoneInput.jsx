import PhoneInput from "react-phone-input-2";

export const PhoneInputField = ({ field, form, ...props }) => {
    return (
        <div className="input-field">
            <PhoneInput
                placeholder={props.placeholder}
                name={field.name}
                country={'sa'}
                value={field.value}
                onChange={value => {
                    if (!form.touched[field.name]) form.setFieldTouched(field.name);
                    form.setFieldValue(field.name, value);
                }}
            />
        </div>
    );
};