import beer from '../assets/logo/kroHome.jpg'

const Home = (props) =>{
    return (
        <section>
            <p id="home-presentation">Le site de vente de bière le plus côté du marché du poivrot! Ici vous trouverez les meilleurs bières, de la 8°6 à la kronembourg. Nous mettons un point d'honneur à vous la facturer chère et à vous la livrer tiède.</p>
            <img src={beer} id="homerHome"/>
        </section>
    )
}

export default Home