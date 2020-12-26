import React, { ReactText, useState } from 'react';
import { setFetching } from '../../features/app/appActions';
import { RootState } from '../../../store/rootReducer';
import { connect, ConnectedProps } from 'react-redux';
import './_credits.view.scss';

const mapState = (state: RootState) => ({});
const mapDispatch = {
  setFetching,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

interface IChoices {
  [type: string]: {
    index: number;
    name: string;
  };
}

interface IChoiceSets {
  [type: string]: {
    [propertyName: string]: string | number;
  }[];
}

function Credits({ setFetching }: Props) {
  setFetching(false);

  const [choiceSet, setChoiceSet] = useState<IChoices>({
    textFont: {
      index: 0,
      name: "'Assistant', sans-serif",
    },
    titleFont: {
      index: 0,
      name: '"Work Sans", sans-serif',
    },
  });
  const sets = populateChoiceSets();

  const changeSet = (type: string) => {
    setChoiceSet((choices) => {
      const newChoiceIndex = (choices[type].index + 1) % sets[type].length;
      const choiceName = Object.values(sets[type][newChoiceIndex]).join(', ');
      Object.entries(sets[type][newChoiceIndex]).forEach(
        ([propName, propValue]: [string, ReactText]) => {
          document.documentElement.style.setProperty(
            propName,
            propValue.toString()
          );
        }
      );
      return {
        ...choices,
        [type]: {
          index: newChoiceIndex,
          name: choiceName,
        },
      };
    });
  };

  return (
    <>
      <div>
        <button
          {...{ className: 'font', onClick: () => changeSet('titleFont') }}
        >
          <pre {...{ className: 'button-title' }}>Baslik</pre>
          <pre {...{ className: 'button-value' }}>
            {choiceSet['titleFont'].name}
          </pre>
        </button>
        <button {...{ onClick: () => changeSet('textFont') }}>
          <pre {...{ className: 'button-title' }}>Metin</pre>
          <pre {...{ className: 'button-value' }}>
            {choiceSet['textFont'].name}
          </pre>
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2>Başak hakkında</h2>
      <br />
      <p>
        “Yaşam, yüzlerce irili ufaklı kısa hikayeden oluşan bir kolaj” başak
        beykoz
      </p>
      <p>
        İzmir doğumlu Başak, daha çocukluğunda babasının kitaplığını
        kurcalayarak sorularını ve merakını büyütmeye başladı.
      </p>
      <h3>Ara Baslik</h3>
      <br />
      <p>
        Bornova Anadolu Lisesi’ne başladığı sene, Genel Kültür yarışmasında 72
        ilkokul arasından kendi okulunu, İzmir İl birinciliğine iki ekip
        arkadaşıyla taşıdı.
      </p>
      <p>
        Boğaziçi Üniversitesi’nde İşletme Bölümü’nü bitirdikten sonra, yakın
        geçmişe olan kişisel merakı nedeniyle Boğaziçi’nde Modern Türkiye’nin
        Tarihi Yüksek Lisansı’na yöneldi. AB-Türkiye ilişkilerini, ekonomik
        perspektiften Akdeniz ülkeleriyle karşılaştırmalı ele aldığı tezini,
        Prof. Dr. Şevket Pamuk danışmanlığında tamamladı.
      </p>
      <h4>Ara Baslik 2</h4>
      <br />
      <p>
        Bornova Anadolu Lisesi’ne başladığı sene, Genel Kültür yarışmasında 72
        ilkokul arasından kendi okulunu, İzmir İl birinciliğine iki ekip
        arkadaşıyla taşıdı.
      </p>
      <p>
        Boğaziçi Üniversitesi’nde İşletme Bölümü’nü bitirdikten sonra, yakın
        geçmişe olan kişisel merakı nedeniyle Boğaziçi’nde Modern Türkiye’nin
        Tarihi Yüksek Lisansı’na yöneldi. AB-Türkiye ilişkilerini, ekonomik
        perspektiften Akdeniz ülkeleriyle karşılaştırmalı ele aldığı tezini,
        Prof. Dr. Şevket Pamuk danışmanlığında tamamladı.
      </p>
    </>
  );
}

function populateChoiceSets(): IChoiceSets {
  const fontList: [string, number][] = [
    ["'Quicksand', sans-serif", 400],
    ["'Ubuntu', sans-serif", 300],
    ["'Nunito', sans-serif", 300],
    ["'Raleway', sans-serif", 400],
    ["'Raleway', sans-serif", 500],
  ];

  const titleFont = fontList.map((c) => {
    return {
      '--title-font': c[0],
      '--title-font-weight': c[1],
    };
  });

  const textFont = fontList.map((c) => {
    return {
      '--text-font': c[0],
      '--text-font-weight': c[1],
    };
  });
  const sets: IChoiceSets = {
    titleFont,
    textFont,
  };
  return sets;
}

export default connector(Credits);
