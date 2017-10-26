import { connect } from 'react-redux';

import Home from '../component/Home';
import {
    fetchTable,
} from '../action';

function mapStateToProps(state) {
    return {
        isLoading: state.data.isTableFetching,
        table: state.data.entities,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetch: () => dispatch(fetchTable()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

