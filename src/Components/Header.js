import React from 'react';
import { Link, Card } from 'react-router-dom';

function Header() {
  return (
    <Card>
      <Link to="/podcasts">Podcasts</Link>
      <Link to="/account">My Account </Link>
    </Card>
  );
}

export default Header;
