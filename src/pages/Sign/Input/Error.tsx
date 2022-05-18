import React from 'react';

interface ErrorProps {
    children: React.ReactNode;
}
export default function Error({ children }: ErrorProps) {
    return <p style={{ color: 'red', textAlign: 'center' }}>{children}</p>;
}
