import { connect } from 'react-redux';

import Home from '../component/Home';
import {
    fetchTable,
} from '../action';

function getInitData(dispatch) {
    return () => dispatch(fetchTable());
}

function mapStateToProps(state) {
    return {
        isLoading: state.data.isTableFetching,
        table: state.data.entities,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetch: getInitData(dispatch),
    };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

HomeContainer.getInitData = getInitData;

export default HomeContainer;

