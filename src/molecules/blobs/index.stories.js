import React from 'react';
import Blobs from '.';
export default {
  title: "components/blob",
  component: Blobs,
};

export const blob = () => (
  <Blobs color='blue' opacity='0.3' left={"0px"} />
);

export const yellowblob = () => (
    <Blobs color='yellow' opacity='0.3' left={"0px"} />
  );
  