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
            <PageContentHeader currentPage="longform Swedish" />
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
                <p className={styles.block_219}>Correct: Det är lugnt.</p>
                <p className={styles.block_220}>Incorrect: Det är lungt.</p>
                <p className={styles.block_221}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_222}>
                  Correct: Göta kanal invigdes hösten 1832.
                </p>
                <p className={styles.block_223}>
                  Incorrect: Göta Kanal invigdes hösten 1832.
                </p>
                <p className={styles.block_224}>
                  Correct: Så är det inte enligt Domstolsverkets
                </p>
                <p className={styles.block_225}>statistik.</p>
                <p className={styles.block_226}>
                  Incorrect: Så är det inte enligt domstolsverkets
                </p>
                <p className={styles.block_227}>statistik.</p>
                <p className={styles.block_153}>
                  Correct: Vi plockade blåsippor.
                </p>
                <p className={styles.block_228}>
                  Incorrect: Vi plockade Blåsippor.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_231}>Correct: Snart är det jul.</p>
                <p className={styles.block_232}>
                  Incorrect: Snart är det hjul.
                </p>
                <p className={styles.block_233}>Correct: De gick ditåt.</p>
                <p className={styles.block_234}>Incorrect: Dem gick ditåt.</p>
                <p className={styles.block_235}>Correct: Det är Davids bok.</p>
                <p className={styles.block_236}>
                  Incorrect: Det är David's bok.
                </p>
                <p className={styles.block_237}>
                  Explanation: This kind of use of apostrophes is
                </p>
                <p className={styles.block_238}>
                  an Anglicism and should only occur in English
                </p>
                <p className={styles.block_239}>
                  proper names such as "McDonald's".
                </p>
                <p className={styles.block_240}>
                  Correct: Det var kandidat nummer sex idé.
                </p>
                <p className={styles.block_241}>
                  Incorrect: Det var kandidat nummer sexs idé.
                </p>
                <p className={styles.block_242}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_243}>Correct: Skriv gärna det.</p>
                <p className={styles.block_244}>Incorrect: Skriv hjärna det.</p>
                <p className={styles.block_245}>
                  Correct: Jag ser inga skäl till det.
                </p>
                <p className={styles.block_152}>
                  Incorrect: Jag ser inga själ till det.
                </p>
                <p className={styles.block_246}>Correct: Hon fick värkar.</p>
                <p className={styles.block_247}>Incorrect: Hon fick verkar.</p>
                <p className={styles.block_248}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_249}>
                  Correct: Vi gick hem till han.
                </p>
                <p className={styles.block_250}>
                  Incorrect: Vi gick hem till honom.
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>vi gick hem till han </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_252}>
                  Correct: Hon körde på en träd.
                </p>
                <p className={styles.block_253}>
                  Incorrect: Hon körde på ett träd.
                </p>
                <p className={styles.block_254}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>hon körde på en träd </span>
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
                <p className={styles.block_257}>
                  <span className={styles.text_4}>
                    Correct: Jag vill gå och se nya X-Men-filmen{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Do not add the omitted articles
                  </span>
                </p>
                <p className={styles.block_258}>"den" and "the".</p>
                <p className={styles.block_259}>
                  <span className={styles.text_4}>
                    Correct: De kostar 29,90 kr.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    de kostar tjugonio och nittio{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_260}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_261}>
                  Correct: Youtube Youtube Youtube
                </p>
                <p className={styles.block_262}>
                  Correct: Sju sjösjuka sjömän sjömän på det
                </p>
                <p className={styles.block_263}>sjunkande skeppet Shanghai.</p>
                <p className={styles.block_264}>
                  <span className={styles.text_4}>
                    Correct: Hur mycket blåbär björnbär har vi?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker clearly corrected{' '}
                  </span>
                </p>
                <p className={styles.block_265}>themselves after "blåbär".</p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={'text'}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_268}>
                  Correct: Min katt heter Morris.
                </p>
                <p className={styles.block_269}>
                  Incorrect: Min hatt heter Morris.
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>min katt heter morris </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_273}>
                  Correct: Vilket är Sveriges högsta berg?
                </p>
                <p className={styles.block_274}>
                  Incorrect: Vilket är Sveriges _högsta berg?
                </p>
                <p className={styles.block_275}>
                  Correct: Jag tror det. Låt oss försöka.
                </p>
                <p className={styles.block_276}>
                  Incorrect: Jag tror det. _Låt oss försöka.
                </p>
                <p className={styles.block_277}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_278}>Correct: Kommer du?</p>
                <p className={styles.block_279}>Incorrect: Kommer du ?</p>
                <p className={styles.block_280}>Correct: Håll käften!</p>
                <p className={styles.block_281}>Incorrect: Håll käften !</p>
                <p className={styles.block_282}>
                  Correct: Hej, jag vill påminna er om att det är
                </p>
                <p className={styles.block_283}>
                  o.s.a. till festen nu på lördag.
                </p>
                <p className={styles.block_284}>
                  Incorrect: Hej, jag vill påminna er om att det är o
                </p>
                <p className={styles.block_285}>
                  . s . a . till festen nu på lördag.
                </p>
                <p className={styles.block_286}>
                  Explanation: No spaces between periods in
                </p>
                <p className={styles.block_287}>abbreviations.</p>
                <p className={styles.block_288}>
                  Treat colon and semicolons as you do ordinary punctuation
                  (period or comma) when it comes to spacing, but do not use
                  capitals after (except for in quoted speech - see the
                  subsection on colon and quotation). For quotation marks, put a
                  space before the beginning of the quote, and one after the end
                  of the quote if the text doesn't end there. Never put space at
                  the beginning and end of the sentence/phrase inside of the
                  quote.
                </p>
                <p className={styles.block_289}>
                  Correct: Antonio sa: "Jag älskar dig."
                </p>
                <p className={styles.block_290}>
                  Incorrect: Antonio sa:" Jag älskar dig. "
                </p>
                <p className={styles.block_291}>
                  Explanation: In the counter example colon
                </p>
                <p className={styles.block_292}>
                  wasn't treated as "ordinary punctuation" and
                </p>
                <p className={styles.block_293}>
                  there were spaces at the end and beginning
                </p>
                <p className={styles.block_294}>inside the quote.</p>
                <p className={styles.block_295}>
                  Correct: Översätt "hund" till japanska.
                </p>
                <p className={styles.block_296}>
                  Incorrect: Översätt "hund"till japanska.
                </p>
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
