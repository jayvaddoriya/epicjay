import { Avatar, Badge } from "antd";

export const EWAvatar = ({ count, shape, size, icon, src     }) => {
  return (
    <Badge count={count}>
      <Avatar size={size} shape={shape} icon={icon} src={src} />
    </Badge>
  );
};
