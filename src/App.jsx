import Header from './components/Header';
import GreetingCard from './components/GreetingCard';

function App() {
  const cards = [
    { title: "Happy Birthday!", message: "Wishing  day filled with joy!" },
    { title: "Congrats!", message: "Great job!" },
    { title: "Thanks", message: "Thanks for your support!" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="flex flex-wrap justify-center p-4">
        {cards.map((card, index) => (
          <GreetingCard key={index} title={card.title} message={card.message} />
        ))}
      </main>
    </div>
  );
}

export default App;