import React from "react";

interface Props {
  params: {
    id: number;
  };
}
const UserDetail = ({ params: { id } }: Props) => {
  return <div>UserDetail -- {id}</div>;
};

export default UserDetail;
