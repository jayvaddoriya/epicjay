import { Form, Input } from "antd";
import clsx from "clsx";
import "./input.css";

export const EWInput = ({
  parentClass,
  placeholder,
  className,
  lable,
  lableClassName,
  id,
  name,
  value,
  rules,
}) => {
  return (
    <div className={parentClass}>
      {lable && (
        <lable htmlFor={id} className={lableClassName}>
          {lable}
        </lable>
      )}
      <Form.Item name={name} rules={rules}>
        <Input
          placeholder={placeholder}
          className={clsx(className, "input")}
          value={value}
        />
      </Form.Item>
    </div>
  );
};
