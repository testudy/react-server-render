import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Detail from '../component/Detail';
import {
    fetchDetail,
} from '../action';

function mapStateToProps(state, ownProps) {
    const title = ownProps.match.params.title;
    const entity = state.data.entities.find(item => item.title === title) || {};
    
    return Object.assign({
        isLoading: state.data.isDetailFetching,
    }, entity);
}

function mapDispatchToProps(dispatch, ownProps) {
    const title = ownProps.match.params.title;
    return {
        fetch: () => dispatch(fetchDetail(title)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));

