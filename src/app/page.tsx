import Home from "./pages/home";
import { Footer } from "./sections/footer";

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="min-h-screen bg-beige">
      <div className="p-10">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
