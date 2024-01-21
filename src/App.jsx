import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/106/300/200"
          imgAlt="Card Image 1"
          description="Mayukh 2024 Season"
          buttonText="Learn More"
          link="card1"
        />

        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          description="Vice president of India at Banasthali Vidyapith"
          buttonText="Learn More"
          link="card2"
        />
        
      </div>
    </div>
    
  );
}
export default App;
