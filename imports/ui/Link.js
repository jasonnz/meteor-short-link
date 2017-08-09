import React from 'react';
import LinksList from '../ui/LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default class Link extends React.Component {

  render() { 
    return (
      <div>
        <PrivateHeader title="Your links"/>
        <LinksList/>
        <AddLink/>
      </div>
    );
  }
};