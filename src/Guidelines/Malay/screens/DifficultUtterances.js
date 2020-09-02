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
            <PageContentHeader currentPage="longform Malay" />
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
                <p className={styles.block_1153}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_1154}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_1155}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_1156}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_1157}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_1158}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_1159}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_1160}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <p className={styles.block_1163}>
                  <span className={styles.text_4}>Correct: amoral </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>a- amoral </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1164}>
                  <span className={styles.text_4}>
                    Correct: tiada kenaikan{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>ti- tiada kenaikan </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1165}>
                  <span className={styles.text_4}>
                    Correct: tulisan Imlan Adabi{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    tulis tulisan imlan adabi{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1166}>
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <p className={styles.block_1167}>
                  Correct: tulis- [pause] tulisan Imlan Adabi
                </p>
                <p className={styles.block_1168}>
                  Correct: Tunjukkan cuaca di Kuala Lumpur.
                </p>
                <p className={styles.block_1169}>
                  Tunjukkan cuaca di Kuala Lumpur.
                </p>
                <p className={styles.block_1170}>
                  Correct: Bagaimana cara berpolitik orang
                </p>
                <p className={styles.block_1171}>
                  Melayu? berpolitik orang Melayu
                </p>
                <p className={styles.block_1172}>
                  Explanation: If the repeated phrase is part of
                </p>
                <p className={styles.block_1173}>
                  the sentence that just happens to form a
                </p>
                <p className={styles.block_1174}>
                  sentence on its own (possibly under a different
                </p>
                <p className={styles.block_1175}>
                  interpretation), format it as a fragment. While
                </p>
                <p className={styles.block_1176}>
                  "berpolitik orang Melayu" can be a command, it
                </p>
                <p className={styles.block_1177}>
                  is ambiguous and is most likely a fragment in
                </p>
                <p className={styles.block_1178}>this context.</p>
                <p className={styles.block_1179}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_1180}>
                  <span className={styles.text_4}>
                    Correct: Beliau lahir di Malaysia{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    beliau lahir di malaysi{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1181}>
                  Explanation: Final sound "a" was truncated.
                </p>
                <p className={styles.block_1182}>
                  <span className={styles.text_4}>Correct: kacamata </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>kacamata kam- </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1183}>
                  Explanation: Unclear whether they would have
                </p>
                <p className={styles.block_1184}>said "kami" or "kamu".</p>
                <p className={styles.block_1185}>
                  <span className={styles.text_4}>Correct: Putar lagu. </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>-tar lagu </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1186}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p className={styles.block_318}>
                  Correct: Pak Totok berkata, "Kita perlu segera"
                </p>
                <p className={styles.block_1187}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_1188}>
                  <span className={styles.text_4}>
                    Correct: kamera tiga enam{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>kamera tiga enam- </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_651}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_1189}>● um</p>
                <p className={styles.block_409}>● uh</p>
                <p className={styles.block_1190}>● right</p>
                <p className={styles.block_837}>● you know</p>
                <p className={styles.block_409}>● so</p>
                <p className={styles.block_1191}>● like</p>
                <p className={styles.block_1192}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_1193}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_1118}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_1194}>● ah</p>
                <p className={styles.block_413}>● er</p>
                <p className={styles.block_1195}>● mhm</p>
                <p className={styles.block_1196}>
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
                <p className={styles.block_1201}>
                  Correct: Saya memakai baju merah.
                </p>
                <p className={styles.block_1202}>
                  Incorrect: Saya memakai baju melah.
                </p>
                <p className={styles.block_1203}>
                  Explanation: Person said "r" sound in "merah"
                </p>
                <p className={styles.block_1204}>
                  with "l" sound, but it should still be spelled as
                </p>
                <p className={styles.block_1205}>standard.</p>
                <p className={styles.block_1206}>Correct: Terima kasih.</p>
                <p className={styles.block_1207}>Incorrect: Terima kasyi.</p>
                <p className={styles.block_1208}>
                  Explanation: Person said "terima kasih" in
                </p>
                <p className={styles.block_1209}>
                  Korean accent, using "syi" instead of a "sih"
                </p>
                <p className={styles.block_1210}>sound.</p>
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
