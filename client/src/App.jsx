import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <PageHeader />
      <main className="container mt-3">
        <Routes />
      </main>
      <PageFooter />
    </>
  );
};

export default App;
