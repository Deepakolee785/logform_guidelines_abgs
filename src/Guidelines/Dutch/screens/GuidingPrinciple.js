import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import styles from '../css/styles.module.css'
import Wrapper from '../Wrapper'

const GuidingPrinciplesUK_UA = () => {
  const classes = useStyles()
  const headingIds = [
    'difficult-utterance',
    'aggreed-spelling',
    'punctuation',
    'format',
  ]
  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Dutch" />
            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content text">
              <p className={'large-heading'}>
                Transcription guiding principles
              </p>
              <p className={'text'}>
                This document summarizes the guiding principles for certain
                types of phrases, that are transcribed in ways that conflict
                with standard grammar rules for transcription language. For
                language specific transcription, follow the language specific
                written domain convention.
              </p>
              <div id="difficult-utterance">
                <p className={'heading'}>Difficult utterances</p>
                <p className={'text'}>
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or different language varieties.
                </p>
                <p className={styles.block_4}>Skipping a prompt</p>
                <p className={styles.block_5}>
                  ● If you can't understand part of the audio, transcribe only
                  the part you can understand. For the part you cannot
                  understand, create a separate speaker segment and add the
                  Unintelligible label.
                </p>
                <p className={styles.block_6}>
                  ● For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
                <p className={styles.block_7}>Hesitations and truncations</p>
                <p className={styles.block_8}>
                  ● If a very small part of a word (at most one syllable) has
                  been cut off, and you know what the word is supposed to be,
                  transcribe the entire word. If you are not sure what the word
                  should be, do not transcribe the word at all. Do not put
                  punctuation after words that have been cut off.
                </p>
                <p className={styles.block_9}>
                  ● If a quotation is cut off in the middle, use an end
                  quotation mark anyway.
                </p>
                <p className={styles.block_10}>
                  ● Transcribe only numbers that you hear even if the speaker
                  didn't finish saying the entire number.
                </p>
                <p className={styles.block_11}>Accents</p>
                <p className={styles.block_12}>
                  ● If you hear a word with non-standard pronunciation,
                  transcribe the word using the standard spelling
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Example Audio: </span>
                  <span className={styles.text_}>where is dat </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Correct: </span>
                  <span className={styles.text_}>Where is that? </span>
                </p>
              </div>
              <div id="aggreed-spelling">
                <p className={'heading'}>Agreed spelling</p>
                <p className={'text'}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper names.
                </p>
                <p className={styles.block_17}>Spelling out</p>
                <p className={styles.block_18}>
                  ● If a word is spelled out, write it with spaces in between.
                  This rule does not apply to acronyms, URLs, or email
                  addresses.
                </p>
                <p className={styles.block_19}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Example Audio: </span>
                  <span className={styles.text_}>
                    how do you get to c o s t c o{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Correct: </span>
                  <span className={styles.text_}>
                    How do you get to c o s t c o?{' '}
                  </span>
                </p>
                <p className={styles.block_21}>Interjections</p>
                <p className={styles.block_22}>
                  ● Transcribe words representing laughter or other non speech
                  vocalizations. Some of these words might be:
                </p>
                <p className={styles.block_23}>
                  ○ huh, woah, okay, yep, uh-huh, mhm, nah
                </p>
                <p className={styles.block_24}>
                  ○ This list is not exhaustive of all true interjections.
                </p>
                <p className={styles.block_25}>
                  ● Annotate laughter that is included within speech.
                </p>
                <p className={styles.block_26}>Proper names</p>
                <p className={styles.block_27}>
                  ● For proper names, always use the official spelling and
                  punctuation.
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Example Audio: </span>
                  <span className={styles.text_}>will i am </span>
                </p>
                <p className={styles.block_29}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Correct: </span>
                  <span className={styles.text_}>will.i.am </span>
                </p>
                <p className={styles.block_30}>
                  ● If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_31}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Example Audio: </span>
                  <span className={styles.text_}>mcdonald </span>
                </p>
                <p className={styles.block_32}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Correct: </span>
                  <span className={styles.text_}>MacDonald </span>
                </p>
                <p className={styles.block_33}>Brand and product</p>
                <p className={styles.block_34}>
                  ● Format brand and company names as officially formatted
                </p>
                <p className={styles.block_35}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Example Audio: </span>
                  <span className={styles.text_}>
                    the team is sponsored by united healthcare{' '}
                  </span>
                </p>
                <p className={styles.block_36}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Correct: </span>
                  <span className={styles.text_}>
                    The team is sponsored by UnitedHealthcare.{' '}
                  </span>
                </p>
                <p className={styles.block_37}>Media title</p>
                <p className={styles.block_38}>
                  ● Write media titles as they are most commonly written.
                </p>
                <p className={styles.block_39}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Example Audio: </span>
                  <span className={styles.text_}>
                    screenshots of call of duty black ops two{' '}
                  </span>
                </p>
                <p className={styles.block_40}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Correct: </span>
                  <span className={styles.text_}>
                    screenshots of Call of Duty: Black Ops 2{' '}
                  </span>
                </p>
                <p className={styles.block_41}>Multiple spellings</p>
                <p className={styles.block_42}>
                  ● If you hear a word that does not sound like a standard word
                  of your language because there is a small sound change (i.e.
                  accent, speech errors, speech impairment, etc.), transcribe
                  the intended word.
                </p>
                <p className={styles.block_43}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Example Audio: </span>
                  <span className={styles.text_}>
                    where is the nearest liberry{' '}
                  </span>
                </p>
                <p className={styles.block_44}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Correct: </span>
                  <span className={styles.text_}>
                    Where is the nearest library?{' '}
                  </span>
                </p>
                <p className={styles.block_45}>
                  ● If you hear a word that does not sound like a standard word
                  of your language, but it is obviously based on real words,
                  suffixes, prefixes, infixes or circumfixes, transcribe as is.
                </p>
                <p className={styles.block_46}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Correct: </span>
                  <span className={styles.text_}>interpretate </span>
                </p>
                <p className={styles.block_47}>
                  ● If you hear a word that does not sound like a standard word
                  of your language because it appears to be nonsense, first
                  search for the word in Google. If there is a clear candidate,
                  transcribe that word. If there is not a clear candidate, but
                  it is easy to spell and articulated clearly, transcribe it
                  anyway. If there is no clear candidate and it is not easy to
                  spell, create a separate speaker segment and add the
                  Unintelligible label.
                </p>
                <p className={styles.block_48}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Correct: </span>
                  <span className={styles.text_}>Souk Abdali </span>
                </p>
                <p className={styles.block_49}>
                  <span className={styles.text_}>○ </span>
                  <span className={styles.text_1}>Explanation: </span>
                  <span className={styles.text_}>
                    User says Souk Abdali. Transcriber searches “sukabdali”,
                    finds correct results. Transcribe Souk Abdali.
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Guiding Principles"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default GuidingPrinciplesUK_UA

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
