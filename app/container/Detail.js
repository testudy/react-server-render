import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Detail from '../component/Detail';
import {
    fetchDetail,
} from '../action';

function getInitData(dispatch, params) {
    const title = params.title;
    return () => dispatch(fetchDetail(title));
}

function mapStateToProps(state, ownProps) {
    const title = decodeURIComponent(ownProps.match.params.title);
    const entity = state.data.entities.find(item => item.title === title) || {};
    
    return Object.assign({
        isLoading: state.data.isDetailFetching,
    }, entity);
}

function mapDispatchToProps(dispatch, ownProps) {
    const title = ownProps.match.params.title;
    return {
        fetch: getInitData(dispatch, ownProps.match.params),
    };
}

const DetailContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
DetailContainer.getInitData = getInitData;

export default DetailContainer;

