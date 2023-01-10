import * as React from 'react';
import { Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <div className="page-main">
      <Outlet />
    </div>
  );
}
