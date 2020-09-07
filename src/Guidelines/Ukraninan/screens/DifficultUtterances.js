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
            <PageContentHeader currentPage="longform Ukraninan" />
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
                <p className={styles.block_1264}>
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
                <p className={styles.block_1267}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : знайти дитячий магазин іграшок знайти дитячий магазин
                    іграшок
                  </span>
                </p>
                <p className={styles.block_1268}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Покажи мені погоду в Києві. Покажи погоду в Києві.
                  </span>
                </p>
                <p className={styles.block_1269}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Які інструменти потрібні для обробки саду? обробляти сад
                  </span>
                </p>
                <p className={styles.block_1270}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : If the repeated phrase is part of the sentence that just
                    happens to form a sentence on its own (possibly under a
                    different interpretation), format it as a fragment. While
                    "обробляти сад" can be a command, it is ambiguous and is
                    most likely a fragment in this context.
                  </span>
                </p>
                <p className={styles.block_1271}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_1272}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Я живу в Сан-Франциско{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    я живу в сан-франциск-{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1273}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Final sound "o" was truncated.{' '}
                  </span>
                </p>
                <p className={styles.block_1274}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Де </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>де телефо- </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1275}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Unclear whether they would have said "телефон",
                    "телефонний" or another form of the word.
                  </span>
                </p>
                <p className={styles.block_1276}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : де купити мобільний телефон{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    де купити мобільний телеф-{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1277}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The context clarifies which form of the truncated word is
                    used, so the word should be completed. However, do not add
                    any end punctuation - this could be the end of the sentence,
                    but it's also possible that the speaker intended to continue
                    the sentence.
                  </span>
                </p>
                <p className={styles.block_1278}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : фільм Одного разу в Америці.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    -ільм одного разу в америці{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1279}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Initial "ф" was cut off.{' '}
                  </span>
                </p>
                <p className={styles.block_1280}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p className={styles.block_1281}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Олеся сказала: "А давай ми"{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    oлеся сказала а давай ми-{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1282}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : End of quote was truncated. Include closing quotation
                    mark.
                  </span>
                </p>
                <p className={styles.block_1283}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_1284}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : пісня Океану Ельзи дев'ять один{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    пісня океану ельзи дев'ять{' '}
                  </span>
                </p>
                <p className={styles.block_1285}>
                  <span className={styles.text_12}>один </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1286}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Speaker was going to say "дев'ять один один" but was cut
                    off.
                  </span>
                </p>
                <p className={styles.block_1287}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_1288}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>um </span>
                </p>
                <p className={styles.block_1095}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>uh </span>
                </p>
                <p className={styles.block_1096}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>right </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>you know </span>
                </p>
                <p className={styles.block_1097}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>so </span>
                </p>
                <p className={styles.block_1107}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>like </span>
                </p>
                <p className={styles.block_1289}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_1290}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : I need to get a new um telephone.{' '}
                  </span>
                </p>
                <p className={styles.block_1291}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Do you like it? Mhm. </span>
                </p>
                <p className={styles.block_1292}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ah </span>
                </p>
                <p className={styles.block_1293}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>er </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>mhm </span>
                </p>
                <p className={styles.block_1294}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.
                </p>
              </div>
              <div id="background-and-foreground-speech">
                {' '}
                <p className={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
                <p className={'text'}>
                  If a foreign-language word is usually written in Latin letters
                  when used in Ukrainian, transcribe it with Latin letters. If
                  you are unsure which is more common, use Latin letters.
                  However, if the speaker adds a Ukrainian affixation to a
                  foreign word, transcribe it using the Cyrillic alphabet. If
                  the word is not in the reference dictionary, use the spelling
                  with the most Google search results to determine the correct
                  transliteration.
                </p>
                <p className={styles.block_1298}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Bluetooth </span>
                </p>
                <p className={styles.block_1299}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : завантажити по блютузу{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker conjugates the word{' '}
                  </span>
                </p>
                <p className={styles.block_1300}>
                  "Bluetooth" as a native word, so transliterate it.
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Вона працює в компанії Google.{' '}
                  </span>
                </p>
                <p className={styles.block_1299}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Вона працює в Гуглі. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker conjugates the word{' '}
                  </span>
                </p>
                <p className={styles.block_1301}>
                  "Google" as a native word, so transliterate it.
                </p>
                <p className={styles.block_1302}>
                  Use the Cyrillic spellings of foreign personal names. To
                  determine the correct spelling, you may refer to news
                  articles, official websites, and Wikipedia. Foreign bands and
                  music media titles should be written using the original
                  spelling.
                </p>
                <p className={styles.block_1303}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Де живе Дженніфер Еністон?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Foreign personal name, so use{' '}
                  </span>
                </p>
                <p className={styles.block_1304}>Cyrillic spelling.</p>
                <p className={styles.block_1305}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : фільм з Г'ю Джекменом{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Foreign personal name, so use{' '}
                  </span>
                </p>
                <p className={styles.block_1306}>Cyrillic spelling.</p>
                <p className={styles.block_1307}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: пісні гурту Maroon 5 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Foreign band name, so use Latin{' '}
                  </span>
                </p>
                <p className={styles.block_1308}>spelling.</p>
                <p className={styles.block_1309}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: текст пісні Umbrella </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Foreign music media title, so use{' '}
                  </span>
                </p>
                <p className={styles.block_1310}>Latin spelling.</p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p className={styles.block_1313}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: що </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>шо </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1314}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: ні </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>нє </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1315}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: гарний </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>ґарний </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1316}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: слухати музику </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>слухать музику </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1317}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: скачати онлайн гру </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>скачати онлайн ігру </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1318}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: домовитись </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>дамовитись </span>
                  <span className={styles.text_9}>" </span>
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
