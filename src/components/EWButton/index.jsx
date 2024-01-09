import { Button } from "antd";
import clsx from "clsx";
import "./button.css";

export const EWButton = ({
  children,
  className,
  id,
  name,
  handelChange,
  type,
  variant,
  value,
  htmlType,
  loading,
  rest,
}) => {
  return (
    <Button
      type={type}
      className={clsx(className, "btn", {
        ["btn-primary"]: variant == "primary",
        ["btn-primary-opacity"]: variant == "primaryOpacity",
      })}
      onClick={handelChange}
      id={id}
      name={name}
      value={value}
      htmlType={htmlType}
      loading={loading}
      {...rest}
    >
      {children}
    </Button>
  );
};
