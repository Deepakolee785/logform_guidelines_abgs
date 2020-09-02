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
            <PageContentHeader currentPage="longform Mongolian" />
            <div className="content text">
              <p class="block_216">Transcription quality </p>
              <p class="block_217">
                The following general rules must be obeyed at all times when
                transcribing.{' '}
              </p>
              <p class="block_218">Typo </p>
              <p class="block_219">
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".{' '}
              </p>
              <p class="block_220">
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE </span>
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Google </span>
              </p>
              <p class="block_221">
                <span class="text_3">AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">google </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_222">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Goggle </span>
              </p>
              <p class="block_222">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Goolge </span>
              </p>
              <p class="block_223">
                Use proper capitalization for proper nouns, names and titles,
                unless it would contradict a rule in these guidelines.{' '}
              </p>
              <p class="block_224">
                Include ending punctuation at the end of sentences, unless it
                would contradict a rule in these guidelines.{' '}
              </p>
              <p class="block_225">
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.{' '}
              </p>
              <p class="block_226">
                Do not correct the grammar of the speakers in the audio.
                Transcribe what they say.{' '}
              </p>
              <p class="block_227">
                Do not transcribe words that the speaker does not say, unless it
                would contradict a rule in these guidelines.{' '}
              </p>
              <p class="block_228">
                Transcribe all words the speaker says, even if the speaker did
                not mean to say them.{' '}
              </p>
              <p class="block_229">
                Use only one space between words and sentences.{' '}
              </p>
              <p class="block_230">Foreign language </p>
              <p class="block_231">
                Do not skip audio that contains foreign words. First indicate
                whether it contains English or another language, then transcribe
                the utterance according to the following rules.{' '}
              </p>
              <p class="block_232">English </p>
              <p class="block_233">
                Please transliterate all English media titles.{' '}
              </p>
              <p class="block_234">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Би Гэйм оф Трөүнст дуртай. </span>
              </p>
              <p class="block_235">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: би Game of Thrones-т дуртай. </span>
              </p>
              <p class="block_236">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Game of Thrones" is an English TV show title, so please
                  transliterate it.{' '}
                </span>
              </p>
              <p class="block_237">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Брэд Пит хаана төрсөн бэ? </span>
              </p>
              <p class="block_238">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Brad Pitt хаана төрсөн бэ? </span>
              </p>
              <p class="block_239">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Brad Pitt" is an American celebrity, so please
                  transliterate the name into your script.{' '}
                </span>
              </p>
              <p class="block_240">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Би Шэйп оф юүг сонсмоор байна </span>
              </p>
              <p class="block_241">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: би Shape of You-г сонсмоор байна </span>
              </p>
              <p class="block_242">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Shape of You" is an English song, so please transliterate
                  the song into your script.{' '}
                </span>
              </p>
              <p class="block_243">Keep URLs in Latin script. </p>
              <p class="block_244">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: www.google.com </span>
              </p>
              <p class="block_245">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: www.гүүгл.com </span>
              </p>
              <p class="block_246">
                Transcribe English companies in English. Do not transliterate.{' '}
              </p>
              <p class="block_247">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Youtube-г хэн эзэмшдэг вэ? </span>
              </p>
              <p class="block_248">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Ютүбийг хэн эзэмшдэг вэ? </span>
              </p>
              <p class="block_249">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "YouTube" is an English company, so transcribe it in English
                  using Latin characters.{' '}
                </span>
              </p>
              <p class="block_250">
                Below are some common company names that should be transcribed
                in English with Latin characters{' '}
              </p>
              <p class="block_251">● Apple </p>
              <p class="block_252">● Netflix </p>
              <p class="block_253">● Skype </p>
              <p class="block_254">● Snapchat </p>
              <p class="block_255">● WhatsApp </p>
              <p class="block_256">● Yahoo </p>
              <p class="block_257">● YouTube </p>
              <p class="block_258">
                Exception: Transliterate company names if it would be unnatural
                for it to be in English. Refer to the following list for the
                proper spelling of company names.{' '}
              </p>
              <p class="block_259">● Фэйсбүүк </p>
              <p class="block_260">● Инстаграм </p>
              <p class="block_261">● Твиттер </p>
              <p class="block_262">
                Transliterate common English words into your language.{' '}
              </p>
              <p class="block_263">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Хэллөү </span>
              </p>
              <p class="block_264">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Hello </span>
              </p>
              <p class="block_265">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Please transliterate common English words.{' '}
                </span>
              </p>
              <p class="block_266">
                Use the spelling "Ok" for the phrase "Ok Google", as well as
                related phrases like "Ok Google Now" and "Ok Glass". For all
                other cases, transcribe the word as "okay".{' '}
              </p>
              <p class="block_267">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Ok Google </span>
              </p>
              <p class="block_268">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Окэй Google </span>
              </p>
              <p class="block_269">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Ok" appears before "Google", it is spelled "Ok" and not
                  "Окэй".{' '}
                </span>
              </p>
              <p class="block_270">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Ok Google Now </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : The phrase Ok Google Now is a derivation{' '}
                </span>
              </p>
              <p class="block_271">
                of "Ok Google" and must be transcribed exactly like this.{' '}
              </p>
              <p class="block_272">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Ok Google, Tom N Toms хаана байна вэ?{' '}
                </span>
              </p>
              <p class="block_273">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Ok Google Tom N Toms хаана байна вэ?{' '}
                </span>
              </p>
              <p class="block_274">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The correct transcription includes a comma after the phrase
                  "Ok Google".{' '}
                </span>
              </p>
              <p class="block_275">
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">: </span>
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Окей, Дэвид. </span>
              </p>
              <p class="block_276">The word "Окей" is only transcribed as </p>
              <p class="block_277">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Ok, Дэвид. </span>
              </p>
              <p class="block_278">"Ok" when it appears before "Google". </p>
              <p class="block_279">
                If the speaker in the audio is speaking in English and says a
                word in your language transliterate it to English.{' '}
              </p>
              <p class="block_280">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: I need a recipe for khuushuur </span>
              </p>
              <p class="block_281">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: I need a recipe for хуушуур </span>
              </p>
              <p class="block_282">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The speaker is speaking in English but says a Mongolian
                  word, "хуушуур" Transliterate the Mongolian word into English,
                  do not use Mongolian script.{' '}
                </span>
              </p>
              <p class="block_283">Other foreign languages </p>
              <p class="block_284">
                If you hear a foreign word (besides English) that is commonly
                understood by speakers of your language, transcribe it in your
                script.{' '}
              </p>
              <p class="block_285">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Энэ нь кимчи юм. </span>
              </p>
              <p class="block_286">
                <span class="text_13">I</span>
                <span class="text_14">NCORRECT</span>
                <span class="text_15">: Энэ нь 김치 юм. </span>
              </p>
              <p class="block_287">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : This is a very common phrase that most Mongolian speakers
                  know. Even if you know the script of the original language,
                  please transliterate it into Mongolian.{' '}
                </span>
              </p>
              <p class="block_288">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Би оригами сурмаар байна </span>
              </p>
              <p class="block_289">
                <span class="text_13">I</span>
                <span class="text_14">NCORRECT</span>
                <span class="text_13">: Би </span>
                <span class="text_16">折り紙​ </span>
                <span class="text_13">сурмаар байна </span>
              </p>
              <p class="block_290">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : This is a very common word that most Mongolian speakers
                  know. Even if you know the script of the original language,
                  transliterate it into Mongolian.{' '}
                </span>
              </p>
              <p class="block_291">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Миний хүү таэквондогийн ангид явдаг{' '}
                </span>
              </p>
              <p class="block_292">
                <span class="text_13">I</span>
                <span class="text_14">NCORRECT</span>
                <span class="text_15">: Миний хүү 태권도 -н ангид явдаг </span>
              </p>
              <p class="block_287">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : This is a very common phrase that most Mongolian speakers
                  know. Even if you know the script of the original language,
                  please transliterate it into Mongolian.{' '}
                </span>
              </p>
              <p class="block_293">Accents </p>
              <p class="block_294">
                If you hear a word with non-standard pronunciation, transcribe
                the word using the standard spelling according to your
                language's official dictionary.{' '}
              </p>
              <p class="block_295">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: хэр хол вэ? </span>
              </p>
              <p class="block_296">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: хир хол вэ? </span>
              </p>
              <p class="block_297">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Speaker said "хир", a non-standard variant of "хэр", but it
                  should be spelled as the standard "хэр".{' '}
                </span>
              </p>
              <p class="block_298">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Баярлалаа </span>
              </p>
              <p class="block_299">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Баярллаа </span>
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
