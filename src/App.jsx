import fotoPerfil from '/public/b_faça_esse_menino_de_.png'
import imgIsrael from '../public/e.png'
import imgPalestina from '../public/b.jpg'
import imgGuerra from '../public/o.jpg'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Criador</a>
        <a href="#s2">História de Israel</a>
        <a href="#s3">História da Palestina</a>
        <a href="#s4">História da Guerra</a>
        <a href="#s5">Opiniões Públicas</a>
        <a href="#s6">Vídeo</a>
      </nav>

      <main>
        
        <section className={styles.section} id="s1">
          <h1 className={styles.sectionTitle}>Criador</h1>
          <div className={styles.card}>
            <img className={styles.imgPerfil} src={fotoPerfil} alt="Criador" />
            <div>
              <h2 className={styles.title}>Sobre mim</h2>
              <p className={styles.paragraph}>
                Olá! Eu sou o criador deste site. Curto tecnologia, programação e estudo bastante
                sobre história e geopolítica. Criei este projeto para apresentar conteúdos históricos
                de um jeito mais claro, bonito e fácil de navegar.
              </p>
            </div>
          </div>
        </section>

        
        <section className={styles.section} id="s2">
          <h1 className={styles.sectionTitle}>História de Israel</h1>
          <img src={imgIsrael} className={styles.sectionImg} alt="Israel" />
          <p className={styles.textBlock}>
            Israel foi criado em 1948, logo após os eventos da Segunda Guerra Mundial, como um Estado
            destinado ao povo judeu. Desde sua formação, o país se tornou um ponto central de debates
            políticos e disputas territoriais na região.
          </p>
        </section>

        
        <section className={styles.section} id="s3">
          <h1 className={styles.sectionTitle}>História da Palestina</h1>
          <img src={imgPalestina} className={styles.sectionImg} alt="Palestina" />
          <p className={styles.textBlock}>
            A Palestina possui uma história muito antiga, marcada pela presença de diversos povos ao
            longo dos séculos. Atualmente, é reconhecida por muitos países como um Estado, embora ainda
            enfrente conflitos territoriais e desafios diplomáticos.
          </p>
        </section>

        
        <section className={styles.section} id="s4">
          <h1 className={styles.sectionTitle}>História da Guerra</h1>
          <img src={imgGuerra} className={styles.sectionImg} alt="Guerra" />
          <p className={styles.textBlock}>
            A guerra envolve questões políticas, culturais, religiosas e territoriais profundas. É um
            conflito complexo, com impactos que ultrapassam fronteiras e influenciam debates no mundo
            inteiro.
          </p>
        </section>

        
        <section className={styles.section} id="s5">
          <h1 className={styles.sectionTitle}>Opiniões Públicas</h1>
          <p className={styles.textBlock}>
            Eu não tenho uma opinião definitiva sobre essa guerra, mas acredito que ambos os lados têm
            responsabilidades e erros. No fim, quem mais sofre são as pessoas comuns, e qualquer
            conflito prolongado acaba criando ainda mais dor.
          </p>
        </section>

        
        <section className={styles.section} id="s6">
          <h1 className={styles.sectionTitle}>Vídeo Explicativo</h1>
          <p className={styles.textBlock}>Aqui está um vídeo simples explicando melhor o conflito:</p>

          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_TBmvegNu-I?si=znLHskBElTySLItP"
              title="Explicação da guerra"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
    </>
  )
}
