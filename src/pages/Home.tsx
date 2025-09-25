import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Founder } from "../components/Founder";
import { Programs } from "../components/Programs";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
// import { Countdown } from "../components/Countdown";
import { Footer } from "../components/Footer";
import { JoinSteps } from "../components/JoinSteps";
import { AskQuestions } from "../components/AskQuestions";
// import { TwoPartPayment } from "../components/TwoPartPayment";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="programs"><Programs /></section>

        <section id="testimonials"><Testimonials /></section>
        <section id="joinsteps"><JoinSteps/></section>
        {/* <section id="joinsteps"><TwoPartPayment/></section> */}
        <section id="founder"><Founder /></section>
        <section id="askquestions"><AskQuestions /></section>
        <section id="faq"><FAQ /></section>
        {/* <section id="countdown"><Countdown /></section> */}
      </main>
      <Footer />
    </div>
  );
}
