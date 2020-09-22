import React from 'react';

interface OwnProps {
    display: string;
    loadingMessage: string;
}

type Props = OwnProps;

function SpinnerView(props: Props) {

    const uploadsDir = process.env.REACT_APP_UPLOADS_DIR;
    const { display, loadingMessage } = props;
    
    return (
        <div 
            className="Spinner"
            style={{display}}>
            <img 
                src={ uploadsDir + "/logo-inline-black.svg"}
                alt="Basak Beykoz"
                className="Spinner-logo"/>
            <p 
                className="Spinner-loadMessage"
                >{ loadingMessage }</p>
        </div>
    )
}

export default SpinnerView