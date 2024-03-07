import Header from "./Header"
import Footer from "./Footer";

function LaYerbaMate() {
    return(
        <>
        <Header />
        <main>
            <article>
            <section className='ArticuloSobrePagina-section'>
                  <h1>Yerba Mate</h1>
                  <div>
                    <h2>Historia de la Yerba Mate</h2>
                    <p>Cultivadas en la exuberante selva subtropical de Sudamérica, las hojas de la yerba mate, extraídas de un arbusto de hoja perenne, son cosechadas cuidadosamente a mano. Posteriormente, pasan por un proceso de secado, molienda y envejecimiento controlado, que puede extenderse de nueve a 24 meses. Después de este tratamiento, la yerba mate resultante exhibe una concentración de antioxidantes superior a la de cualquier otra infusión a base de hierbas.<br />
                      <br />
                      Los indígenas guaraníes de Paraguay, los pioneros en la apreciación de la yerba mate, la consideraban un regalo divino. Alejandra Lapietra, sommelier argentina, explica: "El mate se utilizaba como medio de comunicación con las divinidades y también como medicina".<br />
                      <br />
                      "En ese entonces, los guaraníes empleaban una calabaza para preparar las hojas y las filtraban utilizando los dientes o un precursor directo de la bombilla, conocido como tacuapi (caña de bambú) elaborado con cestería de tacuara (palo de bambú) como filtro", añade Lapietra. Este ritual guaraní de compartir mate como parte de una reunión social ha perdurado hasta nuestros días.<br />
                      <br />
                      Otras comunidades tribales, como los charrúas de Uruguay y los tupíes de Brasil, también consumían mate de diversas formas. Algunos masticaban las hojas en busca de beneficios fitoterapéuticos. Según Lapietra, "masticar las hojas era una práctica para extraer la máxima cantidad de ingredientes bioactivos que brindaban energía y vitalidad".<br />
                      <br />
                      Las plantas utilizadas para la producción de mate eran consideradas auténticos tesoros verdes por los diversos grupos tribales en toda Sudamérica. Valeria Trápaga, sumiller argentina de mate y autora de "El mate en cuerpo y alma", afirma: "El mate era una especie de moneda de cambio con un comercio que se extendía mucho más allá de la región de producción".<br />
                      <br />
                      Cuando los misioneros jesuitas llegaron a Paraguay en el siglo XVII, inicialmente prohibieron el consumo de mate, considerándolo un hábito poco saludable. Según Jerónimo Lagier, autor de "Las aventuras de la yerba mate", "En 1611, Marín Negrón, gobernador de Asunción, castigó a quienes fueran sorprendidos con yerba en la mano con 100 azotes de látigo". Sin embargo, hacia 1630, la prohibición llegó a su fin y se legalizó tanto el consumo como el comercio del mate. "Los jesuitas descubrieron que el mate no era un alucinógeno, sino que, gracias a su contenido de cafeína, calma la sed y el hambre, siendo una fuente de energía. Para ellos, resultaba evidente la ventaja económica de cultivar la planta", concluye Lapietra.</p>
                  </div>
                  <div>
                    <h2>Tipos de molienda</h2>
                    <div>
                      <h3>Con palo</h3>
                      <p>Estas yerbas deben tener no menos de 70% de hojas y no mas de 30% de palo, aunque esta proporción puede variar según lo que busquen. La presencia de polvo en estas yerbas es baja, lo que las hace más suaves y menos duraderas. En comparación con las yerbas sin palo, estas tienen hojas más gruesas, lo que contribuye a su sabor y longevidad.</p>
                    </div>
                    <div>
                      <h3>Sin palo</h3>
                      <p>Estas yerbas deben tener no menos del 90% de hoja y no más del 10% de palo, aunque esta proporción puede variar según las preferencias individuales. La presencia de polvo en estas yerbas es alta, lo que las hace más fuertes, intensas y duraderas. En comparación con las yerbas con palo, estas tienen hojas más finas, lo que contribuye a su sabor y longevidad.</p>
                    </div>
                    <div>
                      <p>Existen otras variaciones en la molienda, como la opción de moler más grueso o más fino, con más palo, menos palo, más polvo o menos polvo, etc. Sin embargo, estas son características más específicas de las yerbas.</p>
                    </div>
                    <div>
                      <h3>Componentes de la yerba mate</h3>
                      <p>La hoja gruesa constituye el esqueleto de la yerba mate, proporcionándole estructura y manteniendo de manera uniforme su sabor.<br />
                      <br />Por otro lado, la hoja fina aporta intensidad y carnosidad a la infusión, prolongando las cebadas gracias a su vigor.<br />
                      <br />Los palos, valiosos componentes de dilución, facilitan la nivelación de los sabores y contribuyen a la suavidad de la mezcla.<br />
                      <br />En cuanto al polvo de hoja, es un componente virtuoso que añade aroma, durabilidad y una agradable espumosidad, mejorando el aspecto general de la yerba mate.</p>
                    </div>
                  </div>
                </section>
            </article>
        </main>
        <Footer />
        </>
    )
}

export default LaYerbaMate;