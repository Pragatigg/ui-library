import React from "react";
import { Button }  from "antd";
interface InputProps{
    text: string,
    onClick: () => void,
};

function CustomButton(props: InputProps) {
    const { text, onClick } = props;
    return (
        <Button type="primary" onClick={onClick}>{text}</Button>
    );
}

export default CustomButton;
