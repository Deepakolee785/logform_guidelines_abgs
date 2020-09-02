import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Malay" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_218}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_219}>
                  Correct: Aku susah sangat nak buka Facebook.
                </p>
                <p className={styles.block_220}>
                  Incorrect: Aku susah sangat nak buka Feisbuk.
                </p>
                <p className={styles.block_221}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_222}>
                  Correct: Kita sering membuat rondaan di
                </p>
                <p className={styles.block_223}>Pahang.</p>
                <p className={styles.block_224}>
                  Incorrect: Kita sering membuat rondaan di
                </p>
                <p className={styles.block_225}>pahang.</p>
                <p className={styles.block_226}>
                  Correct: Kegemilangan kerajaan Melayu Melaka
                </p>
                <p className={styles.block_227}>memuncak pada kurun ke-15.</p>
                <p className={styles.block_228}>
                  Incorrect: Kegemilangan Kerajaan Melayu
                </p>
                <p className={styles.block_229}>
                  Melaka memuncak pada kurun ke-15.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_232}>
                  Correct: Produksi filem ini cuba bermain
                </p>
                <p className={styles.block_233}>dengan emosi audiens.</p>
                <p className={styles.block_234}>
                  Incorrect: Produksi filem ini cuba bermain
                </p>
                <p className={styles.block_235}>dengan emosi audien.</p>
                <p className={styles.block_236}>
                  Correct: Kamus Inggeris-Melayu Dewan
                </p>
                <p className={styles.block_237}>
                  Incorrect: Kamus Inggeris Melayu Dewan
                </p>
                <p className={styles.block_238}>
                  Correct: Ubat ini sesuai untuk anak-anak
                </p>
                <p className={styles.block_239}>berusia tiga tahun ke bawah.</p>
                <p className={styles.block_240}>
                  Incorrect: Ubat ini sesuai untuk anak anak
                </p>
                <p className={styles.block_241}>berusia tiga tahun ke bawah.</p>
                <p className={styles.block_242}>
                  Explanation: Use a hyphen for plurals and
                </p>
                <p className={styles.block_243}>reduplications.</p>
                <p className={styles.block_244}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_245}>
                  Correct: Erra mengaitkan dirinya dengan
                </p>
                <p className={styles.block_246}>golongan VIP.</p>
                <p className={styles.block_240}>
                  Incorrect: Erra mengaitkan dirinya dengan
                </p>
                <p className={styles.block_247}>gulungan VIP.</p>
                <p className={styles.block_248}>
                  Explanation: The correct spelling is "golongan",
                </p>
                <p className={styles.block_249}>
                  even if the speaker pronounced it "gulungan".
                </p>
                <p className={styles.block_250}>
                  Correct: Tidak ada masa depan untuk tinggal di
                </p>
                <p className={styles.block_251}>Perak.</p>
                <p className={styles.block_252}>
                  Incorrect: Tidak ada massa depan untuk tinggal
                </p>
                <p className={styles.block_253}>di Perak.</p>
                <p className={styles.block_254}>
                  In some cases, the speaker's pronunciation of a word can
                  differ from its standard pronunciation or spelling. In such a
                  case, stick to the standard spelling of the word.
                </p>
                <p className={styles.block_255}>
                  Correct: Bank keluar duit palsu?
                </p>
                <p className={styles.block_256}>
                  Incorrect: Bank keluar duet palsu?
                </p>
                <p className={styles.block_257}>
                  Explanation: Even if the speaker pronounced it
                </p>
                <p className={styles.block_258}>
                  "duet", stick to the correct spelling "duit".
                </p>
                <p className={styles.block_259}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_260}>
                  Correct: Itu kucing mati dilanggar lori.
                </p>
                <p className={styles.block_261}>
                  Incorrect: Kucing it mati dilanggar lori.
                </p>
                <p className={styles.block_262}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    kucing mati dilanggar lori{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_263}>
                  Correct: Abang saya memiliki dua rumah
                </p>
                <p className={styles.block_264}>banglo.</p>
                <p className={styles.block_265}>
                  Incorrect: Abang saya memiliki dua buah rumah
                </p>
                <p className={styles.block_266}>banglo.</p>
                <p className={styles.block_267}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    abang saya memiliki dua{' '}
                  </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_1}>rumah banglo </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_271}>
                  Correct: Jika tidak dirawat mungkin ianya akan
                </p>
                <p className={styles.block_272}>lumpuh.</p>
                <p className={styles.block_273}>
                  Explanation: Do not add the preposition "pada".
                </p>
                <p className={styles.block_274}>
                  Correct: Ada orang salah guna kononnya bayar
                </p>
                <p className={styles.block_275}>RM2,000.</p>
                <p className={styles.block_276}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ada orang salah guna </span>
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_1}>
                    kononnya bayar dua ribu{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_4}>
                    Correct: Set alarm 4:00.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>set alarm empat kosong </span>
                </p>
                <p className={styles.block_279}>
                  <span className={styles.text_1}>kosong </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_280}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_281}>
                  Correct: YouTube YouTube YouTube
                </p>
                <p className={styles.block_282}>
                  Correct: Pihak bank telah menggantikan wang
                </p>
                <p className={styles.block_283}>kertas tas tas tas.</p>
                <p className={styles.block_284}>
                  Correct: Aku harap korang faham apa kenapa
                </p>
                <p className={styles.block_285}>aku delete friend request.</p>
                <p className={styles.block_286}>
                  Explanation: Speaker clearly corrected
                </p>
                <p className={styles.block_287}>themselves after "apa".</p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={'text'}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_290}>
                  Correct: Para penumpang menganggap
                </p>
                <p className={styles.block_291}>
                  perkahwinan itu lucu, unik tapi juga romantis.
                </p>
                <p className={styles.block_292}>
                  Incorrect: Para hadirin menganggap
                </p>
                <p className={styles.block_293}>
                  perkahwinan itu lucu, unik tapi juga romantis.
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    para penumpang menganggap{' '}
                  </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_1}>
                    perkahwinan itu lucu unik tapi juga romantis{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_298}>
                  Correct: Gulai ikan itu kau hidangkan kepada
                </p>
                <p className={styles.block_299}>tetamu kita.</p>
                <p className={styles.block_300}>
                  Incorrect: Gulai ikan itu kau hidangkan kepada
                </p>
                <p className={styles.block_301}>tetamu _kita.</p>
                <p className={styles.block_302}>
                  Correct: Bagi acara palang, ahli gimnastik itu
                </p>
                <p className={styles.block_303}>
                  perlu berpaut pada palang besi dengan kuatnya.
                </p>
                <p className={styles.block_304}>
                  Incorrect: Bagi acara palang, _ahli gimnastik itu
                </p>
                <p className={styles.block_305}>
                  perlu berpaut pada palang besi dengan kuatnya.
                </p>
                <p className={styles.block_306}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_307}>
                  Correct: Adakah sama akardengan rotan?
                </p>
                <p className={styles.block_308}>
                  Incorrect: Adakah sama akardengan rotan ?
                </p>
                <p className={styles.block_309}>
                  Correct: Tak usah kamu menipu lagi!
                </p>
                <p className={styles.block_310}>
                  Incorrect: Tak usah kamu menipu lagi !
                </p>
                <p className={styles.block_311}>
                  Correct: Tan Sri Datuk Amar Dr. P. Ramlee
                </p>
                <p className={styles.block_312}>
                  terpilih sebagai 10 calon terakhir bagi program
                </p>
                <p className={styles.block_313}>Anak Gemilang Malaysia.</p>
                <p className={styles.block_314}>
                  Incorrect: Tan Sri Datuk Amar Dr . P . Ramlee
                </p>
                <p className={styles.block_315}>
                  terpilih sebagai 10 calon terakhir bagi program
                </p>
                <p className={styles.block_316}>Anak Gemilang Malaysia .</p>
                <p className={styles.block_317}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_318}>
                  Correct: Ayah berkata, "Jagalah kesihatanmu."
                </p>
                <p className={styles.block_319}>
                  Incorrect: Ayah berkata, " Jagalah kesihatanmu.
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_7}>" </span>
                  <span className={styles.text_8}>
                    <sub className={styles.calibre2}>
                      Correct: Terjemahkan "bulan" ke dalam bahasa
                    </sub>
                  </span>
                </p>
                <p className={styles.block_321}>Korea.</p>
                <p className={styles.block_322}>
                  Incorrect: Terjemahkan "bulan"ke dalam bahasa
                </p>
                <p className={styles.block_323}>Korea.</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: '1rem',
  },
  rightNav: {
    position: 'fixed',
    top: '5rem',
    right: '2rem',
    [theme.breakpoints.down('md')]: {
      right: '0.4rem',
      fontSize: '0.75rem',
    },
  },
}))
