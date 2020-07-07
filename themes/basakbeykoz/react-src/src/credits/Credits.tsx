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
            "--brush-lightGray": "#fafafa",
            "--brush-gray": "#859FA4",
            "--brush-darkGray": "#265151",
            "--brush-black": "#1E3735",
            "--brush-lightBlue": "#456266",
            "--brush-darkBlue": "#265151",
            "--brush-lightYellow": "#F6DFB1",
            "--brush-darkYellow": "#FBBB53",
            "--brush-lightGreen": "#81AE9D",
        
            "--filter-white:": "contrast(1) invert(96%) sepia(4%) saturate(282%) hue-rotate(202deg) brightness(102%) contrast(95%)",
            "--filter-darkGray": "invert(34%) sepia(30%) saturate(388%) hue-rotate(139deg) brightness(92%) contrast(86%)",
            "--filter-logo-white": "brightness(0) contrast(1) invert(96%) sepia(4%) saturate(282%) hue-rotate(202deg) brightness(102%) contrast(95%)",
        },
        {
            "--brush-white": "#F4F4F9",
            "--brush-lightGray": "#fafafa",
            "--brush-gray": "#263f7b",
            "--brush-darkGray": "#437777",
            "--brush-black": "#5e7077",
            "--brush-lightBlue": "#7da1a6",
            "--brush-darkBlue": "var(--brush-darkGray)",
            "--brush-lightYellow": "#eee2c8",
            "--brush-darkYellow": "#fbcb5a",
            "--brush-lightGreen": "#85a89f",
        
            "--filter-white:": "brightness(0)",
            "--filter-darkGray": "brightness(0)", 
            "--filter-logo-white": "brightness(0)",
        },
        {
            "--brush-white":  "#F4F4F9",
            "--brush-gray":  "#263f7b",
            "--brush-darkGray":  "#373b44",
            "--brush-black":  "#5e7077",
            "--brush-lightBlue":  "#629874",
            "--brush-darkBlue":  "var(--brush-darkGray)",
            "--brush-lightYellow":  "#a6b9da",
            "--brush-darkYellow":  "#93e0c1",
            "--brush-lightGreen":  "#f2dd8b",
        
            "--filter-white:":  "brightness(0)",
            "--filter-darkGray":  "brightness(0)", 
            "--filter-logo-white":  "brightness(0)",
        },
        {
            "--brush-white":  "#F4F4F9",
            "--brush-lightGray":  "#fafafa",
            "--brush-gray":  "#859FA4",
            "--brush-darkGray":  "#a1bfb1",
            "--brush-black":  "#1b2928",
            "--brush-lightBlue":  "#29717b",
            "--brush-darkBlue":  "#265151",
            "--brush-lightYellow":  "#ffedc9",
            "--brush-darkYellow":  "#f0c43e",
            "--brush-lightGreen":  "#55987f",
        
            "--filter-white:": "brightness(0)",
            "--filter-darkGray": "brightness(0)", 
            "--filter-logo-white": "brightness(0)",
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
