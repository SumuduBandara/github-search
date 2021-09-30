import './App.css';
import SearchAction from './redux/search/action';

import { connect } from 'react-redux';

const App = ({ tableData, searchGithub, resetSearchdata }) => {

  const handleInput = (e) => {
    console.log('input: ', e.target.value);
    if (e.target.value) {
      searchGithub(e.target.value);
    } else {
      console.log('in the else');
      resetSearchdata();
    }
  };

  const renderTableData = () => {
    console.log('tableData: ', tableData);
    return tableData.map((data, i) => {
      return (
        <tr key={i}>
          <td>{data.projectName}</td>
          <td>{data.stargazersCount}</td>
          <td>{data.watchersCount}</td>
        </tr>
      );
    });
  };

  return (
    <div className="App">
      <h1>Search on Github</h1>
      <input type='text' onChange={handleInput}></input>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Stargazers Count</th>
            <th>Watchers Count</th>
          </tr>
        </thead>
        <tbody>
          { renderTableData() }
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  tableData: state.search.searchData
});

const mapDispatchToProps = dispatch => {
  return {
    searchGithub: (keyword) => dispatch(SearchAction.searchGitHub(keyword)),
    resetSearchdata: () => dispatch(SearchAction.resetData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
