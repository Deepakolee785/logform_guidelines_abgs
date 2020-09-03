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
            <PageContentHeader currentPage="longform Swedish" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances </p>
              <p className={'text'}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={'text'}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
                </p>
                <p className={styles.block_1327}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_1328}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_1329}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_1330}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_1331}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_1332}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_1333}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_1334}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={styles.block_1335}>Hesitations and truncations</p>
                <p className={styles.block_1336}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <p className={styles.block_1337}>
                  <span className={styles.text_4}>Correct: impopulär </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>impop- impopulär </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_952}>
                  <span className={styles.text_4}>Correct: större än </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>stö- större än </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1338}>
                  <span className={styles.text_4}>
                    Correct: stor större än{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    stor- [pause] större än{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1339}>
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <p className={styles.block_1340}>
                  Correct: Sök efter rävungar. Sök efter rävungar.
                </p>
                <p className={styles.block_1341}>
                  Correct: Visa mig vädret i Skellefteå. Visa mig
                </p>
                <p className={styles.block_375}>Skellefteås väder.</p>
                <p className={styles.block_1342}>
                  Correct: Vilka verktyg använder man för att
                </p>
                <p className={styles.block_1343}>rensa ogräs? rensa ogräs</p>
                <p className={styles.block_1344}>
                  Explanation: If the repeated phrase is part of
                </p>
                <p className={styles.block_1345}>
                  the sentence that just happens to form a
                </p>
                <p className={styles.block_1346}>
                  sentence on its own (possibly under a different
                </p>
                <p className={styles.block_1347}>
                  interpretation), format it as a fragment. While
                </p>
                <p className={styles.block_1348}>
                  "weed a garden" can be a command, it is
                </p>
                <p className={styles.block_1349}>
                  ambiguous and is most likely a fragment in this
                </p>
                <p className={styles.block_1350}>context.</p>
                <p className={styles.block_1351}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_1352}>
                  <span className={styles.text_4}>
                    Correct: Jag bor i San Francisco{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>jag bor i san francisc </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1353}>
                  Explanation: Final sound "o" was truncated.
                </p>
                <p className={styles.block_1354}>
                  <span className={styles.text_4}>Correct: smultron och </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>smultron och jordgu </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1355}>
                  Explanation: Unclear whether they would have
                </p>
                <p className={styles.block_1356}>
                  said "jordgubb" or "jordgubbar".
                </p>
                <p className={styles.block_1357}>
                  <span className={styles.text_4}>
                    Correct: Team Fortress spel{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>-eam fortress spel </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1358}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p className={styles.block_1359}>
                  Correct: Erika sa: "Vi borde verkligen"
                </p>
                <p className={styles.block_1360}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_1361}>
                  <span className={styles.text_4}>Correct: Xbox tre sex </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>xbox tre sex- </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_688}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_1362}>● um</p>
                <p className={styles.block_1363}>● uh</p>
                <p className={styles.block_1364}>● right</p>
                <p className={styles.block_1365}>● you know</p>
                <p className={styles.block_1363}>● so</p>
                <p className={styles.block_1366}>● like</p>
                <p className={styles.block_1367}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_1368}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_1369}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_1370}>● ah</p>
                <p className={styles.block_1371}>● er</p>
                <p className={styles.block_1372}>● mhm</p>
                <p className={styles.block_1373}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would
                </p>
                <p className={styles.block_1374}>
                  not know this word, use the Foreign Speech label as instructed
                  in: Longform generic rules &gt; Unintelligible or foreign or
                  singing.
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
                <p className={'text'}>
                  Since the use of English phrases and expressions in daily
                  Swedish has become increasingly common, transcribe lines
                  containing (or only consisting of) English words if you can
                  tell what the speaker is saying or trying to say. Also correct
                  any mispronunciations the speaker happens to make here, as
                  long as they aren't too gross.
                </p>
                <p className={styles.block_1377}>
                  Correct: ice bucket challenge
                </p>
                <p className={styles.block_1378}>
                  Incorrect: ajs bukett kärlens
                </p>
                <p className={styles.block_1379}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ice bucket kälens </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1380}>Correct: The Hives</p>
                <p className={styles.block_1381}>Incorrect: de hives</p>
                <p className={styles.block_1382}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>de hajvs </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1383}>
                  If an utterance is in any other foreign language than English,
                  tag with [skip], unless it is an easily identifiable media
                  title or a foreign language phrase commonly understood in the
                  transcription language. Follow Swedish conventions for
                  capitalization and punctuation of media titles.
                </p>
                <p className={styles.block_1384}>
                  <span className={styles.text_4}>
                    Correct: Hasta la vista, baby!{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: This is a very common phrase that
                  </span>
                </p>
                <p className={styles.block_1385}>
                  most people know, spelled as in Spanish but
                </p>
                <p className={styles.block_1386}>
                  only using a Swedish exclamation point.
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_4}>
                    Correct: La vie en rose{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Popular film, follow Swedish{' '}
                  </span>
                </p>
                <p className={styles.block_1387}>
                  conventions for capitalization of foreign media
                </p>
                <p className={styles.block_1388}>titles.</p>
                <p className={styles.block_1389}>
                  <span className={styles.text_4}>
                    Correct: Dragostea din tei{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Popular song, follow Swedish{' '}
                  </span>
                </p>
                <p className={styles.block_1210}>
                  conventions for capitalization of media titles.
                </p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p className={styles.block_1392}>
                  Correct: Jag ska byta lampa.
                </p>
                <p className={styles.block_1393}>
                  Incorrect: Jak ska puta lampa.
                </p>
                <p className={styles.block_1394}>
                  Explanation: Person spoke with an accent, but
                </p>
                <p className={styles.block_533}>
                  the sentence should still be spelled as
                </p>
                <p className={styles.block_1395}>standard.</p>
                <p className={styles.block_1396}>Correct: kedja</p>
                <p className={styles.block_1397}>Incorrect: kädja</p>
                <p className={styles.block_1398}>
                  Explanation: Person said "kedja" with an "ä"
                </p>
                <p className={styles.block_1399}>
                  sound instead of an "e" sound.
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
