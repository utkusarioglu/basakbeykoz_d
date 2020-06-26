import React, {useState} from "react";

function Credits() {

    const [colorSet, setColorSet] = useState(0);

    const uploads_dir = process.env.REACT_APP_UPLOADS_DIR as string;
    const featureImageName = "yazilar-feature-image";
    const featureImagePath = `${uploads_dir}/${featureImageName}-`;
    const srcSet = [
        "scaled.jpg 2560w", 
        "300x196.jpg 300w", 
        "1024x669.jpg 1024w", 
        "768x501.jpg 768w", 
        "1536x1003.jpg 1536w", 
        "2048x1337.jpg 2048w"
    ]
    .map((variation) => featureImagePath + variation)
    .join(",");

    const COLOR_SETS: {[key: string]: string}[] = [
        {
            "--white": "#F4F4F9",
            "--black": "#071013",
            "--blue": "#456266",
            "--yellow": "#E9B44C",
            "--green": "#81AE9D",
            "--beige": "#F6D697",
        },
        {
            "--white": "#FFFFFF",
            "--black": "#000000",
            "--blue": "#0000FF",
            "--yellow": "#FFFF00",
            "--green": "#00FF00",
            "--beige": "#005500",
        }
    ]



    const changeColors = () => {
        setColorSet((set) => ++set % COLOR_SETS.length);
    }

    Object.entries(COLOR_SETS[colorSet]).forEach(([n, v]: any) => {
        console.log(n,v )
        document.documentElement.style.setProperty(n, v);
    })


    return (
        <div
            className="Canvas page has-FeatureImage has-body-title"
            >
            <div className="Canvas-decor">
                <div className="FeatureImage-on" >    
                    <img 
                        width="2560" 
                        height="1671" 
                        src={`${featureImageName}scaled.jpg`} 
                        alt="Feature" 
                        srcSet={srcSet} 
                        sizes="(max-width: 2560px) 100vw, 2560px" />
                </div>
                <h2 className="Canvas-featureTitle text-blue">Credits</h2>
            </div>
                <h2 className="Canvas-articleTitle text-blue">Credits</h2>
                <article>
                    <h3>Current Color Set: {colorSet.toString()}</h3>
                    <button 
                        onClick={changeColors}>Change white</button>
                </article>
        </div>
    )
}

export default Credits;