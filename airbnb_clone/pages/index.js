import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png" />
      </Head>

      {/* Components */}
      <Header />
      {/* Banner   */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>
        
          {exploreData?.map[({ img, distance, location })=> (
            <SmallCard key={img} img={img} distance={distance} location={location}/>
          )]}
        </section>
      </main>

    </div>
  ); 
};

export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp")
  .then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData
    }
  }
}
