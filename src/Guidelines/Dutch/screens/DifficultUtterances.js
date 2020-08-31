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
            <PageContentHeader currentPage="longform Dutch" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances</p>
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
                <p className={styles.block_1020}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_1021}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_1022}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_1023}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_1024}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_1025}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_1026}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_1027}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'hedaing'}>Hesitations and truncations</p>
                <p className={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <p className={styles.block_1030}>
                  <span className={styles.text_4}>Correct: groter dan </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>gro- groter dan </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1031}>
                  <span className={styles.text_4}>
                    Correct: groot groter dan{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>groot- groter dan </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1032}>
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <p className={styles.block_1033}>
                  Correct: Laat foto's van katten zien. Laat foto's
                </p>
                <p className={styles.block_1034}>van katten zien.</p>
                <p className={styles.block_828}>
                  Correct: Wat is het weer in Leiden? Wat is het
                </p>
                <p className={styles.block_1035}>weer in Leiden?</p>
                <p className={styles.block_1036}>
                  Correct: Waarmee kun je het beste onkruid
                </p>
                <p className={styles.block_1037}>
                  verdelgen? onkruid verdelgen
                </p>
                <p className={styles.block_1038}>
                  Explanation: If the repeated phrase is part of
                </p>
                <p className={styles.block_1039}>
                  the sentence that just happens to form a
                </p>
                <p className={styles.block_1040}>
                  sentence on its own (possibly under a different
                </p>
                <p className={styles.block_1041}>
                  interpretation), format it as a fragment. While
                </p>
                <p className={styles.block_1042}>
                  "onkruid verdelgen" can be a command, it is
                </p>
                <p className={styles.block_1043}>
                  ambiguous and is most likely a fragment in this
                </p>
                <p className={styles.block_1044}>context.</p>
                <p className={styles.block_1045}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_1046}>
                  <span className={styles.text_4}>
                    Correct: Ik woon in Haarlem{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ik woon in haarle- </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1047}>
                  Explanation: Final sound "m" was truncated.
                </p>
                <p className={styles.block_1048}>
                  <span className={styles.text_4}>Correct: Knorr kip </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>knorr kip t- </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1049}>
                  Explanation: Unclear whether they would have
                </p>
                <p className={styles.block_1050}>
                  said "tandoori" or "teriyaki".
                </p>
                <p className={styles.block_1051}>
                  <span className={styles.text_4}>Correct: 3 op Reis </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>-rie op reis </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1052}>
                  Explanation: Inital "d" was cut off.
                </p>
                <p className={styles.block_1053}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p className={styles.block_1054}>
                  <span className={styles.text_4}>
                    Correct: Erik antwoordde: "We moeten echt"{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    erik antwoordde we moeten{' '}
                  </span>
                </p>
                <p className={styles.block_1055}>
                  <span className={styles.text_1}>echt- </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1056}>
                  Explanation: End of quote was truncated.
                </p>
                <p className={styles.block_1057}>
                  Include closing quotation mark.
                </p>
                <p className={styles.block_1058}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_1059}>
                  <span className={styles.text_4}>
                    Correct: Xbox three six{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>xbox three six- </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_571}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_1060}>● um</p>
                <p className={styles.block_998}>● uh</p>
                <p className={styles.block_1004}>● right</p>
                <p className={styles.block_673}>● you know</p>
                <p className={styles.block_998}>● so</p>
                <p className={styles.block_1061}>● like</p>
                <p className={styles.block_1062}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_1063}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_1064}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_1065}>● ah</p>
                <p className={styles.block_1066}>● er</p>
                <p className={styles.block_859}>● mhm</p>
                <p className={styles.block_1067}>
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
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>

                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p className={styles.block_1072}>Correct: Waar is dat?</p>
                <p className={styles.block_1073}>Incorrect: Waar is da?</p>
                <p className={styles.block_1074}>
                  Explanation: Speaker said "da" instead of "dat",
                </p>
                <p className={styles.block_1075}>
                  but it should be spelled as standard.
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
