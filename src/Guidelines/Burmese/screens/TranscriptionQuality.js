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
              <p class="block_216">Transcription quality </p>
              <p class="block_217">
                Comply with the standard rules of the writing system.{' '}
              </p>
              <p class="block_218">Typo </p>
              <p class="block_219">
                A typo results in the unintentional creation of a non-word.{' '}
              </p>
              <p class="block_220">
                <span class="text_4">Correct: </span>
                <span class="text_5">နလ င ဘ </span>
              </p>
              <p class="block_221">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">နလ ူင ဘ </span>
              </p>
              <p class="block_222">Explanation: Please make sure to type </p>
              <p class="block_223">correctly. </p>
              <p class="block_224">
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".{' '}
              </p>
              <p class="block_225">
                <span class="text_4">Correct: </span>
                <span class="text_5">ရ ပ စ န ဆ င တ ကမယ ။ </span>
              </p>
              <p class="block_226">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ရ ပဇ န ဆ င တ ကမယ ။ </span>
              </p>
              <p class="block_227">
                Explanation: Certain words spell differently than{' '}
              </p>
              <p class="block_228">
                their pronunciation. Please make sure you're{' '}
              </p>
              <p class="block_229">using the right spelling. </p>
              <p class="block_230">
                <span class="text_4">Correct: </span>
                <span class="text_5">သစ လမ က လ ပ ။ </span>
              </p>
              <p class="block_231">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သစ လန က လ ပ ။ </span>
              </p>
              <p class="block_232">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">သစ လမ က လ ပ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_233">Explanation: Pay attention to homonyms. </p>
              <p class="block_234">Guess the most likely spelling given the </p>
              <p class="block_235">context. </p>
              <p class="block_236">Context error </p>
              <p class="block_237">
                A context error occurs when a real word is used incorrectly or
                when the incorrect form of a word is used. This includes
                homophones and punctuation, among other things.{' '}
              </p>
              <p class="block_238">
                <span class="text_4">Correct: </span>
                <span class="text_5">င က ပ ရ က တ သ တ လ က ။ </span>
              </p>
              <p class="block_239">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">င က ပ ရ က တ သ ပ လ က ။ </span>
              </p>
              <p class="block_240">
                <span class="text_4">Correct: </span>
                <span class="text_5">င အ တ ပ လ က ပ ။ </span>
              </p>
              <p class="block_241">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">င အ ပ ပ လ က ပ ။ </span>
              </p>
              <p class="block_242">
                <span class="text_4">Explanation: Here, " </span>
                <span class="text_5">င အ တ </span>
                <span class="text_4">" is a meaningful </span>
              </p>
              <p class="block_243">
                <span class="text_4">word in this context, while " </span>
                <span class="text_5">င အ ပ </span>
                <span class="text_4">" may not </span>
              </p>
              <p class="block_244">make much sense. Guess the most likely </p>
              <p class="block_245">spelling given the context. </p>
              <p class="block_246">Added or missing words </p>
              <p class="block_247">
                Do not transcribe words that are not spoken, even if they are
                obviously intended by the speaker. Avoid putting words in the
                speaker's mouth. However, do transcribe implied times and units
                of currency.{' '}
              </p>
              <p class="block_248">
                <span class="text_4">Correct: </span>
                <span class="text_5">ပန က ဝတ မ န သ ကည ရ အ င ။ </span>
              </p>
              <p class="block_249">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ပန က ဝတ မ န ပ ရ င သ ကည ရ အ င ။ </span>
              </p>
              <p class="block_250">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ပန က ဝတ မ န သ ကည ရ အ င </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_251">
                <span class="text_4">
                  Explanation: Do not add the omitted "{' '}
                </span>
                <span class="text_5">ပ ရ င </span>
                <span class="text_4">". </span>
              </p>
              <p class="block_252">
                <span class="text_4">Correct: Kyat </span>
                <span class="text_5">၅၅၀၀၀ ဆ တ သ က လ တစ ဗ အတ က </span>
              </p>
              <p class="block_253">ဈ မ က ဘ လ ။ </p>
              <p class="block_254">
                <span class="text_4">Incorrect: Kyat </span>
                <span class="text_5">င သ င င ထ င ဆ တ </span>
              </p>
              <p class="block_255">သ က လ တစ ဗ အတ က ဈ မ က ဘ လ ။ </p>
              <p class="block_256">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">
                  င သ င ခ ဆ တ သ က လ တစ ဗ ဖ ဆ ဈ မ က ဘ လ{' '}
                </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_257">
                Transcribe all words spoken, even if they are not intended by
                the speaker. For interjections and non-speech vocalizations,
                refer to Agreed Spelling &gt; Interjections and Difficult
                Utterances &gt; Hesitations and Truncations.{' '}
              </p>
              <p class="block_258">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဇ တ က ထ မ ဇ တ လ က အ လ </span>
              </p>
              <p class="block_259">
                <span class="text_5">ဇ တ လ က လ ပ တ ဘယ သ မ လ </span>
                <span class="text_4">? </span>
              </p>
              <p class="block_260">Explanation: Speaker clearly corrected </p>
              <p class="block_261">
                <span class="text_4">themselves after mistakenly saying "</span>
                <span class="text_5">ဇ တ လ က </span>
                <span class="text_4">". </span>
              </p>
              <p class="block_262">
                <span class="text_4">Correct: </span>
                <span class="text_5">စ မ ပ ပ ရင ဟ လ စတ တ </span>
              </p>
              <p class="block_263">သ ကည မယ န ။ </p>
              <p class="block_264">
                Explanation: Speaker thinks out loud by saying{' '}
              </p>
              <p class="block_265">
                <span class="text_4">"</span>
                <span class="text_5">ဟ လ</span>
                <span class="text_4">". </span>
              </p>
              <p class="block_266">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဇ က က ၊ ပစ တ င ထ င ၊ ဖ ဝ ပ ဝယ ခ ။ </span>
              </p>
              <p class="block_267">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဇ က က ၊ ပစ တ င ထ င န ဖ ဝ ပ ဝယ ခ ။ </span>
              </p>
              <p class="block_268">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ဇ က က ပစ တ င ထ င ဖ ဝ ပ ဝယ ခ </span>
              </p>
              <p class="block_269">
                <span class="text_8">" </span>
                <span class="text_9">
                  <sub class="calibre2">
                    Explanation: Burmese can exclude the "
                  </sub>
                </span>
                <span class="text_10">
                  <sub class="calibre2">န </sub>
                </span>
                <span class="text_9">
                  <sub class="calibre2">" when </sub>
                </span>
              </p>
              <p class="block_270">
                <span class="text_4">
                  a series of items are mentioned. Transcribe "
                </span>
                <span class="text_5">န </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_271">only if spoken. </p>
              <p class="block_272">Substitution </p>
              <p class="block_273">Spacing </p>
              <p class="block_274">
                Use only one space between words and sentences.{' '}
              </p>
              <p class="block_275">
                <span class="text_4">Correct: </span>
                <span class="text_5">မနက ဖန န နက ဘယ သ ခ င သလ ။ </span>
              </p>
              <p class="block_276">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">မနက ဖန န နက </span>
                <span class="text_4">_</span>
                <span class="text_5">ဘယ သ ခ င သလ ။ </span>
              </p>
              <p class="block_277">
                <span class="text_4">Correct: </span>
                <span class="text_5">ရ တ ဂ က သ ပ န က တ </span>
              </p>
              <p class="block_278">ပည ထ င စ ရ ပ သ မ စ မယ ။ </p>
              <p class="block_279">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ရ တ ဂ က သ ပ </span>
                <span class="text_4">_ </span>
                <span class="text_5">န က တ </span>
              </p>
              <p class="block_280">ပည ထ င စ ရ ပ သ မ စ မယ ။ </p>
              <p class="block_281">
                For most types of punctuation, do not put a space between the
                preceding word and the punctuation.{' '}
              </p>
              <p class="block_282">
                <span class="text_4">Correct: </span>
                <span class="text_5">န နတ လ ။ </span>
              </p>
              <p class="block_283">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">န နတ လ ။ </span>
              </p>
              <p class="block_284">
                <span class="text_4">Correct: </span>
                <span class="text_5">မမ ဝ ၊ မ တ တ က ပ န ။ </span>
              </p>
              <p class="block_285">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">မမ ဝ ၊ မ တ တ က ပ န ။ </span>
              </p>
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
