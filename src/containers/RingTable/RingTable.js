import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

import { fetchRings } from 'ducks/modules/rings';

const getBadgeVariant = status => {
  switch (status) {
    case 'Complete':
      return 'success';

    case 'Ongoing':
      return 'warning';

    case 'Failed':
      return 'danger';

    case 'Aborted':
      return 'dark';

    default:
      return 'secondary';
  }
};

class RingTable extends Component {
  state = { tableRows: [], allData: [] };

  componentDidMount() {
    this.props.fetchRings();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      rolloutAction: prevAction,
      selectedStatus: prevStatus,
      rings: prevRings,
    } = prevProps;
    const { rolloutAction, selectedStatus, rings } = this.props;
    const { allData } = this.state;

    if (prevRings.rings !== rings.rings) {
      this.setState({ tableRows: rings.rings, allData: rings.rings });
    }

    if (prevAction !== rolloutAction) {
      let modifiedData = allData;

      if (rolloutAction === 'start') {
        modifiedData = modifiedData.map(item => ({
          ...item,
          status: item.status === 'Paused' ? 'Ongoing' : item.status,
        }));
      } else if (rolloutAction === 'pause') {
        modifiedData = modifiedData.map(item => ({
          ...item,
          status: item.status === 'Ongoing' ? 'Paused' : item.status,
        }));
      } else if (rolloutAction === 'abort') {
        modifiedData = modifiedData.map(item => ({
          ...item,
          status:
            item.status === 'Ongoing' || item.status === 'Paused'
              ? 'Aborted'
              : item.status,
        }));
      }
      this.setState({ allData: modifiedData });
    }

    if (prevStatus !== selectedStatus || prevState.allData !== allData) {
      const selectedData =
        selectedStatus === 'All'
          ? allData
          : allData.filter(data => data.status === selectedStatus);

      this.setState({ tableRows: selectedData });
    }
  }

  render() {
    const { isFetching, hasError } = this.props.rings;
    return (
      <>
        {isFetching ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spinner animation='border' variant='secondary' />
          </div>
        ) : hasError ? (
          <Alert variant='danger'>Fetching rings error...</Alert>
        ) : (
          <Table bordered>
            <thead>
              <tr>
                <th></th>
                <th>Rollout Status</th>
                <th>Windows</th>
                <th>Linux</th>
                <th>Unix</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableRows.map((row, index) => (
                <tr key={`ring-row-${index}`}>
                  <td>{row.target}</td>
                  <td>
                    <Badge variant={getBadgeVariant(row.status)}>
                      {row.status}
                    </Badge>
                  </td>
                  <td>{row.windows}</td>
                  <td>{row.linux}</td>
                  <td>{row.unix}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  rings: state.rings,
  selectedStatus: state.statusSelection.status,
  rolloutAction: state.rolloutOperation.action,
});

const mapDispatchToProps = dispatch => ({
  fetchRings: () => dispatch(fetchRings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RingTable);
