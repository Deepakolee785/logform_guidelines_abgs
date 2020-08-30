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
            <PageContentHeader currentPage="longform Burmese" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality </p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.{' '}
              </p>
              <div id="typo">
                <p className={'heading'}>Typo </p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.{' '}
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>နလ င ဘ </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>နလ ူင ဘ </span>
                </p>
                <p className={styles.block_222}>
                  Explanation: Please make sure to type{' '}
                </p>
                <p className={styles.block_223}>correctly. </p>
                <p className={styles.block_224}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".{' '}
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ရ ပ စ န ဆ င တ ကမယ ။ </span>
                </p>
                <p className={styles.block_226}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ရ ပဇ န ဆ င တ ကမယ ။ </span>
                </p>
                <p className={styles.block_227}>
                  Explanation: Certain words spell differently than{' '}
                </p>
                <p className={styles.block_228}>
                  their pronunciation. Please make sure you're{' '}
                </p>
                <p className={styles.block_229}>using the right spelling. </p>
                <p className={styles.block_230}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>သစ လမ က လ ပ ။ </span>
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သစ လန က လ ပ ။ </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>သစ လမ က လ ပ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_233}>
                  Explanation: Pay attention to homonyms.{' '}
                </p>
                <p className={styles.block_234}>
                  Guess the most likely spelling given the{' '}
                </p>
                <p className={styles.block_235}>context. </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error </p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.{' '}
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>င က ပ ရ က တ သ တ လ က ။ </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>င က ပ ရ က တ သ ပ လ က ။ </span>
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>င အ တ ပ လ က ပ ။ </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>င အ ပ ပ လ က ပ ။ </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_4}>Explanation: Here, " </span>
                  <span className={styles.text_5}>င အ တ </span>
                  <span className={styles.text_4}>" is a meaningful </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_4}>
                    word in this context, while "{' '}
                  </span>
                  <span className={styles.text_5}>င အ ပ </span>
                  <span className={styles.text_4}>" may not </span>
                </p>
                <p className={styles.block_244}>
                  make much sense. Guess the most likely{' '}
                </p>
                <p className={styles.block_245}>spelling given the context. </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words </p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.{' '}
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    ပန က ဝတ မ န သ ကည ရ အ င ။{' '}
                  </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>
                    ပန က ဝတ မ န ပ ရ င သ ကည ရ အ င ။{' '}
                  </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ပန က ဝတ မ န သ ကည ရ အ င </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_4}>
                    Explanation: Do not add the omitted "{' '}
                  </span>
                  <span className={styles.text_5}>ပ ရ င </span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.text_4}>Correct: Kyat </span>
                  <span className={styles.text_5}>
                    ၅၅၀၀၀ ဆ တ သ က လ တစ ဗ အတ က{' '}
                  </span>
                </p>
                <p className={styles.block_253}>ဈ မ က ဘ လ ။ </p>
                <p className={styles.block_254}>
                  <span className={styles.text_4}>Incorrect: Kyat </span>
                  <span className={styles.text_5}>င သ င င ထ င ဆ တ </span>
                </p>
                <p className={styles.block_255}>သ က လ တစ ဗ အတ က ဈ မ က ဘ လ ။ </p>
                <p className={styles.block_256}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    င သ င ခ ဆ တ သ က လ တစ ဗ ဖ ဆ ဈ မ က ဘ လ{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_257}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.{' '}
                </p>
                <p className={styles.block_258}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဇ တ က ထ မ ဇ တ လ က အ လ </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_5}>ဇ တ လ က လ ပ တ ဘယ သ မ လ </span>
                  <span className={styles.text_4}>? </span>
                </p>
                <p className={styles.block_260}>
                  Explanation: Speaker clearly corrected{' '}
                </p>
                <p className={styles.block_261}>
                  <span className={styles.text_4}>
                    themselves after mistakenly saying "
                  </span>
                  <span className={styles.text_5}>ဇ တ လ က </span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_262}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>စ မ ပ ပ ရင ဟ လ စတ တ </span>
                </p>
                <p className={styles.block_263}>သ ကည မယ န ။ </p>
                <p className={styles.block_264}>
                  Explanation: Speaker thinks out loud by saying{' '}
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>ဟ လ</span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_266}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    ဇ က က ၊ ပစ တ င ထ င ၊ ဖ ဝ ပ ဝယ ခ ။{' '}
                  </span>
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>
                    ဇ က က ၊ ပစ တ င ထ င န ဖ ဝ ပ ဝယ ခ ။{' '}
                  </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    ဇ က က ပစ တ င ထ င ဖ ဝ ပ ဝယ ခ{' '}
                  </span>
                </p>
                <p className={styles.block_269}>
                  Explanation: Burmese can exclude the " န " when a series of
                  items aare mentioned Transcribe "န" only if spoken.
                </p>
              </div>
              <div id="substitution">
                <p className={styles.block_272}>Substitution </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing </p>
                <p className={'text'}>
                  Use only one space between words and sentences.{' '}
                </p>
                <p className={styles.block_275}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    မနက ဖန န နက ဘယ သ ခ င သလ ။{' '}
                  </span>
                </p>
                <p className={styles.block_276}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မနက ဖန န နက </span>
                  <span className={styles.text_4}>_</span>
                  <span className={styles.text_5}>ဘယ သ ခ င သလ ။ </span>
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ရ တ ဂ က သ ပ န က တ </span>
                </p>
                <p className={styles.block_278}>ပည ထ င စ ရ ပ သ မ စ မယ ။ </p>
                <p className={styles.block_279}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ရ တ ဂ က သ ပ </span>
                  <span className={styles.text_4}>_ </span>
                  <span className={styles.text_5}>န က တ </span>
                </p>
                <p className={styles.block_280}>ပည ထ င စ ရ ပ သ မ စ မယ ။ </p>
                <p className={styles.block_281}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.{' '}
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>န နတ လ ။ </span>
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>န နတ လ ။ </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>မမ ဝ ၊ မ တ တ က ပ န ။ </span>
                </p>
                <p className={styles.block_285}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မမ ဝ ၊ မ တ တ က ပ န ။ </span>
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
