import React from 'react'

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  style = {},
}) => {
  const baseStyle = {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    transition: "0.3s",
    width: "100%",
  };

  const variants = {
    primary: {
      backgroundColor: "var(--primary)",
      color: "white",
    },
    danger: {
      backgroundColor: "var(--danger)",
      color: "var(--text-white)",
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--primary)",
      border: "1px solid var(--primary)",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant], ...style }}
      onMouseOver={(e) =>
        variant === "primary" &&
        (e.target.style.backgroundColor = "var(--primary-hover)")
      }
      onMouseOut={(e) =>
        variant === "primary" &&
        (e.target.style.backgroundColor = "var(--primary)")
      }
    >
      {text}
    </button>
  );
};

export default Button;
