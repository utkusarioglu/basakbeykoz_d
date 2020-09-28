import React, {useState} from "react";
import { setFetching } from "../../features/app/appActions";
import { RootState } from "../../store/rootReducer";
import { connect } from "react-redux";
import './_credits.scss';

const mapState = (state: RootState) => ({})

const mapDispatch = { 
    setFetching,
}   

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

interface IChoices {
    [type: string]: {
        index: number;
        name: string;
    }
}

interface IChoiceSets {
    [type: string]: {
        [propertyName: string]: string | number}[]
    }

function Credits(props: Props): React.FunctionComponentElement<Props> {

    props.setFetching(false);

    const [choiceSet, setChoiceSet] = useState<IChoices>({
        textFont: {
            index: 0,
            name: "'Assistant', sans-serif",
        },
        titleFont: {
            index: 0,
            name: '"Work Sans", sans-serif',
        }
    });

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

    const fontList: [string, number][] = [
        ["'Work Sans'", 600],
        ["'Istok Web', sans-serif", 400],
        ["'Assistant', sans-serif", 300],
        ["'Baloo Tammudu 2', cursive", 400],
        ["'Kumbh Sans', sans-serif", 300],
        ["'Quicksand', sans-serif", 400],
        ["'Ubuntu', sans-serif", 300],
        ["'Nunito', sans-serif", 300],
        ["'Manrope', sans-serif", 400],

        ["'DreamerySansDemo'", 400],
        ["'BabyGirl'", 400],
        ["'LeahleeSans'", 400],
        ["'OrionSans'", 400],
        ["'AlwaysForeverBold'", 400],
        ["'AlwaysForever'", 400],
        ["'CaviarDreams_Bold'", 400],
        ["'CaviarDreams_BoldItalic'", 400],
        ["'CaviarDreams_Italic'", 400],
        ["'CaviarDreams'", 400],
        ["'MoonbrightDemo'", 400],
        ["'MoonbrightInlineDemo'", 400],
        ["'whateverittakesbold'", 400],
        ["'whateverittakes'", 400],
    ];

    const titleFont = fontList.map((c) => {
        return {
            "--title-font": c[0],
            "--title-font-weight": c[1],
        }
    });

    const textFont = fontList.map((c) => {
        return {
            "--text-font": c[0],
            "--text-font-weight": c[1],
        }
    })


    const sets: IChoiceSets  = {
        titleFont,
        textFont,
    }

    const changeSet = (type: string) => {
  
        
        setChoiceSet((choices) => {
            const newChoiceNo = (choices[type].index + 1) % sets[type].length
            const name = Object.values(sets[type][newChoiceNo]).join(", ")
            Object.entries(sets[type][newChoiceNo]).forEach(([n, v]: any) => {
                document.documentElement.style.setProperty(n, v);
            });   
            return {
                ...choices,
                [type]: {
                    index: newChoiceNo,
                    name,
                }
            }
        });
 
    }

    // const choiceSet1Desc = sets['titleFOnt'][choiceSet]["--titleFont-font"];

    return (
        <div
            className="Canvas page has-FeatureImage has-body-title Credits"
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
                    <div>
                        <button 
                            className="font"
                            onClick={() => changeSet('titleFont')}
                            >
                            <pre className="button-title">Baslik</pre>
                            <pre className="button-value">{choiceSet['titleFont'].name}</pre>
                        </button>
                        <button 
                            onClick={() =>changeSet('textFont')}
                            >
                            <pre className="button-title">Metin</pre>
                            <pre className="button-value">{choiceSet['textFont'].name}</pre>
                        </button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>Başak hakkında</h2>
                    <br />
                    <p>“Yaşam, yüzlerce irili ufaklı kısa hikayeden oluşan bir kolaj” başak beykoz</p>
                    <p>İzmir doğumlu Başak, daha çocukluğunda babasının kitaplığını kurcalayarak sorularını ve merakını büyütmeye başladı.</p>
                    <h3>Ara Baslik</h3>
                    <br />
                    <p>Bornova Anadolu Lisesi’ne başladığı sene, Genel Kültür yarışmasında 72 ilkokul arasından kendi okulunu, İzmir İl birinciliğine iki ekip arkadaşıyla taşıdı.</p>
                    <p>Boğaziçi Üniversitesi’nde İşletme Bölümü’nü bitirdikten sonra, yakın geçmişe olan kişisel merakı nedeniyle Boğaziçi’nde Modern Türkiye’nin Tarihi Yüksek Lisansı’na yöneldi. AB-Türkiye ilişkilerini, ekonomik perspektiften Akdeniz ülkeleriyle karşılaştırmalı ele aldığı tezini, Prof. Dr. Şevket Pamuk danışmanlığında tamamladı.</p>
                    <h4>Ara Baslik 2</h4>
                    <br />
                    <p>Bornova Anadolu Lisesi’ne başladığı sene, Genel Kültür yarışmasında 72 ilkokul arasından kendi okulunu, İzmir İl birinciliğine iki ekip arkadaşıyla taşıdı.</p>
                    <p>Boğaziçi Üniversitesi’nde İşletme Bölümü’nü bitirdikten sonra, yakın geçmişe olan kişisel merakı nedeniyle Boğaziçi’nde Modern Türkiye’nin Tarihi Yüksek Lisansı’na yöneldi. AB-Türkiye ilişkilerini, ekonomik perspektiften Akdeniz ülkeleriyle karşılaştırmalı ele aldığı tezini, Prof. Dr. Şevket Pamuk danışmanlığında tamamladı.</p>
                </article>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Credits);
