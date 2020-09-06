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
    // 'background-and-foreground-speech',
    // 'foreign-language',
    // 'accents',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Turskish" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances</p>
              <p className={'text'}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
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
                <p className={styles.block_1097}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={'text'}>
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <p className={styles.block_1100}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Bebek filleri ara. Bebek filleri ara.{' '}
                  </span>
                </p>
                <p className={styles.block_1101}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Antalya'da hava durumunu bana göster. Antalya'da hava
                    durumunu bana göster.
                  </span>
                </p>
                <p className={styles.block_1102}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Hangi aletlerle bahçedeki otları temizleyebilirsin?
                    bahçedeki otları temizle
                  </span>
                </p>
                <p className={styles.block_1103}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : If the repeated phrase is part of the sentence that just
                    happens to form a sentence on its own (possibly under a
                    different interpretation), format it as a fragment. While
                    "bahçedeki otları temizle" can be a command, it is ambiguous
                    and is most likely a fragment in this context.
                  </span>
                </p>
                <p className={styles.block_1104}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_1105}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Safranbolu çok güzel bir yerdir.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    safranbol çok güzel bir yerdir{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_1106}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Final sound "u" was truncated.{' '}
                  </span>
                </p>
                <p className={styles.block_1107}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: tavuk suyuna çorba </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    tavuk suyuna çorba kaş-{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_1108}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Unclear whether they would have said "kaşığı" or
                    "kaşıkları".
                  </span>
                </p>
                <p className={styles.block_1109}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Team Fortress video oyunu{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    -eam fortress video oyunu{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_1110}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p className={styles.block_1111}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ahmet dedi, "Biz kesinlikle bunu"{' '}
                  </span>
                </p>
                <p className={styles.block_1112}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_1113}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Xbox üç altı </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>xbox üç altı- </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_1114}>
                  Use the following spellings for filler words or interjections.
                </p>
                <p className={styles.block_1115}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ah </span>
                </p>
                <p className={styles.block_1116}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ay </span>
                </p>
                <p className={styles.block_1117}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Vah vah </span>
                </p>
                <p className={styles.block_1118}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Püf </span>
                </p>
                <p className={styles.block_1119}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Haydi </span>
                </p>
                <p className={styles.block_1120}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ha </span>
                </p>
                <p className={styles.block_1121}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Hı </span>
                </p>
                <p className={styles.block_1122}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>He </span>
                </p>
                <p className={styles.block_1123}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Hey </span>
                </p>
                <p className={styles.block_1124}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>eee </span>
                </p>
                <p className={styles.block_1125}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>hahaha </span>
                </p>
                <p className={styles.block_1126}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Oh </span>
                </p>
                <p className={styles.block_1127}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Tüh </span>
                </p>
                <p className={styles.block_1119}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Yuppi </span>
                </p>
                <p className={styles.block_1117}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Hoppala </span>
                </p>
                <p className={styles.block_1127}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Hişt </span>
                </p>
                <p className={styles.block_1128}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Pişt </span>
                </p>
                <p className={styles.block_168}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_5}>Be </span>
                </p>
                <p className={styles.block_1129}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_1130}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>um </span>
                </p>
                <p className={styles.block_1131}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>uh </span>
                </p>
                <p className={styles.block_1132}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>right </span>
                </p>
                <p className={styles.block_1133}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>you know </span>
                </p>
                <p className={styles.block_1131}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>so </span>
                </p>
                <p className={styles.block_1118}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>like </span>
                </p>
                <p className={styles.block_1134}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_1135}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : I need to get a new um telephone.{' '}
                  </span>
                </p>
                <p className={styles.block_1136}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Do you like it? Mhm. </span>
                </p>
                <p className={styles.block_1137}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ah </span>
                </p>
                <p className={styles.block_1138}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>er </span>
                </p>
                <p className={styles.block_1139}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>mhm </span>
                </p>
                <p className={styles.block_1140}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.
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
