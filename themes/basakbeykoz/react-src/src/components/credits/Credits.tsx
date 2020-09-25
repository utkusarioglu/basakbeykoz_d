import React, {useState} from "react";
import { setFetching } from "../../features/app/appActions";
import { RootState } from "../../store/rootReducer";
import { connect } from "react-redux";

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

    const sets: IChoiceSets  = {
        titleFont: [
            {
                "--title-font": '"Work Sans"',
                "--title-font-weight": 600,
            },
            {
                "--title-font": "'Istok Web', sans-serif",
                "--title-font-weight": 400,
            },
            {
                "--title-font": "'Assistant', sans-serif",
                "--title-font-weight": 300,
            },
            {
                "--title-font": "'Baloo Tammudu 2', cursive",
                "--title-font-weight": 400,
            },
            {
                "--title-font": "'Kumbh Sans', sans-serif",
                "--title-font-weight": 300,
            },
            {
                "--title-font": "'Quicksand', sans-serif",
                "--title-font-weight": 400,
            },
            {
                "--title-font": "'Ubuntu', sans-serif",
                "--title-font-weight": 300,
            },
            
            {
                "--title-font": "'Nunito', sans-serif",
                "--title-font-weight": 300,
                
            },
            {
                "--title-font": "'Manrope', sans-serif",
                "--title-font-weight": 400,
            },
        ],
        textFont: [
            {
                "--text-font": "'Assistant', sans-serif",
                "--text-font-weight": 300,
            },
            {
                "--text-font": '"Work Sans"',
                "--text-font-weight": 600,
            },
            {
                "--text-font": "'Istok Web', sans-serif",
                "--text-font-weight": 400,
            },
            {
                "--text-font": "'Baloo Tammudu 2', cursive",
                "--text-font-weight": 400,
            },
            {
                "--text-font": "'Kumbh Sans', sans-serif",
                "--text-font-weight": 300,
            },
            {
                "--text-font": "'Quicksand', sans-serif",
                "--text-font-weight": 400,
            },
            {
                "--text-font": "'Ubuntu', sans-serif",
                "--text-font-weight": 300,
            },
            
            {
                "--text-font": "'Nunito', sans-serif",
                "--text-font-weight": 300,
                
            },
            {
                "--text-font": "'Manrope', sans-serif",
                "--text-font-weight": 400,
            },
            // {
            //     "--text-font": "'Dosis', sans-serif",
            // },
            // {
            //     "--text-font": "'Dosis', sans-serif",
            // },
            // {
            //     "--text-font": "'Dosis', sans-serif",
            // },
            // {
            //     "--text-font": "'Dosis', sans-serif",
            // },
            // {
            //     "--text-font": "'Dosis', sans-serif",
            // },
            // {
            //     "--text-font": "'Dosis', sans-serif",
            // },
            
        ],
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
                    <div>
                        <button 
                            onClick={() => changeSet('titleFont')}
                            >
                            Baslik: {choiceSet['titleFont'].name}
                        </button>
                        <button 
                            onClick={() =>changeSet('textFont')}
                            >
                            Metin: {choiceSet['textFont'].name}
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
