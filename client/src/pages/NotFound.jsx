import React from 'react';

function NotFound(props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: '#E6E6FA' }}>
            <div className="rounded-3xl px-16 py-12 bg-white/95">
                <h1 className="text-8xl text-indigo-600 m-0">404</h1>
                <h2 className="text-2xl text-indigo-500 my-5">Page Not Found</h2>
                <p className="text-slate-500 text-lg">
                    The page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
}

export default NotFound;