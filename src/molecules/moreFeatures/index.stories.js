import React from 'react';
import MoreFeatures from './index';
import { moreFeaturesData } from './data';

export default {
    title: 'components/MoreFeatures',
    component: MoreFeatures
};

export const moreFeatures = () => <MoreFeatures data={moreFeaturesData.moreFeatures}/>;



export const Argstest = {
  args: {
    data:{
        mainText: 'Explore more features in the SwissBorg app'

    }
  }
};
