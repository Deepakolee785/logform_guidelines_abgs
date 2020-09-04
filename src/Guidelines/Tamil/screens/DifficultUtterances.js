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
            <PageContentHeader currentPage="longform Tamil" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances</p>
              <p className={'text'}>
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={'text'}>
                  If you can't understand part of the audio, transcribe only the
                  part you can understand. For the part you cannot understand,
                  create a separate speaker segment and add the Unintelligible
                  label as instructed in: Longform generic rules &gt;
                  Unintelligible or foreign or singing.
                </p>
                <p className={styles.block_378}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>

                <p className={'heading'}>Things to ignore</p>
                <p className={'text'}>
                  Do not transcribe filler words unless intended by the speaker
                  to be transcribed. Never lengthen them.
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: இ உஙகள ஸமாரடேபானா? </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>இ உஙகள அ </span>
                </p>
                <p className={styles.block_291}>
                  <span className={styles.text_5}>ஸமாரடேபானா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "அ" is an example of a filler word and should not be
                    transcribed.
                  </span>
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: நஙகள னரகள எனறால. </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ஹம நஙகள னரகள </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_5}>எனறால </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: அவன ெசானனான, "ஓ" </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>அவன ெசானனான ஓஓஓ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : இநத வழக ல, ேபசசாளர ேநாககத டன "ஒெஹா" என னார. ஆகயால அைத
                    "ஒெஹா" என ெமா ெபயரத ளள .
                  </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : அவர எனனணா அப றம க ம ஆரவமாக இ நதார.{' '}
                  </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>அவர எனனணா அப றம </span>
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_5}>க ம ஆரவமாக இ நதார </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_300}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "அப றம" ஒ நிரப வாரதைதயாய இ நதா ம ேபசசாளர{' '}
                  </span>
                </p>
                <p className={styles.block_301}>
                  ேநாகக டன ரினதால அைத ெமா ெபயரகக ேவண ம
                </p>
                <p className={styles.block_302}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>um </span>
                </p>
                <p className={styles.block_304}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>uh </span>
                </p>
                <p className={styles.block_305}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>right </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>you know </span>
                </p>
                <p className={styles.block_304}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>so </span>
                </p>
                <p className={styles.block_306}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_18}>like </span>
                  <span className={styles.text_19}></span>
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>
                  Hesitations truncations and repetitions
                </p>
                <p className={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <p className={styles.block_308}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ட ெபரிய </span>
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ட ெபரிய </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " - </span>
                  <span className={styles.text_5}>ட ெபரிய </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : " " ஒ வாரதைத அலலாதல, இநத தவறான ெதாடககதைத ெமா ெபயரகக
                    ேவணடாம.
                  </span>
                </p>
                <p className={styles.block_312}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஐஸ ஐஸ ரம </span>
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ஐஸ ரம </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஐஸ</span>
                  <span className={styles.text_3}>- </span>
                  <span className={styles.text_5}>ஐஸ ரம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_314}>
                  If a speaker repeats part of the end of a sentence, add ending
                  punctuation before the repeated phrase. Do not include ending
                  punctuation after the repeated phrase (unless the repeated
                  part is a complete sentence).
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE </span>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : என ெசல ேபான எஙேக? என ெசல{' '}
                  </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_16}>AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>என ெசல ேபான எஙேக என </span>
                  <span className={styles.text_14}>ேபான </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_5}>ெசல ேபான </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : என ெசல ேபான எஙேக என ெசல{' '}
                  </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "என ெசல ேபான" க ன ேபான?{' '}
                  </span>
                </p>
                <p className={styles.block_318}>
                  நி ததற ைய ெமா ெபயரத உளள . கவனிகக ம, "என ெசல ேபான" ஒ வாககயம
                  இலலாததால அதரக ன நி ததற ேசரகக ேவணடாம.
                </p>
                <p className={styles.block_319}>
                  If a very small part of a word (at most one syllable) has been
                  cut off, and you know what the word is supposed to be,
                  transcribe the entire word.
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான ட ல இ க ேறன </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நான ட ல இ க - </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நான ட ல </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>நான ட ல இ க </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : கைட ல "ேறன" ஒ எ த மட ம ெவடடபபடடதால, வாரதைதைய ெமா ெபயரகக ம.
                  </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: கமல ஹாசன படம </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>மல ஹாசன படம </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : த ல உளள "க" ெவடடபபடடா ம அைத ேசரத ழ வாரதைதைய எ த ம.
                  </span>
                </p>
                <p className={styles.block_319}>
                  If you are not sure what the word should be, do not transcribe
                  the word at all. Do not put punctuation after words that have
                  been cut off.
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: பசைச </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>பசைச மா </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : கைட ல " " ெவடடபபட ளள . அநத வாரதைத "மா " அலல ேவர எதாவதாக ம
                    இ கக வாயப உளளதால அைத ெமா ெபயரகக ேவணடாம.
                  </span>
                </p>
                <p className={styles.block_319}>
                  If a quotation is cut off in the middle, use an end quotation
                  mark anyway.
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : னா ெசானனாள, "நாம ேபாகேவ"{' '}
                  </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>னா ெசானனாள நாம </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_5}>ேபாகேவ </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>: ேபசசாளரின ேமறேகாள </span>
                </p>
                <p className={styles.block_322}>ண ககபபட நதா ம ேமறேகாள</p>
                <p className={styles.block_323}>
                  கைள ேசரத எ த ம. "நாம ேபாகேவ" ஒ ைமயான வாக யம அலலாததால இதறக ர
                  ளளி ேசரகக டா .
                </p>
                <p className={styles.block_324}>
                  If a speaker repeats a word five times or less, transcribe
                  each repetition (without fillers). But if a word is repeated
                  more than five times, skip the prompt.
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : நான ஒ ைட வாஙக வாஙக ேவண ம.{' '}
                  </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : நான ஒ ைட வாஙக மம வாஙக ேவண ம.{' '}
                  </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    நான ஒ ைட வாஙக மம வாஙக ேவண ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ேபசசாளர "வாஙக" இ ைர ெசானனதால அைத இ ைர ெமா ெபயரகக ம.
                  </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: [skip] </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>வணககம வணககம </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_5}>
                    வணககம வணககம வணககம வணககம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_331}>
                  Transcribe only numbers that you hear even if the speaker
                  didn't finish saying the entire number.
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 207 </span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 270 </span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>இ ஏ </span>
                  <span className={styles.text_3}>- " </span>
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ேபசசாளர "இ ற எ ப ேபர" எனறார, ஆனால ைமகேராஃேபானில "இ ஏ " என
                    ப ெசயதார. நஙகள ேகடடைத மட ம எ ஙகள.
                  </span>
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
                <p className={'text'}>
                  Only transcribe foreground speech. A user's speech may go from
                  the foreground to the background based on the volume of their
                  speech and who they are speaking to.
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: ரனஹா </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ரனஹா நஙகள </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_5}>
                    வாரதைதைய ெசால ஙகள அ ேத ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : " ரனஹா" வாரதைத சததமாக{' '}
                  </span>
                </p>
                <p className={styles.block_341}>
                  றபப ற . த ளள ேபச ைறவான சததத ல றபப ற . இநத னனணி உைரைய எ த
                  ேவணடாம.
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ேசலத ல அ ண ஐஸ ரம கைடைய ேத . நாம அங தாேன ேபா ேறாம?
                  </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ேபசசாளரின தல வாக யம ெதாைலேப டம ேபசபப ற . அவர இரணடாவ வாக யம
                    மறெறா நப டன ேபசபப ற . ஆனால அ சததமாக இ க ற . அதனால அ எ தபப ம.
                  </span>
                </p>
                <p className={styles.block_344}>
                  If one person clearly speaks in the foreground and someone
                  speaks in the background, transcribe the foreground speaker
                  and ignore the rest.
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: த ழநாட ற வ </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>த ழநாட ற வ இலைல </span>
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_5}>அ இந யா ல உளள </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_347}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>: இரணடாவ ேபசசாளர </span>
                </p>
                <p className={styles.block_348}>
                  னனணி ல இ க றார அவர ேபசைச எழத ேவணடாம.
                </p>
                <p className={styles.block_349}>
                  If two people take turns speaking, are not speaking at the
                  same time, and are both in the foreground at approximately the
                  same volume, transcribe the speech of both speakers as
                  different sentences. Separate different speakers' sentences
                  with end punctuation.
                </p>
                <p className={styles.block_350}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: ந வ றாயா? ஆமா. </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ந வ றாயா ஆமா </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_351}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>: ேபசசாளரகள இ வ ம </span>
                </p>
                <p className={styles.block_352}>
                  ன றமாக ேப றாரகள. இ வரின ேபசைச ம நி ததற கள உபெயா த எ த ம.
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ஐஸ ரம. ஆனால எனக ஸஸா ேவண ம.{' '}
                  </span>
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஐஸ ரம ஆனால எனக </span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_5}>ஸஸா ேவண ம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ஐஸ ரம ஒ ைமயான வாக யம இலைல எனறா ம, இரண{' '}
                  </span>
                </p>
                <p className={styles.block_357}>
                  ேபசசாளரின ேபசைச ரிகக ந ல ளளி உபெயா கக ம.
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : நஙகள நனறாக இ க ரகளா? மம. அ ைம!{' '}
                  </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    நஙகள நனறாக இ க ரகளா மம அ ைம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ேபச இரண ேபசசாளரகளின இைடேய நடக ற . இரணைட ம நி ததற கள உபெயா
                    த எ த ம.
                  </span>
                </p>
                <p className={styles.block_361}>
                  If one person clearly speaks in the foreground and someone
                  interrupts at the same volume with a brief (less than a
                  second) overlapping speech segment, transcribe the main
                  speaker and ignore the rest.
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : நலல படம இலல? எனக ம ப ம பாகக ம.{' '}
                  </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    நலல படம இலல ஆமா எனக ம ப ம பாகக ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : தல ேபசசாளர ேப ெகாண இ க ம ேபாேத இரணடாவ ேபசசாளர ஆமா என க
                    றார. இைத ெமா ெபயரகக ேவணடாம.
                  </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : நஙகள உணைம ைலேய நிறதைதப பற கவைலபப ரகளா? அ எநத நிறமாக ம இ கக
                    ம, அலலவா? ம.
                  </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    நஙகள உணைம ைலேய நிறதைதப பற கவைலபப ரகளா{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>அ எநத நிறமாக ம இ கக </span>
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_5}>ம அலலவா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>இலைல ம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_370}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ஒ ேபசசாளர ேப ெகாண க ம ேபாேத, மறெறா ேபசசாளர "இலைல" என க
                    டடார. இநத "இலைல" ைய ெமா ெபயரகக ேவணடாம.
                  </span>
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : இ அவசரமா? நான இைத பற ஏதாவ ெசயய ேவண ம.{' '}
                  </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    இ அவசரமா நில நான இைத பற ஏதாவ ெசயய ேவண ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ஒ ேபசசாளர "அ அவசரமா?" என ேப கெகாண க மேபா , மறெறா ேபசசாளர
                    "நில" என
                  </span>
                </p>
                <p className={styles.block_374}>
                  க டடார. இநத "நில" ஐ ெமா ெபயரகக ேவணடாம.
                </p>
                <p className={styles.block_375}>
                  If there are two or more people speaking, one talking to the
                  device and the other not, transcribe only the speaker speaking
                  to the device.
                </p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
                <p className={'text'}>
                  Do not skip audio that contains foreign words. First indicate
                  whether it contains English or another language, then
                  transcribe the utterance according to the following rules.
                </p>
                <p className={'bold-heading'}>English</p>
                <p className={styles.block_220}>
                  Please transliterate all English media titles.
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான ேசாகேகாஸ ம ேறன. </span>
                </p>
                <p className={styles.block_222}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நான Chocos ம ேறன. </span>
                </p>
                <p className={styles.block_223}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான ஜ ெடனச ம ேறன. </span>
                </p>
                <p className={styles.block_224}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : நான Judi Dench ம ேறன.{' '}
                  </span>
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான ேசப ஆப ம ேறன. </span>
                </p>
                <p className={styles.block_226}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : நான Shape of You ம ேறன.{' '}
                  </span>
                </p>
                <p className={styles.block_227}>Keep URLs in Latin script.</p>
                <p className={styles.block_228}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: www.google.co.in </span>
                </p>
                <p className={styles.block_229}>
                  Transcribe English companies in English. Do not transliterate.
                </p>
                <p className={styles.block_230}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ேயா Facebook இல உளள .{' '}
                  </span>
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ேயா ஃேபஸ க ல உளள . </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "Facebook" ஒ ஆங ல நி வனம எனேவ லத ன எ த கைளப பயனப த இைத ஆங
                    லத ல ெமா ெபயரகக ம.
                  </span>
                </p>
                <p className={styles.block_233}>
                  Below are some common company names that should be transcribed
                  in English with Latin characters
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Apple </span>
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Facebook </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Google </span>
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Instagram </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Netflix </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Skype </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Snapchat </span>
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Twitter </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>WhatsApp </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Yahoo </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>YouTube </span>
                </p>
                <p className={styles.block_244}>
                  Transliterate common English words into your language.
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஹேலா </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: hello </span>
                </p>
                <p className={styles.block_247}>
                  Use the spelling "Ok" for the phrase "Ok Google", as well as
                  related phrases like "Ok Google Now" and "Ok Glass". For all
                  other cases, transcribe the word as "ஓேக".
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: Ok Google </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: Okay Google. </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : "Ok" appears before "Google", it is spelled "Ok" and not
                    "okay".
                  </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_6}>C</span>
                  <span className={styles.text_7}>ORRECT</span>
                  <span className={styles.text_6}>: Ok Google Now </span>
                  <span className={styles.text_8}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_8}>
                    : The phrase Ok Google Now is a{' '}
                  </span>
                </p>
                <p className={styles.block_252}>
                  derivation of "Ok Google" and must be transcribed exactly like
                  this.
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: Ok Google, ஸடாரபகஸ. </span>
                </p>
                <p className={styles.block_254}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: Ok Google ஸடாரபகஸ. </span>
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The correct transcription includes a comma after the
                    phrase "Ok Google".
                  </span>
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஓேக, தன . </span>
                </p>
                <p className={styles.block_257}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: Ok தன . </span>
                </p>
                <p className={styles.block_258}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The word "ஓேக" is only transcribed as "Ok" when it appears
                    before "Google".
                  </span>
                </p>
                <p className={styles.block_259}>
                  If the speaker in the audio says an English texting
                  initialism, abbreviation, or acronym, transcribe it in English
                  with lowercase letters.
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: jk, wtf, rofl </span>
                </p>
                <p className={styles.block_261}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: JK, WTF, ROFL </span>
                </p>
                <p className={styles.block_262}>
                  If the speaker in the audio is speaking in English and says a
                  word in your language transliterate it to English.
                </p>
                <p className={styles.block_263}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>
                    : I need a bottle of thenga ennai.{' '}
                  </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : I need a bottle of ேதஙகா எணைண.{' '}
                  </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ேபசசாளர ஆங லத ல ேப றார ஆனால ஒ த ழ வாரதைத{' '}
                  </span>
                </p>
                <p className={styles.block_266}>றார: "ேதஙகாய எணைண". இநத</p>
                <p className={styles.block_267}>
                  வாரதைதைய ஆங லத ல எ த ம. த ழ உபேயா கக ேவணடாம.
                </p>
                <p className={'bold-heading'}>Other foreign languages</p>
                <p className={styles.block_269}>
                  If you hear a foreign word (besides English) that is commonly
                  understood by speakers of your language, transcribe it in your
                  script.
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நமஸகார </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_10}>: नम ार </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : த ழ ேப ம மகக க இ ஒ ெபா வான இந வாரதைத. உஙக க ெதவநகரி எ த
                    ெதரிநதா ம ட இைத த ல ெமா ெபயரகக ம.
                  </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : எனக கசேசாரி சாப ட ேவண ம.{' '}
                  </span>
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_11}>
                    : எனக कचौरी சாப ட ேவண ம.{' '}
                  </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : த ழ ேப ம மகக க இ ஒ ெபா வான இந வாரதைத. உஙக க ெதவநகரி எ த
                    ெதரிநதா ம ட இைத த ல ெமா ெபயரகக ம.
                  </span>
                </p>
                <p className={styles.block_275}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான ட கற கெகாள ேறன. </span>
                </p>
                <p className={styles.block_276}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_11}>
                    : நான 柔術 கற கெகாள ேறன.{' '}
                  </span>
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ட ஒ ஜபபானிய வாரதைதயா ம, ஆனால அ த ழ ேப பவரகளால ரிந ெகாளளபப
                    ற . எனேவ இைத த ல ெமா ெபயரகக ம.
                  </span>
                </p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  If you hear a word with non-standard pronunciation, transcribe
                  the word using the standard spelling according to the Oxford
                  Tamil Dictionary.
                </p>
                <p className={styles.block_280}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: எனன ெசயர? </span>
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: இனனா ெசயர? </span>
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ேபசசாளர ப ர உசசரிப ல "எ" இலலாமல "இ" உபேயா த "இனனா" என
                    ெசானனார. இைதச சரியான உசசரிப ல "கட " என எ த ம.
                  </span>
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: கட </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ெகட </span>
                </p>
                <p className={styles.block_285}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ேபசசாளர ெசனைனயர உசசரிப ல "க" இலலாமல "ெக" உபேயா த "ெகட " என
                    ெசானனார. இைதச சரியான உசசரிப ல "கட " என எ த ம.
                  </span>
                </p>
              </div>
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
