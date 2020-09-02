import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../../Marathi/Wrapper'
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
            <PageContentHeader currentPage="longform Marathi" />
            <div className="content text">
              <p class="block_215">Transcription quality</p>
              <p class="block_216">
                The following general rules must be obeyed at all times when
                transcribing.
              </p>
              <p class="block_217">Typo</p>
              <p class="block_218">
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p class="block_219">
                For English proper nouns that must be transcribed in Latin
                script, please use proper capitalization.
              </p>
              <p class="block_220">
                Include ending punctuation at the end of sentences, unless it
                would contradict a rule in these guidelines.
              </p>
              <p class="block_221">
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.
              </p>
              <p class="block_222">
                Do not correct the grammar of the speakers in the audio.
                Transcribe what they say.
              </p>
              <p class="block_223">
                Do not transcribe words that the speaker does not say, unless it
                would contradict a rule in these guidelines.
              </p>
              <p class="block_224">
                Transcribe all words the speaker says, even if the speaker did
                not mean to say them.
              </p>
              <p class="block_225">
                <span class="text_4">
                  Use only one space between words and sentences.{' '}
                </span>
                <span class="text_5">Foreign language </span>
              </p>
              <p class="block_226">
                Do not skip audio that contains foreign words. First indicate
                whether it contains English or another language, then transcribe
                the utterance according to the following rules.
              </p>
              <p class="block_227">English</p>
              <p class="block_228">
                Please transliterate all English media titles.
              </p>
              <p class="block_229">Correct: मला गम ऑफ ो बघायला आवडत</p>
              <p class="block_230">
                Incorrect: मला Game of Thrones बघायला आवडत.
              </p>
              <p class="block_231">
                Explanation: "Game of Thrones" is an English
              </p>
              <p class="block_232">TV show title, so transliterate the name.</p>
              <p class="block_233">Correct: ड िपट हा च गला अ भन ी आह</p>
              <p class="block_234">Incorrect: Brad Pitt हा च गला अ भन ी आह.</p>
              <p class="block_235">Explanation: "Brad Pitt" is an American</p>
              <p class="block_236">celebrity, so transliterate his name.</p>
              <p class="block_237">Correct: शप ऑफ य ह नवीन गाण आह.</p>
              <p class="block_238">Incorrect: Shape of You ह नवीन गाण आह.</p>
              <p class="block_239">
                Explanation: "Shape of You" is an English song,
              </p>
              <p class="block_240">so transliterate the name.</p>
              <p class="block_241">Keep URLs in Latin script.</p>
              <p class="block_242">Correct: www.google.com.in</p>
              <p class="block_243">
                Always transcribe the phrase "Ok Google" in Latin script, as
                well as related phrases like "Ok Google Now", "Ok Glass" and
                "Hey Google". For all other cases, transliterate the words
                "okay" and "hey" into Devanagari.
              </p>
              <p class="block_244">Correct: Ok Google</p>
              <p class="block_245">Incorrect: Okay Google.</p>
              <p class="block_246">
                Explanation: "Ok" appears before "Google", it is
              </p>
              <p class="block_247">spelled "Ok" and not "okay".</p>
              <p class="block_248">
                <span class="text_6">Correct: Ok Google Now </span>
                <span class="text_7">
                  Explanation: The phrase Ok Google Now is a{' '}
                </span>
              </p>
              <p class="block_249">derivation of "Ok Google" and must be</p>
              <p class="block_250">transcribed exactly like this.</p>
              <p class="block_251">Correct: Ok Google, नागपर म वातावरण कस</p>
              <p class="block_252">आह?</p>
              <p class="block_253">Incorrect: ओकाय गगळ नागपर म वातावरण कस</p>
              <p class="block_254">आह?</p>
              <p class="block_255">
                Explanation: The correct transcription includes
              </p>
              <p class="block_256">a comma after the phrase "Ok Google" and</p>
              <p class="block_257">does not transliterate "Ok Google" into</p>
              <p class="block_258">Devanagari.</p>
              <p class="block_259">Correct: ओकाय</p>
              <p class="block_260">Incorrect: Ok</p>
              <p class="block_261">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">ओकाय </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_262">
                Explanation: If "okay" is said in any other
              </p>
              <p class="block_263">context, it should be transliterated into</p>
              <p class="block_264">Devanagari.</p>
              <p class="block_265">
                Transcribe English companies in English. Do not transliterate.
              </p>
              <p class="block_266">Correct: याच कारण वत मानकालीन YouTube</p>
              <p class="block_267">समजन</p>
              <p class="block_268">Incorrect: याच कारण वत मानकालीन यौतब समजन</p>
              <p class="block_269">
                Explanation: "YouTube" is an English company,
              </p>
              <p class="block_270">so transcribe it in English using Latin</p>
              <p class="block_271">characters.</p>
              <p class="block_272">
                Below are some common company names that should be transcribed
                in English with Latin characters
              </p>
              <p class="block_273">● Apple</p>
              <p class="block_274">● Facebook</p>
              <p class="block_275">● Instagram</p>
              <p class="block_276">● Netflix</p>
              <p class="block_277">● Skype</p>
              <p class="block_278">● Snapchat</p>
              <p class="block_279">● Twitter</p>
              <p class="block_280">● WhatsApp</p>
              <p class="block_281">● Yahoo</p>
              <p class="block_282">● YouTube</p>
              <p class="block_283">● Google</p>
              <p class="block_284">
                Transliterate common English words into your language.
              </p>
              <p class="block_285">Correct: हलो</p>
              <p class="block_286">Incorrect: hello</p>
              <p class="block_287">Explanation: Use Devanagari characters to</p>
              <p class="block_288">transliterate common English words.</p>
              <p class="block_289">
                If someone says an English texting initialism, abbreviation, or
                acronym, transcribe it in English with lowercase letters.
              </p>
              <p class="block_290">Correct: jk, wtf, lol</p>
              <p class="block_291">Incorrect: JK, WTF, LOL</p>
              <p class="block_292">
                If the speaker in the audio is speaking in English and says a
                word in your language transliterate it to English.
              </p>
              <p class="block_293">
                Correct: I need a recipe for masala cana sundal
              </p>
              <p class="block_294">
                Incorrect: I need a recipe for मसाला चना स ल.
              </p>
              <p class="block_295">
                Explanation: The speaker is speaking in English
              </p>
              <p class="block_296">but says a Marathi word, "मसाला चना स ल"</p>
              <p class="block_297">
                Transliterate the Marathi word into English, do
              </p>
              <p class="block_298">not use Devanagari.</p>
              <p class="block_299">Other foreign languages</p>
              <p class="block_300">
                If you hear a foreign word (besides English) that is commonly
                understood by speakers of your language, transcribe it in your
                script.
              </p>
              <p class="block_301">Correct: बावा</p>
              <p class="block_302">Incorrect: બાવા</p>
              <p class="block_303">
                Explanation: This is a very common Gujarati
              </p>
              <p class="block_304">
                word that most Marathi speakers know. Even if
              </p>
              <p class="block_305">
                you know Gujarati script, transliterate it into
              </p>
              <p class="block_306">Marathi.</p>
              <p class="block_307">Accents</p>
              <p class="block_308">
                If you hear a word with non-standard pronunciation, transcribe
                the word using the standard spelling according to the Oxford
                English Marathi Dictionary.
              </p>
              <p class="block_309">Correct: पाणी</p>
              <p class="block_310">Incorrect: पानी</p>
              <p class="block_311">
                Explanation: Speaker said "पानी", a non-standard
              </p>
              <p class="block_312">
                variant of "पाणी", but it should be spelled as the
              </p>
              <p class="block_313">standard "पाणी".</p>
              <p class="block_314">Correct: सकाळ</p>
              <p class="block_315">Incorrect: सकाल</p>
              <p class="block_316">
                Explanation: Speaker said "सकाल" with a regional
              </p>
              <p class="block_312">
                accent from the south, using "ल" instead of "ळ".
              </p>
              <p class="block_317">Spell it as the standard "सकाळ".</p>
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
