import Card from './components/Card'
import Form from './components/Card/form'
import data from './data/dataAlbum'


function App() {
  return (
    <div className="App">
      <Form />
      <Card img={data.album.images[0].url} title={data.name} artists={data.artists[0].name}/>
    </div>
  );
}

export default App;
