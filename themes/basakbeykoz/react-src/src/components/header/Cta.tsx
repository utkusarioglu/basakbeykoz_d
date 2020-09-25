import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import './_cta.scss'

const mapState = (state: RootState) => ({
    // singular: state.singular,
    // isDisplaying: state.app.isDisplaying,
    // isFetching: state.app.isFetching,
    refs: state.app.refs,
})

const mapDispatch = { 
    // fetchSingular,
    // setFetching,
    // setDisplaying,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function Cta(props: Props) {
    const { refs } = props;
    const ctaAction = () => refs.body?.current?.osInstance()?.scroll(
        document.getElementsByClassName('wp-block-group')[1] as HTMLElement, 
        1000,
        'easeOutExpo',
        );

    return (
        <div className="Cta">
            <div className="Cta-button" onClick={ctaAction}>
                <div className="Cta-text">
                    Bir adım atın
                </div>
            </div>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Cta);

