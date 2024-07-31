export const NAVBAR = "NAVBAR"


export const navbartoggle = (abc) => {
    // console.log("abc is ==>",abc)
    return {
      type: NAVBAR,
      payload:abc
    };
  };


  