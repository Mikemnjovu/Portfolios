import React from "react";

import Card from "./Shared/Card/Card";

function Api(props) {
  const userApi = [
    {
      firstName: "max ",
      lastName: "Papandreia",
      postion: "Graphics Designer",
      bio: "Ok and do  oka k sjsjdjfdfkjf hdjhf jd dksjsd sds ",
      imgPath: "",
    },
  ];
  return (
    <div>
      <Card userApi={userApi} />
    </div>
  );
}

export default Api;
