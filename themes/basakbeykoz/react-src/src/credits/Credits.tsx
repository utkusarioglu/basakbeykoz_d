import React, {useState} from "react";
import { setFetching } from "../app/appActions";
import { RootState } from "../app/rootReducer";
import { connect } from "react-redux";

const mapState = (state: RootState) => ({})

const mapDispatch = { 
    setFetching,
}   

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function Credits(props: Props): React.FunctionComponentElement<Props> {

    props.setFetching(false);
    window.scrollTo(0,0);

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
            "--brush-white": "#F4F4F9",
            "--brush-lightGray": "rgba(230,230,230,0.75)",
            "--brush-gray": "#9C9C9D",
            "--brush-darkGray": "#265151",
            "--brush-black": "#1E3735",
            "--brush-lightBlue": "#AEC0C7",
            "--brush-darkBlue": "#1E3735",
            "--brush-lightYellow": "#F6DFB1",
            "--brush-darkYellow": "#FBBB53",
            "--brush-lightGreen": "#81AE9D",
        
            "--bg-blue-filter": "invert(34%) sepia(30%) saturate(388%) hue-rotate(139deg) brightness(92%) contrast(86%)",
            "--logo-white-filter": "brightness(0) invert(100%) sepia(1%) saturate(4410%) hue-rotate(181deg) brightness(94%) contrast(107%)",
        },
        {
            "--brush-white": "#F4F4F9",
            "--brush-lightGray": "rgba(230,230,230,0.75)",
            "--brush-gray": "#9C9C9D",
            "--brush-darkGray": "#265151",
            "--brush-black": "#1E3735",
            "--brush-lightBlue": "#AEC0C7",
            "--brush-darkBlue": "#1E3735",
            "--brush-lightYellow": "#F6DFB1",
            "--brush-darkYellow": "#FBBB53",
            "--brush-lightGreen": "#81AE9D",
        
            "--bg-blue-filter": "invert(34%) sepia(30%) saturate(388%) hue-rotate(139deg) brightness(92%) contrast(86%)",
            "--logo-white-filter": "brightness(0) invert(100%) sepia(1%) saturate(4410%) hue-rotate(181deg) brightness(94%) contrast(107%)",
        }
    ]



    const changeColors = () => {
        
        Object.entries(COLOR_SETS[colorSet]).forEach(([n, v]: any) => {
            document.documentElement.style.setProperty(n, v);
        })
        setColorSet((set) => ++set % COLOR_SETS.length);
    }



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

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Credits);
