/* Deliberatly exposing all of them in global name space */
// Create an alias for React.createElement to save some typing
var h = React.createElement;
// reminder components should be pascal case. 
class DataList extends React.Component {
  render() {
    var listData = this.props.data.map(function(text, idx){
      return h('li', {key:idx }, text)
    })
    return (
      h('ul', null, listData)
    )
  }
}

class LandingPage extends React.Component {
  render(){
    return (
      h('div', null, 
        h('h1', null, 'Hello World'),
        h(DataList, { data: ['If you are seeing this', 'The Component', 'Is Working'] }),
        h('h2', null, 'Smaller Header')
       )
    )
  }
}
