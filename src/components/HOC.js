import React, { useEffect, useState } from 'react'

const withMousePosition = (WrapperComponent) => {
    return (props) => {
        const [mousePosition, setMpusePosition] = useState({
            x: 0,
            y: 0,
        })

        useEffect(() => {
            const handleMpusePositionChange = (e) => {
                setMpusePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            };
            window.addEventListener('mouseover', handleMpusePositionChange);
            return () => {
                window.removeEventListener('mouseover', handleMpusePositionChange);
            }
        }, []);
        return <WrapperComponent {...props} mousePosition={mousePosition} />
    }
}

const PanelMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <div className="BasicTracker">
            <p>Mouse Pointer:</p>
            <div className="Pow">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};


const PointMouseLogger = ({ mousePointer }) => {
    if (!mousePointer) {
        return null;
    }
    return (
        <p>
            ({mousePointer.x}, {mousePointer.y})
        </p>
    );
};

export const PanelMouseTracker = withMousePosition(PanelMouseLogger);
export const PointMouseTracker = withMousePosition(PointMouseLogger);
