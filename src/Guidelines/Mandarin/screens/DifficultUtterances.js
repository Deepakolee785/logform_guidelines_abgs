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
            <PageContentHeader currentPage="longform Mandarin" />
            <div className="content">
              <p className={'large-heading'}>Difficult utterances</p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={'text'}>
                  If you can't understand part of the audio, transcribe only the
                  part you can understand. For the part you cannot understand,
                  create a separate speaker segment and add the Unintelligible
                  label as instructed in: Longform generic rules &gt;
                  Unintelligible or foreign or singing.
                </p>
                <p className={'text'}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={'text'}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_221}>Correct: 我是老师</p>
                <p className={styles.block_680}>
                  Explanation: Person says "sh" (final sound "i" was truncated.)
                </p>
                <p className={styles.block_210}>Correct: 他很喜欢吃</p>
                <p className={styles.block_681}>
                  Example audio: " 他很喜欢吃 m "
                </p>
                <p className={styles.block_682}>
                  Explanation: Final sound was truncated. Unclear whether he
                  would have said 面 or 米.
                </p>
                <p className={styles.block_167}>
                  Correct: I live in San Francisco
                </p>
                <p className={styles.block_381}>
                  Example audio: " i live in san francisc "
                </p>
                <p className={styles.block_683}>
                  Explanation: Final sound "o" was truncated.
                </p>
                <p className={styles.block_146}>Correct: chicken pot</p>
                <p className={styles.block_644}>
                  Example audio: " chicken pot pi- "
                </p>
                <p className={styles.block_684}>
                  Explanation: Unclear whether they would have said "pie" or
                  "pies".
                </p>
                <p className={styles.block_685}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_686}>Correct: Xbox 36</p>
                <p className={styles.block_299}>Example audio: " xbox 三六 "</p>
                <p className={styles.block_687}>
                  Explanation: The speaker meant to say 三六零, but is
                  truncated. Transcribe what is uttered.
                </p>
                <p className={styles.block_688}>
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <p className={styles.block_689}>
                  Correct: 搜寻上海的天气。搜寻上海的天气。
                </p>
                <p className={styles.block_690}>
                  Correct: 水立方要怎么去?水立方要怎么去?
                </p>
                <p className={styles.block_248}>
                  Correct: Search for baby foxes. Search for baby foxes.
                </p>
                <p className={styles.block_566}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_691}>
                  <span className={styles.text_4}>um</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>uh </sub>
                  </span>
                </p>
                <p className={styles.block_692}>right</p>
                <p className={styles.block_693}>you know</p>
                <p className={styles.block_694}>so</p>
                <p className={styles.block_620}>like</p>
                <p className={styles.block_695}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_664}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_696}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_4}>ah</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>ermhm </sub>
                  </span>
                </p>
                <p className={styles.block_290}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
                <p className={'text'}>
                  Only transcribe dialectal and foreign loan words that are
                  pronounced in Chinese Mandarin in their most
                  appropriate/often-used form. See wikipedia or other references
                  but note that not all terms are well-accepted. If you have any
                  doubt, skip.
                </p>
                <p className={styles.block_367}>
                  Correct: 拜拜, 嗨, 哈喽, 巴士
                </p>
                <p className={styles.block_700}>
                  Explanation: A word borrowed from English bye-bye, hi, hello,
                  and bus
                </p>
                <p className={styles.block_273}>Correct: 脫口秀</p>
                <p className={styles.block_701}>
                  Explanation: Words borrowed from English "talk show"
                </p>
                <p className={styles.block_702}>
                  Some words are OK to write in several different scripts. If a
                  transcription exists and
                </p>
                <p className={styles.block_703}>
                  is correct, stay with the script given in the transcription.
                  If not sure, use Chinese scripts.
                </p>
                <p className={styles.block_489}>Correct: 新之城 or 新の城</p>
                <p className={styles.block_596}>
                  Explanation: Name of a shopping mall
                </p>
                <p className={styles.block_704}>
                  Correct: 优之良品 or 优の良品
                </p>
                <p className={styles.block_256}>Explanation: Name of a brand</p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p className={styles.block_210}>Correct: 我是老师。</p>
                <p className={styles.block_458}>
                  Example audio: " wo3 si4 lao3 si1 "
                </p>
                <p className={styles.block_221}>Correct: 水的沸点</p>
                <p className={styles.block_659}>
                  Explanation: shui3 de5 fo2 dian3
                </p>
                <p className={styles.block_706}>Correct: [skip]</p>
                <p className={styles.block_707}>
                  Explanation: [skip] utterance if the speaker is speaking a
                  Taiwanese Southern Min dialect, Cantonese, another dialect
                  (Shanghai, Shandong, Sichuan), or if there is a very heavy
                  accent that makes it hard to determine the dialect. If you are
                  not sure if the audio falls into one of those categories,
                  transcribe the utterance if you can fully understand it.
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
