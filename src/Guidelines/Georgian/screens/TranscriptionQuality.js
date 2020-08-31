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
            <PageContentHeader currentPage="longform Georgian" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>A typo results in the unintentional</p>
                <p className={styles.block_220}>creation of a non-word.</p>
                <p className={styles.block_221}>
                  Avoid making any typographical errors.
                </p>
                <p className={styles.block_222}>
                  Carefully check your work before marking
                </p>
                <p className={styles.block_223}>items as "complete".</p>
                <p className={styles.block_224}>Correct: მეწვიე ჩემს</p>
                <p className={styles.block_225}>Facebook გვერდზე.</p>
                <p className={styles.block_226}>Incorrect: მეწვიე ჩემს</p>
                <p className={styles.block_227}>Facebok გვერდზე.</p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word
                </p>
                <p className={styles.block_230}>
                  is used incorrectly or when the incorrect
                </p>
                <p className={styles.block_231}>
                  form of a word is used. This includes
                </p>
                <p className={styles.block_232}>
                  homophones and punctuation, among
                </p>
                <p className={styles.block_233}>other things.</p>
                <p className={styles.block_234}>Correct: წიგნი ყდით</p>
                <p className={styles.block_235}>არ განსაჯო.</p>
                <p className={styles.block_236}>Incorrect: წიგნი</p>
                <p className={styles.block_237}>ყდით, არ განსაჯო.</p>
                <p className={styles.block_238}>Explanation: No</p>
                <p className={styles.block_239}>comma needed.</p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={'text'}>Do not transcribe words that are not</p>
                <p className={styles.block_242}>
                  spoken, even if they are obviously
                </p>
                <p className={styles.block_243}>
                  intended by the speaker. Avoid putting
                </p>
                <p className={styles.block_230}>
                  words in the speaker's mouth. However,
                </p>
                <p className={styles.block_244}>
                  do transcribe implied times and units of
                </p>
                <p className={styles.block_245}>currency.</p>
                <p className={styles.block_246}>Correct: ის ცხოვრობს</p>
                <p className={styles.block_247}>საფრანგეთი.</p>
                <p className={styles.block_248}>Incorrect: ის</p>
                <p className={styles.block_249}>ცხოვრობს</p>
                <p className={styles.block_250}>საფრანგეთში.</p>
                <p className={styles.block_251}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ის ცხოვრობს საფრანგეთი"</span>
                </p>
                <p className={styles.block_253}>Correct: 3,49</p>
                <p className={styles.block_254}>ძალიან ბევრია</p>
                <p className={styles.block_255}>შოკოლადისთვის.</p>
                <p className={styles.block_256}>Incorrect: 349 ძალიან</p>
                <p className={styles.block_257}>ბევრია შოკოლადის</p>
                <p className={styles.block_258}>ფილისთვის.</p>
                <p className={styles.block_259}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>სამი და ორმოცდაცხრა </span>
                </p>
                <p className={styles.block_260}>ძალიან ბევრია</p>
                <p className={styles.block_261}>შოკოლადის</p>
                <p className={styles.block_262}>
                  <span className={styles.text_5}>ფილისთვის </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_263}>Explanation: Implied</p>
                <p className={styles.block_264}>currency, add " "</p>
                <p className={styles.block_265}>even though it is not</p>
                <p className={styles.block_266}>spoken.</p>
                <p className={styles.block_267}>
                  Transcribe all words spoken, even if they
                </p>
                <p className={styles.block_268}>
                  are not intended by the speaker. For
                </p>
                <p className={styles.block_269}>interjections and non-speech</p>
                <p className={styles.block_270}>
                  vocalizations, refer to Agreed Spelling &gt;
                </p>
                <p className={styles.block_243}>
                  Interjections and Difficult Utterances &gt;
                </p>
                <p className={styles.block_269}>Hesitations and Truncations.</p>
                <p className={styles.block_271}>Correct: რამდენი</p>
                <p className={styles.block_255}>ჟოლო მოცვია იქ?</p>
                <p className={styles.block_272}>Explanation: Speaker</p>
                <p className={styles.block_273}>clearly corrected</p>
                <p className={styles.block_274}>themselves after</p>
                <p className={styles.block_275}>mistakenly saying</p>
                <p className={styles.block_276}>"ჟოლოს".</p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>Use only one space between words and</p>
                <p className={styles.block_280}>sentences.</p>
                <p className={styles.block_281}>Correct: რომელია</p>
                <p className={styles.block_282}>ყველაზე მაღალი</p>
                <p className={styles.block_283}>შენობა ნიუ-ორკში?</p>
                <p className={styles.block_284}>Incorrect: რომელია</p>
                <p className={styles.block_285}>ყველაზე მაღალი</p>
                <p className={styles.block_286}>შენობა _ნიუ-ორკში?</p>
                <p className={styles.block_287}>Correct: მე ასე</p>
                <p className={styles.block_288}>ვფიქრობ. მოდი</p>
                <p className={styles.block_283}>უბრალოდ ვცადოთ.</p>
                <p className={styles.block_289}>Incorrect: მე ასე</p>
                <p className={styles.block_290}>ვფიქრობ. _მოდი</p>
                <p className={styles.block_291}>უბრალოდ ვცადოთ.</p>
                <p className={styles.block_292}>
                  For most types of punctuation, do not put
                </p>
                <p className={styles.block_293}>
                  a space between the preceding word and
                </p>
                <p className={styles.block_294}>the punctuation.</p>
                <p className={styles.block_295}>Correct: მოდიხარ?</p>
                <p className={styles.block_296}>Incorrect: მოდიხარ ?</p>
                <p className={styles.block_297}>Correct: გამარჯობა,</p>
                <p className={styles.block_298}>ეს არის პროფ. სმიტი.</p>
                <p className={styles.block_299}>Incorrect: გამარჯობა,</p>
                <p className={styles.block_300}>ეს არის პროფ . სმიტი.</p>
                <p className={styles.block_301}>
                  Correct: Social media handles
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
