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

        <Section id="s1" title="Criador">
          <div className={styles.card}>
            <img
              className={styles.imgPerfil}
              src={fotoPerfil}
              alt="Foto do criador do site"
            />
            <div>
              <h2 className={styles.title}>Sobre mim</h2>
              <p className={styles.paragraph}>
                Olá! Eu sou o criador deste site, gosto de batata.
              </p>
            </div>
          </div>
        </Section>

        <Section id="s2" title="História de Israel">
          <ImageBlock src={imgIsrael} alt="Imagem de Israel" />
          <TextBlock>
            Israel foi criado em 1948, logo após os eventos da Segunda Guerra Mundial, como um Estado
            destinado ao povo judeu. Desde sua formação, o país se tornou um ponto central de debates
            políticos e disputas territoriais na região.
          </TextBlock>
        </Section>

        <Section id="s3" title="História da Palestina">
          <ImageBlock src={imgPalestina} alt="Imagem da Palestina" />
          <TextBlock>
            A Palestina possui uma história muito antiga, marcada pela presença de diversos povos ao
            longo dos séculos. Atualmente, é reconhecida por muitos países como um Estado, embora ainda
            enfrente conflitos territoriais e desafios diplomáticos.
          </TextBlock>
        </Section>

        <Section id="s4" title="História da Guerra">
          <ImageBlock src={imgGuerra} alt="Imagem da guerra" />
          <TextBlock>
            A guerra envolve questões políticas, culturais, religiosas e territoriais profundas. É um
            conflito complexo, com impactos que ultrapassam fronteiras.
          </TextBlock>
        </Section>

        <Section id="s5" title="Opiniões Públicas">
          <TextBlock>
            Eu não tenho uma opinião definitiva sobre essa guerra, mas acredito que ambos os lados têm
            responsabilidades e erros. No fim, quem mais sofre são as pessoas comuns.
          </TextBlock>
        </Section>

        <Section id="s6" title="Vídeo Explicativo">
          <TextBlock>Um vídeo simples explicando melhor o conflito:</TextBlock>

          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_TBmvegNu-I"
              title="Vídeo explicando o conflito"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Section>

      </main>
    </>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      {children}
    </section>
  )
}

function ImageBlock({ src, alt }) {
  return <img src={src} className={styles.sectionImg} alt={alt} />
}

function TextBlock({ children }) {
  return <p className={styles.textBlock}>{children}</p>
}
