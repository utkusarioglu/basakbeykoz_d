import React from 'react'
import { connect } from 'react-redux';
import FooterView from '../../components/footer/FooterView';
import { RootState } from '../../store/rootReducer';
import { setIsMenuOpen } from '../app/appActions';

const mapState = (state: RootState) => ({
    refs: state.app.refs,
})

const mapDispatch = { 
    setIsMenuOpen,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function Footer(props: Props) {

    const { 
        setIsMenuOpen, 
        refs 
    } = props;

    const navClickActions = () => {
        setIsMenuOpen(false)
        refs.body?.current?.osInstance()?.scroll(0, 500, 'easeInOutSine');
    }

    return (
        <FooterView 
            navClickActions={navClickActions}
        />
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(Footer);
