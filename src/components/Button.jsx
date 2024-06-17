/* eslint-disable react/prop-types */

function Button({
    children,
    bgColor = "bg-[#fd356e]",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg text-lg font-medium hover:bg-[#fc5785] ${bgColor} ${textColor} ${className} `} {...props}>
            {children}
        </button>
    );
}

export default Button