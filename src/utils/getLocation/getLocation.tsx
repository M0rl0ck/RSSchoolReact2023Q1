import React from 'react';
import { useLocation } from 'react-router-dom';

export interface LocationProps {
  location: ReturnType<typeof useLocation>;
}

export const getLocation = <Props extends LocationProps>(Component: React.ComponentType<Props>) => {
  return (props: Omit<Props, keyof LocationProps>) => {
    const location = useLocation();

    return <Component {...(props as Props)} location={location} />;
  };
};
