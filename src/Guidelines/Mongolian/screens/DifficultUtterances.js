import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const DifficultUtterances = () => {
  const classes = useStyles()

  const headingIds = [
    'skipping-a-prompt',
    'hesitations-and-truncations',
    'background-and-foreground-speech',
    'foreign-language',
    'accents',
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
              <p class="block_300">Difficult utterances </p>
              <p class="block_301">
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.{' '}
              </p>
              <p class="block_302">Things to ignore </p>
              <p class="block_303">
                Do not transcribe filler words unless intended by the speaker to
                be transcribed. Never lengthen them.{' '}
              </p>
              <p class="block_304">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Энэ танай байшин уу? </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">энэ танай ай байшин уу </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_305">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Чи тэгж хэлж байгаа бол </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">
                  [санаа алдах эсвэл уртаар амьсгалах]{' '}
                </span>
              </p>
              <p class="block_306">
                <span class="text_1">чи тэгж хэлж байгаа бол </span>
                <span class="text_">" </span>
              </p>
              <p class="block_307">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Тэр "ах" гэсэн </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">тэр ахххх гэсэн </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_308">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : In this example the speaker intended to say "ах" so it is
                  transcribed as "ах" with only one "х".{' '}
                </span>
              </p>
              <p class="block_309">
                Transcribe any filler words that are applicable and used in the
                target language. Below are examples of filler words in the
                Mongolian language.{' '}
              </p>
              <p class="block_310">● мм </p>
              <p class="block_311">● аа </p>
              <p class="block_312">● тэгэхээр </p>
              <p class="block_313">Hesitations truncations and repetitions </p>
              <p class="block_314">
                If a speaker says only the beginning part of the word,
                transcribe it if it can be considered a word on its own.
                Otherwise do not transcribe the false start.{' '}
              </p>
              <p class="block_315">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: төсөвлөх </span>
              </p>
              <p class="block_316">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: тө төсөвлөх </span>
              </p>
              <p class="block_317">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">тө- төсөвлөх </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_318">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since "тө" is not a word, do no transcribe this false start.{' '}
                </span>
              </p>
              <p class="block_319">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: төсөв төсөвлөх </span>
              </p>
              <p class="block_320">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: төсөвлөх </span>
              </p>
              <p class="block_321">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">төсөв- [түр зогсов] төсөвлөх </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_322">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since "төсөв" is a word on its own it is transcribed before
                  "төсөвлөх" without "\-" or "..."{' '}
                </span>
              </p>
              <p class="block_323">
                If a speaker repeats part of the end of a sentence, add ending
                punctuation before the repeated phrase. Do not include ending
                punctuation after the repeated phrase (unless the repeated part
                is a complete sentence).{' '}
              </p>
              <p class="block_324">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Миний гар утас хаана байна? миний гар утас{' '}
                </span>
              </p>
              <p class="block_325">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Миний гар утас хаана байна миний гар утас?{' '}
                </span>
              </p>
              <p class="block_326">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  миний гар утас хаана байна миний гар утас{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_327">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The ending punctuation is transcribed before the repeated
                  phrase "миний гар утас". Note, "миний гар утас" by itself is
                  not a complete sentence so there is no punctuation after it.{' '}
                </span>
              </p>
              <p class="block_328">
                If a very small part of a word (at most one syllable) has been
                cut off, and you know what the word is supposed to be,
                transcribe the entire word.{' '}
              </p>
              <p class="block_329">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: би Улаанбаатарт амьдардаг </span>
              </p>
              <p class="block_330">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: би Улаанбаатарт амьдарда- </span>
              </p>
              <p class="block_331">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: би Улаанбаатарт </span>
              </p>
              <p class="block_332">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">би улаанбаатарт амьдарда </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_333">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Final "г" was truncated, but since only one letter was cut
                  off, the full word is transcribed with the missing "г".{' '}
                </span>
              </p>
              <p class="block_334">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Багийн фортрес видео тоглоом </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">агийн фортрес видео тоглоом </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_335">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Initial "б" was cut off, but since it is only one letter,
                  the whole word, "багийн" is transcribed with the missing "б"
                  added.{' '}
                </span>
              </p>
              <p class="block_336">
                If you are not sure what the word should be, do not transcribe
                the word at all. Do not put punctuation after words that have
                been cut off.{' '}
              </p>
              <p class="block_337">
                If a quotation is cut off in the middle, use an end quotation
                mark anyway.{' '}
              </p>
              <p class="block_338">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Эрика "Бид үнэхээр тэгэх хэрэгтэй" гэж хэлсэн{' '}
                </span>
              </p>
              <p class="block_339">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  эрика бид үнэхээр тэгэх хэрэгтэй гэж хэлсэн{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_340">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The speaker's quotation of Erica was truncated. Even though
                  the end of the quotation was not recorded, an end quotation
                  mark must be transcribed at the end of the quote. Since "We
                  should totally" is not a complete sentence, it is not
                  transcribed with a period at the end.{' '}
                </span>
              </p>
              <p class="block_341">
                If a speaker repeats a word five times or less, transcribe each
                repetition (without fillers). But if a word is repeated more
                than five times, skip the prompt.{' '}
              </p>
              <p class="block_342">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Би борооны цув авмаар авмаар байна{' '}
                </span>
              </p>
              <p class="block_343">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Би борооны цув авмаар мм авмаар байна{' '}
                </span>
              </p>
              <p class="block_344">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  би борооны цув авмаар мм авмаар байна{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_345">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since speaker said "авмаар" twice, transcribe it twice. Do
                  not include the filler "мм".{' '}
                </span>
              </p>
              <p class="block_346">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: [skip] </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">
                  сайн уу сайн уу сайн уу сайн уу сайн уу{' '}
                </span>
              </p>
              <p class="block_347">
                <span class="text_1">сайн уу </span>
                <span class="text_">" </span>
              </p>
              <p class="block_348">
                Transcribe only numbers that you hear even if the speaker didn't
                finish saying the entire number.{' '}
              </p>
              <p class="block_349">Background and foreground speech </p>
              <p class="block_350">
                Only transcribe foreground speech. A user's speech may go from
                the foreground to the background based on the volume of their
                speech and who they are speaking to.{' '}
              </p>
              <p class="block_351">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: пиранья </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">пиранья энэ үгийг хэлэхэд пиранья </span>
              </p>
              <p class="block_352">
                <span class="text_1">хайж эхэлнэ </span>
                <span class="text_">" </span>
              </p>
              <p class="block_353">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The word "пиранья" is said loudly, in the foreground. The
                  rest of the speech is said in a lower volume in the background
                  to another person. The background speech is not transcribed.{' '}
                </span>
              </p>
              <p class="block_354">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Эрдэнэтээс Хаанбууз олоорой. Бид тийшээ явж байгаа тийм үү?{' '}
                </span>
              </p>
              <p class="block_355">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The speaker's first sentence is spoken to the phone. The
                  second sentence is spoken to another person, but it is still
                  loud, so it is also transcribed.{' '}
                </span>
              </p>
              <p class="block_356">
                If one person clearly speaks in the foreground and someone
                speaks in the background, transcribe the foreground speaker and
                ignore the rest.{' '}
              </p>
              <p class="block_357">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Цэцэрлэг руу явах чиглэл </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">цэцэрлэг руу явах чиглэл үгүй ээ </span>
              </p>
              <p class="block_358">
                <span class="text_1">эрдэнэт байдаг </span>
                <span class="text_">" </span>
              </p>
              <p class="block_359">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The second speaker is in the background, his or her speech
                  is not transcribed.{' '}
                </span>
              </p>
              <p class="block_360">
                If two people take turns speaking, are not speaking at the same
                time, and are both in the foreground at approximately the same
                volume, transcribe the speech of both speakers as different
                sentences. Separate different speakers' sentences with end
                punctuation.{' '}
              </p>
              <p class="block_361">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Ирж байна уу? Тийм ээ. </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">ирж байна уу тийм ээ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_362">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Both speakers are in the foreground so both sentences are
                  transcribed. The speech of the two speakers is separated by
                  punctuation.{' '}
                </span>
              </p>
              <p class="block_363">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">
                  : Мөхөөлдөс. Гэхдээ би пицца хүссэн.{' '}
                </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">мөхөөлдөс гэхдээ би пицца хүссэн </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_364">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Even though "мөхөөлдөс" is not a complete sentence, a period
                  is used in order to separate the speech of the two speakers.{' '}
                </span>
              </p>
              <p class="block_365">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Чи зүгээр үү? Ммхм. Гайхалтай! </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">чи зүгээр үү ммхм гайхалтай </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_366">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The speech alternates between two speakers in the
                  foreground. The speech of both speakers is transcribed,
                  separated by punctuation.{' '}
                </span>
              </p>
              <p class="block_367">
                If one person clearly speaks in the foreground and someone
                interrupts at the same volume with a brief (less than a second)
                overlapping speech segment, transcribe the main speaker and
                ignore the rest.{' '}
              </p>
              <p class="block_368">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Гоё кино байна тийм үү? Би дахиад үзмээр байна.{' '}
                </span>
              </p>
              <p class="block_369">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  гоё кино байна тийм үү ммхан би дахиад үзмээр байна{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_370">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The second speaker interrupts with a brief ммхан while the
                  first speaker is still speaking. The second speaker is not
                  transcribed.{' '}
                </span>
              </p>
              <p class="block_371">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Чи өнгөнд үнэхээр ач холбогдол өгдөг үү? Ямар ч өнгө байж
                  болно тийм үү? Тийм ээ болно.{' '}
                </span>
              </p>
              <p class="block_372">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  чи өнгөнд үнэхээр ач холбогдол өгдөг үү ямар ч өнгө байж болно
                  тийм үү хмм тийм ээ болно{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_373">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : While one speaker was still asking "Чи өнгөнд үнэхээр ач
                  холбогдол өгдөг үү?"; another speaker responded with an
                  overlapping "хмм". The second speaker's "хмм" is not
                  transcribed.{' '}
                </span>
              </p>
              <p class="block_374">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Энэ яаралтай юу? Би энэ талаар ямар нэг юм хийх хэрэгтэй.{' '}
                </span>
              </p>
              <p class="block_375">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  энэ яаралтай юу хүлээгээрэй би энэ талаар ямар нэг юм хийх
                  хэрэгтэй{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_376">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : While one speaker was still asking "Is it urgent?"; another
                  speaker interrupted her with an overlapping "Wait.".The second
                  speaker's "Wait." is not transcribed.{' '}
                </span>
              </p>
              <p class="block_377">
                If there are two or more people speaking, one talking to the
                device and the other not, transcribe only the speaker speaking
                to the device.{' '}
              </p>
              <p class="block_378">Skipping a prompt </p>
              <p class="block_379">
                For Loft 1.0: If you can't understand part of the audio,
                transcribe only the part you can understand. For the part you
                cannot understand, create a separate speaker segment and add the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.{' '}
              </p>
              <p class="block_380">
                For Loft 2.0: Below is a list of reasons to skip the audio that
                may be available for you to choose from. Each contain a
                description of when is an appropriate time to use it.{' '}
              </p>
              <p class="block_381">● No Audio: The audio doesn't load. </p>
              <p class="block_382">
                ● No Sound: The waveform indicates there is audio but I can't
                hear anything.{' '}
              </p>
              <p class="block_383">
                ● Other Locale: All of the speech is in a different language.{' '}
              </p>
              <p class="block_384">
                ● Silent Audio: The entire utterance is silent{' '}
              </p>
              <p class="block_385">
                ● Noisy Audio: The entire utterance is too noisy.{' '}
              </p>
              <p class="block_386">● Other: Other reason (Please explain). </p>
              <p class="block_387">
                For utterances that contain speech that is user-generated,
                pre-recorded, or synthesized, transcribe all of it.{' '}
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Difficult Utterances"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default DifficultUtterances

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
